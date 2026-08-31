# Cyvexly Current State

**Global round:** 11
**Active chunks:** Chunk 3 — Project Planner — UI/state/validation remains built
and verified at `/start`, with real server-side email Owner-blocked; Chunk 4 —
Utility/legal pages — favicon remains fixed, while legal/domain items remain
Owner-blocked. Round 11 accepted and hardened the Owner-supplied Home hero
showcase video as the next active glass/futuristic-fidelity slice.
**Chunk-local round:** N/A (round 11 revisited shared Home visual-system
behavior; no chunk was opened or closed).
**Current mission:** Owner confirmation is still needed on the original second
computer for round 9's scale fix and on whether the Home showcase video plus
round 10's inset glass/icon structure now meet the desired mockup fidelity. The
same four Owner-input questions block the highest-value
remaining content/integration work — About founder identity, Privacy/Terms
jurisdiction, production domain + email provider, and the abstract-vs-
commissioned concept-artwork framing question (`CYVEXLY_APP_DEBT.md` items 1,
3, 4, plus Chunk Debt item 2). Do not invent them.
**Accepted source position:** Git repository on `master`. Round 11 product commit
`34a5bd3` replaces the Home orbit with the Owner-supplied 30-second showcase
media, poster fallback, accessible play/pause behavior, reduced-motion/data-
saver holds, and responsive glass framing. Treat `git log` as the exact ledger.
Builder-owned source is committed; canonical docs/evidence are updated at close.
Pre-existing Council dirty files remain intentionally untouched.

## Immediate orientation

- Run `pnpm install` then `pnpm run dev`, or `pnpm exec next dev --port 5173`.
  Build/verify with `pnpm run build`, `pnpm exec tsc --noEmit`, and
  `pnpm run lint`. If 5173 is occupied, prove exact ownership before stopping
  anything; round 10 found an unrelated pre-existing EduAILenz Vite process and
  safely used 5183 instead.
- Read `CYVEXLY_ACTIVE_CHUNK.md`'s round-11 report before planning round 12.
  Round 7's full hot-path snapshot/report is archived at
  `docs/archive/chunks/CYVEXLY_CHUNK3_ROUND7_REPORT.md`.
- Read `CYVEXLY_CHUNK_DEBT.md` and `CYVEXLY_APP_DEBT.md` before touching the
  OG image/`metadataBase`, About, legal pages, Planner delivery route, or
  concept-artwork framing.
- Full unattended page screenshots are reachable through local Chrome 151
  headless + Chrome DevTools Protocol. Use
  `Emulation.setDeviceMetricsOverride` for exact narrow viewports; raw
  `--window-size=390,...` on Windows can produce a misleading crop.
- Round 11 verification: lint, production build, post-build typecheck, opened
  1440/768/390 renders, normal pause/loop behavior, reduced-motion and save-data
  still states with explicit-play recovery, native Enter, 13 route statuses,
  12 phone semantic/overflow cases, and media byte-range delivery all passed.
  Durable evidence is indexed under `docs/agent-system/cyvexly/builder/evidence/`.
