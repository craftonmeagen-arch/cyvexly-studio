import assert from "node:assert/strict";
import { access, mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:5173";
const cdpPort = Number(process.env.CDP_PORT ?? 9347);
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
    const handlers = new Map();
    let nextId = 0;

    ws.addEventListener("open", () =>
      resolve({
        send(method, params = {}) {
          const id = ++nextId;
          return new Promise((requestResolve, requestReject) => {
            pending.set(id, { requestResolve, requestReject });
            ws.send(JSON.stringify({ id, method, params }));
          });
        },
        on(method, handler) {
          handlers.set(method, handler);
        },
        close() {
          ws.close();
        },
      }),
    );

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

      if (message.method === "Runtime.exceptionThrown") {
        failures.push(message.params.exceptionDetails.text);
      } else if (message.method === "Log.entryAdded" && message.params.entry.level === "error") {
        failures.push(message.params.entry.text);
      } else if (message.method === "Network.loadingFailed" && !message.params.canceled) {
        failures.push(message.params.errorText);
      }

      const handler = handlers.get(message.method);
      if (handler) {
        Promise.resolve(handler(message.params)).catch((error) => failures.push(error.message));
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

async function waitFor(client, expression, label) {
  for (let attempt = 0; attempt < 48; attempt += 1) {
    if (await evaluate(client, expression)) return;
    await new Promise((resolve) => setTimeout(resolve, 125));
  }
  throw new Error(`Timed out waiting for ${label}`);
}

async function openRoute(client, route, width, height) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width <= 500,
  });
  await client.send("Page.navigate", { url: new URL(route, baseUrl).href });
  await waitFor(
    client,
    `document.readyState !== "loading" && location.pathname === ${JSON.stringify(route.split("?")[0])}`,
    route,
  );
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

