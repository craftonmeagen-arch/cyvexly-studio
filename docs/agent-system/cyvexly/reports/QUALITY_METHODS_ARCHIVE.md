# Quality & Methods Archive

Append-only Council report history begins below.

---

<!-- council review CYC-R1-20260830-01; full durable current report is QUALITY_METHODS_CURRENT.md; emergency continuity marker requires successor reconciliation -->

## CYC-R1-20260830-01 (2026-08-30)

First Home/Foundation Council review. Visible in-app-browser captures were
opened at 1440×900, 768×1024, and 390×844; mobile menu and FAQ interactions
worked; no horizontal overflow or browser diagnostics were observed. Findings:
`CYC-R1-F001` Priority Now contrast failure in the reviewed `#1478FF`/`#16B777`
token pairs, pending re-verification against the later uncommitted working tree;
`CYC-R1-F002` Next visual-fidelity gap from gradient-only selected-work cards.
The complete current report and emergency-continuity facts are retained in
`docs/agent-system/cyvexly/reports/QUALITY_METHODS_CURRENT.md` and
`docs/agent-system/cyvexly/CYVEXLY_NEXT_COUNCIL_HANDOFF.md`.


---

<!-- council review CYC-R1-20260830-01-SUCCESSOR-RECONCILIATION published 2026-08-30T18:42:09.6228991Z -->

# Cyvexly Quality & Methods Council — CYC-R1-20260830-01

**Status:** Successor reconciliation complete; published through the collision-safe Council publisher.

## Identity and custody

- Original Council round: `council-20260830T134231Z`
- Original start: `2026-08-30T13:43:20.7850847Z` UTC
- Council nonce: `6576063a7a0144b8adb1f9457718e703`
- Reviewed source head: `d256298d49134b3d023675214efee2fb2e3a1ca7`
- Reviewed source dirty fingerprint: `B2B164B489C76ADC2611EE4EB9BEA1CC28F8CAB8DFDA73D43CF0CAF30ECE9891`
- Reviewed source custody: immutable Council snapshot and paired disposable runtime from `Start-ReviewRound.ps1`
- Runtime: `.codex/runtime/council/council-20260830T134231Z/runtime` on Council port `5373`
- Successor reconciliation: 2026-08-30 UTC, after the emergency continuity window

## Visible review and methods

The Council read the complete governing guide, orientation document, AGENTS entry, assignment, Owner direction and vision references, Council PM prompt, tools/capabilities, Builder evidence and handoff, Council state/coverage/summary/active-round/debt/watch/environment records, and the available Auditor record. The Auditor guard was absent during successor reconciliation, so no Auditor activity was assumed.

The isolated runtime was installed from the locked package set and exercised through the in-app browser. Full-page captures were retained for desktop `1440×900`, tablet `768×1024`, and phone `390×844`:

- `docs/agent-system/cyvexly/council/evidence/council-20260830T134231Z-desktop-full.png`
- `docs/agent-system/cyvexly/council/evidence/council-20260830T134231Z-tablet-full.png`
- `docs/agent-system/cyvexly/council/evidence/council-20260830T134231Z-phone-full.png`

The Council opened and visually inspected the Home surface at all three widths, compared it with `docs/agent-system/cyvexly/mockups/01-home.png`, exercised the phone menu open/close flow and FAQ expand/collapse flow, and checked no horizontal overflow. The reviewed DOM exposed expected heading and landmark structure, named links, an accessible SVG label, and responsive navigation switching. No browser warnings or errors were observed during the captured load. `pnpm exec tsc --noEmit` passed in the isolated runtime. A production `pnpm run build` probe stalled in Next/Turbopack and was interrupted; this remains an open verification limitation.

## Findings

### `CYC-R1-F001` — Priority Now: action/text contrast

The reviewed snapshot rendered the primary blue as `#1478FF`: white CTA text measured `4.07:1` at 14px, below the normal-text AA target of `4.5:1`; blue text links on `#EEF4FA` measured `3.67:1`; the small `#16B777` status accent measured `2.35:1`. The working tree later showed an uncommitted `#0F66E0` change, so closure must be based on re-measurement of the accepted source rather than assumption.

