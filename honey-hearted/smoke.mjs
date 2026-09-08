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
      const keyCodes = { Enter: 13, Escape: 27, Tab: 9, " ": 32 };
      const keyCodesByValue = { " ": "Space" };
      const windowsVirtualKeyCode =
        keyCodes[value] || value.toUpperCase().charCodeAt(0);
      await cdp.call("Input.dispatchKeyEvent", {
        type: "keyDown",
        key: value,
        code: keyCodesByValue[value] || value,
        windowsVirtualKeyCode,
      });
      await cdp.call("Input.dispatchKeyEvent", {
        type: "keyUp",
        key: value,
        code: keyCodesByValue[value] || value,
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

    await evaluate("document.body.focus();return true;");
    await key("Tab");
    await settle();
    const skipBefore = await evaluate("const a=document.activeElement;const r=a.getBoundingClientRect();return {text:a.textContent.trim(),href:a.getAttribute('href'),top:r.top,height:r.height};");
    await key("Enter");
    await settle();
    const skipAfter = await evaluate("return {hash:location.hash,focused:document.activeElement.id};");
    check(skipBefore.text === "Skip to main content" && skipBefore.href === "#main" && skipBefore.top >= 0, "A real first Tab did not reveal the skip link.");
    check(skipAfter.hash === "#main" && skipAfter.focused === "main", "Real Enter activation did not move the skip link to the main landmark.");

    await navigate();
    const focusOrder = await evaluate(`
      const selector='a[href],button:not([disabled]),input:not([disabled]):not([type="hidden"]),select:not([disabled]),textarea:not([disabled]),summary,[tabindex]:not([tabindex^="-"])';
      const nodes=[...document.querySelectorAll(selector)].filter(node=>{
        const style=getComputedStyle(node);
        return node.tabIndex>=0 && !node.closest('[hidden]') && style.display!=='none' && style.visibility!=='hidden' && node.getClientRects().length>0;
      });
      nodes.forEach((node,index)=>node.dataset.smokeFocusIndex=String(index));
      nodes[0].focus();
      return {
        total:nodes.length,
        first:{index:Number(document.activeElement.dataset.smokeFocusIndex),text:document.activeElement.textContent.trim()},
        expected:nodes.map((node,index)=>({index,tag:node.tagName,id:node.id,text:(node.getAttribute('aria-label')||node.textContent||node.value||'').trim().slice(0,80)})),
      };
    `);
    const visitedFocusIndexes = [focusOrder.first.index];
    for (let index = 1; index < focusOrder.total; index += 1) {
      await key("Tab");
      await settle(20);
      visitedFocusIndexes.push(await evaluate("return Number(document.activeElement.dataset.smokeFocusIndex);"));
    }
    const expectedFocusIndexes = Array.from({ length: focusOrder.total }, (_, index) => index);
    check(focusOrder.total >= 35 && focusOrder.first.text === "Skip to main content", "Home did not expose the expected complete set of keyboard controls.");
    check(JSON.stringify(visitedFocusIndexes) === JSON.stringify(expectedFocusIndexes), "Real Tab traversal skipped, repeated, or became trapped on a visible Home control.");

    const keyboardActivation = await evaluate(`
      const filter=document.querySelector('[data-filter="discussion"]');
      filter.focus();
      return {before:filter.getAttribute('aria-pressed'),focused:document.activeElement===filter};
    `);
    await key(" ");
    await settle();
    const filterActivated = await evaluate("return {pressed:document.querySelector('[data-filter=\"discussion\"]').getAttribute('aria-pressed'),count:document.querySelectorAll('#product-grid .product-card').length};");
    const faqActivation = await evaluate("document.querySelector('#clear-filters').click();const summary=document.querySelector('.faq-list summary');summary.focus();return {before:summary.parentElement.open,focused:document.activeElement===summary};");
    await key(" ");
    await settle();
    const faqOpened = await evaluate("const summary=document.querySelector('.faq-list summary');return {open:summary.parentElement.open,focused:document.activeElement===summary};");
    await key(" ");
    await settle();
    const faqClosed = await evaluate("const summary=document.querySelector('.faq-list summary');return {open:summary.parentElement.open,focused:document.activeElement===summary};");
    check(keyboardActivation.before === "false" && keyboardActivation.focused && filterActivated.pressed === "true" && filterActivated.count === 4, "Native Space activation did not operate the focused catalog filter.");
    check(!faqActivation.before && faqActivation.focused && faqOpened.open && faqOpened.focused && !faqClosed.open && faqClosed.focused, "Native Space activation did not operate the focused FAQ disclosure.");

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

    const catalogDepth = await evaluate(`
      const query=document.querySelector('#resource-search');
      const grade=document.querySelector('#grade-filter');
      const format=document.querySelector('#format-filter');
      query.value='would rather';query.dispatchEvent(new Event('input',{bubbles:true}));
      grade.value='68';grade.dispatchEvent(new Event('change',{bubbles:true}));
      format.value='digital';format.dispatchEvent(new Event('change',{bubbles:true}));
      const combination={count:document.querySelectorAll('#product-grid .product-card').length,title:document.querySelector('#product-grid h3')?.textContent.trim(),resetVisible:!document.querySelector('#clear-filters').hidden};
      grade.value='teacher';grade.dispatchEvent(new Event('change',{bubbles:true}));
      const empty={count:document.querySelectorAll('#product-grid .product-card').length,heading:document.querySelector('#product-grid .empty h3')?.textContent.trim(),status:document.querySelector('#result-count').textContent,reset:Boolean(document.querySelector('[data-reset]'))};
      document.querySelector('[data-reset]').click();
      const recovered={count:document.querySelectorAll('#product-grid .product-card').length,query:query.value,grade:grade.value,format:format.value,empty:Boolean(document.querySelector('.empty'))};
      return {combination,empty,recovered};
    `);
    check(catalogDepth.combination.count === 1 && catalogDepth.combination.title.includes("Grades 6–8") && catalogDepth.combination.resetVisible, "Combined query/grade/format filters did not isolate the expected middle-school resource.");
    check(catalogDepth.empty.count === 0 && catalogDepth.empty.reset && catalogDepth.empty.status.startsWith("0 resources"), "Incompatible filters did not expose the truthful empty/recovery state.");
    check(catalogDepth.recovered.count === 6 && catalogDepth.recovered.query === "" && catalogDepth.recovered.grade === "all" && catalogDepth.recovered.format === "all" && !catalogDepth.recovered.empty, "Empty-state recovery did not restore the complete catalog and controls.");

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

    await navigate(`${url}#resource/planner`, "#detail-view h1");
    const directDeepLink = await evaluate(`
      return {
        hash:location.hash,
        title:document.title,
        heading:document.querySelector('#detail-view h1')?.textContent.trim(),
        focused:document.activeElement===document.querySelector('#detail-view h1'),
      };
    `);
    await evaluate("location.hash='page/about';return true;");
    await settle();
    const historyBefore = await cdp.call("Page.getNavigationHistory");
    const backEntry = historyBefore.entries[historyBefore.currentIndex - 1];
    const forwardEntry = historyBefore.entries[historyBefore.currentIndex];
    if (backEntry) {
      await cdp.call("Page.navigateToHistoryEntry", { entryId: backEntry.id });
      await settle();
    }
    const historyBack = await evaluate(`
      return {
        hash:location.hash,
        heading:document.querySelector('#detail-view h1')?.textContent.trim(),
        focused:document.activeElement===document.querySelector('#detail-view h1'),
      };
    `);
    if (forwardEntry) {
      await cdp.call("Page.navigateToHistoryEntry", { entryId: forwardEntry.id });
      await settle();
    }
    const historyForward = await evaluate(`
      return {
        hash:location.hash,
        heading:document.querySelector('#detail-view h1')?.textContent.trim(),
        focused:document.activeElement===document.querySelector('#detail-view h1'),
      };
    `);
    const malformedHash = await evaluate(`
      location.hash='%E0%A4%A';
      await new Promise(accept=>setTimeout(accept,120));
      return {
        hash:location.hash,
        homeHidden:document.querySelector('#home-view').hidden,
        detailHidden:document.querySelector('#detail-view').hidden,
        heading:document.querySelector('#hero-title')?.textContent.trim(),
      };
    `);
    check(directDeepLink.hash === "#resource/planner" && directDeepLink.title.includes("Dream Beachside") && directDeepLink.heading.includes("Dream Beachside") && !directDeepLink.focused, "A direct resource deep link did not render while preserving the browser's initial focus position.");
    check(Boolean(backEntry) && historyBack.hash === "#resource/planner" && historyBack.heading.includes("Dream Beachside") && historyBack.focused, "Browser Back did not restore the prior resource route and heading focus.");
    check(Boolean(forwardEntry) && historyForward.hash === "#page/about" && historyForward.heading.includes("Hi, I’m Meagen") && historyForward.focused, "Browser Forward did not restore the next content route and heading focus.");
    check(malformedHash.hash === "#%E0%A4%A" && !malformedHash.homeHidden && malformedHash.detailHidden && malformedHash.heading.includes("A little less prep"), "A malformed encoded hash did not recover safely to the Home view.");

    const productTruth = await evaluate(`
      const details=[];
      for(const product of PRODUCTS){
        location.hash='home';await new Promise(accept=>setTimeout(accept,40));
        location.hash='resource/'+product.id;await new Promise(accept=>setTimeout(accept,70));
        details.push({
          id:product.id,
          title:document.querySelector('#detail-view h1')?.textContent.trim(),
          conceptLabel:document.querySelector('.gallery-stage .art-label')?.textContent.trim(),
          hasPurchase:Boolean(document.querySelector('[data-product-link]')),
          hasQuestion:Boolean(document.querySelector('.product-info a[href="#contact"]')),
          note:document.querySelector('.subtle-warning')?.textContent.trim(),
          imageAlt:document.querySelector('.gallery-stage img')?.getAttribute('alt')||'',
        });
      }
      return details;
    `);
    check(productTruth.length === 6 && productTruth.every((item) => item.title), "One or more catalog records did not render a complete detail route.");
    check(productTruth.filter((item) => item.conceptLabel === "Existing product preview").length === 2 && productTruth.filter((item) => item.conceptLabel === "Existing product preview").every((item) => item.imageAlt && (item.note.includes("Confirm") || item.note.includes("Verify"))), "Existing preview assets lost their alt text or verification disclosure.");
    check(productTruth.filter((item) => item.conceptLabel === "Illustrative cover").every((item) => item.note.toLowerCase().includes("illustrative") || item.note.toLowerCase().includes("proposed")), "Illustrative catalog art is not consistently disclosed.");
    check(productTruth.find((item) => item.id === "reading")?.hasQuestion && !productTruth.find((item) => item.id === "reading")?.hasPurchase, "The unfinished reading collection incorrectly exposes a purchase action.");

    const connectionNotice = await evaluate(`
      location.hash='home';await new Promise(accept=>setTimeout(accept,100));
      const before=location.href;document.querySelector('[data-store]').click();await new Promise(accept=>setTimeout(accept,50));
      return {same:location.href===before,open:document.querySelector('#notice-dialog').open,text:document.querySelector('#notice-content').innerText};
    `);
    check(connectionNotice.same && connectionNotice.open && connectionNotice.text.includes("Nothing has been purchased or downloaded"), "Unconnected store action was not safely disclosed.");
    await evaluate("document.querySelector('#notice-dialog [data-close]').click();return true;");

    const dialogButtonReturn = await evaluate(`
      location.hash='home';await new Promise(accept=>setTimeout(accept,100));
      const trigger=document.querySelector('[data-store]');trigger.id='store-return';trigger.focus();trigger.click();
      await new Promise(accept=>setTimeout(accept,50));
      document.querySelector('#notice-dialog [data-close]').focus();
      return {open:document.querySelector('#notice-dialog').open,focused:document.activeElement.getAttribute('aria-label')};
    `);
    const dialogButtonClosed = await evaluate(`
      document.querySelector('#notice-dialog [data-close]').click();
      await new Promise(accept=>setTimeout(accept,50));
      return {open:document.querySelector('#notice-dialog').open,focused:document.activeElement.id};
    `);
    check(dialogButtonReturn.open && dialogButtonReturn.focused === "Close notice", "Notice dialog close control was not focusable.");
    check(!dialogButtonClosed.open && dialogButtonClosed.focused === "store-return", "Explicit dialog close did not return focus to its invoking control.");

    const activationSafety = await evaluate(`
      return {
        tptExact:Boolean(safeTPT('https://www.teacherspayteachers.com/Store/HoneyHearted')),
        tptBare:Boolean(safeTPT('https://teacherspayteachers.com/Store/HoneyHearted')),
        rejectsHttp:!safeTPT('http://www.teacherspayteachers.com/Store/HoneyHearted'),
        rejectsLookalike:!safeTPT('https://teacherspayteachers.com.example.test/store'),
        rejectsCredentials:!safeHTTPS('https://user:secret@example.test/path'),
        acceptsPublicHttps:Boolean(safeHTTPS('https://example.test/path')),
        acceptsEmail:safeEmail('hello+resources@example.test')==='hello+resources@example.test',
        rejectsEmailQuery:!safeEmail('hello@example.test?subject=unexpected'),
      };
    `);
    check(Object.values(activationSafety).every(Boolean), "External-destination validation accepted an unsafe URL or rejected an allowed public HTTPS/TPT URL.");

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
      contact.reset();
      contact.requestSubmit();
      const contactInvalid={valid:contact.checkValidity(),focused:document.activeElement.id,invalid:[...contact.querySelectorAll(':invalid')].map(field=>field.id)};
      document.querySelector('#contact-name').value='Alex';
      document.querySelector('#contact-email').value='not-an-email';
      document.querySelector('#contact-subject').value='Report a resource error';
      document.querySelector('#contact-message').value='short';
      contact.requestSubmit();
      const contactCorrection={valid:contact.checkValidity(),focused:document.activeElement.id,emailInvalid:document.querySelector('#contact-email').matches(':invalid'),messageInvalid:document.querySelector('#contact-message').matches(':invalid')};
      document.querySelector('#contact-email').value='alex@example.com';
      document.querySelector('#contact-message').value='The planner preview needs a closer look.';
      contact.requestSubmit();
      const contactResult={status:document.querySelector('#contact-status').textContent,name:document.querySelector('#contact-name').value,subject:document.querySelector('#contact-subject').value};
      const newsletter=document.querySelector('#newsletter-form');
      newsletter.reset();
      newsletter.requestSubmit();
      const newsletterInvalid={valid:newsletter.checkValidity(),focused:document.activeElement.id,invalid:[...newsletter.querySelectorAll(':invalid')].map(field=>field.id)};
      document.querySelector('#newsletter-email').value='alex@example.com';
      document.querySelector('#newsletter-consent').checked=true;
      newsletter.requestSubmit();
      const newsletterResult={status:document.querySelector('#newsletter-status').textContent,email:document.querySelector('#newsletter-email').value,consent:document.querySelector('#newsletter-consent').checked};
      return {contactInvalid,contactCorrection,contactResult,newsletterInvalid,newsletterResult};
    `);
    check(!forms.contactInvalid.valid && forms.contactInvalid.focused === "contact-name" && forms.contactInvalid.invalid.includes("contact-email") && forms.contactInvalid.invalid.includes("contact-message"), "Empty contact submission did not use native validation and focus the first invalid field.");
    check(!forms.contactCorrection.valid && forms.contactCorrection.focused === "contact-email" && forms.contactCorrection.emailInvalid && !forms.contactCorrection.messageInvalid, "Contact correction test did not focus the remaining invalid email before a successful resubmission.");
    check(forms.contactResult.status.includes("not been sent or saved") && forms.contactResult.name === "Alex" && forms.contactResult.subject === "Report a resource error", "Contact preview did not disclose non-delivery and preserve the visitor's entry.");
    check(!forms.newsletterInvalid.valid && forms.newsletterInvalid.focused === "newsletter-email" && forms.newsletterInvalid.invalid.includes("newsletter-consent"), "Empty newsletter submission did not use native validation and expose the required consent state.");
    check(forms.newsletterResult.status.includes("not been subscribed") && forms.newsletterResult.email === "alex@example.com" && forms.newsletterResult.consent, "Newsletter preview did not disclose non-subscription and preserve the entry.");

    const adapterRecovery = await evaluate(`
      const originalFetch=window.fetch;
      const originalAnchorClick=HTMLAnchorElement.prototype.click;
      const calls=[];
      SITE_CONFIG.preview=false;
      SITE_CONFIG.newsletterEndpoint='https://example.test/newsletter';
      window.fetch=async (...args)=>{calls.push(args[0]);return {ok:false,json:async()=>({accepted:false})};};
      const newsletter=document.querySelector('#newsletter-form');
      newsletter.reset();
      document.querySelector('#newsletter-email').value='teacher@example.com';
      document.querySelector('#newsletter-consent').checked=true;
      newsletter.requestSubmit();
      await new Promise(accept=>setTimeout(accept,30));
      const failed={status:document.querySelector('#newsletter-status').textContent,error:document.querySelector('#newsletter-status').classList.contains('error'),disabled:newsletter.querySelector('button').disabled};
      window.fetch=async (...args)=>{calls.push(args[0]);return {ok:true,json:async()=>({accepted:true})};};
      newsletter.requestSubmit();
      await new Promise(accept=>setTimeout(accept,30));
      const retried={status:document.querySelector('#newsletter-status').textContent,error:document.querySelector('#newsletter-status').classList.contains('error'),email:document.querySelector('#newsletter-email').value,consent:document.querySelector('#newsletter-consent').checked,disabled:newsletter.querySelector('button').disabled};
      let mailto='';
      HTMLAnchorElement.prototype.click=function(){mailto=this.href;};
      SITE_CONFIG.contactEmail='hello@example.test';
      const contact=document.querySelector('#contact-form');
      document.querySelector('#contact-name').value='Alex';
      document.querySelector('#contact-email').value='alex@example.com';
      document.querySelector('#contact-message').value='Please help with the planner preview.';
      contact.requestSubmit();
      const contactDraft={status:document.querySelector('#contact-status').textContent,mailto};
      window.fetch=originalFetch;
      HTMLAnchorElement.prototype.click=originalAnchorClick;
      SITE_CONFIG.preview=true;
      SITE_CONFIG.newsletterEndpoint='';
      SITE_CONFIG.contactEmail='';
      return {calls,failed,retried,contactDraft};
    `);
    check(adapterRecovery.calls.length === 2 && adapterRecovery.failed.error && !adapterRecovery.failed.disabled && adapterRecovery.failed.status.includes("could not be confirmed"), "Newsletter adapter failure did not expose a retryable, truthful error state.");
    check(!adapterRecovery.retried.error && !adapterRecovery.retried.disabled && adapterRecovery.retried.email === "" && !adapterRecovery.retried.consent && adapterRecovery.retried.status.includes("accepted"), "Newsletter adapter retry did not recover to a confirmed success state.");
    check(adapterRecovery.contactDraft.mailto.startsWith("mailto:hello@example.test") && adapterRecovery.contactDraft.mailto.includes("alex%40example.com") && adapterRecovery.contactDraft.status.includes("website has not sent it"), "Connected contact adapter did not prepare a truthful encoded email draft.");

    await viewport(640, 900);
    await navigate();
    const zoomEquivalent = await evaluate(`
      const controls=[...document.querySelectorAll('button,a,input,select,textarea')].filter(node=>node.offsetParent!==null);
      return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,smallTargets:controls.filter(node=>{const r=node.getBoundingClientRect();return r.width<24||r.height<24;}).slice(0,10).map(node=>node.id||node.textContent.trim().slice(0,40)),hero:document.querySelector('#hero-title').getBoundingClientRect().toJSON()};
    `);
    check(zoomEquivalent.width === 640 && zoomEquivalent.scrollWidth === 640 && zoomEquivalent.hero.left >= 0 && zoomEquivalent.hero.right <= 640, "The 200%-zoom-equivalent 640px layout overflowed or clipped the primary heading.");

    const imageFallback = await evaluate(`
      location.hash='resource/middle';await new Promise(accept=>setTimeout(accept,100));
      const image=document.querySelector('.gallery-stage img');
      image.src='data:image/png;base64,';
      await new Promise(accept=>setTimeout(accept,100));
      const rect=image.getBoundingClientRect();
      return {complete:image.complete,naturalWidth:image.naturalWidth,alt:image.alt,width:rect.width,scrollWidth:document.documentElement.scrollWidth,viewport:innerWidth};
    `);
    check(imageFallback.complete && imageFallback.naturalWidth === 0 && imageFallback.alt.includes("middle-school") && imageFallback.width > 0 && imageFallback.scrollWidth === imageFallback.viewport, "A failed catalog preview image lost its descriptive fallback or caused layout overflow.");

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
      skipLink: { before: skipBefore, after: skipAfter },
      keyboard: {
        focusOrder: {
          total: focusOrder.total,
          first: focusOrder.first,
          expected: focusOrder.expected,
          visitedIndexes: visitedFocusIndexes,
        },
        filter: { before: keyboardActivation, after: filterActivated },
        faq: { before: faqActivation, opened: faqOpened, closed: faqClosed },
      },
      catalog,
      catalogDepth,
      product,
      navigationHistory: {
        directDeepLink,
        back: historyBack,
        forward: historyForward,
        malformedHash,
      },
      productTruth,
      dialogReturn,
      dialogButtonReturn,
      dialogButtonClosed,
      connectionNotice,
      activationSafety,
      sample: { ...sample, download, downloadSize, print },
      contentRoutes,
      forms,
      adapterRecovery,
      zoomEquivalent,
      imageFallback,
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
