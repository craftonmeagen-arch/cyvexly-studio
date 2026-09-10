# Round 119 — Cyvexly domain-trust assessment

**Run time:** 2026-09-08 19:44 EDT

**Reviewed public source:** `d7a545c23e22dbe5116c7e7c8f391ab5ef064603`

**Builder product tree:** exact match to `d7a545c` for `src/`, `public/`,
`package.json`, `pnpm-lock.yaml`, and `next.config.ts`

**Disposition:** **LIKELY GUARDIO-SPECIFIC FALSE POSITIVE / NEW-DOMAIN
REPUTATION CLASSIFICATION; NO CURRENT COMPROMISE EVIDENCE. GUARDIO REVIEW
REMAINS REQUIRED.**

## Observed warning

The retained buyer-review capture
`C:/app projects/website-independent-review/buyer-review-2026-09-08/home-work.png`
shows Guardio blocking `cyvexly.com` as malicious and describing a credential/
money/identity-theft risk. This proves one Guardio classification in that
extension/browser. It does not establish malware or phishing behavior.

Guardio documents that its detections use dynamic fingerprinting, heuristics,
machine learning, and other signals, and directs mistaken detections to its
own review process:

- https://help.guard.io/hc/en-us/articles/360059843212-Why-did-Guardio-block-a-familiar-website
- https://help.guard.io/hc/en-us/articles/4406771527316-Harmful-Site-Blocks

No Guardio account/session capable of opening the detection detail or filing a
review was available to this Builder. No block was bypassed and no external
message or form was submitted.

## Independent reputation evidence

- Google Transparency Report's Safe Browsing lookup for `cyvexly.com`
  returned **No available data**. This is neither a clean nor dangerous verdict.
- VirusTotal's existing domain report (last analysis September 5, 2026) showed
  **0 / 89** security vendors flagging the domain. Google Safe Browsing,
  Fortinet, Netcraft, OpenPhish, PhishTank, Sucuri SiteCheck, URLhaus, Webroot,
  and Yandex were among the clean entries. VirusTotal also showed the domain's
  August 18, 2026 creation date and a heuristic `dga` tag.
- A fresh Sucuri SiteCheck run on September 8 reported **No Malware Found** and
  **Site is not Blacklisted**, with nine blacklist checks clean. Its only
  hardening suggestions were the already-known absence of an SPF record before
  transactional-email activation and CSP's `unsafe-inline` allowance; neither
  is evidence of compromise.

Direct result pages:

- https://transparencyreport.google.com/safe-browsing/search?url=cyvexly.com
- https://www.virustotal.com/gui/domain/cyvexly.com
- https://sitecheck.sucuri.net/results/cyvexly.com

## Live transport and runtime evidence

- `https://cyvexly.com/` returned 200 through Cloudflare.
- HTTP apex and `www` redirect to HTTPS; HTTPS `www` redirects to the canonical
  apex.
- The live certificate is `CN=cyvexly.com`, issued by Google Trust Services
  `WE1`, valid 2026-09-06 through 2026-12-05. The negotiated connection was TLS
  1.3 with `TLS_AES_256_GCM_SHA384`.
- HSTS is `max-age=63072000; includeSubDomains; preload`.
- CSP limits default/script/style/image/font/media/connect/form/base sources to
  the same origin or explicit safe data/blob exceptions, blocks objects, blocks
  framing, and upgrades insecure requests. `X-Content-Type-Options: nosniff`,
  `X-Frame-Options: DENY`, strict referrer policy, and a restrictive permissions
  policy are present.
- `/.well-known/security.txt`, `/robots.txt`, and `/sitemap.xml` return 200.
  The current Owner-controlled no-index gate intentionally leaves robots set to
  `Disallow: /`; changing indexability was not authorized by this round.
- The live Home document loaded 12 scripts, all from `cyvexly.com`; no external
  scripts, form, iframe, or `javascript:` link was present. Visible Codex
  In-app Browser inspection showed the intended homepage, and its browser log
  contained zero warning/error entries.
- Contact renders one client-managed form with no external script; Planner is
  hydration-gated and posts only to same-origin `/api/planner`. Source search
  found only same-origin Contact/Planner fetches plus dormant Owner-controlled
  GA4 code; the live Home loaded no Google Analytics script.

## Source and dependency evidence

- `pnpm audit --prod`: **No known vulnerabilities found**.
- TypeScript no-emit: pass.
- ESLint: zero errors; one unchanged historical unused-variable warning in the
  round-42 evidence script.
- `pnpm exec next build --webpack`: pass, 53 static/dynamic routes generated.
- Production `scripts/buyer-journey-smoke.mjs`: pass across 14 routes.
- Source search found no `eval`, `new Function`, `document.write`, character/
  base64 decoding, `javascript:` URL, credential API, cookie access, WebAssembly,
  or miner marker under `src/` or `public/`.
- Live behavior and tracked product source both match accepted `d7a545c`; no
  unexplained product diff was present.

## Decision and remaining action

The warning should remain disclosed as an unresolved buyer-readiness issue,
but current evidence does not support changing Cyvexly code, claiming malware,
or weakening the existing form/service behavior. The strongest explanation is
a Guardio-specific reputation/heuristic false positive involving a domain only
21 days old at the time of review. Domain age is a plausible contributor, not
a proven cause; Guardio's private detection detail was not available.

The Owner/account holder should use Guardio's block page **Learn More / See
what happened → Report a Detection Problem**, or Guardio's official support
channel, and request reclassification with this evidence. That third-party
submission is the closure condition. After Guardio responds, recheck the site
in a Guardio-enabled browser without allowlisting it. Do not enable indexing,
change DNS, add security theater, or claim the warning cleared before that
provider-specific check passes.
