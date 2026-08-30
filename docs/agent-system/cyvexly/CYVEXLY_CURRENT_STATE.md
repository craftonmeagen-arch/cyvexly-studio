# Cyvexly Current State

**Global round:** 1
**Active chunk:** Chunk 2 — Core marketing pages (Chunk 1 — Foundation & Home closed this round)
**Chunk-local round:** 1
**Current mission:** Continue Chunk 2: build Services, Work (+ case-study
template), Pricing, and Contact pages. The About page is blocked on
Owner-supplied founder identity content (see `CYVEXLY_APP_DEBT.md`) — do not
build it with invented founder details.
**Accepted source position:** Git repository initialized this round on branch
`master`, two commits (Chunk 1 foundation + Home; Chunk 2 `/process` page and
a header breakpoint fix). Next.js 16 + TypeScript + Tailwind v4 app under
`src/`, with the copied Owner packets and `docs/agent-system/cyvexly/` state
files.

## Immediate orientation

- Run `pnpm install` then `pnpm run dev` (or use `.claude/launch.json`,
  configuration `cyvexly-builder`, port `5173`) to see the real app.
- `pnpm run build`, `pnpm exec tsc --noEmit`, and `pnpm run lint` all pass
  clean as of this round.
- Read `CYVEXLY_ACTIVE_CHUNK.md` for the full round-1 report before planning
  round 2.
- Read `CYVEXLY_CHUNK_DEBT.md` and `CYVEXLY_APP_DEBT.md` before building
  deeply on the Home page or About page areas.
- Read `CYVEXLY_WATCH.md` for two fixed tooling defects (lock-script
  encoding, Next.js `agentRules`) and a note on unattended-session screenshot
  limits.
