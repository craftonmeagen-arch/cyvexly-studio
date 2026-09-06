# Cyvexly App Debt

## Resolved round 54

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R44`** — a twentieth
  consecutive independent confirmation (reviewed commit `08d6f95`, round
  51's HEAD, two commits behind round 53's HEAD), 0 active code defects.
  Its listed "Owner Gate" naming domain DNS as still needed was already
  stale (round 53 verified the domain fully connected). Moved to
  `exchange/processed/`.
- **New angle — per-slug Open Graph images for `services/[slug]` and
  `work/[slug]`.** Round 52 confirmed via a real before/after test that
  these two dynamic segments had no `opengraph-image` of their own (Next's
  image-convention file doesn't cascade into a parameterized child segment
  the way static metadata text fields do). Added
  `src/app/services/[slug]/opengraph-image.tsx` and
  `src/app/work/[slug]/opengraph-image.tsx`, each with its own
  `generateStaticParams()` mirroring the sibling `page.tsx`, reusing
  `renderRouteOgImage()` with that slug's own already-shipped name/summary
  or name/challenge — no invented copy. Both call `notFound()` for an
  unrecognized slug.
- **Verified:** `tsc`/`lint`/`build` all pass clean; build output confirms
  both routes statically generate all 5/3 slugs. Real `next start` server
  on port 5173: all 8 dynamic `/opengraph-image` endpoints return 200, the
  page's `og:image` meta resolves to the per-slug URL, an invalid slug
  404s on both the page and its image endpoint, two generated PNGs
  visually opened (correct brand mark/name/description, no clipping). A
  static-route regression sample shows zero regressions. Committed and
  pushed.
- Cleaned up: stopped the owned `next start` server (verified real
  listener PID via the port's actual listener before stopping), removed
  the round's own scratch PNGs and log file.

## Resolved round 52

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R43`** — a nineteenth
  consecutive independent confirmation (reviewed commit `eb03a33`, round
  50's HEAD, one commit behind round 51's OG/Twitter-metadata commit), 0
  active code defects. Moved to `exchange/processed/`.
- **New angle — per-route Open Graph images.** Round 51's handoff named
  this directly: every route shared Home's single generated
  `opengraph-image`, so shared links for About/Services/Pricing/Work/
  Process/Contact/FAQ/Project Planner all showed the same generic Home
  preview instead of one reflecting the actual page. Added
  `src/lib/og-image.tsx`'s `renderRouteOgImage()` (reuses Home's brand
  mark/palette/grammar) and a new `opengraph-image.tsx` per static route,
  reusing only each route's own already-shipped title/description — no
  invented copy.
- **Verified:** `tsc`/`lint`/`build` all pass clean. Real `next start`
  server on port 5173: each of the 9 routes' `og:image` meta now resolves
  to its own distinct URL; downloaded and visually opened the actual
  generated PNGs (About, Services, Pricing, Work, Process, Contact, FAQ,
  Start, Home) — correct brand mark, page name, and description text, no
  clipping/overflow. **Regression check on the dynamic routes:** before
  shipping, moved the two new sibling files (`services/opengraph-image.tsx`,
  `work/opengraph-image.tsx`) aside, rebuilt, and confirmed
  `/services/business-websites` and `/work/aurora-spaces` already had no
  `og:image` at all in that baseline — restored the files and confirmed the
  same absence after. This is a real before/after A-B test proving the
  dynamic-route image gap is pre-existing (Next's image-convention file
  does not cascade into a parameterized child segment the way static
  metadata text fields do), not something this round's sibling files broke.
  Full 26-route/asset regression sweep (all pages, sitemap, robots,
  manifest, icons, security.txt, an invalid path) shows zero regressions.
  Committed (`57b8fb7`) and pushed.
- Cleaned up: stopped the owned `next start` server (verified real listener
  PID via `Get-NetTCPConnection -LocalPort 5173` before stopping), removed
  the round's own temporary log files and scratch PNGs.

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

