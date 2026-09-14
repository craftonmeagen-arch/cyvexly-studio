import assert from 'node:assert/strict';
const base = process.env.BASE_URL || 'http://127.0.0.1:5173';
const route = '/indiana-web-design';
const res = await fetch(base + route);
assert.equal(res.status, 200);
const html = await res.text();
assert.match(html, /rel="canonical" href="https:\/\/cyvexly.com\/indiana-web-design"/);
assert.equal((html.match(/<h1\b/g) || []).length, 1);
for (const city of ['Indianapolis', 'Bloomington', 'Evansville', 'Jasper']) assert.ok(html.includes(city));
assert.ok(html.includes('United States'));
assert.ok(html.includes('not separate offices'));
assert.ok(!html.includes('streetAddress'));
const json = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(m => JSON.parse(m[1]));
const service = json.find(item => item['@type'] === 'Service');
assert.equal(service.areaServed.length, 4);
assert.equal(service.url, 'https://cyvexly.com' + route);
const paths = ['/services/business-websites', '/services/website-redesigns', '/services/ecommerce-websites', '/services/custom-web-applications', '/work/velora-dining', '/work/nexora-systems', '/pricing', '/start', '/contact?interest=custom-project'];
for (const path of paths) {
  assert.ok(html.includes('href="' + path + '"'), path);
  assert.equal((await fetch(base + path)).status, 200, path);
}
for (const path of ['/about', '/services', '/indianapolis-web-design']) {
  assert.ok((await (await fetch(base + path)).text()).includes('href="' + route + '"'), path);
}
assert.ok((await (await fetch(base + '/sitemap.xml')).text()).includes('https://cyvexly.com' + route));
console.log('PASS Indiana service scope, canonical, schema, sitemap, links and inquiry routes');
