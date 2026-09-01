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
- **Round 8, cross-surface reconciliation:** the current Council review found
  that Home still used the original flat gradients even though Work/case
  studies had adopted the stronger project-specific abstract artwork; source
  inspection found Services had the same stale pattern. Both now reuse
  `ConceptPreview`, verified in real 1440/768/390 headless-Chrome/CDP renders
  with zero overflow. The reachable inconsistency is closed; the separate Owner
  decision on abstract-vs-commissioned concept imagery remains open.
- **Round 14, service-detail completion:** commit `930e050` fulfills vision
  §6.3 with one reusable `/services/[slug]` template and exactly five focused
  routes. Services/footer entry points now reach them, and each offer hands an
  editable starting state to the Planner without overwriting a saved draft.
  Desktop/tablet/phone, 320px, 24px-root, native-navigation, semantics, and
  production-build proof pass. This revisits the closed chunk without reopening
  it or resolving the separate Owner-blocked About gap.
- **Round 17, Services combination-pathway reconciliation:** replaced the
  remaining text-table adaptation identified in Chunk Debt item 4 with five
  mockup-aligned, icon-led glass pathways. Every existing audience/service
  combination remains present, now with an honest outcome and Planner handoff.
  Optimized-production proof passes at 1440/1280/1024/768/720/390/320 widths; the
  three-column layout intentionally waits until 1280px so compact desktops do
  not repeat the cross-device cramped-scale problem. This revisits the closed
  chunk without changing its Owner-blocked About boundary.
- **Round 18, Pricing scope-system reconciliation:** replaced the sparse
  centered Pricing entry with a split glass composition and an original
  five-package scope signal, then coordinated the unchanged package cards in a
  luminous constellation field. Exact 1440/1024/1023/768/390/320 and 24px-root
  states, native Planner/FAQ input, complete five-card visual inspection,
  build/route/media regression, and opened public desktop/phone proof pass.
  The approved mockup's orbital hierarchy is now represented without copying
  its thumbnail-density tables or changing any package fact. This revisits the
  closed chunk without changing its Owner-blocked About boundary.
- **Round 19, dynamic 404 metadata correction:** invalid service/work slugs now
  call `notFound()` during metadata generation, so streamed fallback metadata
  cannot overwrite the hydrated 404 title. Both invalid routes retain 404,
  noindex, landmarks, recovery links, containment, and clean browser state;
  all eight valid dynamic routes remain 200. This is a cross-chunk runtime
  correction and does not change the closed marketing-page boundary.
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
  item 4, unchanged). Physical cross-browser/device confirmation remains
  useful complementary proof, not a source blocker.
- **Round 6:** fixed a real Council-flagged defect (`CYC-R2-F001`) — the
  progress rail didn't keep the active step visible at 390px/768px,
  fixed with a `scrollIntoView` effect matching the existing reduced-
  motion-aware scroll pattern. Verified the end state is fully visible at
  both widths; the smooth-scroll animation itself is unobservable in this
  session (a session-proof limitation, not an unresolved defect — see
  `CYVEXLY_WATCH.md`).
- **Round 7:** ran a real DOM/accessibility-tree-level keyboard-
  traversal, focus-order, error-announcement, and progress-semantics
  audit of all nine steps — a legitimate alternate method to the still-
  unreachable live Tab-key path, since `computer` key presses remain
  proven non-functional in this session type. Found the implementation
  solidly correct throughout (native form controls with proper label/
  fieldset wiring on most steps, a correctly-built custom toggle-group
  pattern on the one step that isn't, real accessible error wiring, a
  sufficiently-contrasting focus indicator, no missed reduced-motion
  gap). Real Tab-key traversal in an attended browser remains the one
  piece this method can't fully substitute for.
- **Round 8:** the new local-Chrome/CDP path exercised native Chromium Tab and
  Enter navigation at exact desktop and phone widths. It found and fixed focus
  remaining on `Continue` after validation, then proved focus moves to the
  first invalid field with grouped-control errors linked. Physical-hardware and
  cross-browser traversal remain useful complementary proof, not a blocker.
- **Round 19:** fixed `CYV-IFA-009` by gating the interactive form until the
  browser draft check completes. Initial HTML exposes a polite busy status and
  no form; saved Step 3, clean-origin Step 1, and service-prefill Step 1 flows
  pass locally, while public initial and settled output confirm deployment.

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
- **Progress (round 19):** invalid dynamic service/work paths now preserve the
  custom 404 title through hydration. `/scratch-favicon-check` remains absent
  from source/build and publicly returns 404, completing the prior provisional
  cleanup confirmation.
- **Progress (round 22):** the unavailable About route is no longer advertised
  in primary or footer navigation. This is a truthful deferral, not route
  completion; the Owner identity-fact blocker remains unchanged.
