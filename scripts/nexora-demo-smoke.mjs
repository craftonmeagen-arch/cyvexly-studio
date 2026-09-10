import assert from "node:assert/strict";
import { access, mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:5173";
const cdpPort = Number(process.env.CDP_PORT ?? 9338);
const captureDir = process.env.CAPTURE_DIR;

const browserCandidates = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
];

async function findBrowser() {
  for (const candidate of browserCandidates) {
    try {
      await access(candidate);
      return candidate;
    } catch {}
  }
  throw new Error("No supported Chromium browser was found");
}

async function waitForDebugger() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${cdpPort}/json/version`);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 125));
  }
  throw new Error(`Chromium debugger did not start on port ${cdpPort}`);
}

async function newTarget(url) {
  const response = await fetch(
    `http://127.0.0.1:${cdpPort}/json/new?${encodeURIComponent(url)}`,
    { method: "PUT" },
  );
  assert.equal(response.status, 200);
  return response.json();
}

function connect(wsUrl, onEvent) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    const pending = new Map();
    ws.addEventListener("open", () => {
      let nextId = 0;
      resolve({
        send(method, params = {}) {
          nextId += 1;
          const id = nextId;
          return new Promise((requestResolve, requestReject) => {
            pending.set(id, { requestResolve, requestReject });
            ws.send(JSON.stringify({ id, method, params }));
          });
        },
        close() {
          ws.close();
        },
      });
    });
    ws.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.id) {
        const request = pending.get(message.id);
        if (!request) return;
        pending.delete(message.id);
        if (message.error) request.requestReject(new Error(message.error.message));
        else request.requestResolve(message.result);
        return;
      }
      onEvent(message);
    });
    ws.addEventListener("error", reject);
  });
}

async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", {
    expression,
    returnByValue: true,
    awaitPromise: true,
  });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}

async function setViewport(client, width, height) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width <= 500,
  });
}

async function navigate(client, route) {
  await client.send("Page.navigate", { url: new URL(route, baseUrl).href });
  await new Promise((resolve) => setTimeout(resolve, 500));
}

async function capture(client, filename) {
  if (!captureDir) return;
  await mkdir(captureDir, { recursive: true });
  const result = await client.send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
    captureBeyondViewport: false,
  });
  await writeFile(path.join(captureDir, filename), Buffer.from(result.data, "base64"));
}

async function stopBrowserAndRemoveProfile(browser, profile) {
  if (browser.exitCode === null) {
    const exited = new Promise((resolve) => browser.once("exit", resolve));
    browser.kill();
    await Promise.race([
      exited,
      new Promise((resolve) => setTimeout(resolve, 3000)),
    ]);
  }

  for (let attempt = 0; attempt < 20; attempt += 1) {
    try {
      await rm(profile, { recursive: true, force: true });
      return;
    } catch (error) {
      if (!["EBUSY", "EPERM"].includes(error?.code) || attempt === 19) throw error;
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }
}

async function main() {
  const browserPath = await findBrowser();
  const profile = await mkdtemp(path.join(os.tmpdir(), "cyvexly-nexora-smoke-"));
  const browser = spawn(
    browserPath,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      `--remote-debugging-port=${cdpPort}`,
      `--user-data-dir=${profile}`,
      "about:blank",
    ],
    { stdio: "ignore", windowsHide: true },
  );

  let client;
  try {
    await waitForDebugger();
    const target = await newTarget(new URL("/nexora", baseUrl).href);
    const failures = [];
    client = await connect(target.webSocketDebuggerUrl, (message) => {
      if (message.method === "Runtime.exceptionThrown") failures.push(message.params.exceptionDetails.text);
      if (message.method === "Log.entryAdded" && message.params.entry.level === "error") {
        failures.push(message.params.entry.text);
      }
      if (message.method === "Network.loadingFailed" && !message.params.canceled) {
        failures.push(message.params.errorText);
      }
    });
    await Promise.all([
      client.send("Page.enable"),
      client.send("Runtime.enable"),
      client.send("Log.enable"),
      client.send("Network.enable"),
    ]);

    const response = await fetch(new URL("/nexora", baseUrl));
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("x-robots-tag"), "noindex, nofollow");

    await setViewport(client, 1440, 900);
    await navigate(client, "/nexora");
    assert.equal(
      await evaluate(client, "document.documentElement.scrollWidth <= window.innerWidth + 1"),
      true,
      "desktop dashboard overflows horizontally",
    );
    assert.equal(
      await evaluate(client, "document.querySelector('meta[name=robots]')?.content"),
      "noindex, nofollow",
    );
    await capture(client, "nexora-release-demo.png");

    assert.equal(
      await evaluate(client, "document.querySelector('#chart-desc')?.textContent.trim()"),
      "The current signal rises overall with a visible release marker. A muted baseline is also shown.",
      "chart description does not expose the visible comparison state",
    );

    const comparisonDescription = await evaluate(client, `(() => {
      const checkbox = document.querySelector('input[type="checkbox"]');
      checkbox.click();
      return new Promise((resolve) => requestAnimationFrame(() => resolve(
        document.querySelector('#chart-desc')?.textContent.trim(),
      )));
    })()`);
    assert.equal(
      comparisonDescription,
      "The current signal rises overall with a visible release marker. Baseline comparison is hidden.",
      "chart description did not update after hiding the comparison line",
    );

    const rangeState = await evaluate(client, `(() => {
      const button = [...document.querySelectorAll('button')].find((item) => item.textContent.trim() === '7d');
      button.click();
      return new Promise((resolve) => requestAnimationFrame(() => resolve(JSON.stringify({
        pressed: button.getAttribute('aria-pressed'),
        events: document.body.textContent.includes('15.8M'),
      }))));
    })()`);
    assert.deepEqual(JSON.parse(rangeState), { pressed: "true", events: true });

    const filterState = await evaluate(client, `(() => {
      const button = [...document.querySelectorAll('button')].find((item) => item.textContent.trim() === 'Search');
      button.click();
      return new Promise((resolve) => requestAnimationFrame(() => resolve(JSON.stringify({
        pressed: button.getAttribute('aria-pressed'),
        issueCount: document.querySelectorAll('#issues article').length,
        detail: document.body.textContent.includes('Three newly indexed product categories'),
      }))));
    })()`);
    assert.deepEqual(JSON.parse(filterState), { pressed: "true", issueCount: 1, detail: true });

    await setViewport(client, 390, 844);
    await navigate(client, "/nexora");
    assert.equal(
      await evaluate(client, "document.documentElement.scrollWidth <= window.innerWidth + 1"),
      true,
      "phone dashboard overflows horizontally",
    );
    await capture(client, "nexora-release-demo-mobile.png");

    assert.equal(failures.length, 0, failures.join("\n"));
    console.log(JSON.stringify({
      route: "/nexora",
      desktop: "1440x900",
      phone: "390x844",
      rangeSwitch: "pass",
      serviceFilter: "pass",
      noIndex: "pass",
      runtimeErrors: 0,
      horizontalOverflow: 0,
    }, null, 2));
  } finally {
    client?.close();
    await stopBrowserAndRemoveProfile(browser, profile);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
