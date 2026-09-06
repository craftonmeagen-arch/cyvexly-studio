# Cyvexly App Debt

## Resolved round 61

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R51`** — a
  twenty-seventh consecutive independent confirmation (reviewed commit
  `6f41600`, round 59's HEAD, predating round 60's rate-limiter fix), 0
  active code defects. Moved to `exchange/processed/`.
- **Found and fixed a second real defect in the same rate-limiter code
  round 60 had just fixed, via adversarial review of that fix.**
  `checkRateLimit` (`src/lib/mailer.ts`) stores its sliding window in a
  `Map<string, number[]>` keyed by client IP but never deleted a key —
  once a key's timestamps all age out of the 15-minute window, the
  filtered-to-empty array is written back instead of the key being
  removed, so the key lives in memory forever. Any caller that can vary
  its own key grows the map without bound; the `x-forwarded-for`
  fallback in `getClientIp` (still the only path for non-Cloudflare
  traffic, e.g. the direct Render origin round 60 already named as a
  residual bypass) is exactly such a caller, since the client fully
  controls that header — a pure in-process memory-exhaustion DoS,
  additive to round 60's already-named bypass gap, not a duplicate of it.
- **Fixed:** added `pruneStaleEntries()`, invoked from `checkRateLimit`
  every 5 minutes or immediately once the map exceeds 5,000 tracked
  keys, deleting any key whose timestamps are now all outside the
  window. No change to external rate-limit behavior.
- **Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
  pre-existing, unrelated lint warning in the round-42 evidence script).
  Real `next start` server on port 5173: same-IP 6-request regression
  still 429s on the 6th before and after the change; a 5,200-request
  concurrent burst with unique spoofed `x-forwarded-for` values
  completed with zero fetch errors and no server-log errors (exercising
  the size-triggered immediate prune, since 5,200 exceeds the 5,000-key
  threshold well before the 5-minute timer would fire); the same-IP
  regression re-checked immediately after the burst still correctly
  429'd on the 6th on both `/api/contact` and `/api/planner`. A 14-route
  sweep found zero regressions. Committed and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `netstat`/`LISTENING` before stopping). Removed this
  round's scratch server log, PID file, and burst-test script.

Round 60's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_60_ARCHIVE.md` (moved there
round 61 to keep this file under its 30,720-byte hot-file cap): the
Cloudflare `cf-connecting-ip` IP-spoofing fix this round's finding builds
on.

## Resolved round 59

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R49`** — a
  twenty-fifth consecutive independent confirmation (reviewed commit
  `111582f`, round 57's HEAD, predating round 58's `html lang`/hot-file-cap
  fixes), 0 active code defects. Its hot-file-cap observation on
  `CYVEXLY_CURRENT_STATE.md` was already fixed by round 58 (re-verified:
  6,397 bytes, well under the 8,192-byte cap; a fresh
  `Test-HotFileCaps.ps1` run shows 0 violations). Moved to
  `exchange/processed/`.
- **Fixed the one real finding it raised — Home's meta description over
  budget.** The report's own sitewide description-length survey (the one
  route round 57 hadn't measured) found `/` rendering 166 chars, 6 over
  the ~155-160 char budget round 57 established sitewide. Trimmed
  `src/app/layout.tsx`'s shared `description` ("get a clear proposal" →
  "get a proposal", one filler article dropped) without removing any
  factual claim.
- **Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
  pre-existing, unrelated lint warning in the round-42 evidence script).
  Real `next start` server on port 5173: Home now renders a 158-char
  description, identical across description/og:description/
  twitter:description; a 24-route sweep (20 HTML routes + sitemap/robots/
  manifest + an invalid path) shows zero regressions. Committed
  (`343444f`) and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `Get-NetTCPConnection` before stopping). No temporary
  files were created this round.

## Resolved round 58

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R48`** — a
  twenty-fourth consecutive independent confirmation (reviewed commit
  `176b91d`, round 56's HEAD, predating round 57's meta-description fix),
  0 active code defects. Its "Production Domain & DNS Connection" gate
  note is stale (round 53 verified the domain fully connected). Moved to
  `exchange/processed/`.
