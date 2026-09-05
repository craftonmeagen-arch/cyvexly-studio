# Cyvexly Next Builder Handoff

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

## Round 44 closeout

**Session:** scheduled `cyvexly-builder` task, 2026-09-05, 50-minute hard
time limit (unattended)
**Start source:** `5331cb3` on `main` (pushed, matched `origin/main`)
**Scope:** dispositioned the one new Auditor inbox item (`IFA-2026-09-05-R35`)
and implemented FAQPage JSON-LD, the discoverability follow-up round 43
recommended.
**Completion:** REAL SOURCE ADDITION LANDED — see below.

### What was checked

- `IFA-2026-09-05-R35` (reviewed commit `1de36c3`, round 42's HEAD, one
  commit behind round 43's JSON-LD commit) is an **eleventh consecutive
  independent confirmation, not a new finding** — 0 active code defects,
  re-verifies round 42's honeypots, RTL/long-name review-step handling,
  `CYV-IFA-012` contact-layout maintenance, all 20 routes/canonicals/
  security headers, and live production parity. Moved to
  `exchange/processed/`. `tsc --noEmit`/`lint`/`build` re-run clean before
  making any change.
- **New angle — FAQPage JSON-LD for `/faq`.** Added `faqPageJsonLd` to
  `src/lib/structured-data.ts`: flattens the already-published `faqLibrary`
  (11 categories, 30 Q&As) into schema.org `FAQPage`/`Question`/`Answer`
  entities — no new facts invented. Embedded only on
  `src/app/faq/page.tsx`, alongside the existing sitewide `Organization`
  schema (not sitewide itself — Google's documented rich-results pattern
  puts `FAQPage` on the page containing the visible FAQ content). §4.12
  check: standard, well-documented pattern, not a departure.
  **Verified two ways:** (1) real production build output — parsed
  `.next/server/app/faq.html`: both `Organization` and `FAQPage` scripts
  present, `FAQPage.mainEntity` has exactly 30 entries with correct
  first/last question text; confirmed `index.html`/`contact.html`/
  `about.html` still carry only `Organization` (no leak to other routes);
  (2) real CDP navigation against a production `next start` server on
  `/faq` and `/`: zero console messages, zero network failures, correct
  30-entry JSON-LD parse on `/faq`, unchanged single-`Organization` parse
  on `/`. `tsc`/`lint`/`build` all pass clean. Script preserved at
  `docs/agent-system/cyvexly/builder/evidence/round-44-faq-jsonld-check.mjs`.
- **Hot-memory rotation.** Archived rounds 40-41's full `CYVEXLY_ACTIVE_
  CHUNK.md` reports and round 42's full closeout here to their own archive
  files, restoring the intended latest-three rotation (§7.14) in both hot
  files.
- Committed (see Git log) and pushed to `origin/main`.
- Cleaned up: stopped the owned `next start` server (verified real listener
  PID via `Get-NetTCPConnection -LocalPort 5173`) and the owned headless
  Chrome process (verified by exact `chrome-profile-round44`
  `--user-data-dir` command-line match), removed the temporary Chrome
  profile directory under the OS temp scratchpad root.

### Recommended next workstream

Untried angles not yet swept: a print-stylesheet/print-to-PDF check (low
priority, not in vision §17 item 10's explicit list); a dedicated
rate-limiting check beyond the honeypot (architecturally tied to the
server-side email delivery this chunk already defers). Both Organization
and FAQPage schema are now in place — a further candidate would be
`BreadcrumbList` JSON-LD for the service-detail/case-study routes, though
its search-visibility value is smaller than the two already shipped.
Genuinely Owner-gated items are unchanged: DNS/domain connection, real
email delivery, analytics ownership, exact LLC name (see
`CYVEXLY_OWNER_DIRECTION.md`).

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
