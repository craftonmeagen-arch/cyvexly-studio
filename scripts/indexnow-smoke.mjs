import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const releaseRoute = await readFile("src/app/api/release/route.ts", "utf8");
const keyRoute = await readFile("src/app/indexnow-key.txt/route.ts", "utf8");
const submitter = await readFile("scripts/indexnow-submit.mjs", "utf8");
const workflow = await readFile(".github/workflows/indexnow.yml", "utf8");

assert.match(releaseRoute, /RENDER_GIT_COMMIT/);
assert.match(releaseRoute, /X-Robots-Tag.*noindex, nofollow/s);
assert.match(keyRoute, /process\.env\.INDEXNOW_KEY/);
assert.match(keyRoute, /status: 404/);
assert.match(keyRoute, /X-Robots-Tag.*noindex, nofollow/s);
assert.doesNotMatch(keyRoute, /[A-Fa-f0-9]{32,}/, "Do not commit an IndexNow key in source");
assert.match(submitter, /api\.indexnow\.org\/indexnow/);
assert.match(submitter, /\/api\/release/);
assert.match(submitter, /\/indexnow-key\.txt/);
assert.match(submitter, /sitemap\.xml/);
assert.match(submitter, /response\.status === 200 \|\| response\.status === 202/);
assert.doesNotMatch(workflow, /INDEXNOW_KEY:/, "The workflow should read the public key location");
assert.match(workflow, /EXPECTED_COMMIT: \$\{\{ github\.sha \}\}/);
assert.match(workflow, /node scripts\/indexnow-submit\.mjs/);

console.log("IndexNow configuration smoke passed.");
