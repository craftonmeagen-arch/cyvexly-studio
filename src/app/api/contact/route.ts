import { NextResponse } from "next/server";
import { contactTopics, siteConfig } from "@/lib/site-config";
import {
  checkRateLimit,
  escapeHtml,
  formatTimestamp,
  getClientIp,
  isMailerConfigured,
  isTrustedOrigin,
  isValidEmail,
  NOTIFICATION_RECIPIENT,
  sanitizeLine,
  sanitizeText,
  sendMail,
  textToHtml,
} from "@/lib/mailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isTrustedOrigin(request)) {
    return NextResponse.json({ ok: false, error: "rejected" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid-request" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ ok: false, error: "invalid-request" }, { status: 400 });
  }
  const raw = body as Record<string, unknown>;

  // Honeypot: a real visitor never fills this field. Bots posting directly
  // to this route (bypassing the client's own JS check) get caught here too.
  const honeypot = sanitizeText(raw["contact-company-website"], 200);
  if (honeypot) {
    return NextResponse.json({ ok: false, error: "rejected" }, { status: 400 });
  }

  const ip = getClientIp(request);
  if (!checkRateLimit(`contact:${ip}`)) {
    return NextResponse.json({ ok: false, error: "rate-limited" }, { status: 429 });
  }

  const name = sanitizeLine(raw.name, 200);
  const email = sanitizeLine(raw.email, 320);
  const phone = sanitizeLine(raw.phone, 50);
  const company = sanitizeLine(raw.company, 200);
  const topicRaw = sanitizeLine(raw.topic, 100);
  const topic = (contactTopics as readonly string[]).includes(topicRaw) ? topicRaw : contactTopics[0];
  const message = sanitizeText(raw.message, 8000);
  const consent = raw.consent === true;

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please enter your name.";
  if (!isValidEmail(email)) errors.email = "Please enter a valid email address.";
  if (!message) errors.message = "Please enter a message.";
  if (!consent) errors.consent = "Please confirm you'd like us to reply.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "validation", fields: errors }, { status: 400 });
  }

  if (!isMailerConfigured()) {
    return NextResponse.json({ ok: false, error: "not-configured" }, { status: 503 });
  }

  const timestamp = formatTimestamp(new Date());

  const internalTextLines = [
    "NEW CONTACT FORM SUBMISSION",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : undefined,
    company ? `Company: ${company}` : undefined,
    `Topic: ${topic}`,
    "",
    "Message:",
    message,
    "",
    `Submitted: ${timestamp}`,
    `IP: ${ip}`,
  ].filter((line): line is string => line !== undefined);
  const internalText = internalTextLines.join("\n");

  const internalHtml = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
    <p><strong>Topic:</strong> ${escapeHtml(topic)}</p>
    <p><strong>Message:</strong></p>
    <p>${textToHtml(message)}</p>
    <hr />
    <p style="color:#667085;font-size:13px;">Submitted ${escapeHtml(timestamp)} · IP ${escapeHtml(ip)}</p>
  `.trim();

  const internalResult = await sendMail({
    to: NOTIFICATION_RECIPIENT,
    subject: `[${topic}] New message from ${name}`,
    text: internalText,
    html: internalHtml,
    replyTo: email,
  });

  if (!internalResult.ok) {
    return NextResponse.json({ ok: false, error: "send-failed" }, { status: 502 });
  }

  // Visitor confirmation is best-effort: the business-critical delivery
  // (the internal notification above) already succeeded, so a confirmation
  // failure does not fail the visitor's submission.
  await sendMail({
    to: email,
    subject: "We received your message — Cyvexly Studio",
    replyTo: siteConfig.email,
    text: [
      `Hi ${name},`,
      "",
      "Thanks for reaching out to Cyvexly Studio. We received your message and will respond within two business days.",
      "",
      "Your message:",
      message,
      "",
      `— ${siteConfig.name}`,
    ].join("\n"),
    html: `
      <p>Hi ${escapeHtml(name)},</p>
      <p>Thanks for reaching out to Cyvexly Studio. We received your message and will respond within two business days.</p>
      <p><strong>Your message:</strong></p>
      <p>${textToHtml(message)}</p>
      <p>— ${escapeHtml(siteConfig.name)}</p>
    `.trim(),
  });

  return NextResponse.json({ ok: true });
}
