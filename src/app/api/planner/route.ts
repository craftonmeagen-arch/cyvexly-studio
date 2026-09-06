import { NextResponse } from "next/server";
import {
  assetCategories,
  assetStatusOptions,
  budgetRanges,
  businessStages,
  contentReadinessOptions,
  geographicMarkets,
  plannerFeatures,
  possiblePages,
  primaryGoals,
  timingOptions,
  websiteTypes,
} from "@/lib/planner-config";
import { siteConfig } from "@/lib/site-config";
import {
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
} from "@/lib/mailer";

export const runtime = "nodejs";

function labelFor(options: { id: string; label: string }[], id: string): string {
  return options.find((option) => option.id === id)?.label ?? id;
}

function allowedOnly(list: unknown, allowed: readonly string[]): string[] {
  if (!Array.isArray(list)) return [];
  return list.filter((item): item is string => typeof item === "string" && allowed.includes(item));
}

function allowedValue(value: unknown, allowed: readonly string[]): string {
  const line = sanitizeLine(value, 200);
  return allowed.includes(line) ? line : "";
}

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

  // Honeypot backstop for direct POSTs that bypass the client's own check.
  if (sanitizeText(raw.honeypot, 200)) {
    return NextResponse.json({ ok: false, error: "rejected" }, { status: 400 });
  }

  const ip = getClientIp(request);
  if (!checkRateLimit(`planner:${ip}`)) {
    return NextResponse.json({ ok: false, error: "rate-limited" }, { status: 429 });
  }

  // --- sanitize ---
  const fullName = sanitizeLine(raw.fullName, 200);
  const workEmail = sanitizeLine(raw.workEmail, 320);
  const contactMethod = sanitizeLine(raw.contactMethod, 200);
  const roleTitle = sanitizeLine(raw.roleTitle, 200);
  const companyName = sanitizeLine(raw.companyName, 200);
  const country = sanitizeLine(raw.country, 200);
  const otherApprovers = sanitizeText(raw.otherApprovers, 500);
  const businessDescription = sanitizeText(raw.businessDescription, 3000);
  const productsServices = sanitizeText(raw.productsServices, 3000);
  const currentWebsite = sanitizeLine(raw.currentWebsite, 300);
  const businessStage = allowedValue(raw.businessStage, businessStages);
  const geographicMarket = allowedValue(raw.geographicMarket, geographicMarkets);
  const customerGroups = sanitizeText(raw.customerGroups, 2000);
  const competitors = sanitizeText(raw.competitors, 2000);
  const differentiation = sanitizeText(raw.differentiation, 2000);
  const primaryGoalId = allowedValue(
    raw.primaryGoal,
    primaryGoals.map((g) => g.id),
  );
  const primaryGoalOther = sanitizeText(raw.primaryGoalOther, 500);
  const secondaryGoals = sanitizeText(raw.secondaryGoals, 1000);
  const importantAction = sanitizeText(raw.importantAction, 1000);
  const currentProblems = sanitizeText(raw.currentProblems, 2000);
  const successMeasure = sanitizeText(raw.successMeasure, 1000);
  const trafficAnalytics = sanitizeText(raw.trafficAnalytics, 1000);
  const websiteTypeId = allowedValue(
    raw.websiteType,
    websiteTypes.map((t) => t.id),
  );
  const pages = allowedOnly(raw.pages, possiblePages);
  const pagesOther = sanitizeText(raw.pagesOther, 500);
  const pageCount = sanitizeLine(raw.pageCount, 100);
  const essentialPages = sanitizeText(raw.essentialPages, 1000);
  const needsMigration = sanitizeLine(raw.needsMigration, 200);
  const multipleLanguages = sanitizeLine(raw.multipleLanguages, 200);
  const notSureSitemap = raw.notSureSitemap === true;
  const featureIds = allowedOnly(
    raw.features,
    plannerFeatures.map((f) => f.id),
  );
  const notSureFeatures = raw.notSureFeatures === true;
  const featureDetails = sanitizeText(raw.featureDetails, 2000);
  const assetStatus: Record<string, string> = {};
  if (raw.assetStatus && typeof raw.assetStatus === "object") {
    for (const [key, value] of Object.entries(raw.assetStatus as Record<string, unknown>)) {
      const categoryLabel = assetCategories.find((c) => c.id === key)?.label;
      const statusLabel = assetStatusOptions.find((s) => s.id === value)?.label;
      if (categoryLabel && statusLabel) assetStatus[categoryLabel] = statusLabel;
    }
  }
  const assetLink = sanitizeLine(raw.assetLink, 500);
  const personalityAdjectives = sanitizeText(raw.personalityAdjectives, 500);
  const colorsToUse = sanitizeText(raw.colorsToUse, 500);
  const colorsToAvoid = sanitizeText(raw.colorsToAvoid, 500);
  const sitesAdmired = sanitizeText(raw.sitesAdmired, 1000);
  const competitorsToAvoid = sanitizeText(raw.competitorsToAvoid, 500);
  const accessibilityNotes = sanitizeText(raw.accessibilityNotes, 1000);
  const openNotes = sanitizeText(raw.openNotes, 2000);
  const budgetRange = allowedValue(raw.budgetRange, budgetRanges);
  const launchDate = sanitizeLine(raw.launchDate, 100);
  const launchDateReason = sanitizeText(raw.launchDateReason, 500);
  const timingFlexibility = allowedValue(raw.timingFlexibility, timingOptions);
  const contentReadiness = allowedValue(raw.contentReadiness, contentReadinessOptions);
  const careInterest = sanitizeLine(raw.careInterest, 100);
  const acknowledgeNotQuote = raw.acknowledgeNotQuote === true;
  const consent = raw.consent === true;
  const followUpEmails = raw.followUpEmails === true;

  // --- server-side validation mirroring the client's per-step rules ---
  const errors: Record<string, string> = {};
  if (!fullName) errors.fullName = "Please enter your name.";
  if (!isValidEmail(workEmail)) errors.workEmail = "Please enter a valid email address.";
  if (!contactMethod) errors.contactMethod = "Please share a phone or preferred contact method.";
  if (!businessDescription) errors.businessDescription = "Please describe your business in a sentence or two.";
  if (!primaryGoalId) errors.primaryGoal = "Please choose your primary goal.";
  if (primaryGoalId === "other" && !primaryGoalOther) {
    errors.primaryGoalOther = "Please describe your goal.";
  }
  if (!websiteTypeId) errors.websiteType = "Please choose a website type.";
  if (pages.length === 0 && !notSureSitemap) {
    errors.pages = 'Select at least one page, or choose "not sure — recommend the sitemap."';
  }
  if (featureIds.length === 0 && !notSureFeatures) {
    errors.features = 'Select at least one feature, or choose "not sure — recommend the right features."';
  }
  if (!budgetRange) errors.budgetRange = "Please choose a budget range.";
  if (!timingFlexibility) errors.timingFlexibility = "Please choose a timing preference.";
  if (!acknowledgeNotQuote) errors.acknowledgeNotQuote = "Please acknowledge this isn't a final quote.";
  if (!consent) errors.consent = "Please confirm you'd like Cyvexly to respond.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "validation", fields: errors }, { status: 400 });
  }

  if (!isMailerConfigured()) {
    return NextResponse.json({ ok: false, error: "not-configured" }, { status: 503 });
  }

  const goalLabel =
    primaryGoalId === "other" ? primaryGoalOther || "Other" : labelFor(primaryGoals, primaryGoalId);
  const websiteTypeLabel = labelFor(websiteTypes, websiteTypeId);
  const pagesLabel = notSureSitemap ? "Not sure — recommend the sitemap" : pages.join(", ");
  const featuresLabel = notSureFeatures
    ? "Not sure — recommend the right features"
    : featureIds.map((id) => labelFor(plannerFeatures, id)).join(", ");
  const timestamp = formatTimestamp(new Date());

  type Row = [string, string];
  const section = (title: string, rows: Row[]) =>
    rows.filter(([, value]) => value !== "" && value !== undefined);

  const sections: { title: string; rows: Row[] }[] = [
    {
      title: "About you",
      rows: section("About you", [
        ["Name", fullName],
        ["Email", workEmail],
        ["Phone / contact method", contactMethod],
        ["Role", roleTitle],
        ["Company", companyName],
        ["Country / time zone", country],
        ["Other approvers", otherApprovers],
      ]),
    },
    {
      title: "The business",
      rows: section("The business", [
        ["Description", businessDescription],
        ["Products / services", productsServices],
        ["Current website", currentWebsite],
        ["Stage", businessStage],
        ["Market", geographicMarket],
        ["Customer groups", customerGroups],
        ["Competitors", competitors],
        ["Differentiation", differentiation],
      ]),
    },
    {
      title: "Goals",
      rows: section("Goals", [
        ["Primary goal", goalLabel],
        ["Secondary goals", secondaryGoals.split("|").filter(Boolean).join(", ")],
        ["Most important action", importantAction],
        ["Current problems", currentProblems],
        ["Success measure", successMeasure],
        ["Traffic / analytics", trafficAnalytics],
      ]),
    },
    {
      title: "Website & pages",
      rows: section("Website & pages", [
        ["Website type", websiteTypeLabel],
        ["Pages", pagesLabel],
        ["Other page(s)", pagesOther],
        ["Essential for launch", essentialPages],
        ["Approx. page count", pageCount],
        ["Needs migration", needsMigration],
        ["Multiple languages", multipleLanguages],
      ]),
    },
    {
      title: "Features",
      rows: section("Features", [
        ["Features", featuresLabel],
        ["Feature details", featureDetails],
      ]),
    },
    {
      title: "Brand & content",
      rows: [...Object.entries(assetStatus), ["Asset link", assetLink] as Row].filter(
        ([, value]) => value !== "",
      ) as Row[],
    },
    {
      title: "Visual direction",
      rows: section("Visual direction", [
        ["Personality adjectives", personalityAdjectives],
        ["Colors to use", colorsToUse],
        ["Colors to avoid", colorsToAvoid],
        ["Sites admired", sitesAdmired],
        ["Competitors to avoid resembling", competitorsToAvoid],
        ["Accessibility notes", accessibilityNotes],
        ["Open notes", openNotes],
      ]),
    },
    {
      title: "Budget & timing",
      rows: section("Budget & timing", [
        ["Budget range", budgetRange],
        ["Desired launch date", launchDate],
        ["Why that date matters", launchDateReason],
        ["Timing", timingFlexibility],
        ["Content readiness", contentReadiness],
        ["Care interest", careInterest],
      ]),
    },
    {
      title: "Consent",
      rows: [["Follow-up emails okay", followUpEmails ? "Yes" : "No"]],
    },
  ];

  const textLines: string[] = ["PROJECT PLANNER SUBMISSION", ""];
  for (const { title, rows } of sections) {
    if (rows.length === 0) continue;
    textLines.push(`-- ${title} --`);
    for (const [label, value] of rows) textLines.push(`${label}: ${value}`);
    textLines.push("");
  }
  textLines.push(`Submitted: ${timestamp}`, `IP: ${ip}`);
  const internalText = textLines.join("\n");

  const internalHtml = `
    <h2>New Project Planner submission</h2>
    ${sections
      .filter((s) => s.rows.length > 0)
      .map(
        (s) => `
          <h3 style="margin-bottom:4px;">${escapeHtml(s.title)}</h3>
          <table cellpadding="4" cellspacing="0">
            ${s.rows
              .map(
                ([label, value]) =>
                  `<tr><td style="color:#667085;vertical-align:top;white-space:nowrap;"><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value).replace(/\n/g, "<br />")}</td></tr>`,
              )
              .join("")}
          </table>
        `,
      )
      .join("")}
    <hr />
    <p style="color:#667085;font-size:13px;">Submitted ${escapeHtml(timestamp)} · IP ${escapeHtml(ip)}</p>
  `.trim();

  const internalResult = await sendMail({
    to: NOTIFICATION_RECIPIENT,
    subject: `Project Planner: ${companyName || fullName}`,
    text: internalText,
    html: internalHtml,
    replyTo: workEmail,
  });

  if (!internalResult.ok) {
    return NextResponse.json({ ok: false, error: "send-failed" }, { status: 502 });
  }

  // Visitor confirmation is best-effort — see contact route for rationale.
  await sendMail({
    to: workEmail,
    subject: "We received your project brief — Cyvexly Studio",
    replyTo: siteConfig.email,
    text: [
      `Hi ${fullName},`,
      "",
      "Thanks for completing the Cyvexly Studio Project Planner. We received your full brief and will respond within two business days.",
      "",
      `Primary goal: ${goalLabel}`,
      `Website type: ${websiteTypeLabel}`,
      `Budget range: ${budgetRange}`,
      "",
      `— ${siteConfig.name}`,
    ].join("\n"),
    html: `
      <p>Hi ${escapeHtml(fullName)},</p>
      <p>Thanks for completing the Cyvexly Studio Project Planner. We received your full brief and will respond within two business days.</p>
      <p><strong>Primary goal:</strong> ${escapeHtml(goalLabel)}<br />
      <strong>Website type:</strong> ${escapeHtml(websiteTypeLabel)}<br />
      <strong>Budget range:</strong> ${escapeHtml(budgetRange)}</p>
      <p>— ${escapeHtml(siteConfig.name)}</p>
    `.trim(),
  });

  return NextResponse.json({ ok: true });
}
