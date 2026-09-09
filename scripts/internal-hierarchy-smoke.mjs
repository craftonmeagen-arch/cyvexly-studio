import assert from "node:assert/strict";
import { access, mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:5173";
const cdpPort = Number(process.env.CDP_PORT ?? 9339);
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

async function connect(url, failures) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url);
    const pending = new Map();
    let nextId = 0;
    ws.addEventListener("open", () => resolve({
      send(method, params = {}) {
        const id = ++nextId;
        return new Promise((requestResolve, requestReject) => {
          pending.set(id, { requestResolve, requestReject });
          ws.send(JSON.stringify({ id, method, params }));
        });
      },
      close: () => ws.close(),
    }));
    ws.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.id) {
        const request = pending.get(message.id);
        if (!request) return;
        pending.delete(message.id);
        if (message.error) request.requestReject(new Error(message.error.message));
        else request.requestResolve(message.result);
      } else if (message.method === "Runtime.exceptionThrown") {
        failures.push(message.params.exceptionDetails.text);
      } else if (message.method === "Log.entryAdded" && message.params.entry.level === "error") {
        failures.push(message.params.entry.text);
      } else if (message.method === "Network.loadingFailed" && !message.params.canceled) {
        failures.push(message.params.errorText);
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

async function openRoute(client, route, width, height) {
  const expectedUrl = new URL(route, baseUrl);
  await client.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width <= 500,
  });
  await client.send("Page.navigate", { url: expectedUrl.href });
  let locationState;
  for (let attempt = 0; attempt < 40; attempt += 1) {
    locationState = JSON.parse(
      await evaluate(
        client,
        "JSON.stringify({ pathname: location.pathname, hash: location.hash, readyState: document.readyState })",
      ),
    );
    if (
      locationState.pathname === expectedUrl.pathname &&
      locationState.hash === expectedUrl.hash &&
      locationState.readyState !== "loading"
    ) {
      break;
    }
    await new Promise((resolve) => setTimeout(resolve, 125));
  }
  assert.equal(
    `${locationState?.pathname ?? ""}${locationState?.hash ?? ""}`,
    `${expectedUrl.pathname}${expectedUrl.hash}`,
    `${route} did not finish navigating before geometry checks`,
  );
  if (expectedUrl.hash) {
    const targetId = decodeURIComponent(expectedUrl.hash.slice(1));
    let previousTop;
    let stableSamples = 0;
    for (let attempt = 0; attempt < 30; attempt += 1) {
      const targetTop = await evaluate(
        client,
        `document.getElementById(${JSON.stringify(targetId)})?.getBoundingClientRect().top ?? null`,
      );
      stableSamples = previousTop !== undefined && Math.abs(targetTop - previousTop) < 1 ? stableSamples + 1 : 0;
      previousTop = targetTop;
      if (attempt >= 4 && stableSamples >= 2) break;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  } else {
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  assert.equal(
    await evaluate(client, "document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1"),
    true,
    `${route} overflows horizontally at ${width}px`,
  );
}

async function waitForAnchorNearTop(client, id, maximumTop) {
  let targetTop = Number.POSITIVE_INFINITY;
  for (let attempt = 0; attempt < 24; attempt += 1) {
    targetTop = await evaluate(
      client,
      `document.getElementById(${JSON.stringify(id)})?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY`,
    );
    if (targetTop < maximumTop) return targetTop;
    await new Promise((resolve) => setTimeout(resolve, 125));
  }
  return targetTop;
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

async function main() {
  const profile = await mkdtemp(path.join(os.tmpdir(), "cyvexly-hierarchy-smoke-"));
  const browser = spawn(await findBrowser(), [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    `--remote-debugging-port=${cdpPort}`,
    `--user-data-dir=${profile}`,
    "about:blank",
  ], { stdio: "ignore", windowsHide: true });
  const failures = [];
  let client;

  try {
    await waitForDebugger();
    const target = await fetch(
      `http://127.0.0.1:${cdpPort}/json/new?${encodeURIComponent(baseUrl)}`,
      { method: "PUT" },
    ).then((response) => response.json());
    client = await connect(target.webSocketDebuggerUrl, failures);
    await Promise.all([
      client.send("Page.enable"),
      client.send("Runtime.enable"),
      client.send("Log.enable"),
      client.send("Network.enable"),
    ]);

    await openRoute(client, "/pricing", 1280, 720);
    const pricingDesktop = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const hero = document.querySelector('.pricing-hero-stage').getBoundingClientRect();
      const nav = document.querySelector('[aria-label="Pricing sections"]').getBoundingClientRect();
      const firstCard = [...document.querySelectorAll('h2')].find((item) => item.textContent.trim() === 'Signal').closest('div').getBoundingClientRect();
      return { heroHeight: hero.height, navBottom: nav.bottom, firstCardTop: firstCard.top };
    })())`));
    assert.ok(pricingDesktop.heroHeight <= 340, "Pricing hero is too tall to reveal package decisions");
    assert.ok(pricingDesktop.firstCardTop >= pricingDesktop.navBottom, "Pricing cards overlap section navigation");
    assert.ok(pricingDesktop.firstCardTop <= 530, "Pricing packages do not enter the opening viewport soon enough");
    await capture(client, "pricing-desktop.png");

    await openRoute(client, "/pricing#commerce-package", 1440, 900);
    await waitForAnchorNearTop(client, "commerce-package", 240);
    const pricingAnchorDesktop = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const header = document.querySelector('header').getBoundingClientRect();
      const target = document.getElementById('commerce-package').getBoundingClientRect();
      return { hash: location.hash, headerBottom: header.bottom, targetTop: target.top, targetBottom: target.bottom };
    })())`));
    assert.equal(pricingAnchorDesktop.hash, "#commerce-package");
    assert.ok(pricingAnchorDesktop.targetTop >= pricingAnchorDesktop.headerBottom, "Commerce anchor is hidden behind the sticky header");
    assert.ok(
      pricingAnchorDesktop.targetTop < 240,
      `Commerce anchor leaves the named package too far below the sticky header: ${JSON.stringify(pricingAnchorDesktop)}`,
    );
    await capture(client, "pricing-commerce-anchor-desktop.png");

    await openRoute(client, "/services", 1280, 720);
    const servicesDesktop = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const hero = document.querySelector('.page-intro-stage').getBoundingClientRect();
      const heading = [...document.querySelectorAll('h2')].find((item) => item.textContent.includes('Choose the business outcome')).getBoundingClientRect();
      return { heroHeight: hero.height, decisionHeadingTop: heading.top };
    })())`));
    assert.ok(servicesDesktop.heroHeight <= 400, "Services intro again dominates the first viewport");
    assert.ok(servicesDesktop.decisionHeadingTop < 620, "Services buyer decision does not enter the first viewport");

    const nexoraPreviewResponse = await fetch(new URL("/media/nexora-release-demo.png", baseUrl));
    assert.equal(nexoraPreviewResponse.status, 200, "Nexora's real portfolio capture is unavailable");

    await openRoute(client, "/work", 1440, 900);
    const nexoraPreviewDesktop = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const card = [...document.querySelectorAll('h2')]
        .find((item) => item.textContent.trim() === 'Nexora Systems')
        .closest('article');
      card.scrollIntoView({ block: 'center' });
      const preview = card.querySelector('image');
      const box = preview?.getBoundingClientRect();
      return {
        asset: preview?.getAttribute('href') ?? null,
        width: box?.width ?? 0,
        height: box?.height ?? 0,
      };
    })())`));
    assert.equal(nexoraPreviewDesktop.asset, "/media/nexora-release-demo.png");
    assert.ok(nexoraPreviewDesktop.width >= 400, "Nexora's desktop proof is too small to inspect");
    assert.ok(nexoraPreviewDesktop.height >= 240, "Nexora's desktop proof is too shallow to inspect");
    await new Promise((resolve) => setTimeout(resolve, 250));
    await capture(client, "work-nexora-desktop.png");

    await openRoute(client, "/work", 390, 844);
    const nexoraPreviewPhone = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const card = [...document.querySelectorAll('h2')]
        .find((item) => item.textContent.trim() === 'Nexora Systems')
        .closest('article');
      card.scrollIntoView({ block: 'center' });
      const preview = card.querySelector('image');
      const box = preview?.getBoundingClientRect();
      return {
        asset: preview?.getAttribute('href') ?? null,
        width: box?.width ?? 0,
        height: box?.height ?? 0,
      };
    })())`));
    assert.equal(nexoraPreviewPhone.asset, "/media/nexora-release-demo.png");
    assert.ok(nexoraPreviewPhone.width >= 300, "Nexora's phone proof is too small to inspect");
    assert.ok(nexoraPreviewPhone.height >= 180, "Nexora's phone proof is too shallow to inspect");
    await new Promise((resolve) => setTimeout(resolve, 250));
    await capture(client, "work-nexora-phone.png");

    await openRoute(client, "/pricing", 390, 844);
    assert.equal(
      await evaluate(client, "getComputedStyle(document.querySelector('.pricing-scope-visual')).display"),
      "none",
      "decorative Pricing diagram still delays package decisions on phone",
    );
    await capture(client, "pricing-phone.png");

    await openRoute(client, "/pricing#orbit-package", 390, 844);
    await waitForAnchorNearTop(client, "orbit-package", 220);
    const pricingAnchorPhone = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const header = document.querySelector('header').getBoundingClientRect();
      const target = document.getElementById('orbit-package').getBoundingClientRect();
      return { hash: location.hash, headerBottom: header.bottom, targetTop: target.top, targetBottom: target.bottom };
    })())`));
    assert.equal(pricingAnchorPhone.hash, "#orbit-package");
    assert.ok(pricingAnchorPhone.targetTop >= pricingAnchorPhone.headerBottom, "Orbit anchor is hidden behind the phone header");
    assert.ok(
      pricingAnchorPhone.targetTop < 220,
      `Orbit anchor leaves the named package too far below the phone header: ${JSON.stringify(pricingAnchorPhone)}`,
    );
    assert.ok(pricingAnchorPhone.targetBottom <= 844, "Orbit package decision does not fit in the phone viewport after navigation");
    await capture(client, "pricing-orbit-anchor-phone.png");

    await openRoute(client, "/contact?interest=orbit-package", 390, 844);
    const contactPhone = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const form = document.querySelector('form').getBoundingClientRect();
      const direct = [...document.querySelectorAll('h2')].find((item) => item.textContent.trim() === 'Reach us directly').closest('div').getBoundingClientRect();
      return { formTop: form.top, directTop: direct.top, contextVisible: document.body.textContent.includes('Orbit package — small-business website') };
    })())`));
    assert.ok(contactPhone.formTop < 660, "primary short inquiry starts below the first phone viewport");
    assert.ok(contactPhone.formTop < contactPhone.directTop, "direct alternatives still precede the primary short inquiry");
    assert.equal(contactPhone.contextVisible, true, "Orbit inquiry context is missing");
    await capture(client, "contact-phone.png");

    assert.deepEqual(failures, []);
    console.log(JSON.stringify({
      pricingDesktop,
      pricingAnchorDesktop,
      pricingAnchorPhone,
      servicesDesktop,
      contactPhone,
      nexoraPreviewDesktop,
      nexoraPreviewPhone,
      viewports: ["1280x720", "390x844"],
      runtimeErrors: 0,
      horizontalOverflow: 0,
      status: "passed",
    }, null, 2));
  } finally {
    client?.close();
    if (browser.exitCode === null) browser.kill();
    await new Promise((resolve) => setTimeout(resolve, 300));
    await rm(profile, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