async function readReceipt(client) {
  await waitFor(
    client,
    `Boolean(document.querySelector("[data-confirmation-delivery]"))`,
    "submission receipt",
  );
  let receipt;
  let previousTop;
  let stableSamples = 0;
  for (let attempt = 0; attempt < 30; attempt += 1) {
    receipt = JSON.parse(
      await evaluate(
        client,
        `JSON.stringify((() => {
          const receipt = document.querySelector("[data-confirmation-delivery]");
          const rect = receipt.getBoundingClientRect();
          return {
            delivery: receipt.getAttribute("data-confirmation-delivery"),
            text: receipt.textContent.replace(/\\s+/g, " ").trim(),
            top: Math.round(rect.top),
            bottom: Math.round(rect.bottom),
            viewportHeight: innerHeight,
            overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
          };
        })())`,
      ),
    );
    stableSamples = previousTop === receipt.top ? stableSamples + 1 : 0;
    previousTop = receipt.top;
    if (stableSamples >= 2) break;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  return receipt;
}

async function submitContact(client, confirmationSent, width, height) {
  await openRoute(client, "/contact?interest=orbit-package", width, height);
  await waitFor(client, `Boolean(document.querySelector("form"))`, "Contact form");
  await evaluate(
    client,
    `(() => {
      document.getElementById("name").value = "Receipt test";
      document.getElementById("email").value = "receipt@example.com";
      document.getElementById("message").value = "I am checking the truthful receipt state.";
      document.getElementById("consent").click();
      window.__receiptConfirmationSent = ${confirmationSent};
      document.querySelector("form").requestSubmit();
    })()`,
  );
  return readReceipt(client);
}

async function submitConsultation(client, method, confirmationSent, width, height) {
  await openRoute(client, "/contact?request=consultation", width, height);
  await waitFor(client, `Boolean(document.querySelector("form"))`, "Consultation form");
  await evaluate(
    client,
    `(() => {
      document.getElementById("name").value = "Consultation test";
      ${method === "phone" ? "document.querySelector('input[value=\"phone\"]').click();" : ""}
      const contact = document.getElementById(${JSON.stringify(method === "phone" ? "phone" : "email")});
      contact.value = ${JSON.stringify(method === "phone" ? "317-555-0142" : "consult@example.com")};
      document.getElementById("preferredWindow").value = "Afternoon";
      document.getElementById("requesterTimeZone").value = "Central (CT)";
      document.getElementById("message").value = "Please ask about a small-business redesign.";
      document.getElementById("consent").click();
      window.__receiptConfirmationSent = ${confirmationSent};
      document.querySelector("form").requestSubmit();
    })()`,
  );
  return readReceipt(client);
}

async function submitPlanner(client, confirmationSent, width, height) {
  await openRoute(client, "/start", width, height);
  const draft = {
    data: {
      fullName: "Receipt test",
      workEmail: "receipt@example.com",
      businessDescription: "A small business testing an honest Planner receipt.",
      primaryGoal: "credibility",
      websiteType: "business-site",
      notSureSitemap: true,
      notSureFeatures: true,
      budgetRange: "$3,000–$5,000",
      timingFlexibility: "Flexible",
      acknowledgeNotQuote: true,
      consent: true,
    },
    step: 9,
  };
  await evaluate(
    client,
    `localStorage.setItem("cyvexly-planner-draft-v1", ${JSON.stringify(JSON.stringify(draft))})`,
  );
  await client.send("Page.reload");
  await waitFor(
    client,
    `document.body.textContent.includes("Review & submit") && Boolean(document.querySelector("form"))`,
    "Planner review step",
  );
  await evaluate(
    client,
    `(() => {
      window.__receiptConfirmationSent = ${confirmationSent};
      document.querySelector("form").requestSubmit();
    })()`,
  );
  return readReceipt(client);
}

async function main() {
  const profile = await mkdtemp(path.join(os.tmpdir(), "cyvexly-receipt-smoke-"));
  const browser = spawn(await findBrowser(), [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    `--remote-debugging-port=${cdpPort}`,
    `--user-data-dir=${profile}`,
    "about:blank",
  ], { stdio: "ignore", windowsHide: true });
  const failures = [];
  const consultationPayloads = [];
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
      client.send("Fetch.enable", {
        patterns: [
          { urlPattern: "*://*/api/contact", requestStage: "Request" },
          { urlPattern: "*://*/api/planner", requestStage: "Request" },
        ],
      }),
    ]);

    client.on("Fetch.requestPaused", async ({ requestId, request }) => {
      const confirmationSent = await evaluate(client, "window.__receiptConfirmationSent === true");
      const payload = request.postData ? JSON.parse(request.postData) : {};
      if (payload.requestType === "consultation") consultationPayloads.push(payload);
      const body = Buffer.from(JSON.stringify({
        ok: true,
        confirmationSent,
        confirmationAvailable: payload.contactMethod !== "phone",
        ...(payload.requestType === "consultation" ? { nextBusinessDay: "Friday, September 11, 2026" } : {}),
      })).toString("base64");
      await client.send("Fetch.fulfillRequest", {
        requestId,
        responseCode: 200,
        responseHeaders: [{ name: "Content-Type", value: "application/json" }],
        body,
      });
    });

    const contactPartial = await submitContact(client, false, 390, 844);
    await capture(client, "contact-confirmation-unavailable-phone.png");
    assert.equal(contactPartial.delivery, "failed");
    assert.match(contactPartial.text, /message reached Cyvexly Studio/i);
    assert.match(contactPartial.text, /couldn(?:'|’)t email a confirmation copy/i);
    assert.match(contactPartial.text, /don(?:'|’)t need to resubmit/i);
    assert.ok(contactPartial.bottom <= contactPartial.viewportHeight);
    assert.ok(contactPartial.overflow <= 1);

    const contactComplete = await submitContact(client, true, 1280, 800);
    await capture(client, "contact-confirmation-sent-desktop.png");
    assert.equal(contactComplete.delivery, "sent");
    assert.match(contactComplete.text, /we emailed you a confirmation/i);
    assert.ok(contactComplete.overflow <= 1);

    const consultationEmail = await submitConsultation(client, "email", true, 1280, 800);
    await capture(client, "consultation-email-confirmation-desktop.png");
    assert.equal(consultationEmail.delivery, "sent");
    assert.match(consultationEmail.text, /consultation request sent/i);
    assert.match(consultationEmail.text, /Friday, September 11, 2026/);
    assert.match(consultationEmail.text, /not a booked appointment/i);

    const consultationPhone = await submitConsultation(client, "phone", false, 390, 844);
    await capture(client, "consultation-phone-request.png");
    assert.equal(consultationPhone.delivery, "not-applicable");
    assert.match(consultationPhone.text, /phone response/i);
    assert.doesNotMatch(consultationPhone.text, /couldn(?:'|’)t email a confirmation/i);
    assert.ok(consultationPhone.bottom <= consultationPhone.viewportHeight);
    assert.ok(consultationPhone.overflow <= 1);
    assert.deepEqual(
      consultationPayloads.map(({ contactMethod, preferredWindow, requesterTimeZone, message }) => ({
        contactMethod,
        preferredWindow,
        requesterTimeZone,
        message,
      })),
      [
        { contactMethod: "email", preferredWindow: "Afternoon", requesterTimeZone: "Central (CT)", message: "Please ask about a small-business redesign." },
        { contactMethod: "phone", preferredWindow: "Afternoon", requesterTimeZone: "Central (CT)", message: "Please ask about a small-business redesign." },
      ],
    );

    const plannerPartial = await submitPlanner(client, false, 390, 844);
    await capture(client, "planner-confirmation-unavailable-phone.png");
    assert.equal(plannerPartial.delivery, "failed");
    assert.match(plannerPartial.text, /full answers reached Cyvexly Studio/i);
    assert.match(plannerPartial.text, /couldn(?:'|’)t email a confirmation/i);
    assert.match(plannerPartial.text, /don(?:'|’)t need to resubmit/i);
    assert.ok(plannerPartial.bottom <= plannerPartial.viewportHeight);
    assert.ok(plannerPartial.overflow <= 1);

    const plannerComplete = await submitPlanner(client, true, 1280, 800);
    assert.equal(plannerComplete.delivery, "sent");
    assert.match(plannerComplete.text, /we emailed a confirmation to receipt@example\.com/i);
    assert.ok(plannerComplete.overflow <= 1);

    assert.deepEqual(failures, []);
    console.log(JSON.stringify({
      baseUrl,
      contactPartial,
      contactComplete,
      consultationEmail,
      consultationPhone,
      plannerPartial,
      plannerComplete,
      interceptedRequests: 6,
      realMessagesSent: 0,
      status: "passed",
    }, null, 2));
  } finally {
    if (client) {
      await client.send("Browser.close").catch(() => {});
      client.close();
    }
    if (browser.exitCode === null) {
      await Promise.race([
        new Promise((resolve) => browser.once("exit", resolve)),
        new Promise((resolve) => setTimeout(resolve, 3000)),
      ]);
    }
    if (browser.exitCode === null) {
      browser.kill();
      await new Promise((resolve) => browser.once("exit", resolve));
    }
    await rm(profile, { recursive: true, force: true });
  }
}

await main();
