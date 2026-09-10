import { access, mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";

const outputDir = path.resolve("public/media");
const cdpPort = Number(process.env.CDP_PORT ?? 9341);
const chromeCandidates = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
];

const captures = [
  { name: "eduailenz-live-desktop.png", url: "https://eduailenz-web.onrender.com/", width: 1440, height: 900 },
  { name: "eduailenz-live-mobile.png", url: "https://eduailenz-web.onrender.com/", width: 390, height: 844 },
  { name: "eduailenz-tour-workflow.png", url: "https://eduailenz-web.onrender.com/", selector: "#workflow", width: 1200, height: 720 },
  { name: "eduailenz-tour-classroom.png", url: "https://eduailenz-web.onrender.com/", selector: "#classroom", width: 1200, height: 720 },
  { name: "eduailenz-tour-bloomed.png", url: "https://eduailenz-web.onrender.com/", selector: "#bloomed", width: 1200, height: 720 },
  { name: "mudoinkle-live-desktop.png", url: "https://mudoinkle-staging.onrender.com/", width: 1440, height: 900 },
  { name: "mudoinkle-live-mobile.png", url: "https://mudoinkle-staging.onrender.com/", width: 390, height: 844 },
  { name: "mudoinkle-tour-setup.png", url: "https://mudoinkle-staging.onrender.com/", selector: "#how-it-works", width: 1200, height: 720 },
  { name: "mudoinkle-tour-preview.png", url: "https://mudoinkle-staging.onrender.com/", selector: "#taste-of-chaos", width: 1200, height: 720 },
  { name: "mudoinkle-tour-games.png", url: "https://mudoinkle-staging.onrender.com/", selector: "#games", width: 1200, height: 720 },
];

async function findChrome() {
  for (const candidate of chromeCandidates) {
    try {
      await access(candidate);
      return candidate;
    } catch {}
  }
  throw new Error("No supported Chromium browser found");
}

async function waitForDebugger() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      if ((await fetch(`http://127.0.0.1:${cdpPort}/json/version`)).ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 150));
  }
  throw new Error("Chromium debugger did not become ready");
}

async function connect(url) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(url);
    const pending = new Map();
    let nextId = 0;
    socket.addEventListener("open", () => resolve({
      send(method, params = {}) {
        const id = ++nextId;
        return new Promise((requestResolve, requestReject) => {
          pending.set(id, { requestResolve, requestReject });
          socket.send(JSON.stringify({ id, method, params }));
        });
      },
      close: () => socket.close(),
    }));
    socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (!message.id) return;
      const request = pending.get(message.id);
      if (!request) return;
      pending.delete(message.id);
      if (message.error) request.requestReject(new Error(message.error.message));
      else request.requestResolve(message.result);
    });
    socket.addEventListener("error", reject);
  });
}

async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}

async function waitForPage(client, expectedUrl) {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    const state = await evaluate(
      client,
      `JSON.stringify({readyState: document.readyState, url: location.href, imagesReady: Array.from(document.images).every((image) => image.complete), hasHeading: Boolean(document.querySelector("h1"))})`,
    );
    const parsed = JSON.parse(state);
    if (parsed.readyState !== "loading" && parsed.url.startsWith(expectedUrl) && parsed.imagesReady && parsed.hasHeading) {
      await new Promise((resolve) => setTimeout(resolve, 700));
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 150));
  }
  throw new Error(`Timed out waiting for ${expectedUrl}`);
}

async function capture(client, item) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width: item.width,
    height: item.height,
    deviceScaleFactor: 1,
    mobile: item.width <= 500,
  });
  await client.send("Page.navigate", { url: item.url });
  await waitForPage(client, item.url);

  if (item.selector) {
    const found = await evaluate(
      client,
      `(() => { const node = document.querySelector(${JSON.stringify(item.selector)}); if (!node) return false; node.scrollIntoView({block: "start"}); window.scrollBy(0, -24); return true; })()`,
    );
    if (!found) throw new Error(`Missing selector ${item.selector} on ${item.url}`);
    await new Promise((resolve) => setTimeout(resolve, 500));
  } else {
    await evaluate(client, "window.scrollTo(0, 0)");
  }

  const screenshot = await client.send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
    captureBeyondViewport: false,
  });
  await writeFile(path.join(outputDir, item.name), Buffer.from(screenshot.data, "base64"));
  return item.name;
}

async function main() {
  const profile = await mkdtemp(path.join(os.tmpdir(), "cyvexly-showcase-capture-"));
  const browser = spawn(await findChrome(), [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    `--remote-debugging-port=${cdpPort}`,
    `--user-data-dir=${profile}`,
    "about:blank",
  ], { stdio: "ignore", windowsHide: true });
  let client;

  try {
    await mkdir(outputDir, { recursive: true });
    await waitForDebugger();
    const target = await fetch(
      `http://127.0.0.1:${cdpPort}/json/new?${encodeURIComponent("about:blank")}`,
      { method: "PUT" },
    ).then((response) => response.json());
    client = await connect(target.webSocketDebuggerUrl);
    await Promise.all([
      client.send("Page.enable"),
      client.send("Runtime.enable"),
      client.send("Network.enable"),
    ]);

    const written = [];
    for (const item of captures) written.push(await capture(client, item));
    process.stdout.write(`${JSON.stringify({ capturedAt: new Date().toISOString(), written }, null, 2)}\n`);
  } finally {
    client?.close();
    if (browser.exitCode === null) browser.kill();
    for (let attempt = 0; attempt < 20; attempt += 1) {
      try {
        await rm(profile, { recursive: true, force: true });
        break;
      } catch (error) {
        if (attempt === 19) throw error;
        await new Promise((resolve) => setTimeout(resolve, 250));
      }
    }
  }
}

await main();
