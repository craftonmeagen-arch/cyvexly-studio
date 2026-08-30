# Cyvexly Current State

**Global round:** 2
**Active chunk:** Chunk 2 — Core marketing pages (effectively complete except
the Owner-blocked About page); Chunk 4 — Utility/legal pages opened early and
in progress.
**Chunk-local round:** Chunk 2 round 2 / Chunk 4 round 1
**Current mission:** Chunk 2 is down to one honestly-bounded item (About page
needs Owner-supplied founder identity — do not invent it). The next Builder
should independently verify this and may close Chunk 2. Chunk 4 has three of
its five known items done (404, FAQ, Accessibility); Privacy/Terms are
blocked on Owner-supplied jurisdiction facts (see `CYVEXLY_APP_DEBT.md`
item 3) — do not invent a jurisdiction. Favicon/social-sharing assets and a
launch-readiness pass remain. Chunk 3 (Project Planner) is not yet opened and
needs an Outcome Reachability Check (§4.12) for its email-delivery approach
before implementation.
**Accepted source position:** Git repository on branch `master`. As of round 1
close there were 7 commits (5 labeled "Round 1 (cont.)" — the session that
produced them continued working past its own round-1 report's stated commit
count without renumbering the global round; treat `git log` as the source of
truth over any stale prose count). Round 2's changes (this round) are
uncommitted in the working tree as of this state update — see the round 2
report in `CYVEXLY_ACTIVE_CHUNK.md` and the round's own git accountability
section for what's about to be committed.

## Immediate orientation

- Run `pnpm install` then `pnpm run dev` (or use `.claude/launch.json`,
  configuration `cyvexly-builder`, port `5173`) to see the real app.
- `pnpm run build`, `pnpm exec tsc --noEmit`, and `pnpm run lint` all pass
  clean as of this round.
- Read `CYVEXLY_ACTIVE_CHUNK.md` for the full round-2 report before planning
  round 3.
- Read `CYVEXLY_CHUNK_DEBT.md` and `CYVEXLY_APP_DEBT.md` before building
  deeply on Services/Pricing (known visual-density gaps vs. mockups), the
  About page, or legal pages.
- Read `CYVEXLY_WATCH.md` for two round-2 findings worth knowing before
  further work: `computer` click/type actions are non-functional (not just
  screenshots) in this unattended session — use `javascript_tool`-dispatched
  real DOM events instead; and Next.js 16 dynamic `params` is a Promise that
  a hand-written sync type will typecheck/build but break at runtime.
