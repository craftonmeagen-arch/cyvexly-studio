# Cyvexly App Debt — Round 84 Archive

Moved from `CYVEXLY_APP_DEBT.md` round 87 to keep that file under its
30,720-byte hot-file cap. Preserved verbatim.

## Round 84 — no new defect; FAQ/pricing/response-time/About convergence-check + PATH environment fix

Checked the Auditor inbox first: one new item, `IFA-2026-09-07-R75` (50th
consecutive clean confirmation, "PASS WITH COMMENDATION", 0 action
needed — its "Production Domain Connection" gate line is the same stale
wording rounds 77-83 already noted). Moved to `exchange/processed/`.

**Environment fix (see `CYVEXLY_TOOLS_AND_CAPABILITIES.md`'s round-84
note for full detail):** `pnpm`/`node` were missing from this session's
PowerShell `PATH` (only the Machine `PATH` loads; Node/pnpm live in the
User `PATH`). Fixed by prepending the two real install directories to
`$env:Path` before each toolchain command — a one-line, per-call
workaround, not a real unavailability. Then verified `tsc --noEmit`/
`pnpm run lint`/`pnpm run build` all clean (zero warnings; same
pre-existing round-42 evidence-script lint warning) on unchanged
round-82 source (`19ae224`).

**Convergence-check, fresh surfaces:** field-by-field diffed all 30
`faqLibrary` Q&As (`site-config.ts`) against their source-of-truth data —
deposit splits (50/50 Signal; 40/30/30 Orbit & Nexus) against Pricing's
own "Payment schedule" section (`pricing/page.tsx`); timelines and
revision-round counts against `pricingPackages`; Care-plan pricing
($99/$229/$449) against `carePlans`; the "Brand Starter Kit" add-on
against `addOns`. Traced the "two business days" response-time claim
across About, Contact, FAQ, `processSteps`/`collaborationPromise`, and
both API routes' real confirmation-email copy (`contact/route.ts`,
`planner/route.ts`) — all identical. Re-read the About page against
Owner direction `2026-09-04-14`: logo-led, no founder name/portrait/
biography, matches. **0 defects found** — a genuine negative result
after real cross-file investigation, not skipped work.
**Completion:** DONE WITH PROOF (0 defects found; 0 source change).
No scratch files/processes created this round.
