// Round 39 keyboard/ARIA accessibility sweep: reuses the round-8-established
// local headless-Chrome/CDP technique (also used by round 38's route sweep)
// but instead of console/network diagnostics, evaluates in-page JS per route
// checking: skip-link presence, exactly one <main> landmark, no skipped
// heading levels, and that every focusable element gets a visible focus
// indicator (outline or box-shadow) when actually focused.

const CDP_PORT = process.env.CDP_PORT || 9334;
const BASE = process.env.BASE_URL || "http://localhost:5173";

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
  "/services/website-redesigns",
  "/services/landing-pages",
  "/services/ecommerce-websites",
  "/services/website-care",
  "/work/aurora-spaces",
  "/work/nexora-systems",
  "/work/vellora-care",
];

const CHECK_SCRIPT = `
(function () {
  const results = {};

  // 1. Heading order: no skipped levels, and exactly one h1.
  const headings = Array.from(document.querySelectorAll("h1,h2,h3,h4,h5,h6"))
    .map((h) => parseInt(h.tagName[1], 10));
  let skipped = false;
  for (let i = 1; i < headings.length; i++) {
    if (headings[i] - headings[i - 1] > 1) skipped = true;
  }
  results.h1Count = document.querySelectorAll("h1").length;
  results.headingSkip = skipped;
  results.headingSequence = headings.join(",");

  // 2. Landmark: exactly one <main> (or role="main").
  const mains = document.querySelectorAll('main, [role="main"]');
  results.mainCount = mains.length;

  // 3. Skip-to-content link: a same-page anchor link that is the first
  // focusable element in DOM order and targets an id inside <main>.
  const focusableSelector =
    'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
  const focusables = Array.from(document.querySelectorAll(focusableSelector)).filter(
    (el) => el.offsetParent !== null || el.getClientRects().length > 0 || getComputedStyle(el).position === "fixed"
  );
  results.focusableCount = focusables.length;

  const first = focusables[0];
  results.firstFocusableTag = first ? first.tagName + (first.className ? "." + String(first.className).slice(0, 40) : "") : null;
  results.firstFocusableIsSkipLink =
    !!first && first.tagName === "A" && (first.getAttribute("href") || "").startsWith("#");

  // 4. Visible focus indicator: focus every visible focusable element and
  // read computed outline/box-shadow. A "none"/"0px"/transparent outline
  // AND no box-shadow counts as invisible (relies on default UA outline
  // being suppressed by outline:none without a replacement, a common a11y
  // regression class).
  let noFocusIndicator = [];
  const activeElBefore = document.activeElement;
  for (const el of focusables) {
    try {
      el.focus({ preventScroll: true });
      if (document.activeElement !== el) continue; // not actually focusable (e.g. display:none)
      const cs = getComputedStyle(el);
      const outlineStyle = cs.outlineStyle;
      const outlineWidth = parseFloat(cs.outlineWidth) || 0;
      const boxShadow = cs.boxShadow;
      const hasOutline = outlineStyle !== "none" && outlineWidth > 0;
      const hasBoxShadow = boxShadow && boxShadow !== "none";
      if (!hasOutline && !hasBoxShadow) {
        noFocusIndicator.push({
          tag: el.tagName,
          text: (el.textContent || el.getAttribute("aria-label") || el.getAttribute("href") || "").trim().slice(0, 60),
        });
      }
    } catch (e) {
      // ignore elements that throw on focus
    }
  }
  if (activeElBefore && activeElBefore.blur) activeElBefore.blur();
  results.noFocusIndicatorCount = noFocusIndicator.length;
  results.noFocusIndicatorSample = noFocusIndicator.slice(0, 10);

  return results;
})();
`;

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

async function checkRoute(ws, idCounter, route) {
  await sendCmd(ws, idCounter.n++, "Page.navigate", { url: `${BASE}${route}` });
  await new Promise((r) => setTimeout(r, 2500));
  const evalRes = await sendCmd(ws, idCounter.n++, "Runtime.evaluate", {
    expression: CHECK_SCRIPT,
    returnByValue: true,
    awaitPromise: false,
  });
  if (evalRes.result && evalRes.result.exceptionDetails) {
    return { route, error: JSON.stringify(evalRes.result.exceptionDetails) };
  }
  return { route, ...(evalRes.result && evalRes.result.result && evalRes.result.result.value) };
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
    console.log(
      `Checked ${route}: h1=${r.h1Count} skip=${r.headingSkip} main=${r.mainCount} focusable=${r.focusableCount} skipLink=${r.firstFocusableIsSkipLink} noFocusIndicator=${r.noFocusIndicatorCount}`
    );
  }

  console.log("\n=== FULL RESULTS ===");
  console.log(JSON.stringify(results, null, 2));

  ws.close();
}

main().catch((e) => {
  console.error("FATAL", e);
  process.exit(1);
});
