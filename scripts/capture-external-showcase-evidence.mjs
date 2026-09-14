import { access, mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";

const outputDir = path.resolve(process.env.CAPTURE_OUTPUT_DIR ?? "public/media");
const cdpPort = Number(process.env.CDP_PORT ?? 9341);
const reviewBaseUrl = process.env.REVIEW_BASE_URL?.replace(/\/$/, "");
const chromeCandidates = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
];

const captures = [
  { name: "eduailenz-live-desktop.png", url: "https://eduailenz-web.onrender.com/", width: 1440, height: 900 },
  { name: "eduailenz-live-mobile.png", url: "https://eduailenz-web.onrender.com/", width: 390, height: 844 },
  { name: "eduailenz-tour-workflow.png", url: "https://eduailenz-web.onrender.com/", selector: "#workflow", scrollOffset: 96, width: 1200, height: 720 },
  { name: "eduailenz-tour-classroom.png", url: "https://eduailenz-web.onrender.com/", selector: "#classroom", scrollOffset: 96, width: 1200, height: 720 },
  { name: "eduailenz-tour-bloomed.png", url: "https://eduailenz-web.onrender.com/", selector: "#bloomed", scrollOffset: 96, width: 1200, height: 720 },
  { name: "mudoinkle-live-desktop.png", url: "https://mudoinkle-staging.onrender.com/", width: 1440, height: 900 },
  { name: "mudoinkle-live-mobile.png", url: "https://mudoinkle-staging.onrender.com/", width: 390, height: 844 },
  { name: "mudoinkle-tour-setup.png", url: "https://mudoinkle-staging.onrender.com/", selector: "#how-it-works", width: 1200, height: 720 },
  { name: "mudoinkle-tour-preview.png", url: "https://mudoinkle-staging.onrender.com/", selector: "#taste-of-chaos", width: 1200, height: 720 },
  { name: "mudoinkle-tour-games.png", url: "https://mudoinkle-staging.onrender.com/", selector: "#games", width: 1200, height: 720 },
  { name: "mudoinkle-proof-awmuhog.png", url: "https://mudoinkle-staging.onrender.com/", selector: "#taste-of-chaos", tabText: "Awmuhog", width: 1200, height: 720 },
  { name: "mudoinkle-proof-awmuhog-mobile.png", url: "https://mudoinkle-staging.onrender.com/", selector: "#taste-of-chaos", tabText: "Awmuhog", width: 390, height: 844 },
  { name: "mudoinkle-proof-witigglies.png", url: "https://mudoinkle-staging.onrender.com/", selector: "#taste-of-chaos", tabText: "Witigglies", width: 1200, height: 720 },
  { name: "mudoinkle-proof-witigglies-mobile.png", url: "https://mudoinkle-staging.onrender.com/", selector: "#taste-of-chaos", tabText: "Witigglies", width: 390, height: 844 },
  { name: "mudoinkle-proof-list-off.png", url: "https://mudoinkle-staging.onrender.com/", selector: "#taste-of-chaos", tabText: "List Off", width: 1200, height: 720 },
  { name: "mudoinkle-proof-list-off-mobile.png", url: "https://mudoinkle-staging.onrender.com/", selector: "#taste-of-chaos", tabText: "List Off", width: 390, height: 844 },
  ...(reviewBaseUrl
    ? [
        { name: "review-velora-desktop-1440x900.png", url: `${reviewBaseUrl}/work/velora-dining`, selector: "#capabilities", scrollOffset: -24, width: 1440, height: 900 },
        { name: "review-velora-tablet-768x1024.png", url: `${reviewBaseUrl}/work/velora-dining`, selector: "#capabilities", scrollOffset: -16, width: 768, height: 1024 },
        { name: "review-velora-phone-390x844.png", url: `${reviewBaseUrl}/work/velora-dining`, selector: "#capabilities", scrollOffset: -8, width: 390, height: 844 },
        { name: "review-eduailenz-desktop-1440x900.png", url: `${reviewBaseUrl}/work/eduailenz`, selector: "#product-tour", scrollOffset: -24, width: 1440, height: 900 },
        { name: "review-eduailenz-tablet-768x1024.png", url: `${reviewBaseUrl}/work/eduailenz`, selector: "#product-tour", scrollOffset: -16, width: 768, height: 1024 },
        { name: "review-eduailenz-phone-390x844.png", url: `${reviewBaseUrl}/work/eduailenz`, selector: "#product-tour", scrollOffset: -8, width: 390, height: 844 },
        { name: "review-mudoinkle-desktop-1440x900.png", url: `${reviewBaseUrl}/work/mudoinkle`, selector: "#product-tour", scrollOffset: -24, width: 1440, height: 900 },
        { name: "review-mudoinkle-tablet-768x1024.png", url: `${reviewBaseUrl}/work/mudoinkle`, selector: "#product-tour", scrollOffset: -16, width: 768, height: 1024 },
        { name: "review-mudoinkle-phone-390x844.png", url: `${reviewBaseUrl}/work/mudoinkle`, selector: "#product-tour", scrollOffset: -8, width: 390, height: 844 },
      ]
    : []),
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
      `JSON.stringify({readyState: document.readyState, url: location.href, imagesReady: Array.from(document.images).filter((image) => image.getBoundingClientRect().top < innerHeight + 120).every((image) => image.complete), hasHeading: Boolean(document.querySelector("h1"))})`,
    );
    const parsed = JSON.parse(state);
    if (parsed.readyState !== "loading" && parsed.url.startsWith(expectedUrl) && parsed.imagesReady && parsed.hasHeading) {
      // Give client-side identity artwork and account-status panels time to
      // settle after their image elements report complete.
      await new Promise((resolve) => setTimeout(resolve, 1800));
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

  if (item.tabText) {
    const clicked = await evaluate(
      client,
      `(() => { const node = Array.from(document.querySelectorAll('[role="tab"]')).find((tab) => tab.textContent?.includes(${JSON.stringify(item.tabText)})); if (!node) return false; node.click(); return true; })()`,
    );
    if (!clicked) throw new Error(`Missing ${item.tabText} preview tab on ${item.url}`);
    await new Promise((resolve) => setTimeout(resolve, 350));
  }

  if (item.selector) {
    const found = await evaluate(
      client,
      `(() => { const node = document.querySelector(${JSON.stringify(item.selector)}); if (!node) return false; document.documentElement.style.scrollBehavior = "auto"; const top = node.getBoundingClientRect().top + window.scrollY + ${item.scrollOffset ?? -24}; window.scrollTo({top: Math.max(0, top), behavior: "instant"}); return true; })()`,
    );
    if (!found) throw new Error(`Missing selector ${item.selector} on ${item.url}`);
    for (let attempt = 0; attempt < 30; attempt += 1) {
      const imagesReady = await evaluate(
        client,
        `Array.from(document.images).filter((image) => { const rect = image.getBoundingClientRect(); return rect.bottom > -120 && rect.top < innerHeight + 120; }).every((image) => image.complete)`,
      );
      if (imagesReady) break;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
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

    const captureMatch = process.env.CAPTURE_MATCH;
    const selectedCaptures = captureMatch
      ? captures.filter((item) => item.name.includes(captureMatch))
      : captures;
    if (selectedCaptures.length === 0) throw new Error(`No captures matched ${captureMatch}`);

    const written = [];
    for (const item of selectedCaptures) written.push(await capture(client, item));
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
