import assert from "node:assert/strict";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:5173";
const expectedIndexable = process.env.EXPECT_INDEXABLE === "true";
const expectedVerification = process.env.EXPECT_GOOGLE_SITE_VERIFICATION?.trim();

const commercialPages = [
  {
    path: "/",
    title: "Custom Web Design & Development | Cyvexly Studio",
    description:
      "Cyvexly Studio designs and builds custom websites and web applications for U.S. businesses, with clear pricing, collaborative planning, and launch support.",
  },
  {
    path: "/services",
    title: "Web Design & Development Services | Cyvexly Studio",
    description:
      "Explore custom website design, redesign, ecommerce, booking, web application, landing page, and website care services for U.S. businesses.",
  },
  {
    path: "/services/business-websites",
    title: "Custom Small Business Website Design | Cyvexly Studio",
    description:
      "Custom website design for small businesses and professional teams, including strategy, responsive development, inquiry forms, launch support, and owner handoff.",
  },
  {
    path: "/services/website-redesigns",
    title: "Small Business Website Redesign Services | Cyvexly Studio",
    description:
      "Strategic website redesign services for businesses that need clearer content, stronger mobile usability, modern visuals, careful migration, and launch support.",
  },
  {
    path: "/services/landing-pages",
    title: "Custom Landing Page Design Services | Cyvexly Studio",
    description:
      "Custom landing page design and development for campaigns, launches, events, and focused services, built around one audience and one clear action.",
  },
  {
    path: "/services/ecommerce-websites",
    title: "Ecommerce & Booking Website Design | Cyvexly Studio",
    description:
      "Custom ecommerce and booking website design for businesses that need clear offers, responsive customer journeys, and carefully planned integrations.",
  },
  {
    path: "/services/custom-web-applications",
    title: "Custom Web Application Development | Cyvexly Studio",
    description:
      "Discovery-led custom web application design and development for dashboards, memberships, operational tools, and connected business workflows.",
  },
  {
    path: "/services/website-care",
    title: "Small Business Website Maintenance | Cyvexly Studio",
    description:
      "Ongoing website maintenance and support for small businesses, including content updates, troubleshooting, monitoring, and planned improvements.",
  },
  {
    path: "/pricing",
    title: "Custom Website Design Pricing | Cyvexly Studio",
    description:
      "See starting prices for custom websites, redesigns, landing pages, ecommerce and booking sites, web applications, add-ons, and monthly website care.",
  },
];

async function read(path) {
  const response = await fetch(new URL(path, baseUrl));
  assert.equal(response.status, 200, `${path} returned ${response.status}`);
  return response.text();
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#x27;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

const [commercialHtml, robots, sitemap] = await Promise.all([
  Promise.all(commercialPages.map(({ path }) => read(path))),
  read("/robots.txt"),
  read("/sitemap.xml"),
]);
const home = commercialHtml[0];

for (const [index, page] of commercialPages.entries()) {
  const html = commercialHtml[index];
  const canonical =
    page.path === "/" ? "https://cyvexly.com" : `https://cyvexly.com${page.path}`;

  assert.ok(
    html.includes(`<title>${escapeHtml(page.title)}</title>`),
    `${page.path} is missing its search-focused title`,
  );
  assert.ok(
    html.includes(
      `<meta name="description" content="${escapeHtml(page.description)}"/>`,
    ),
    `${page.path} is missing its page-specific description`,
  );
  assert.ok(
    html.includes(`<link rel="canonical" href="${canonical}"/>`),
    `${page.path} is missing its canonical URL`,
  );
}

assert.equal(
  new Set(commercialPages.map(({ title }) => title)).size,
  commercialPages.length,
  "Commercial page titles must stay unique",
);
assert.equal(
  new Set(commercialPages.map(({ description }) => description)).size,
  commercialPages.length,
  "Commercial page descriptions must stay unique",
);

assert.match(home, /<link rel="canonical" href="https:\/\/cyvexly\.com"\/>/);
assert.match(home, /"@type":"WebSite"/);
assert.match(home, /"name":"Cyvexly Studio"/);
assert.match(home, /"alternateName":"Cyvexly"/);
assert.match(home, /"url":"https:\/\/cyvexly\.com\/"/);
assert.match(sitemap, /<loc>https:\/\/cyvexly\.com<\/loc>/);
assert.match(sitemap, /<loc>https:\/\/cyvexly\.com\/start<\/loc>/);
assert.match(robots, /Sitemap: https:\/\/cyvexly\.com\/sitemap\.xml/);

if (expectedIndexable) {
  assert.match(home, /<meta name="robots" content="index, follow"\/>/);
  assert.match(robots, /Allow: \//);
  assert.doesNotMatch(robots, /Disallow: \//);
} else {
  assert.match(home, /<meta name="robots" content="noindex, nofollow"\/>/);
  assert.match(robots, /Disallow: \//);
}

if (expectedVerification) {
  const escaped = expectedVerification.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  assert.match(
    home,
    new RegExp(`<meta name="google-site-verification" content="${escaped}"\\/>`),
  );
} else {
  assert.doesNotMatch(home, /google-site-verification/);
}

console.log(
  JSON.stringify(
    {
      baseUrl,
      indexable: expectedIndexable,
      verification: expectedVerification ? "synthetic-present" : "absent",
      canonical: "https://cyvexly.com",
      robots: expectedIndexable ? "allow" : "disallow",
      status: "passed",
    },
    null,
    2,
  ),
);