## Resolved round 49

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R40`** — a sixteenth
  consecutive independent confirmation (reviewed commit `1c64d81`, round
  47's HEAD, one commit behind round 48's raster-icon commit), 0 active
  code defects. Moved to `exchange/processed/`.
- **New angle — `src/app/error.tsx` route-segment error boundary.** No
  route had one; an unhandled render error previously fell through to
  Next's default unstyled generic error screen. Same special-file family
  as `not-found.tsx`; reuses `SiteHeader`/`SiteFooter`/`ButtonLink`.
- **New angle — `src/app/global-error.tsx`** for a root-layout-level error
  (which `error.tsx` cannot catch). Renders its own `<html>`/`<body>` per
  Next's documented convention; dependency-free (inline styles only).
- **New angle — `viewport.themeColor`/`colorScheme`** added to the root
  layout metadata (`#0f66e0`, `light`) — no invented facts, reuses the
  existing brand-blue token.
- Verified with a temporary `force-dynamic` throwaway route (deleted before
  commit, confirmed clean via a full re-typecheck/re-lint/re-build) against
  a real `next start` server: sanitized error digest in the SSR shell, real
  in-app-Browser navigation showed the actual `error.tsx` UI text with the
  digest as the only console error; `theme-color`/`color-scheme` meta
  confirmed live via `document.querySelector`; Home/`/faq`/manifest/
  apple-icon/icons all still `200` with zero regressions afterward.
- `tsc`/`lint`/`build` all pass clean. Committed and pushed.
- Archived round 46's full `CYVEXLY_ACTIVE_CHUNK.md` report and rounds 46
  and 47's full `CYVEXLY_NEXT_BUILDER_HANDOFF.md` closeouts to restore the
  intended latest-three rotation (§7.14) in both files.
- Cleaned up: stopped the owned `next start` server (verified real listener
  PID via the port's actual listener before stopping), closed the owned
  Browser-pane tab.

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

## Resolved round 42

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R33`** — a ninth
  consecutive independent confirmation (reviewed commit `46eae51`, round
  40's HEAD), not a new finding. Moved to `exchange/processed/`. `tsc
  --noEmit`/`lint`/`build` re-run clean before making any change.
- **Found and fixed a real defect: the Contact form had no spam/rate
  protection at all**, while the Planner already has a hidden honeypot
  field. Vision §17 item 6 groups "Contact and Planner" together under
  "proportionate accessible spam/rate controls." Reachable now — a
  client-side honeypot needs no backend/credentials/Owner authorization,
  and the Planner's already-accepted pattern is the precedent. Fixed in
  `src/components/contact-form.tsx`: added an identical hidden honeypot
  field (`contact-company-website`) and validation check. Live-verified
  with real CDP mouse clicks against a production server: honeypot filled
  → submission blocked (mailto bridge never fires); honeypot cleared →
  submission works normally (no regression). Same method live-tested the
  **Planner's existing honeypot for the first time** (previously untested
  per round 41): filled → blocked; cleared → works. `tsc`/`lint`/`build`
  all pass clean. Script and results at
  `docs/agent-system/cyvexly/builder/evidence/round-42-honeypot-overflow-*`.
- **New QA angle — RTL/very-long-name overflow in the Planner review
  step.** A ~130-character unbroken string (no spaces) in "Full name" and
  an Arabic RTL name concatenated directly (no separator) with the same
  string in "Company name" — worst case, zero break opportunities at the
  RTL/Latin boundary. Measured at a real 375px width: `document.
  documentElement.scrollWidth` (375) equals `window.innerWidth` (375) —
  **zero horizontal overflow, no defect found.**
- Cleaned up: stopped the owned `next start` server (verified real
  listener PID via `Get-NetTCPConnection -LocalPort 5173`) and the owned
  headless Chrome process (verified by exact `chrome-profile-round42`
  `--user-data-dir` command-line match), removed the temporary Chrome
  profile directory under the OS temp scratchpad root.

## Resolved round 41

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R32`** — an eighth
  consecutive independent confirmation (reviewed commit `a8c5769`, round 39's
  HEAD, one commit behind round 40's step-focus fix already on `main`), not a
  new finding. Moved to `exchange/processed/`. `tsc --noEmit`/`lint`/`build`
  re-run clean before making any change (no source touched).
- **New QA angle — WCAG 1.4.10 Reflow / 200%-zoom-equivalent, one of round
  40's two named uncovered candidates.** Emulated 320 CSS px (the exact
  1.4.10 threshold) and 640 CSS px (a proxy for a 1280px viewport at 200%
  zoom, using the same width-halving equivalence WCAG 1.4.10's own guidance
  relies on) across 8 marketing routes and all 9 real Planner steps,
  advancing the Planner with genuine CDP mouse clicks on Continue (not just
  static snapshots) at a production server. **Result: 34/34 checks, zero
  horizontal overflow, and the Planner's real step-advancement kept working
  at both narrow widths.** No defect found. Script and result summary at
  `docs/agent-system/cyvexly/builder/evidence/round-41-zoom-reflow-*`.
- **Bonus QA — re-checked round 40's other named candidate: does Back (and
  by extension the progress-rail/edit-link callers) get round 40's
  scroll/focus/live-region fix, since all four call the same shared
  `goToStep()`?** Source read confirmed `goToStep()` is a single function
  used identically by `handleNext`, `handleBack`, `onEdit`, and the progress
  rail, and the fix is a `useEffect` keyed only on `currentStep` — not on
  which caller changed it. Live-verified with a real CDP click on the "←
  Back" button after advancing to step 2 and manually scrolling away from
  the top: scroll reset to 0, focus moved to the step 1 heading, and the
  live region announced "Step 1 of 9: About you". **No defect found** —
  confirms the fix is caller-agnostic as the source structure implies.
  Script at `docs/agent-system/cyvexly/builder/evidence/round-41-back-button-test.mjs`.
