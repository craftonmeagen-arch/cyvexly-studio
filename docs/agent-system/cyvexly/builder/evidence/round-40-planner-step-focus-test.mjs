// Round 40 QA: does advancing a Planner step move focus / announce the change to AT users?
const CDP_PORT = 9333;

async function getTargetWsUrl() {
  const res = await fetch(`http://localhost:${CDP_PORT}/json/new?http://localhost:5173/start`, { method: "PUT" });
  const json = await res.json();
  return json.webSocketDebuggerUrl;
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
      if (msg.id === id) {
        ws.removeEventListener("message", handler);
        resolve(msg.result);
      }
    };
    ws.addEventListener("message", handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

async function evaluate(ws, expression) {
  const result = await send(ws, "Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) {
    throw new Error(JSON.stringify(result.exceptionDetails));
  }
  return result.result.value;
}

async function main() {
  const wsUrl = await getTargetWsUrl();
  const ws = await connect(wsUrl);
  await send(ws, "Page.enable");
  await send(ws, "Runtime.enable");
  await send(ws, "DOM.enable");

  // Fresh draft each run
  await send(ws, "Page.navigate", { url: "http://localhost:5173/start" });
  await new Promise((r) => setTimeout(r, 1000));
  await evaluate(ws, `window.localStorage.clear(); true`);
  await send(ws, "Page.navigate", { url: "http://localhost:5173/start" });
  await new Promise((r) => setTimeout(r, 1200));

  // Fill step 1 required fields
  await evaluate(ws, `
    function setVal(id, val) {
      const el = document.getElementById(id);
      if (!el) return false;
      const proto = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
      Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, val);
      el.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    }
    JSON.stringify({
      fullName: setVal('fullName', 'Real User'),
      workEmail: setVal('workEmail', 'real@example.com'),
      contactMethod: setVal('contactMethod', '317-555-0100'),
    });
  `);

  // Record state, get Continue button box, click it with a REAL synthetic mouse event (CDP Input domain)
  const before = await evaluate(ws, `
    JSON.stringify({
      scrollY: window.scrollY,
      activeTag: document.activeElement.tagName,
      heading: document.querySelector('main h2')?.textContent?.trim(),
    });
  `);

  await evaluate(ws, `
    (function() {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim().startsWith('Continue'));
      btn.scrollIntoView({ block: 'center', behavior: 'instant' });
    })();
  `);
  await new Promise((r) => setTimeout(r, 600));
  const btnBox = await evaluate(ws, `
    (function() {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim().startsWith('Continue'));
      const r = btn.getBoundingClientRect();
      return JSON.stringify({ x: r.x + r.width / 2, y: r.y + r.height / 2 });
    })();
  `);
  const { x, y } = JSON.parse(btnBox);

  await send(ws, "Input.dispatchMouseEvent", { type: "mousePressed", x, y, button: "left", clickCount: 1 });
  await send(ws, "Input.dispatchMouseEvent", { type: "mouseReleased", x, y, button: "left", clickCount: 1 });
  await new Promise((r) => setTimeout(r, 700));

  const after = await evaluate(ws, `
    JSON.stringify({
      scrollY: window.scrollY,
      activeTag: document.activeElement.tagName,
      activeId: document.activeElement.id,
      activeText: (document.activeElement.textContent || '').trim().slice(0, 60),
      heading: document.querySelector('main h2')?.textContent?.trim(),
      liveRegionsWithText: Array.from(document.querySelectorAll('[aria-live], [role="status"]')).map(e => ({ live: e.getAttribute('aria-live'), role: e.getAttribute('role'), text: e.textContent.trim().slice(0, 80) })),
      hasFocus: document.hasFocus(),
      visibilityState: document.visibilityState,
    });
  `);

  console.log("BEFORE:", before);
  console.log("AFTER: ", after);

  await send(ws, "Page.close");
  ws.close();
}

main().catch((e) => {
  console.error("FATAL", e);
  process.exit(1);
});