**Required closure:** measure every normal-size blue CTA/text link and small status label, including hover and focus states, on the accepted source and meet `4.5:1` wherever the normal-text threshold applies.

### `CYC-R1-F002` — Next: selected-work visual fidelity

The three correctly labeled Concept project cards render as flat CSS gradients in the reviewed runtime, while the approved Home mockup calls for large, specific visual project treatments. Replace them with truthful designed concept imagery when case-study content exists, preserve the honesty labels, and recheck desktop/tablet/phone presentation.

## Validation limits and debt

Cross-browser testing, automated axe, keyboard-only traversal, reduced-motion runtime behavior, real form submission, route-by-route navigation beyond the Home flow, attended pixel-level side-by-side comparison, and the production-build root cause were not completed. Missing marketing routes remain documented as intentional out-of-scope debt for the current Home chunk. These are not claims of closure.

## Primary next-Builder plan

1. Reconcile the accepted source and rerun the contrast closure test across shared tokens, CTA variants, links, status labels, hover, and focus.
2. Open the next coherent marketing-page slice without papering over missing routes.
3. Replace the three gradients with truthful designed concept visuals once case-study content supports them; recheck all three viewports.
4. Resolve the clean-runtime production-build stall and complete attended mockup comparison before declaring visual convergence.

**Different next Council question:** inspect one complete conversion path from navigation through Services/Work to the Project Planner at all three viewports, including focus, error, and confirmation states, against the process/planner mockup.


---

<!-- council review CYC-R2-20260830-01 published 2026-08-30T20:11:27.6342393Z -->

# Cyvexly Quality & Methods Council — CYC-R2-20260830-01

**Status:** Complete; ready for collision-safe publication after the normal
Council work window.

## Identity and prompt disposition

- Round: `council-20260830T194545Z`
- Round start: `2026-08-30T19:45:47.6284014Z` UTC
- Council nonce: `2fd3764ed14843e49a5b8019b63ae5fd`
- Source head: `dfc04859af2432980765e8c4469d72c513da85cd`
- Source dirty fingerprint: `AF26568462F7F2D45AD584BAE26675ACCA3F1743D0456974326605631CEFAC51`
- Runtime: `.codex/runtime/council/council-20260830T194545Z/runtime` on port `5373`
- Council PM Prompt: `NO ACTIVE PM PROMPT`; standing Council role applied.
- Auditor: current Auditor report read; no Auditor active guard was present.

## Accepted work reviewed since the prior Council report

The current accepted source includes Round 5's connected Process timeline,
Typical timing and Collaboration promise panels; three distinct hand-authored
SVG concept previews wired into the Work grid and case-study heroes; and the
Round 4 Project Planner at `/start`. The Council reviewed these as a connected
conversion path rather than repeating the prior Home-only pass.

## Visible product use and methods

Using the real in-app browser against the isolated Council runtime, the Council:

- progressed a synthetic, non-submitting Planner brief through all nine steps;
  exercised empty sitemap validation, required-field validation, recommendation
  choices, review summaries, and consent validation without opening the mail
  client or transmitting a submission;
- visually inspected `/start` at phone `390×844` and desktop `1440×900`, and
  measured Planner overflow, heading structure, and named-link integrity at
  phone `390`, tablet `768`, and desktop `1440`;
- visually inspected `/process` full-page renders at phone, tablet, and desktop,
  including the connected timeline, timing table, collaboration panel, CTA, and
  footer, against `mockups/04-process-planner.png`;
- visually inspected `/work` at phone, including all three distinct concept
  visuals, filters, and the honest empty Redesign state;
- exercised the Work → mobile menu → Planner path and confirmed the Planner
  destination; an ambiguous duplicate CTA was safely retargeted by visible
  context rather than guessed selector reuse;
- smoke-navigated `/services`, `/process`, `/work`, and `/start` in the same
  runtime; each rendered one H1 and reached its intended page;