- **Ninth consecutive round (35-41, with 39/40 as the only two that found
  real defects) confirms zero reachable-without-an-Owner-gate defects**,
  now also covering WCAG 1.4.10 reflow/zoom. Both candidates round 40 named
  as untested are now closed. See `CYVEXLY_NEXT_BUILDER_HANDOFF.md`'s
  round-41 entry for remaining untried QA angles.
- Cleaned up: stopped the owned `next start` production server (verified
  real listener PID via `Get-NetTCPConnection -LocalPort 5173`) and the
  owned headless Chrome process tree (verified by exact
  `chrome-profile-round41` command-line match before touching anything),
  removed the temporary Chrome profile directory under the OS temp
  scratchpad root.

## Resolved round 40

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R31`** — a seventh
  consecutive independent confirmation (reviewed commit `f1a264f`, round 38's
  HEAD — one commit behind round 39's skip-link fix already on `main`), not a
  new finding. Moved to `exchange/processed/`.
- **New QA angle — screen-reader semantics on the Planner's step-advance
  flow**, one of the candidates round 39 named as uncovered. Source review
  found Contact's and the Planner's per-field validation (`aria-invalid`,
  `aria-describedby`, `role="alert"`) already solidly correct — no defect
  there. Live-tested the *successful* step-advance path (not validation
  failure) with real synthetic mouse clicks via CDP against a **production**
  build/server (the in-app Browser pane's `computer`/screenshot path proved
  intermittent mid-round — screenshot timeouts matching the documented
  "pane hidden" pattern — and an initial plain-JS `.click()` test gave a
  false-positive "focus lost" reading because `document.hasFocus()` is false
  in that pane; real headless Chrome has genuine document focus, so it is the
  trustworthy instrument for this claim). **Found and fixed a real defect:**
  `goToStep()` called `window.scrollTo({top:0})` synchronously before React
  committed the new step's DOM, so Chrome's scroll-anchoring silently
  overrode the intended top-scroll; focus also never left the Continue/Back
  button. Confirmed before fix: `scrollY` settled at 721 (not 0), focus
  stayed on the button, and no `aria-live` region announced the change.
  Fixed in `src/components/planner/planner-form.tsx`: moved the scroll+focus
  into a `useEffect` keyed on `currentStep` (guarded by a `previousStepRef`
  comparison, not a one-shot flag, so it stays correct under React Strict
  Mode's dev-only double-invoke of mount effects), deferred one
  `requestAnimationFrame` past commit, focusing the step `<h2>` with
  `preventScroll: true` so the focus call doesn't re-fight the scroll, and
  added a `role="status" aria-live="polite"` sr-only announcer ("Step 2 of 9:
  The business"). Verified after fix: `scrollY` reaches `0`, focus lands on
  the new heading, live region fires. `tsc`/`lint`/`build` all pass clean.
  Full before/after evidence and the reusable CDP test script are at
  `docs/agent-system/cyvexly/builder/evidence/round-40-planner-step-focus-*`.
- Cleaned up: stopped the owned `next start` production server and the owned
  headless Chrome process tree (verified by exact `--user-data-dir` command-
  line match before touching anything), removed the temporary Chrome profile
  directory under the OS temp scratchpad root.

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
