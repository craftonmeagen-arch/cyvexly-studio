import assert from "node:assert/strict";

const baseUrl = (process.env.BASE_URL || "https://cyvexly.com").replace(/\/$/, "");
const expectedCommit = process.env.EXPECTED_COMMIT?.trim();
const keyLocation = `${baseUrl}/indexnow-key.txt`;
const timeoutMs = Number(process.env.DEPLOY_WAIT_TIMEOUT_MS || 18 * 60 * 1000);
const pollMs = Number(process.env.DEPLOY_POLL_INTERVAL_MS || 15 * 1000);

assert.match(baseUrl, /^https:\/\/cyvexly\.com$/, "BASE_URL must be canonical production");
assert.match(expectedCommit || "", /^[0-9a-f]{40}$/i, "EXPECTED_COMMIT must be a full Git SHA");
assert.ok(Number.isFinite(timeoutMs) && timeoutMs > 0, "DEPLOY_WAIT_TIMEOUT_MS must be positive");
assert.ok(Number.isFinite(pollMs) && pollMs > 0, "DEPLOY_POLL_INTERVAL_MS must be positive");

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function waitForProductionCommit() {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${baseUrl}/api/release`, { cache: "no-store" });
      if (response.ok) {
        const release = await response.json();
        if (release.commit === expectedCommit) return;
      }
    } catch {
      // Render may briefly be unavailable while replacing the active instance.
    }

    await delay(pollMs);
  }

  throw new Error(`Production did not report commit ${expectedCommit} before the timeout`);
}

async function readSitemapUrls() {
  const response = await fetch(`${baseUrl}/sitemap.xml`, { cache: "no-store" });
  assert.equal(response.status, 200, `Sitemap returned ${response.status}`);
  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

  assert.ok(urls.length > 0, "Sitemap did not contain any URLs");
  assert.ok(urls.length <= 10_000, "IndexNow accepts at most 10,000 URLs per request");
  for (const url of urls) {
    assert.ok(url === baseUrl || url.startsWith(`${baseUrl}/`), `Unexpected sitemap host: ${url}`);
  }

  return [...new Set(urls)];
}

async function verifyKey() {
  const response = await fetch(keyLocation, { cache: "no-store" });
  assert.equal(response.status, 200, `IndexNow key location returned ${response.status}`);
  const key = (await response.text()).trim();
  assert.match(key, /^[A-Za-z0-9-]{8,128}$/, "Production IndexNow key is invalid");
  return key;
}

await waitForProductionCommit();
const key = await verifyKey();
const urlList = await readSitemapUrls();

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(baseUrl).host,
    key,
    keyLocation,
    urlList,
  }),
});

assert.ok(
  response.status === 200 || response.status === 202,
  `IndexNow submission failed with HTTP ${response.status}`,
);

console.log(`IndexNow accepted ${urlList.length} canonical URLs with HTTP ${response.status}.`);
