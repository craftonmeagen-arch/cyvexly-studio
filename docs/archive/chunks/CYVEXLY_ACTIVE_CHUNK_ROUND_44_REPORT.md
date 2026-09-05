# Archived — CYVEXLY_ACTIVE_CHUNK.md round 44 report

Moved here in round 47 to restore the §7.14 latest-three rotation (45, 46,
47 stay live in the hot file).

## Round 44 report — global round 44 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R35` (reviewed commit
`1de36c3`, round 42's HEAD, one commit behind round 43's JSON-LD feature
commit). Eleventh consecutive independent confirmation — 0 active code
defects, re-verifies round 42's Contact/Planner honeypots, the Planner
RTL/long-name review step, `CYV-IFA-012` contact-layout maintenance, all 20
routes, canonicals, security headers, and live production parity. Not a new
finding. Moved to `exchange/processed/`.

Implemented the FAQPage JSON-LD enhancement round 43 named as the next
natural discoverability angle: added `faqPageJsonLd` to
`src/lib/structured-data.ts`, flattening the existing published `faqLibrary`
copy (11 categories, 30 Q&As — no new facts) into schema.org
`FAQPage`/`Question`/`Answer` entities, embedded only on `/faq`
(`src/app/faq/page.tsx`) alongside the existing sitewide `Organization`
schema. §4.12 check: FAQPage JSON-LD placed on the page containing the
visible FAQ content is Google's own documented rich-results pattern — not a
departure. Verified in real production build output (parsed
`.next/server/app/faq.html`: both scripts present, `FAQPage` has exactly 30
`mainEntity` entries with correct first/last question text; confirmed
`index.html`/`contact.html`/`about.html` still carry only `Organization`,
i.e. no leak) and live via real CDP navigation against a production `next
start` server on `/faq` and `/`: zero console messages, zero network
failures, JSON-LD parses correctly with the expected 30-entry count. Script
preserved at `builder/evidence/round-44-faq-jsonld-check.mjs`. `tsc`/`lint`/
`build` all pass clean; committed and pushed.

Archived rounds 40-41's full reports to
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_40_41_REPORT.md` to restore
the intended latest-three rotation (§7.14) — 42, 43, 44 stay live.
