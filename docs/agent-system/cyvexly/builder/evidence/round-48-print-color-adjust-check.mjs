import fs from "node:fs";

const CDP_PORT = 9479;

async function newTab(url) {
  const res = await fetch(`http://localhost:${CDP_PORT}/json/new?${encodeURIComponent(url)}`, { method: "PUT" });
  return res.json();
}

function connect(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new globalThis.WebSocket(wsUrl);
    ws.addEventListener("open", () => resolve(ws));
    ws.addEventListener("error", reject);
  });
}

let msgId = 1;
function send(ws, method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = msgId++;
    const handler = (event) => {
      const data = JSON.parse(event.data);
      if (data.id === id) {
        ws.removeEventListener("message", handler);
        if (data.error) reject(new Error(JSON.stringify(data.error)));
        else resolve(data.result);
      }
    };
    ws.addEventListener("message", handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

async function main() {
  const tab = await newTab("about:blank");
  const ws = await connect(tab.webSocketDebuggerUrl);
  await send(ws, "Page.enable");
  await send(ws, "Runtime.enable");
  await send(ws, "Page.navigate", { url: "http://localhost:5173/" });
  await new Promise((r) => setTimeout(r, 2500));

  // Confirm the print-color-adjust rule is actually applied
  const propCheck = await send(ws, "Runtime.evaluate", {
    expression: `getComputedStyle(document.documentElement).getPropertyValue('print-color-adjust') || getComputedStyle(document.documentElement).getPropertyValue('-webkit-print-color-adjust')`,
    returnByValue: true,
  });
  console.log("computed print-color-adjust (screen context):", propCheck.result.value);

  // Real print rendering with backgrounds explicitly OFF (the common default a
  // user has not opted into "print backgrounds") -- this is the actual browser
  // print pipeline, not just a screenshot, so it reflects real Ctrl+P output.
  const pdfNoBg = await send(ws, "Page.printToPDF", {
    printBackground: false,
    preferCSSPageSize: false,
    landscape: false,
  });
  fs.writeFileSync(
    "C:\\Windows\\TEMP\\claude\\C--app-projects-website\\70953558-9041-4c5b-9f5d-3ec60986f8ac\\scratchpad\\round48-print-nobg.pdf",
    Buffer.from(pdfNoBg.data, "base64")
  );

  const pdfWithBg = await send(ws, "Page.printToPDF", {
    printBackground: true,
    preferCSSPageSize: false,
    landscape: false,
  });
  fs.writeFileSync(
    "C:\\Windows\\TEMP\\claude\\C--app-projects-website\\70953558-9041-4c5b-9f5d-3ec60986f8ac\\scratchpad\\round48-print-withbg.pdf",
    Buffer.from(pdfWithBg.data, "base64")
  );

  console.log("PDFs written.");
  ws.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
