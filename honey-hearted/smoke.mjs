import { spawn } from "node:child_process";
import { mkdir, readdir, rm, stat, writeFile } from "node:fs/promises";
import { createServer } from "node:net";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const url = process.argv[2] || "http://127.0.0.1:5173/honey-hearted";
const evidenceDir = resolve(
  process.argv[3] ||
    "docs/agent-system/cyvexly/builder/evidence/honey-hearted-smoke",
);
const chromePath =
  process.env.CHROME_PATH ||
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const sourceRef = process.env.CYVEXLY_SOURCE_REF || "unrecorded-working-tree";
const profileDir = join(
  tmpdir(),
  `cyvexly-honey-hearted-smoke-${process.pid}-${Date.now()}`,
);
const failures = [];
const runtimeErrors = [];
const networkErrors = [];
const networkRequests = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

async function freePort() {
  return new Promise((accept, reject) => {
    const server = createServer();
    server.unref();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      server.close(() => accept(address.port));
    });
  });
}

async function waitForDebugger(port) {
  for (let attempt = 0; attempt < 120; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/list`);
      const pages = await response.json();
      const page = pages.find((entry) => entry.type === "page");
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch {}
    await new Promise((accept) => setTimeout(accept, 100));
  }
  throw new Error("Chrome DevTools endpoint did not become ready.");
}

function createCdp(webSocketUrl) {
  const socket = new WebSocket(webSocketUrl);
  let nextId = 0;
  const pending = new Map();
  const listeners = new Set();

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id) {
      const promise = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) promise.reject(new Error(message.error.message));
      else promise.resolve(message.result);
      return;
    }
    listeners.forEach((listener) => listener(message));
  });

  return {
    ready: new Promise((accept, reject) => {
      socket.addEventListener("open", accept, { once: true });
      socket.addEventListener("error", reject, { once: true });
    }),
    onEvent(listener) {
      listeners.add(listener);
    },
    call(method, params = {}) {
      const id = ++nextId;
      socket.send(JSON.stringify({ id, method, params }));
      return new Promise((resolvePromise, rejectPromise) => {
        pending.set(id, { resolve: resolvePromise, reject: rejectPromise });
      });
    },
  };
}

async function main() {
  await mkdir(evidenceDir, { recursive: true });
  await rm(join(evidenceDir, "HoneyHearted-The-Little-Weekly-Reset.html"), {
    force: true,
  });
  const routeResponse = await fetch(url);
  const route = {
    status: routeResponse.status,
    contentType: routeResponse.headers.get("content-type"),
    robots: routeResponse.headers.get("x-robots-tag"),
  };
  await routeResponse.body?.cancel();
  check(
    route.status === 200 &&
      route.contentType?.startsWith("text/html") &&
      route.robots?.includes("noindex"),
    "Integrated route did not return HTML with explicit response-level no-index protection.",
  );
  const port = await freePort();
  const chrome = spawn(
    chromePath,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      `--remote-debugging-port=${port}`,
      `--user-data-dir=${profileDir}`,
      "about:blank",
    ],
    { stdio: "ignore", windowsHide: true },
  );

  let cdp;
  try {
    cdp = createCdp(await waitForDebugger(port));
    await cdp.ready;
    cdp.onEvent((message) => {
      if (message.method === "Runtime.exceptionThrown") {
        runtimeErrors.push(message.params.exceptionDetails.text);
      }
      if (
        message.method === "Network.loadingFailed" &&
        !message.params.canceled
      ) {
        networkErrors.push(message.params.errorText);
      }
      if (message.method === "Network.requestWillBeSent") {
        const requestUrl = message.params.request.url;
        if (requestUrl.startsWith("http")) networkRequests.push(requestUrl);
      }
    });
    await cdp.call("Page.enable");
    await cdp.call("Runtime.enable");
    await cdp.call("Network.enable");
    await cdp.call("Browser.setDownloadBehavior", {
      behavior: "allow",
      downloadPath: evidenceDir,
      eventsEnabled: true,
    });

    const evaluate = async (expression) => {
      const result = await cdp.call("Runtime.evaluate", {
        expression: `(async()=>{${expression}})()`,
        awaitPromise: true,
        returnByValue: true,
      });
      if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
      return result.result.value;
    };

    const viewport = async (width, height) => {
      await cdp.call("Emulation.setDeviceMetricsOverride", {
        width,
        height,
        screenWidth: width,
        screenHeight: height,
        deviceScaleFactor: 1,
        mobile: width < 600,
      });
    };

    const key = async (value) => {
      const keyCodes = { Enter: 13, Escape: 27, Tab: 9 };
      const windowsVirtualKeyCode =
        keyCodes[value] || value.toUpperCase().charCodeAt(0);
      await cdp.call("Input.dispatchKeyEvent", {
        type: "keyDown",
        key: value,
        code: value,
        windowsVirtualKeyCode,
      });
      await cdp.call("Input.dispatchKeyEvent", {
        type: "keyUp",
        key: value,
        code: value,
        windowsVirtualKeyCode,
      });
    };

    const settle = (milliseconds = 120) =>
      new Promise((accept) => setTimeout(accept, milliseconds));

    const navigate = async (targetUrl = url, readySelector = "#hero-title") => {
      await cdp.call("Page.navigate", { url: targetUrl });
      let ready = false;
      for (let attempt = 0; attempt < 120; attempt += 1) {
        ready = await evaluate(`
          return location.href.startsWith(${JSON.stringify(targetUrl)}) &&
            document.readyState === "complete" &&
            Boolean(document.querySelector(${JSON.stringify(readySelector)}));
        `);
        if (ready) break;
        await settle(100);
      }
      if (!ready) throw new Error(`Timed out waiting for ${targetUrl}`);
      await settle(500);
    };

    const screenshot = async (name, fullPage = false) => {
      let clip;
      if (fullPage) {
        const metrics = await cdp.call("Page.getLayoutMetrics");
        clip = {
          x: 0,
          y: 0,
          width: metrics.cssContentSize.width,
          height: metrics.cssContentSize.height,
          scale: 1,
        };
      }
      const capture = await cdp.call("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: fullPage,
        fromSurface: true,
        ...(clip ? { clip } : {}),
      });
      await writeFile(join(evidenceDir, name), Buffer.from(capture.data, "base64"));
    };

    await viewport(1440, 900);
    await navigate();
    const desktop = await evaluate(`
      const text=document.body.innerText;
      return {
        width:innerWidth,
        scrollWidth:document.documentElement.scrollWidth,
        title:document.title,
        h1:document.querySelectorAll('h1').length,
        main:document.querySelectorAll('main').length,
        preview:text.includes('Design preview · shop & email connections pending'),
        noindex:document.querySelector('meta[name="robots"]')?.content.includes('noindex'),
        actionForms:document.querySelectorAll('form[action]').length,
        options:[...document.querySelectorAll('#contact-subject option')].map(option=>option.textContent.trim()),
        initialProducts:document.querySelectorAll('#product-grid .product-card').length,
        storage:{local:localStorage.length,session:sessionStorage.length,cookie:document.cookie},
        externalAnchors:document.querySelectorAll('a[href^="http"]').length,
        imageProtocols:[...new Set([...document.images]
          .map(image=>image.currentSrc||image.getAttribute('src'))
          .filter(Boolean)
          .map(value=>new URL(value,location.href).protocol))],
      };
    `);
    check(desktop.width === 1440 && desktop.scrollWidth === 1440, "Desktop layout overflowed or used the wrong viewport.");
    check(desktop.h1 === 1 && desktop.main === 1, "Home landmark or heading structure is incorrect.");
    check(desktop.preview && desktop.noindex && desktop.actionForms === 0, "Preview, no-index, or form-transmission boundary is incomplete.");
    check(desktop.options.length === 4 && desktop.options[1] === "A file or access issue", "Contact subject choices are malformed or incomplete.");
    check(desktop.initialProducts === 6, "Initial catalog does not expose all six placeholder resources.");
    check(desktop.storage.local === 0 && desktop.storage.session === 0 && !desktop.storage.cookie, "Preview unexpectedly stored browser data.");
    check(desktop.externalAnchors === 0 && desktop.imageProtocols.every((protocol)=>protocol === "data:"), "Standalone preview exposes an unexpected external asset or link.");
    await screenshot("honey-hearted-desktop-top.png");
    await screenshot("honey-hearted-desktop-full.png", true);

    const catalog = await evaluate(`
      const input=document.querySelector('#resource-search');
      input.value='middle school';input.dispatchEvent(new Event('input',{bubbles:true}));
      const search={count:document.querySelectorAll('#product-grid .product-card').length,text:document.querySelector('#result-count').textContent};
      document.querySelector('#clear-filters').click();
      document.querySelector('[data-filter="reading"]').click();
      const reading={count:document.querySelectorAll('#product-grid .product-card').length,pressed:document.querySelector('[data-filter="reading"]').getAttribute('aria-pressed')};
      document.querySelector('#clear-filters').click();
      const reset={count:document.querySelectorAll('#product-grid .product-card').length,query:input.value};
      return {search,reading,reset};
    `);
    check(catalog.search.count === 1 && catalog.search.text.startsWith("1 resource"), "Catalog search did not narrow to the middle-school resource.");
    check(catalog.reading.count === 1 && catalog.reading.pressed === "true", "Category filtering did not expose the reading collection.");
    check(catalog.reset.count === 6 && catalog.reset.query === "", "Catalog reset did not restore all resources.");

    const product = await evaluate(`
      document.querySelector('a[href="#resource/planner"]').click();
      await new Promise(accept=>setTimeout(accept,100));
      const route={hash:location.hash,title:document.querySelector('#detail-view h1')?.textContent.trim(),tabs:document.querySelectorAll('.gallery-tab').length,homeHidden:document.querySelector('#home-view').hidden};
      const second=document.querySelectorAll('.gallery-tab')[1];second.click();
      const selected={pressed:second.getAttribute('aria-pressed'),zoomKey:document.querySelector('#gallery-stage').dataset.zoomKey};
      const trigger=document.querySelector('#gallery-stage');trigger.id='gallery-return';trigger.focus();trigger.click();
      await new Promise(accept=>setTimeout(accept,50));
      return {route,selected,dialog:{open:document.querySelector('#zoom-dialog').open,locked:document.body.classList.contains('locked'),focused:document.activeElement.getAttribute('aria-label')}};
    `);
    check(product.route.hash === "#resource/planner" && product.route.title.includes("Dream Beachside") && product.route.tabs === 2 && product.route.homeHidden, "Planner detail route or gallery is incomplete.");
    check(product.selected.pressed === "true" && product.selected.zoomKey === "freeSample", "Gallery selection did not update the main preview.");
    check(product.dialog.open && product.dialog.locked, "Preview zoom did not open as a modal dialog.");
    await screenshot("honey-hearted-product-dialog.png");
    await key("Escape");
    await settle();
    const dialogReturn = await evaluate("return {open:document.querySelector('#zoom-dialog').open,locked:document.body.classList.contains('locked'),focused:document.activeElement.id};");
    check(!dialogReturn.open && !dialogReturn.locked && dialogReturn.focused === "gallery-return", "Escape did not close the gallery and return focus to its trigger.");

    const connectionNotice = await evaluate(`
      location.hash='home';await new Promise(accept=>setTimeout(accept,100));
      const before=location.href;document.querySelector('[data-store]').click();await new Promise(accept=>setTimeout(accept,50));
      return {same:location.href===before,open:document.querySelector('#notice-dialog').open,text:document.querySelector('#notice-content').innerText};
    `);
    check(connectionNotice.same && connectionNotice.open && connectionNotice.text.includes("Nothing has been purchased or downloaded"), "Unconnected store action was not safely disclosed.");
    await evaluate("document.querySelector('#notice-dialog [data-close]').click();return true;");

    await evaluate("location.hash='sample';return true;");
    await settle();
    const sample = await evaluate(`
      const title=document.querySelector('#detail-view h1')?.textContent.trim();
      document.querySelector('[data-download-sample]').click();
      return {title,toast:document.querySelector('#toast').textContent};
    `);
    let download;
    for (let attempt = 0; attempt < 80; attempt += 1) {
      const names = await readdir(evidenceDir);
      download = names.find((name) => name === "HoneyHearted-The-Little-Weekly-Reset.html");
      if (download) break;
      await settle(100);
    }
    const downloadSize = download ? (await stat(join(evidenceDir, download))).size : 0;
    check(sample.title.includes("weekly reset") && sample.toast.includes("printable HTML file is ready") && downloadSize > 3000, "Free sample did not produce the promised printable file.");
    const print = await evaluate(`
      document.querySelector('[data-print-sample]').click();
      await new Promise(accept=>setTimeout(accept,250));
      const frame=document.querySelector('#sample-print-frame');
      return {exists:Boolean(frame),title:frame?.contentDocument?.title,hasSheet:Boolean(frame?.contentDocument?.querySelector('.sheet'))};
    `);
    check(print.exists && print.title.includes("Little Weekly Reset") && print.hasSheet, "Print/save flow did not create the printable document.");

    const contentRoutes = await evaluate(`
      const results={};
      for(const hash of ['idea/conversations','idea/planning','idea/reading','page/about','policy/privacy','policy/terms','policy/accessibility','launch','missing-page']){
        location.hash=hash;await new Promise(accept=>setTimeout(accept,60));
        results[hash]={title:document.querySelector('#detail-view h1')?.textContent.trim(),text:document.querySelector('#detail-view').innerText.slice(0,5000),focused:document.activeElement===document.querySelector('#detail-view h1')};
      }
      return results;
    `);
    check(contentRoutes["idea/conversations"].title === "More than a brain break.", "Teaching-idea route did not render.");
    check(contentRoutes["page/about"].text.includes("proposed About copy, not a verified biography"), "About route lost its Owner-review disclosure.");
    check(contentRoutes["policy/privacy"].text.includes("not a finished privacy policy"), "Privacy preview boundary is missing.");
    check(contentRoutes["policy/terms"].text.includes("not the final legal terms"), "Terms preview boundary is missing.");
    check(contentRoutes.launch.text.toLowerCase().includes("not a live shop yet"), "Launch checklist lost its preview boundary.");
    check(contentRoutes["missing-page"].title === "A little lost?", "Unknown hash route did not render the recovery state.");

    await evaluate("location.hash='contact';return true;");
    await settle();
    const forms = await evaluate(`
      const contact=document.querySelector('#contact-form');
      document.querySelector('#contact-name').value='Alex';
      document.querySelector('#contact-email').value='alex@example.com';
      document.querySelector('#contact-subject').value='Report a resource error';
      document.querySelector('#contact-message').value='The planner preview needs a closer look.';
      contact.requestSubmit();
      const contactResult={status:document.querySelector('#contact-status').textContent,name:document.querySelector('#contact-name').value,subject:document.querySelector('#contact-subject').value};
      const newsletter=document.querySelector('#newsletter-form');
      document.querySelector('#newsletter-email').value='alex@example.com';
      document.querySelector('#newsletter-consent').checked=true;
      newsletter.requestSubmit();
      const newsletterResult={status:document.querySelector('#newsletter-status').textContent,email:document.querySelector('#newsletter-email').value,consent:document.querySelector('#newsletter-consent').checked};
      return {contactResult,newsletterResult};
    `);
    check(forms.contactResult.status.includes("not been sent or saved") && forms.contactResult.name === "Alex" && forms.contactResult.subject === "Report a resource error", "Contact preview did not disclose non-delivery and preserve the visitor's entry.");
    check(forms.newsletterResult.status.includes("not been subscribed") && forms.newsletterResult.email === "alex@example.com" && forms.newsletterResult.consent, "Newsletter preview did not disclose non-subscription and preserve the entry.");

    await viewport(390, 844);
    await navigate();
    const mobile = await evaluate(`
      const toggle=document.querySelector('#menu-toggle');toggle.focus();toggle.click();
      return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,expanded:toggle.getAttribute('aria-expanded'),hidden:document.querySelector('#mobile-menu').hidden};
    `);
    check(mobile.width === 390 && mobile.scrollWidth === 390, "Mobile layout overflowed or used the wrong viewport.");
    check(mobile.expanded === "true" && !mobile.hidden, "Mobile navigation did not open.");
    await screenshot("honey-hearted-mobile-menu.png");
    await key("Escape");
    await settle();
    const mobileEscape = await evaluate("return {expanded:document.querySelector('#menu-toggle').getAttribute('aria-expanded'),hidden:document.querySelector('#mobile-menu').hidden,focused:document.activeElement.id};");
    check(mobileEscape.expanded === "false" && mobileEscape.hidden && mobileEscape.focused === "menu-toggle", "Escape did not close mobile navigation and return focus.");

    await cdp.call("Emulation.setEmulatedMedia", {
      features: [{ name: "prefers-reduced-motion", value: "reduce" }],
    });
    const reducedMotion = await evaluate(`
      const button=getComputedStyle(document.querySelector('.btn'));
      return {matches:matchMedia('(prefers-reduced-motion: reduce)').matches,scrollBehavior:getComputedStyle(document.documentElement).scrollBehavior,transitionDuration:button.transitionDuration,animationName:button.animationName};
    `);
    check(reducedMotion.matches && reducedMotion.scrollBehavior === "auto" && reducedMotion.transitionDuration === "0s", "Reduced-motion mode did not remove smooth scrolling and transitions.");

    await cdp.call("Emulation.setEmulatedMedia", {
      features: [{ name: "prefers-reduced-motion", value: "no-preference" }],
    });
    await viewport(320, 800);
    await navigate();
    const reflow = await evaluate(`
      const hero=document.querySelector('#hero-title').getBoundingClientRect();
      const shop=document.querySelector('#shop').getBoundingClientRect();
      return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,hero:{left:hero.left,right:hero.right},shop:{left:shop.left,right:shop.right}};
    `);
    check(reflow.width === 320 && reflow.scrollWidth === 320 && reflow.hero.left >= 0 && reflow.hero.right <= 320 && reflow.shop.left >= 0 && reflow.shop.right <= 320, "320px reflow target overflowed or clipped primary content.");
    await screenshot("honey-hearted-320-top.png");

    const origin = new URL(url).origin;
    const unexpectedNetwork = [
      ...new Set(
        networkRequests.filter(
          (requestUrl) =>
            requestUrl.startsWith("http") &&
            new URL(requestUrl).origin !== origin,
        ),
      ),
    ];
    check(unexpectedNetwork.length === 0, `Unexpected network destinations were contacted: ${unexpectedNetwork.join(", ")}`);

    const result = {
      url,
      sourceRef,
      testedAt: new Date().toISOString(),
      route,
      desktop,
      catalog,
      product,
      dialogReturn,
      connectionNotice,
      sample: { ...sample, download, downloadSize, print },
      contentRoutes,
      forms,
      mobile,
      mobileEscape,
      reducedMotion,
      reflow,
      networkRequests: [...new Set(networkRequests)],
      unexpectedNetwork,
      runtimeErrors,
      networkErrors,
      failures,
      passed:
        failures.length === 0 &&
        runtimeErrors.length === 0 &&
        networkErrors.length === 0,
    };
    await writeFile(
      join(evidenceDir, "smoke-result.json"),
      `${JSON.stringify(result, null, 2)}\n`,
    );
    if (!result.passed) {
      throw new Error(
        `HoneyHearted smoke failed: ${[
          ...failures,
          ...runtimeErrors,
          ...networkErrors,
        ].join(" | ")}`,
      );
    }
    console.log(JSON.stringify(result, null, 2));
  } finally {
    try {
      await cdp?.call("Browser.close");
    } catch {}
    await new Promise((accept) => setTimeout(accept, 400));
    if (!chrome.killed) chrome.kill();
    const absoluteProfile = resolve(profileDir);
    const absoluteTemp = resolve(tmpdir());
    if (!absoluteProfile.startsWith(absoluteTemp)) {
      throw new Error("Refusing to clean a profile outside the OS temp directory.");
    }
    await rm(absoluteProfile, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
