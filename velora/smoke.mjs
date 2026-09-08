import { spawn } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { createServer } from "node:net";
import { join, resolve } from "node:path";
import { tmpdir } from "node:os";

const url = process.argv[2] || "http://127.0.0.1:5183/";
const evidenceDir = resolve(process.argv[3] || "docs/agent-system/cyvexly/builder/evidence/velora-smoke");
const chromePath = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const profileDir = join(tmpdir(), `cyvexly-velora-smoke-${process.pid}-${Date.now()}`);
const failures = [];
const runtimeErrors = [];
const networkErrors = [];

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
  for (let attempt = 0; attempt < 100; attempt += 1) {
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
  const port = await freePort();
  const chrome = spawn(chromePath, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profileDir}`,
    "about:blank",
  ], { stdio: "ignore", windowsHide: true });

  let cdp;
  try {
    cdp = createCdp(await waitForDebugger(port));
    await cdp.ready;
    cdp.onEvent((message) => {
      if (message.method === "Runtime.exceptionThrown") runtimeErrors.push(message.params.exceptionDetails.text);
      if (message.method === "Network.loadingFailed" && !message.params.canceled) networkErrors.push(message.params.errorText);
    });
    await cdp.call("Page.enable");
    await cdp.call("Runtime.enable");
    await cdp.call("Network.enable");

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
      await cdp.call("Emulation.setDeviceMetricsOverride", { width, height, screenWidth: width, screenHeight: height, deviceScaleFactor: 1, mobile: width < 600 });
    };

    const navigate = async () => {
      await cdp.call("Page.navigate", { url });
      let loaded = false;
      for (let attempt = 0; attempt < 100; attempt += 1) {
        const ready = await evaluate(`
          return location.href.startsWith(${JSON.stringify(url)}) &&
            document.readyState === 'complete' &&
            Boolean(document.querySelector('#hero-title'));
        `);
        if (ready) {
          loaded = true;
          break;
        }
        await new Promise((accept) => setTimeout(accept, 100));
      }
      if (!loaded) throw new Error(`Timed out waiting for Velora at ${url}`);
      await new Promise((accept) => setTimeout(accept, 700));
    };

    const screenshot = async (name, fullPage = false) => {
      let clip;
      if (fullPage) {
        const metrics = await cdp.call("Page.getLayoutMetrics");
        clip = { x: 0, y: 0, width: metrics.cssContentSize.width, height: metrics.cssContentSize.height, scale: 1 };
      }
      const capture = await cdp.call("Page.captureScreenshot", { format: "png", captureBeyondViewport: fullPage, fromSurface: true, ...(clip ? { clip } : {}) });
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
        fictional:text.includes('A FICTIONAL RESTAURANT CONCEPT BY CYVEXLY'),
        address:text.includes('123 Not Real Drive')&&text.includes('Evansville, Indiana'),
        phone:text.includes('555-555-5555'),
        email:text.includes('notrealrestaurant@gmail.com'),
        stale:text.includes('Indianapolis'),
        liveContactLinks:document.querySelectorAll('a[href^="mailto:"],a[href^="tel:"]').length,
        hero:{rect:document.querySelector('#hero-title').getBoundingClientRect().toJSON(),section:document.querySelector('.hero').getBoundingClientRect().toJSON(),inner:document.querySelector('.hero-inner').getBoundingClientRect().toJSON(),style:{color:getComputedStyle(document.querySelector('#hero-title')).color,display:getComputedStyle(document.querySelector('#hero-title')).display,opacity:getComputedStyle(document.querySelector('#hero-title')).opacity,visibility:getComputedStyle(document.querySelector('#hero-title')).visibility,sectionHeight:getComputedStyle(document.querySelector('.hero')).height,innerTransform:getComputedStyle(document.querySelector('.hero-inner')).transform,innerMarginTop:getComputedStyle(document.querySelector('.hero-inner')).marginTop,innerTop:getComputedStyle(document.querySelector('.hero-inner')).top,innerPosition:getComputedStyle(document.querySelector('.hero-inner')).position},scrollY,innerHeight,visualHeight:visualViewport.height,screenHeight:screen.height},
      };
    `);
    check(desktop.width === 1440 && desktop.scrollWidth === 1440, "Desktop page overflowed or used the wrong viewport.");
    check(desktop.h1 === 1 && desktop.main === 1, "Landmark or heading structure is incorrect.");
    check(desktop.fictional && desktop.address && desktop.phone && desktop.email, "Fictional identity details are incomplete.");
    check(!desktop.stale, "A stale Indianapolis reference remains.");
    check(desktop.liveContactLinks === 0, "The demo exposes a live mailto or tel link.");
    check(desktop.hero.rect.top >= 0 && desktop.hero.rect.bottom <= 900 && desktop.hero.style.opacity === "1" && desktop.hero.style.visibility === "visible", "Desktop hero heading is not visibly positioned.");
    await screenshot("final-desktop-top.png");

    const menu = await evaluate(`
      document.querySelector('[data-menu="tasting"]').click();
      const tasting=document.querySelector('#menu-panel').innerText;
      document.querySelector('[data-diet="vegetarian"]').click();
      const vegetarian=document.querySelector('#menu-panel').innerText;
      return {selected:document.querySelector('[data-menu="tasting"]').getAttribute('aria-selected'),tasting,vegetarian};
    `);
    check(menu.selected === "true" && menu.tasting.includes("07 · The Last Word"), "Tasting-menu tab did not render all seven courses.");
    check(!menu.vegetarian.includes("05 · The Centerpiece") && menu.vegetarian.includes("04 · The Hearth"), "Vegetarian menu filter did not change results correctly.");

    const reservation = await evaluate(`
      const trigger=document.querySelector('[data-reserve]');trigger.click();
      document.querySelector('#reservation-form').requestSubmit();
      const slot=document.querySelector('#reservation-time-form input[name="time"]:not(:disabled)');slot.checked=true;
      document.querySelector('#reservation-time-form').requestSubmit();
      document.querySelector('#res-name').value='Alex Morgan';
      document.querySelector('#res-email').value='alex@example.com';
      document.querySelector('#reservation-details-form').requestSubmit();
      const result=document.querySelector('#site-dialog').innerText;
      document.querySelector('#site-dialog [data-close]').click();
      return result;
    `);
    check(reservation.includes("DEMO · NOT BOOKED") && reservation.includes("No reservation has been made"), "Reservation preview did not reach its safe success state.");

    const privateDining = await evaluate(`
      document.querySelector('#private-inquiry').click();
      document.querySelector('#event-name').value='Alex Morgan';
      document.querySelector('#event-email').value='alex@example.com';
      document.querySelector('#event-form').requestSubmit();
      const result=document.querySelector('#site-dialog').innerText;
      document.querySelector('#site-dialog [data-close]').click();
      return result;
    `);
    check(privateDining.includes("DEMO · NOT SENT") && privateDining.includes("No event inquiry has been sent"), "Private-dining inquiry did not reach its safe preview state.");

    const gift = await evaluate(`
      document.querySelector('[data-gift]').click();
      document.querySelector('#gift-recipient').value='Jamie';
      document.querySelector('#gift-sender').value='Alex';
      document.querySelector('#gift-email').value='jamie@example.com';
      document.querySelector('#gift-form').requestSubmit();
      const result=document.querySelector('#site-dialog').innerText;
      document.querySelector('#site-dialog [data-close]').click();
      return result;
    `);
    check(gift.includes("A GIFT PREVIEW · NO CASH VALUE") && gift.includes("No payment has been taken"), "Gift-card configurator did not reach its safe preview state.");

    const gallery = await evaluate(`
      document.querySelector('[data-gallery="0"]').click();
      const before=document.querySelector('.lightbox-bottom h3').textContent;
      document.querySelector('#gallery-next').click();
      const after=document.querySelector('.lightbox-bottom h3').textContent;
      document.querySelector('#site-dialog [data-close]').click();
      return {before,after};
    `);
    check(gallery.before === "The room" && gallery.after === "The details", "Gallery next control did not advance the image.");

    const newsletter = await evaluate(`
      document.querySelector('#newsletter-email').value='sample@example.com';
      document.querySelector('#newsletter-form').requestSubmit();
      return {toast:document.querySelector('#toast').textContent,value:document.querySelector('#newsletter-email').value};
    `);
    check(newsletter.toast.includes("No email was stored") && newsletter.value === "", "Newsletter demo did not reset and disclose its safe behavior.");

    const contact = await evaluate(`
      document.querySelector('[data-copy-contact="phone"]').click();
      await new Promise(resolve=>setTimeout(resolve,100));
      const toast=document.querySelector('#toast').textContent;
      document.querySelector('[data-info="location"]').click();
      const info=document.querySelector('#site-dialog').innerText;
      document.querySelector('#site-dialog [data-close]').click();
      return {toast,info};
    `);
    check(contact.toast.includes("fictional") && contact.info.includes("123 Not Real Drive") && contact.info.includes("do not place a call"), "Fictional contact controls or disclosure did not work.");
    await evaluate("document.querySelector('#toast').classList.remove('show');return true;");
    const desktopContact = await evaluate(`
      document.documentElement.style.scrollBehavior='auto';
      const target=document.querySelector('#visit');
      window.scrollTo(0,target.offsetTop-100);
      return {scrollY,top:target.getBoundingClientRect().top,addressVisible:document.querySelector('.demo-address').getBoundingClientRect().top<innerHeight};
    `);
    check(desktopContact.scrollY > 1000 && desktopContact.addressVisible, "Desktop contact section could not be brought into view.");
    await new Promise((accept) => setTimeout(accept, 800));
    await screenshot("final-desktop-contact.png");

    await viewport(390, 844);
    await navigate();
    const mobile = await evaluate(`
      const toggle=document.querySelector('.menu-toggle');toggle.click();
      return {width:innerWidth,scrollWidth:document.documentElement.scrollWidth,expanded:toggle.getAttribute('aria-expanded'),menuHidden:document.querySelector('#mobile-menu').hidden};
    `);
    check(mobile.width === 390 && mobile.scrollWidth === 390, "Mobile page overflowed or used the wrong viewport.");
    check(mobile.expanded === "true" && mobile.menuHidden === false, "Mobile navigation did not open.");
    await screenshot("final-mobile-menu.png");
    await cdp.call("Input.dispatchKeyEvent", { type: "keyDown", key: "Escape", code: "Escape", windowsVirtualKeyCode: 27 });
    await cdp.call("Input.dispatchKeyEvent", { type: "keyUp", key: "Escape", code: "Escape", windowsVirtualKeyCode: 27 });
    const closed = await evaluate("return {expanded:document.querySelector('.menu-toggle').getAttribute('aria-expanded'),hidden:document.querySelector('#mobile-menu').hidden};");
    check(closed.expanded === "false" && closed.hidden === true, "Escape did not close mobile navigation.");
    const mobileContact = await evaluate(`
      document.documentElement.style.scrollBehavior='auto';
      const target=document.querySelector('#visit');
      window.scrollTo(0,target.offsetTop-90);
      return {scrollY,top:target.getBoundingClientRect().top,addressTop:document.querySelector('.demo-address').getBoundingClientRect().top,height:innerHeight};
    `);
    check(mobileContact.scrollY > 1000 && mobileContact.addressTop < mobileContact.height, "Mobile contact section could not be brought into view.");
    await new Promise((accept) => setTimeout(accept, 150));
    await screenshot("final-mobile-contact.png");

    const result = {
      url,
      testedAt: new Date().toISOString(),
      desktop,
      menu: { selected: menu.selected, tastingHasFinalCourse: menu.tasting.includes("07 · The Last Word"), vegetarianRemovedMeatCourse: !menu.vegetarian.includes("05 · The Centerpiece") },
      reservation: "passed",
      privateDining: "passed",
      gift: "passed",
      gallery,
      newsletter,
      contact: { toast: contact.toast, detailDisclosure: contact.info.includes("deliberately fake demonstration details") },
      desktopContact,
      mobile,
      mobileEscape: closed,
      mobileContact,
      runtimeErrors,
      networkErrors,
      failures,
      passed: failures.length === 0 && runtimeErrors.length === 0,
    };
    await writeFile(join(evidenceDir, "smoke-result.json"), `${JSON.stringify(result, null, 2)}\n`);
    if (!result.passed) throw new Error(`Velora smoke failed: ${[...failures, ...runtimeErrors].join(" | ")}`);
    console.log(JSON.stringify(result, null, 2));
  } finally {
    try { await cdp?.call("Browser.close"); } catch {}
    await new Promise((accept) => setTimeout(accept, 400));
    if (!chrome.killed) chrome.kill();
    const absoluteProfile = resolve(profileDir);
    const absoluteTemp = resolve(tmpdir());
    if (!absoluteProfile.startsWith(absoluteTemp)) throw new Error("Refusing to clean a profile outside the OS temp directory.");
    await rm(absoluteProfile, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
