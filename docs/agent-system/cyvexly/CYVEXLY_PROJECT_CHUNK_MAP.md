# Cyvexly Project Chunk Map

**Status:** ACTIVE — created in global round 1.

Broad, provisional map from `CYVEXLY_VISION_PLAN.md`, the assignment, and current
source reality. Chunks may be split, merged, reordered, or reopened as evidence
requires.

## Chunk 1 — Foundation & Home (CLOSED, round 1)

- **Outcome:** A real, running Next.js/TypeScript/Tailwind application exists
  as source truth, carrying the cyber-arctic design system (color tokens,
  typography, glass/grid utilities, reusable header/footer/button/FAQ
  components), with a complete, verified Home page.
- **Closure evidence:** build/lint/typecheck clean; real dev-server content,
  console/network, and interaction verified; a real tablet-width nav overlap
  bug was found (from concurrently-published Auditor screenshots) and fixed;
  committed as git source truth. See the round-1 report in
  `CYVEXLY_ACTIVE_CHUNK.md`.
- Closed does not mean frozen — later evidence (e.g. a full Auditor visual
  review) may reopen it.

## Chunk 2 — Core marketing pages (ACTIVE, opened round 1)

- **Outcome:** Services, Work/Portfolio (+ case-study template), Pricing,
  Process, About, and general Contact pages, reusing Chunk 1's design system
  and `src/lib/site-config.ts`.
- **Progress:** `/process` built and verified in round 1 (see
  `CYVEXLY_ACTIVE_CHUNK.md`). Services, Work, Pricing, About, Contact remain.
- **Known gap:** the About page needs a real founder name, first-person
  story, and portrait from the Owner (vision §6.8) — this is Owner-supplied
  factual content, not a detail a Builder may invent. Route this rather than
  fabricate a founder identity; see `CYVEXLY_APP_DEBT.md`.
- Non-goal: Project Planner (its own chunk, given its multi-step form
  complexity).

## Chunk 3 — Project Planner (NOT YET OPENED)

- Likely outcome: the nine-step conversational Planner (vision §6.9 and §9),
  submission handling, confirmation state, and summary email — scoped once a
  form/email-delivery approach is chosen and, if needed, authorized.

## Chunk 4 — Utility, legal & launch readiness (NOT YET OPENED)

- Likely outcome: 404, FAQ library, Privacy/Terms/Accessibility pages, favicon
  and social-sharing assets, and the launch-readiness checklist in vision §15.

## Cross-chunk notes

- Payment/proposal workflow (vision §8) and any external service integration
  are foundational/authorization-sensitive; route through §4.12 Outcome
  Reachability Check before committing to a specific provider integration.
- Full visual screenshot comparison against the mockups is not reliably
  reachable from an unattended Builder session on its own (no working
  `computer` screenshot in that mode — see `CYVEXLY_WATCH.md`), but round 1
  found that a concurrently-running Auditor round may publish real rendered
  screenshots to the shared durable evidence root that a Builder can read and
  use. Do not assume that evidence will always be available; check for it,
  and route to an attended session or Auditor/Council when it isn't.
