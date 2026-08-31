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
  2). **The favicon's 16px legibility defect (found round 3) is fixed as
  of round 7** — redesigned and pixel-verified via the established proxy
  technique rather than waiting further on an attended session that never
  materialized in this session type; see `CYVEXLY_CHUNK_DEBT.md` item 3.
  A real live-tab screenshot would still strengthen the proof, but is not
  blocking the fix any longer.

## Cross-chunk notes

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

- **Round 13 Home final-CTA system pass:** commit `1df0203` replaces the flat
  centered final CTA treatment with a compact split glass composition and an
  original luminous planetary/network horizon. Exact 1440/768/390 production
  renders, a full Home capture, 320px and 24px-root stress, native `/start`
  activation, nine-width containment, and a 16-route phone audit pass. This
  closes the largest remaining reachable reference gap without inventing
  portfolio media, opening/closing a chunk, or claiming final Owner parity.

- **Round 12 Home mid-page system pass:** commit `13d3673` adds an original
  luminous partnership diagram to the former text-only difference panel and a
  five-stage icon/node/route grammar to the Home process preview. Exact
  1440/768/390 production renders, 24px-root phone stress, SVG bounds,
  accessibility-tree semantics, and a 13-route phone audit pass. This closes
  two reference-visible structural gaps without opening/closing a chunk or
  claiming final Owner parity.

- **Round 11 Home hero motion pass:** Owner-supplied source media now replaces
  the static Home orbit as a truthful 30-second looping showcase in commit
  `34a5bd3`. The web derivative is silent, fast-start H.264 with a 12KB poster,
  an accessible Play/Pause control, visibility/reduced-motion/data-saver
  autoplay holds, and explicit-play recovery. Exact 1440/768/390 production
  renders, loop/pause/native-Enter proof, route/overflow checks, and HTTP range
  delivery pass. This advances the active visual direction without opening or
  closing a chunk or claiming final Owner parity.

- **Round 10 structural glass-system pass:** the mandatory wider methodology
  audit found that rounds 7–9 had reached diminishing returns from token-level
  adjustments, while the Owner mockup gap was now compositional. Commit
  `6b81922` therefore adds a reusable inset glass header shell, icon-led Home
  credibility rail, and icon-bearing capability card grammar. Exact
  1440/768/390 production renders, native compact-header keyboard proof, and a
  13-route phone overflow sweep pass. This advances the active Owner visual
  direction without opening/closing a chunk or claiming final parity.

- **Round 9 shared responsive/visual-system correction:** authenticated Owner
  evidence exposed an apparent cross-computer scale mismatch at 100% page zoom.
  A controlled 24px-default Chrome profile reproduced the root cause: implicit
  root sizing plus rem-based breakpoints scaled the whole system and changed its
  layout mode. Commit `8ec27c1` stabilizes the root and breakpoints and upgrades
  the shared glass/header/CTA/orbit surfaces; `2d82b0b` hardens Pricing and
  Process phone rows for minimum-font enlargement; `95c365f` restores 4.5:1+
  contrast across every luminous CTA gradient stop. Controlled Chrome/Edge
  profile, DPR, compact-viewport, interaction, and large-text proof passes;
  Owner confirmation on the original computer and final mockup-fidelity
  judgment remain the honest closure conditions.

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
