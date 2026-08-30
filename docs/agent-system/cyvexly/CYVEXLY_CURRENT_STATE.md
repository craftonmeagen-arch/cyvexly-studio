# Cyvexly Current State

**Global round:** 4
**Active chunk:** Chunk 2 — Core marketing pages — CLOSED round 3. Chunk 3
— Project Planner — opened round 4; full UI/state/validation built and
verified at `/start`, real "sent from Cyvexly" confirmation email still
blocked on the domain + email-provider decision. Chunk 4 — Utility/legal
pages — opened round 2, in progress, unchanged this round.
**Chunk-local round:** Chunk 3 round 1
**Current mission:** Route the domain + transactional-email-provider
decision to the Owner (`CYVEXLY_APP_DEBT.md` item 4) so the Planner's
real confirmation-email route can be built and Chunk 3 formally closed.
In parallel or after: get a real pixel-level screenshot of `/start`
(desktop/tablet/mobile) once an attended session or reviewer round is
available — this round's verification is thorough on structure,
interaction, validation, and overflow, but has no pixel-level visual
proof; confirm the favicon's 16px legibility problem in a real browser
tab (`CYVEXLY_CHUNK_DEBT.md` item 4, open since round 3); continue Chunk
4's remaining items. Three Owner-input requests still block real work:
About-page founder identity, Privacy/Terms jurisdiction, and the
domain/email-provider decision (`CYVEXLY_APP_DEBT.md` items 1, 3, 4) — do
not invent any of them.
**Accepted source position:** Git repository on branch `master`. Round 4
landed as one or more commits (Project Planner UI at `/start`, a real
mobile CSS-grid overflow fix found and fixed during verification, and
documentation updates including archiving round 3's full report) after
round 3's commits — **treat `git log` as the source of truth for the
exact count and hashes**; this prose is a summary, not a ledger, and will
go stale the moment another commit lands. Working tree is clean of
Builder-owned changes at close; only the same pre-existing Auditor/
Council-owned files remain uncommitted (correctly left untouched across
every round — see `CYVEXLY_WATCH.md`).

## Immediate orientation

- Run `pnpm install` then `pnpm run dev` (or use `.claude/launch.json`,
  configuration `cyvexly-builder`, port `5173`) to see the real app.
- `pnpm run build`, `pnpm exec tsc --noEmit`, and `pnpm run lint` all pass
  clean as of this round (lint required one scoped, commented
  `eslint-disable` pair for a new `react-hooks/set-state-in-effect`
  false positive on a legitimate `localStorage`-restore pattern — see
  `CYVEXLY_ACTIVE_CHUNK.md`'s round-4 report for why).
- Read `CYVEXLY_ACTIVE_CHUNK.md`'s round-4 report before planning round
  5 — it includes a real CSS Grid "blowout" mobile-overflow bug that was
  found and fixed during verification, worth knowing before touching any
  future `lg:`-only multi-column grid layout containing a
  horizontally-scrolling descendant.
- Read `CYVEXLY_CHUNK_DEBT.md` and `CYVEXLY_APP_DEBT.md` before building
  deeply on Services/Pricing (known visual-density gaps vs. mockups), the
  favicon (16px legibility finding, still open), the OG image/
  `metadataBase`, the About page, legal pages, or the Planner's
  email-delivery route.
- Read `CYVEXLY_WATCH.md` for round-4 findings: the `computer` screenshot
  limitation persisted (re-confirmed, not just assumed from old notes);
  the CSS Grid min-width blowout bug and its root cause/fix.