- **Fixed the one real finding it raised — a hot-file cap violation.**
  `Test-HotFileCaps.ps1` flagged `CYVEXLY_CURRENT_STATE.md` at 8,728 bytes
  against the reviewed commit (grown to 9,653 by round 58 start), over its
  own 8,192-byte cap. Archived rounds 52-56's detailed outcome paragraphs
  (already duplicated in `CYVEXLY_ACTIVE_CHUNK.md`/
  `CYVEXLY_NEXT_BUILDER_HANDOFF.md`) to
  `docs/archive/chunks/CYVEXLY_CURRENT_STATE_ROUNDS_52_56_ARCHIVE.md` and
  rewrote it as a lean dashboard. Re-ran the cap script clean afterward.
- **Found and fixed a real rotation-order defect in
  `CYVEXLY_NEXT_BUILDER_HANDOFF.md`** while archiving (same class as round
  50's `CYVEXLY_ACTIVE_CHUNK.md` fix): round 54's full closeout had stayed
  live while round 55's was already archived, skipping a round out of
  order. Restored correct latest-three order (archived round 54's full
  text; no content lost).
- **New angle — `html lang="en"` → `en-US`**, named as untried in round
  57's handoff. Owner direction `2026-09-04-14` confirms a United
  States-only launch market and structured data already uses
  `areaServed: "US"` throughout; `en-US` is the more precise BCP 47 tag.
  Fixed in `src/app/layout.tsx` (root layout) and
  `src/app/global-error.tsx` (replaces the root `<html>` when it fires).
- **Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
  pre-existing, unrelated lint warning in the round-42 evidence script).
  Real `next start` server on port 5173: fetched all 14 HTML routes plus
  sitemap/robots/manifest/an invalid path (18 total) — every HTML route
  renders `lang="en-US"`, zero regressions. `Test-HotFileCaps.ps1` re-run
  clean (0 violations across all 57 tracked files). Committed (`9a6ff1e`,
  `3b70fc0`) and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `Get-NetTCPConnection` before stopping). Two scratch
  server logs under the OS temp root (rounds 57 and 58) remain
  Windows-locked after process exit despite no matching process — same
  recurring class as round 48's temp-profile lock; left in place, next
  round should retry `Remove-Item` on them.

## Resolved round 57

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R47`** — a
  twenty-third consecutive independent confirmation (reviewed commit
  `63fc8fe`, round 55's HEAD, predating round 56's Pricing OfferCatalog
  JSON-LD), 0 active code defects. Its "Production Domain & DNS
  Connection" gate note was already stale (round 53 verified the domain
  fully connected). Moved to `exchange/processed/`.
- **New angle — trimmed meta descriptions past the search-snippet
  budget.** Measured every route's rendered `<meta name="description">`
  length (none had been checked before): `/services` (169 chars) and
  `/pricing` (174) exceeded the ~155-160 char practical Google
  search-snippet budget; the three `/work/[slug]` case-study pages
  (189-211 chars) were worse, since `generateMetadata` reused the long
  on-page "challenge" narrative as the description. Tightened the two
  static descriptions without dropping any claim (`src/app/services/
  page.tsx`, `src/app/pricing/page.tsx`), and switched `work/[slug]`
  (`src/app/work/[slug]/page.tsx`) to reuse the already-published,
  already-short `selectedWork` card summary instead of inventing new
  copy or shortening the on-page paragraph.
- **Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
  pre-existing, unrelated lint warning in the round-42 evidence script).
  Real `next start` server on port 5173: fetched all 5 changed routes —
  rendered descriptions now measure 48-154 chars; the on-page "challenge"
  paragraph on `/work/aurora-spaces` is byte-identical to before;
  `og:description` correctly inherits the shorter text. A 19-route
  regression sweep (static + dynamic + sitemap/robots + an invalid path)
  shows zero regressions. Committed (`befddda`) and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `Get-NetTCPConnection` before stopping). One scratch
  server log under the OS temp root (`cyvexly-round57-server.log`)
  remained Windows-locked after process exit despite no matching process
  (same class of issue as round 48's temp-profile lock) — left in place;
  the next round should retry `Remove-Item` on it.

Round 54's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_54_ARCHIVE.md` (moved there
round 57 to keep this file under its 30720-byte hot-file cap): round 54
added per-slug Open Graph images for `services/[slug]` and `work/[slug]`.

Round 56's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_56_ARCHIVE.md` (moved there
round 60 to keep this file under its 30720-byte hot-file cap): round 56
added OfferCatalog JSON-LD to `/pricing`.

