import { NextResponse } from "next/server";
import { contactTopics, siteConfig } from "@/lib/site-config";
import { getInquiryContext } from "@/lib/contact-context";
import { consultationTimingConvention, getNextBusinessDay } from "@/lib/business-days";
import {
  claimRecentSubmission,
  checkRateLimit,
  escapeHtml,
  formatTimestamp,
  getClientIp,
  isMailerConfigured,
  isTrustedOrigin,
  isValidEmail,
  NOTIFICATION_RECIPIENT,
  readJsonWithLimit,
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

  const parsed = await readJsonWithLimit(request);
  if (!parsed.ok) {
    return parsed.reason === "too-large"
      ? NextResponse.json({ ok: false, error: "payload-too-large" }, { status: 413 })
      : NextResponse.json({ ok: false, error: "invalid-request" }, { status: 400 });
  }
  if (typeof parsed.data !== "object" || parsed.data === null) {
    return NextResponse.json({ ok: false, error: "invalid-request" }, { status: 400 });
  }
  const raw = parsed.data as Record<string, unknown>;

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
  const requestType = raw.requestType === "consultation" ? "consultation" : "contact";
  const email = sanitizeLine(raw.email, 320);
  const phone = sanitizeLine(raw.phone, 50);
  const company = sanitizeLine(raw.company, 200);
  const topicRaw = sanitizeLine(raw.topic, 100);
  const topic = (contactTopics as readonly string[]).includes(topicRaw) ? topicRaw : contactTopics[0];
  const inquiryContext = getInquiryContext(sanitizeLine(raw.interest, 100));
  const message = sanitizeText(raw.message, 8000);
  const consent = raw.consent === true;
  const contactMethod = raw.contactMethod === "phone" ? "phone" : "email";
  const windowOptions = ["Any time", "Morning", "Afternoon", "Arrange by email"] as const;
  const timeZoneOptions = [
    "Eastern (ET)",
    "Central (CT)",
    "Mountain (MT)",
    "Pacific (PT)",
    "Alaska (AKT)",
    "Hawaii (HST)",
    "Atlantic (AST)",
    "Chamorro (ChST)",
    "Samoa (SST)",
    "Other — include it in your note",
  ] as const;
  const preferredWindowRaw = sanitizeLine(raw.preferredWindow, 100);
  const preferredWindow = windowOptions.includes(preferredWindowRaw as (typeof windowOptions)[number])
    ? preferredWindowRaw
    : "";
  const requesterTimeZoneRaw = sanitizeLine(raw.requesterTimeZone, 100);
  const requesterTimeZone = timeZoneOptions.includes(requesterTimeZoneRaw as (typeof timeZoneOptions)[number])
    ? requesterTimeZoneRaw
    : "";

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please enter your name.";
  if (requestType === "consultation") {
    if (contactMethod === "email" && !isValidEmail(email)) {
      errors.email = "Enter the email address we should use.";
    }
    if (contactMethod === "phone" && phone.replace(/\D/g, "").length < 7) {
      errors.phone = "Enter the phone number we should use.";
    }
    if (!preferredWindow) errors.preferredWindow = "Choose a preferred contact window.";
    if (!requesterTimeZone) errors.requesterTimeZone = "Choose your timezone.";
    if (requesterTimeZone === "Other — include it in your note" && !message) {
      errors.message = "Include your timezone in the project note.";
    }
  } else {
    if (!isValidEmail(email)) errors.email = "Please enter a valid email address.";
    if (!message) errors.message = "Please describe your project or question.";
  }
  if (!consent) errors.consent = "Please confirm you'd like us to reply.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "validation", fields: errors }, { status: 400 });
  }

  if (!isMailerConfigured()) {
    return NextResponse.json({ ok: false, error: "not-configured" }, { status: 503 });
  }

  const timestamp = formatTimestamp(new Date());
  const nextBusinessDay = getNextBusinessDay();
  const duplicateClaim = claimRecentSubmission(
    [
      requestType,
      contactMethod,
      name.toLowerCase(),
      email.toLowerCase(),
      phone.replace(/\D/g, ""),
      company.toLowerCase(),
      topic,
      inquiryContext?.id ?? "",
      message,
      preferredWindow,
      requesterTimeZone,
    ].join("|"),
  );
  if (duplicateClaim.duplicate) {
    return NextResponse.json({ ok: false, error: "duplicate" }, { status: 409 });
  }

  const isConsultation = requestType === "consultation";
  const internalTextLines = [
    isConsultation ? "NEW CONSULTATION REQUEST" : "NEW CONTACT FORM SUBMISSION",
    "",
    `Name: ${name}`,
    email ? `Email: ${email}` : undefined,
    phone ? `Phone: ${phone}` : undefined,
    isConsultation ? `Preferred contact method: ${contactMethod}` : undefined,
    isConsultation ? `Preferred window: ${preferredWindow}` : undefined,
    isConsultation ? `Requester timezone: ${requesterTimeZone}` : undefined,
    isConsultation ? `Next business day: ${nextBusinessDay.label}` : undefined,
    !isConsultation && company ? `Company: ${company}` : undefined,
    !isConsultation ? `Topic: ${topic}` : undefined,
    !isConsultation && inquiryContext ? `Inquiry context: ${inquiryContext.label}` : undefined,
    "",
    isConsultation ? "Optional note:" : "Message:",
    message || "Not provided",
    "",
    `Submitted: ${timestamp}`,
  ].filter((line): line is string => line !== undefined);
  const internalText = internalTextLines.join("\n");

  const internalHtml = `
    <h2>${isConsultation ? "New consultation request" : "New contact form submission"}</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    ${email ? `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` : ""}
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
    ${isConsultation ? `<p><strong>Preferred contact method:</strong> ${escapeHtml(contactMethod)}</p>` : ""}
    ${isConsultation ? `<p><strong>Preferred window:</strong> ${escapeHtml(preferredWindow)}</p>` : ""}
    ${isConsultation ? `<p><strong>Requester timezone:</strong> ${escapeHtml(requesterTimeZone)}</p>` : ""}
    ${isConsultation ? `<p><strong>Next business day:</strong> ${escapeHtml(nextBusinessDay.label)}</p>` : ""}
    ${!isConsultation && company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
    ${!isConsultation ? `<p><strong>Topic:</strong> ${escapeHtml(topic)}</p>` : ""}
    ${!isConsultation && inquiryContext ? `<p><strong>Inquiry context:</strong> ${escapeHtml(inquiryContext.label)}</p>` : ""}
    <p><strong>${isConsultation ? "Optional note" : "Message"}:</strong></p>
    <p>${message ? textToHtml(message) : "Not provided"}</p>
    <hr />
    <p style="color:#667085;font-size:13px;">Submitted ${escapeHtml(timestamp)}</p>
  `.trim();

  const internalResult = await sendMail({
    to: NOTIFICATION_RECIPIENT,
    subject: isConsultation ? `Consultation request from ${name}` : `[${topic}] New message from ${name}`,
    text: internalText,
    html: internalHtml,
    replyTo: isValidEmail(email) ? email : undefined,
  });

  if (!internalResult.ok) {
    duplicateClaim.release();
    return NextResponse.json({ ok: false, error: "send-failed" }, { status: 502 });
  }

  // Visitor confirmation is best-effort: the business-critical delivery
  // (the internal notification above) already succeeded, so a confirmation
  // failure does not fail the visitor's submission.
  const confirmationResult = isValidEmail(email) ? await sendMail({
    to: email,
    subject: isConsultation ? "We received your consultation request — Cyvexly Studio" : "We received your message — Cyvexly Studio",
    replyTo: siteConfig.email,
    text: [
      `Hi ${name},`,
      "",
      isConsultation
        ? `We received your consultation request. We will follow up on the next business day (${nextBusinessDay.label}), ${preferredWindow === "Arrange by email" ? "and arrange timing with you by email" : `using your requested ${preferredWindow.toLowerCase()} window where possible`}. This is a request, not a booked appointment.`
        : "Thanks for reaching out to Cyvexly Studio. We received your message and will respond within two business days.",
      "",
      isConsultation ? "Your optional note:" : "Your message:",
      message || "Not provided",
      ...(isConsultation ? ["", `Timing convention: ${consultationTimingConvention}.`] : []),
      ...(inquiryContext ? ["", `Inquiry context: ${inquiryContext.label}`] : []),
      "",
      `— ${siteConfig.name}`,
    ].join("\n"),
    html: `
      <p>Hi ${escapeHtml(name)},</p>
      <p>${isConsultation
        ? `We received your consultation request. We will follow up on the next business day (${escapeHtml(nextBusinessDay.label)}), ${preferredWindow === "Arrange by email" ? "and arrange timing with you by email" : `using your requested ${escapeHtml(preferredWindow.toLowerCase())} window where possible`}. This is a request, not a booked appointment.`
        : "Thanks for reaching out to Cyvexly Studio. We received your message and will respond within two business days."}</p>
      <p><strong>${isConsultation ? "Your optional note" : "Your message"}:</strong></p>
      <p>${message ? textToHtml(message) : "Not provided"}</p>
      ${isConsultation ? `<p><strong>Timing convention:</strong> ${escapeHtml(consultationTimingConvention)}.</p>` : ""}
      ${inquiryContext ? `<p><strong>Inquiry context:</strong> ${escapeHtml(inquiryContext.label)}</p>` : ""}
      <p>— ${escapeHtml(siteConfig.name)}</p>
    `.trim(),
  }) : { ok: false };

  return NextResponse.json({
    ok: true,
    confirmationSent: confirmationResult.ok,
    confirmationAvailable: isValidEmail(email),
    ...(isConsultation
      ? {
          requestType: "consultation",
          nextBusinessDay: nextBusinessDay.label,
          timingConvention: consultationTimingConvention,
        }
      : {}),
  });
}