- measured no horizontal overflow at all required widths on both Planner and
  Work/Process surfaces; the browser reported no errors, with one later Next.js
  smooth-scroll warning recorded below; and rechecked accepted-source contrast:
  CTA white on
  `rgb(15,102,224)` measured `5.25:1`, body link text on `rgb(238,244,250)`
  `5.69:1`, and the green status accent `5.92:1`.

Evidence: `docs/agent-system/cyvexly/council/evidence/council-20260830T194545Z-planner-progress.md`.
The approved Process/Planner mockup was opened and compared side by side with
the live renders. `pnpm exec tsc --noEmit`, `pnpm run lint`, and `pnpm run
build` passed in the Council runtime. The build retained the known
`metadataBase` warning and falls back to `http://localhost:3000`; no product
source or tests were edited.

## Findings and dispositions

### `CYC-R2-F001` — Priority Now: active Planner step is hidden at phone/tablet widths

At the final `09 Review & submit` step, the progress rail is horizontally
scrollable but remains at `scrollLeft: 0`. At phone `390px`, its `277px` client
width contains `548px` of rail and step 9 is outside the visible rail; at tablet
`768px`, its `639px` client width contains `676px` and step 9 is also outside;
desktop `1440px` fits all nine. The live phone screenshot visibly showed only
the first five circles and a scrollbar while the active ninth step was hidden.
The page's `Step 9 of 9` text is present, but the progress control fails to
communicate current position at two required viewpoints without user discovery.

**Closure test:** advance a fresh Planner to steps 1 and 9 at 390px and 768px;
the active step control must be fully visible without requiring hidden-scroll
discovery, or an equivalently clear compact current-step status must be present.
Recheck keyboard focus visibility and all nine controls.

### `CYC-R2-F002` — Next: concept visuals materially improved, but remain abstract

The Work grid and case-study heroes now render three distinct, on-brand SVG
compositions rather than flat gradients, and the `Concept project` labels remain
truthful. This is meaningful progress on the prior Council/Auditor visual gap,
but it does not yet satisfy the stronger closure test of real designed crops or
screen sequences for prospective work. Keep this as partial closure until the
Owner decides whether abstract concept artwork is the permanent presentation or
commissioned design mockups are required.

### `CYC-R2-F003` — Owner Decision / launch gate: public metadata base remains unset

The clean production build still warns that `metadataBase` is unset and uses
`http://localhost:3000` for social-image URL resolution. This is not a Council
or Builder implementation choice: the public domain must be supplied by the
Owner before absolute Open Graph/Twitter URLs and canonical metadata can be
declared. Keep the current no-index posture until that decision is made.

**Closure test:** with the approved domain configured, rebuild and inspect static
HTML for absolute approved social-image URLs; then explicitly verify intended
indexability before launch.

### `CYC-R2-F004` — Next: Services mobile comparison table is clipped without an affordance

At `390px`, the Services “Common combinations” table is `560px` wide inside a
`342px` horizontal-scroll container. The first live render visibly clips the
right-column heading and values, while no explicit “scroll to see more” cue is
present. The approved Services mockup presents these combinations as readable
card groups rather than a clipped table; the document has no global overflow,
so this is a contained responsive discoverability problem rather than page
blowout.

**Closure test:** reflow the table for phone width or add an explicit,
keyboard-accessible horizontal-scroll cue; verify the complete second column is
reachable and understandable at 390px.

### `CYC-R2-F005` — Later/Opportunity: route transition emits a Next.js scroll warning

The final browser diagnostics check recorded one Next.js warning after route
navigation: `scroll-behavior: smooth` is set on `<html>` without the recommended
`data-scroll-behavior="smooth"` attribute. No browser errors were recorded.

**Closure test:** either add the framework-recommended attribute and verify a
clean console, or document why the warning is intentionally accepted.

## Role/method judgment and limits

The Planner's validation and review-summary method is coherent and its interim
mailto boundary is honestly disclosed. The live review caught a responsive
status-communication defect that source/type/lint checks would not expose. The
production build was not rerun in this window; cross-browser testing, automated
axe, keyboard-only traversal, reduced-motion runtime behavior, valid form
submission, and real email delivery remain unconfirmed. The fixed header's
full-page capture position was treated as compositor behavior, not a product
finding, because normal viewport screenshots and DOM state were coherent.

