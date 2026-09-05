# Cyvexly App Debt — Rounds 44-45 Full Detail (Archived)

Archived round 49 to keep `CYVEXLY_APP_DEBT.md` under its 30720-byte
hot-file cap.

## Resolved round 45

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R36`** — a twelfth
  consecutive independent confirmation (reviewed commit `5331cb3`, round
  43's HEAD, one commit behind round 44's FAQPage JSON-LD commit), 0 active
  code defects. Re-verifies the sitewide Organization JSON-LD across all 20
  routes, both Contact/Planner honeypots, WCAG 1.4.10 reflow at 320px,
  canonicals, security headers, and live production parity. Moved to
  `exchange/processed/`.
- **New angle — BreadcrumbList JSON-LD for service-detail and case-study
  routes.** Added `buildBreadcrumbJsonLd()` to `src/lib/structured-data.ts`,
  embedding a 3-item Home → listing → detail trail on
  `src/app/services/[slug]/page.tsx` and `src/app/work/[slug]/page.tsx` —
  reuses only each route's own existing name/URL, no new facts. Verified in
  real production build output (`.next/server/app/services/
  business-websites.html` and `work/aurora-spaces.html`: both carry
  `Organization` + a correct 3-entry `BreadcrumbList`; confirmed
  `index.html`/`services.html`/`work.html` carry only `Organization` — no
  leak to listing/home routes) and live via real CDP navigation against a
  production `next start` server across both detail routes plus their
  listing pages and home: zero console messages, zero network failures.
  `tsc`/`lint`/`build` all pass clean. Script at
  `docs/agent-system/cyvexly/builder/evidence/round-45-breadcrumb-jsonld-check.mjs`.
- **Hot-memory rotation.** Archived round 42's full `CYVEXLY_ACTIVE_
  CHUNK.md` report to
  `docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_42_REPORT.md` and round
  43's full `CYVEXLY_NEXT_BUILDER_HANDOFF.md` closeout to
  `docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_43_REPORT.md` to
  restore the intended latest-three rotation (§7.14) in both files.
- Cleaned up: stopped the owned `next start` server (verified real
  listener PID via `Get-NetTCPConnection -LocalPort 5173`) and the owned
  headless Chrome process tree (verified by exact `chrome-profile-round45`
  `--user-data-dir` command-line match across all child processes),
  removed the temporary Chrome profile directory under the OS temp
  scratchpad root.

## Resolved round 44

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R35`** — an eleventh
  consecutive independent confirmation (reviewed commit `1de36c3`, round
  42's HEAD, one commit behind round 43's JSON-LD commit), 0 active code
  defects. Re-verifies round 42's Contact/Planner honeypots, the RTL/
  long-name Planner review-step stress test, `CYV-IFA-012` contact-layout
  maintenance across three widths, all 20 routes/canonicals/security
  headers, and live production parity. Moved to `exchange/processed/`.
  `tsc --noEmit`/`lint`/`build` re-run clean before making any change.
- **New angle — FAQPage JSON-LD for `/faq`**, the discoverability follow-up
  round 43 named. Added `faqPageJsonLd` to `src/lib/structured-data.ts`,
  flattening the already-published `faqLibrary` (11 categories, 30 Q&As —
  no new facts) into schema.org `FAQPage`/`Question`/`Answer` entities,
  embedded only on `src/app/faq/page.tsx` alongside the existing sitewide
  `Organization` schema. Verified in real production build output
  (`.next/server/app/faq.html`: both scripts present, `FAQPage` has exactly
  30 `mainEntity` entries with correct first/last question; confirmed
  `index.html`/`contact.html`/`about.html` still carry only `Organization`
  — no leak to other routes) and live via real CDP navigation against a
  production `next start` server on `/faq` and `/`: zero console messages,
  zero network failures, correct 30-entry JSON-LD parse. `tsc`/`lint`/
  `build` all pass clean. Script at
  `docs/agent-system/cyvexly/builder/evidence/round-44-faq-jsonld-check.mjs`.
- **Hot-memory rotation.** Archived rounds 40-41's full `CYVEXLY_ACTIVE_
  CHUNK.md` reports to
  `docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_40_41_REPORT.md` to
  restore the intended latest-three rotation (§7.14) — 42, 43, 44 stay
  live; live file is now 17057 bytes (cap 30720).
- Cleaned up: stopped the owned `next start` server (verified real
  listener PID via `Get-NetTCPConnection -LocalPort 5173`) and the owned
  headless Chrome process (verified by exact `chrome-profile-round44`
  `--user-data-dir` command-line match), removed the temporary Chrome
  profile directory under the OS temp scratchpad root.
