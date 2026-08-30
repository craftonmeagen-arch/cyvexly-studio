# Cyvexly Current State

**Global round:** 1
**Active chunk:** Chunk 1 — Foundation & Home
**Chunk-local round:** 1
**Current mission:** Chunk 1 is functionally complete (foundation + Home page,
verified). Next Builder should independently inspect it, then most likely open
Chunk 2 (core marketing pages) per `CYVEXLY_PROJECT_CHUNK_MAP.md`.
**Accepted source position:** Git repository initialized this round on branch
`master`; see the round-1 commit for the accepted source snapshot (Next.js 16 +
TypeScript + Tailwind v4 app under `src/`, with the copied Owner packets and
`docs/agent-system/cyvexly/` state files).

## Immediate orientation

- Run `pnpm install` then `pnpm run dev` (or use `.claude/launch.json`,
  configuration `cyvexly-builder`, port `5173`) to see the real app.
- `pnpm run build`, `pnpm exec tsc --noEmit`, and `pnpm run lint` all pass
  clean as of round 1.
- Read `CYVEXLY_ACTIVE_CHUNK.md` for the full round-1 report before planning
  round 2.
- Read `CYVEXLY_CHUNK_DEBT.md` — it lists the reachable follow-up items round 1
  intentionally left open (other sitemap pages, full visual screenshot
  comparison, mobile-menu route smoke test once those pages exist).