## Primary Next-Builder Plan

1. Fix the Planner progress-rail status communication at 390px and 768px, then
   re-run the full nine-step validation/review path and keyboard focus checks.
2. Reflow or clearly signpost the Services mobile “Common combinations” table;
   recheck the full Services path at phone and tablet widths.
3. Clear or explicitly disposition the Next.js smooth-scroll warning before
   making another clean-console claim.
4. Preserve the explicit no-side-effect interim mailto boundary; do not add an
   email provider or public metadata domain without Owner authorization.
5. Resolve the Owner framing decision for abstract concept artwork versus real
   commissioned mockups, then perform an attended visual comparison if assets
   change.
6. After the responsive fixes, run a fresh browser review of the connected
   Work → case study → Planner path; resolve metadata and favicon verification
   debt only when their Owner prerequisites are available.

**Different next Council question:** inspect the Planner's keyboard-only and
reduced-motion behavior across the full nine-step path, including focus order,
error announcement, progress semantics, and the review/consent boundary.

### Publication correction — CYC-R2-20260830-01

The durable current report was corrected after publication to state that the
production build **passed** in the Council runtime with the known `metadataBase`
warning. The original archive block remains immutable; the current report is
the authoritative corrected brief.


---

<!-- council review CYC-R3-20260830-01 published 2026-08-30T21:11:10.4360417Z -->

# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R3-20260830-01`
- Role: Cyvexly Product Quality Assurance & Methods Council
- Round: `council-20260830T204540Z`
- Round started: `2026-08-30T20:45:41.8799653Z`
- Source head: `b1f3f4e7f902507be64148c214bace3acb9374b2`
- Dirty-tree fingerprint at round start: `217D939FCCD963C74A3AED5072A382BF5AF50506EE1E3F5842DD70ABCB7FD78F`
- Council nonce: `1c574079e1af46caa87ea493142ad829`
- Runtime: isolated Council runtime at `http://127.0.0.1:5373`
- PM state: `NO ACTIVE PM PROMPT`; standing Council review
- Auditor state: no active Auditor guard was present when this round began
- Status: Complete; published through collision-safe Council publisher and closed within the normal work window

## Scope and method

This round independently re-checked the current Builder fixes against the previous Council dispositions. The review used the isolated runtime and in-app browser, live route navigation, real form/menu/accordion interactions, rendered DOM inspection, viewport geometry, visual screenshots, and route-wide semantic/overflow probes. Viewports covered fresh phone (`390x844`), tablet (`768x1024`), and desktop (`1440x900`) states. The evidence record is [council-20260830T204540Z-r3-live-review.md](../council/evidence/council-20260830T204540Z-r3-live-review.md).

## Accepted work since CYC-R2

The current Builder commits include the Council-directed Planner rail auto-scroll, Services comparison-card reflow, Pricing comparison-card reflow, and Next.js `data-scroll-behavior="smooth"` warning fix. The Builder also carried the same silent table-overflow pattern into the Pricing fix.

## Findings and dispositions

### CYC-R2-F001 — Planner progress rail hid the active step on narrow screens

**Disposition: verified resolved.** A fresh, real nine-step non-submitting Planner interaction at phone width ended on Step 9 with the active button fully inside the horizontally scrollable rail (`scrollLeft=271`, rail `clientWidth=277`, active `left=290`, `right=326`, `fullyVisible=true`). A fresh tablet run likewise ended with the active button fully visible (`scrollLeft=37`, rail `clientWidth=639`, active `left=660`, `right=696`, `fullyVisible=true`). Phone and tablet screenshots showed the active blue step marker and completion state. Keep the existing keyboard/reduced-motion question open for the next Council round; do not reopen this layout finding without contrary evidence.

### CYC-R2-F004 — Services comparison table clipped on phone

**Disposition: verified resolved.** At `390x844`, the Services desktop comparison table was hidden and the mobile stacked-card representation was rendered. All combinations and values were readable in the full-page screenshot and the document had no horizontal overflow. Pricing’s matching table pattern was also verified at phone width, and all route-wide phone/tablet probes reported no overflow.

