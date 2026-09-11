import assert from "node:assert/strict";
import { access, mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:5173";
const baseOrigin = new URL(baseUrl).origin;
const cdpPort = Number(process.env.CDP_PORT ?? 9345);
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
      if ((await fetch(`http://127.0.0.1:${cdpPort}/json/version`)).ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 125));
  }
  throw new Error(`Chromium debugger did not start on port ${cdpPort}`);
}

async function connect(url, requests) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url);
    const pending = new Map();
    let nextId = 0;

    const client = {
      send(method, params = {}) {
        const id = ++nextId;
        return new Promise((requestResolve, requestReject) => {
          pending.set(id, { requestResolve, requestReject });
          ws.send(JSON.stringify({ id, method, params }));
        });
      },
      close: () => ws.close(),
    };

    ws.addEventListener("open", () => resolve(client));
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

      if (message.method === "Network.requestWillBeSent") {
        requests.push(message.params.request.url);
      }

      if (message.method === "Fetch.requestPaused") {
        const requestUrl = message.params.request.url;
        const isScript = requestUrl.includes("googletagmanager.com/gtag/js");
        const isContactApi = requestUrl.startsWith(`${baseOrigin}/api/contact`);
        const contactResponse = JSON.stringify({ ok: true, confirmationSent: true });
        void client.send("Fetch.fulfillRequest", {
          requestId: message.params.requestId,
          responseCode: isScript || isContactApi ? 200 : 204,
          responseHeaders: isScript
            ? [{ name: "Content-Type", value: "application/javascript" }]
            : isContactApi
              ? [{ name: "Content-Type", value: "application/json" }]
              : [],
          body: isScript
            ? Buffer.from("").toString("base64")
            : isContactApi
              ? Buffer.from(contactResponse).toString("base64")
              : undefined,
        });
      }
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

async function waitFor(client, expression, message) {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    if (await evaluate(client, expression)) return;
    await new Promise((resolve) => setTimeout(resolve, 125));
  }
  throw new Error(message);
}

async function navigate(client, route, width, height) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width <= 500,
  });
  await client.send("Page.navigate", { url: new URL(route, baseUrl).href });
  await waitFor(
    client,
    "document.readyState !== 'loading'",
    `${route} did not finish loading`,
  );
  await new Promise((resolve) => setTimeout(resolve, 300));
}

async function pressEnter(client, selector) {
  assert.equal(
    await evaluate(client, `Boolean(document.querySelector(${JSON.stringify(selector)}))`),
    true,
    `Missing keyboard target ${selector}`,
  );
  await evaluate(client, `document.querySelector(${JSON.stringify(selector)}).focus()`);
  await client.send("Input.dispatchKeyEvent", {
    type: "rawKeyDown",
    key: "Enter",
    code: "Enter",
    windowsVirtualKeyCode: 13,
  });
  await client.send("Input.dispatchKeyEvent", {
    type: "char",
    text: "\r",
    unmodifiedText: "\r",
    key: "Enter",
    code: "Enter",
    windowsVirtualKeyCode: 13,
  });
  await client.send("Input.dispatchKeyEvent", {
    type: "keyUp",
    key: "Enter",
    code: "Enter",
    windowsVirtualKeyCode: 13,
  });
  await new Promise((resolve) => setTimeout(resolve, 250));
}

async function capture(client, name) {
  if (!captureDir) return;
  await mkdir(captureDir, { recursive: true });
  const result = await client.send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
    captureBeyondViewport: false,
  });
  await writeFile(path.join(captureDir, name), Buffer.from(result.data, "base64"));
}

function googleRequests(requests) {
  return requests.filter((url) => /(?:googletagmanager|google-analytics)\.com/.test(url));
}

async function stopBrowserAndRemoveProfile(browser, profile) {
  if (browser.exitCode === null) {
    const exited = new Promise((resolve) => browser.once("exit", resolve));
    browser.kill();
    await Promise.race([exited, new Promise((resolve) => setTimeout(resolve, 3000))]);
  }
  await rm(profile, { recursive: true, force: true });
}

