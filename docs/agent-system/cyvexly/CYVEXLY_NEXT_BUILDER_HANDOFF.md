# Cyvexly Next Builder Handoff

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

## Round 43 closeout

**Session:** scheduled `cyvexly-builder` task, 2026-09-05, 50-minute hard
time limit (unattended)
**Start source:** `1de36c3` on `main` (pushed, matched `origin/main`)
**Scope:** dispositioned the one new Auditor inbox item (`IFA-2026-09-05-R34`)
and implemented a genuinely new reachable QA/build angle: sitewide
structured data (JSON-LD), which was entirely absent despite vision §17
naming "searchable" as a launch requirement.
**Completion:** REAL SOURCE ADDITION LANDED — see below.

### What was checked

- `IFA-2026-09-05-R34` (reviewed commit `3bbb879`, round 41's HEAD, one
  commit behind round 42's honeypot fix) is a **tenth consecutive
  independent confirmation, not a new finding.** Moved to
  `exchange/processed/`. `tsc --noEmit`/`lint`/`build` re-run clean before
  making any change.
- **New angle — structured data (JSON-LD).** Grepped the whole `src/` tree
  for `application/ld+json`/`schema.org`/`LocalBusiness` and found zero
  matches — the site had no structured data at all. Vision §17's launch
  outcome explicitly names "searchable" alongside truthful/contactable/
  legally coherent, and vision §17 item 2 covers "production discovery"
  (metadata/canonical/sitemap). §4.12 check: schema.org `Organization`
  JSON-LD via a `<script type="application/ld+json">` tag is the
  well-established, documented Next.js pattern for business
  discoverability — not a departure from normal practice, and needs no
  credentials or Owner authorization.
  **Implemented** in a new `src/lib/structured-data.ts`, embedded once in
  `src/app/layout.tsx` (renders on every route). Uses **only
  Owner-confirmed facts** already in `site-config.ts`: name ("Cyvexly
  Studio"), `url`, `logo` (the existing `/icon.svg`), `telephone`
  (`+13175725780`), `email` (`design@cyvexly.com`), and
  `address: { addressRegion: "IN", addressCountry: "US" }` — region and
  country only, deliberately omitting any street address since none is
  Owner-confirmed. No social profiles (`sameAs`) since none are confirmed
  either.
  **Verified two ways:** (1) real production build output — parsed the
  generated `<script type="application/ld+json">` block out of
  `.next/server/app/index.html`, `contact.html`, and
  `services/business-websites.html` and confirmed valid JSON with the
  correct name/phone/email on all three; (2) real CDP navigation against a
  production `next start` server across `/`, `/contact`, `/about`, and
  `/services/business-websites` — zero console messages, zero network
  failures (status ≥400), and `JSON.parse()` of the live DOM's script tag
  succeeds with the correct fields every time. `tsc`/`lint`/`build` all
  pass clean. Script preserved at
  `docs/agent-system/cyvexly/builder/evidence/round-43-jsonld-check.mjs`.
- **Hot-memory drift fix.** `CYVEXLY_ACTIVE_CHUNK.md` had grown to 29313
  bytes (near its ~30720-byte cap) because rounds 31-39's full round
  reports were never archived once later rounds landed — a violation of
  the intended §7.14 latest-three rotation that had gone unnoticed for
  roughly a dozen rounds. Archived them verbatim to
  `docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_31_39_REPORT.md`; the
  live file is now 18288 bytes with only rounds 40-43 live, matching the
  intended rotation again.
- Committed (see Git log) and pushed to `origin/main`.
- Cleaned up: stopped the owned `next start` server (verified real listener
  PID via `Get-NetTCPConnection -LocalPort 5173`) and the owned headless
  Chrome process tree (verified by exact `chrome-profile-round43`
  `--user-data-dir` command-line match across all child processes before
  stopping), removed the temporary Chrome profile directory under the OS
  temp scratchpad root.

### Recommended next workstream

Untried angles not yet swept: a print-stylesheet/print-to-PDF check (not
part of vision §17 item 10's explicit list, low priority); a dedicated
rate-limiting check beyond the honeypot (architecturally tied to the
server-side email delivery this chunk already defers); **FAQPage JSON-LD**
for the existing `/faq` content — a natural extension of this round's
Organization schema, using only the already-published `faqLibrary` copy in
`site-config.ts` (no new facts needed), which could earn FAQ rich-result
eligibility in search. Genuinely Owner-gated items are unchanged: DNS/domain
connection, real email delivery, analytics ownership, exact LLC name (see
`CYVEXLY_OWNER_DIRECTION.md`).

Round 42 closeout detail is archived at docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_42_REPORT.md (moved there round 44 to keep this file under its 12288-byte hot-file cap; latest-three rule: 42, 43, 44 stay live). Round 42 found and fixed the Contact form's missing spam-protection honeypot and live-verified the Planner's honeypot for the first time.

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
