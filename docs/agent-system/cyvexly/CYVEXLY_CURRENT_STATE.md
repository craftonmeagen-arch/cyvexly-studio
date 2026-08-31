# Cyvexly Current State

**Global round:** 9
**Active chunks:** Chunk 3 — Project Planner — UI/state/validation remains built
and verified at `/start`, with real server-side email Owner-blocked; Chunk 4 —
Utility/legal pages — favicon remains fixed, while legal/domain items remain
Owner-blocked. Round 9 fixed the newly directed cross-computer apparent-scale
sensitivity at the shared design-system layer and materially deepened the
glassy/futuristic shared surfaces toward the accepted mockup.
**Chunk-local round:** N/A (round 9 revisited shared cross-chunk responsive and
visual-system behavior; no chunk was opened or closed).
**Current mission:** Owner confirmation is needed on the original second
computer for round 9's scale fix and on whether the new shared glass pass has
reached the desired mockup fidelity. The same four Owner-input questions block the
highest-value remaining work — About founder identity, Privacy/Terms
jurisdiction, production domain + email provider, and the abstract-vs-
commissioned concept-artwork framing question (`CYVEXLY_APP_DEBT.md` items 1,
3, 4, plus Chunk Debt item 2). Do not invent them. CDP native Chromium Tab/Enter
proof now complements round 7's DOM audit; physical hardware and cross-browser
keyboard traversal remain unchecked.
**Accepted source position:** Git repository on `master`. Round 9 commits
`8ec27c1` and `2d82b0b` stabilize the 16px design root and pixel breakpoints,
upgrade shared glass/header/CTA/orbit visuals, and remove minimum-font mobile
overflow in Pricing and Process. Treat `git log` as the exact ledger.
Builder-owned state is clean at close; pre-existing Council dirty files remain
intentionally untouched.

## Immediate orientation

- Run `pnpm install` then `pnpm run dev`, or `pnpm exec next dev --port 5173`.
  Build/verify with `pnpm run build`, `pnpm exec tsc --noEmit`, and
  `pnpm run lint`.
- Read `CYVEXLY_ACTIVE_CHUNK.md`'s round-9 report before planning round 10.
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
- Round 9 verification: lint, clean production build, post-build typecheck,
  real 16-route/status sweep, opened 1440/1024-DPR1.5/720/390 renders, exact
  normal-vs-custom-24px profile geometry, DPR/effective-viewport controls, 132
  Chrome/Edge route/profile/viewport cases, four mobile-menu interaction cases,
  and a 33-case minimum-font follow-up passed. Durable evidence is indexed under
  `docs/agent-system/cyvexly/builder/evidence/`.