### CYC-R2-F005 — Next.js smooth-scroll warning

**Disposition: verified resolved.** The live document exposes `data-scroll-behavior="smooth"` on `<html>`, and browser diagnostics after route navigation/interactions returned no warning or error entries.

### Prior open quality debt retained

- `CYC-R2-F002`: concept artwork has improved but remains abstract and needs an Owner decision on whether the visual framing is sufficiently concrete for release.
- `CYC-R2-F003`: `metadataBase` remains an Owner/configuration decision; production build still reports the localhost fallback warning.
- Planner keyboard-only traversal and reduced-motion behavior were not independently completed in this round; the next Council should test focus order, error announcement, progress semantics, and reduced-motion behavior directly.
- Final submit/mail side effects, cross-browser behavior, production-domain metadata, favicon/provider configuration, and attended pixel-diff comparison were not claimed.

## Additional live quality checks

- Planner empty-step validation rendered alerts and invalid controls with `aria-describedby` IDs; Step 4 blocked continuation until at least one page or the recommendation option was selected.
- Mobile navigation opened/closed through real controls with the expected `expanded` state and five primary links plus project CTA.
- Pricing FAQ disclosure opened through a real button and exposed its answer while retaining the rest of the page.
- Route-wide desktop probe across the primary public routes reported exactly one `h1`, one `main`, no unlabeled images/buttons/links, and no horizontal overflow.
- Services and Pricing desktop screenshots showed intended multi-column table layouts; phone screenshots showed the intended stacked layouts.

## Next Council question

On the next fresh round, run an explicit keyboard-only and reduced-motion review of the Planner from Step 1 through review: focus order and visible focus, field-error announcement, progress-nav semantics, active-step visibility after viewport changes, and `scrollIntoView`/page-scroll behavior when reduced motion is requested. Revisit concept visual concreteness and the `metadataBase` Owner decision only if the Builder or Owner changes them.

## Handoff

The current Builder has verified closure evidence for the three CYC-R2 findings. The next Builder should preserve the responsive card/table pattern, the `data-scroll-behavior` attribute, and the Planner active-step scroll effect while avoiding scope expansion. The Council report is ready for collision-safe publication and round close.


---

<!-- council review CYC-R4-20260830-01 published 2026-08-30T22:09:33.4214465Z -->

# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R4-20260830-01`
- Role: Cyvexly Product Quality Assurance & Methods Council
- Round: `council-20260830T214320Z`
- Round started: `2026-08-30T21:44:14.4243672Z`
- Reviewed source head at start: `97f7b69522937783e8e3eb2581f0832f1c420f5b`
- Dirty-tree fingerprint at round start: `DC426D4823C140A8820AC26CCCD9DFB4E74CD24646D97B5502372CD6FC9EAEB2`
- Close/current source head: `a12f122ca0ccc08a659acb012f8cc75c6c46db01`; current dirty-tree
  fingerprint: `ADB4DEBE638E9DEA77CAF41342230DAFCF2B1265150416601BDA26906C602F18`
- Council nonce: `3cde18cd742748d48504f948b1b4463e`
- Runtime: isolated Council runtime at `http://127.0.0.1:5373`
- PM state: `NO ACTIVE PM PROMPT`; standing Council review
- Auditor state: no active Auditor guard was present when this round began
- Status: Complete; published through the collision-safe Council publisher and closed within the normal work window

## Scope and method

This round independently reviewed the accepted Round 7 favicon/Open Graph work and the current public product surfaces. The review used the isolated Council runtime and in-app browser, rendered screenshots opened for visual inspection, source inspection, real mobile menu/filter/FAQ interactions, route-wide landmark/label/overflow probes, and isolated lint, typecheck, and production-build checks. Viewports covered `1440x900`, `768x1024`, and `390x844`. Evidence is indexed in [council evidence](../council/evidence/INDEX.md), including the live favicon frames, Open Graph capture, Home capture, and Home visual-gap note.

## Accepted work since CYC-R3

