# Cyvexly Active Chunk

**Chunks:** 3 — Project Planner (opened round 4, in progress) and 4 —
Utility/legal pages (opened round 2, in progress) retain incomplete closure
items. **Chunk 5 — United States Launch Completion & Business Operations is
now OPEN**, started round 29. Its integrated verification will close the
overlapping delivery and launch items in Chunks 3 and 4. Chunk 2 — Core
marketing pages — remains closed but revisitable.

**Round 29** (scheduled/unattended, 50-minute limit) opens Chunk 5 and closes
one bounded workstream: public contact identity (`design@cyvexly.com`, `(317)
572-5780`) sitewide, the code-only half of production metadata/discovery
(`metadataBase`, `sitemap.xml`), and a United States-only truth audit removing
stale "worldwide"/international-market and unsupported-payment-method claims.
See the round-29 report below and `CYVEXLY_APP_DEBT.md`'s "Resolved round 29"
section. Chunk 5's About page, Privacy/Terms, real inquiry delivery,
domain/DNS connection, analytics, and full release QA remain open — this is
one workstream, not chunk completion.

**Current status:** The nine-step Planner UI/state/validation remains built and
verified at `/start`; real server-side email still needs an authorized provider,
credentials, and verified sending domain. `/not-found`, `/faq`, and
`/accessibility` are complete; `/privacy` and `/terms` can now be drafted for
Indiana/United States operations once the exact registered LLC name is
confirmed; the favicon is fixed. The Owner has confirmed `cyvexly.com`,
`design@cyvexly.com`, `(317) 572-5780`, United States-only availability, and a
logo-led/no-personal-founder About direction. Payment and real portfolio
replacement are tabled. Round 19 prevents
invalid dynamic-route metadata from replacing the correct hydrated 404 title
and gates the Planner until saved-draft restoration completes. Round 20 removes
the Home reel's visible muted/duration, progress, and circular playback chrome,
slows playback to `0.75×`, and preserves pause/resume on the complete named
media surface. Round 21 carries the Owner-approved pale-blue architectural
glass environment across route families with protected copy fields and verified
contrast. Round 22 restores the shared sticky header, completes Home/Services section
continuity, and defers the unavailable About link without inventing content.
Round 23 repairs shared validation contrast. Round 24 implements authoritative
Owner direction `2026-09-01-10` over every full public page height. Round 25
hardens the shared navigation lifecycle/current semantics and closes one
enlarged-root Services overflow without changing that appearance. Round 26
strengthens the shared visible environment after Owner rejection. Round 27
rebuilds Home's first viewport as a discrete architectural-glass scene after
the Owner found Round 26 insufficient. Round 28 carries that architecture
through middle/lower sections and all matching route families with persistent
scene structure and protected bounded glass bays. Round 18 replaces
Pricing's sparse text-only entry with a split glass scope signal and coordinated
package field while preserving every package fact. Round 17 replaces
the Services combination table with five mockup-aligned, icon-led glass
pathways and a Planner handoff, including compact-desktop breakpoint hardening.
Round 16 implements Owner direction 2026-08-31-07 as a larger integrated Home
reel inside a light-ice-blue glass stage. Round 15 makes the accepted Home
video visible on the real Render site by aligning the deployment branch with
accepted source. Round 14's five focused service-detail journeys and safe
Planner preselection remain intact alongside rounds 11-13's Home systems.

## Active chunk boundaries

### Chunk 3 — Project Planner

- **Outcome:** A calm, nine-step conversational form at `/start`, covering the
  complete vision field plan and eventually sending a real automatic
  confirmation email from Cyvexly.
- **Built:** UI, state, validation, conditional fields, review/edit, draft save,
  responsive progress rail, and DOM/accessibility-tree audit.
- **Remaining:** the real server-side delivery path. The production domain is
  now confirmed; a business-inbox/transactional-email provider, credentials,
  sending-domain verification, internal receipt, visitor confirmation, and
  production delivery proof remain.
- **Closure boundary:** the UI remains fully proved and the delivery gap is
  implemented and publicly proved after provider/account authorization; if an
  account gate remains, it must be named precisely rather than treated as an
  unknown domain decision.

### Chunk 4 — Utility, legal & launch readiness

- **Outcome:** utility/legal routes, metadata assets, and launch-readiness
  conditions from vision §15.
- **Built:** custom 404, FAQ, Accessibility statement, favicon/ICO, OG image,
  robots/no-index preview default.
- **Remaining:** logo-led About, Indiana/United States Privacy/Terms, exact LLC
  legal-name confirmation, `cyvexly.com` DNS/HTTPS/canonical setup,
  production-domain metadata, sitemap, indexing release, analytics/search
  ownership, and full production QA. Chunk 5 owns this integrated completion.