- **Deliberately not attempted:** `/privacy` and `/terms`. Unlike
  Accessibility (jurisdiction-agnostic — a WCAG target + contact route),
  Privacy and Terms need jurisdiction-specific legal language (business
  location, applicable consumer-protection/data-privacy regime) that no
  Builder round has and must not invent — this is the same class of gap as
  the About page's founder identity: Owner-supplied fact, not a reversible
  implementation detail. See `CYVEXLY_APP_DEBT.md` item 3.
- **Remaining:** `/privacy`/`/terms` (Owner-blocked, above), `metadataBase`/
  `sitemap.xml`/canonical URLs (domain-blocked, `CYVEXLY_APP_DEBT.md` item
  2). **The favicon's 16px legibility defect (found round 3) is fixed as
  of round 7** — redesigned and pixel-verified via the established proxy
  technique rather than waiting further on an attended session that never
  materialized in this session type; see `CYVEXLY_CHUNK_DEBT.md` item 3.
  A real live-tab screenshot would still strengthen the proof, but is not
  blocking the fix any longer.

## Cross-chunk notes

- **Round 25 shared navigation resilience:** product commit `e38851f` adds
  native Escape/focus return, desktop-breakpoint state reconciliation, and
  exact standard/nested current-page semantics without changing the approved
  header pixels. A verification-discovered Services CTA correction also closes
  390px/24px-root overflow. All 114 normal and 19 enlarged-root cases pass;
  Render ETag `44zd3ca5e02ryz` passes the same public interaction/semantic proof.
- **Round 24 authoritative every-page theme:** plan/baseline commit `2983699`,
  product commit `5656584`, and focus correction `06fbadd` implement Owner
  direction `2026-09-01-10` over every full public page height. Shared
  environment/surface primitives remove all measured transparent direct-section
  fallbacks while preserving protected content and approved dark focal stages.
  Both optimized and public 198-state matrices pass across 18 route states and
  eleven widths; opened full-page 1440/768/390 proof and composited contrast
  pass. Owner visual acceptance remains pending; blocked launch facts are
  unchanged.
- **Round 23 shared validation contrast:** product commit `2227961` closes
  Auditor `CYV-IFA-011` at the semantic token. Final composited Contact/Planner
  errors start at 4.6881:1 and public adoption passes. The later every-route
  theme authority is implemented and proved by Round 24 above.

- **Round 22 sticky-header and continuation reconciliation:** fixed the shared
  CSS cascade that overrode the authored sticky/z50 header, carried the
  Owner-approved blue-glass language through five Home and three Services
  section fields, and deferred the visible dead About link. A hydrated
  optimized-runtime matrix covers 154 states across 18 routes and eight widths
  from 1280 through 320 with zero verified failures. Normal-text contrast is
  at least 4.5:1 and Owner visual review remains pending.

- **Round 21 site-wide blue-glass reconciliation:** Owner direction
  2026-08-31-09 is implemented through one shared pale-blue architectural
  atmosphere, protected glass introductions across standard/dynamic/utility
  routes, and translucent continuation sections. Home and Pricing retain
  their bespoke accepted compositions; Round 20's removed playback chrome
  remains removed. Optimized desktop/phone renders, final composited-pixel
  contrast (lowest normal-text pair 5.06:1), containment, interactions,
  build, and route/media regression pass. Owner review remains pending.

- **Round 20 Home reel playback-chrome cleanup:** Owner direction
  2026-08-31-08 supersedes Round 16's visible-control treatment for the current
  Home showcase. Commit `d6cd17c` removes the muted/duration pill, timeline,
  and circular control, slows authored playback to `0.75×`, and makes the
  unadorned media surface the named click/keyboard pause target. Opened
  1440/768/390 renders, exact containment, media timing, interaction, lint,
  optimized build, TypeScript, and range-delivery proof pass without changing
  the source asset, hero size, copy, or reduced-motion/data-saving holds.

- **Round 16 integrated Home hero reel:** Owner direction 2026-08-31-07 is
  implemented in product commit `14e12d4` without formally reopening a closed
  chunk. The Home-only stage expands to approximately 1440px, the measured
  desktop reel grows from 528px to 726.56px, and coordinated light-ice-blue
  glass layers protect the copy and integrate the player. Real progress,
  Pause/Play, loop, reduced-motion, responsive, semantic, route, lint, build,
  and type proof pass. The accepted media and product claims are unchanged;
  Owner visual acceptance and original second-device confirmation remain.

- **Round 15 live Home video deployment recovery:** the Owner's report that the
  video still did not appear publicly exposed a source/deployment identity
  defect, not another media-component defect. Render/GitHub served default
  branch `main` at pre-video commit `c13ae7a`, while accepted source had moved
  52 commits ahead on `master`. `main` had zero unique work, so a non-force
  fast-forward published the accepted history; the local Builder branch now
  tracks `origin/main` to prevent recurrence. The real public site changed
  within about 51 seconds and passes opened desktop/phone render, playback,
  loop, reduced-motion/data-saver, MIME/range, route, console, build, and type
  proof. This corrects deployment truth without opening/closing a chunk or
  changing the separate domain/metadata decision.

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