The Builder changed `src/app/icon.svg` and `src/app/opengraph-image.tsx` from the thin Y-in-circle mark to a heavier open-orbit/check mark. The isolated runtime served the new SVG at `/icon.svg`, and `/opengraph-image` rendered a coherent 1200x630 card with the new cyan mark. Work index concept cards remain distinct abstract SVG treatments.

## Findings and dispositions

### CYC-R4-F001 — First browser favicon remains the default Vercel asset

**Disposition: Priority Now / open.** The live document exposes a generated `/favicon.ico?...` link before `/icon.svg?...`. Fetching the actual served `/favicon.ico` and extracting its 16px and 256px frames produced the default white Vercel triangle, not the new Cyvexly mark. The SVG redesign is legible in isolation but does not control the first/effective browser-tab asset. See `council-20260830T214320Z-favicon.md`, `council-20260830T214320Z-favicon-16.png`, and `council-20260830T214320Z-favicon.png`.

Closure requires replacing/removing the stale `src/app/favicon.ico` or otherwise making the branded asset the first effective favicon, rebuilding, and extracting the served 16px and 32px frames to verify the Cyvexly mark.

### CYC-R4-F002 — Untracked scratch favicon route is source drift and hygiene debt

**Disposition: Priority Next / open.** After the immutable Council snapshot was created, the working tree gained untracked product source at `src/app/scratch-favicon-ico/route.tsx`, a temporary query-controlled `ImageResponse` favicon preview route. It was not part of the isolated runtime reviewed by this Council, so no behavior claim is made about it. Its presence is independently visible in current source status and resembles the prior Auditor scratch-route finding. Council did not edit or remove it.

Closure requires the owning role to remove or relocate the scratch route outside `src/app`, confirm the working tree is intentional, and rerun route/build hygiene so temporary preview endpoints cannot ship.

### CYC-R2-F002 — Home Selected work visual concreteness remains open

**Disposition: retained open.** The live Home page still renders its three Selected work cards as flat CSS gradients with text labels, while approved `mockups/01-home.png` shows distinct rich project treatments. The Work index now has distinct abstract `ConceptPreview` SVGs, which is an improvement, but it does not close the Home proof-surface gap. See `council-20260830T214320Z-home-visual-gap.md` and `council-20260830T214320Z-home-desktop.png`. Keep the explicit concept disclosure and obtain the Owner decision on whether this abstraction is release-sufficient.

### Coordinated debt retained

- `CYC-R2-F003` / Auditor `CYV-IFA-005`: `metadataBase` remains an Owner/domain decision; the production build still reports the localhost fallback warning.
- Auditor `CYV-IFA-006`: Planner server-side email/backend capability remains an Owner-gated launch decision.
- Planner keyboard-only traversal and reduced-motion behavior were not independently completed by this Council; Builder alternate-DOM evidence is not substituted for a live Council claim.
- The standalone image-route Browser-pane animation TypeErrors were instrumentation noise after screenshot calls; normal product-route diagnostics were clean and no product-console finding was created.

## Additional live quality checks

- Home, Work, all primary public routes, and the 404-backed About/Privacy/Terms routes were exercised at desktop, tablet, and phone widths. Each observed route had one `h1` and one `main`, no empty images, and no horizontal overflow.
- The mobile navigation opened and closed through its real control; Work's Concept filter reported `aria-pressed=true` and three cards; Pricing's FAQ disclosure opened with `aria-expanded=true` and visible answer text.
- The isolated `pnpm run lint`, `pnpm exec tsc --noEmit`, and `pnpm run build` checks passed. Build output generated 18 routes and retained only the known `metadataBase` localhost fallback warning.
- The source moved from start head `97f7b69` to close/current head `a12f122`; the intervening commit is docs-only. The new untracked scratch route is current working-tree drift and was not in the Council snapshot/runtime.

## Next Council question

After the Builder resolves the effective favicon and scratch-route hygiene, run a fresh Planner keyboard-only and reduced-motion pass with an alternate observable method, then re-check the served favicon frames and Home Selected work treatment. Keep metadataBase, Planner email/backend, and concept-art sufficiency as explicit Owner-gated decisions rather than silently closing them.

