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
  and match vision text closely, but use denser cards than
  `mockups/02-services-pricing.png`'s more compact layout — both pages now
  have icon badges (Services round 2, Pricing round 3); the density/framing
  difference itself remains a deliberate adaptation, not fixed.
- **Round 5, revisiting closed-chunk debt (closed does not mean frozen):**
  rebuilt `/process`'s steps section as a connected vertical timeline with
  numbered circle badges, added a "Typical timing" table and an "Our
  collaboration promise" panel, matching `mockups/04-process-planner.png`'s
  visual pattern (`CYVEXLY_CHUNK_DEBT.md` item 1 — now resolved). Also
  replaced the Work grid/case-study flat gradients with three distinct,
  hand-authored abstract SVG compositions per concept project, grounded in
  each project's own already-written creative "decisions" and palette
  (`CYVEXLY_CHUNK_DEBT.md` item 2 — partially resolved; real photographic/
  screen-sequence imagery, what both the Auditor and Council explicitly
  asked for, remains open pending an Owner framing decision — see
  `CYVEXLY_ACTIVE_CHUNK.md`'s round-5 report).
- Non-goal: Project Planner (its own chunk, given its multi-step form
  complexity).

## Chunk 3 — Project Planner (OPENED round 4, IN PROGRESS)

- **Outcome:** the nine-step conversational Planner (vision §6.9 and §9) at
  `/start`, with a working real transactional-email-based confirmation once
  authorized (§4.12 Outcome Reachability Check, run round 3: needs a
  foundational domain + email-provider decision, not just Builder judgment).
- **Progress (round 4):** the full UI/state/validation is built and verified
  — all nine steps, per-step required-field validation with "not sure —
  recommend it" escape hatches (vision §6.9), conditional questions (an
  "Other" goal text field on step 3, a feature-detail follow-up on step 5),
  a review/summary step with per-group edit links, required
  acknowledgement/consent checkboxes, a spam-protection honeypot, and a
  client-side "save & continue later" draft via `localStorage`. Submission
  reuses Contact's `mailto:` interim bridge, explicitly labeled as not
  satisfying the "confirmation email sent from Cyvexly" requirement.
- **Remaining:** the real server-side email-delivery route, blocked on the
  domain + transactional-email-provider decision (`CYVEXLY_APP_DEBT.md`
  item 4, unchanged); a real pixel-level screenshot of `/start` (this
  round's own session type still cannot screenshot a live browser tab —
  see `CYVEXLY_WATCH.md`).

## Chunk 4 — Utility, legal & launch readiness (OPENED round 2, IN PROGRESS)

- **Outcome:** 404, FAQ library, Privacy/Terms/Accessibility pages, favicon
  and social-sharing assets, and the launch-readiness checklist in vision §15.
- **Progress (round 2):** custom `/not-found` page (replaces Next.js default,
  used for both unmatched routes and `notFound()` calls), full `/faq`
  library (11 categories, 30 Q&As per vision §6.11), `/accessibility`
  statement, and a hand-authored SVG favicon (`src/app/icon.svg`,
  build-verified but not pixel-visually confirmed — see `CYVEXLY_WATCH.md`)
  all built.
- **Progress (round 3):** `robots.txt` and a site-wide no-index default
  (vision §15's "no accidental preview indexing"), a real on-brand
  social-sharing (Open Graph) image asset (`opengraph-image.tsx`, its
  metadata wiring correctly still blocked on the domain decision — see
  `CYVEXLY_APP_DEBT.md` item 2), and a first full launch-readiness pass
  against all 14 items in vision §15 (see `CYVEXLY_ACTIVE_CHUNK.md`'s
  round-3 report for the item-by-item result).
- **Deliberately not attempted:** `/privacy` and `/terms`. Unlike
  Accessibility (jurisdiction-agnostic — a WCAG target + contact route),
  Privacy and Terms need jurisdiction-specific legal language (business
  location, applicable consumer-protection/data-privacy regime) that no
  Builder round has and must not invent — this is the same class of gap as
  the About page's founder identity: Owner-supplied fact, not a reversible
  implementation detail. See `CYVEXLY_APP_DEBT.md` item 3.
- **Remaining:** `/privacy`/`/terms` (Owner-blocked, above), `metadataBase`/
  `sitemap.xml`/canonical URLs (domain-blocked, `CYVEXLY_APP_DEBT.md` item
  2), and a real attended-session pixel confirmation of the favicon — round
  3 found a genuine 16px legibility concern via a proxy-rendering method
  (not a live browser tab) that needs independent confirmation before any
  redesign; see `CYVEXLY_CHUNK_DEBT.md` item 3.

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
