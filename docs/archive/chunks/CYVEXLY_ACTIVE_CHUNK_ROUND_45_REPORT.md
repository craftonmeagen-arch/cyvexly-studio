# Cyvexly Active Chunk — Round 45 full report (archived round 48)

Archived from `CYVEXLY_ACTIVE_CHUNK.md` in round 48 to restore the
intended latest-three rotation (§7.14).

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

Archived round 42's full report to
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_42_REPORT.md` to restore
the intended latest-three rotation (§7.14) — 43, 44, 45 stayed live at
that time.
