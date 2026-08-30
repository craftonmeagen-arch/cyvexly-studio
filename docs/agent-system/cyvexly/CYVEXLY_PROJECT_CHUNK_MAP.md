# Cyvexly Project Chunk Map

**Status:** ACTIVE — created in global round 1.

Broad, provisional map from `CYVEXLY_VISION_PLAN.md`, the assignment, and current
source reality. Chunks may be split, merged, reordered, or reopened as evidence
requires.

## Chunk 1 — Foundation & Home (ACTIVE)

- **Outcome:** A real, running Next.js/TypeScript/Tailwind application exists as
  source truth, carrying the cyber-arctic design system (color tokens,
  typography, glass/grid utilities, reusable header/footer/button/FAQ
  components), with a complete, verified Home page.
- **Relationship to project:** Everything else in the sitemap builds on this
  foundation and its component library.
- **Likely closure boundary:** Home page sections match the vision (§6.1) and
  `mockups/01-home.png` direction; build/lint/typecheck pass; real dev-server
  rendering and interaction are verified; work is committed as git source
  truth.
- **Closeout reference:** see the round report in `CYVEXLY_ACTIVE_CHUNK.md`
  (global round 1).

## Chunk 2 — Core marketing pages (NOT YET OPENED)

- Likely outcome: Services, Work/Portfolio (+ case-study template), Pricing,
  Process, About, and general Contact pages, reusing Chunk 1's design system
  and `src/lib/site-config.ts`.
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
- Full visual screenshot comparison against the mockups is currently only
  reachable from an attended session with a displayable browser pane (see
  `CYVEXLY_CHUNK_DEBT.md`).
