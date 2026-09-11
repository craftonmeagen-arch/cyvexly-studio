import assert from "node:assert/strict";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:5173";
const testIpPrefix = `2001:db8:${(process.pid % 65535).toString(16)}`;

async function submit(overrides = {}, ip = `${testIpPrefix}::24`) {
  const response = await fetch(new URL("/api/contact", baseUrl), {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": ip },
    body: JSON.stringify({
      requestType: "consultation",
      name: "Synthetic API test",
      contactMethod: "email",
      email: "synthetic@example.com",
      phone: "",
      preferredWindow: "Any time",
      requesterTimeZone: "Eastern (ET)",
      message: "",
      consent: true,
      "contact-company-website": "",
      ...overrides,
    }),
  });
  return { status: response.status, body: await response.json() };
}

const emailOnly = await submit({}, `${testIpPrefix}::10`);
assert.equal(emailOnly.status, 503);
assert.equal(emailOnly.body.error, "not-configured");

const phoneOnly = await submit({
  contactMethod: "phone",
  email: "",
  phone: "317-555-0142",
}, `${testIpPrefix}::11`);
assert.equal(phoneOnly.status, 503);
assert.equal(phoneOnly.body.error, "not-configured");

const missingPhone = await submit({ contactMethod: "phone", email: "", phone: "" }, `${testIpPrefix}::12`);
assert.equal(missingPhone.status, 400);
assert.match(missingPhone.body.fields.phone, /phone number/i);

const missingTimezone = await submit({ requesterTimeZone: "" }, `${testIpPrefix}::13`);
assert.equal(missingTimezone.status, 400);
assert.match(missingTimezone.body.fields.requesterTimeZone, /timezone/i);

const unexplainedTimezone = await submit({
  requesterTimeZone: "Other — include it in your note",
}, `${testIpPrefix}::14`);
assert.equal(unexplainedTimezone.status, 400);
assert.match(unexplainedTimezone.body.fields.message, /timezone/i);

const honeypot = await submit({ "contact-company-website": "spam.example" }, `${testIpPrefix}::15`);
assert.equal(honeypot.status, 400);
assert.equal(honeypot.body.error, "rejected");

const rateLimitIp = `${testIpPrefix}::50`;
for (let attempt = 0; attempt < 5; attempt += 1) {
  const allowed = await submit({ name: `Rate test ${attempt}` }, rateLimitIp);
  assert.equal(allowed.status, 503);
  assert.equal(allowed.body.error, "not-configured");
}
const limited = await submit({ name: "Rate test blocked" }, rateLimitIp);
assert.equal(limited.status, 429);
assert.equal(limited.body.error, "rate-limited");

console.log("consultation API smoke: email-only, phone-only, timezone, validation, honeypot, and rate-limit paths passed; real messages sent: 0");