## Resolved round 55

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R45`** — a twenty-first
  consecutive independent confirmation (reviewed commit `26bc8b2`, predating
  round 53's remaining commits and round 54's per-slug OG images), 0 active
  code defects. Its listed "Production domain DNS" external gate was
  already stale (round 53 verified the domain fully connected). Moved to
  `exchange/processed/`.
- **New angle — Service JSON-LD for the five `/services/[slug]` detail
  pages.** `src/lib/structured-data.ts` already had Organization, FAQPage,
  and BreadcrumbList JSON-LD; the five service-detail routes — the site's
  core commercial pages — carried only BreadcrumbList. Added
  `buildServiceJsonLd()`, reusing each service's own already-published
  `name`/`summary`/`package.price` (no invented copy). The published price
  copy is a starting figure ("From $X"), so it publishes via
  `AggregateOffer.lowPrice` (schema.org's documented pattern for a
  "starting from" price) rather than `Offer.price`, so the markup doesn't
  claim a fixed rate the copy itself doesn't claim.
- **Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (one
  pre-existing, unrelated lint warning in a round-42 evidence script,
  untouched this round). Real `next start` server on port 5173: curled and
  JSON-parsed all 5 slugs' new `<script type="application/ld+json">`
  output — valid JSON on every slug, correct `serviceType`/`name`/
  `description`/`provider`/`areaServed`, and `lowPrice` exactly matches
  each package's published price (3500/5800/1800/8500/99 for
  business-websites/website-redesigns/landing-pages/ecommerce-websites/
  website-care). A 12-route regression sweep shows zero regressions.
  Committed (`441c6cd`) and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `netstat`/`Get-Process` before stopping). No temporary
  files were created this round.

Round 52's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_52_ARCHIVE.md` (moved there
round 56 to keep this file under its 30720-byte hot-file cap): round 52
added per-route Open Graph images for the 8 static marketing routes and
proved the dynamic-route OG-image gap was pre-existing.

Round 46's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_46_ARCHIVE.md` (moved there
round 52 to keep this file under its 30720-byte hot-file cap): round 46
removed 5 dead scaffold SVG assets and added the Web App Manifest.

## Resolved round 51

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R42`** — an eighteenth
  consecutive independent confirmation (reviewed commit `7f9357b`, round
  49's HEAD, one commit behind round 50's COOP/CORP/security.txt commit), 0
  active code defects. Moved to `exchange/processed/`.
- **New angle — sitewide Open Graph and Twitter Card metadata.** Grep
  confirmed zero `openGraph`/`twitter` fields anywhere in `src/`; named
  verbatim in Owner direction `2026-09-04-14` workstream 2 ("production
  Open Graph and Twitter URLs"). Without an explicit `twitter:card` tag,
  Twitter/X does not infer one from a plain title/description, so shared
  links had no large-image preview at all. Added `src/lib/seo.ts`'s
  `buildPageMetadata()` (canonical + openGraph + twitter, `images` left
  unset so the existing `opengraph-image.tsx` file-convention image keeps
  applying) and wired it into the root layout and all 13 other metadata
  exports, reusing only already-shipped titles/descriptions.
- Verified: `tsc`/`lint`/`build` all pass clean. Real `next start` server on
  port 5173: curl confirmed correct per-route `og:title`/`og:description`/
  `og:url`, sitewide `og:site_name`/`og:type="website"`/`og:locale="en_US"`,
  and `twitter:card="summary_large_image"` on Home/Services/Pricing/FAQ/a
  service-detail route/a case-study route; Home's og:image/twitter:image
  unchanged. Full 25-route sweep shows zero regressions. Committed
  (`03bb077`) and pushed.
- Cleaned up: stopped the owned `next start` server (verified real listener
  PID via `Get-NetTCPConnection -LocalPort 5173` before stopping), removed
  the round's own temporary log file. No browser pane was opened (curl was
  the appropriate proof layer for an HTML-meta-tag claim).

## Resolved round 50

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R41`** — a seventeenth
  consecutive independent confirmation (reviewed commit `ae0644b`, round
  48's HEAD, one commit behind round 49's error-boundary commit), 0 active
  code defects. Moved to `exchange/processed/`.
- **Fixed a real hot-memory rotation defect (not a product feature).**
  `CYVEXLY_ACTIVE_CHUNK.md`'s round-48 rotation had left round 47's report
  live and duplicated round 48's report in its place instead of archiving
  round 47. Archived round 47 to
  `docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_47_REPORT.md`, removed
  the duplicate, restored latest-three (48, 49, 50 live).
