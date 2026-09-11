import assert from "node:assert/strict";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:5173";
const expectedIndexable = process.env.EXPECT_INDEXABLE === "true";
const expectedVerification = process.env.EXPECT_GOOGLE_SITE_VERIFICATION?.trim();

async function read(path) {
  const response = await fetch(new URL(path, baseUrl));
  assert.equal(response.status, 200, `${path} returned ${response.status}`);
  return response.text();
}

const [home, robots, sitemap] = await Promise.all([
  read("/"),
  read("/robots.txt"),
  read("/sitemap.xml"),
]);

assert.match(home, /<link rel="canonical" href="https:\/\/cyvexly\.com"\/>/);
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
