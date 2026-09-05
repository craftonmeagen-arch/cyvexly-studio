import http from "node:http";
// Node 24's built-in global WebSocket client drives CDP with no added package.

const CDP_PORT = 9444;

function cdpJson(path, method = "GET") {
  return new Promise((resolve, reject) => {
    const req = http.request(
      { hostname: "127.0.0.1", port: CDP_PORT, path, method },
      (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve(JSON.parse(data)));
      }
    );
    req.on("error", reject);
    req.end();
  });
}

async function checkRoute(url) {
  const target = await cdpJson("/json/new?" + encodeURIComponent(url), "PUT");
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  const consoleMessages = [];
  const networkFailures = [];
  let id = 1;
  const pending = new Map();
  const send = (method, params = {}) =>
    new Promise((resolve) => {
      const msgId = id++;
      pending.set(msgId, resolve);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });

  await new Promise((resolve) => { ws.onopen = resolve; });
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data.toString());
    if (msg.id !== undefined && pending.has(msg.id)) {
      pending.get(msg.id)(msg.result);
      pending.delete(msg.id);
      return;
    }
    if (msg.method === "Console.messageAdded") {
      consoleMessages.push(msg.params.message);
    }
    if (msg.method === "Log.entryAdded" && msg.params.entry.level === "error") {
      consoleMessages.push(msg.params.entry);
    }
    if (msg.method === "Network.responseReceived" && msg.params.response.status >= 400) {
      networkFailures.push({ url: msg.params.response.url, status: msg.params.response.status });
    }
  };
  await send("Console.enable");
  await send("Log.enable");
  await send("Network.enable");
  await send("Page.enable");
  await send("Page.navigate", { url });
  await new Promise((r) => setTimeout(r, 2500));

  const evalResult = await send("Runtime.evaluate", {
    expression: `
      (() => {
        const scripts = [...document.querySelectorAll('script[type="application/ld+json"]')];
        return scripts.map(s => {
          try {
            const obj = JSON.parse(s.textContent);
            if (obj["@type"] === "FAQPage") {
              return { type: "FAQPage", mainEntityCount: obj.mainEntity.length, firstQ: obj.mainEntity[0].name, lastQ: obj.mainEntity[obj.mainEntity.length-1].name };
            }
            return { type: obj["@type"] };
          } catch (e) {
            return { parseError: e.message };
          }
        });
      })()
    `,
    returnByValue: true,
  });

  await send("Target.closeTarget", { targetId: target.id }).catch(() => {});
  ws.close();

  return { url, consoleMessages, networkFailures, jsonLdScripts: evalResult.result.value };
}

const routes = [
  "http://localhost:5173/faq",
  "http://localhost:5173/",
];
for (const r of routes) {
  const result = await checkRoute(r);
  console.log(JSON.stringify(result, null, 2));
}
