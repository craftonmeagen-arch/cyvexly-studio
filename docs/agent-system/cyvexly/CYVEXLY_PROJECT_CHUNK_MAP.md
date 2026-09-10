# Cyvexly Project Chunk Map

**Status:** ACTIVE — created in global round 1.

Broad, provisional map from `CYVEXLY_VISION_PLAN.md`, the assignment, and current
source reality. Chunks may be split, merged, reordered, or reopened as evidence
requires.

## Chunk 1 — Foundation & Home (CLOSED, round 1)

- **Outcome:** A Next.js/TypeScript/Tailwind application carries the
  cyber-arctic design system (color tokens,
  typography, glass/grid utilities, reusable header/footer/button/FAQ
  components), with a complete, verified Home page.
- **Closure:** build, lint, typecheck, runtime, and interaction proof passed;
  the discovered tablet-nav overlap was fixed. Git and archived round history
  retain evidence. Closed chunks remain revisitable.

## Chunk 2 — Core marketing pages (CLOSED; historical detail archived)

Services, Work/case studies, Pricing, Process, About, and Contact are implemented
and remain revisitable when current buyer evidence warrants it. Later rounds
reconciled cross-surface artwork, service-detail routes, combination pathways,
pricing presentation, and dynamic 404 metadata. The complete round-by-round
history is preserved in
`docs/archive/chunks/CYVEXLY_PROJECT_CHUNK_MAP_CHUNK2_HISTORY.md`.
Project Planner remains a separate chunk.

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

## Chunk 6 — Velora Capability Demonstration (OPEN FOR INDEPENDENT REVIEW after global round 116)

- **Authority:** Owner directions `2026-09-07-17` and `2026-09-08-20`.
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
- **Round 116 reopened portfolio-framing result:** accepted/deployed source
  `fce01e8` replaces the sparse/report-like case study with a premium uncropped
  desktop/mobile showcase, direct prospect language, six scannable functional
  capabilities, design/accessibility decisions, restrained opening plus
  detailed disclosure, and a specific hospitality-project CTA. `/velora`
  remains unchanged. Local visible/headless and adopted public proof pass.
- **Completion boundary:** all advertised navigation, responsive states,
  workflows, validation/correction/failure behavior, accessibility, content
  truth, and the newly accepted buyer-facing portfolio framing pass in the real
  Home → case study → demo path at desktop and mobile widths; then two separate
  independent verification rounds confirm the new accepted source. One clean
  Builder pass does not close this chunk.

## Chunk 7 — HoneyHearted Functional Storefront (MOVED TO TEAM 2)

- Owner directions `2026-09-08-27` and `2026-09-08-29` moved HoneyHearted and
  all later implementation/review work to Team 2. Rounds 100–115 remain
  historical evidence through accepted source `6af5e3c`; their complete detail
  is preserved in the build summary, Git history, and archived round records.
- Live authority and state are in `docs/agent-system/team2/`. This Cyvexly
  Builder must not implement, audit, or claim that outside-website work.

## Chunk 8 — Buyer Journey, Proof & Conversion (CLOSED, global round 159)

- **Authority:** Owner directions `2026-09-08-28` and `2026-09-08-29`,
  preserving the visual/business boundaries in `2026-09-04-14`.
- **Outcome:** make `cyvexly.com` easier for a serious buyer to understand,
  trust, compare, and contact while preserving the approved architectural
  cyber-blue glass identity.
- **Scope:** domain-warning investigation; navigation-label truth; strong and
  accurately labeled existing Cyvexly proof; a prominent short inquiry plus
  optional detailed Planner; Planner
  usability; buyer-led service organization; clearer visual/information
  hierarchy; applicable pricing and care-plan clarity; professional customer-
  facing voice; and contextual placement of existing trust answers.
- **Primary buyer sequence:** fit, proof, cost, risk, next step.
- **Source evidence:**
  `C:/app projects/website-independent-review/buyer-review-2026-09-08/BUYER_REVIEW.md`
  and its rendered screenshots, subject to current source/runtime verification.
- **Boundaries:** outside-site work, including EduAILenz/Mudoinkle integration,
  is Team 2 only; no secrets/private data or invented clients, permissions,
  results, credentials, providers, or conversion gains; visual acceptance is
  not headless-only.
- **Round 119 domain disposition:** no compromise was found; Guardio review and
  an un-allowlisted recheck remain external. No product remedy was justified.
- **Rounds 120–121 buyer layer:** buyer-led Services, comparable Pricing, and
  Home's fit → proof → needs → process → cost → risk → inquiry sequence pass
  responsive/local/public proof at accepted source `37afba2`.
- **Rounds 122–123 portfolio proof:** Nexora became the second working
  fictional demo, while Home and Work narrowed proof to Velora and Nexora and
  retired the two weaker concept routes to 404. Build, demo, buyer, and visible
  responsive proof pass at accepted source `e0be008`.
- **Rounds 124–126 contact paths:** sitewide actions lead with the short
  inquiry, Contact keeps only name/email/description primary, and the custom-
  application need has a complete service/proof/pricing path. Accepted source
  advanced through `c780c43` with build, buyer, and responsive proof.
- **Rounds 127–129 decision continuity:** care-plan terms became comparable;
  case studies connect proof to relevant estimates; and 15 recognized inquiry
  contexts remain visible while still requiring a real buyer description.
  Accepted source advanced through `8c7024e` with local/public proof.
