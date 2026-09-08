import { spawn } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { createServer } from "node:net";
import { join, resolve } from "node:path";
import { tmpdir } from "node:os";

const url = process.argv[2] || "http://127.0.0.1:5183/";
const evidenceDir = resolve(process.argv[3] || "docs/agent-system/cyvexly/builder/evidence/velora-smoke");
const chromePath = process.env.CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const sourceRef = process.env.CYVEXLY_SOURCE_REF || "unrecorded-working-tree";
const profileDir = join(tmpdir(), `cyvexly-velora-smoke-${process.pid}-${Date.now()}`);
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
      if (message.method === "Network.requestWillBeSent") networkRequests.push(message.params.request.url);
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

    const key = async (value, modifiers = 0) => {
      const keyCodes = { ArrowDown: 40, ArrowLeft: 37, ArrowRight: 39, ArrowUp: 38, End: 35, Enter: 13, Escape: 27, Home: 36, Tab: 9 };
      const windowsVirtualKeyCode = keyCodes[value] || value.toUpperCase().charCodeAt(0);
      await cdp.call("Input.dispatchKeyEvent", { type: "keyDown", key: value, code: value, modifiers, windowsVirtualKeyCode });
      await cdp.call("Input.dispatchKeyEvent", { type: "keyUp", key: value, code: value, modifiers, windowsVirtualKeyCode });
    };

    const settle = (milliseconds = 100) => new Promise((accept) => setTimeout(accept, milliseconds));

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

    const provenance = await evaluate(`
      const imageOrigins=[...new Set([...document.images].map(image=>new URL(image.src).origin))];
      const externalLinks=[...document.querySelectorAll('a[href^="http"]')].map(link=>new URL(link.href).origin);
      return {
        imageOrigins,
        externalLinks:[...new Set(externalLinks)],
        actionForms:document.querySelectorAll('form[action]').length,
        noindex:document.querySelector('meta[name="robots"]')?.content.includes('noindex')||false,
        imageCount:document.images.length,
        disclosed:document.body.innerText.toLowerCase().includes('illustrative photography'),
      };
    `);
    check(provenance.imageOrigins.length === 1 && provenance.imageOrigins[0] === "https://images.unsplash.com", "Velora images do not come exclusively from the disclosed Unsplash origin.");
    check(provenance.actionForms === 0 && provenance.noindex && provenance.disclosed, "Demo form, indexing, or illustrative-image disclosure boundaries are incomplete.");

    await evaluate("document.querySelector('#tab-dinner').focus();return true;");
    await key("ArrowRight");
    const menuKeyboard = await evaluate(`
      return {
        focused:document.activeElement.id,
        selected:document.querySelector('#tab-tasting').getAttribute('aria-selected'),
        labelledBy:document.querySelector('#menu-panel').getAttribute('aria-labelledby'),
      };
    `);
    check(menuKeyboard.focused === "tab-tasting" && menuKeyboard.selected === "true" && menuKeyboard.labelledBy === "tab-tasting", "ArrowRight did not move and select the next menu tab.");
    await key("End");
    const menuEnd = await evaluate("return {focused:document.activeElement.id,selected:document.querySelector('#tab-bar').getAttribute('aria-selected')};");
    check(menuEnd.focused === "tab-bar" && menuEnd.selected === "true", "End did not move to the final menu tab.");

    await evaluate("document.querySelector('#room-tab-wine').focus();return true;");
    await key("ArrowDown");
    const roomKeyboard = await evaluate(`
      return {
        focused:document.activeElement.id,
        selected:document.querySelector('#room-tab-salon').getAttribute('aria-selected'),
        labelledBy:document.querySelector('#room-panel').getAttribute('aria-labelledby'),
      };
    `);
    check(roomKeyboard.focused === "room-tab-salon" && roomKeyboard.selected === "true" && roomKeyboard.labelledBy === "room-tab-salon", "ArrowDown did not move and select the next private-room tab.");

    const imageFallback = await evaluate(`
      const image=document.querySelector('.editorial-card .photo img');
      const parent=image.closest('.photo');
      image.dispatchEvent(new Event('error'));
      const failed={opacity:image.style.opacity,fallback:parent.classList.contains('has-fallback')};
      image.dispatchEvent(new Event('load'));
      return {failed,recovered:{opacity:image.style.opacity,fallback:parent.classList.contains('has-fallback')}};
    `);
    check(imageFallback.failed.opacity === "0" && imageFallback.failed.fallback && imageFallback.recovered.opacity === "" && !imageFallback.recovered.fallback, "Illustrative-image fallback did not activate and recover correctly.");

    const dialogTrigger = await evaluate(`
      const trigger=document.querySelector('.nav-reserve');
      trigger.id='dialog-return-target';
      trigger.focus();
      trigger.click();
      return true;
    `);
    check(dialogTrigger, "Could not open a reservation dialog for focus testing.");
    await settle();
    const dialogFocus = await evaluate("return {open:document.querySelector('#site-dialog').open,focused:document.activeElement.id,modal:document.body.classList.contains('modal-open')};");
    check(dialogFocus.open && dialogFocus.focused === "dialog-title" && dialogFocus.modal, "Dialog did not move focus to its heading and enter modal state.");
    await key("Tab");
    const trappedFocus = await evaluate(`
      const dialog=document.querySelector('#site-dialog');
      const keyboardInside=dialog.contains(document.activeElement);
      document.querySelector('#dialog-return-target').focus();
      return {
        keyboardInside,
        inertBoundaryHeld:dialog.contains(document.activeElement),
        focused:document.activeElement.id||document.activeElement.name||document.activeElement.tagName,
      };
    `);
    check(trappedFocus.keyboardInside && trappedFocus.inertBoundaryHeld, "Keyboard focus or the native modal inert boundary escaped the dialog.");
    await key("Escape");
    await settle();
    const dialogReturn = await evaluate("return {open:document.querySelector('#site-dialog').open,focused:document.activeElement.id,modal:document.body.classList.contains('modal-open')};");
    check(!dialogReturn.open && dialogReturn.focused === "dialog-return-target" && !dialogReturn.modal, "Escape did not close the dialog and return focus to its trigger.");

    const menu = await evaluate(`
      document.querySelector('[data-menu="tasting"]').click();
      const tasting=document.querySelector('#menu-panel').innerText;
      document.querySelector('[data-diet="vegetarian"]').click();
      const vegetarian=document.querySelector('#menu-panel').innerText;
      return {selected:document.querySelector('[data-menu="tasting"]').getAttribute('aria-selected'),tasting,vegetarian};
    `);
    check(menu.selected === "true" && menu.tasting.includes("07 · The Last Word"), "Tasting-menu tab did not render all seven courses.");
    check(!menu.vegetarian.includes("05 · The Centerpiece") && menu.vegetarian.includes("04 · The Hearth"), "Vegetarian menu filter did not change results correctly.");

    const quickCorrection = await evaluate(`
      const localIso=date=>date.getFullYear()+'-'+String(date.getMonth()+1).padStart(2,'0')+'-'+String(date.getDate()).padStart(2,'0');
      const monday=new Date();monday.setHours(12,0,0,0);while(monday.getDay()!==1)monday.setDate(monday.getDate()+1);
      const corrected=new Date(monday);corrected.setDate(corrected.getDate()+1);
      const field=document.querySelector('#quick-date');
      field.value=localIso(monday);document.querySelector('#quick-booking').requestSubmit();
      const error=document.querySelector('#quick-error').textContent;
      field.value=localIso(corrected);document.querySelector('#quick-booking').requestSubmit();
      const opened=document.querySelector('#site-dialog').open&&Boolean(document.querySelector('#reservation-form'));
      document.querySelector('#site-dialog [data-close]').click();
      return {error,opened};
    `);
    check(quickCorrection.error.includes("rests on Mondays") && quickCorrection.opened, "Quick reservation did not explain a closed Monday and recover with a valid date.");

    const reservation = await evaluate(`
      const trigger=document.querySelector('[data-reserve]');trigger.click();
      document.querySelector('#reservation-form').requestSubmit();
      document.querySelector('#reservation-time-form').requestSubmit();
      const timeCorrection={
        stayed:Boolean(document.querySelector('#reservation-time-form')),
        invalid:document.querySelector('#reservation-time-form input[name="time"]:invalid')?.validationMessage||'',
        focused:document.activeElement?.name||document.activeElement?.id||'',
      };
      const slot=document.querySelector('#reservation-time-form input[name="time"]:not(:disabled)');slot.checked=true;
      document.querySelector('#reservation-time-form').requestSubmit();
      const name=document.querySelector('#res-name');
      name.value='A';
      document.querySelector('#res-email').value='alex@example.com';
      document.querySelector('#reservation-details-form').requestSubmit();
      const nameCorrection={
        stayed:Boolean(document.querySelector('#reservation-details-form')),
        invalid:name.validationMessage,
        focused:document.activeElement===name,
      };
      name.value='Alex Morgan';name.dispatchEvent(new Event('input',{bubbles:true}));
      document.querySelector('#reservation-details-form').requestSubmit();
      const result=document.querySelector('#site-dialog').innerText;
      document.querySelector('#site-dialog [data-close]').click();
      return {result,timeCorrection,nameCorrection};
    `);
    check(reservation.timeCorrection.stayed && reservation.timeCorrection.invalid, "Reservation time selection did not expose a native invalid state.");
    check(reservation.nameCorrection.stayed && reservation.nameCorrection.invalid.includes("at least two") && reservation.nameCorrection.focused, "Reservation name validation did not explain and focus the invalid field.");
    check(reservation.result.includes("DEMO · NOT BOOKED") && reservation.result.includes("No reservation has been made"), "Reservation preview did not recover to its safe success state.");

    const privateDining = await evaluate(`
      document.querySelector('#private-inquiry').click();
      document.querySelector('#event-name').value='Alex Morgan';
      document.querySelector('#event-email').value='alex@example.com';
      const guests=document.querySelector('#event-guests');
      guests.value=String(Number(guests.max)+1);
      document.querySelector('#event-form').requestSubmit();
      const correction={stayed:Boolean(document.querySelector('#event-form')),invalid:guests.validationMessage,focused:document.activeElement===guests};
      guests.value=guests.max;guests.dispatchEvent(new Event('input',{bubbles:true}));
      document.querySelector('#event-form').requestSubmit();
      const result=document.querySelector('#site-dialog').innerText;
      document.querySelector('#site-dialog [data-close]').click();
      return {result,correction};
    `);
    check(privateDining.correction.stayed && privateDining.correction.invalid && privateDining.correction.focused, "Private-dining capacity validation did not block and focus the invalid guest count.");
    check(privateDining.result.includes("DEMO · NOT SENT") && privateDining.result.includes("No event inquiry has been sent"), "Private-dining inquiry did not recover to its safe preview state.");

    const gift = await evaluate(`
      document.querySelector('[data-gift]').click();
      document.querySelector('[data-amount="custom"]').click();
      document.querySelector('#gift-recipient').value='Jamie';
      document.querySelector('#gift-sender').value='Alex';
      document.querySelector('#gift-email').value='jamie@example.com';
      const amount=document.querySelector('#gift-amount');
      amount.value='20';amount.dispatchEvent(new Event('input',{bubbles:true}));
      document.querySelector('#gift-form').requestSubmit();
      const correction={stayed:Boolean(document.querySelector('#gift-form')),invalid:amount.validationMessage,focused:document.activeElement===amount};
      amount.value='50';amount.dispatchEvent(new Event('input',{bubbles:true}));
      document.querySelector('#gift-form').requestSubmit();
      const result=document.querySelector('#site-dialog').innerText;
      document.querySelector('#site-dialog [data-close]').click();
      return {result,correction};
    `);
    check(gift.correction.stayed && gift.correction.invalid && gift.correction.focused, "Gift amount validation did not block and focus an out-of-range value.");
    check(gift.result.includes("A GIFT PREVIEW · NO CASH VALUE") && gift.result.includes("No payment has been taken") && gift.result.includes("$50"), "Gift-card configurator did not recover to its safe preview state.");

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
      const field=document.querySelector('#newsletter-email');
      field.value='not-an-email';
      document.querySelector('#newsletter-form').requestSubmit();
      const correction={value:field.value,invalid:field.validationMessage,focused:document.activeElement===field};
      field.value='sample@example.com';
      document.querySelector('#newsletter-form').requestSubmit();
      return {toast:document.querySelector('#toast').textContent,value:field.value,correction};
    `);
    check(newsletter.correction.value === "not-an-email" && newsletter.correction.invalid && newsletter.correction.focused, "Newsletter email validation did not block and focus an invalid address.");
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
    await key("Escape");
    const closed = await evaluate("return {expanded:document.querySelector('.menu-toggle').getAttribute('aria-expanded'),hidden:document.querySelector('#mobile-menu').hidden,focused:document.activeElement===document.querySelector('.menu-toggle')};");
    check(closed.expanded === "false" && closed.hidden === true && closed.focused, "Escape did not close mobile navigation and return focus to its toggle.");
    const mobileContact = await evaluate(`
      document.documentElement.style.scrollBehavior='auto';
      const target=document.querySelector('#visit');
      window.scrollTo(0,target.offsetTop-90);
      return {scrollY,top:target.getBoundingClientRect().top,addressTop:document.querySelector('.demo-address').getBoundingClientRect().top,height:innerHeight};
    `);
    check(mobileContact.scrollY > 1000 && mobileContact.addressTop < mobileContact.height, "Mobile contact section could not be brought into view.");

    await cdp.call("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
    await viewport(390, 844);
    await navigate();
    const reducedMotion = await evaluate(`
      const button=getComputedStyle(document.querySelector('.button'));
      return {
        matches:matchMedia('(prefers-reduced-motion: reduce)').matches,
        motionReady:document.body.classList.contains('motion-ready'),
        pending:document.querySelectorAll('.reveal.pending').length,
        scrollBehavior:getComputedStyle(document.documentElement).scrollBehavior,
        transitionDuration:button.transitionDuration,
        animationName:button.animationName,
      };
    `);
    check(reducedMotion.matches && !reducedMotion.motionReady && reducedMotion.pending === 0 && reducedMotion.scrollBehavior === "auto" && reducedMotion.transitionDuration === "0s", "Reduced-motion mode did not remove reveal/transition motion.");

    await cdp.call("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "no-preference" }] });
    await viewport(320, 800);
    await navigate();
    const reflow = await evaluate(`
      const hero=document.querySelector('#hero-title').getBoundingClientRect();
      const reserve=document.querySelector('.mobile-reserve .button').getBoundingClientRect();
      return {
        width:innerWidth,
        scrollWidth:document.documentElement.scrollWidth,
        hero:{left:hero.left,right:hero.right,width:hero.width},
        reserve:{left:reserve.left,right:reserve.right,width:reserve.width},
      };
    `);
    check(reflow.width === 320 && reflow.scrollWidth === 320 && reflow.hero.left >= 0 && reflow.hero.right <= 320 && reflow.reserve.left >= 0 && reflow.reserve.right <= 320, "320px reflow (1280px at 400% equivalent) overflowed or clipped primary controls.");
    await evaluate("document.querySelector('[data-gift]').click();return true;");
    await settle();
    const reflowDialog = await evaluate(`
      const dialog=document.querySelector('#site-dialog');
      const rect=dialog.getBoundingClientRect();
      return {open:dialog.open,left:rect.left,right:rect.right,width:rect.width,scrollWidth:dialog.scrollWidth,clientWidth:dialog.clientWidth};
    `);
    check(reflowDialog.open && reflowDialog.left >= 0 && reflowDialog.right <= 320 && reflowDialog.scrollWidth <= reflowDialog.clientWidth, "The gift dialog overflowed at the 320px reflow target.");
    await screenshot("final-zoom-320-gift.png");
    await evaluate("document.querySelector('#site-dialog [data-close]').click();return true;");

    const allowedOrigins = new Set([new URL(url).origin, "https://images.unsplash.com", "https://fonts.googleapis.com", "https://fonts.gstatic.com"]);
    const unexpectedNetwork = [...new Set(networkRequests.filter((requestUrl) => requestUrl.startsWith("http") && !allowedOrigins.has(new URL(requestUrl).origin)))];
    check(unexpectedNetwork.length === 0, `Unexpected network destinations were contacted: ${unexpectedNetwork.join(", ")}`);

    const result = {
      url,
      sourceRef,
      testedAt: new Date().toISOString(),
      desktop,
      provenance,
      menuKeyboard,
      menuEnd,
      roomKeyboard,
      imageFallback,
      dialogFocus,
      trappedFocus,
      dialogReturn,
      menu: { selected: menu.selected, tastingHasFinalCourse: menu.tasting.includes("07 · The Last Word"), vegetarianRemovedMeatCourse: !menu.vegetarian.includes("05 · The Centerpiece") },
      quickCorrection,
      reservation,
      privateDining,
      gift,
      gallery,
      newsletter,
      contact: { toast: contact.toast, detailDisclosure: contact.info.includes("deliberately fake demonstration details") },
      desktopContact,
      mobile,
      mobileEscape: closed,
      mobileContact,
      reducedMotion,
      reflow,
      reflowDialog,
      networkRequests: [...new Set(networkRequests)],
      unexpectedNetwork,
      runtimeErrors,
      networkErrors,
      failures,
      passed: failures.length === 0 && runtimeErrors.length === 0 && networkErrors.length === 0,
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
