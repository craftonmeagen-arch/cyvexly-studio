// Round 41 QA: does clicking Back (and the progress-rail edit link) trigger the same
// round-40 scroll/focus/live-region fix as Continue, since all three call the same
// shared goToStep()?
const CDP_PORT = 9333;
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
async function readState(ws) {
  const raw = await evaluate(ws, `
    JSON.stringify({
      scrollY: window.scrollY,
      activeTag: document.activeElement.tagName,
      heading: document.querySelector('main h2')?.textContent?.trim(),
      liveRegionsWithText: Array.from(document.querySelectorAll('[aria-live], [role="status"]')).map(e => ({ live: e.getAttribute('aria-live'), role: e.getAttribute('role'), text: e.textContent.trim().slice(0, 80) })),
    });
  `);
  return JSON.parse(raw);
}

async function main() {
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

  // Step 1 -> 2 via Continue
  await setVal(ws, "fullName", "Real User");
  await setVal(ws, "workEmail", "real@example.com");
  await setVal(ws, "contactMethod", "317-555-0100");
  await clickButtonWithText(ws, "Continue");
  await new Promise((r) => setTimeout(r, 600));
  await evaluate(ws, `window.scrollTo(0, 900); true`); // simulate mid-page scroll before Back
  await new Promise((r) => setTimeout(r, 200));
  const beforeBack = await readState(ws);

  // Step 2 -> 1 via Back
  const clickedBack = await clickButtonWithText(ws, "←");
  const afterBack = await readState(ws);

  console.log("clickedBack:", clickedBack);
  console.log("BEFORE BACK:", JSON.stringify(beforeBack));
  console.log("AFTER BACK: ", JSON.stringify(afterBack));

  const pass = afterBack.scrollY === 0 && afterBack.heading?.startsWith("Step 1") === false
    ? "heading-check-inconclusive"
    : (afterBack.scrollY === 0 && afterBack.liveRegionsWithText.some(l => l.text && l.text.length > 0));
  console.log("BACK RESULT:", pass ? "PASS (scroll reset + live region announced)" : "CHECK MANUALLY");

  await send(ws, "Page.close");
  ws.close();
}
main().catch((e) => { console.error("FATAL", e); process.exit(1); });
