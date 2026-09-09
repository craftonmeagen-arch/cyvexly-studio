import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:5173";

async function read(path) {
  const response = await fetch(new URL(path, baseUrl));
  assert.equal(response.status, 200, `${path} returned ${response.status}`);
  return response.text();
}

async function readStatus(path) {
  return fetch(new URL(path, baseUrl)).then((response) => response.status);
}

const inquiryContexts = {
  "signal-package": "Signal package — focused starter website",
  "orbit-package": "Orbit package — small-business website",
  "nexus-package": "Nexus package — larger content site or redesign",
  "commerce-package": "Commerce package — online store or booking-led website",
  "custom-system": "Custom web application or unusual workflow",
  "custom-web-applications": "Custom web application or unusual workflow",
  "hospitality-website": "Restaurant or hospitality website",
  "business-websites": "New business website",
  "website-redesigns": "Website improvement or redesign",
  "landing-pages": "Focused landing page",
  "ecommerce-websites": "Selling products or taking bookings online",
  "website-care": "Ongoing website care and updates",
  "care-plan": "Care plan — ongoing website support",
  "care-plus-plan": "Care+ plan — ongoing website support",
  "evolve-plan": "Evolve plan — ongoing website support",
};

const inquiryPlannerServices = {
  "signal-package": "landing-pages",
  "orbit-package": "business-websites",
  "nexus-package": "website-redesigns",
  "commerce-package": "ecommerce-websites",
  "custom-system": "custom-web-applications",
  "custom-web-applications": "custom-web-applications",
  "hospitality-website": "booking-websites",
  "business-websites": "business-websites",
  "website-redesigns": "website-redesigns",
  "landing-pages": "landing-pages",
  "ecommerce-websites": "ecommerce-websites",
  "website-care": "website-care",
  "care-plan": "website-care",
  "care-plus-plan": "website-care",
  "evolve-plan": "website-care",
};

const contextEntries = Object.entries(inquiryContexts);
const [home, services, pricing, planner, plainContact, unknownContact, genericContact, ...contextualContacts] =
  await Promise.all([
    read("/"),
    read("/services"),
    read("/pricing"),
    read("/start"),
    read("/contact"),
    read("/contact?interest=not-a-real-context"),
    read("/contact?interest=custom-project"),
    ...contextEntries.map(([interest]) => read(`/contact?interest=${interest}`)),
  ]);
const [work, processHtml, about, faq, sitemap] = await Promise.all([
  read("/work"),
  read("/process"),
  read("/about"),
  read("/faq"),
  read("/sitemap.xml"),
]);

