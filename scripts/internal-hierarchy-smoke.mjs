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

async function getAccessibleName(client, selector) {
  const { root } = await client.send("DOM.getDocument");
  const { nodeId } = await client.send("DOM.querySelector", {
    nodeId: root.nodeId,
    selector,
  });
  assert.notEqual(nodeId, 0, `Could not find ${selector} for accessibility proof`);
  const { nodes } = await client.send("Accessibility.getPartialAXTree", {
    nodeId,
    fetchRelatives: false,
  });
  return nodes[0]?.name?.value ?? null;
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
      if (!['EBUSY', 'EPERM'].includes(error?.code) || attempt === 19) throw error;
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }
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

    await openRoute(client, "/", 1280, 720);
    assert.equal(
      await getAccessibleName(client, ".home-hero-copy h1"),
      "Websites built to make your business unmistakable.",
      "Home's primary buyer promise loses a word boundary in the accessibility tree",
    );
    const homeTimingDesktop = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const item = [...document.querySelectorAll('.home-signal-rail li')]
        .find((element) => element.textContent.includes('Website timelines'));
      const label = item?.querySelector('.leading-snug');
      item?.scrollIntoView({ block: 'center' });
      const itemBox = item?.getBoundingClientRect();
      const labelBox = label?.getBoundingClientRect();
      return {
        text: label?.textContent.trim() ?? null,
        itemHeight: itemBox?.height ?? 0,
        labelHeight: labelBox?.height ?? 0,
        contained: Boolean(itemBox && labelBox && labelBox.left >= itemBox.left && labelBox.right <= itemBox.right + 1 && labelBox.top >= itemBox.top && labelBox.bottom <= itemBox.bottom + 1),
      };
    })())`));
    assert.equal(homeTimingDesktop.text, "Website timelines: 2–14+ weeks by scope");
    assert.equal(homeTimingDesktop.contained, true, `Home timing reassurance clips at desktop: ${JSON.stringify(homeTimingDesktop)}`);
    await new Promise((resolve) => setTimeout(resolve, 150));
    await capture(client, "home-timing-desktop.png");

    await openRoute(client, "/", 390, 844);
    const homeTimingPhone = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const item = [...document.querySelectorAll('.home-signal-rail li')]
        .find((element) => element.textContent.includes('Website timelines'));
      const label = item?.querySelector('.leading-snug');
      item?.scrollIntoView({ block: 'center' });
      const itemBox = item?.getBoundingClientRect();
      const labelBox = label?.getBoundingClientRect();
      return {
        text: label?.textContent.trim() ?? null,
        itemHeight: itemBox?.height ?? 0,
        labelHeight: labelBox?.height ?? 0,
        contained: Boolean(itemBox && labelBox && labelBox.left >= itemBox.left && labelBox.right <= itemBox.right + 1 && labelBox.top >= itemBox.top && labelBox.bottom <= itemBox.bottom + 1),
      };
    })())`));
    assert.equal(homeTimingPhone.text, "Website timelines: 2–14+ weeks by scope");
    assert.equal(homeTimingPhone.contained, true, `Home timing reassurance clips on phone: ${JSON.stringify(homeTimingPhone)}`);
    await new Promise((resolve) => setTimeout(resolve, 150));
    await capture(client, "home-timing-phone.png");

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

    await openRoute(client, "/work", 1280, 720);
    let initialWorkRailStatus = "";
    for (let attempt = 0; attempt < 30; attempt += 1) {
      initialWorkRailStatus = await evaluate(
        client,
        `document.querySelector('[aria-live="polite"]')?.textContent.trim() ?? ''`,
      );
      if (initialWorkRailStatus === "Projects 1–2 of 4") break;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    assert.equal(initialWorkRailStatus, "Projects 1–2 of 4", "Desktop Work rail did not finish hydrating its visible range");
    const workDecisionDesktop = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const hero = document.querySelector('.page-intro-stage').getBoundingClientRect();
      const firstCard = document.querySelector('main article').getBoundingClientRect();
      const firstArtwork = document.querySelector('main article > :first-child').getBoundingClientRect();
      return {
        heroHeight: hero.height,
        firstCardTop: firstCard.top,
        firstArtworkBottom: firstArtwork.bottom,
      };
    })())`));
    assert.ok(workDecisionDesktop.heroHeight <= 360, "Work intro again dominates the first viewport");
    assert.ok(workDecisionDesktop.firstCardTop <= 530, "Work proof does not enter the opening desktop viewport soon enough");
    assert.ok(workDecisionDesktop.firstArtworkBottom <= 720, "Work's first project artwork is not fully visible in the opening desktop viewport");
    await capture(client, "work-decision-desktop.png");

    const workRailDesktop = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const rail = document.getElementById('work-project-rail');
      const cards = [...rail.querySelectorAll('[data-work-card]')];
      const previous = document.querySelector('[aria-label="Previous projects"]');
      const next = document.querySelector('[aria-label="Next projects"]');
      return {
        order: cards.map((card) => card.querySelector('h2').textContent.trim()),
        cardWidths: cards.map((card) => card.getBoundingClientRect().width),
        clientWidth: rail.clientWidth,
        scrollWidth: rail.scrollWidth,
        overflowX: getComputedStyle(rail).overflowX,
        scrollSnapType: getComputedStyle(rail).scrollSnapType,
        previousHeight: previous.getBoundingClientRect().height,
        nextHeight: next.getBoundingClientRect().height,
        previousDisabled: previous.getAttribute('aria-disabled'),
        nextDisabled: next.getAttribute('aria-disabled'),
        label: rail.getAttribute('aria-label'),
        description: rail.getAttribute('aria-describedby').split(/\\s+/).map((id) => document.getElementById(id).textContent.trim()).join(' '),
        status: document.querySelector('[aria-live="polite"]').textContent.trim(),
        caseStudyHrefs: cards.map((card) => card.querySelector('a').getAttribute('href')),
      };
    })())`));
    assert.deepEqual(workRailDesktop.order, ["Velora", "Nexora Systems", "EduAILenz", "Mudoinkle"]);
    assert.ok(workRailDesktop.scrollWidth > workRailDesktop.clientWidth * 1.9, "Work rail does not expose the full horizontal collection");
    assert.equal(workRailDesktop.overflowX, "auto", "Work rail is not a native horizontal scroller");
    assert.match(workRailDesktop.scrollSnapType, /^x /, "Work rail lacks horizontal scroll snapping");
    assert.ok(workRailDesktop.cardWidths.every((width) => width >= 500), "Desktop Work cards became unreadable thumbnails");
    assert.ok(workRailDesktop.previousHeight >= 44 && workRailDesktop.nextHeight >= 44, "Work rail controls fall below the 44px interaction floor");
    assert.equal(workRailDesktop.previousDisabled, "true");
    assert.equal(workRailDesktop.nextDisabled, "false");
    assert.equal(workRailDesktop.label, "Cyvexly work projects");
    assert.match(workRailDesktop.description, /Swipe.*arrow/i);
    assert.equal(workRailDesktop.status, "Projects 1–2 of 4");
    assert.deepEqual(workRailDesktop.caseStudyHrefs, [
      "/work/velora-dining",
      "/work/nexora-systems",
      "/work/eduailenz",
      "/work/mudoinkle",
    ]);

    const nextControlCenter = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const box = document.querySelector('[aria-label="Next projects"]').getBoundingClientRect();
      return { x: box.left + box.width / 2, y: box.top + box.height / 2 };
    })())`));
    for (let step = 0; step < 2; step += 1) {
      await client.send("Input.dispatchMouseEvent", { type: "mousePressed", button: "left", clickCount: 1, ...nextControlCenter });
      await client.send("Input.dispatchMouseEvent", { type: "mouseReleased", button: "left", clickCount: 1, ...nextControlCenter });
      await new Promise((resolve) => setTimeout(resolve, 450));
    }
    const workRailEnd = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const rail = document.getElementById('work-project-rail');
      const next = document.querySelector('[aria-label="Next projects"]');
      return {
        scrollLeft: rail.scrollLeft,
        maximum: rail.scrollWidth - rail.clientWidth,
        status: document.querySelector('[aria-live="polite"]').textContent.trim(),
        nextDisabled: next.getAttribute('aria-disabled'),
        focusedControl: document.activeElement?.getAttribute('aria-label') ?? null,
      };
    })())`));
    assert.ok(Math.abs(workRailEnd.maximum - workRailEnd.scrollLeft) <= 2, `Work rail did not reach its right edge: ${JSON.stringify(workRailEnd)}`);
    assert.equal(workRailEnd.status, "Projects 3–4 of 4");
    assert.equal(workRailEnd.nextDisabled, "true");
    assert.equal(workRailEnd.focusedControl, "Next projects", "End-of-rail state drops keyboard focus");
    await capture(client, "work-rail-end-desktop.png");

    await evaluate(client, `(() => {
      const rail = document.getElementById('work-project-rail');
      rail.scrollTo({ left: 0, behavior: 'instant' });
      rail.focus();
    })()`);
    await new Promise((resolve) => setTimeout(resolve, 100));
    await client.send("Input.dispatchKeyEvent", { type: "keyDown", key: "ArrowRight", code: "ArrowRight", windowsVirtualKeyCode: 39 });
    await client.send("Input.dispatchKeyEvent", { type: "keyUp", key: "ArrowRight", code: "ArrowRight", windowsVirtualKeyCode: 39 });
    for (let attempt = 0; attempt < 30; attempt += 1) {
      const scrollLeft = await evaluate(client, "document.getElementById('work-project-rail').scrollLeft");
      if (scrollLeft > 500) break;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const workRailKeyboard = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const rail = document.getElementById('work-project-rail');
      return {
        scrollLeft: rail.scrollLeft,
        focusedId: document.activeElement?.id ?? null,
        status: document.querySelector('[aria-live="polite"]').textContent.trim(),
      };
    })())`));
    assert.ok(workRailKeyboard.scrollLeft > 500, `ArrowRight did not move the Work rail: ${JSON.stringify(workRailKeyboard)}`);
    assert.equal(workRailKeyboard.focusedId, "work-project-rail");
    assert.equal(workRailKeyboard.status, "Projects 2–3 of 4");

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
    const workDecisionPhone = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const firstCard = document.querySelector('main article').getBoundingClientRect();
      const firstArtwork = document.querySelector('main article > :first-child').getBoundingClientRect();
      return {
        firstCardTop: firstCard.top,
        firstArtworkBottom: firstArtwork.bottom,
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      };
    })())`));
    assert.ok(workDecisionPhone.firstCardTop <= 560, "Work proof does not enter the opening phone viewport soon enough");
    assert.ok(workDecisionPhone.firstArtworkBottom < 844, "Work's first project artwork is not fully visible in the opening phone viewport");
    assert.ok(workDecisionPhone.overflow <= 1, "Work's compact opening causes phone overflow");
    await capture(client, "work-decision-phone.png");

    const workRailPhone = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const rail = document.getElementById('work-project-rail');
      const card = rail.querySelector('[data-work-card]').getBoundingClientRect();
      const previous = document.querySelector('[aria-label="Previous projects"]');
      const next = document.querySelector('[aria-label="Next projects"]');
      return {
        cardWidth: card.width,
        clientWidth: rail.clientWidth,
        scrollWidth: rail.scrollWidth,
        previousHeight: previous.getBoundingClientRect().height,
        nextHeight: next.getBoundingClientRect().height,
        status: document.querySelector('[aria-live="polite"]').textContent.trim(),
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      };
    })())`));
    assert.ok(workRailPhone.cardWidth >= 300, "Phone Work card is too narrow to read");
    assert.ok(Math.abs(workRailPhone.cardWidth - workRailPhone.clientWidth) <= 6, "Phone Work card does not use the available readable width");
    assert.ok(workRailPhone.scrollWidth > workRailPhone.clientWidth * 3, "Phone Work rail does not contain all four projects");
    assert.ok(workRailPhone.previousHeight >= 44 && workRailPhone.nextHeight >= 44, "Phone Work controls fall below the 44px interaction floor");
    assert.equal(workRailPhone.status, "Project 1 of 4");
    assert.ok(workRailPhone.overflow <= 1, "Phone Work rail causes page-level overflow");

    await client.send("Input.dispatchTouchEvent", {
      type: "touchStart",
      touchPoints: [{ x: 330, y: Math.min(800, workDecisionPhone.firstCardTop + 110), radiusX: 4, radiusY: 4, force: 1 }],
    });
    await client.send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [{ x: 70, y: Math.min(800, workDecisionPhone.firstCardTop + 110), radiusX: 4, radiusY: 4, force: 1 }],
    });
    await client.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
    await new Promise((resolve) => setTimeout(resolve, 450));
    const workRailTouch = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const rail = document.getElementById('work-project-rail');
      return { scrollLeft: rail.scrollLeft, status: document.querySelector('[aria-live="polite"]').textContent.trim() };
    })())`));
    assert.ok(workRailTouch.scrollLeft > 100, `Touch swipe did not move the phone Work rail: ${JSON.stringify(workRailTouch)}`);
    assert.ok(Math.abs(await evaluate(client, "window.scrollY")) <= 1, "Horizontal touch movement unexpectedly scrolled the Work page vertically");
    await capture(client, "work-rail-touch-phone.png");

    await client.send("Emulation.setEmulatedMedia", {
      features: [{ name: "prefers-reduced-motion", value: "reduce" }],
    });
    await openRoute(client, "/work", 390, 844);
    for (let attempt = 0; attempt < 30; attempt += 1) {
      const ready = await evaluate(
        client,
        `document.querySelector('[aria-live="polite"]')?.textContent.trim() === 'Project 1 of 4'`,
      );
      if (ready) break;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const workRailReducedMotion = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const rail = document.getElementById('work-project-rail');
      document.querySelector('[aria-label="Next projects"]').click();
      return {
        preference: matchMedia('(prefers-reduced-motion: reduce)').matches,
        scrollBehavior: getComputedStyle(rail).scrollBehavior,
        scrollLeft: rail.scrollLeft,
      };
    })())`));
    assert.equal(workRailReducedMotion.preference, true);
    assert.equal(workRailReducedMotion.scrollBehavior, "auto");
    assert.ok(workRailReducedMotion.scrollLeft > 100, "Reduced-motion rail movement was not immediate");
    await client.send("Emulation.setEmulatedMedia", { features: [] });

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

    await openRoute(client, "/work", 768, 1024);
    const workRailTablet = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const rail = document.getElementById('work-project-rail');
      const cards = [...rail.querySelectorAll('[data-work-card]')];
      return {
        cardWidths: cards.map((card) => card.getBoundingClientRect().width),
        clientWidth: rail.clientWidth,
        scrollWidth: rail.scrollWidth,
        controls: [...document.querySelectorAll('.work-rail-control')].map((control) => control.getBoundingClientRect().height),
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      };
    })())`));
    assert.ok(workRailTablet.cardWidths.every((width) => width >= 300), "Tablet Work cards are too narrow to inspect");
    assert.ok(workRailTablet.scrollWidth > workRailTablet.clientWidth * 1.9, "Tablet Work rail does not expose the full collection");
    assert.ok(workRailTablet.controls.every((height) => height >= 44), "Tablet Work controls fall below the interaction floor");
    assert.ok(workRailTablet.overflow <= 1, "Tablet Work rail causes page-level overflow");
    await capture(client, "work-rail-tablet.png");

    await openRoute(client, "/work", 320, 568);
    let minimumPhoneStatus = "";
    for (let attempt = 0; attempt < 30; attempt += 1) {
      minimumPhoneStatus = await evaluate(
        client,
        `document.querySelector('[aria-live="polite"]')?.textContent.trim() ?? ''`,
      );
      if (minimumPhoneStatus === "Project 1 of 4") break;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const workRailMinimumPhone = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const rail = document.getElementById('work-project-rail');
      const card = rail.querySelector('[data-work-card]').getBoundingClientRect();
      return {
        cardWidth: card.width,
        clientWidth: rail.clientWidth,
        scrollWidth: rail.scrollWidth,
        controls: [...document.querySelectorAll('.work-rail-control')].map((control) => control.getBoundingClientRect().height),
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      };
    })())`));
    assert.equal(minimumPhoneStatus, "Project 1 of 4");
    assert.ok(workRailMinimumPhone.cardWidth >= 240, "Minimum-phone Work card is too narrow to read");
    assert.ok(workRailMinimumPhone.scrollWidth > workRailMinimumPhone.clientWidth * 3, "Minimum-phone Work rail does not contain all projects");
    assert.ok(workRailMinimumPhone.controls.every((height) => height >= 44), "Minimum-phone Work controls fall below the interaction floor");
    assert.ok(workRailMinimumPhone.overflow <= 1, "Minimum-phone Work rail causes page-level overflow");
    await evaluate(client, `(() => {
      const railHeader = document.getElementById('work-project-rail').previousElementSibling;
      window.scrollTo({
        top: window.scrollY + railHeader.getBoundingClientRect().top - 96,
        behavior: 'instant',
      });
    })()`);
    await capture(client, "work-rail-minimum-phone.png");

    await openRoute(client, "/", 1280, 720);
    await evaluate(client, `(() => {
      const railHeader = document.getElementById('home-work-project-rail').previousElementSibling;
      window.scrollTo({ top: window.scrollY + railHeader.getBoundingClientRect().top - 104, behavior: 'instant' });
    })()`);
    let homeRailDesktopStatus = "";
    for (let attempt = 0; attempt < 30; attempt += 1) {
      homeRailDesktopStatus = await evaluate(
        client,
        `document.getElementById('home-work-rail-status')?.textContent.trim() ?? ''`,
      );
      if (homeRailDesktopStatus === "Projects 1–2 of 4") break;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    const homeRailDesktop = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const rail = document.getElementById('home-work-project-rail');
      const cards = [...rail.querySelectorAll('[data-work-card]')];
      const controls = [...document.querySelectorAll('[aria-controls="home-work-project-rail"]')];
      return {
        heading: rail.closest('section').querySelector('h2').textContent.trim(),
        order: cards.map((card) => card.querySelector('h3').textContent.trim()),
        cardWidths: cards.map((card) => card.getBoundingClientRect().width),
        clientWidth: rail.clientWidth,
        scrollWidth: rail.scrollWidth,
        label: rail.getAttribute('aria-label'),
        describedBy: rail.getAttribute('aria-describedby'),
        controlHeights: controls.map((control) => control.getBoundingClientRect().height),
        controlTargets: controls.map((control) => control.getAttribute('aria-controls')),
        previousDisabled: controls[0].getAttribute('aria-disabled'),
        nextDisabled: controls[1].getAttribute('aria-disabled'),
        caseStudyHrefs: cards.map((card) => card.querySelector('a').getAttribute('href')),
        staleCopy: /Two working demos|Compare both projects|Both are fictional/.test(document.body.innerText),
      };
    })())`));
    assert.equal(homeRailDesktopStatus, "Projects 1–2 of 4", "Desktop Home rail did not hydrate its visible range");
    assert.equal(homeRailDesktop.heading, "Four projects. Four different problems.");
    assert.deepEqual(homeRailDesktop.order, ["Velora", "Nexora Systems", "EduAILenz", "Mudoinkle"]);
    assert.ok(homeRailDesktop.cardWidths.every((width) => width >= 500), "Desktop Home cards became unreadable thumbnails");
    assert.ok(homeRailDesktop.scrollWidth > homeRailDesktop.clientWidth * 1.9, "Home rail does not expose all four projects");
    assert.equal(homeRailDesktop.label, "Featured Cyvexly work projects");
    assert.equal(homeRailDesktop.describedBy, "home-work-rail-instructions home-work-rail-instructions-mobile");
    assert.ok(homeRailDesktop.controlHeights.every((height) => height >= 44), "Desktop Home controls fall below the interaction floor");
    assert.deepEqual(homeRailDesktop.controlTargets, ["home-work-project-rail", "home-work-project-rail"]);
    assert.equal(homeRailDesktop.previousDisabled, "true");
    assert.equal(homeRailDesktop.nextDisabled, "false");
    assert.deepEqual(homeRailDesktop.caseStudyHrefs, [
      "/work/velora-dining",
      "/work/nexora-systems",
      "/work/eduailenz",
      "/work/mudoinkle",
    ]);
    assert.equal(homeRailDesktop.staleCopy, false, "Home still describes a two-project collection");
    await capture(client, "home-rail-desktop.png");

    await evaluate(client, `document.querySelector('[aria-controls="home-work-project-rail"][aria-label="Next projects"]').scrollIntoView({ block: 'center', behavior: 'instant' })`);
    const homeNextCenter = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const box = document.querySelector('[aria-controls="home-work-project-rail"][aria-label="Next projects"]').getBoundingClientRect();
      return { x: box.left + box.width / 2, y: box.top + box.height / 2 };
    })())`));
    for (let step = 0; step < 4; step += 1) {
      await client.send("Input.dispatchMouseEvent", { type: "mousePressed", button: "left", clickCount: 1, ...homeNextCenter });
      await client.send("Input.dispatchMouseEvent", { type: "mouseReleased", button: "left", clickCount: 1, ...homeNextCenter });
      await new Promise((resolve) => setTimeout(resolve, 450));
    }
    const homeRailEnd = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const rail = document.getElementById('home-work-project-rail');
      const next = document.querySelector('[aria-controls="home-work-project-rail"][aria-label="Next projects"]');
      return {
        scrollLeft: rail.scrollLeft,
        maximum: rail.scrollWidth - rail.clientWidth,
        status: document.getElementById('home-work-rail-status').textContent.trim(),
        nextDisabled: next.getAttribute('aria-disabled'),
        focusedControl: document.activeElement?.getAttribute('aria-label') ?? null,
      };
    })())`));
    assert.ok(Math.abs(homeRailEnd.maximum - homeRailEnd.scrollLeft) <= 8, `Home rail did not reach its right edge: ${JSON.stringify(homeRailEnd)}`);
    assert.equal(homeRailEnd.status, "Projects 3–4 of 4");
    assert.equal(homeRailEnd.nextDisabled, "true");
    assert.equal(homeRailEnd.focusedControl, "Next projects", "Home end state drops focus");

    await evaluate(client, `(() => {
      const rail = document.getElementById('home-work-project-rail');
      rail.scrollTo({ left: 0, behavior: 'instant' });
      rail.focus();
    })()`);
    await new Promise((resolve) => setTimeout(resolve, 100));
    await client.send("Input.dispatchKeyEvent", { type: "keyDown", key: "ArrowRight", code: "ArrowRight", windowsVirtualKeyCode: 39 });
    await client.send("Input.dispatchKeyEvent", { type: "keyUp", key: "ArrowRight", code: "ArrowRight", windowsVirtualKeyCode: 39 });
    for (let attempt = 0; attempt < 30; attempt += 1) {
      if (await evaluate(client, "document.getElementById('home-work-project-rail').scrollLeft > 500")) break;
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    assert.equal(
      await evaluate(client, "document.activeElement?.id"),
      "home-work-project-rail",
      "Arrow-key Home browsing lost rail focus",
    );
    await capture(client, "home-rail-keyboard-desktop.png");

    await openRoute(client, "/", 768, 1024);
    await evaluate(client, `(() => {
      const railHeader = document.getElementById('home-work-project-rail').previousElementSibling;
      window.scrollTo({ top: window.scrollY + railHeader.getBoundingClientRect().top - 104, behavior: 'instant' });
    })()`);
    const homeRailTablet = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const rail = document.getElementById('home-work-project-rail');
      const cards = [...rail.querySelectorAll('[data-work-card]')];
      return {
        cardWidths: cards.map((card) => card.getBoundingClientRect().width),
        scrollWidth: rail.scrollWidth,
        clientWidth: rail.clientWidth,
        controls: [...document.querySelectorAll('[aria-controls="home-work-project-rail"]')].map((control) => control.getBoundingClientRect().height),
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      };
    })())`));
    assert.ok(homeRailTablet.cardWidths.every((width) => width >= 300), "Tablet Home cards are too narrow to inspect");
    assert.ok(homeRailTablet.scrollWidth > homeRailTablet.clientWidth * 1.9, "Tablet Home rail does not expose the collection");
    assert.ok(homeRailTablet.controls.every((height) => height >= 44), "Tablet Home controls fall below the interaction floor");
    assert.ok(homeRailTablet.overflow <= 1, "Tablet Home rail causes page-level overflow");
    await capture(client, "home-rail-tablet.png");

    await openRoute(client, "/", 390, 844);
    await evaluate(client, `(() => {
      const railHeader = document.getElementById('home-work-project-rail').previousElementSibling;
      window.scrollTo({ top: window.scrollY + railHeader.getBoundingClientRect().top - 104, behavior: 'instant' });
    })()`);
    const homeRailPhone = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const rail = document.getElementById('home-work-project-rail');
      const card = rail.querySelector('[data-work-card]').getBoundingClientRect();
      const box = rail.getBoundingClientRect();
      return {
        cardWidth: card.width,
        clientWidth: rail.clientWidth,
        scrollWidth: rail.scrollWidth,
        startScrollY: window.scrollY,
        touchY: Math.min(innerHeight - 40, Math.max(40, box.top + 110)),
        controls: [...document.querySelectorAll('[aria-controls="home-work-project-rail"]')].map((control) => control.getBoundingClientRect().height),
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      };
    })())`));
    assert.ok(homeRailPhone.cardWidth >= 300, "Phone Home card is too narrow to read");
    assert.ok(Math.abs(homeRailPhone.cardWidth - homeRailPhone.clientWidth) <= 6, "Phone Home card does not use the readable width");
    assert.ok(homeRailPhone.scrollWidth > homeRailPhone.clientWidth * 3, "Phone Home rail does not contain all projects");
    assert.ok(homeRailPhone.controls.every((height) => height >= 44), "Phone Home controls fall below the interaction floor");
    assert.ok(homeRailPhone.overflow <= 1, "Phone Home rail causes page-level overflow");
    await client.send("Input.dispatchTouchEvent", {
      type: "touchStart",
      touchPoints: [{ x: 330, y: homeRailPhone.touchY, radiusX: 4, radiusY: 4, force: 1 }],
    });
    await client.send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [{ x: 70, y: homeRailPhone.touchY, radiusX: 4, radiusY: 4, force: 1 }],
    });
    await client.send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
    await new Promise((resolve) => setTimeout(resolve, 450));
    const homeRailTouch = JSON.parse(await evaluate(client, `JSON.stringify({
      scrollLeft: document.getElementById('home-work-project-rail').scrollLeft,
      scrollY: window.scrollY,
      status: document.getElementById('home-work-rail-status').textContent.trim(),
    })`));
    assert.ok(homeRailTouch.scrollLeft > 100, `Touch swipe did not move the phone Home rail: ${JSON.stringify(homeRailTouch)}`);
    assert.ok(Math.abs(homeRailTouch.scrollY - homeRailPhone.startScrollY) <= 2, "Horizontal touch movement unexpectedly scrolled Home vertically");
    await capture(client, "home-rail-phone.png");

    await client.send("Emulation.setEmulatedMedia", {
      features: [{ name: "prefers-reduced-motion", value: "reduce" }],
    });
    await openRoute(client, "/", 390, 844);
    await evaluate(client, `(() => {
      const railHeader = document.getElementById('home-work-project-rail').previousElementSibling;
      window.scrollTo({ top: window.scrollY + railHeader.getBoundingClientRect().top - 104, behavior: 'instant' });
    })()`);
    const homeRailReducedMotion = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const rail = document.getElementById('home-work-project-rail');
      document.querySelector('[aria-controls="home-work-project-rail"][aria-label="Next projects"]').click();
      return {
        preference: matchMedia('(prefers-reduced-motion: reduce)').matches,
        scrollBehavior: getComputedStyle(rail).scrollBehavior,
        scrollLeft: rail.scrollLeft,
      };
    })())`));
    assert.equal(homeRailReducedMotion.preference, true);
    assert.equal(homeRailReducedMotion.scrollBehavior, "auto");
    assert.ok(homeRailReducedMotion.scrollLeft > 100, "Reduced-motion Home rail movement was not immediate");
    await client.send("Emulation.setEmulatedMedia", { features: [] });

    await openRoute(client, "/", 320, 568);
    await evaluate(client, `(() => {
      const railHeader = document.getElementById('home-work-project-rail').previousElementSibling;
      window.scrollTo({ top: window.scrollY + railHeader.getBoundingClientRect().top - 104, behavior: 'instant' });
    })()`);
    const homeRailMinimumPhone = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const rail = document.getElementById('home-work-project-rail');
      const card = rail.querySelector('[data-work-card]').getBoundingClientRect();
      return {
        cardWidth: card.width,
        scrollWidth: rail.scrollWidth,
        clientWidth: rail.clientWidth,
        controls: [...document.querySelectorAll('[aria-controls="home-work-project-rail"]')].map((control) => control.getBoundingClientRect().height),
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      };
    })())`));
    assert.ok(homeRailMinimumPhone.cardWidth >= 240, "Minimum-phone Home card is too narrow to read");
    assert.ok(homeRailMinimumPhone.scrollWidth > homeRailMinimumPhone.clientWidth * 3, "Minimum-phone Home rail does not contain all projects");
    assert.ok(homeRailMinimumPhone.controls.every((height) => height >= 44), "Minimum-phone Home controls fall below the interaction floor");
    assert.ok(homeRailMinimumPhone.overflow <= 1, "Minimum-phone Home rail causes page-level overflow");
    await capture(client, "home-rail-minimum-phone.png");

    await openRoute(client, "/pricing", 390, 844);
    assert.equal(
      await evaluate(client, "getComputedStyle(document.querySelector('.pricing-scope-visual')).display"),
      "none",
      "decorative Pricing diagram still delays package decisions on phone",
    );
    const pricingNavPhone = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const links = document.querySelector('.pricing-section-links');
      const rows = new Set(
        [...links.querySelectorAll('a')].map((item) => Math.round(item.getBoundingClientRect().top)),
      );
      return {
        clientWidth: links.clientWidth,
        scrollWidth: links.scrollWidth,
        overflowX: getComputedStyle(links).overflowX,
        rows: rows.size,
      };
    })())`));
    assert.ok(
      pricingNavPhone.scrollWidth <= pricingNavPhone.clientWidth + 1,
      `Pricing section links still require horizontal scrolling on phone: ${JSON.stringify(pricingNavPhone)}`,
    );
    assert.notEqual(
      pricingNavPhone.overflowX,
      "auto",
      `Pricing section links still expose a native horizontal scrollbar: ${JSON.stringify(pricingNavPhone)}`,
    );
    assert.ok(
      pricingNavPhone.rows >= 2,
      `Pricing section links did not reflow into readable phone rows: ${JSON.stringify(pricingNavPhone)}`,
    );
    await capture(client, "pricing-phone.png");

    await openRoute(client, "/pricing", 320, 568);
    const pricingNavMinimumPhone = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const links = document.querySelector('.pricing-section-links');
      return {
        clientWidth: links.clientWidth,
        scrollWidth: links.scrollWidth,
        overflowX: getComputedStyle(links).overflowX,
      };
    })())`));
    assert.ok(
      pricingNavMinimumPhone.scrollWidth <= pricingNavMinimumPhone.clientWidth + 1,
      `Pricing section links overflow the minimum phone width: ${JSON.stringify(pricingNavMinimumPhone)}`,
    );
    assert.notEqual(
      pricingNavMinimumPhone.overflowX,
      "auto",
      `Pricing section links retain a native scrollbar at the minimum phone width: ${JSON.stringify(pricingNavMinimumPhone)}`,
    );
    await evaluate(client, `(() => {
      const nav = document.querySelector('[aria-label="Pricing sections"]');
      const header = document.querySelector('header').getBoundingClientRect();
      window.scrollTo(0, nav.offsetTop - header.height - 8);
    })()`);
    await new Promise((resolve) => setTimeout(resolve, 150));
    await capture(client, "pricing-minimum-phone.png");

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
      const directActionHeights = [...document.querySelectorAll('main a[href^="mailto:"], main a[href^="tel:"]')]
        .map((item) => item.getBoundingClientRect().height);
      return {
        formTop: form.top,
        directTop: direct.top,
        directActionHeights,
        contextVisible: document.body.textContent.includes('Orbit package — small-business website'),
      };
    })())`));
    assert.ok(contactPhone.formTop < 660, "primary short inquiry starts below the first phone viewport");
    assert.ok(contactPhone.formTop < contactPhone.directTop, "direct alternatives still precede the primary short inquiry");
    assert.equal(contactPhone.directActionHeights.length, 2, "direct email and phone alternatives are missing");
    assert.ok(
      contactPhone.directActionHeights.every((height) => height >= 44),
      `direct contact alternatives fall below the 44px interaction floor: ${JSON.stringify(contactPhone.directActionHeights)}`,
    );
    assert.equal(contactPhone.contextVisible, true, "Orbit inquiry context is missing");
    await capture(client, "contact-phone.png");

    await openRoute(client, "/contact?interest=orbit-package", 320, 568);
    const contactMinimumPhone = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const form = document.querySelector('form').getBoundingClientRect();
      const required = [...document.querySelectorAll('form p')]
        .find((item) => item.textContent.trim().endsWith('Required fields'))
        ?.getBoundingClientRect();
      const name = document.querySelector('label[for="name"]').getBoundingClientRect();
      return {
        formTop: form.top,
        requiredTop: required?.top ?? Number.POSITIVE_INFINITY,
        nameTop: name.top,
        nameBottom: name.bottom,
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      };
    })())`));
    assert.ok(
      contactMinimumPhone.requiredTop < 568,
      `the first inquiry decision is below the minimum phone viewport: ${JSON.stringify(contactMinimumPhone)}`,
    );
    assert.ok(
      contactMinimumPhone.nameBottom < 568,
      `the first inquiry field label is not fully visible in the minimum phone viewport: ${JSON.stringify(contactMinimumPhone)}`,
    );
    assert.ok(
      contactMinimumPhone.scrollWidth <= contactMinimumPhone.clientWidth + 1,
      `the compact phone inquiry overflows horizontally: ${JSON.stringify(contactMinimumPhone)}`,
    );
    await capture(client, "contact-minimum-phone.png");

    await openRoute(client, "/contact?interest=orbit-package", 1280, 720);
    const contactDesktop = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const form = document.querySelector('form').getBoundingClientRect();
      const required = [...document.querySelectorAll('form p')]
        .find((item) => item.textContent.trim().endsWith('Required fields'))
        ?.getBoundingClientRect();
      const direct = [...document.querySelectorAll('h2')]
        .find((item) => item.textContent.trim() === 'Reach us directly')
        .closest('div')
        .getBoundingClientRect();
      return {
        formTop: form.top,
        requiredTop: required?.top ?? Number.POSITIVE_INFINITY,
        directTop: direct.top,
      };
    })())`));
    assert.ok(
      contactDesktop.formTop <= 520,
      `primary short inquiry does not enter the first desktop viewport soon enough: ${JSON.stringify(contactDesktop)}`,
    );
    assert.ok(
      contactDesktop.requiredTop < 620,
      `the first inquiry decision is not visible in the first desktop viewport: ${JSON.stringify(contactDesktop)}`,
    );
    assert.ok(contactDesktop.formTop <= contactDesktop.directTop, "desktop direct alternatives precede the primary short inquiry");
    await capture(client, "contact-desktop.png");

    await openRoute(client, "/start?service=ecommerce-websites", 1280, 720);
    let plannerStorageReady = false;
    for (let attempt = 0; attempt < 40; attempt += 1) {
      plannerStorageReady = await evaluate(client, "document.getElementById('planner-storage-note') !== null");
      if (plannerStorageReady) break;
      await new Promise((resolve) => setTimeout(resolve, 125));
    }
    assert.equal(
      plannerStorageReady,
      true,
      "Planner does not disclose device-local draft storage before the save action",
    );
    await evaluate(client, "document.getElementById('planner-storage-note').scrollIntoView({ block: 'center', behavior: 'instant' })");
    await new Promise((resolve) => setTimeout(resolve, 150));
    const plannerStorageDesktop = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const note = document.getElementById('planner-storage-note');
      const save = [...document.querySelectorAll('button')]
        .find((item) => item.textContent.trim() === 'Save & continue later');
      return {
        noteText: note.textContent.replace(/\\s+/g, ' ').trim(),
        saveDescription: save.getAttribute('aria-describedby'),
        noteTop: note.getBoundingClientRect().top,
        noteBottom: note.getBoundingClientRect().bottom,
        saveTop: save.getBoundingClientRect().top,
      };
    })())`));
    assert.equal(
      plannerStorageDesktop.noteText,
      "Save for later stores this draft only in this browser on this device. Cyvexly cannot see it until you submit.",
    );
    assert.equal(plannerStorageDesktop.saveDescription, "planner-storage-note");
    assert.ok(plannerStorageDesktop.noteBottom < plannerStorageDesktop.saveTop, "Planner storage disclosure does not precede the save action");
    await new Promise((resolve) => setTimeout(resolve, 150));
    await capture(client, "planner-storage-desktop.png");

    const saveCenter = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const box = [...document.querySelectorAll('button')]
        .find((item) => item.textContent.trim() === 'Save & continue later')
        .getBoundingClientRect();
      return { x: box.left + box.width / 2, y: box.top + box.height / 2 };
    })())`));
    await client.send("Input.dispatchMouseEvent", { type: "mousePressed", button: "left", clickCount: 1, ...saveCenter });
    await client.send("Input.dispatchMouseEvent", { type: "mouseReleased", button: "left", clickCount: 1, ...saveCenter });
    const plannerSaveResult = JSON.parse(await evaluate(client, `JSON.stringify({
      statusVisible: document.body.textContent.includes('Saved on this device. Come back to this page any time to continue.'),
      draftStored: localStorage.getItem('cyvexly-planner-draft-v1') !== null,
    })`));
    assert.deepEqual(plannerSaveResult, { statusVisible: true, draftStored: true });
    await evaluate(client, "localStorage.removeItem('cyvexly-planner-draft-v1')");

    await openRoute(client, "/start?service=ecommerce-websites", 390, 844);
    await evaluate(client, "document.getElementById('planner-storage-note').scrollIntoView({ block: 'center', behavior: 'instant' })");
    await new Promise((resolve) => setTimeout(resolve, 150));
    const plannerStoragePhone = JSON.parse(await evaluate(client, `JSON.stringify((() => {
      const note = document.getElementById('planner-storage-note');
      const save = [...document.querySelectorAll('button')]
        .find((item) => item.textContent.trim() === 'Save & continue later');
      const next = [...document.querySelectorAll('button')]
        .find((item) => item.textContent.trim() === 'Continue →');
      const header = document.querySelector('header').getBoundingClientRect();
      const noteBox = note.getBoundingClientRect();
      return {
        headerBottom: header.bottom,
        noteTop: noteBox.top,
        noteBottom: noteBox.bottom,
        saveHeight: save.getBoundingClientRect().height,
        continueHeight: next.getBoundingClientRect().height,
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      };
    })())`));
    assert.ok(plannerStoragePhone.noteTop >= plannerStoragePhone.headerBottom, `Planner storage disclosure is hidden behind the phone header: ${JSON.stringify(plannerStoragePhone)}`);
    assert.ok(plannerStoragePhone.noteBottom < 844, `Planner storage disclosure does not fit in the phone viewport: ${JSON.stringify(plannerStoragePhone)}`);
    assert.ok(plannerStoragePhone.saveHeight >= 44, "Planner save action falls below the 44px interaction floor");
    assert.ok(plannerStoragePhone.continueHeight >= 44, "Planner continue action falls below the 44px interaction floor");
    assert.ok(plannerStoragePhone.overflow <= 1, "Planner storage disclosure causes phone overflow");
    await new Promise((resolve) => setTimeout(resolve, 150));
    await capture(client, "planner-storage-phone.png");

    assert.deepEqual(failures, []);
    console.log(JSON.stringify({
      homeTimingDesktop,
      homeTimingPhone,
      pricingDesktop,
      pricingAnchorDesktop,
      pricingAnchorPhone,
      pricingNavPhone,
      pricingNavMinimumPhone,
      servicesDesktop,
      workDecisionDesktop,
      workDecisionPhone,
      workRailDesktop,
      workRailEnd,
      workRailKeyboard,
      workRailPhone,
      workRailTouch,
      workRailReducedMotion,
      workRailTablet,
      workRailMinimumPhone,
      contactPhone,
      contactMinimumPhone,
      contactDesktop,
      plannerStorageDesktop,
      plannerSaveResult,
      plannerStoragePhone,
      nexoraPreviewDesktop,
      nexoraPreviewPhone,
      viewports: ["1280x720", "768x1024", "390x844", "320x568"],
      runtimeErrors: 0,
      horizontalOverflow: 0,
      status: "passed",
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
