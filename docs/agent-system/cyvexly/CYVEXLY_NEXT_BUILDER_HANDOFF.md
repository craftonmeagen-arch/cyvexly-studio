# Cyvexly Next Builder Handoff

## Round 47 closeout

**Session:** scheduled `cyvexly-builder` task, 2026-09-05, 50-minute hard
time limit (unattended)
**Start source:** `727d809` on `main` (pushed, matched `origin/main`)
**Scope:** dispositioned the one new Auditor inbox item (`IFA-2026-09-05-R38`)
and shipped one new reachable QA/build angle: an Apple touch icon.
**Completion:** REAL SOURCE ADDITION LANDED — see below.

### What was checked

- `IFA-2026-09-05-R38` (reviewed commit `140bb0b`, round 45's HEAD, one
  commit behind round 46's manifest/cleanup commit) is a **fourteenth
  consecutive independent confirmation, not a new finding** — 0 active code
  defects, re-verifies BreadcrumbList JSON-LD structure/scoping on all 5
  service-detail and 3 case-study routes, both Contact/Planner honeypots,
  WCAG 1.4.10 reflow, canonicals, security headers, and live production
  parity against `https://cyvexly-studio.onrender.com/`. Moved to
  `exchange/processed/`.
- **New angle — Apple touch icon (`src/app/apple-icon.tsx`).** Had
  `icon.svg` (favicon) and round 46's `manifest.ts` (Android/Chrome), but
  nothing for iOS Safari's home-screen icon — iOS ignores the Web App
  Manifest's icon list and needs its own `<link rel="apple-touch-icon">`.
  §4.12: `apple-icon.tsx` is Next's own special-file convention, same
  family as `icon.svg`/`opengraph-image.tsx` — not a departure. Built with
  the same `next/og` `ImageResponse` technique as `opengraph-image.tsx`:
  180×180 PNG, solid brand-blue (`#0F66E0`) background (Apple's own
  no-transparency guidance), existing C/Y mark path in white, centered. No
  new facts. **Verified:** build emits `/apple-icon`; `index.html` carries
  `<link rel="apple-touch-icon" ... type="image/png" sizes="180x180"/>`;
  existing favicon tags unchanged. Copied the generated PNG body locally
  and opened it (round-3/7's proxy-image technique): clean, centered, no
  clipping. Live-verified on a real `next start` server: `/apple-icon`
  returns `200 image/png`; a real in-app-Browser screenshot of Home shows
  zero visual regression, zero console/network errors.
- `tsc --noEmit`/`lint`/`build` all pass clean (lint's one pre-existing
  warning is in round 42's untouched evidence script).
- Committed and pushed to `origin/main`.
- Cleaned up: stopped the owned `next start` server (verified real listener
  PID via `Get-NetTCPConnection -LocalPort 5173` before stopping — process
  confirmed as the `node.exe` this round launched), closed the owned
  Browser-pane tab.

### Recommended next workstream

Untried angles not yet swept: a print-stylesheet/print-to-PDF check (low
priority, still not in vision §17 item 10's explicit list); a dedicated
rate-limiting check beyond the honeypot (architecturally tied to the
server-side email delivery this chunk already defers); real raster (PNG)
manifest icons at 192/512px for `manifest.ts` if a stronger Android "Add to
Home Screen" presentation is later judged worthwhile (the current SVG-only
icon is spec-valid, not a defect — the same open item round 46 named,
still unaddressed). Organization, FAQPage, BreadcrumbList JSON-LD, the Web
App Manifest, and now the Apple touch icon are all shipped — keep looking
for genuinely new QA/build angles rather than assuming the surface is
empty. Genuinely Owner-gated items are unchanged: DNS/domain connection,
real email delivery, analytics ownership, exact LLC name, About/legal/
visual review, final indexability approval (see
`CYVEXLY_OWNER_DIRECTION.md`).

## Round 46 closeout

**Session:** scheduled `cyvexly-builder` task, 2026-09-05, 50-minute hard
time limit (unattended)
**Start source:** `140bb0b` on `main` (pushed, matched `origin/main`)
**Scope:** dispositioned the one new Auditor inbox item (`IFA-2026-09-05-R37`)
and shipped two new reachable QA/build angles: dead-asset cleanup and a Web
App Manifest.
**Completion:** REAL SOURCE ADDITION LANDED — see below.

### What was checked

- `IFA-2026-09-05-R37` (reviewed commit `12e43a7`, round 44's HEAD, one
  commit behind round 45's BreadcrumbList commit) is a **thirteenth
  consecutive independent confirmation, not a new finding** — 0 active code
  defects, re-verifies FAQPage JSON-LD scoping, both Contact/Planner
  honeypots, WCAG 1.4.10 reflow on `/faq`, canonicals, security headers, and
  live production parity. Moved to `exchange/processed/`.
- **New angle — dead scaffold assets removed.** `public/{next,vercel,window,
  globe,file}.svg` were unreferenced `create-next-app` defaults, publicly
  served on the live domain (e.g. `cyvexly.com/vercel.svg` — third-party
  branding, not a Cyvexly asset). Confirmed zero references via a full
  source grep, then deleted. Verified post-build: all five now 404 on a real
  production server; `icon.svg` (the actual brand mark) still 200.
- **New angle — Web App Manifest (`src/app/manifest.ts`).** The site had
  none. Uses only already-confirmed facts (`site-config.ts` name/tagline,
  shipped brand color tokens `#0f66e0`/`#eef4fa`) and reuses the existing
  `icon.svg` — no new facts, no new raster assets generated this round.
  §4.12 check: Next's own documented special-file convention, not a
  departure. **Verified:** production build emits `/manifest.webmanifest`
  with correct parsed content; `index.html` carries
  `<link rel="manifest" .../>`; live `next start` server on port 5173 serves
  it `200 application/manifest+json`; a real in-app-Browser screenshot of
  Home shows zero visual regression, zero console/network errors.
- `tsc --noEmit`/`lint`/`build` all pass clean (lint's one pre-existing
  warning is in round 42's untouched evidence script).
- Committed and pushed to `origin/main`.
- Cleaned up: stopped the owned `next start` server (verified real listener
  PID via `Get-NetTCPConnection -LocalPort 5173` before stopping), closed
  the owned Browser-pane tab.

### Recommended next workstream

Untried angles not yet swept: a print-stylesheet/print-to-PDF check (low
priority, still not in vision §17 item 10's explicit list); a dedicated
rate-limiting check beyond the honeypot (architecturally tied to the
server-side email delivery this chunk already defers); generating real
raster (PNG) manifest icons at 192/512px if a stronger "Add to Home Screen"
presentation is later judged worthwhile (the current SVG-only icon is spec-
valid but Android install prompts historically prefer PNG — not a defect,
a possible future enhancement). Genuinely Owner-gated items are unchanged:
DNS/domain connection, real email delivery, analytics ownership, exact LLC
name (see `CYVEXLY_OWNER_DIRECTION.md`).

## Round 45 closeout

**Session:** scheduled `cyvexly-builder` task, 2026-09-05, 50-minute hard
time limit (unattended)
**Start source:** `12e43a7` on `main` (pushed, matched `origin/main`)
**Scope:** dispositioned the one new Auditor inbox item (`IFA-2026-09-05-R36`)
and implemented BreadcrumbList JSON-LD, the discoverability follow-up round
43/44 named as untried.
**Completion:** REAL SOURCE ADDITION LANDED — see below.

### What was checked

- `IFA-2026-09-05-R36` (reviewed commit `5331cb3`, round 43's HEAD, one
  commit behind round 44's FAQPage JSON-LD commit) is a **twelfth
  consecutive independent confirmation, not a new finding** — 0 active code
  defects, re-verifies the sitewide Organization JSON-LD across all 20
  routes, both Contact/Planner honeypots, WCAG 1.4.10 reflow at 320px,
  canonicals, security headers, and live production parity against
  `https://cyvexly-studio.onrender.com/`. Moved to `exchange/processed/`.
- **New angle — BreadcrumbList JSON-LD for service-detail and case-study
  routes.** Added `buildBreadcrumbJsonLd()` to `src/lib/structured-data.ts`:
  a small `{name, path}[]` → schema.org `BreadcrumbList`/`ListItem[]`
  builder. Embedded a 3-item Home → listing → detail trail on
  `src/app/services/[slug]/page.tsx` and `src/app/work/[slug]/page.tsx` —
  the two route families one level under a listing page — reusing only
  each route's own existing name/URL (no new facts). §4.12 check:
  `BreadcrumbList` JSON-LD is Google's own documented rich-results pattern
  for hierarchical pages, not a departure.
  **Verified two ways:** (1) real production build output — parsed
  `.next/server/app/services/business-websites.html` and
  `work/aurora-spaces.html`: both carry `Organization` + a correct 3-entry
  `BreadcrumbList` with the right names/absolute URLs; confirmed
  `index.html`/`services.html`/`work.html` still carry only `Organization`
  (no leak to listing/home routes); (2) real CDP navigation against a
  production `next start` server across both detail routes plus their
  listing pages and home: zero console messages, zero network failures,
  correct trail parsed from the live DOM every time. `tsc`/`lint`/`build`
  all pass clean. Script preserved at
  `docs/agent-system/cyvexly/builder/evidence/round-45-breadcrumb-jsonld-check.mjs`.
- **Hot-memory rotation.** Archived round 42's full `CYVEXLY_ACTIVE_
  CHUNK.md` report to
  `docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_42_REPORT.md`, restoring
  the intended latest-three rotation (§7.14) — 43, 44, 45 stay live.
- Committed (`559ffe6`) and pushed to `origin/main`.
- Cleaned up: stopped the owned `next start` server (verified real listener
  PID via `Get-NetTCPConnection -LocalPort 5173`) and the owned headless
  Chrome process tree (verified by exact `chrome-profile-round45`
  `--user-data-dir` command-line match across all child processes before
  stopping), removed the temporary Chrome profile directory under the OS
  temp scratchpad root.

### Recommended next workstream

Untried angles not yet swept: a print-stylesheet/print-to-PDF check (low
priority, not in vision §17 item 10's explicit list); a dedicated
rate-limiting check beyond the honeypot (architecturally tied to the
server-side email delivery this chunk already defers). Organization,
FAQPage, and BreadcrumbList JSON-LD are all now shipped — the next round
should keep looking for genuinely new QA/build angles rather than assuming
the discoverability/QA surface is empty. Genuinely Owner-gated items are
unchanged: DNS/domain connection, real email delivery, analytics ownership,
exact LLC name (see `CYVEXLY_OWNER_DIRECTION.md`).

Round 44 closeout detail is archived at
docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_44_REPORT.md (moved there
round 47 to keep this file under its 12288-byte hot-file cap). Round 44
implemented FAQPage JSON-LD for `/faq`.

Round 43 closeout detail is archived at docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_43_REPORT.md (moved there round 45 to keep this file under its 12288-byte hot-file cap). Round 43 found the site had no structured data at all and added sitewide Organization JSON-LD.

Round 42 closeout detail is archived at docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_42_REPORT.md (moved there round 44). Round 42 found and fixed the Contact form's missing spam-protection honeypot and live-verified the Planner's honeypot for the first time.

Round 41 closeout detail is archived at docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_41_REPORT.md (moved there round 43). Round 41 found no reachable defect (WCAG 1.4.10 reflow/zoom and a Back-button re-check both passed).

Round 40 closeout detail is archived at `docs/archive/chunks/
CYVEXLY_BUILDER_HANDOFF_ROUND_40_REPORT.md` (moved there in round 42). Round
40 found and fixed the Planner step-advance scroll/focus/live-region defect
(`71d233f`).

Round 39 closeout detail is archived at `docs/archive/chunks/
CYVEXLY_BUILDER_HANDOFF_ROUND_39_REPORT.md`. Round 39 found and fixed the
sitewide skip-to-main-content link defect (WCAG 2.4.1). Rounds 38, 37, 36,
35, 33-34, 31-32, and 28-30 are archived at their correspondingly named
files under `docs/archive/chunks/`. The current Chunk 5 scope and Owner
gates are summarized in `CYVEXLY_ACTIVE_CHUNK.md` and
`CYVEXLY_OWNER_DIRECTION.md`.