### Chunk 5 — United States Launch Completion & Business Operations (NEXT)

- **Authority:** Owner direction `2026-09-04-14`, vision §17, and the Chunk 5
  entry in `CYVEXLY_PROJECT_CHUNK_MAP.md`.
- **Outcome:** launch a truthful, contactable, searchable, legally coherent
  United States business site on canonical `https://cyvexly.com`.
- **Required scope:** domain/HTTPS/canonical redirects; metadata/canonicals/
  social URLs/sitemap/staged robots; `design@cyvexly.com` and public phone;
  logo-led About; Indiana/United States Privacy and Website Terms; secure real
  Contact/Planner delivery and visitor confirmation; privacy-aware analytics
  and search ownership; United States/payment/portfolio truth audit; complete
  public release QA.
- **Deferred:** payment-provider integration and real-client portfolio
  replacement. Do not invent, activate, or claim either.
- **Owner gates:** exact registered LLC name; account-bound DNS/Render access;
  inbox/transactional-email provider authorization and securely entered
  secrets; analytics/Search Console ownership or no-analytics decision; About/
  legal/public-visual review; final indexability approval.
- **Closure boundary:** all Chunk 5 requirements pass on the production domain,
  and the carried Chunk 3/4 operational items are closed. A partial domain-only,
  legal-only, or UI-only release does not close this chunk.

## Round 47 report — global round 47 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R38` (reviewed commit
`140bb0b`, round 45's HEAD, one commit behind round 46's manifest/cleanup
commit). Fourteenth consecutive independent confirmation — 0 active code
defects, re-verifies BreadcrumbList JSON-LD structure/scoping on all 5
service-detail and 3 case-study routes, both Contact/Planner honeypots,
WCAG 1.4.10 reflow, canonicals, security headers, and live production
parity against `https://cyvexly-studio.onrender.com/`. Not a new finding.
Moved to `exchange/processed/`.

Ran one genuinely new angle, reachable without any Owner gate: **added
`src/app/apple-icon.tsx`**, Next's special-file convention for the
`<link rel="apple-touch-icon">` tag — the site had `icon.svg` (favicon) and
`manifest.ts` (Android/Chrome "Add to Home Screen") but nothing for iOS
Safari's home-screen icon, which does not read the Web App Manifest's icon
list. §4.12 check: this is Next's own documented convention (same family as
the already-shipped `icon.svg` and `opengraph-image.tsx`), not a departure.
Built with the same `next/og` `ImageResponse` proxy-rasterizer technique
already used for `opengraph-image.tsx`: a 180×180 PNG, solid brand-blue
(`#0F66E0`) background per Apple's own no-transparency guidance, with the
existing C/Y signal-mark path data in white, centered. No new facts —
reuses only the already-shipped mark and brand color token.
**Verified:** real production build (`pnpm run build`) emits an
`/apple-icon` route; parsed `index.html`'s
`<link rel="apple-touch-icon" ... type="image/png" sizes="180x180"/>` and
confirmed the existing `<link rel="icon">` (favicon/`icon.svg`) tags are
unchanged (no collision or duplicate). Copied the generated
`.next/server/app/apple-icon.body` PNG to a local file and opened it (the
established round-3/7 proxy-image technique): clean brand-blue square, mark
centered, no clipping. Live-verified against a real `next start` production
server on port 5173: `/apple-icon` returns `200 image/png`; `icon.svg` and
`/manifest.webmanifest` unchanged (`200`, correct content-type); a real
in-app-Browser screenshot of Home (this session's compositor worked at
round start) shows zero visual regression, zero console errors, zero
network requests recorded pointing at any new failing route.
`tsc --noEmit`/`lint`/`build` all pass clean (lint's one warning is the
same pre-existing unused-var in round 42's untouched evidence script).
Committed and pushed.

Archived round 44's full report (below) to
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_44_REPORT.md` to restore
the intended latest-three rotation (§7.14) — 45, 46, 47 stay live.

## Round 46 report — global round 46 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R37` (reviewed commit
`12e43a7`, round 44's HEAD, one commit behind round 45's BreadcrumbList
JSON-LD commit). Thirteenth consecutive independent confirmation — 0 active
code defects, re-verifies the FAQPage JSON-LD scoping, both honeypots, WCAG
1.4.10 reflow on `/faq`, canonicals, security headers, and live production
parity. Not a new finding. Moved to `exchange/processed/`.

Ran two genuinely new angles, both reachable without any Owner gate:

1. **Removed five dead `create-next-app` scaffold assets from `public/`**
   (`next.svg`, `vercel.svg`, `window.svg`, `globe.svg`, `file.svg`) —
   confirmed via a full source grep that nothing in `src/` referenced any of
   them. These were publicly served at e.g. `cyvexly.com/vercel.svg` on the
   live launched domain: unrelated third-party branding shipped by accident,
   not a Cyvexly asset, and pure dead weight on a site vision §17 requires
   to be "truthful" and fully QA'd. Verified post-build: all five now 404 on
   the real production server while `icon.svg` (the actual brand mark)
   still serves 200.
2. **Added a Web App Manifest** (`src/app/manifest.ts`, Next's special-file
   convention) — the site previously had none, a routine part of launch QA
   (PWA/"Add to Home Screen" metadata) that was never covered by any prior
   round. Uses only already-confirmed facts: `name`/`short_name` from
   `site-config.ts`, the tagline as `description`, and the already-shipped
   brand tokens for `theme_color` (`#0f66e0` cyber-blue) and
   `background_color` (`#eef4fa` arctic-mist) — no invented facts. Icon
   entry reuses the existing `icon.svg` (`sizes: "any"`, correct
   `image/svg+xml` type per the Web App Manifest spec) rather than
   generating new raster assets this round. §4.12 check: `manifest.ts` is
   Next.js's own documented convention, auto-linked into every page's
   `<head>` — not a departure.
   **Verified:** real production build (`pnpm run build`) emits
   `/manifest.webmanifest`; parsed its actual body (correct name, icon,
   colors, `display: "standalone"`); confirmed `index.html` carries
   `<link rel="manifest" href="/manifest.webmanifest"/>`. Live-verified
   against a real `next start` production server on port 5173: manifest
   returns `200 application/manifest+json`; a real in-app-Browser screenshot
   of Home shows zero visual regression and zero console/network errors.

`tsc --noEmit`/`lint`/`build` all pass clean (lint's one warning is a
pre-existing unused-var in round 42's evidence script, untouched this
round). Committed and pushed.

## Round 45 report — global round 45 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R36` (reviewed commit
`5331cb3`, round 43's HEAD, one commit behind round 44's FAQPage JSON-LD
commit). Twelfth consecutive independent confirmation — 0 active code
defects, re-verifies the sitewide Organization JSON-LD, both honeypots,
WCAG 1.4.10 reflow, canonicals, security headers, and live production
parity. Not a new finding. Moved to `exchange/processed/`.

