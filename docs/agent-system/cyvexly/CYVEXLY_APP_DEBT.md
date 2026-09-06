# Cyvexly App Debt

## Resolved round 68

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R57`** — a
  thirty-third consecutive independent confirmation (reviewed commit
  `33e3f4c`, round 66's HEAD, predating round 67's secondary-goals-label
  fix), 0 active code defects. Moved to `exchange/processed/`.
- **Moved to a fresh surface per round 67's recommendation** (Contact
  client JS, `site-config.ts`, JSON-LD generation) — reviewed all
  three, no defects found. Contact's client JS matches the server
  route field-for-field; `pricingPreview`/`pricingPackages` stay in
  sync; US-only/payment-deferral copy is consistent; `structured-
  data.ts`'s JSON-LD builders reuse only real published copy.
- **Found and fixed a real, previously-unflagged gap on an adjacent
  surface:** `src/app/robots.ts` never declared a `Sitemap:` directive,
  even though `src/app/sitemap.ts` already builds a real 20-route
  sitemap — a standard, zero-cost crawler-discovery convention serving
  Owner direction `2026-09-04-14`/vision §17's sitemap/robots/
  indexing-readiness workstream.
- **Fixed:** `robots.ts` now returns `sitemap: \`${SITE_URL}/sitemap.xml\``
  (reusing `layout.tsx`'s existing `SITE_URL` constant), in both index
  and no-index modes.
- **Verified:** `tsc`/`lint`/`build` clean. Real `next start` on port
  5173: `curl /robots.txt` shows the new `Sitemap:` line alongside the
  existing `Disallow: /`; `/sitemap.xml` unchanged; a 12-route sitewide
  sweep all 200. Committed (`ce28c0e`) and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `netstat`/`taskkill` first); removed the scratch
  server log.

## Resolved round 67

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R56`** — a
  thirty-second consecutive independent confirmation (reviewed commit
  `fda8b48`, round 65's HEAD, predating round 66's spectrum-field fix),
  0 active code defects at the reviewed commit. Moved to
  `exchange/processed/`.
- **Continued round 66's field-level adversarial diff of the Planner
  pipeline, checking value fidelity instead of field presence this
  time.** Found and fixed a second real, previously-unflagged defect on
  the same route: the "Desired secondary goals" checkbox group stores
  selected `primaryGoals` option ids joined by `"|"` (e.g.
  `sell|credibility`), but the email row joined the raw ids directly
  instead of mapping each through `labelFor()` — every other
  option-based field (primary goal, website type, features) already did
  this. The internal notification showed cryptic fragments like "sell,
  credibility" instead of "Sell products, Explain services and build
  credibility," contrary to Owner direction `2026-09-04-14`'s "clearly
  see... All project-planner answers" requirement.
- **Fixed:** `src/app/api/planner/route.ts` now computes
  `secondaryGoalsLabel`, mapping each pipe-delimited id through the
  existing `labelFor(primaryGoals, id)` helper (unmatched ids fall back
  to the raw id, matching `labelFor`'s existing behavior elsewhere in
  the file) before joining with `", "`.
- **Verified:** `tsc`/`lint`/`build` clean. Real `next start` on port
  5173 with a temporary debug log (removed before commit): a mixed
  payload (`sell|credibility|unknown-id-xyz|book`) produced exactly
  `Sell products`, `Explain services and build credibility`, the
  unknown id passed through unchanged, and `Book appointments or
  reservations` — no crash; an absent `secondaryGoals` field produced
  `[]`, no crash. Full regression: missing-fields payload still 400
  with the same 12-field error set; malformed JSON still 400; 150KB
  body still 413s; Contact route unaffected; a 12-route sitewide sweep
  all 200. Committed and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `netstat`/`taskkill` first); removed all scratch
  payload/log files.

## Resolved round 66

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R55`** — a
  thirty-first consecutive independent confirmation (reviewed commit
  `846975d`, round 64's HEAD, predating round 65's body-size-cap fix), 0
  active code defects at the reviewed commit. Moved to
  `exchange/processed/`.
- **Found and fixed a real data-loss defect on a third surface**
  (mailer/rate-limiter/origin-gate and the Planner sanitize/validate
  pipeline had each gone a round clean): diffed every `PlannerData`
  field (`src/lib/planner-config.ts`) against every `raw.<field>` read
  in `src/app/api/planner/route.ts`. The Planner's "Visual direction"
  step's four style sliders (`data.spectrum`) had no corresponding
  server read at all — every other ~47 fields did — so that whole
  step's answers were silently dropped before reaching
  `design@cyvexly.com`, contrary to Owner direction `2026-09-04-14`'s
  "All project-planner answers" requirement.