- **New angle — `Cross-Origin-Opener-Policy`/`Cross-Origin-Resource-Policy:
  same-origin`** added to `next.config.ts`. Confirmed via grep that the app
  has zero `window.open`/`postMessage`/`window.opener` usage, so same-origin
  isolation costs nothing.
- **New angle — `/.well-known/security.txt`** (RFC 9116), contact
  `design@cyvexly.com` (Owner-confirmed), `Expires: 2027-09-05`. No invented
  facts.
- Verified: `tsc`/`lint`/`build` all pass clean. Real `next start` server on
  port 5173: `curl -D -` confirmed both new headers on `/` alongside every
  pre-existing header unchanged; `security.txt` returns `200 text/plain`
  with exact content; `/`, `/faq`, `/manifest.webmanifest`, `/apple-icon`,
  `/icons/192`, `/sitemap.xml` all still `200`, zero regressions. Committed
  (`b5b7109`) and pushed.
- Cleaned up: stopped the owned `next start` server (verified real listener
  PID via `Get-NetTCPConnection -LocalPort 5173` before stopping). No
  browser pane was opened this round (curl against the local server was the
  appropriate proof layer for an HTTP-header/static-text-file claim).

Round 49's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_49_ARCHIVE.md` (moved there
round 55 to keep this file under its 30720-byte hot-file cap). Round 49
added route-segment/root-layout error boundaries and viewport theme-color/
color-scheme metadata.

## Resolved round 48

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R39`** — a fifteenth
  consecutive independent confirmation (reviewed commit `727d809`, round
  46's HEAD, one commit behind round 47's Apple touch icon commit), 0
  active code defects. Moved to `exchange/processed/`.
- **New angle — added raster 192×512 PNG manifest icons**
  (`src/app/icons/[size]/route.tsx`), closing the item round 46/47 named as
  open: the Web App Manifest was SVG-only, and Android's "Add to Home
  Screen" install flow has historically preferred PNG at these standard
  sizes. Same `next/og` `ImageResponse` technique as `apple-icon.tsx`,
  statically generated at build time via `generateStaticParams` restricted
  to exactly these two sizes (any other size 404s at runtime). No invented
  facts — reuses the existing C/Y mark and brand-blue token. Verified:
  production build emits correctly-sized real PNGs at both sizes (opened
  locally, clean/centered/unclipped); a real `next start` server serves
  both `200 image/png` with the exact built byte lengths; an unregistered
  size correctly 404s; the live manifest JSON lists all three icons;
  `apple-icon`/`icon.svg` unchanged; a real in-app-Browser screenshot of
  Home shows zero visual regression, zero console errors.
- **New angle — fixed a real print-legibility defect.** No route had any
  `@media print` CSS; this site's light-text-on-dark-background sections
  print invisible under browsers' default no-background-printing behavior.
  Added `print-color-adjust: exact` (`globals.css`, MDN's documented fix).
  Verified via CDP `Page.printToPDF`: `printBackground:false`/`:true`
  produced identically-sized PDFs (~41.7MB each), proving backgrounds
  embed regardless of the toggle; no screen-mode regression.
- `tsc`/`lint`/`build` all pass clean. Committed (`8d959f0`, `90ea41e`) and
  pushed.
- Cleaned up: stopped the owned `next start` server and headless Chrome
  process tree (verified real listener PID via the port's actual listener,
  not `Start-Process`'s returned PID — see the new caveat in
  `CYVEXLY_TOOLS_AND_CAPABILITIES.md`; Chrome verified by exact
  `chrome-profile-round48` `--user-data-dir` match), closed the owned
  Browser-pane tab. The temporary Chrome profile directory under the OS
  temp root could not be removed this round (Windows reported the path
  locked after process exit despite no matching process remaining) — left
  in place as a disposable OS-temp artifact; the next round should retry
  `Remove-Item` on `%TEMP%\chrome-profile-round48` and report if it
  persists.

Round 47's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_47_ARCHIVE.md` (moved there
round 52 to keep this file under its 30720-byte hot-file cap). Round 47
implemented the Apple touch icon.

