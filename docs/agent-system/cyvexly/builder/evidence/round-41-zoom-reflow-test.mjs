// Round 41 QA: WCAG 1.4.10 Reflow (320 CSS px) and 200%-zoom-equivalent (640 CSS px,
// proxy for 1280px viewport at 200% browser zoom) across marketing pages and every
// Planner step. Proxy method: browser zoom shrinks the CSS layout viewport while
// scaling content proportionally; halving/quartering viewport width with normal DPR
// approximates the CSS-pixel budget available at 200%/400% zoom (the same equivalence
// WCAG 1.4.10's own "320 CSS px ~= 400% zoom @ 1280" note relies on). This proves
// content-loss/overflow at the CSS-pixel-budget layer; it does not prove Chrome's own
// pixel-for-pixel zoom rendering algorithm, browser-native text-only zoom, or every
// possible zoom level in between.
const CDP_PORT = 9333;
const BASE = "http://localhost:5173";

async function getTargetWsUrl(url) {
  const res = await fetch(`http://localhost:${CDP_PORT}/json/new?${url}`, { method: "PUT" });
  const json = await res.json();
  return { wsUrl: json.webSocketDebuggerUrl, id: json.id };
}

function connect(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    ws.addEventListener("open", () => resolve(ws));
    ws.addEventListener("error", reject);
  });
}

function send(ws, method, params = {}) {
  return new Promise((resolve) => {
    const id = Math.floor(Math.random() * 1e9);
    const handler = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id === id) {
        ws.removeEventListener("message", handler);
        resolve(msg.result);
      }
    };
    ws.addEventListener("message", handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

async function evaluate(ws, expression) {
  const result = await send(ws, "Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) {
    throw new Error(JSON.stringify(result.exceptionDetails));
  }
  return result.result.value;
}

async function setViewport(ws, width, height) {
  await send(ws, "Emulation.setDeviceMetricsOverride", {
    width, height, deviceScaleFactor: 1, mobile: false,
  });
}

async function checkReflow(ws, label) {
  const raw = await evaluate(ws, `
    JSON.stringify({
      innerWidth: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
      hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      overflowingEls: Array.from(document.querySelectorAll('body *')).filter(el => el.getBoundingClientRect().right > window.innerWidth + 2).slice(0, 5).map(el => ({
        tag: el.tagName, cls: (el.className || '').toString().slice(0, 60), right: Math.round(el.getBoundingClientRect().right)
      })),
    });
  `);
  return { label, ...JSON.parse(raw) };
}

async function testRoute(ws, path) {
  await send(ws, "Page.navigate", { url: BASE + path });
  await new Promise((r) => setTimeout(r, 900));
  const results = [];
  for (const w of [320, 640]) {
    await setViewport(ws, w, 900);
    await new Promise((r) => setTimeout(r, 300));
    results.push(await checkReflow(ws, `${path} @ ${w}px`));
  }
  await setViewport(ws, 1280, 900); // reset
  return results;
}

function setVal(ws, id, val) {
  return evaluate(ws, `
    (function() {
      const el = document.getElementById(${JSON.stringify(id)});
      if (!el) return false;
      const proto = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
      Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, ${JSON.stringify(val)});
      el.dispatchEvent(new Event('input', { bubbles: true }));
      return true;
    })();
  `);
}

async function clickButtonStartingWith(ws, text) {
  const box = await evaluate(ws, `
    (function() {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim().startsWith(${JSON.stringify(text)}));
      if (!btn) return null;
      btn.scrollIntoView({ block: 'center', behavior: 'instant' });
      const r = btn.getBoundingClientRect();
      return JSON.stringify({ x: r.x + r.width / 2, y: r.y + r.height / 2 });
    })();
  `);
  if (!box) return false;
  const { x, y } = JSON.parse(box);
  await send(ws, "Input.dispatchMouseEvent", { type: "mousePressed", x, y, button: "left", clickCount: 1 });
  await send(ws, "Input.dispatchMouseEvent", { type: "mouseReleased", x, y, button: "left", clickCount: 1 });
  await new Promise((r) => setTimeout(r, 500));
  return true;
}

async function advancePlannerStep(ws, stepNum) {
  // Fill whatever required fields exist on the current step, then click Continue.
  // Step-specific minimal required fills based on known Planner fields.
  const fillMap = {
    1: [["fullName", "Real User"], ["workEmail", "real@example.com"], ["contactMethod", "317-555-0100"]],
  };
  if (fillMap[stepNum]) {
    for (const [id, val] of fillMap[stepNum]) await setVal(ws, id, val);
  }
  // Generic fallback: fill any empty required text/textarea inputs on the step with placeholder text.
  await evaluate(ws, `
    (function() {
      const main = document.querySelector('main');
      if (!main) return;
      const inputs = main.querySelectorAll('input[required], textarea[required]');
      inputs.forEach(el => {
        if (!el.value) {
          const proto = el.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
          if (el.type === 'radio' || el.type === 'checkbox') return;
          Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, 'Test answer');
          el.dispatchEvent(new Event('input', { bubbles: true }));
        }
      });
      // pick first radio in each unchecked radio group
      const radios = main.querySelectorAll('input[type=radio]');
      const seen = new Set();
      radios.forEach(r => {
        if (!seen.has(r.name) && !main.querySelector('input[name="' + r.name + '"]:checked')) {
          r.click();
          seen.add(r.name);
        }
      });
    })();
  `);
  return clickButtonStartingWith(ws, "Continue");
}

async function main() {
  const marketingRoutes = ["/", "/services", "/pricing", "/about", "/contact", "/faq", "/process", "/work"];
  const allResults = [];

  const { wsUrl } = await getTargetWsUrl(BASE + "/");
  const ws = await connect(wsUrl);
  await send(ws, "Page.enable");
  await send(ws, "Runtime.enable");
  await send(ws, "DOM.enable");
  await setViewport(ws, 1280, 900);

  for (const route of marketingRoutes) {
    const r = await testRoute(ws, route);
    allResults.push(...r);
  }

  // Planner: fresh draft, walk through steps at 320px and 640px each.
  await send(ws, "Page.navigate", { url: BASE + "/start" });
  await new Promise((r) => setTimeout(r, 900));
  await evaluate(ws, `window.localStorage.clear(); true`);
  await send(ws, "Page.navigate", { url: BASE + "/start" });
  await new Promise((r) => setTimeout(r, 1000));

  for (let step = 1; step <= 9; step++) {
    for (const w of [320, 640]) {
      await setViewport(ws, w, 900);
      await new Promise((r) => setTimeout(r, 300));
      allResults.push(await checkReflow(ws, `/start step ${step} @ ${w}px`));
    }
    await setViewport(ws, 1280, 900);
    await new Promise((r) => setTimeout(r, 200));
    if (step < 9) {
      const advanced = await advancePlannerStep(ws, step);
      if (!advanced) {
        allResults.push({ label: `/start step ${step} -> ${step + 1} ADVANCE FAILED`, error: true });
        break;
      }
    }
  }

  console.log(JSON.stringify(allResults, null, 2));
  const failures = allResults.filter((r) => r.hasHorizontalOverflow || r.error);
  console.log("---SUMMARY---");
  console.log("Total checks:", allResults.length, "Failures:", failures.length);
  if (failures.length) console.log(JSON.stringify(failures, null, 2));

  await send(ws, "Page.close");
  ws.close();
}

main().catch((e) => {
  console.error("FATAL", e);
  process.exit(1);
});
