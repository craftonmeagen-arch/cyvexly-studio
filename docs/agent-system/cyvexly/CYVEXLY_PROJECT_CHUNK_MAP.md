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
- **Original remaining/bounded state:** `/about` was the only page not built
  because the first vision expected a founder name/story/portrait that no
  Builder could invent. **Superseded September 4, 2026:** Owner direction
  `2026-09-04-14` authorizes a logo-led studio About, no public personal founder
  name or portrait, and the reviewable origin draft in vision §6.8. Chunk 5 now
  owns implementation and verification. See `CYVEXLY_APP_DEBT.md` item 1.
  **Closed round 3:** independently re-verified via a live route sweep
  (`curl` against all six pages plus `/about`) that `/`, `/process`,
  `/services`, `/pricing`, `/contact`, `/work` (+3 case studies) all return
  200 and `/about` still 404s. The founder-identity gap is unchanged and
  still not a Builder-reachable decision at that historical round. Per the
  chunk's own closure boundary ("resolved or explicitly and
  honestly bounded"), this satisfies closure — closed with the About page
  carried forward as `CYVEXLY_APP_DEBT.md` item 1, not as open chunk debt.
  Closed does not mean frozen: reopens automatically once Owner-supplied
  approved identity direction arrives. That direction has now arrived and is
  assigned to Chunk 5.
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
  authorized (§4.12 Outcome Reachability Check, run round 3: the domain is now
  confirmed; inbox/transactional-email provider authorization, secure
  credentials, and sending-domain verification still require Owner action).
- **Progress (round 4):** the full UI/state/validation is built and verified
  — all nine steps, per-step required-field validation with "not sure —
  recommend it" escape hatches (vision §6.9), conditional questions (an
  "Other" goal text field on step 3, a feature-detail follow-up on step 5),
  a review/summary step with per-group edit links, required
  acknowledgement/consent checkboxes, a spam-protection honeypot, and a
  client-side "save & continue later" draft via `localStorage`. Submission
  reuses Contact's `mailto:` interim bridge, explicitly labeled as not
  satisfying the "confirmation email sent from Cyvexly" requirement.
- **Remaining:** the real server-side email-delivery route. `cyvexly.com` is
  confirmed; the business-inbox/transactional-email provider, secure
  credentials, sender verification, and real delivery proof remain
  (`CYVEXLY_APP_DEBT.md` item 4). Physical cross-browser/device confirmation remains
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
  social-sharing (Open Graph) image asset (`opengraph-image.tsx`; its metadata
  wiring was blocked at that time). The Owner has since confirmed
  `cyvexly.com`, and Chunk 5 now owns that production wiring — see
  `CYVEXLY_APP_DEBT.md` item 2 — plus a first full launch-readiness pass
  against all 14 items in vision §15 (see `CYVEXLY_ACTIVE_CHUNK.md`'s
  round-3 report for the item-by-item result).
- **Progress (round 19):** invalid dynamic service/work paths now preserve the
  custom 404 title through hydration. `/scratch-favicon-check` remains absent
  from source/build and publicly returns 404, completing the prior provisional
  cleanup confirmation.
- **Progress (round 22):** the unavailable About route is no longer advertised
  in primary or footer navigation. This is a truthful deferral, not route
  completion; the Owner identity-fact blocker remains unchanged.
- **Historical deliberately-not-attempted state:** `/privacy` and `/terms`. Unlike
  Accessibility (jurisdiction-agnostic — a WCAG target + contact route),
  Privacy and Terms need jurisdiction-specific legal language. **Superseded
  September 4, 2026:** the Owner supplied Indiana/United States jurisdiction
  and a United States-only market. Chunk 5 may draft the pages but must confirm
  the exact registered LLC name and obtain Owner review before publication.
  See `CYVEXLY_APP_DEBT.md` item 3.
- **Remaining:** `/privacy`/`/terms` (Indiana/United States direction supplied;
  exact LLC name and Owner copy review remain), plus `metadataBase`/
  `sitemap.xml`/canonical URLs and DNS/HTTPS wiring for confirmed
  `cyvexly.com` (`CYVEXLY_APP_DEBT.md` items 2–3). **The favicon's 16px
  legibility defect (found round 3) is fixed as
  of round 7** — redesigned and pixel-verified via the established proxy
  technique rather than waiting further on an attended session that never
  materialized in this session type; see `CYVEXLY_CHUNK_DEBT.md` item 3.
  A real live-tab screenshot would still strengthen the proof, but is not
  blocking the fix any longer.

## Chunk 5 — United States Launch Completion & Business Operations (OPEN, round 29)

- **Authority:** Owner direction `2026-09-04-14` and vision §17.
- **Outcome:** convert the working Render preview into a truthful, contactable,
  searchable, legally coherent United States business site at canonical
  `https://cyvexly.com`, while preserving the approved cyber-blue glass system
  and qualified-project-brief conversion model.
- **Confirmed facts:** Cyvexly Studio; LLC structure; Indiana, United States;
  United States-only launch market; `cyvexly.com`; `design@cyvexly.com`;
  `(317) 572-5780` / `+13175725780`; logo-led About; no personal founder name
  or portrait.