Rounds 44-45 full detail are archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUNDS_44_45_ARCHIVE.md` (moved there
round 49 to keep this file under its 30720-byte hot-file cap): round 45
added BreadcrumbList JSON-LD for service-detail/case-study routes; round 44
added FAQPage JSON-LD for `/faq`.

Round 43 detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_43_ARCHIVE.md` (moved there
round 48 to keep this file under its 30720-byte hot-file cap). Round 43
found the site had no structured data at all and added sitewide
Organization JSON-LD.

## Open

1. **RESOLVED round 53 (verified live, not a code change).** This item's
   text below claimed the DNS/Render connection was still open and required
   Owner account access. Round 53 (interactive session, Owner direction
   `2026-09-05-15`) checked the actual production domain directly — no
   account access needed to observe live DNS/HTTP/TLS behavior — and found
   it fully connected: `http://cyvexly.com` and `http://www.cyvexly.com`
   both 301 to `https://cyvexly.com/`; `https://www.cyvexly.com` 301s to
   the apex; a valid Google Trust Services certificate is active (the
   domain sits behind Cloudflare in front of the Render origin, confirmed
   via `Server: cloudflare` plus `x-render-origin-server: Render` response
   headers); `robots.txt`, `sitemap.xml`, and per-route canonical/og tags
   all resolve correctly on the live production domain; round 52's per-
   route Open Graph images are already deployed and live. No reachable
   Builder work remains on domain/HTTPS/canonicalization. **Original text,
   preserved for history:** "Production domain is confirmed; the account-
   bound DNS/Render connection remains open. Round 29 closed the reachable
   code-side metadata gap. The Owner confirmed `cyvexly.com`. The domain
   still needs Render custom-domain setup, DNS replacement of the
   Namecheap parking destination, HTTPS verification, root/`www` canonical
   behavior, and public route proof — these require account access this
   Builder does not have."
   **Round 29 update:** `metadataBase` is now set to `https://cyvexly.com` in
   `src/app/layout.tsx`, and a real `src/app/sitemap.ts` (App Router
   `MetadataRoute.Sitemap` special file) now enumerates all 17 built public
   routes (static pages plus every service-detail and case-study slug) with
   the production origin. Verified via a real production `pnpm run build`:
   the generated `.next/server/app/sitemap.xml.body` lists all 17 absolute
   `https://cyvexly.com/...` URLs, and `.next/server/app/index.html`'s baked
   `og:image`/`twitter:image` meta tags now resolve to
   `https://cyvexly.com/opengraph-image?...` instead of the previous
   `http://localhost:3000` fallback — the long-standing domain-blocked
   `metadataBase` warning is gone from the build output. **Round 33:** added
   `alternates: { canonical: ... }` to the root layout and all 13 static/
   dynamic route metadata exports (every `export const metadata`/
   `generateMetadata` in `src/app`), closing the last code-only follow-up
   named above. Staged indexing behavior (`NEXT_PUBLIC_SITE_INDEXABLE`)
   is unchanged and still defaults to no-index; robots.txt already gates on
   the same env var. This closes the code-only portion of item 1 completely;
   the DNS/Render account connection is still the real remaining blocker.
2. **RESOLVED round 53 (code-complete; delivery untested pending Owner
   account).** Contact and Planner now both submit server-side (Next.js
   Route Handlers, `src/app/api/contact/route.ts` and
   `src/app/api/planner/route.ts`) through Resend, per Owner direction
   `2026-09-05-15`. Internal notification goes to `design@cyvexly.com`
   with Reply-To set to the visitor's email; a best-effort visitor
   confirmation is sent with Reply-To `design@cyvexly.com`. Server-side
   validation mirrors every client-side required-field rule; the honeypot
   is re-checked server-side; a per-IP in-memory rate limiter (5/15min) is
   new defense-in-depth; all text is sanitized (control-character/length
   caps, single-line header-injection defense) before use in email
   subjects/headers/bodies. `src/lib/mailer.ts` centralizes this. No secret
   is readable from client code — `RESEND_API_KEY` is read only inside the
   two Node-runtime route handlers.
   **What remains — a real Owner account, not a Builder-reachable gap:**
   1. Create a Resend account (resend.com).
   2. Add `cyvexly.com` (or a subdomain) as a sending domain in Resend and
      add the DNS records Resend generates (SPF/DKIM, account-specific —
      only available after adding the domain) in Namecheap; verify in
      Resend.
   3. Create an API key in Resend and add it to Render's environment
      variables as `RESEND_API_KEY` (a secret — never place it in source,
      docs, or chat). Optionally set `RESEND_FROM_EMAIL` to override the
      default `Cyvexly Studio <notifications@cyvexly.com>`.
   4. Redeploy (Render redeploys automatically on push; setting an env var
      alone also triggers a redeploy).
   **Verified without a real account:** `tsc`/`lint`/`build` clean; a real
   running server with no `RESEND_API_KEY` returns 503 `not-configured`
   (confirmed live on production, not just locally); every required-field
   validation and the honeypot rejection verified via real HTTP requests on
   both routes; the rate limiter verified by exhausting it live; a
   deliberately invalid API key produced a real Resend API auth failure,
   caught as a graceful 502 rather than a crash; a real browser-driven
   (not synthetic) submission on production shows the intended error UI
   and preserves the visitor's entered data. Actual message delivery is
   the one thing that cannot be verified without step 1-3 above.