async function main() {
  const profile = await mkdtemp(path.join(os.tmpdir(), "cyvexly-analytics-smoke-"));
  const browser = spawn(await findBrowser(), [
    "--headless=new",
    "--disable-gpu",
    `--remote-debugging-port=${cdpPort}`,
    `--user-data-dir=${profile}`,
    "about:blank",
  ], { stdio: "ignore", windowsHide: true });
  const requests = [];
  let client;

  try {
    await waitForDebugger();
    const target = await fetch(
      `http://127.0.0.1:${cdpPort}/json/new?${encodeURIComponent("about:blank")}`,
      { method: "PUT" },
    ).then((response) => response.json());
    client = await connect(target.webSocketDebuggerUrl, requests);
    await Promise.all([
      client.send("Page.enable"),
      client.send("Runtime.enable"),
      client.send("Network.enable"),
      client.send("Fetch.enable", {
        patterns: [
          { urlPattern: "*://*.googletagmanager.com/*" },
          { urlPattern: "*://*.google-analytics.com/*" },
          { urlPattern: `${baseOrigin}/api/contact*` },
        ],
      }),
    ]);

    const origin = new URL(baseUrl).origin;
    await client.send("Storage.clearDataForOrigin", { origin, storageTypes: "all" });
    await navigate(client, "/", 1280, 720);
    await waitFor(client, "Boolean(document.querySelector('#analytics-consent-title'))", "Consent choice did not render");

    assert.deepEqual(googleRequests(requests), [], "Google received a request before consent");
    assert.equal(await evaluate(client, "document.cookie.includes('_ga')"), false);
    assert.equal(
      await evaluate(client, "localStorage.getItem('cyvexly:analytics-consent:v1')"),
      null,
    );
    const desktopGeometry = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const panel = document.querySelector('#analytics-consent-title').closest('section').getBoundingClientRect();
      const buttons = [...document.querySelectorAll('#analytics-consent-title ~ * button, #analytics-consent-title + * button')];
      return {
        panelInsideViewport: panel.left >= 0 && panel.right <= innerWidth && panel.bottom <= innerHeight,
        noPageOverflow: document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1,
        buttonHeights: buttons.map((button) => button.getBoundingClientRect().height),
      };
    })())`));
    assert.equal(desktopGeometry.panelInsideViewport, true);
    assert.equal(desktopGeometry.noPageOverflow, true);
    assert.equal(desktopGeometry.buttonHeights.every((height) => height >= 44), true);
    await capture(client, "analytics-choice-desktop.png");

    await pressEnter(client, '[data-analytics-consent="denied"]');
    assert.equal(
      await evaluate(client, "localStorage.getItem('cyvexly:analytics-consent:v1')"),
      "denied",
    );
    assert.deepEqual(googleRequests(requests), [], "Declining analytics still contacted Google");
    await waitFor(client, "Boolean(document.querySelector('[data-analytics-settings]'))", "Settings control did not remain available");
    await pressEnter(client, "[data-analytics-settings]");
    await waitFor(client, "Boolean(document.querySelector('#analytics-consent-title'))", "Settings did not reopen");

    await pressEnter(client, '[data-analytics-consent="granted"]');
    await waitFor(client, "localStorage.getItem('cyvexly:analytics-consent:v1') === 'granted'", "Grant was not saved");
    await waitFor(client, "typeof window.gtag === 'function'", "Google tag queue was not initialized after consent");
    for (let attempt = 0; attempt < 20 && googleRequests(requests).length === 0; attempt += 1) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    assert.equal(googleRequests(requests).some((url) => url.includes("googletagmanager.com/gtag/js")), true);
    const consentCommands = await evaluate(client, "window.dataLayer.filter((entry) => entry[0] === 'consent').map((entry) => [entry[1], entry[2]])");
    assert.equal(consentCommands[0][0], "default");
    assert.equal(consentCommands[0][1].analytics_storage, "denied");
    assert.equal(consentCommands[1][0], "update");
    assert.equal(consentCommands[1][1].analytics_storage, "granted");
    assert.equal(consentCommands[1][1].ad_personalization, "denied");

    await navigate(client, "/contact", 1280, 720);
    await waitFor(client, "Boolean(document.getElementById('name'))", "Contact form did not hydrate");
    await evaluate(client, `(() => {
      window.__analyticsEvents = [];
      window.gtag = (...args) => window.__analyticsEvents.push(args);
      document.getElementById('name').value = 'Synthetic Analytics Check';
      document.getElementById('email').value = 'analytics-check@example.test';
      document.getElementById('message').value = 'Synthetic intercepted request';
      document.getElementById('consent').click();
      document.querySelector('form').requestSubmit();
    })()`);
    await waitFor(client, "Boolean(document.querySelector('[data-submission-receipt]'))", "Intercepted Contact success did not render");
    const leadEvents = await evaluate(client, "window.__analyticsEvents.filter((entry) => entry[0] === 'event' && entry[1] === 'generate_lead')");
    assert.deepEqual(leadEvents, [["event", "generate_lead", {
      lead_source: "website",
      inquiry_type: "contact",
    }]]);

    await client.send("Storage.clearDataForOrigin", { origin, storageTypes: "all" });
    await navigate(client, "/", 390, 844);
    await waitFor(client, "Boolean(document.querySelector('#analytics-consent-title'))", "Phone consent choice did not render");
    assert.equal(await evaluate(client, "document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1"), true);
    await capture(client, "analytics-choice-phone.png");

    await navigate(client, "/privacy#cookies-and-analytics", 390, 844);
    assert.equal(
      await evaluate(client, "document.body.textContent.includes('Google Analytics 4 is available on this site')"),
      true,
    );

    process.stdout.write(`Analytics consent smoke passed: ${JSON.stringify({
      googleRequestsBeforeConsent: 0,
      googleTagLoadedAfterGrant: true,
      successfulInquiryEvent: "generate_lead/contact",
      desktopGeometry,
      phoneOverflow: false,
    })}\n`);
  } finally {
    client?.close();
    await stopBrowserAndRemoveProfile(browser, profile);
  }
}

await main();