- **Completed reachable scope:** canonical root/`www` HTTPS and redirects;
  metadata/canonicals/social images/sitemap/staged indexing; current public
  contact details; logo-led About; draft Privacy/Terms; real server-side
  Contact/Planner delivery with honest failure states; dormant Owner-controlled
  GA4/GSC wiring; content-truth audit; production QA and Render adoption.
- **Remaining Owner gates:** exact registered LLC name; Resend account/domain
  verification and production secret; GA4/GSC values or no-analytics decision;
  final About/legal/visual approval and indexing permission.
- **Explicit deferrals:** payment-provider integration and real-client
  portfolio replacement. Existing concepts remain unmistakably labeled.
- **Completion boundary:** the Owner gates above are supplied and verified.
  That integrated verification also closes remaining delivery/launch items in
  Chunks 3 and 4. Full history is in the build summary and app debt.

## Chunk 6 — Velora Capability Demonstration (OPEN, global round 99; chunk round 5)

- **Authority:** Owner direction `2026-09-07-17`.
- **Outcome:** turn the restored standalone Velora fine-dining concept into a
  polished, fully functional, clearly fictional Cyvexly capability demo that
  can later be represented honestly in the Cyvexly portfolio.
- **Source truth:** `public/velora/index.html`; `velora/smoke.mjs` is the durable
  dependency-free rendered workflow check.
- **Boundaries:** never imply a real restaurant/client/result; use the Owner's
  fictional Evansville address, phone, and email consistently; do not place
  calls, send messages, create reservations, collect payment, or transmit
  personal data. Production-service moments use explicit local demo states.
- **Rounds 95–99 progress:** corrected the fictional identity and clipped hero;
  made all contact/transaction moments safe demonstrations; added durable CDP
  happy, correction, accessibility, responsive, resilience, and network proof;
  deployed `/velora` with self-hosted assets and no-index protection; and added
  an honest Work card/case study. Accepted source `0ca0504` passes locally and
  on `cyvexly.com`; Round 98 reconfirmed deployment integrity, and Round 99
  verified the new case study's metadata, structured data, disclosure, sitemap
  boundary, and full-resolution social-preview render. Two independent reviews
  remain.
- **Completion boundary:** all advertised navigation, responsive states,
  workflows, validation/correction/failure behavior, accessibility, content
  truth, and portfolio framing pass; then two separate independent
  verification rounds confirm the accepted source. One clean Builder pass
  does not close this chunk.

## Chunk 7 — HoneyHearted Functional Storefront (OPEN, global round 108; chunk round 9)

- **Authority:** Owner direction `2026-09-08-19`.
- **Outcome:** turn the imported teacher-resource storefront into a polished,
  fully functional site whose available actions work and whose unavailable
  commerce/account actions are truthfully demonstrated.
- **Source truth:** `honey-hearted/index.html`; `honey-hearted/smoke.mjs` is the
  durable rendered workflow check; `/honey-hearted` is the same-origin preview.
- **Rounds 100–108 progress:** added the no-indexed app route, fixed the malformed
  contact-subject chooser, and proved catalog, resource/gallery/dialog,
  download/print, content/policy, preview-form, responsive, accessibility,
  storage, and network boundaries in real Chrome. Round 101 added per-dialog
  focus restoration, strict activation-destination validation, negative and
  correction paths, adapter failure/retry, catalog claim/provenance checks,
  image resilience, zoom-equivalent reflow, and an 85-control real keyboard
  traversal. Round 102 added direct-deep-link, browser Back/Forward, route-focus,
  and malformed-hash recovery proof. Round 103 then fixed accurate hosted-link
  copy confirmation and detail-to-Home/malformed-recovery focus restoration.
  Round 104 corrected the Owner-facing launch checklist so it points to the
  real configuration block and truthfully describes the self-contained source.
  Round 105 added real-Chromium proof for illustrative-cover notice/keyboard
  focus, notice-to-launch routing, configured outbound links, protected new-
  tab attributes, and the local outbound-event hook. Product source remains
  `165b246`. Round 106 added an 18-route accessibility contract covering
  visible H1/heading structure, control names, form labels, ARIA references,
  embedded images, and client-route focus; proof source `f4adb32` passes locally
  and on production with zero failures/errors. Round 107 then reproduced and
  fixed the free-sample print flow moving keyboard focus into its hidden
  `aria-hidden` iframe; accepted/deployed source `9465ae9` retains focus on the
  visible Print trigger and passes the complete local/public suite. Round 108
  then fixed responsive focus continuity when an open mobile menu crosses to
  desktop: focused links and the store action now move to their visible desktop
  equivalents. Accepted/deployed source `1c49c00` passes the complete suite.
- **Boundaries:** do not invent products, rights, sales, reviews, identity,
  destinations, legal facts, transmission, subscriptions, or payments. Keep
  missing inputs and their safe replacement steps in
  `HONEY_HEARTED_OWNER_NEEDS.md`.
- **Completion boundary:** all advertised workflows, correction/failure paths,
  keyboard/zoom/reflow states, content and asset provenance, activation safety,
  production integration, and two independent verification rounds pass.

## Historical implementation context

Cross-chunk round history is preserved in
docs/archive/role-migration-2026-09-05/CYVEXLY_PROJECT_CHUNK_MAP.md.
Current open outcomes and Owner gates above take precedence over past decision gaps.