Rounds 40-42 detail archived to
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUNDS_40_42_ARCHIVE.md` in round 58
to keep this file under its 30720-byte hot-file cap: Contact-form honeypot
fix plus first live Planner-honeypot verification (round 42), WCAG 1.4.10
reflow/zoom sweep with no defect found (round 41), and the Planner
step-advance scroll/focus/live-region fix (round 40).

Rounds 36-39 detail archived to docs/archive/chunks/CYVEXLY_APP_DEBT_ROUNDS_36_39_ARCHIVE.md in round 43 to keep this file under its 30720-byte hot-file cap: skip-to-main-content fix (round 39), full-site console/network diagnostics sweep (round 38), performance spot-check (round 37), and live production-deployment parity confirmation (round 36).

## Resolved round 35

Archived to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_35_ARCHIVE.md` in
round 42 to keep this file under its 30720-byte hot-file cap: dispositioned
`IFA-2026-09-05-R26` (stale `CYV-IFA-012` re-verification), a full
release-QA sweep (contrast, worldwide/payment-claim grep, sitemap/robots,
canonical tags, link crawl, security headers, live `/about` render), an
in-app-Browser-pane hidden-state tooling note, and corrections to two stale
`CYVEXLY_CHUNK_DEBT.md` entries.

## Resolved rounds 32-34

Archived to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUNDS_32_34_ARCHIVE.md` in
round 40 to keep this file under its 30720-byte hot-file cap: `CYV-IFA-012`
contact-link collision fix (round 34), per-route canonical tags (round 33),
and the corrected static Content-Security-Policy header (round 32, after
catching that the textbook nonce recipe would have broken hydration on this
mostly-static route architecture).

Round 31 detail archived to
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_31_ARCHIVE.md` in round 38
(security headers added; first full 27-route release-QA sweep).

## Resolved round 30

Archived to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_30_ARCHIVE.md` in
round 36 to keep this file under its 30720-byte hot-file cap: the built and
verified About page (`src/app/about/page.tsx`), Privacy Policy and Website
Terms drafts (`src/app/privacy`, `src/app/terms` — both still carry a
"Draft under review" notice pending the exact LLC name and Owner review),
and a fixed `sitemap.ts` omission (About/Privacy/Terms were missing from
`staticRoutes`).

- **Environment fix, documented for the next agent — still an active
  per-session workaround, kept inline rather than archived.** This Windows host's
  Node.js 24.19.0 install
  (`C:\Users\Tcraf\AppData\Local\Programs\NodeJS\node-v24.19.0-win-x64`) and
  the global `pnpm` shim (`%APPDATA%\npm`) are registered in the **User**
  PATH environment variable, but the shell processes this tool session
  spawns do not inherit that PATH (`node`/`pnpm` were both "not recognized"
  until fixed). Workaround used this round: prepend both directories to
  `$env:Path` at the start of each PowerShell tool call that needs
  node/pnpm/next (per-call, since shell state does not persist between
  calls in this harness). This is a session/harness PATH inheritance gap,
  not a missing install — do not reinstall Node or edit the real PATH
  variable to "fix" it.

## Resolved round 29

Archived to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_29_ARCHIVE.md` in
round 35 to keep this file under its 30720-byte hot-file cap: public
contact-identity replacement (`design@cyvexly.com`/`(317) 572-5780`
sitewide), the United States-only truth audit (removed stale
worldwide/international/payment-method claims), and the code-only
`metadataBase`/`sitemap.xml` fix (see item 1 above).