## Handoff

The Council found the new SVG/OG mark visually improved but discovered that the actual first browser-tab asset is still Vercel's default triangle. The report is ready for collision-safe publication and round close. Preserve the cited captures and the open findings above; do not alter the untracked scratch route from the Council role.


---

<!-- council review CYC-R5-20260830-01 published 2026-08-30T23:06:51.3075048Z -->

# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R5-20260830-01`
- Role: Cyvexly Product Quality Assurance & Methods Council
- Round: `council-20260830T224200Z`
- Round started: `2026-08-30T22:41:14.9030160Z`
- Source head at start: `d04dc9d271d15103aaa3b32897d3b64b74fd9a8c`
- Dirty-tree fingerprint at round start: `53BD896212C2291969C0236DCA5E15A1BF993B2287C48889FEADD00F9C2975DB`
- Current source head at close: `da9c6d99962ba3f8a318bf3eed9a9b3ef63c0942`; current dirty-tree
  fingerprint before publication: `0EFB1199436F02FC5F4105D4EEE15F52F92C78B642517B7829FB122A74DF561E`.
- Council nonce: `b2cae96a86204e0986d80f55445d0a5a`
- Runtime: isolated Council runtime at `http://127.0.0.1:5373`
- PM state: `NO ACTIVE PM PROMPT`; standing Council review
- Auditor state: no active Auditor guard was present during this round
- Status: Complete; publish through the collision-safe Council publisher and close within the normal work window

## Scope and method

This round independently reviewed accepted Round 7 follow-on work and Round 8's
cross-surface concept-visual unification. It used the immutable Council runtime
captured at start head `d04dc9d`; a further Builder commit (`da9c6d9`, Planner
validation focus) landed after snapshot creation and was source-inspected but
not served by this independent runtime. The review used in-app browser visible
captures opened for inspection, side-by-side comparison
with `mockups/01-home.png`, direct served asset fetches and opened raster frames,
route-wide DOM/overflow probes, source/status inspection, and isolated lint,
typecheck, and production-build checks. Home was captured at `1440x900`,
`768x1024`, and `390x844`; Work at desktop; Services at phone. This is a
different question from R4's stale-favicon discovery: the effective ICO and
cross-surface rendering were checked as served outcomes.

## Accepted work since CYC-R4

- `ce6d273` corrected the favicon mark's measured viewBox clipping and shipped
  a real multi-resolution `src/app/favicon.ico`; `1a77970`, `aee303f`, and
  `1904634` document that work and rotate Builder hot-path state.
- `d04dc9d` reuses `ConceptPreview` in Home Selected work and Services Recent
  work, bringing those surfaces into the same truthful visual system as Work.
- `da9c6d9` adds first-error focus and linked group-error semantics to the
  Planner. It landed after this Council snapshot; Builder evidence was read, but
  Council does not promote that claim to independent runtime verification here.
- The current `icon.svg` and Open Graph mark use the corrected scaled orbit/check
  path. Source status for `src/` is clean at close; no scratch route remains.

## Findings and dispositions

### CYC-R4-F001 — Effective browser favicon

**Disposition: verified resolved.** The live head exposes `/favicon.ico?...`
before `/icon.svg?...`, and the served ICO contains branded orbit/check frames
at `16x16`, `32x32`, `48x48`, and `256x256`. The opened 16px and 32px frames are
recognizable and no longer the Vercel triangle. The previous closure test is
satisfied by the actual served asset, not only source inspection.

### CYC-R4-F002 — Untracked scratch favicon route

**Disposition: verified resolved.** `src/app/scratch-favicon-ico/route.tsx` is
absent from current source status, the isolated runtime returns the normal 404
for that path, and the production build route table contains no scratch route.

### CYC-R2-F002 — Concept visual concreteness