- **Fixed:** `src/app/api/planner/route.ts` now reads `raw.spectrum`,
  keeping only known `visualSpectrums` ids paired with an in-range
  integer (0-4, matching the client's step slider) and adds a new
  "Style spectrum" email row (e.g. `Minimal ↔ Expressive: 3/4`).
- **Verified:** `tsc`/`lint`/`build` clean. Real `next start` on port
  5173 with a temporary debug log (removed before commit): a mixed
  payload (3 valid ids, 1 unknown id, 1 non-numeric value) produced
  exactly the 3 valid labels with no crash; an absent `spectrum`
  produced `[]`, no crash — both still reached the existing 503
  not-configured response. Regression: valid payload still 503;
  missing fields still 400 with the same field-error set; malformed
  JSON still 400; 150KB body still 413s; Contact route unaffected; a
  12-route sitewide sweep all 200. Committed (`4a7b26f`) and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID first); removed all scratch payload/log files.

Round 65's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_65_ARCHIVE.md` (moved there
round 68 to keep this file under its 30,720-byte hot-file cap): the
request-body-size-cap fix on both API routes.

Round 64's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_64_ARCHIVE.md` (moved there
round 65 to keep this file under its 30,720-byte hot-file cap): the
30th consecutive audit confirmation plus a clean adversarial re-review.

Round 63's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_63_ARCHIVE.md` (moved there
round 64 to keep this file under its 30,720-byte hot-file cap): the
timing-safe-comparison fix for `isTrustedOrigin()`.

Round 62's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_62_ARCHIVE.md` (moved there
round 63 to keep this file under its 30,720-byte hot-file cap): prepared
the dormant Cloudflare-bypass origin-secret gate.

Round 61's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_61_ARCHIVE.md` (moved there
round 62 to keep this file under its 30,720-byte hot-file cap): the
rate-limiter memory-pruning fix.

Round 59's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_59_ARCHIVE.md` (moved there
round 66 to keep this file under its 30,720-byte hot-file cap): fixed
Home's meta description overage.

Round 58's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_58_ARCHIVE.md` (moved there
round 66 to keep this file under its 30,720-byte hot-file cap): shipped
`html lang="en-US"` and fixed a hot-file-cap violation plus a handoff
rotation-order defect.

Round 57's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_57_ARCHIVE.md` (moved there
round 67 to keep this file under its 30,720-byte hot-file cap): round 57
trimmed 5 oversized meta descriptions past the search-snippet budget.

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

3. **Dormant round-62 scaffolding for the residual Cloudflare-bypass gap
   named under "Resolved round 60" above — activation is an Owner/account
   step, not a Builder-reachable one.** `isTrustedOrigin()`
   (`src/lib/mailer.ts`), wired into both `/api/contact` and
   `/api/planner`, always passes today (no behavior change) and starts
   rejecting (403) any request missing a matching `x-cf-origin-secret`
   header once `CF_ORIGIN_SECRET` is set in Render. **Exact Owner steps
   to activate:** (1) In the Cloudflare dashboard for `cyvexly.com`: Rules
   → Transform Rules → create a "Modify Request Header" rule matching all
   incoming requests, action "Set static", header name
   `x-cf-origin-secret`, value = a long random secret you choose (this is
   not an API key or account credential — treat it like a password, don't
   paste it into chat or source). (2) In Render, on the `cyvexly-studio`
   web service: add environment variable `CF_ORIGIN_SECRET` set to that
   exact same value, then redeploy (Render also auto-redeploys on env
   changes). Once both match, direct requests to
   `cyvexly-studio.onrender.com` that skip Cloudflare have no way to learn
   or forge the secret and are rejected at the origin. Verified round 62:
   dormant (unset) and activated (set, matching/mismatched/missing header)
   behavior both proved live on a real `next start` server; zero
   regressions across a 14-route sweep. **Round 63:** hardened the secret
   comparison itself from `===` to `timingSafeEqual` (a plain string
   comparison is a timing side-channel once this gate is activated); same
   dormant/activated behavior reverified, no functional change.

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