Implemented the natural next discoverability angle both round 43 and 44's
handoffs named: **BreadcrumbList JSON-LD** for the service-detail
(`/services/[slug]`) and case-study (`/work/[slug]`) routes, the two route
families that sit one level under a listing page. Added
`buildBreadcrumbJsonLd()` to `src/lib/structured-data.ts` (a small
trail-to-`ListItem[]` builder) and embedded a 3-item Home → listing →
detail trail on both templates, reusing only each route's own existing
name/URL — no new facts. §4.12 check: `BreadcrumbList` JSON-LD is Google's
own documented rich-results pattern for hierarchical pages — not a
departure. Verified in real production build output (parsed
`.next/server/app/services/business-websites.html` and
`work/aurora-spaces.html`: both carry `Organization` + a correct 3-entry
`BreadcrumbList`; confirmed `index.html`/`services.html`/`work.html` carry
only `Organization` — no leak to listing/home routes) and live via real CDP
navigation against a production `next start` server across both detail
routes plus their listing pages and home: zero console messages, zero
network failures, correct trail parsed from the live DOM every time. `tsc`/
`lint`/`build` all pass clean. Script preserved at
`builder/evidence/round-45-breadcrumb-jsonld-check.mjs`. Committed and
pushed.

Archived round 42's full report (below) to
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_42_REPORT.md` to restore
the intended latest-three rotation (§7.14) — 43, 44, 45 stay live.

Round 44's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_44_REPORT.md` (moved there
round 47 to restore latest-three rotation) — 45, 46, 47 stay live. Round 44
implemented FAQPage JSON-LD for `/faq`.

Round 43's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_43_REPORT.md` (moved there
round 46 to restore latest-three rotation) — 44, 45, 46 stay live. Round 43
found the site had no structured data at all and added sitewide
`Organization` JSON-LD.

Round 42's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_42_REPORT.md` (moved there
round 45 to restore latest-three rotation). Round 42 found and fixed the
Contact form's missing spam-protection honeypot and live-verified the
Planner's honeypot for the first time; also swept the Planner review step
for RTL/very-long-name overflow with no defect found.