- **Round 130 decision hierarchy:** compact internal introductions bring
  Pricing packages and Services buyer choices into the first desktop viewport;
  Pricing no longer overlaps its section navigation and omits its decorative
  phone diagram; Contact presents the short form before direct alternatives.
  Accepted/deployed source `4e36d99`; local/public buyer and hierarchy suites
  plus visible production proof pass with zero overflow/runtime errors.
- **Round 131 buyer-language alignment:** the shared footer now mirrors the five
  primary buyer needs and reaches custom web applications; Home and Planner use
  concrete, consistent decision copy. The 33-route/15-context local/public
  buyer suite and visible desktop/phone proof pass at accepted source `6a40912`.
- **Round 132 package-context preservation:** all service and built-case-study
  pricing actions now retain the named scope through stable package anchors.
  Local/public buyer and real Chromium geometry proof pass on desktop/phone at
  accepted/deployed source `710b3ed`.
- **Round 133 terminology alignment:** the discovery-priced offering is now
  called “Custom application” consistently across service, Pricing,
  comparison/payment, and FAQ guidance. Stable package fragments remain
  compatible. Local/public buyer and geometry proof plus visible live phone
  navigation pass at accepted/deployed source `891db24`. Auditor R102 passed
  exact local equivalent `03e3bf0` with zero findings.
- **Rounds 134–137 inquiry truth and recovery:** the short inquiry exposes its
  requirements, both forms preserve answers and direct recovery actions after
  delivery failure, all recognized context continues into the optional
  Planner, and receipts distinguish real confirmation-copy outcomes. Build,
  responsive, intercepted, and local/public buyer proof pass through deployed
  `190cf8f`.
- **Rounds 138–140 proof and contact hierarchy:** Nexora now uses its real
  dashboard capture; Contact's direct actions meet the 44px floor; and the
  short inquiry enters the first desktop viewport. Local/public responsive
  proof passes through `ce526f2`; R107 passed exact local Round 140 source.
- **Rounds 141–144 path truth:** the store/booking journey, Commerce package,
  Planner save disclosure, and Home timing now match published scope. Proof and
  exact source history remain in the build summary and active-chunk record.
- **Rounds 145–149 decision hierarchy:** Pricing shortcuts wrap at 320px;
  Home's primary heading has its correct accessible name; Work leads with real
  proof; all five Services choices preserve inquiry context; and Contact now
  shows its required cue and full Name label within 320×568 (`506px` and
  `546–563px`, versus `626px` and `666px`). Exact local/deployment/public and
  visible proof passes through accepted source `8a15a6f`; two reviews remain.
- **Round 150 wider audit:** visible buyer use found no material new gap, so
  product UI `8a15a6f` is held stable for review. Repository source `48a2470`
  fixes only Nexora proof cleanup; two exact-source reviews remain.
- **Round 151 review disposition:** Auditor R112 passed product-equivalent
  local closeout `9c56e05` with zero findings. Product/runtime/proof paths are
  identical to repository source `48a2470`; one further exact-source review
  remains.
- **Rounds 152–153 stability proof:** two distinct visible buyer paths and the
  complete local/public proof suites found no material defect; R113 still
  named local `9c56e05`, so exact-`48a2470` review remained.
- **Round 154 review-acquisition repair:** R114 passed with zero findings but
  again substituted divergent local `9c56e05` for repository source `48a2470`.
  The Auditor PM prompt now resolves the explicit accepted repository SHA from
  current state and forbids local `HEAD` substitution. Product source remains
  stable; one review naming exact `48a2470` still closes the remaining gate.
- **Round 155 role-source alignment:** required Cyvexly assignment, vision,
  review, Council/Functional, and PM hot sources now identify the primary
  Cyvexly Build Team, Chunk 8, and the Team 2 outside-site boundary. The role
  setup regression rejects the superseded Team Two/HoneyHearted mission while
  product source remains unchanged at `48a2470`.
- **Rounds 156–157 exact-source enforcement:** setup exposed accepted `48a2470`
  versus local `9c56e05`, but R115 proved the snapshot helper still permitted
  the wrong source. Review start now rejects every ref except the single
  current-state SHA before creating resources; all 54 lifecycle fixtures pass.
- **Round 158 dispatch truth:** the paused/stale Auditor automation was routed
  without scheduler mutation; product source stayed `48a2470`.
- **Round 159 closeout:** Auditor R116 passed exact accepted source `48a2470`
  with zero defects across the full independent route, responsive, interaction,
  accessibility, truth, and buyer-decision suite. Together with R112's separate
  clean product-equivalent pass, it satisfies the two-round verification floor.
- **Completion:** every requirement in Owner direction `2026-09-08-28` is
  dispositioned against exact source and integrated visible-browser proof,
  buyer-task testing shows no material wrong turns, and two separate
  verification rounds pass. Guardio provider review and an un-allowlisted
  recheck remain an Owner/account-holder app-level gate.

## Historical implementation context

Cross-chunk round history is preserved in
docs/archive/role-migration-2026-09-05/CYVEXLY_PROJECT_CHUNK_MAP.md.
Current open outcomes and Owner gates above take precedence over past decision gaps.