**Disposition: implementation symptom verified resolved; Owner framing decision
retained.** Home and Services now reuse the distinct, truthful `ConceptPreview`
compositions already present on Work/case studies. Opened Home, Work, and
Services captures show no remaining flat-gradient cross-surface inconsistency,
and every card remains explicitly labeled `CONCEPT PROJECT`. The approved
mockup still uses higher-fidelity photographic/rendered scenes, so whether
abstract illustration is release-sufficient or commissioned concept design is
required remains an Owner decision; do not reopen the fixed implementation
symptom as a defect or fabricate client proof.

### CYC-R5-F001 — Post-snapshot Planner validation-focus change needs fresh verification

**Disposition: Observation / Priority Next verification.** Commit `da9c6d9`
landed after the Council snapshot and changes product source in
`planner-form.tsx` and `planner-fields.tsx`: it focuses the first invalid control
and links radio/checkbox group errors with stable names and IDs. The change is
plausible and Builder's separate native-Chromium evidence reports the expected
focus/error behavior, but this Council's isolated runtime predates it. A fresh
round must serve the current head and independently exercise empty-step
validation at desktop and phone before marking this verification debt closed.

### Coordinated debt retained

- `CYC-R2-F003` / Auditor `CYV-IFA-005`: `metadataBase` remains an Owner/domain
  decision; build output still warns and static social metadata falls back to
  localhost until the public domain is approved and wired.
- Auditor `CYV-IFA-006`: Planner server-side email/backend capability remains an
  Owner-gated launch decision.
- Planner physical keyboard-only traversal and visibly reduced-motion behavior
  remain unconfirmed. This round's DOM focusable-order probe at phone width
  found the expected header/progress/form ordering and the source contains both
  reduced-motion branches, but it is not a physical Tab-key claim. Playwright/
  DOM clicks did not toggle controls in this unattended session; prior R3 is the
  last successful live interaction evidence.
- About, Privacy, and Terms remain intentional 404-backed Owner/Chunk debt.

## Additional live quality checks

- Twelve public routes loaded at all three required widths: each had one `h1`,
  one `main`, no empty image alt values, no unnamed links, and no horizontal
  overflow (`scrollWidth == clientWidth` at each viewport). Browser diagnostics
  after the sweep were empty.
- The direct served Open Graph PNG is 1200x630, uses the corrected cyan mark,
  and was opened for visual inspection. The live favicon's four ICO sizes were
  extracted and opened.
- `pnpm run lint`, `pnpm exec tsc --noEmit`, and `pnpm run build` passed in the
  isolated `d04dc9d` runtime. Build generated 18 expected routes, with only the
  known `metadataBase` localhost fallback warning; the post-snapshot `da9c6d9`
  source was not rebuilt by this round.

## Primary next-Builder plan

1. Freshly verify `da9c6d9`'s Planner first-error focus and linked group-error
   semantics from a runtime built from the current head, at desktop and phone.
2. Resolve the Owner's public-domain and transactional-email decisions, then
   set `metadataBase` and implement the server-side Planner delivery path with
   explicit consent, success/error/retry states, and sandbox-recipient proof.
3. Keep the unified truthful concept visuals and disclosure; obtain the Owner's
   decision on whether higher-fidelity commissioned concept imagery is required
   before spending another implementation round on artwork.
4. If a genuinely attended or differently capable browser becomes available,
   complete the physical Planner Tab-key and reduced-motion observation; until
   then preserve the honest DOM-level boundary.
5. Obtain Owner facts for About, Privacy, and Terms before filling those routes.

## Next Council question

On the next round, independently verify the post-snapshot Planner validation-
focus commit first, then inspect production metadata and the Planner submission
boundary after the Owner-gated domain/email decisions. Revisit keyboard/reduced-
motion with a genuinely different browser capability. Do not repeat the now-
closed favicon or cross-surface gradient review without new source or a
contradictory artifact.

## Handoff

Round 5 verified the actual branded favicon and the Round 8 unified concept
visual system across Home, Services, and Work. The former R4 favicon and scratch
route findings are closed. Builder commit `da9c6d9` landed after snapshot and
requires fresh independent Planner validation-focus verification. Preserve
cited captures and retain the Owner-gated metadata/email/artwork,
keyboard/reduced-motion, and post-snapshot verification questions.