Rounds 40-41 full reports are archived at docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_40_41_REPORT.md (moved there round 44 to restore latest-three rotation). Round 41 closed both of round 40's named QA candidates (WCAG 1.4.10 reflow/zoom, a Back-button re-check) with no defect found. Round 40 found and fixed the Planner step-advance scroll/focus/live-region defect (`71d233f`).

Rounds 31-39 full reports are archived at docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_31_39_REPORT.md (moved there round 43 to restore latest-three rotation). Summarized outcomes remain in CYVEXLY_BUILD_SUMMARY.md and CYVEXLY_APP_DEBT.md.

## Prior round summaries

- **Round 1:** established Next.js/TypeScript/Tailwind source truth, design
  system, Home, and Process; closed Chunk 1. Full report:
  `docs/archive/chunks/CYVEXLY_CHUNK2_ROUND1_REPORT.md`.
- **Round 2:** built Services, Pricing, Contact, Work/case studies, FAQ,
  Accessibility, and 404; fixed a Next.js 16 dynamic-params runtime bug. Full
  report: `docs/archive/chunks/CYVEXLY_CHUNK2_ROUND2_REPORT.md`.
- **Round 3:** closed Chunk 2 with About honestly bounded, ran the Planner email
  reachability check, added no-index/robots and OG asset, and refreshed launch
  readiness. Full report: `docs/archive/chunks/CYVEXLY_CHUNK4_ROUND3_REPORT.md`.
- **Round 4:** opened Chunk 3 and built/verified the full Planner, including
  mobile-overflow, missing-field, reduced-motion, and accessible-name fixes.
  Full report: `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND4_REPORT.md`.
- **Round 5:** rebuilt Process as a connected timeline and replaced Work/case-
  study gradients with truthful project-specific `ConceptPreview` SVGs. Full
  report: `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND5_REPORT.md`.
- **Round 6:** fixed three Council findings plus two same-shape Pricing table
  issues; root-caused the unattended-browser compositor limitation. Full
  report: `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND6_REPORT.md`.
- **Round 7:** redesigned/fixed the favicon and real ICO, and audited Planner
  keyboard-accessibility properties through DOM/accessibility-tree evidence.
  Full hot-path snapshot/report:
  `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND7_REPORT.md`.

- **Round 8:** unified truthful concept artwork across Home, Services, and Work;
  established exact CDP rendering and fixed Planner first-error focus. Full
  report: `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND8_REPORT.md`.
- **Round 9:** fixed cross-computer scale drift from browser font defaults/rem
  breakpoints and strengthened shared glass/large-text resilience. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND9_REPORT.md`.
- **Round 10:** ran the wider method audit and added the inset glass header,
  credibility icon rail, and capability-card grammar. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND10_REPORT.md`.
- **Round 11:** integrated the Owner-supplied Home showcase video with honest
  provenance, motion/data-saver controls, and responsive media proof. Full
  report: `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND11_REPORT.md`.
- **Round 12:** added the Home partnership diagram and five-stage process-route
  visual system. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND12_REPORT.md`.
- **Round 13:** replaced the flat Home final CTA with a split luminous
  planetary/network composition. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND13_REPORT.md`.
- **Round 14:** added five focused service-detail journeys and safe Planner
  preselection. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_SERVICES_ROUND14_REPORT.md`.
- **Round 15:** repaired the deployment/source branch mismatch so the accepted
  Home video appeared on the real Render site. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_DEPLOYMENT_ROUND15_REPORT.md`.
- **Round 16:** implemented the larger integrated Owner-directed Home reel.
  Full report: `docs/archive/chunks/CYVEXLY_SHARED_HOME_ROUND16_REPORT.md`.
- **Round 17:** replaced the Services combination table with five icon-led
  audience pathways. Full report:
  `docs/archive/chunks/CYVEXLY_SHARED_SERVICES_ROUND17_REPORT.md`.

Rounds 18 and 19 are archived at
`docs/archive/chunks/CYVEXLY_SHARED_PRICING_ROUND18_REPORT.md` and
`docs/archive/chunks/CYVEXLY_SHARED_FOUNDATIONS_ROUND19_REPORT.md`.

Round 24 is archived at
`docs/archive/chunks/CYVEXLY_SHARED_THEME_ROUND24_REPORT.md`.

Round 25 is archived at
`docs/archive/chunks/CYVEXLY_SHARED_FOUNDATIONS_ROUND25_REPORT.md`.

Rounds 26-29 (Owner-rejection visual-fidelity corrections and the Chunk 5
opening workstream) are archived at
`docs/archive/chunks/CYVEXLY_SHARED_THEME_ROUNDS_26_29_REPORT.md`.
