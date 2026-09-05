// Round 39 keyboard/ARIA accessibility sweep v2. v1 (round-39-a11y-sweep.js)
// used el.focus() from injected script to test focus-visible styling and
// produced a near-universal false positive: Chrome's real focus-visible
// heuristic only activates on genuine keyboard-originated focus, not
// script-called .focus(), and the site has a global `::focus-visible`
// outline rule (src/app/globals.css:605) that a script-focus test cannot
// see. v2 drives real keyboard Tab key events via CDP Input.dispatchKeyEvent
// (Chrome's input pipeline treats these as trusted, same as round-32's
// lesson to verify against real behavior rather than the textbook
// assumption) and reads document.activeElement's computed style after each
// physical Tab press.

const CDP_PORT = process.env.CDP_PORT || 9334;
const BASE = process.env.BASE_URL || "http://localhost:5173";
const TABS_PER_ROUTE = 12;

const ROUTES = [
  "/",
  "/services",
  "/work",
  "/pricing",
  "/process",
  "/about",
  "/contact",
  "/faq",
  "/accessibility",
  "/privacy",
  "/terms",
  "/start",
  "/services/business-websites",
  "/work/aurora-spaces",
];

async function getTargets() {
  const res = await fetch(`http://127.0.0.1:${CDP_PORT}/json`);
  return res.json();
}
async function newTab() {
  const res = await fetch(`http://127.0.0.1:${CDP_PORT}/json/new`, { method: "PUT" });
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

async function pressTab(ws, idCounter) {
  await sendCmd(ws, idCounter.n++, "Input.dispatchKeyEvent", {
    type: "rawKeyDown",
    windowsVirtualKeyCode: 9,
    key: "Tab",
    code: "Tab",
  });
  await sendCmd(ws, idCounter.n++, "Input.dispatchKeyEvent", {
    type: "keyUp",
    windowsVirtualKeyCode: 9,
    key: "Tab",
    code: "Tab",
  });
}

const READ_ACTIVE_SCRIPT = `
(function () {
  const el = document.activeElement;
  if (!el || el === document.body) return { tag: "BODY-OR-NONE" };
  const cs = getComputedStyle(el);
  const outlineStyle = cs.outlineStyle;
  const outlineWidth = parseFloat(cs.outlineWidth) || 0;
  const boxShadow = cs.boxShadow;
  const hasOutline = outlineStyle !== "none" && outlineWidth > 0;
  const hasBoxShadow = boxShadow && boxShadow !== "none";
  return {
    tag: el.tagName,
    text: (el.textContent || el.getAttribute("aria-label") || el.getAttribute("href") || "").trim().slice(0, 40),
    hasVisibleFocus: hasOutline || hasBoxShadow,
    outlineStyle, outlineWidth, boxShadow: boxShadow ? boxShadow.slice(0, 60) : boxShadow,
  };
})();
`;

async function checkRoute(ws, idCounter, route) {
  await sendCmd(ws, idCounter.n++, "Page.navigate", { url: `${BASE}${route}` });
  await new Promise((r) => setTimeout(r, 2000));
  // Click on the page body first (not an input) to give it real focus context,
  // matching where a keyboard user's Tab sequence would actually begin.
  await sendCmd(ws, idCounter.n++, "Runtime.evaluate", { expression: "document.body.focus && document.body.focus()" });

  const steps = [];
  for (let i = 0; i < TABS_PER_ROUTE; i++) {
    await pressTab(ws, idCounter);
    await new Promise((r) => setTimeout(r, 80));
    const evalRes = await sendCmd(ws, idCounter.n++, "Runtime.evaluate", {
      expression: READ_ACTIVE_SCRIPT,
      returnByValue: true,
    });
    const val = evalRes.result && evalRes.result.result && evalRes.result.result.value;
    steps.push(val);
  }
  const withFocusable = steps.filter((s) => s && s.tag !== "BODY-OR-NONE");
  const missing = withFocusable.filter((s) => !s.hasVisibleFocus);
  return { route, tabbedCount: withFocusable.length, missingFocusIndicatorCount: missing.length, missingSample: missing.slice(0, 5), allSteps: steps };
}

async function main() {
  const targets = await getTargets();
  let target = targets.find((t) => t.type === "page");
  if (!target) target = await newTab();
  const ws = await connect(target.webSocketDebuggerUrl);
  const idCounter = { n: 1 };
  await sendCmd(ws, idCounter.n++, "Page.enable");
  await sendCmd(ws, idCounter.n++, "Runtime.enable");

  const results = [];
  for (const route of ROUTES) {
    const r = await checkRoute(ws, idCounter, route);
    results.push(r);
    console.log(`Checked ${route}: tabbed=${r.tabbedCount} missingFocusIndicator=${r.missingFocusIndicatorCount}`);
  }
  console.log("\n=== FULL RESULTS ===");
  console.log(JSON.stringify(results, null, 2));
  ws.close();
}

main().catch((e) => {
  console.error("FATAL", e);
  process.exit(1);
});
