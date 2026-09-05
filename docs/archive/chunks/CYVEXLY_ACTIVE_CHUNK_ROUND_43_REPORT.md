# Cyvexly Active Chunk — Round 43 Full Report (Archived Round 46)

Archived from `CYVEXLY_ACTIVE_CHUNK.md` in round 46 to keep the live file
under §7.14's latest-three rotation (44, 45, 46 stay live).

## Round 43 report — global round 43 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R34` (reviewed commit
`3bbb879`, round 41's HEAD — one commit behind round 42's honeypot fix).
Tenth consecutive independent confirmation, not a new finding. Moved to
`exchange/processed/`. Re-ran `tsc`/`lint`/`build` clean before making any
change.

Ran a genuinely new angle: the site had **no structured data (JSON-LD)
anywhere**, even though vision §17's launch outcome explicitly names
"searchable" alongside truthful/contactable/legally coherent. Added a
schema.org `Organization` JSON-LD block to the root layout
(`src/lib/structured-data.ts`), using only Owner-confirmed facts already in
`site-config.ts` — name, domain, email, phone, and Indiana/United States
location (region + country only, no invented street address; no social
profiles, since none are confirmed). §4.12 check: JSON-LD via a `<script
type="application/ld+json">` tag is the standard, well-documented Next.js/
schema.org pattern for business discoverability — not a departure. Verified
in real production build output (`.next/server/app/*.html` across home,
contact, and one dynamic service-detail route: valid parsed JSON with
correct name/phone/email) and live via real CDP navigation against a
production `next start` server across `/`, `/contact`, `/about`, and
`/services/business-websites`: zero console errors, zero network failures,
JSON-LD parses correctly in the real DOM on every route. Script preserved at
`builder/evidence/round-43-jsonld-check.mjs`. `tsc`/`lint`/`build` all pass
clean; committed and pushed.

Also fixed real hot-memory drift found this round: this file had grown to
29313 bytes (near its cap) because rounds 31-39's full reports were never
archived when later rounds landed, violating the intended latest-three
rotation (§7.14). Archived them to
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_31_39_REPORT.md`.

Round 42's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_42_REPORT.md` (moved there
round 45 to restore latest-three rotation). Round 42 found and fixed the
Contact form's missing spam-protection honeypot and live-verified the
Planner's honeypot for the first time; also swept the Planner review step
for RTL/very-long-name overflow with no defect found.

Rounds 40-41 full reports are archived at docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_40_41_REPORT.md (moved there round 44 to restore latest-three rotation). Round 41 closed both of round 40's named QA candidates (WCAG 1.4.10 reflow/zoom, a Back-button re-check) with no defect found. Round 40 found and fixed the Planner step-advance scroll/focus/live-region defect (`71d233f`).

Rounds 31-39 full reports are archived at docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_31_39_REPORT.md (moved there round 43 to restore latest-three rotation). Summarized outcomes remain in CYVEXLY_BUILD_SUMMARY.md and CYVEXLY_APP_DEBT.md.
