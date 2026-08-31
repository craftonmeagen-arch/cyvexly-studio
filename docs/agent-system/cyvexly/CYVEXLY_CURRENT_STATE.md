# Cyvexly Current State

**Global round:** 14
**Active chunks:** Chunk 3 — Project Planner — UI/state/validation remains built
and verified at `/start`, with real server-side email Owner-blocked; Chunk 4 —
Utility/legal pages — favicon remains fixed, while legal/domain items remain
Owner-blocked. Round 14 revisited closed Chunk 2 to add the vision-required
five-route service-detail system and safe Planner preselection.
**Chunk-local round:** N/A (round 14 revisited bounded core-marketing scope;
no chunk was opened or closed).
**Current mission:** Owner confirmation is still needed on the original second
computer for round 9's scale fix and on whether the Home showcase video plus
rounds 10-13's inset glass, icon, diagram, route, and final-CTA structures meet the
desired mockup fidelity. The
same four Owner-input questions block the highest-value
remaining content/integration work — About founder identity, Privacy/Terms
jurisdiction, production domain + email provider, and the abstract-vs-
commissioned concept-artwork framing question (`CYVEXLY_APP_DEBT.md` items 1,
3, 4, plus Chunk Debt item 2). Do not invent them.
**Accepted source position:** Git repository on `master`. Round 14 product commit
`930e050` adds five static service-detail journeys and an editable,
saved-draft-safe Planner handoff. Round 13 commit `1df0203` remains the Home
final-CTA composition; Round 12 commit `13d3673` remains the Home mid-page
diagram/process system; Round 11 commit `34a5bd3` is the accepted hero video
integration. Treat `git log` as the exact ledger.
Builder-owned source is committed; canonical docs/evidence are updated at close.
Pre-existing Council dirty files remain intentionally untouched.

## Immediate orientation

- Run `pnpm install` then `pnpm run dev`, or `pnpm exec next dev --port 5173`.
  Build/verify with `pnpm run build`, `pnpm exec tsc --noEmit`, and
  `pnpm run lint`. If 5173 is occupied, prove exact ownership before stopping
  anything; round 10 found an unrelated pre-existing EduAILenz Vite process and
  safely used 5183 instead.
- Read `CYVEXLY_ACTIVE_CHUNK.md`'s round-14 report before planning round 15.
  Round 7's full hot-path snapshot/report is archived at
  `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND7_REPORT.md`.
- Read `CYVEXLY_CHUNK_DEBT.md` and `CYVEXLY_APP_DEBT.md` before touching the
  OG image/`metadataBase`, About, legal pages, Planner delivery route, or
  concept-artwork framing.
- Full unattended page screenshots are reachable through local Chrome 151
  headless + Chrome DevTools Protocol. Use
  `Emulation.setDeviceMetricsOverride` for exact narrow viewports; raw
  `--window-size=390,...` on Windows can produce a misleading crop.
- Round 14 verification: lint, production build, post-build typecheck, all five
  service routes, exact 1440/768/390 renders, 320px and 24px-root stress,
  Planner mapping/saved-draft precedence, reduced motion, semantics, and native
  Services → detail → Planner navigation all passed. Durable evidence
  is indexed under `docs/agent-system/cyvexly/builder/evidence/`.