for (const [name, html] of [
  ["Services", services],
  ["Process", processHtml],
  ["About", about],
  ["FAQ", faq],
  ["Planner", planner],
]) {
  assert.match(
    html,
    /page-intro-stage[^\"]*py-7[^\"]*sm:py-10/,
    `${name} restored the oversized internal-page stage`,
  );
  assert.match(
    html,
    /page-intro-shell[^\"]*py-7[^\"]*sm:py-9/,
    `${name} restored the oversized internal-page panel`,
  );
}
assert.match(
  work,
  /page-intro-stage[^\"]*py-5[^\"]*sm:py-6/,
  "Work restored the oversized opening stage",
);
assert.match(
  work,
  /page-intro-shell[^\"]*py-6[^\"]*sm:py-7/,
  "Work restored the oversized opening panel",
);
assert.match(
  pricing,
  /pricing-hero-layout[^\"]*py-7[^\"]*md:py-9[^\"]*lg:py-8/,
  "Pricing restored the oversized opening stage",
);
assert.match(
  pricing,
  /pricing-scope-visual[^\"]*hidden[^\"]*sm:block/,
  "Pricing restored the decorative mobile scope graphic above package prices",
);
assert.doesNotMatch(
  pricing,
  /lg:-mt-14/,
  "Pricing package cards still overlap the section navigation",
);
assert.ok(
  plainContact.indexOf("<form") < plainContact.indexOf("Reach us directly"),
  "Contact still places secondary direct-contact guidance before the primary short form",
);
assert.match(
  plainContact,
  /page-intro-stage[^\"]*py-5[^\"]*sm:py-6/,
  "Contact restored the oversized opening stage",
);
assert.match(
  plainContact,
  /page-intro-shell[^\"]*py-6[^\"]*sm:py-7/,
  "Contact restored the oversized opening panel",
);
assert.match(
  plainContact,
  /max-w-5xl[^\"]*py-8[^\"]*sm:py-10[^\"]*lg:py-12/,
  "Contact restored the oversized gap before the short form",
);
const serviceSlugs = [
  "business-websites",
  "website-redesigns",
  "landing-pages",
  "ecommerce-websites",
  "custom-web-applications",
  "website-care",
];
const serviceDetails = await Promise.all(
  serviceSlugs.map((slug) => read(`/services/${slug}`)),
);

function getHeader(html) {
  return html.match(/<header[\s\S]*?<\/header>/)?.[0] ?? "";
}

function getFooter(html) {
  return html.match(/<footer[\s\S]*?<\/footer>/)?.[0] ?? "";
}

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

for (const html of [home, services, pricing, work, processHtml, about, faq, plainContact]) {
  const header = getHeader(html);
  assert.match(
    header,
    /href="\/contact\?interest=custom-project"[^>]*>[\s\S]*?Ask about a project/,
    "sitewide primary header action does not open the short inquiry",
  );
  assert.doesNotMatch(
    header,
    /href="\/start"[^>]*>[\s\S]*?Describe your project/,
    "sitewide primary header action still routes to the detailed Planner",
  );
}
assert.match(home, /href="\/start"[^>]*>[\s\S]*?Detailed Project Planner/);

const buyerServiceFooterLinks = [
  ["Business websites", "/services/business-websites"],
  ["Website redesigns", "/services/website-redesigns"],
  ["Commerce &amp; booking", "/services/ecommerce-websites"],
  ["Custom web applications", "/services/custom-web-applications"],
  ["Website care", "/services/website-care"],
];

for (const html of [home, services, pricing, work, processHtml, about, faq, plainContact, planner]) {
  const footer = getFooter(html);
  for (const [label, href] of buyerServiceFooterLinks) {
    assert.match(
      footer,
      new RegExp(`href="${href}"[^>]*>${label}`),
      `sitewide footer is missing the buyer-led ${label} route`,
    );
  }
  assert.doesNotMatch(
    footer,
    /href="\/services\/landing-pages"[^>]*>Landing pages/,
    "sitewide footer restored the old service taxonomy",
  );
}

assert.match(home, /Ready to make your business unmistakable\?/);
assert.doesNotMatch(home, /Ready to build something extraordinary\?/);
assert.match(
  home,
  /aria-label="Websites built to make your business unmistakable\."/,
  "Home's styled buyer promise lacks one explicit accessible heading name",
);
assert.match(
  home,
  /Website timelines: 2–14\+ weeks by scope/,
  "Home timing reassurance does not cover the published website-package range",
);
assert.doesNotMatch(
  home,
  /Typical websites: 2–6 weeks/,
  "Home restored the narrower timing claim that excludes Nexus and Commerce",
);
assert.match(
  home,
  /Commerce 8–14\+ weeks\. Custom applications are scoped individually\./,
  "Home timing FAQ omits the longer Commerce and discovery-scoped application paths",
);
assert.match(planner, /Tell us what you need\. We(?:&#x27;|&apos;)ll recommend the right scope\./);
assert.doesNotMatch(planner, /shape the right route/);

const serviceDestinations = [
  ["See package details", "/pricing#packages"],
  ["See add-on pricing", "/pricing#add-ons"],
  ["See Commerce package", "/pricing#commerce-package"],
  ["Read our accessibility target", "/accessibility"],
  ["Compare care plans", "/pricing#care-plans"],
];

for (const [label, href] of serviceDestinations) {
  assert.match(services, new RegExp(`href="${href}"[^>]*>${label}`));
}

for (const id of [
  "packages",
  "signal-package",
  "orbit-package",
  "nexus-package",
  "commerce-package",
  "custom-system-package",
  "compare",
  "example-scopes",
  "add-ons",
  "care-plans",
  "ongoing-costs",
  "pricing-questions",
]) {
  assert.match(pricing, new RegExp(`id="${id}"`), `missing pricing anchor ${id}`);
}

for (const label of [
  "A new business website",
  "Improve an existing website",
  "Sell or take bookings online",
  "A custom web application",
  "Ongoing website support",
]) {
  assert.match(services, new RegExp(label), `missing buyer-led service route: ${label}`);
}
const buyerNeedInquiryDestinations = {
  "new-business-website": "business-websites",
  "improve-existing-website": "website-redesigns",
  "sell-or-book-online": "commerce-package",
  "custom-web-application": "custom-system",
  "ongoing-website-support": "website-care",
};
for (const [needId, interest] of Object.entries(buyerNeedInquiryDestinations)) {
  const card = services.match(
    new RegExp(`<article[^>]*id="${needId}"[\\s\\S]*?</article>`),
  )?.[0];
  assert.ok(card, `missing buyer-led service card: ${needId}`);
  assert.match(
    card,
    new RegExp(`href="/contact\\?interest=${interest}"[^>]*>[\\s\\S]*?Ask about this`),
    `${needId} discards the buyer's chosen need at the short inquiry`,
  );
}
assert.doesNotMatch(services, /Service pathways/);
assert.doesNotMatch(services, /Popular website types/);
assert.match(services, /See the strongest working example/);
assert.match(services, /href="\/work\/velora-dining"/);
assert.match(
  services,
  /href="\/services\/custom-web-applications"[^>]*>Explore custom web applications/,
);
assert.match(
  services,
  /href="\/work\/nexora-systems"[^>]*>See the built Nexora example/,
);

for (const [index, slug] of serviceSlugs.entries()) {
  assert.match(
    serviceDetails[index],
    new RegExp(`href="/contact\\?interest=${slug}"[^>]*>Ask about this service`),
    `${slug} does not offer a contextual short inquiry`,
  );
  assert.match(
    serviceDetails[index],
    new RegExp(`href="/start\\?service=${slug}"[^>]*>Share a detailed brief`),
    `${slug} does not keep the detailed Planner as a secondary action`,
  );
}
const servicePricingDestinations = {
  "business-websites": ["Orbit", "/pricing#orbit-package"],
  "website-redesigns": ["Nexus", "/pricing#nexus-package"],
  "landing-pages": ["Signal", "/pricing#signal-package"],
  "ecommerce-websites": ["Commerce", "/pricing#commerce-package"],
  "custom-web-applications": ["Custom application", "/pricing#custom-system-package"],
  "website-care": ["Care", "/pricing#care-plans"],
};
for (const [index, slug] of serviceSlugs.entries()) {
  const [packageName, href] = servicePricingDestinations[slug];
  const escapedHref = escapeRegExp(href);
  assert.match(
    serviceDetails[index],
    new RegExp(
      `href="${escapedHref}"[^>]*>[\\s\\S]{0,24}See[\\s\\S]{0,24}${escapeRegExp(packageName)}[\\s\\S]{0,24}pricing`,
    ),
    `${slug} does not preserve its named package in the opening pricing action`,
  );
  assert.match(
    serviceDetails[index],
    new RegExp(
      `href="${escapedHref}"[^>]*>[\\s\\S]{0,24}Review[\\s\\S]{0,24}${escapeRegExp(packageName)}[\\s\\S]{0,24}pricing`,
    ),
    `${slug} does not preserve its named package in the lower pricing action`,
  );
}
for (const [label, interest] of [
  ["Care", "care-plan"],
  ["Care+", "care-plus-plan"],
  ["Evolve", "evolve-plan"],
]) {
  assert.match(
    pricing,
    new RegExp(`href="/contact\\?interest=${interest}"`),
    `${label} does not carry its context into the short inquiry`,
  );
}
for (const careDecision of [
  "Monthly capacity",
  "Response window",
  "Review rhythm",
  "whether unused monthly capacity carries forward",
]) {
  assert.match(pricing, new RegExp(careDecision), `missing care-plan decision: ${careDecision}`);
}

assert.match(home, /href="\/contact\?interest=custom-project"[^>]*>Ask about a project/);
assert.match(home, /href="\/work"[^>]*>View our work/);
assert.match(home, /Try interactive demo/);
assert.match(home, /Two working demos\. Two different problems\./);
assert.match(
  home,
  /href="\/media\/nexora-release-demo\.png"/,
  "Home still represents the built Nexora demo with a schematic preview",
);
assert.match(home, /Choose the business goal that sounds familiar/);
assert.match(home, /From first conversation to a site you own/);
assert.doesNotMatch(home, /We&apos;re not a DIY builder/);
assert.doesNotMatch(home, /Give us the brief\. We&apos;ll shape the route/);
assert.doesNotMatch(home, /Aurora Spaces|Vellora Care|href="\/work\/(?:aurora-spaces|vellora-care)"/);
assert.doesNotMatch(home, /href="\/pricing"[^>]*>Need something custom\? Let/);
assert.doesNotMatch(home, />Most popular</);
assert.match(home, />Recommended</);

assert.match(work, /Working experiences you can inspect/);
assert.match(work, /Selectable time ranges and comparison states/);
assert.match(work, /Reservation and private-event demo flows/);
assert.match(
  work,
  /href="\/media\/nexora-release-demo\.png"/,
  "Work still represents the built Nexora demo with a schematic preview",
);
assert.doesNotMatch(work, /Filter projects|Design concepts|Aurora Spaces|Vellora Care/);
assert.doesNotMatch(work, /not twelve thin ones/);
assert.match(work, /href="\/contact\?interest=custom-project"/);
assert.match(processHtml, /A short inquiry is enough to begin/);
assert.match(processHtml, /The detailed Project Planner is optional/);
assert.match(processHtml, /href="\/contact\?interest=custom-project"/);
assert.doesNotMatch(processHtml, /Give us the brief\. We&apos;ll shape the route/);
assert.match(about, /clear, accountable way of working/);
assert.doesNotMatch(about, /founder mythology/);
assert.match(faq, /Send a short inquiry with your name, email/);
assert.match(faq, /the detailed Planner is optional/);
assert.match(faq, /href="\/contact\?interest=custom-project"[^>]*>[\s\S]*?Ask about a project/);

assert.match(pricing, /href="\/contact\?interest=orbit-package"/);
assert.match(pricing, /Ask about [\s\S]{0,80}Orbit/);
assert.match(pricing, /href="\/start"[^>]*>Share a detailed brief/);
assert.doesNotMatch(pricing, />Most popular</);
assert.match(pricing, />Recommended</);
for (const label of [
  "Focused starter website",
  "Small-business website",
  "Larger content site or redesign",
  "Online store or booking-led website",
  "Purpose-built web application",
]) {
  assert.match(pricing, new RegExp(label), `missing plain-language package label: ${label}`);
}
for (const bookingInclusiveDetail of [
  "Storefront or booking journey structure",
  "Product, service, and collection templates",
  "Initial catalog or service setup allowance",
  "Checkout, payment, or scheduling configuration",
  "Shipping, tax, or booking requirement review",
  "Transactional and notification review",
  "Catalog or service tools and training",
  "Checkout, booking, and approved services",
]) {
  assert.match(
    pricing,
    new RegExp(bookingInclusiveDetail.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
    `Commerce pricing is missing booking-inclusive scope: ${bookingInclusiveDetail}`,
  );
}
for (const storeOnlyDetail of [
  "Store structure",
  "Product and collection templates",
  "Initial catalog allowance",
  "Checkout/payment configuration",
  "Shipping/tax requirement review",
  "Transactional experience review",
  "Catalog tools and training",
  "Checkout plus approved store services",
]) {
  assert.doesNotMatch(
    pricing,
    new RegExp(storeOnlyDetail.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
    `Commerce pricing still narrows a booking-led package to store-only scope: ${storeOnlyDetail}`,
  );
}
assert.doesNotMatch(
  pricing,
  /Starting at[\s\S]{0,500}From \$8,500/,
  "Commerce pricing repeats the starting-price qualifier",
);
assert.match(pricing, /Content editing/);
assert.match(pricing, /Forms \/ integrations/);
assert.match(pricing, /Illustrative build fee: \$4,500–\$5,750/);
assert.match(pricing, /A small content request is one update/);
assert.match(pricing, /Priority reply within one business day/);

const readMessageValue = (html) =>
  html.match(/<textarea[^>]*id="message"[^>]*>([\s\S]*?)<\/textarea>/)?.[1] ?? null;

assert.equal(readMessageValue(plainContact), "");
assert.equal(readMessageValue(unknownContact), "");
assert.equal(readMessageValue(genericContact), "");
assert.doesNotMatch(genericContact, /Inquiry context/);
const contactFormHtml = plainContact.match(/<form[\s\S]*?<\/form>/)?.[0] ?? "";
assert.ok(contactFormHtml, "contact form HTML is missing");
assert.match(contactFormHtml, /<details[^>]*>/, "optional contact details disclosure is missing");
assert.doesNotMatch(
  contactFormHtml,
  /<details[^>]*\sopen(?:=|\s|>)/,
  "optional contact details should be collapsed on first use",
);
assert.match(contactFormHtml, /Add optional details/);
assert.match(contactFormHtml, /Phone, company, or a different topic/);
assert.match(contactFormHtml, /Required fields/);
for (const fieldId of ["name", "email", "message", "consent"]) {
  const fieldHtml = contactFormHtml.match(
    new RegExp(`<(?:input|textarea)[^>]*id="${fieldId}"[^>]*>`),
  )?.[0];
  assert.ok(fieldHtml, `required contact field is missing: ${fieldId}`);
  assert.match(fieldHtml, /\srequired(?:=""|\s|>)/, `${fieldId} is not marked required`);
}
assert.equal(
  (contactFormHtml.match(/\(required\)/g) ?? []).length,
  4,
  "required contact labels should expose four accessible required markers",
);
assert.ok(
  contactFormHtml.indexOf('id="message"') < contactFormHtml.indexOf("Add optional details"),
  "the required message field should precede optional contact details",
);
assert.match(contactFormHtml, /Topic[\s\S]*?\(optional\)/);

for (const [[interest, expectedLabel], html] of contextEntries.map((entry, index) => [
  entry,
  contextualContacts[index],
])) {
  assert.match(
    html,
    /<option value="Project inquiry" selected="">Project inquiry<\/option>/,
    `${interest} did not select the project-inquiry topic`,
  );
  assert.equal(readMessageValue(html), "", `${interest} prefilled the buyer's required message`);
  assert.match(html, /Inquiry context/);
  assert.match(html, new RegExp(escapeRegExp(expectedLabel)));
  assert.match(html, new RegExp(`data-inquiry-context="${escapeRegExp(interest)}"`));
  const plannerService = inquiryPlannerServices[interest];
  assert.equal(
    (html.match(new RegExp(`href="/start\\?service=${escapeRegExp(plannerService)}"`, "g")) ?? [])
      .length,
    2,
    `${interest} did not carry its context through both detailed-Planner links`,
  );
}

assert.match(home, /href="\/contact\?interest=signal-package"/);
assert.match(home, /href="\/contact\?interest=orbit-package"/);
assert.match(home, /href="\/contact\?interest=nexus-package"/);
assert.match(pricing, /href="\/contact\?interest=commerce-package"/);
assert.match(pricing, /href="\/contact\?interest=custom-system"/);
assert.match(pricing, />Custom application</);
assert.match(pricing, /Ask about[\s\S]{0,20}Custom application/);
assert.match(pricing, /Commerce &amp; custom applications/);
assert.doesNotMatch(pricing, /Custom system/);
assert.doesNotMatch(faq, /custom systems/i);

// PlannerForm waits for its device-local draft check before rendering fields,
// so the first server response intentionally contains only its loading state.
// Keep a source-contract assertion here; the visible-browser pass covers the
// hydrated label, hint, and required-state in the integrated product.
const plannerFormSource = await readFile(
  new URL("../src/components/planner/planner-form.tsx", import.meta.url),
  "utf8",
);
const contactFormSource = await readFile(
  new URL("../src/components/contact-form.tsx", import.meta.url),
  "utf8",
);
const contactRouteSource = await readFile(
  new URL("../src/app/api/contact/route.ts", import.meta.url),
  "utf8",
);
const plannerRouteSource = await readFile(
  new URL("../src/app/api/planner/route.ts", import.meta.url),
  "utf8",
);
const privacySource = await readFile(
  new URL("../src/app/privacy/page.tsx", import.meta.url),
  "utf8",
);
const submissionFallbackSource = await readFile(
  new URL("../src/components/submission-fallback.tsx", import.meta.url),
  "utf8",
);
const submissionReceiptSource = await readFile(
  new URL("../src/components/submission-receipt.tsx", import.meta.url),
  "utf8",
);
const plannerConfigSource = await readFile(
  new URL("../src/lib/planner-config.ts", import.meta.url),
  "utf8",
);
assert.match(plannerConfigSource, /"custom-web-applications": \{/);
assert.match(
  plannerConfigSource,
  /"ecommerce-websites": \{[\s\S]*?serviceName: "Commerce or booking website"[\s\S]*?primaryGoal: ""/,
  "the shared commerce/booking Planner entry still guesses that every buyer is selling products",
);
assert.match(
  plannerConfigSource,
  /"booking-websites": \{[\s\S]*?serviceName: "Booking-led website"[\s\S]*?primaryGoal: "book"/,
  "the Planner is missing a booking-specific prefill for hospitality buyers",
);
assert.match(plannerFormSource, /id="planner-storage-note"/);
assert.match(plannerFormSource, /only in this browser on this device/);
assert.match(plannerFormSource, /cannot see it until you submit/);
assert.match(plannerFormSource, /aria-describedby="planner-storage-note"/);
assert.match(contactFormSource, /<SubmissionFallback message=\{submitError\}/);
assert.match(plannerFormSource, /<SubmissionFallback message=\{submitError\}/);
for (const source of [contactRouteSource, plannerRouteSource]) {
  assert.match(source, /confirmationSent: confirmationResult\.ok/);
}
for (const source of [contactFormSource, plannerFormSource]) {
  assert.match(source, /<SubmissionReceipt[\s\S]*confirmationSent=\{confirmationSent === true\}/);
  assert.match(source, /don(?:&apos;|')t need to resubmit/);
}
assert.match(submissionReceiptSource, /data-confirmation-delivery=\{confirmationSent \? "sent" : "failed"\}/);
assert.match(submissionReceiptSource, /receipt\.focus\(\{ preventScroll: true \}\)/);
assert.match(submissionReceiptSource, /receipt\.scrollIntoView\(/);
assert.match(submissionReceiptSource, /prefers-reduced-motion: reduce/);
assert.match(plannerFormSource, /We(?:&apos;|')ll also try to[\s\S]*email you a confirmation copy/);
assert.match(privacySource, /attempts to email you a confirmation/);
assert.match(privacySource, /emails this process successfully sends/);
assert.match(submissionFallbackSource, /data-submission-fallback/);
assert.match(submissionFallbackSource, /fallback\.focus\(\{ preventScroll: true \}\)/);
assert.match(submissionFallbackSource, /fallback\.scrollIntoView\(/);
assert.match(submissionFallbackSource, /prefers-reduced-motion: reduce/);
assert.match(submissionFallbackSource, /href=\{`mailto:\$\{siteConfig\.email\}`\}/);
assert.match(submissionFallbackSource, /href=\{siteConfig\.phoneHref\}/);
assert.match(submissionFallbackSource, /min-h-11/g);
assert.match(
  plannerConfigSource,
  /primaryGoalOther: "Build a custom web application or operational workflow"/,
);
const alternativeContactField = plannerFormSource.match(
  /<TextField\s+id="contactMethod"[\s\S]*?\/>/,
)?.[0];
assert.ok(alternativeContactField, "Planner alternative contact field source is missing");
assert.match(alternativeContactField, /label="Phone or another way to reach you"/);
assert.match(alternativeContactField, /hint="Optional — leave blank if email works for you\."/);
assert.doesNotMatch(
  alternativeContactField,
  /\srequired(?:\s|\n)/,
  "Planner alternative contact field is still marked required",
);

const plannerValidationResponse = await fetch(new URL("/api/planner", baseUrl), {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    fullName: "Smoke Test",
    workEmail: "smoke@example.com",
    contactMethod: "",
    honeypot: "",
  }),
});
assert.equal(plannerValidationResponse.status, 400);
const plannerValidation = await plannerValidationResponse.json();
assert.equal(plannerValidation.error, "validation");
assert.ok(plannerValidation.fields.businessDescription);
assert.equal(
  plannerValidation.fields.contactMethod,
  undefined,
  "Server still rejects an empty alternative contact field",
);

const [velora, nexoraCase, nexoraDemo] = await Promise.all([
  read("/work/velora-dining"),
  read("/work/nexora-systems"),
  read("/nexora"),
]);
assert.match(velora, /href="\/contact\?interest=hospitality-website"/);
assert.match(velora, /A connected hospitality site usually starts with the commerce path/);
assert.match(velora, /Commerce begins at \$8,500/);
assert.match(velora, /<summary[^>]*>\s*What shapes the scope/);
assert.match(velora, /href="\/services\/ecommerce-websites"[^>]*>Explore commerce &amp; booking/);
assert.match(velora, /href="\/pricing#commerce-package"[^>]*>Review Commerce pricing/);
assert.match(
  velora,
  /href="\/start\?service=booking-websites"[^>]*>Share a prefilled brief/,
);
assert.match(work, /href="\/work\/nexora-systems"/);
assert.match(work, /href="\/nexora"[^>]*>Try demo/);
assert.match(home, /href="\/nexora"[^>]*>Try interactive demo/);
assert.match(nexoraCase, /Built concept demo — fictional/);
assert.match(nexoraCase, /href="\/nexora"[^>]*>Explore the live demo/);
assert.match(nexoraCase, /Cyvexly-built fictional demonstration/);
assert.match(nexoraCase, /href="\/contact\?interest=custom-system"[^>]*>[\s\S]*?Ask about a project/);
assert.match(nexoraCase, /Custom applications are scoped before they are priced/);
assert.match(nexoraCase, /Users, roles, data, integrations, security, and migration requirements/);
assert.match(nexoraCase, /<summary[^>]*>\s*What shapes the scope/);
assert.match(
  nexoraCase,
  /href="\/services\/custom-web-applications"[^>]*>Explore custom applications/,
);
assert.match(nexoraCase, /href="\/pricing#custom-system-package"[^>]*>Review custom-app pricing/);
assert.match(
  nexoraCase,
  /href="\/start\?service=custom-web-applications"[^>]*>Share a prefilled brief/,
);
assert.match(nexoraDemo, /Fictional product demonstration by Cyvexly Studio/);
assert.match(nexoraDemo, /Find the release behind the change/);
assert.match(nexoraDemo, /href="\/contact\?interest=custom-system"/);

for (const detail of serviceDetails) {
  assert.match(detail, /Relevant working example/);
  assert.match(detail, /Built fictional demo/);
  assert.match(detail, /href="\/work\/(?:velora-dining|nexora-systems)"[^>]*>View case study/);
  assert.match(detail, /href="\/(?:velora|nexora)"[^>]*>Try demo/);
  assert.doesNotMatch(detail, /aurora-spaces|vellora-care|Aurora Spaces|Vellora Care/);
}
assert.match(serviceDetails[3], /Commerce &amp; booking websites/);
assert.match(serviceDetails[3], /Sell products or take bookings online/);
assert.match(serviceDetails[3], /catalog, services, availability, pricing, and imagery/);
assert.match(serviceDetails[3], /Booking rules, checkout requirements, or both/);
assert.match(pricing, /A small-to-medium online store or booking-led business\./);

const retiredStatuses = await Promise.all([
  readStatus("/work/aurora-spaces"),
  readStatus("/work/vellora-care"),
]);
assert.deepEqual(retiredStatuses, [404, 404]);
assert.doesNotMatch(sitemap, /aurora-spaces|vellora-care/);
assert.match(sitemap, /work\/velora-dining/);
assert.match(sitemap, /work\/nexora-systems/);
assert.match(sitemap, /services\/custom-web-applications/);

console.log(
  JSON.stringify(
    {
      baseUrl,
      routes: 12 + contextualContacts.length + serviceDetails.length,
      serviceDestinations: serviceDestinations.length,
      buyerServiceRoutes: 5,
      pricingAnchors: 12,
      pricingDecisionFields: 3,
      contactContexts: contextualContacts.length,
      plannerAlternativeContact: "optional-client-and-server",
      featuredPortfolioProjects: 2,
      retiredConceptRoutes: "404-and-absent-from-sitemap",
      status: "passed",
    },
    null,
    2,
  ),
);
