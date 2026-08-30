# Cyvexly Current State

**Global round:** 8
**Active chunks:** Chunk 3 — Project Planner — UI/state/validation remains built
and verified at `/start`, with real server-side email Owner-blocked; Chunk 4 —
Utility/legal pages — favicon remains fixed, while legal/domain items remain
Owner-blocked. Round 8 revisited closed Chunk 2's portfolio-presentation debt
and closed the reachable Home/Services flat-gradient inconsistency by reusing
the accepted truthful `ConceptPreview` artwork across both surfaces. Native
Chromium keyboard proof also found and closed a Planner validation-focus defect.
**Chunk-local round:** N/A (round 8 revisited a closed-chunk presentation defect
and upgraded Builder visual-proof capability; no chunk was opened or closed).
**Current mission:** The same four Owner-input questions still block the
highest-value remaining work — About founder identity, Privacy/Terms
jurisdiction, production domain + email provider, and the abstract-vs-
commissioned concept-artwork framing question (`CYVEXLY_APP_DEBT.md` items 1,
3, 4, plus Chunk Debt item 2). Do not invent them. CDP native Chromium Tab/Enter
proof now complements round 7's DOM audit; physical hardware and cross-browser
keyboard traversal remain unchecked.
**Accepted source position:** Git repository on `master`. Round 8's product
changes are commits `d04dc9d` (Home + Services reuse `ConceptPreview`) and
`da9c6d9` (Planner first-error focus plus grouped-control error linkage), followed
by canonical documentation/evidence commits. Treat `git log` as the exact
ledger. Builder-owned state is clean at close; pre-existing Auditor/Council
dirty files remain intentionally untouched.

## Immediate orientation

- Run `pnpm install` then `pnpm run dev`, or `pnpm exec next dev --port 5173`.
  Build/verify with `pnpm run build`, `pnpm exec tsc --noEmit`, and
  `pnpm run lint`.
- Read `CYVEXLY_ACTIVE_CHUNK.md`'s round-8 report before planning round 9.
  Round 7's full hot-path snapshot/report is archived at
  `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND7_REPORT.md`.
- Read `CYVEXLY_CHUNK_DEBT.md` and `CYVEXLY_APP_DEBT.md` before touching the
  OG image/`metadataBase`, About, legal pages, Planner delivery route, or
  concept-artwork framing.
- Full unattended page screenshots are now reachable through local Chrome 151
  headless + Chrome DevTools Protocol even though the in-app Browser pane
  remains non-compositing. Use CDP `Emulation.setDeviceMetricsOverride` for
  exact narrow viewports; raw `--window-size=390,...` on Windows can produce a
  misleading crop. Details are in `CYVEXLY_TOOLS_AND_CAPABILITIES.md` and
  `CYVEXLY_WATCH.md`.
- Round 8 verification: lint, clean production build, post-build typecheck,
  real 15-route sweep, opened 1440/768/390 rendered captures, and exact CDP
  geometry/overflow evidence all passed. Native Chromium Tab/Enter traversal at
  1440/390 also passed after the validation-focus fix. Durable evidence is indexed under
  `docs/agent-system/cyvexly/builder/evidence/`.
