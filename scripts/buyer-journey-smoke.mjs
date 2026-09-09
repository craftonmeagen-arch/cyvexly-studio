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
  "custom-project": "ask whether Cyvexly is a fit",
  "signal-package": "Signal package",
  "orbit-package": "Orbit package",
  "nexus-package": "Nexus package",
  "commerce-package": "Commerce package",
  "custom-system": "custom web application or unusual workflow",
  "hospitality-website": "restaurant or hospitality business",
  "business-websites": "new business website",
  "website-redesigns": "improving or redesigning an existing website",
  "landing-pages": "focused landing page",
  "ecommerce-websites": "selling products or taking bookings online",
  "website-care": "ongoing website care and updates",
};

const contextEntries = Object.entries(inquiryContexts);
const [home, services, pricing, , plainContact, unknownContact, ...contextualContacts] =
  await Promise.all([
    read("/"),
    read("/services"),
    read("/pricing"),
    read("/start"),
    read("/contact"),
    read("/contact?interest=not-a-real-context"),
    ...contextEntries.map(([interest]) => read(`/contact?interest=${interest}`)),
  ]);
const [work, processHtml, about, faq, sitemap] = await Promise.all([
  read("/work"),
  read("/process"),
  read("/about"),
  read("/faq"),
  read("/sitemap.xml"),
]);
const serviceSlugs = [
  "business-websites",
  "website-redesigns",
  "landing-pages",
  "ecommerce-websites",
  "website-care",
];
const serviceDetails = await Promise.all(
  serviceSlugs.map((slug) => read(`/services/${slug}`)),
);

function getHeader(html) {
  return html.match(/<header[\s\S]*?<\/header>/)?.[0] ?? "";
}

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
assert.doesNotMatch(services, /Service pathways/);
assert.doesNotMatch(services, /Popular website types/);
assert.match(services, /See the strongest working example/);
assert.match(services, /href="\/work\/velora-dining"/);

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

assert.match(home, /href="\/contact\?interest=custom-project"[^>]*>Ask about a project/);
assert.match(home, /href="\/work"[^>]*>View our work/);
assert.match(home, /Try interactive demo/);
assert.match(home, /Two working demos\. Two different problems\./);
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
assert.match(pricing, /Content editing/);
assert.match(pricing, /Forms \/ integrations/);
assert.match(pricing, /Illustrative build fee: \$4,500–\$5,750/);
assert.match(pricing, /A small content request is one update/);
assert.match(pricing, /Priority requests receive a response within one business day/);

const readMessageValue = (html) =>
  html.match(/<textarea[^>]*id="message"[^>]*>([\s\S]*?)<\/textarea>/)?.[1] ?? null;

assert.equal(readMessageValue(plainContact), "");
assert.equal(readMessageValue(unknownContact), "");

for (const [[interest, expectedCopy], html] of contextEntries.map((entry, index) => [
  entry,
  contextualContacts[index],
])) {
  assert.match(
    html,
    /<option value="Project inquiry" selected="">Project inquiry<\/option>/,
    `${interest} did not select the project-inquiry topic`,
  );
  assert.match(
    readMessageValue(html) ?? "",
    new RegExp(expectedCopy),
    `${interest} did not preserve its inquiry context`,
  );
}

assert.match(home, /href="\/contact\?interest=signal-package"/);
assert.match(home, /href="\/contact\?interest=orbit-package"/);
assert.match(home, /href="\/contact\?interest=nexus-package"/);
assert.match(pricing, /href="\/contact\?interest=commerce-package"/);
assert.match(pricing, /href="\/contact\?interest=custom-system"/);

// PlannerForm waits for its device-local draft check before rendering fields,
// so the first server response intentionally contains only its loading state.
// Keep a source-contract assertion here; the visible-browser pass covers the
// hydrated label, hint, and required-state in the integrated product.
const plannerFormSource = await readFile(
  new URL("../src/components/planner/planner-form.tsx", import.meta.url),
  "utf8",
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
assert.match(work, /href="\/work\/nexora-systems"/);
assert.match(work, /href="\/nexora"[^>]*>Try demo/);
assert.match(home, /href="\/nexora"[^>]*>Try interactive demo/);
assert.match(nexoraCase, /Built concept demo — fictional/);
assert.match(nexoraCase, /href="\/nexora"[^>]*>Explore the live demo/);
assert.match(nexoraCase, /Cyvexly-built fictional demonstration/);
assert.match(nexoraCase, /href="\/contact\?interest=custom-system"[^>]*>[\s\S]*?Ask about a project/);
assert.match(nexoraCase, /href="\/start"[^>]*>[\s\S]*?Share a detailed brief/);
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

const retiredStatuses = await Promise.all([
  readStatus("/work/aurora-spaces"),
  readStatus("/work/vellora-care"),
]);
assert.deepEqual(retiredStatuses, [404, 404]);
assert.doesNotMatch(sitemap, /aurora-spaces|vellora-care/);
assert.match(sitemap, /work\/velora-dining/);
assert.match(sitemap, /work\/nexora-systems/);

console.log(
  JSON.stringify(
    {
      baseUrl,
      routes: 12 + contextualContacts.length + serviceDetails.length,
      serviceDestinations: serviceDestinations.length,
      buyerServiceRoutes: 5,
      pricingAnchors: 9,
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
