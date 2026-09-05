// Uses Node 24's built-in global WebSocket client (no added package) to drive
// CDP, and plain fetch against the /json HTTP endpoints to discover targets.

const CDP_PORT = process.env.CDP_PORT || 9333;
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

async function sweepRoute(ws, idCounter, route) {
  const consoleMessages = [];
  const networkFailures = [];
  const requestUrls = new Map();

  const onMessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.method === "Console.messageAdded") {
      const m = msg.params.message;
      if (m.level === "error" || m.level === "warning") {
        consoleMessages.push({ level: m.level, text: m.text, url: m.url, line: m.line });
      }
    }
    if (msg.method === "Log.entryAdded") {
      const e = msg.params.entry;
      if (e.level === "error" || e.level === "warning") {
        consoleMessages.push({ level: e.level, text: e.text, source: e.source, url: e.url });
      }
    }
    if (msg.method === "Network.requestWillBeSent") {
      requestUrls.set(msg.params.requestId, msg.params.request.url);
    }
    if (msg.method === "Network.responseReceived") {
      const r = msg.params.response;
      if (r.status >= 400) {
        networkFailures.push({ url: r.url, status: r.status });
      }
    }
    if (msg.method === "Network.loadingFailed") {
      // Ignore aborts on document-adjacent prefetches caused by navigating
      // to the next route before all speculative requests finish -- only
      // report failures that are not a plain cancellation.
      if (msg.params.errorText !== "net::ERR_ABORTED" || msg.params.type === "Document") {
        networkFailures.push({
          url: requestUrls.get(msg.params.requestId) || msg.params.requestId,
          error: msg.params.errorText,
          type: msg.params.type,
          canceled: !!msg.params.canceled,
        });
      }
    }
  };
  ws.addEventListener("message", onMessage);

  await sendCmd(ws, idCounter.n++, "Page.navigate", { url: `${BASE}${route}` });
  await new Promise((r) => setTimeout(r, 3500));

  ws.removeEventListener("message", onMessage);
  return { route, consoleMessages, networkFailures };
}

async function main() {
  const targets = await getTargets();
  let target = targets.find((t) => t.type === "page");
  if (!target) target = await newTab();

  const ws = await connect(target.webSocketDebuggerUrl);
  const idCounter = { n: 1 };

  await sendCmd(ws, idCounter.n++, "Page.enable");
  await sendCmd(ws, idCounter.n++, "Network.enable");
  await sendCmd(ws, idCounter.n++, "Log.enable");
  await sendCmd(ws, idCounter.n++, "Console.enable");

  const results = [];
  for (const route of ROUTES) {
    const r = await sweepRoute(ws, idCounter, route);
    results.push(r);
    console.log(`Checked ${route}: ${r.consoleMessages.length} console msgs, ${r.networkFailures.length} network failures`);
  }

  console.log("\n=== FULL RESULTS ===");
  console.log(JSON.stringify(results, null, 2));

  ws.close();
}

main().catch((e) => {
  console.error("FATAL", e);
  process.exit(1);
});
