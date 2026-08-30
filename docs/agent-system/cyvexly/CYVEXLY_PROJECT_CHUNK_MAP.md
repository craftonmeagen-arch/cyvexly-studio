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

## Chunk 2 — Core marketing pages (CLOSED, opened round 1, extended round 2, closed round 3)

- **Outcome:** Services, Work/Portfolio (+ case-study template), Pricing,
  Process, About, and general Contact pages, reusing Chunk 1's design system
  and `src/lib/site-config.ts`.
- **Progress:** `/process` (round 1), `/services`, `/pricing`, `/contact`,
  `/work` (+ filterable grid), `/work/[slug]` case-study template with three
  concept case studies (Aurora Spaces, Nexora Systems, Vellora Care) all
  built and verified round 2. Five of six pages done.
- **Remaining/bounded:** `/about` is the only page not built — it needs a
  real founder name, first-person story, and portrait from the Owner (vision
  §6.8), which no Builder round may invent. This is an honestly bounded gap
  per the chunk's own closure boundary ("resolved or explicitly and honestly
  bounded"), not a reachable defect. See `CYVEXLY_APP_DEBT.md` item 1.
  **Closed round 3:** independently re-verified via a live route sweep
  (`curl` against all six pages plus `/about`) that `/`, `/process`,
  `/services`, `/pricing`, `/contact`, `/work` (+3 case studies) all return
  200 and `/about` still 404s. The founder-identity gap is unchanged and
  still not a Builder-reachable decision (no new Owner input arrived this
  round). Per the chunk's own closure boundary ("resolved or explicitly and
  honestly bounded"), this satisfies closure — closed with the About page
  carried forward as `CYVEXLY_APP_DEBT.md` item 1, not as open chunk debt.
  Closed does not mean frozen: reopens automatically once Owner-supplied
  founder identity arrives.
- **Known visual gaps vs. mockups** (found via round-2 mockup comparison,
  see `CYVEXLY_CHUNK_DEBT.md`): Services/Pricing pages are content-complete
  and match vision text closely, but use denser text-only cards where
  `mockups/02-services-pricing.png` shows more compact icon-led cards — the
  Services page gained icon badges in round 2, Pricing did not yet.
- Non-goal: Project Planner (its own chunk, given its multi-step form
  complexity).

## Chunk 3 — Project Planner (NOT YET OPENED)

- Likely outcome: the nine-step conversational Planner (vision §6.9 and §9),
  submission handling, confirmation state, and summary email — scoped once a
  form/email-delivery approach is chosen and, if needed, authorized (§4.12
  Outcome Reachability Check applies: this needs a foundational decision
  about the email-delivery/backend mechanism before implementation, not just
  Builder judgment).

## Chunk 4 — Utility, legal & launch readiness (OPENED round 2, IN PROGRESS)

- **Outcome:** 404, FAQ library, Privacy/Terms/Accessibility pages, favicon
  and social-sharing assets, and the launch-readiness checklist in vision §15.
- **Progress (round 2):** custom `/not-found` page (replaces Next.js default,
  used for both unmatched routes and `notFound()` calls), full `/faq`
  library (11 categories, 30 Q&As per vision §6.11), `/accessibility`
  statement, and a hand-authored SVG favicon (`src/app/icon.svg`,
  build-verified but not pixel-visually confirmed — see `CYVEXLY_WATCH.md`)
  all built.
- **Deliberately not attempted this round:** `/privacy` and `/terms`. Unlike
  Accessibility (jurisdiction-agnostic — a WCAG target + contact route),
  Privacy and Terms need jurisdiction-specific legal language (business
  location, applicable consumer-protection/data-privacy regime) that no
  Builder round has and must not invent — this is the same class of gap as
  the About page's founder identity: Owner-supplied fact, not a reversible
  implementation detail. See `CYVEXLY_APP_DEBT.md` item 3.
- **Remaining:** a real social-sharing (Open Graph) image, a visual
  pixel-check of the new favicon in an attended session, and a
  launch-readiness checklist pass (vision §15) once more of the site exists.

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
