// Round 42 QA:
// (A) Contact form now has a honeypot field (round 42 fix, matching the Planner's
//     existing pattern) -- does filling it actually block submission?
// (B) Planner's existing honeypot -- does filling it actually block submission at
//     step 9 (its "actual submit-blocking behavior has not been live-tested" per
//     round 41's handoff)?
// (C) Long unbroken name / RTL text in the Planner review step's dt/dd rows --
//     any horizontal overflow at a narrow (375px) width?
const CDP_PORT = 9342;
const BASE = "http://localhost:5173";

async function getTargetWsUrl(url) {
  const res = await fetch(`http://localhost:${CDP_PORT}/json/new?${url}`, { method: "PUT" });
  return (await res.json()).webSocketDebuggerUrl;
}
function connect(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    ws.addEventListener("open", () => resolve(ws));
    ws.addEventListener("error", reject);
  });
}
function send(ws, method, params = {}) {
  return new Promise((resolve) => {
    const id = Math.floor(Math.random() * 1e9);
    const handler = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id === id) { ws.removeEventListener("message", handler); resolve(msg.result); }
    };
    ws.addEventListener("message", handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}
async function evaluate(ws, expression) {
  const result = await send(ws, "Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
  return result.result.value;
}
function setVal(ws, id, val) {
  return evaluate(ws, `
    (function() {
      const el = document.getElementById(${JSON.stringify(id)});
      if (!el) return false;
      const proto = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
      Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, ${JSON.stringify(val)});
      el.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    })();
  `);
}
async function clickButtonWithText(ws, text) {
  const box = await evaluate(ws, `
    (function() {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim().startsWith(${JSON.stringify(text)}));
      if (!btn) return null;
      btn.scrollIntoView({ block: 'center', behavior: 'instant' });
      const r = btn.getBoundingClientRect();
      return JSON.stringify({ x: r.x + r.width / 2, y: r.y + r.height / 2 });
    })();
  `);
  if (!box) return false;
  const { x, y } = JSON.parse(box);
  await send(ws, "Input.dispatchMouseEvent", { type: "mousePressed", x, y, button: "left", clickCount: 1 });
  await send(ws, "Input.dispatchMouseEvent", { type: "mouseReleased", x, y, button: "left", clickCount: 1 });
  await new Promise((r) => setTimeout(r, 700));
  return true;
}
async function clickCheckbox(ws, id) {
  await evaluate(ws, `document.getElementById(${JSON.stringify(id)})?.click(); true`);
}

async function testContactHoneypot() {
  const wsUrl = await getTargetWsUrl(BASE + "/contact");
  const ws = await connect(wsUrl);
  await send(ws, "Page.enable");
  await send(ws, "Runtime.enable");
  await send(ws, "Emulation.setDeviceMetricsOverride", { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
  await send(ws, "Page.navigate", { url: BASE + "/contact" });
  await new Promise((r) => setTimeout(r, 900));

  await setVal(ws, "name", "Real Prospect");
  await setVal(ws, "email", "real@example.com");
  await setVal(ws, "message", "We would like a new marketing site.");
  await clickCheckbox(ws, "consent");
  // Fill the honeypot like a bot would (real users never see or tab to this field).
  await setVal(ws, "contact-company-website", "http://spam-bot.example");
  await clickButtonWithText(ws, "Send message");
  const afterHoneypot = await evaluate(ws, `document.body.textContent.includes('Your email app should be open now')`);
  const errorBannerShown = await evaluate(ws, `!!document.querySelector('[role="alert"]')`);

  // Clear the honeypot (simulating a real visitor) and resubmit -- confirm the
  // legitimate path still works and was not accidentally broken by the fix.
  await setVal(ws, "contact-company-website", "");
  await clickButtonWithText(ws, "Send message");
  const afterClean = await evaluate(ws, `document.body.textContent.includes('Your email app should be open now')`);

  await send(ws, "Page.close");
  ws.close();
  return { afterHoneypot, errorBannerShown, afterClean };
}

async function testPlannerHoneypot() {
  const wsUrl = await getTargetWsUrl(BASE + "/start");
  const ws = await connect(wsUrl);
  await send(ws, "Page.enable");
  await send(ws, "Runtime.enable");
  await send(ws, "Emulation.setDeviceMetricsOverride", { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
  await send(ws, "Page.navigate", { url: BASE + "/start" });
  await new Promise((r) => setTimeout(r, 900));
  await evaluate(ws, `window.localStorage.clear(); true`);
  await send(ws, "Page.navigate", { url: BASE + "/start" });
  await new Promise((r) => setTimeout(r, 1000));

  // Step 1
  await setVal(ws, "fullName", "Real Prospect");
  await setVal(ws, "workEmail", "real@example.com");
  await setVal(ws, "contactMethod", "317-555-0100");
  await clickButtonWithText(ws, "Continue");
  // Step 2
  await setVal(ws, "businessDescription", "We sell handmade goods.");
  await clickButtonWithText(ws, "Continue");
  // Step 3: pick a primary goal radio
  await evaluate(ws, `document.querySelector('input[type=radio]')?.click(); true`);
  await clickButtonWithText(ws, "Continue");
  // Step 4: website type radio + one page checkbox
  await evaluate(ws, `document.querySelector('input[type=radio]')?.click(); true`);
  await evaluate(ws, `document.querySelector('input[type=checkbox]')?.click(); true`);
  await clickButtonWithText(ws, "Continue");
  // Step 5: not-sure toggle to skip feature selection validation
  await evaluate(ws, `
    (function(){
      const labels = Array.from(document.querySelectorAll('button, label'));
      const notSure = labels.find(l => l.textContent.includes('Not sure'));
      notSure?.click();
    })(); true
  `);
  await clickButtonWithText(ws, "Continue");
  // Steps 6, 7: no required fields
  await clickButtonWithText(ws, "Continue");
  await clickButtonWithText(ws, "Continue");
  // Step 8: budget + timing radios (first of each group)
  await evaluate(ws, `
    (function(){
      const radios = Array.from(document.querySelectorAll('input[type=radio]'));
      radios[0]?.click();
      const remaining = radios.filter(r => r.name !== radios[0]?.name);
      remaining[0]?.click();
    })(); true
  `);
  await clickButtonWithText(ws, "Continue");

  const heading = await evaluate(ws, `document.querySelector('main h2')?.textContent`);

  // Step 9: fill honeypot, tick both required checkboxes, submit.
  await setVal(ws, "planner-company-website", "http://spam-bot.example");
  await evaluate(ws, `
    (function(){
      document.getElementById('acknowledgeNotQuote')?.click();
      document.getElementById('consent')?.click();
    })(); true
  `);
  await clickButtonWithText(ws, "Submit");
  const afterHoneypot = await evaluate(ws, `document.body.textContent.includes('Your email app should be open now')`);
  const honeypotErrorSet = await evaluate(ws, `true`); // errors state isn't exposed to DOM directly; inferred from status below

  // Clear honeypot, resubmit -- confirm legitimate path still works.
  await setVal(ws, "planner-company-website", "");
  await clickButtonWithText(ws, "Submit");
  const afterClean = await evaluate(ws, `document.body.textContent.includes('Your email app should be open now')`);

  await send(ws, "Page.close");
  ws.close();
  return { heading, afterHoneypot, afterClean };
}

async function testReviewOverflow() {
  const wsUrl = await getTargetWsUrl(BASE + "/start");
  const ws = await connect(wsUrl);
  await send(ws, "Page.enable");
  await send(ws, "Runtime.enable");
  await send(ws, "Emulation.setDeviceMetricsOverride", { width: 375, height: 812, deviceScaleFactor: 1, mobile: true });
  await send(ws, "Page.navigate", { url: BASE + "/start" });
  await new Promise((r) => setTimeout(r, 900));
  await evaluate(ws, `window.localStorage.clear(); true`);
  await send(ws, "Page.navigate", { url: BASE + "/start" });
  await new Promise((r) => setTimeout(r, 1000));

  const longUnbroken = "Supercalifragilisticexpialidociousandalsoaverylongcompanynamewithnospaceswhatsoevertotestforoverflowononehundredandtwentycharactersorso";
  const rtlName = "محمد عبدالله الرشيد والشركة التجارية المحدودة المسؤولية محدودة المسؤولية";

  // Step 1: long unbroken name + long unbroken company name (both flow into
  // review dt/dd rows without spaces to break on).
  await setVal(ws, "fullName", longUnbroken);
  await setVal(ws, "workEmail", "real@example.com");
  await setVal(ws, "contactMethod", "317-555-0100");
  await setVal(ws, "companyName", rtlName + longUnbroken);
  await clickButtonWithText(ws, "Continue");
  await setVal(ws, "businessDescription", "Test.");
  await clickButtonWithText(ws, "Continue");
  await evaluate(ws, `document.querySelector('input[type=radio]')?.click(); true`);
  await clickButtonWithText(ws, "Continue");
  await evaluate(ws, `document.querySelector('input[type=radio]')?.click(); true`);
  await evaluate(ws, `document.querySelector('input[type=checkbox]')?.click(); true`);
  await clickButtonWithText(ws, "Continue");
  await evaluate(ws, `
    (function(){
      const labels = Array.from(document.querySelectorAll('button, label'));
      const notSure = labels.find(l => l.textContent.includes('Not sure'));
      notSure?.click();
    })(); true
  `);
  await clickButtonWithText(ws, "Continue");
  await clickButtonWithText(ws, "Continue");
  await clickButtonWithText(ws, "Continue");
  await evaluate(ws, `
    (function(){
      const radios = Array.from(document.querySelectorAll('input[type=radio]'));
      radios[0]?.click();
      const remaining = radios.filter(r => r.name !== radios[0]?.name);
      remaining[0]?.click();
    })(); true
  `);
  await clickButtonWithText(ws, "Continue");

  const heading = await evaluate(ws, `document.querySelector('main h2')?.textContent`);
  const overflow = await evaluate(ws, `
    JSON.stringify({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      overflowing: document.documentElement.scrollWidth > window.innerWidth,
    })
  `);

  await send(ws, "Page.close");
  ws.close();
  return { heading, overflow: JSON.parse(overflow) };
}

async function main() {
  console.log("=== (A)+(B) Contact honeypot ===");
  console.log(JSON.stringify(await testContactHoneypot(), null, 2));

  console.log("=== (B) Planner honeypot ===");
  console.log(JSON.stringify(await testPlannerHoneypot(), null, 2));

  console.log("=== (C) Review-step long/RTL overflow at 375px ===");
  console.log(JSON.stringify(await testReviewOverflow(), null, 2));
}
main().catch((e) => { console.error("FATAL", e); process.exit(1); });
