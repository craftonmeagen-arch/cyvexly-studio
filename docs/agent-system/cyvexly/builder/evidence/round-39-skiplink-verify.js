// Verifies the round-39 skip-link fix on the real production server via
// real CDP keyboard Tab events (not script .focus()): first Tab reveals a
// visible "Skip to main content" link targeting #main-content, and
// activating it (Enter key) moves focus to the <main id="main-content">
// element with the id present. Checks representative routes.

const CDP_PORT = process.env.CDP_PORT || 9334;
const BASE = process.env.BASE_URL || "http://localhost:5173";
const ROUTES = ["/", "/about", "/services/business-websites"];

async function getTargets() {
  const res = await fetch(`http://127.0.0.1:${CDP_PORT}/json`);
  return res.json();
}
function connect(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    ws.addEventListener("open", () => resolve(ws));
    ws.addEventListener("error", (e) => reject(e));
  });
}
function sendCmd(ws, id, method, params = {}) {
  return new Promise((resolve) => {
    const handler = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id === id) {
        ws.removeEventListener("message", handler);
        resolve(msg);
      }
    };
    ws.addEventListener("message", handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}
async function pressKey(ws, idCounter, key, vk) {
  await sendCmd(ws, idCounter.n++, "Input.dispatchKeyEvent", { type: "rawKeyDown", windowsVirtualKeyCode: vk, key, code: key });
  await sendCmd(ws, idCounter.n++, "Input.dispatchKeyEvent", { type: "keyUp", windowsVirtualKeyCode: vk, key, code: key });
}

const READ_SCRIPT = `
(function () {
  const el = document.activeElement;
  if (!el) return null;
  const cs = getComputedStyle(el);
  const rect = el.getBoundingClientRect();
  return {
    tag: el.tagName,
    href: el.getAttribute && el.getAttribute("href"),
    text: (el.textContent || "").trim().slice(0, 40),
    isVisible: rect.width > 0 && rect.height > 0 && cs.position !== "absolute" || (cs.position === "fixed" && rect.width > 0),
    rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
    id: el.id,
  };
})();
`;

async function checkRoute(ws, idCounter, route) {
  await sendCmd(ws, idCounter.n++, "Page.navigate", { url: `${BASE}${route}` });
  await new Promise((r) => setTimeout(r, 2000));
  await sendCmd(ws, idCounter.n++, "Runtime.evaluate", { expression: "document.body.focus && document.body.focus()" });

  await pressKey(ws, idCounter, "Tab", 9);
  await new Promise((r) => setTimeout(r, 100));
  const firstFocus = await sendCmd(ws, idCounter.n++, "Runtime.evaluate", { expression: READ_SCRIPT, returnByValue: true });
  const first = firstFocus.result.result.value;

  // Activate the skip link with Enter.
  await pressKey(ws, idCounter, "Enter", 13);
  await new Promise((r) => setTimeout(r, 200));
  const afterActivate = await sendCmd(ws, idCounter.n++, "Runtime.evaluate", {
    expression: "({ hash: location.hash, mainId: document.getElementById('main-content') ? document.getElementById('main-content').id : null })",
    returnByValue: true,
  });

  return { route, firstFocused: first, afterActivate: afterActivate.result.result.value };
}

async function main() {
  const targets = await getTargets();
  let target = targets.find((t) => t.type === "page");
  const ws = await connect(target.webSocketDebuggerUrl);
  const idCounter = { n: 1 };
  await sendCmd(ws, idCounter.n++, "Page.enable");
  await sendCmd(ws, idCounter.n++, "Runtime.enable");

  const results = [];
  for (const route of ROUTES) {
    results.push(await checkRoute(ws, idCounter, route));
  }
  console.log(JSON.stringify(results, null, 2));
  ws.close();
}

main().catch((e) => {
  console.error("FATAL", e);
  process.exit(1);
});
