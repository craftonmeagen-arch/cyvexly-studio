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


---

<!-- council review CYC-R6-20260830-01 published 2026-08-31T00:06:21.8462568Z -->

# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R6-20260830-01`
- Role: Cyvexly Product Quality Assurance & Methods Council
- Round: `council-20260830T233900Z`
- Round started: `2026-08-30T23:40:00.8568280Z`
- Source head at start and close: `4fb7c017ca6596d2ee906a5e569874119a6541fd`
- Start dirty fingerprint: `E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855`
- Council runtime: `.codex/runtime/council/council-20260830T233900Z/runtime`, port `5373`
- Council nonce: `d3c81158b415406a8f4ebe7cd9da21e9`
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied
- Auditor: no active Auditor guard detected; latest report `IFA-2026-08-30-R3` is retained as stale evidence

## Executive brief

Round 6 served the first Council snapshot containing Builder commit `da9c6d9`
and the truthful case-study label cleanup `4bdab10`. Home was opened at
`1440×900`, `768×1024`, and `390×844`; Planner was opened at desktop and phone;
the full public route slice was smoke-tested at phone width. The current
responsive layout is coherent and the abstract concept-work disclosure is
consistent across Home, Services, and Work. The new Planner DOM semantics are
present, but this unattended browser session could not produce a trustworthy
React validation activation, so the prior post-snapshot finding remains
unconfirmed rather than being closed by source inspection or Builder evidence.

## Accepted work and direct observation

Since R5, the accepted source includes:

- `da9c6d9`: Planner `focusFirstError`, stable group names, `aria-invalid`,
  `aria-describedby`, and linked `role=alert` IDs for radio/checkbox groups.
- `4bdab10`: case-study artwork accessible label now says `abstract concept
  visual`, matching the truthful concept framing.

Opened captures show the current Home hero, selected-work concept cards,
capability grid, process/pricing/FAQ sections, CTA, and footer without visible
desktop/tablet/phone clipping. The tablet and phone headers switch to the menu
button; selected-work cards remain readable stacked cards. Compared side by
side with approved `mockups/01-home.png`, the source is a calmer, lower-fidelity
implementation: the approved mockup's photographic/high-fidelity treatments and
iconography are not present. This is the already-routed Owner decision about
abstract versus commissioned/higher-fidelity concept artwork, not permission to
invent assets.

The Planner at phone and desktop presents the nine-step rail and Step 1 fields
within the approved interaction model. The new source semantics are visible in
the served DOM: named checkbox groups, invalid fieldsets, error IDs, and alert
messages when the validation state is reached. The in-app Playwright and DOM/CUA
activation paths did not trigger the client React handler in this unattended
session; focus stayed on `Continue →`. A separate Council-owned Chrome/CDP
probe recorded native Enter events and exact `390px`/`1440px` metrics, but its
activation did not transition the form either. This is a harness limitation,
not a product defect claim.

## Verification

- In-app browser captures opened: Home desktop/tablet/phone and Planner
  desktop/phone; evidence is indexed in `council/evidence/INDEX.md`.
- Phone route smoke covered `/`, `/services`, `/work`, `/pricing`, `/process`,
  `/contact`, `/faq`, `/accessibility`, `/start`, all three case studies,
  `/about`, `/privacy`, and `/terms`: each exposed one `h1` and `main`, no empty
  image alts, no unnamed links, `scrollWidth === clientWidth`, and no console
  warning/error in the observed load.
- Direct served probes returned 200 for Home, Planner, case study, OG image,
  favicon, SVG icon, and robots. The first icon link is the branded ICO route;
  the scratch product route is absent.
- `pnpm run build` passed; it reproduced the known Owner-gated
  `metadataBase` localhost warning. `pnpm exec tsc --noEmit` and `pnpm exec
  eslint src` passed.

## Findings and dispositions

### CYC-R5-F001 — Unconfirmed / method-limited — Planner validation focus

The Builder's first-error focus change is present in the accepted source and
the group error semantics are visible in the current DOM. Council's own
unattended activation could not produce a real React transition, so it cannot
independently claim that `requestAnimationFrame` focuses `input#fullName` after
empty-step validation. Do not promote Builder evidence to Council closure.

**Retry condition:** an attended or differently capable browser must activate
the empty Step 1 Continue action and capture focused `input#fullName`, all three
linked alerts, and the desktop/phone overflow state; repeat for radio/checkbox
groups and reduced motion.

### Retained Owner-gated boundaries

- `CYC-R2-F003`: public domain before `metadataBase`, canonical, sitemap, and
  indexability launch wiring.
- `CYV-IFA-006`: server-side Planner submission/confirmation/email provider,
  consent, and retention choices.
- About founder identity, Privacy/Terms jurisdiction facts, and the Owner's
  abstract-artwork release framing.
- Physical keyboard hardware, reduced-motion visual behavior, cross-browser
  traversal, deployment, and real external mail side effects remain unclaimed.

No previously closed favicon, scratch-route, or cross-surface concept-visual
finding was reopened.

## Methods assessment and next Builder plan

The round sequence is converging: shared concept rendering and label truth are
stable, and the new Planner semantics are inspectable. The remaining method
gap is capability-specific, not a reason to repeat hidden-browser clicks. The
next Builder work should wait for Owner inputs, then implement production
metadata and server-side Planner delivery in a sandbox recipient with explicit
success/error/retry and data-retention behavior. The next Council question is
production metadata/submission readiness after those decisions, followed by a
genuinely attended/different-capability keyboard and reduced-motion pass.

## Evidence and scope limits

Evidence: `council/evidence/council-20260830T233900Z-planner-focus-review.md`,
the five opened PNG captures, `council-20260830T233900Z-planner-cdp.json`, and
`council-20260830T233900Z-route-smoke.json`. Council did not edit product source,
tests, `.engine-lock`, Builder resources, or Auditor resources; no valid form
submission, external mail, deployment, credential, or production-domain action
was attempted.


---

<!-- council review CYC-R7-20260830-01 published 2026-08-31T00:58:09.6361199Z -->

# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R7-20260830-01`
- Role: Cyvexly Product Quality Assurance & Methods Council
- Round: `council-20260831T004000Z`
- Round started: `2026-08-31T00:40:48.1991788Z` (scheduler start window)
- Source head at snapshot: `8ec27c1573312a5fbb58c8d69018da263b338b0d`
- Start dirty fingerprint: `B83368CEE13A42589577CB67911F296E98DDD050478A6429D4E52432BCE5A655`
- Council runtime: `.codex/runtime/council/council-20260831T004000Z/runtime`, port `5373`
- Council nonce: `bb4b148807834049b11f3e7ebb9ab753`
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied
- Auditor: no active Auditor guard detected; latest `IFA-2026-08-30-R3` retained as stale evidence

## Executive brief

Round 7 freshly served Builder commit `8ec27c1`, which repairs the cross-
computer scale sensitivity at the shared design-system layer and deepens the
glassy/futuristic treatment. Home was opened at desktop, tablet, and phone;
Services and Work were opened at phone; Planner was opened at phone. The live
runtime is responsive and coherent with no measured horizontal overflow. The
accepted mockup remains a higher visual bar, so final glass/artwork parity stays
Owner-gated rather than being self-certified.

The prior Planner finding is now partially independently verified: empty Step 1
focuses `input#fullName` and exposes three linked alerts. The same fresh runtime
reached the Goals radio/checkbox groups and exposed the correct invalid fieldset
and error ID, but grouped focus was not observable because the focus helper is
scheduled through the unattended browser's suspended `requestAnimationFrame`.

## Accepted work and direct observation

The Home capture shows the new body atmospheric glow, 44px signal-grid,
dimensional `.glass-panel` surfaces, glassier sticky header/mobile menu,
luminous gradient CTA, and orbit halo/gloss/rim. At phone width the hero,
project cards, capability cards, process, pricing, FAQ, CTA, and footer remain
readable and stacked without visible clipping. Services and Work preserve their
shared glass cards and truthful `CONCEPT PROJECT` disclosures at phone width.

Compared side by side with `mockups/01-home.png`, the current product is calmer
and less dense: the mockup includes luminous device/project treatments and
iconography that the current abstract concept system intentionally does not
claim. The implementation is honest and coherent; the Owner must decide
whether higher-fidelity commissioned artwork is required for release parity.

## Responsive and interaction verification

The live computed state was measured as follows:

| CSS viewport | Root | H1 | Header | Primary nav | Mobile menu | Overflow |
| --- | --- | --- | --- | --- | --- | --- |
| 1440 | 16px | 48px | 79px | visible | hidden | 0px |
| 1024 | 16px | 48px | 79px | visible | hidden | 0px |
| 720 | 16px | 48px | 73px | hidden | visible | 0px |
| 390 | 16px | 36px | 73px | hidden | visible | 0px |

The mobile menu opened directly in the in-app browser (`aria-expanded=true`,
`#mobile-nav` visible). The first FAQ disclosure opened with
`aria-expanded=true`. On `/start`, empty Step-1 Continue produced:

- active element `input#fullName`;
- alerts for name, email, and preferred contact method;
- `input#fullName[aria-describedby="fullName-error"]`.

Test-safe local values advanced into Goals. Empty primary-goal Continue
produced the expected alert and an invalid fieldset with
`aria-describedby="primaryGoal-error"`. Its focus was not promoted to a
Council closure because the source schedules focus through `requestAnimationFrame`
and this unattended renderer does not expose that frame callback reliably.

## Findings and dispositions

### CYC-R5-F001 — Partially confirmed / method-limited — Planner validation focus

Council independently confirms the Step-1 first-error focus and all three linked
alerts in the fresh runtime. Radio/checkbox group error semantics are present,
but group focus remains unconfirmed in this unattended capability. Retry in an
attended or genuinely different browser at desktop and phone, including grouped
controls and reduced motion; do not repeat hidden-browser clicks as a substitute.

### CYC-R7-F001 — Implemented, Owner confirmation pending — responsive scale repair

The pinned 16px design root and CSS-pixel breakpoints produce the expected
desktop/compact navigation and zero overflow at 1440, 1024, 720, and 390 CSS
pixels in the Council-owned runtime. The original second computer has not been
directly inspected, so Owner confirmation remains the closure test.

### Retained Owner-gated boundaries

- Public `metadataBase`, canonical URLs, sitemap, and indexability remain
  blocked on the approved production domain (`CYC-R2-F003` / `CYV-IFA-005`).
- Server-side Planner confirmation/email, consent, and retention remain
  blocked on provider decisions (`CYV-IFA-006`).
- About founder facts, Privacy/Terms jurisdiction, and abstract-versus-
  higher-fidelity concept artwork remain Owner decisions.
- Physical keyboard, visible reduced motion, cross-browser behavior,
  deployment, and real external mail side effects remain unclaimed.

## Methods assessment and next Builder plan

Round 9's shared-layer approach is producing measurable progress: a root-cause
scale fix was applied once at the design-system layer and the glass pass is
coherent across multiple surfaces. The next Builder action should be driven by
Owner confirmation of the second-device scale and largest remaining mockup
fidelity gap, then by the domain/email/legal decisions. Do not add speculative
artwork or production claims. Once those decisions arrive, implement and verify
production metadata and server-side Planner delivery with explicit success,
error, retry, consent, and retention behavior. The next Council should use an
attended/different capability for grouped focus, physical keyboard, and reduced
motion, then repeat route and static metadata checks.

## Verification scope and evidence

Evidence: `council/evidence/council-20260831T004000Z-round-review.md`, opened
Home/Services/Work/Planner captures, and `council/evidence/INDEX.md`. The Council
build probe was started but did not return while the dev runtime and Next build
workers shared the disposable `.next` tree; therefore no fresh Council build
pass is claimed. The Builder's round-9 lint/build/typecheck evidence is kept
separately attributed. No product source, tests, `.engine-lock`, Builder or
Auditor resources, external integrations, valid form submission, or external
mail side effect was modified or attempted.


---

<!-- council review CYC-R8-20260830-01 published 2026-08-31T01:25:33.9229510Z -->

# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R8-20260830-01`
- Role: Cyvexly Product Quality Assurance & Methods Council
- Round: `council-20260831T010000Z`
- Round started: `2026-08-31T01:00:11.4828032Z`
- Source head at snapshot: `85a1d2b995a877bf936937e63314d08cd547149b`
- Start dirty fingerprint: `769DC08C1926E560D8B337CC453929EDFE776DCF6CC1C8F069EFD70D8F8DF990`
- Current repository head at close: `95232d5c1b94afc61f676c0706663f2f60638176`
  (post-snapshot Builder CTA contrast commit was not reviewed in this runtime)
- Council runtime: `.codex/runtime/council/council-20260831T010000Z/runtime`, port `5373`
- Council nonce: `5d52e05ae7a449c3beefa9c735e7d07c`
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied
- Auditor: no active Auditor guard detected; latest `IFA-2026-08-30-R3` retained as stale evidence

## Executive brief

Round 8 freshly served the source after Builder commit `2d82b0b`, which fixes a
large-text/compact-width failure shape in two paired label/value patterns:
Pricing add-on rows and Process timing rows. Both pages were opened and viewed
end to end in the real Council in-app browser at `390×844` (CSS client width
`375`). The values now stack into readable lines, cards and CTAs remain intact,
and both routes report zero horizontal overflow.

This closes the implementation gap for these two rows. It does not change the
separate Owner-gated scale confirmation, glass/artwork parity, production
metadata/email, legal facts, or physical keyboard/reduced-motion boundaries.

## Direct visual observation

Pricing's phone render keeps the five package cards, comparison cards, care
plans, FAQ, CTA, and footer within the viewport. In the Add-ons section each
label is followed by its range on a separate line; long ranges no longer
compete with the label or force a narrow horizontal row. Process's phone render
keeps all five timeline cards, Typical timing, collaboration promise, CTA, and
footer readable. Typical timing rows show the number/title and timeframe in a
vertical rhythm rather than clipping the timeframe off the right edge.

The direct computed check found `scrollWidth - clientWidth = 0` on both routes.
At Pricing the representative add-on row has
`display:flex; flex-direction:column`; at Process the representative timing row
has the same phone-first direction and retains the `sm:flex-row` override in
source for larger layouts. The existing glass panels, cool-blue hierarchy, and
truthful copy remain consistent with the prior Council observations.

At `1440px`, the same Process timing rows computed as `display:flex;
flex-direction:row` with a `402px` content width, confirming that the compact
reflow preserves the intended desktop comparison layout.

At phone width, bounding-box checks contained both children inside the
representative Pricing `327px` row (`x=24..351`) and Process timing `269px` row
(`x=53..322`), with no right-edge escape or overlap.
At `1440px`, the Pricing comparison table remained a `1104px` table row with
zero internal overflow, preserving the desktop presentation.
At `768px`, the responsive comparison table remained active with zero page
overflow, confirming a stable breakpoint handoff between phone and desktop.

A source pattern sweep found no additional non-wrapping paired rows matching the
fixed failure shape. Remaining `justify-between` uses are wrapped FAQ/header
controls, `flex-wrap` process metadata, or already mobile-first Planner/footer
layouts; the full 15-route phone stress pass found no new overflow.

## Finding and disposition

### CYC-R8-F001 — Resolved — large-text/compact-width paired rows

Before `2d82b0b`, the Pricing add-on and Process timing rows used a horizontal
`justify-between` pattern with non-wrapping value behavior, a fragile shape when
the browser's default text size is large or the effective viewport is narrow.
The accepted source now uses column-first rows on compact widths and restores
the horizontal arrangement at `sm` and above. Council's fresh runtime visually
confirmed readable stacked values and zero horizontal overflow on both routes at
phone width. No content or desktop information architecture changed.

## Retained boundaries

- The round-9 16px design root/CSS-pixel breakpoint repair is independently
  confirmed, but the Owner still must verify the original second computer.
- The round-9 glass pass is coherent and materially richer, but final
  mockup-level luminous artwork/iconography remains an Owner decision.
- Public `metadataBase`, canonical URLs, sitemap/indexability, server-side
  Planner confirmation/email, consent/retention, About founder facts, and
  Privacy/Terms jurisdiction remain Owner-gated.
- Grouped Planner first-error focus, physical keyboard, visible reduced motion,
  cross-browser behavior, deployment, and real external mail remain unclaimed.

## Methods assessment and next plan

The large-text issue was addressed at the shared row-pattern level, with the
desktop override preserved instead of duplicating page-specific markup. The
next Builder pass should reuse this pattern for any new paired label/value rows
and validate the custom 24px profile before adding more content. The next
Council should inspect remaining paired data surfaces under a genuinely large
text profile, then return to Owner scale/artwork decisions and production
metadata/submission readiness after the required domain/email/legal inputs.

The primary `Describe your project` CTA was also activated from Home, Services,
and Work at phone width; each resolved to `/start` without triggering a form
submission.

## Evidence and scope limits

Evidence: `council/evidence/council-20260831T010000Z-large-text-mobile-review.md`,
the opened Pricing/Process phone captures, and `council/evidence/INDEX.md`.
Builder custom-24px evidence was read as context only and not promoted as
Council execution. No product source, tests, `.engine-lock`, Builder or Auditor
resources, external integrations, valid form submission, or external mail side
effect was modified or attempted.

The fresh runtime's direct ESLint command passed (`exit 0`). A standalone
TypeScript check before a successful production build reported the known
generated-artifact error `Cannot find name 'LayoutProps'` in `src/app/layout.tsx`;
the concurrent dev/build probe did not finish generating `.next/types`, so the
Council does not claim a clean typecheck or production build in this round.

## Post-snapshot source drift

During this round, Builder commit `95c365f` changed the primary CTA gradient in
`src/components/button.tsx` for contrast, followed by docs-only commit
`95232d5`. The Council runtime remained the immutable `85a1d2b` snapshot; the
CTA change was therefore not independently reviewed or promoted. The next
fresh Council snapshot should inspect its visual and contrast effect.


---

<!-- council review CYC-R9-20260830-01 published 2026-08-31T03:17:11.3143310Z -->

# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R9-20260830-01`
- Role: Cyvexly Product Quality Assurance & Methods Council
- Round: `council-20260831T025000Z`
- Round started: `2026-08-31T02:52:01.5315237Z`
- Source head at snapshot: `95232d5c1b94afc61f676c0706663f2f60638176`
- Start dirty fingerprint: `41440C449D805ED64FBBA67442949A741F35EDDEB9ED2C0D723E61EA070C5A43`
- Council runtime: `.codex/runtime/council/council-20260831T025000Z/runtime`, port `5373`
- Council nonce: `f82a9bf0af3b46a9a65f97d3d2dbcc3c`
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied
- Auditor: no active Auditor guard detected; latest independent evidence retained as context

## Executive brief

Round 9 freshly served the current accepted source, including Builder commit
`95c365f`, and independently reviewed its primary CTA contrast correction in the
real in-app browser. The CTA's normal and hover gradient samples now clear the
WCAG AA 4.5:1 threshold at every stop and across 201 interpolated samples. The
primary CTA remains visually prominent and reaches the usable Project Planner.

The broader live review found no responsive regression: Home was literally
viewed at desktop, tablet, and phone sizes; Pricing and Process were viewed at
desktop/phone or phone sizes; all 15 route targets were stress-tested at both
desktop and phone widths. Existing compact reflow, mobile menu, FAQ disclosure,
Planner empty-state, and Contact validation behavior remained coherent.

The approved mockup comparison still does not support a final visual-parity
claim. The shared glass/grid treatment is coherent and richer than the earlier
baseline, but the live Home hero orbit and restrained project/capability cards
remain visibly less luminous and less information-rich than
`mockups/01-home.png`. Preserve that as an Owner framing/artwork decision and
do not fabricate portfolio proof.

## Findings and dispositions

### CYC-R9-F001 — Resolved — primary CTA contrast

The fresh runtime computed the current normal CTA gradient as
`#0f66e0 → #1269e0 → #1671d1` with white text. Relative luminance ratios were
`5.254:1`, `5.094:1`, and `4.865:1`; the hover stops were `7.610:1`, `6.034:1`,
and `5.439:1`. Sampling 201 interpolated points found the same minima: `4.865:1`
normal and `5.439:1` hover. The correction in `95c365f` resolves the previous
bright center/end concern. A direct Home CTA click resolved to `/start` without
submitting data.

### CYC-R9-F002 — Owner decision retained — mockup-level glass/artwork parity

At `1440×900`, `768×1024`, and `390×844`, the actual page is calm, readable,
and consistently glass/grid-based. Side-by-side comparison with the approved
Home mockup shows a meaningful remaining fidelity gap: the hero is a simple
hand-authored SVG orbit rather than the mockup's luminous device treatment, and
the selected-work/capability panels lack the mockup's richer imagery,
iconography, and layered detail. The implementation is honest about concept
projects and remains coherent; the Owner must decide whether this is release
sufficient or whether more commissioned/approved artwork is needed.

### CYC-R9-F003 — Resolved — responsive and route baseline

The 15-route desktop and 15-route phone probes found one `main` and one `h1`
per render, zero document overflow, zero empty links, zero missing image alts,
and no console warnings or errors. Pricing and Process compact rows remained
readable. `/about`, `/privacy`, and `/terms` continue to render the intentional
custom 404 and remain documented Owner/jurisdiction debt rather than a new
regression.

### CYC-R9-F004 — Confirmed — important interaction states

The compact mobile menu opened to a six-link navigation sheet and closed again.
The FAQ timing disclosure changed `aria-expanded` to `true` and exposed the
truthful package timing ranges. Empty Planner Step 1 Continue focused
`input#fullName` and surfaced its three linked alerts. Empty Contact submit
kept the user on `/contact`, marked the four required controls invalid, and
showed the correction alert. These checks are browser-harness interaction
proof, not physical-keyboard or cross-browser closure.

## Methods assessment and next Builder plan

The Builder addressed the CTA issue at the shared ButtonLink variant, which is
the right scope for consistent contrast across Home, navigation, pricing cards,
and closing CTAs. The Council's independent fresh-runtime contrast and route
checks confirm no responsive or interaction regression.

Next Builder work should be Owner-led and measured: ask for the second-device
scale confirmation and a concrete priority for the remaining mockup-fidelity
gap, then refine shared glass/artwork primitives only against that direction.
Keep the concept disclosure intact. Separately, do not wire production
metadata, Privacy/Terms, About facts, or server-side Planner email until the
Owner supplies domain, jurisdiction, founder, and transactional-provider
decisions. The next Council should use a different question—preferably the
remaining large-text paired-data surfaces or an attended/different capability
for grouped Planner focus and reduced motion.

## Evidence and scope limits

Evidence is indexed in `council/evidence/INDEX.md`, led by
`council-20260831T025000Z-cta-contrast-review.md` and its cited screenshots and
JSON probes. `pnpm exec eslint .` and `pnpm exec tsc --noEmit` both exited 0 in
the isolated Council runtime. Council did not edit product source or tests,
claim production deployment, submit a valid form, send mail, or touch Builder,
Auditor, or `.engine-lock` resources.



---

<!-- council review CYC-R10-20260830-01 published 2026-08-31T04:15:36.7102297Z -->

# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R10-20260830-01`
- Role: Cyvexly Product Quality Assurance & Methods Council
- Round: `council-20260831T035000Z`
- Round started: `2026-08-31T03:50:18.0339270Z`
- Source head at snapshot: `a1245d8d449d32b723a785db2a14fae0ea3998f2`
- Start dirty fingerprint: `1B85F03232656FA96FDAA2FC2D2AA0861ACE0920797F23DE43BE649172D9E495`
- Council runtime: `.codex/runtime/council/council-20260831T035000Z/runtime`, port `5373`
- Council nonce: `94383597789e4abd89fa923f8cb2315c`
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied
- Auditor: no active Auditor guard detected; prior independent evidence retained as context

## Executive brief

Round 10 freshly served the post-R9 source and independently reviewed the
Builder's shared glass-system structure pass. The new inset header shell, five
credibility icons, six capability/service icons, and signal-edge treatment are
visible at desktop, tablet, and phone sizes. The result is materially closer to
the approved Home direction without inventing portfolio proof or changing the
16px root and compact breakpoint behavior.

The live review also opened Services, Work, Pricing, and Process in the
Council-owned in-app browser, exercised mobile navigation, FAQ disclosure, and
empty Planner validation, and stress-tested all 15 route targets at 1440px and
390px. No overflow, landmark, heading, image-alt, menu, or route regression was
found. Lint, typecheck, and production build passed in the isolated runtime;
the existing `metadataBase` localhost fallback warning remains domain-gated.

## Findings and dispositions

### CYC-R10-F001 — Resolved/accepted — shared glass-system structure

At `1440×900`, `768×1024`, and `390×844`, the header is an inset rounded shell
with consistent spacing, the credibility rail exposes five crisp line icons,
and the six Home capability cards expose service icons and signal edges. The
fresh scale evidence reports a 16px root, zero overflow, one `main` and one
`h1` at all three sizes, and correct full/compact navigation states. This
closes the structural visual question raised by the Builder's round-10 plan;
the closure test is preserved icon/shell behavior under the next accepted
visual change.

### CYC-R10-F002 — Owner decision retained — mockup-level visual parity

Side-by-side opened comparison with `mockups/01-home.png` confirms meaningful
progress, but not final parity. The live hero remains a restrained orbit SVG,
and selected-work/capability panels remain less luminous, layered, and
art-directed than the approved mockup's device/globe treatment and richer
artwork. This is an Owner choice about release sufficiency and approved
artwork, not a reason to fabricate evidence. Closure requires an Owner-selected
largest discrepancy and a fresh visual comparison against that target.

### CYC-R10-F003 — Resolved/no regression — shared shell and route resilience

Fresh route-a/b/c probes covered all 15 route targets at desktop and phone:
each render had one `main`, one `h1`, no horizontal overflow, heading skips,
or missing image alts. Contact labels and Planner labels were confirmed in
the live DOM; `/about`, `/privacy`, and `/terms` remain intentional custom 404s
and existing Owner/jurisdiction debt. Pricing desktop, Services phone, Work
phone, and Process phone captures show the shell and card language continues
through connected routes without clipping.

### CYC-R10-F004 — Confirmed — important interaction states

The phone menu opened to six links inside the shell and closed again. The FAQ
timing disclosure changed `aria-expanded` from false to true and exposed its
answer. Empty Planner Step 1 focused `input#fullName` and surfaced the three
expected validation alerts. CTA styling and handoff remain unchanged from the
R9 contrast closure. These are in-app browser proofs, not physical-keyboard,
cross-browser, reduced-motion, or valid external-delivery closure.

### CYC-R10-F005 — Confirmed — verification health

`pnpm exec eslint .`, `pnpm exec tsc --noEmit`, and `pnpm run build` all passed
in the disposable Council runtime. The build emitted only the known
`metadataBase` fallback warning. No Council-owned source or test changes were
made.

## Methods assessment and Primary Next-Builder Plan

The Builder's component-level structural pass was the right method: it
improved the shared shell and repeated card language in one coherent slice and
produced a visible result without token churn or semantic debt. The next
Builder round should be Owner-led: select the single largest remaining
mockup-fidelity gap, then refine only the shared hero/artwork primitive and
connected cards needed for that direction while retaining concept disclosures.
Do not begin production metadata, About/Privacy/Terms facts, or server-side
Planner delivery until the Owner supplies domain, jurisdiction, founder, and
transactional-provider decisions.

The strongest different next Council question is an attended or genuinely
different capability for grouped Planner focus, physical keyboard behavior,
reduced motion, and cross-browser confirmation after the Owner visual choice.

## Evidence and scope limits

Evidence is indexed in `council/evidence/INDEX.md`, led by the R10 report
evidence, Home desktop/tablet/phone/full captures, Services/Work/Process phone
captures, Pricing desktop, route-a/b/c probes, and `control-audit.json`.
Council did not edit product source or tests, submit a valid form, send mail,
claim deployment, or touch Builder, Auditor, or `.engine-lock` resources.

### Post-publication correction note (2026-08-31)

At closeout, a new uncommitted Builder delta was present after the immutable
R10 snapshot: `HeroShowcaseVideo`, two public media assets, related Home
layout/import changes, and `.hero-video-shell` CSS. The R10 runtime did not
serve this delta, so no claim in the report applies to it. The next fresh
Council must inspect the new hero media path. Durable evidence:
`council/evidence/council-20260831T035000Z-post-snapshot-drift.md`.


---

<!-- council review CYC-R11-20260830-01 published 2026-08-31T05:14:29.8503163Z -->

# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R11-20260830-01`
- Role: Cyvexly Product Quality Assurance & Methods Council
- Round: `council-20260831T044800Z`
- Round started: `2026-08-31T04:49:15.5241348Z`
- Source state: `GIT_WORKTREE`, head `a1245d8d449d32b723a785db2a14fae0ea3998f2`
- Start dirty fingerprint: `B6E641956B2F688BB9DC14C61F98A233FB4A521C28CEE50422D4D09AC8575E35`
- Council runtime: `.codex/runtime/council/council-20260831T044800Z/runtime`, port `5373`
- Council nonce: `19c5acdff0ab4503a9cf43794326d785`
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied
- Auditor: no active Auditor guard detected

## Executive brief

Round 11 freshly served the previously unreviewed working-tree Hero Showcase
Video change. The Home hero now uses a local 30-second 1280×720 H.264 loop with
a 12 KB WebP poster, muted autoplay, and an explicit play/pause button. It is a
meaningful visual convergence toward the approved futuristic direction and is
materially stronger than the restrained orbit, while remaining honest about
the product and concept work.

The fresh Council-owned in-app browser literally viewed Home at desktop,
laptop, tablet, and phone sizes, plus a full phone and desktop page. Services
was viewed end to end at phone width. All 15 route targets were stress-tested
at 1440px and 390px. The new media loaded locally without console warnings,
maintained a fixed aspect ratio, and introduced no overflow or landmark drift.
Lint, typecheck, and production build passed; the known `metadataBase`
localhost fallback warning remains domain-gated.

## Findings and dispositions

### CYC-R11-F001 — Next/accepted direction — Hero Showcase Video convergence

Opened desktop and full-page renders show the new dark-blue systems footage,
cyan highlights, service caption, and pause control occupying the intended hero
media frame. At `1440×900`, the video is `454.5×254.8` in the 1024 laptop
breakpoint and `528×297` at desktop; at `768×1024` it stacks at `703×394.6`,
and at `390×844` it stacks at `325×181.9`. All measured renders had zero
horizontal overflow. The video is substantially closer to the mockup's
futuristic energy, but the approved reference still uses a bright globe/device
composition and lighter art-directed field. Final parity remains an Owner
decision; closure requires the Owner's selected discrepancy and a fresh
side-by-side comparison.

### CYC-R11-F002 — Next — media performance and reduced-motion proof

The local MP4 is 3,978,486 bytes, 30 seconds, 1280×720 H.264; the poster is
12,006 bytes. `preload="metadata"` is present, but the client starts muted
autoplay when the document is visible. The play/pause control worked: current
time advanced while playing and stopped after pause, with `aria-label` and
`aria-pressed` transitions. HEAD requests returned `200 video/mp4` and
`200 image/webp`. This is useful product media, not proof of a performance
budget: the next Builder/Council pass should measure first-load/LCP on a
constrained connection and verify the `prefers-reduced-motion` path in a
genuinely different capability. If the budget is missed, prefer poster-first
or deferred playback while retaining the accessible control.

### CYC-R11-F003 — Resolved/no regression — responsive and semantic continuity

Fresh route-a/b/c probes covered all 15 targets at desktop and phone. Every
render had one `main`, one `h1`, zero horizontal overflow, zero missing image
alts, and no heading-skip signal from the probe. `/about`, `/privacy`, and
`/terms` remain intentional custom 404s and existing Owner/jurisdiction debt.
The Home figure exposes a caption in the accessibility tree, keeps the video
decorative with `aria-hidden`, and exposes one visible enabled play/pause button.
Services phone remains visually coherent with the shared shell and card system.

### CYC-R11-F004 — Confirmed — important interaction states

At phone width, the menu opened to five route links plus its project CTA (six
links total) and closed without overflow. The timing FAQ disclosure changed
`aria-expanded` from false to true and exposed the `2–3 weeks` answer. Empty
Planner Step 1 focused `fullName`, exposed three linked alerts, and retained
accessible names for Full name, Work email, and Phone or preferred contact
method. These are in-app browser proofs, not physical-keyboard, cross-browser,
reduced-motion, or valid external-delivery closure.

### CYC-R11-F005 — Observation — Builder evidence boundary

The Hero Showcase Video and media arrived as an uncommitted working-tree
delta, with no matching round-11 Builder visual plan or asset evidence in the
Builder lane. The Council independently reviewed the actual runtime, but the
Builder should document asset provenance/rights, target media budget, poster
fallback, reduced-motion behavior, and the intended visual comparison before
claiming this slice complete. This protects source-to-evidence traceability;
it is not a request for the Council to edit Builder records.

### CYC-R11-F006 — Confirmed — verification health

`pnpm exec eslint .`, `pnpm exec tsc --noEmit`, and `pnpm run build` all passed
in the disposable Council runtime. The build emitted only the known
`metadataBase` fallback warning. No Council-owned source or product source was
changed by this review.

## Methods assessment and Primary Next-Builder Plan

Replacing the generic orbit with a real local motion asset was a high-leverage
visual method: it directly addressed the Owner's futuristic-fidelity concern
while keeping the existing hero layout, content, and CTA path intact. The next
Builder slice should be evidence-led and bounded: (1) document the media
provenance and target performance budget, (2) verify poster-first and reduced
motion behavior, (3) choose whether the remaining globe/device mismatch is an
Owner-approved artwork request, and (4) only then refine connected lower-page
artwork. Preserve concept disclosures and do not start production metadata,
legal facts, or server-side Planner delivery without the required Owner inputs.

The strongest different next Council question is a constrained-network and
reduced-motion media audit in an attended or otherwise genuinely different
capability, followed by physical keyboard and cross-browser checks.

## Evidence and scope limits

Evidence is indexed in `council/evidence/INDEX.md`, led by the R11 Home
desktop/tablet/phone/full captures, Services phone capture, route-a/b/c probes,
Home accessibility excerpt, and `control-audit.json`. Council did not edit
product source or tests, submit a valid form, send mail, claim deployment, or
touch Builder, Auditor, or `.engine-lock` resources.


---

<!-- council review CYC-R12-20260830-01 published 2026-08-31T06:16:37.6938186Z -->

# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R12-20260830-01`
- Role: Cyvexly Product Quality, Assurance & Methods Council
- Round: `council-20260831T054800Z`
- Scheduler timestamp: `2026-08-31T05:48:38.165Z`
- Durable guard start: `2026-08-31T05:50:50.8938779Z`
- Source state: `GIT_WORKTREE`; immutable Council snapshot head
  `c0a8cc8805fe8bf478f254cdde65e4f8e47a3281` (current workspace HEAD at
  publication preparation is `dc900bb`; post-snapshot drift is documentation/
  evidence only: `CYVEXLY_ACTIVE_CHUNK.md`, `CYVEXLY_NEXT_BUILDER_HANDOFF.md`,
  and the Builder hero comparison note)
- Start dirty fingerprint: `51E05A2AB859FACD2D6E38FEC080D20B3D70A4009616F441FEA186F37923FAD4`
- Council runtime: `.codex/runtime/council/council-20260831T054800Z/runtime`, port `5373`
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied
- Auditor: no active Auditor guard detected

## Executive brief

Round 12 reviewed accepted Builder follow-up work after Round 11: the Hero Showcase Video now has documented constrained-network, poster-first, data-saver, reduced-motion, range-delivery, and loop evidence. A fresh Council-owned production runtime was served and literally viewed at desktop, tablet, and phone sizes. The hero is visually stronger and responsive, and the media controls and important flows remain usable. The approved Home mockup is still materially brighter and more art-directed; final parity remains Owner-gated.

## Findings and dispositions

### CYC-R12-F001 — Next — media direction is stronger, parity remains open

Fresh opened production captures at `1440×900`, `768×1024`, and `390×844` show the dark systems footage in a bounded 16:9 glass panel. Copy and CTAs retain priority, the tablet stacks cleanly, and the phone panel stays contained. Comparing the opened runtime with `mockups/01-home.png` confirms meaningful futuristic convergence, but the reference still has the brighter globe/device composition and richer lower-page artwork. Closure test: Owner selects the largest remaining discrepancy and approves the visual target before another fidelity pass.

### CYC-R12-F002 — Confirmed/Next — performance and motion safeguards are evidenced, field proof remains open

Builder evidence now records a cold `150ms`/approximately `1.64Mbps` run with poster LCP near `1.004s`, CLS `0.00009`, active playback after eight seconds, and 206 range delivery. It also records save-data and reduced-motion poster-first behavior, explicit native Enter play, and a luminance scan. The live Council runtime verified the poster-backed muted loop, named Play/Pause control, and explicit pause/play state transitions. Physical keyboard hardware, Safari/Firefox, field Core Web Vitals, and local flash-area analysis remain unconfirmed. Closure test: repeat the same proof in an attended/different capability and inspect the full loop for acceptable end-to-start composition.

### CYC-R12-F003 — Resolved/no regression — responsive, semantic, and route baseline

All 15 route targets at desktop and phone had exactly one `main` and one `h1`, zero horizontal overflow, and zero missing image alts. The Home figure exposes its caption via `aria-labelledby`; decorative video is `aria-hidden`; the playback button is visible, enabled, named, and target-linked. `/about`, `/privacy`, and `/terms` remain intentional Owner-blocked 404s, not regressions.

### CYC-R12-F004 — Confirmed — important flows remain coherent

At phone width the compact menu opened with `aria-expanded=true`, exposed five route links plus the project CTA, and closed cleanly. The timing FAQ transitioned from `aria-expanded=false` to `true` and exposed its `2–3 weeks` answer. Empty Planner Step 1 focused `fullName`, exposed three linked alerts, and marked the three required fields invalid. No external submission was made.

### CYC-R12-F005 — Observation — Council hot-file check surfaced pre-existing Builder cap debt

`Test-HotFileCaps.ps1` reports `CYVEXLY_BUILD_SUMMARY.md` at `25,436` bytes against its `24,576`-byte cap. This is outside Council ownership and was not edited. It should be rotated by the Builder before the next closeout; otherwise the repository-wide cap check cannot be green even though Council hot files are within limits.

## Methods assessment and Primary Next-Builder Plan

The Builder's method improved materially: a real constrained profile and preference branches answered the prior evidence gap instead of repeating visual token work. The next coherent Builder slice is: (1) preserve the documented media budget and provenance, (2) let the Owner judge the loop seam and remaining globe/device/artwork mismatch, and (3) if the Owner chooses performance as priority, compare a smaller or multi-codec derivative against the recorded cold baseline without silently replacing supplied media. Keep metadata, legal routes, and server-side Planner delivery behind their explicit Owner decisions. Rotate the over-cap Builder summary as a separate methods-hygiene repair.

The strongest different next Council question is an attended/different-capability verification of reduced-motion, physical keyboard traversal, cross-browser behavior, and the full-loop visual seam, followed by original-second-device scale confirmation.

## Evidence and limits

Durable evidence is indexed in `docs/agent-system/cyvexly/council/evidence/INDEX.md`, including opened clean production Home desktop/tablet/phone/full captures, Services/Pricing/Process phone captures, route-a/b JSON, media preference/control audits, and the opened first/last source frames. The Council used the fresh in-app browser, direct Playwright interaction, DOM/accessibility snapshots, source/diff inspection, HTTP HEAD/range checks, ffprobe, and isolated lint/build/typecheck. The Council did not edit product source/tests, submit Planner data, or touch Builder, Auditor, or `.engine-lock` resources.

During verification, rebuilding the disposable production server while it was
running briefly left one stale CSS chunk reference and an unstyled Contact
capture. Council stopped/restarted only its registered production processes,
reloaded the route, confirmed the styled render, and overwrote the uncited
capture. The cited Contact image is the stabilized post-restart state.


---

<!-- council review CYC-R13-20260830-01 published 2026-08-31T07:15:08.3560196Z -->

# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R13-20260830-01`
- Role: Cyvexly Product Quality, Assurance & Methods Council
- Round: `council-20260831T064900Z`
- Scheduler timestamp (minute zero): `2026-08-31T06:49:39.226Z`
- Durable guard start: `2026-08-31T06:50:13.3589754Z`
- Source state: `GIT_WORKTREE`; immutable Council snapshot head
  `dc900bb92d1605f3b56c1044a3aa813afbf11d22`; no product-source changes were
  observed during this round.
- Start dirty fingerprint:
  `BABD0863221F2355F27E5F883D532A00C19C4C3F389D0E583A4F8E563B0BBCD1`
- Council runtime: `.codex/runtime/council/council-20260831T064900Z/runtime`,
  port `5373`
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied
- Auditor: no active Auditor guard detected

## Executive brief

Round 13 selected a different meaningful question from the prior Hero Showcase
Video follow-up: whether the FAQ, Contact, Work-filter, case-study, Planner,
and legal/route surfaces form a coherent final utility path while preserving
the established responsive and media baseline. A fresh production build was
served in the isolated Council runtime. The FAQ Project timing anchor and
disclosure worked at desktop and phone; empty Contact validation produced its
alert plus four field-level `aria-invalid` states; the Commerce filter exposed
Vellora Care and its case-study handoff. All 15 route targets retained one
`main`, one `h1`, and zero horizontal overflow at `1440×900` and `390×844`.
The Home remains visibly less luminous and less art-directed than the approved
mockup, so final parity and launch-boundary decisions remain Owner-gated.

## Findings and dispositions

### CYC-R13-F001 — Confirmed/Next — FAQ and Contact are coherent but delivery remains interim

Opened production captures show a legible responsive FAQ hierarchy with
category anchors and disclosure cards. Expanding “How long does a typical
project take?” changed `aria-expanded` from `false` to `true` and exposed the
published `2–3 weeks` Signal answer at both viewports. Contact keeps the
branded grid/hero, labelled Name/Email/Topic/Message/consent controls, direct
`mailto:hello@cyvexly.com` fallback, and Project Planner links. Submitting the
empty form was intentionally used only as a validation probe: the page showed
“Please fix the highlighted fields below.” and marked four controls invalid;
no external submission occurred. The mailto delivery boundary remains the
documented Owner-gated interim path. Closure test: Owner chooses the final
server-side email/storage and data-retention behavior, then Council verifies
success/error/retry and receipt in a sandbox.

### CYC-R13-F002 — Confirmed/no regression — production route and interaction baseline

The fresh production route sweep reached all 15 configured targets at desktop
and phone. Every target exposed one `main`, one `h1`, and zero horizontal
overflow; nine image-bearing content routes had zero missing image alts. The
Commerce Work filter selected `Vellora Care`, and `/work/vellora-care` exposed
one `main`, one `h1`, zero overflow, and `/start`/`/contact` CTAs. `/about`,
`/privacy`, `/terms`, `/cookies`, and `/thank-you` continue to render the
documented intentional not-found or lifecycle/legal boundaries, not a new
regression.

### CYC-R13-F003 — Confirmed/Next — media delivery remains bounded and observable

The production Home video was literally viewed at desktop and phone sizes.
The element was muted, looping, ready to play, and paired with a named
Pause/Play control; the clean production console had no warnings or errors.
`HEAD /media/cyvexly-services-loop.mp4` returned `200` with `video/mp4`,
`3,978,486` bytes, and `Accept-Ranges: bytes`; a `bytes=0-1023` request
returned `206` with the expected `Content-Range`. Builder's prior constrained,
data-saver, reduced-motion, and loop evidence remains useful, but physical
keyboard hardware, Safari/Firefox, field Web Vitals, and complete-loop
end-to-start acceptance remain unclaimed. Closure test: use an attended or
different capability and inspect the full loop and keyboard path.

### CYC-R13-F004 — Next — final visual parity is still an Owner framing decision

Fresh clean production Home captures at desktop, tablet, phone, and full-page
views were opened and compared with `mockups/01-home.png`. The live glass/grid
system and dark systems panel are coherent, but the approved reference still
has the brighter globe/device hero, richer selected-work/capability artwork,
and denser art direction. This is not permission to fabricate portfolio
evidence. Closure test: Owner selects the largest remaining globe/device/
artwork discrepancy and accepts the target or requests a bounded fidelity
slice.

### CYC-R13-F005 — Observation — repository hot-file cap remains blocked by Builder ownership

`Test-HotFileCaps.ps1` still reports the pre-existing Builder-owned
`CYVEXLY_BUILD_SUMMARY.md` at `25,436` bytes against its `24,576`-byte cap.
Council hot files remain within their caps; Council did not edit Builder-owned
records. Builder should rotate that summary before the next repository-wide
green cap check.

## Methods assessment and Primary Next-Builder Plan

The product utility path is coherent and honest in the current implementation:
FAQ answers are discoverable, Contact validation is explicit, Work filtering
preserves concept disclosure, and route semantics remain stable. The next
Builder slice should not be token churn: preserve the current responsive/
semantic baseline, then execute only the Owner-selected visual parity slice or
the Owner-authorized delivery/metadata work. In parallel, rotate the over-cap
Builder summary without rewriting Council evidence. Keep About/Privacy/Terms,
metadataBase, server-side Planner delivery, full-loop acceptance, keyboard,
cross-browser, and second-device scale behind their stated Owner/capability
decisions.

The strongest different next Council question is attended/different-capability
verification of physical keyboard traversal, reduced-motion and full-loop
behavior, plus original second-device scale confirmation after Owner selects
the final visual target.

## Evidence and limits

Durable evidence is indexed in `docs/agent-system/cyvexly/council/evidence/INDEX.md`,
including opened clean Home/FAQ/Contact production captures at desktop/phone,
the FAQ/Contact review, production route probes, Work filter and case-study
checks, Contact/legal audit, a11y landmarks, media HTTP proof, control audit,
and build/a11y evidence. The Council used the fresh in-app browser, direct
Playwright interaction, literal image viewing, route/landmark probes, source
reconciliation, HTTP HEAD/range checks, and isolated lint/typecheck/build.
The Council did not edit product source/tests, submit Planner or Contact data,
or touch Builder, Auditor, or `.engine-lock` resources. The runtime was
restarted only within Council ownership after the production build to avoid
stale development assets; the clean cited captures are post-restart.

---

<!-- council correction CYC-R13-20260830-01 recorded 2026-08-31T07:18:36Z -->

## Post-publication correction

The immutable R13 snapshot/runtime contained no product-source changes. After
publication and cleanup, the current working tree was found to contain
unreviewed modifications to `src/app/page.tsx` and `src/app/globals.css`.
Those files were not in the Council runtime and were not edited by Council;
the evidence and next-round routing are recorded in
`council/evidence/council-20260831T064900Z-post-publication-drift.md`.


---

<!-- council review CYC-R14-20260830-01 published 2026-08-31T08:16:26.3022507Z -->

# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R14-20260830-01`
- Role: Cyvexly Product Quality, Assurance & Methods Council
- Round: `council-20260831T075100Z`
- Scheduler timestamp (minute zero): `2026-08-31T07:51:10.391Z`
- Durable guard start: `2026-08-31T07:51:40.1950260Z`
- Source state: `GIT_WORKTREE`; immutable Council snapshot head
  `061fb00bf74da16ed5b824b77444b3b194de9652` (Builder product commit
  `13d3673` plus its closeout records).
- Start dirty fingerprint:
  `F2A50D189A58054D0BC1899FB5D526E14EFE1C4368BF6EE71692622FE11B2573`
- Council runtime: `.codex/runtime/council/council-20260831T075100Z/runtime`,
  port `5373`
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied
- Auditor: no active Auditor guard detected

## Executive brief

Round 14 independently reviewed the accepted Builder Round 12 Home mid-page
slice after the previous Council's snapshot boundary: an original partnership
system diagram and a five-stage process route with distinct icons and a
responsive connector. Fresh in-app-browser use and literally viewed clean
production captures at desktop, tablet, phone, and full-page sizes confirm that
the new structures are coherent, contained, semantic, and meaningfully closer
to the approved visual direction. The overall Home still falls short of the
reference's luminous globe/device hero and richer lower-page artwork; final
parity remains Owner-gated.

## Findings and dispositions

### CYC-R14-F001 — Confirmed/Next — the mid-page structure slice closes its named gaps

The partnership panel now has an original wireframe cube, orbit traces, signal
nodes, and adjacent “Built around your business” copy. The five-stage Home
process now reads as a route: numbered nodes, distinct line icons, and one
desktop connector. At tablet/phone widths the connector disappears and each
stage becomes a contained glass card, avoiding a false line across wrapped
rows. The ordered-list semantics, stage order, copy, and links remain intact.
Production measurements recorded desktop panel `1104×313.11` with five
nodes/icons and a connector; tablet panel `705×363` with connector `none`; and
phone panel `327×574.83` with connector `none`; all had zero overflow.
Closure test: retain these responsive rules while the Owner selects the next
single highest-value parity gap; do not reopen this slice as token-only tuning.

### CYC-R14-F002 — Confirmed/no regression — connected Home experience and controls

Opened Home renders remain coherent from hero through selected work,
capabilities, partnership panel, process, pricing, FAQ, CTA, and footer. The
compact phone menu opened (`aria-expanded=true`) and closed without overflow.
The Hero Showcase Video toggled from Pause to Play and back, remaining muted,
looping, and inline; the partnership graphic reports `aria-hidden=true` and
process icons are decorative. The 15-route production sweep retained one
`main`, one `h1`, zero overflow, and zero missing image alts at desktop and
phone. Focused changed/connected routes had no duplicate IDs or visible
unnamed controls; console warnings/errors were empty.

### CYC-R14-F003 — Next/Owner Decision — meaningful convergence, final parity open

The side-by-side opened Home comparison with `mockups/01-home.png` confirms
real convergence: the formerly text-only panel has a visual system object and
the formerly detached process columns have route grammar. The live page is
still less luminous and less art-directed than the reference, which retains a
bright globe/device hero, more elaborate project artwork, and richer final-CTA
art. This is an Owner framing decision, not permission to fabricate portfolio
proof. Closure test: Owner names the largest remaining discrepancy and either
accepts the target or authorizes one bounded fidelity slice.

### CYC-R14-F004 — Confirmed/Next — build and media proof remain healthy but bounded

Council's isolated `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build` all
passed. Build output repeats the known `metadataBase` localhost fallback
warning, which remains domain/Owner-blocked. Production media delivery returns
`200` `video/mp4`, `3,978,486` bytes, `Accept-Ranges: bytes`, and `206` for a
1,024-byte range request. These checks do not close physical keyboard,
Safari/Firefox, field Web Vitals, full-loop end-to-start, or original
second-device-scale proof.

### CYC-R14-F005 — Confirmed — repository hot-file caps are green

`Test-HotFileCaps.ps1` passed across the repository. Builder's rotated
`CYVEXLY_BUILD_SUMMARY.md` is now `17,540` bytes against its `24,576`-byte cap;
all Council hot files also remain within their limits. Council did not edit
Builder-owned records.

## Methods assessment and Primary Next-Builder Plan

The Builder method converged this round: it mapped two visible mockup gaps to
one coherent code-native structure slice, wrote a visual plan before editing,
preserved truthfulness and accessibility, and supplied exact responsive proof.
The next Builder slice should be Owner-led rather than another generic polish
pass: keep the diagram/process rules stable, ask the Owner to choose the single
largest globe/device/artwork mismatch, then implement and render only that
bounded target. Keep metadataBase, About/Privacy/Terms, server-side Planner/
Contact delivery, and concept-art framing behind explicit Owner decisions.
Rotate the over-cap Builder summary separately.

The strongest different next Council question is an attended/different-
capability verification of physical keyboard traversal, reduced-motion and
full-loop behavior, Safari/Firefox parity, and the original second-computer
scale after the Owner names the final visual target.

## Evidence and limits

Durable evidence is indexed in `docs/agent-system/cyvexly/council/evidence/INDEX.md`,
including the opened clean Home desktop/tablet/phone/full captures, Process
desktop/phone captures, the mid-page review, production structure
measurements, route/a11y/control/console audits, media HTTP proof, and build
evidence. The Council used the fresh in-app browser, direct Playwright
interaction, literal image viewing, source/diff reconciliation, route/landmark
probes, HTTP HEAD/range checks, and isolated lint/typecheck/build. Council did
not edit product source/tests, submit Planner or Contact data, or touch
Builder, Auditor, or `.engine-lock` resources. The runtime was restarted only
within Council ownership after the build so cited captures are clean
production state.


---

<!-- council review CYC-R15-20260830-01 published 2026-08-31T09:14:27.4907497Z -->

# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R15-20260830-01`
- Role: Cyvexly Product Quality, Assurance & Methods Council
- Round: `council-20260831T084900Z`
- Scheduler timestamp (minute zero): `2026-08-31T08:49:11.413Z`
- Durable guard start: `2026-08-31T08:49:31.0640546Z`
- Source state: `GIT_WORKTREE`; immutable Council snapshot head
  `061fb00bf74da16ed5b824b77444b3b194de9652`; no product-source drift since
  R14.
- Start dirty fingerprint:
  `0B35F235B04E04AC86671FE74EA9CA0202F0DC7879A69E4E70C903077234CB23`
- Council runtime: `.codex/runtime/council/council-20260831T084900Z/runtime`,
  port `5373`
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied
- Auditor: no active Auditor guard detected

## Executive brief

Round 15 selected a genuinely different question because no Builder source
drift arrived after R14: does the reachable product remain contained and
usable at an unusually compact `320px` viewport, and can this capability close
the Hero Showcase loop seam? Fresh in-app-browser use and literally viewed
production captures at desktop, tablet, phone, full-page, and compact utility
flows confirm a coherent, semantic, no-overflow experience. The 30-second
video loop wrapped end-to-start in Chromium. Final visual parity and attended
cross-capability proof remain open.

## Findings and dispositions

### CYC-R15-F001 — Confirmed — compact route and utility containment

The `320px` production sweep reached all 15 configured targets with one `main`,
one `h1`, zero horizontal overflow, and zero missing image alts. Home, Planner,
Contact, FAQ, Work, Process, and Services also had no duplicate IDs or visible
unnamed controls. Literally viewed Home, Planner, and Contact compact captures
keep copy, fields, cards, labels, and CTAs contained and readable without
clipping. Preserve this narrow-width behavior; do not trade it for visual
parity token churn.

### CYC-R15-F002 — Confirmed — utility-flow state integrity

At compact width, the menu opened and closed with `aria-expanded` true/false,
six visible menu links, and no overflow. The muted, looping, inline video
paused and resumed through its named control. FAQ timing disclosure exposed
its answer and showed a 2px Cyber Blue focus ring. Work filtering exposed only
Vellora Care for Commerce and all three concept cards for Concept, with correct
pressed states. Empty Contact validation remained local and marked `name`,
`email`, `message`, and `consent` invalid. Planner Save & continue later
produced its local status message without external data submission.

### CYC-R15-F003 — Confirmed/bounded — Hero Showcase full loop

Production playback was observed for the 30-second asset through the wrap from
`29.83s` to `0.87s`, remaining `readyState=4`, muted, inline, and unpaused. The
loop-seam question is closed for this Chromium capability. Reduced-motion
emulation, Safari/Firefox, field Web Vitals, and the Owner's second device are
not proven here.

### CYC-R15-F004 — Next/Owner Decision — final visual parity remains open

The side-by-side opened Home comparison still shows meaningful convergence in
the glass/grid system, partnership object, process route, and honest concept
artwork. The approved mockup remains brighter and more art-directed, especially
the globe/device hero and richer project/final-CTA artwork. Owner must name the
single largest remaining discrepancy before another bounded fidelity slice;
Council does not authorize fabricated portfolio proof.

### CYC-R15-F005 — Confirmed/Methods note — build and caps

`pnpm lint` passed. A clean-runtime `pnpm exec tsc --noEmit` before build
reported the generated Next global `LayoutProps` missing; after `pnpm build`
created `.next` artifacts, the same typecheck passed and production served
successfully. This is a setup-order boundary, not a source regression.
Media HEAD/range delivery remains `200`/`206` with the expected MP4 headers, and
`Test-HotFileCaps.ps1` is green, including the rotated Builder summary.

## Methods assessment and Primary Next-Builder Plan

The current method produces useful progress without repeating the prior
mid-page review: it stress-tested a new compact breakpoint, utility state
transitions, local validation/save boundaries, and a full playback wrap while
preserving direct visual review. The next Builder slice should remain Owner-led:
choose one highest-value globe/device/artwork mismatch, keep the proven compact
containment rules stable, and render only that bounded target. Keep metadata,
legal identity, server-side delivery, and external-mail behavior behind explicit
Owner decisions.

The strongest different next Council question is an attended/different-
capability review of physical keyboard traversal, reduced-motion behavior,
Safari/Firefox parity, and second-device scale, now that compact containment and
the Chromium loop seam are independently observed.

## Evidence and limits

Durable evidence is indexed in `docs/agent-system/cyvexly/council/evidence/INDEX.md`,
including the compact review, clean required-viewpoint captures, compact
Home/Planner/Contact views, route/a11y/control/planner-save audits, full-loop
samples, media HTTP proof, and build evidence. Council did not edit product
source/tests, submit Planner or Contact data, or touch Builder, Auditor, or
`.engine-lock` resources. The browser's unattended key-press harness did not
advance native Tab/Enter traversal reliably, so physical keyboard acceptance is
not claimed.


---

<!-- council review CYC-R16-20260830-01 published 2026-08-31T10:12:28.3230153Z -->

# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R16-20260830-01`
- Role: Cyvexly Product Quality, Assurance & Methods Council
- Round: `council-20260831T094700Z`
- Scheduler timestamp (minute zero): `2026-08-31T09:47:12.417Z`
- Durable guard start: `2026-08-31T09:47:41.9693393Z`
- Source state: `GIT_WORKTREE`; immutable Council snapshot head
  `62c6b7e6bb4e36ebc05b59a78f6b98b513ed1858`, including committed Builder
  final-CTA work (`1df0203`) and current Council records.
- Start dirty fingerprint:
  `3CB3FBEF12A2CFBAAA9C447B2DDC5FD01CA2D65642A256BD7A8AACF1DC6EDDD7`
- Council runtime: `.codex/runtime/council/council-20260831T094700Z/runtime`,
  port `5373`
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied
- Auditor: no active Auditor guard detected

## Executive brief

Round 16 independently reviewed the final Home CTA signal slice that was
recorded as unreviewed drift after R15 and subsequently committed by the
Builder. Fresh in-app-browser use and literally viewed clean production
captures at desktop, tablet, phone, and full-page sizes confirm a coherent
dark planetary/network CTA with preserved copy, route, and decorative semantics.
The slice closes a named reference gap without inventing portfolio proof; the
rest of the Home remains less luminous than the approved mockup.

## Findings and dispositions

### CYC-R16-F001 — Confirmed — final CTA visual system and responsive behavior

The final CTA now provides the late-page art direction the previous flat block
lacked: a dark rounded shell, left-anchored copy from `768px` upward, and an
original blue planetary/network horizon. At phone width the copy centers and
the horizon drops behind the lower field. The full Home rhythm remains coherent
through selected work, capabilities, partnership/process, pricing, FAQ, CTA,
and footer. Literally viewed desktop/tablet/phone/full-page captures align with
the visual plan and show no clipping or competing art.

### CYC-R16-F002 — Confirmed — containment and semantic boundary

Fresh breakpoint probes at `320`, `390`, `639`, `640`, `767`, `768`, `1023`,
`1024`, and `1440` retained one CTA panel, one CTA heading, one `/start` link,
and zero document overflow. The large lower-right SVG ink is intentionally
cropped by the shell. The graphic is `aria-hidden="true"`, its SVG is
`role="presentation"`, pointer events are disabled, and no duplicate IDs were
found. The real `/start` link navigated to the Planner and rendered its expected
heading.

### CYC-R16-F003 — Confirmed/no regression — production route baseline

All 15 production routes at desktop and phone retained one `main`, one `h1`,
zero missing image alts, and zero horizontal overflow. The clean production
build served successfully. Media delivery retained `200` MP4 HEAD and `206`
range responses with the expected byte count and `Accept-Ranges` header.

### CYC-R16-F004 — Confirmed/Next — bounded parity progress, Owner decision open

The final CTA now meaningfully converges on the approved mockup's lower-page
signal horizon while preserving the honest concept-art boundary. The approved
reference still has a brighter globe/device hero and richer project imagery;
Council does not authorize fabricated portfolio media. Owner should choose the
single largest remaining parity discrepancy before another bounded slice.

### CYC-R16-F005 — Confirmed/Methods note — build and proof boundaries

`pnpm lint`, `pnpm build`, and immediate post-build `pnpm exec tsc --noEmit`
passed in the isolated runtime. The build still carries the known
`metadataBase` localhost fallback warning, which remains an Owner/domain
decision. Physical keyboard traversal, reduced-motion emulation, Safari/
Firefox, field Web Vitals, deployment, and second-device scale remain outside
this unattended Chromium proof.

## Methods assessment and Primary Next-Builder Plan

The Builder method converted the Council's named final-CTA visual gap into one
bounded, code-native SVG slice, wrote a plan first, preserved copy/route/
accessibility, and supplied responsive measurements. Keep the final-CTA
containment, decorative semantics, and compact alignment stable. The next
Builder slice should be Owner-led: select one remaining globe/device or
portfolio-art direction target, then implement only that fidelity target without
token churn or fabricated evidence. Keep metadata, legal identity, and
server-side delivery behind explicit Owner decisions.

The strongest different next Council question is an attended/different-
capability pass for physical keyboard traversal, reduced-motion behavior,
Safari/Firefox parity, and second-device scale after the Owner names the next
visual target.

## Evidence and limits

Durable evidence is indexed in `docs/agent-system/cyvexly/council/evidence/INDEX.md`,
including literally viewed final-CTA/Home captures, breakpoint and semantic
measurements, the all-route smoke, media HTTP proof, and build evidence. Council
did not edit product source/tests, submit Planner or Contact data, or touch
Builder, Auditor, or `.engine-lock` resources. This report accepts only the
immutable R16 snapshot; any later working-tree drift must be routed to a
successor Council.


---

<!-- council review CYC-R17-20260830-01 published 2026-08-31T11:09:26.0614187Z -->

# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R17-20260830-01`
- Role: Cyvexly Product Quality, Assurance & Methods Council
- Round: `council-20260831T104400Z`
- Scheduler timestamp (minute zero): `2026-08-31T10:44:13.466Z`
- Durable guard start: `2026-08-31T10:44:26.4131184Z`
- Source state: `GIT_WORKTREE`; immutable Council snapshot head
  `62c6b7e6bb4e36ebc05b59a78f6b98b513ed1858`; no new product-source drift
  after R16.
- Start dirty fingerprint:
  `9E720D490C57AA368EA78E5EF74899D4F18F211B53E5C5291303D710CF547005`
- Council runtime: `.codex/runtime/council/council-20260831T104400Z/runtime`,
  port `5373`
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied
- Auditor: no active Auditor guard detected

## Executive brief

Round 17 selected a new utility and boundary question because no Builder source
arrived after R16: does the Project Planner surface first-step validation and
first-error focus clearly, and do legal/lifecycle routes remain explicit in
production? Fresh in-app-browser use and literally viewed clean Home and
Planner captures confirm the validation/focus path, a local saved-draft notice,
and a contained Step 2 transition. Direct route status checks preserve the
documented 200/404 boundaries. No external data was submitted.

## Findings and dispositions

### CYC-R17-F001 — Confirmed — Planner validation and first-error focus

Clicking an empty Step 1 `Continue →` produced “Please enter your name.”,
marked `fullName`, `workEmail`, and `contactMethod` invalid, and moved focus to
`#fullName`, the first invalid field. The phone capture shows field-level error
copy and a visible focus ring without overflow. This closes the previously
unconfirmed first-error focus question for the in-app browser capability.

### CYC-R17-F002 — Confirmed — Planner progression and local-state boundary

Review-only name/contact input advanced to “02 The business” without external
submission. The Step 2 capture preserves the progress rail, labels, fields,
Back/Continue controls, and “What happens next” panel. The browser displayed
the expected “We restored a saved draft from this device” notice from the
Council's prior local save probe; no network or external data path was used.
The unattended email fill helper did not reflect a typed value in the DOM, so
Council did not attempt Planner completion or submit.

### CYC-R17-F003 — Confirmed — legal and lifecycle route boundaries

Direct production HTTP checks returned `200` for `/`, `/services`, `/work`,
`/pricing`, `/process`, `/start`, `/contact`, `/faq`, and `/accessibility`.
The documented `/about`, `/privacy`, `/terms`, `/cookies`, `/thank-you`, and
`/404` boundaries returned `404`. Browser checks on the reviewed boundary paths
retained one `main`, one `h1`, and zero overflow; these remain intentional
Owner/content boundaries rather than newly fabricated pages.

### CYC-R17-F004 — Confirmed/no regression — required viewpoint smoke

Fresh clean production Home captures at `1440×900`, `768×1024`, `390×844`,
and full-page sizes remain coherent, responsive, and consistent with the
accepted glass/grid, media, partnership, process, pricing, FAQ, and final-CTA
system. No source drift was present after the R16 snapshot.

### CYC-R17-F005 — Confirmed/Next — build health and capability limits

`pnpm lint`, `pnpm build`, and immediate post-build `pnpm exec tsc --noEmit`
passed in the isolated runtime. Physical keyboard traversal, reduced-motion
emulation, Safari/Firefox, field Web Vitals, deployment, and second-device
scale remain outside this unattended Chromium proof. The email fill-helper
limitation is a test-harness boundary, not a claimed product defect.

## Methods assessment and Primary Next-Builder Plan

The review method answered a distinct product question with direct visible
validation states and route-status evidence instead of repeating the final-CTA
visual pass. The Planner's first-error focus and honest boundary behavior are
now independently confirmed. The next Builder slice should remain Owner-led:
select one remaining globe/device or portfolio-art gap, keep the proven CTA and
Planner containment stable, and avoid token churn or fabricated claims. Keep
metadata, legal identity, server-side delivery, and external-mail behavior
behind explicit Owner decisions.

The strongest different next Council question is an attended/different-
capability review of physical keyboard traversal, reduced-motion behavior,
Safari/Firefox parity, and second-device scale.

## Evidence and limits

Durable evidence is indexed in `docs/agent-system/cyvexly/council/evidence/INDEX.md`,
including required Home viewpoints, Planner validation/Step 2 captures, route
boundary probes, and isolated build evidence. Council did not edit product
source/tests, submit Planner or Contact data, or touch Builder, Auditor, or
`.engine-lock` resources. Any later working-tree drift must be routed to a
successor Council.


---

<!-- council review CYC-R18-20260830-01 published 2026-08-31T12:09:52.3499486Z -->

# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R18-20260830-01`
- Role: Cyvexly Product Quality, Assurance & Methods Council
- Round: `council-20260831T114400Z`
- Scheduler timestamp (minute zero): `2026-08-31T11:44:44.512Z`
- Durable guard start: `2026-08-31T11:46:11.0805216Z`
- Source state: `GIT_WORKTREE`; immutable Council snapshot head
  `68fe4a476a89070b968a21852742680571794695`; no source drift after the
  accepted service-detail commit `930e050`.
- Start dirty fingerprint:
  `329025F57F43D74E228064E5AE842CED8FADE5870A368A27B3D1ECC20F6999B6`
- Council runtime: `.codex/runtime/council/council-20260831T114400Z/runtime`,
  port `5373`; visual fallback Chrome CDP port `9339`.
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied.
- Auditor: no active Auditor guard detected.

## Executive brief

Round 18 independently reviewed the post-R17 accepted five-service detail and
Planner-handoff system. Direct in-app use plus opened exact viewport captures
confirm a coherent, truthful extension of the existing glass/grid/signal
system. All five detail routes satisfy the vision content contract and remain
responsive, semantic, and contained. Native Services → detail → Planner use
works, and a fresh browser profile confirms every service's intended Planner
mapping. No external data was submitted.

## Findings and dispositions

### CYC-R18-F001 — Confirmed — five service-detail journeys and route boundaries

`/services/business-websites`, `/website-redesigns`, `/landing-pages`,
`/ecommerce-websites`, and `/website-care` each return `200`, expose one
unique outcome-led H1 and one `main`, and link to the correct case-study and
Planner query. The vision-required problem, outcome, inclusions, concept-work
label, client inputs, scope controls, starting price/timing, FAQ, and CTA are
present on every route. An unknown slug returns the expected `404`; duplicate
IDs, missing image alts, unnamed controls, and document overflow are absent.

### CYC-R18-F002 — Confirmed — service-to-Planner handoff and user-control boundary

The real in-app path Services → Business Websites → `Include this in my
project` reaches `/start?service=business-websites`. In a fresh browser profile,
advancing through Steps 1–2 exposes the intended mapping for all five offers:
business-site/credibility, redesign/replace, landing-page/launch,
ecommerce/sell, and not-sure/credibility plus Care `Yes`. The UI announces the
starting point as editable. The existing in-app browser's saved-draft notice
remains in control rather than being silently overwritten by a new query. Empty
Step 1 still returns three field-level alerts, focuses `fullName`, and remains
contained. No Planner or Contact submission was triggered.

### CYC-R18-F003 — Confirmed/no regression — responsive visual and interaction

Opened Services at desktop/tablet/phone and Business Websites detail at
`1440×1000`, `768×1024`, and `390×844`; also opened E-commerce, Redesign,
Landing Pages, and Website Care phone first views. The mobile menu opens to a
readable stacked panel with `aria-expanded=true`; the detail FAQ opens with its
answer and expanded state. A `320px` E-commerce view and `390px` explicit
`24px` root-font stress retain exact-width containment. Full Business detail
captures show the sections read as one route from offer to proof to inquiry.

### CYC-R18-F004 — Owner Decision / Next — remaining service-detail fidelity

The reusable detail system is materially more useful than the prior dead-end
cards and uses honest concept previews. Its orbital signal is legible and
service-labeled, but the five pages share one visual grammar and remain less
luminous/dense than the approved Services mockup's globe/workspace and richer
proof treatment. This is an active Owner fidelity decision, not a source defect
or permission to fabricate client media. Closure requires Owner selection of
the honest signal direction versus approved higher-fidelity media, followed by
an opened comparison at the matching service route.

### CYC-R18-F005 — Confirmed/Next — method and launch-readiness boundaries

The Builder's method produced a coherent typed model and reusable template,
found a too-narrow tablet split in the first render, and repaired it before
acceptance. Council's isolated lint, production build, and immediate post-build
typecheck pass; the known `metadataBase` localhost fallback remains
Owner/domain-blocked. Physical keyboard, attended reduced motion,
Safari/Firefox, field Web Vitals, second-device scale, deployment/cache,
server-side email, and legal/domain identity remain unconfirmed.

## Methods assessment and Primary Next-Builder Plan

Round 18 confirms that the Builder converted the vision's five focused service
journeys into a reusable, content-complete system without portfolio fabrication
or token-only churn. Preserve the `lg` tablet stacking fix, route boundaries,
concept-project labels, local Planner no-submission boundary, and query-versus-
saved-draft precedence. The next Builder slice should be Owner-led: either
select one approved higher-fidelity service visual direction or leave the
honest signal system stable and move to the next load-bearing Owner decision
(founder/legal/domain/email). Do not broaden the template or add integrations
without authorization.

The strongest different next Council question is an attended/different-
capability review of physical keyboard traversal, reduced-motion behavior,
Safari/Firefox parity, and second-device scale against the now-connected
service-to-Planner journey.

## Evidence and limits

Durable evidence is indexed in `docs/agent-system/cyvexly/council/evidence/INDEX.md`,
including opened Services/detail/Planner captures, route/status probes,
content-contract checks, Planner mapping, menu/FAQ state, semantic audits, and
24px-root stress. Council did not edit product source/tests, submit form data,
touch `.engine-lock`, or control Builder/Auditor resources.


---

<!-- council review CYC-R19-20260830-01 published 2026-08-31T13:08:00.8471817Z -->

# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R19-20260830-01`
- Role: Cyvexly Product Quality, Assurance & Methods Council
- Round: `council-20260831T124200Z`
- Scheduler timestamp (minute zero): `2026-08-31T12:42:45.538Z`
- Durable guard start: `2026-08-31T12:43:30.3007112Z`
- Source state: `GIT_WORKTREE`; immutable snapshot head
  `57480e359c2e8252006547da59b55d06dd100d7b`; start dirty fingerprint
  `E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855`
- Product-source diff since R18 source head `68fe4a4`: none. The two later
  commits only refresh Council memory/evidence and were outside product source.
- Council runtime: `.codex/runtime/council/council-20260831T124200Z/runtime`,
  port `5373`; in-app Browser tab `17`; no Auditor guard.

## Council PM prompt

- Prompt ID/status: `NO ACTIVE PM PROMPT`; standing Council role applied.
- The required outcome was a fresh question rather than a reciprocal service
  contract pass. This round focused on focus-visible treatment, mobile-menu
  focus return, Planner validation/progression/state continuity, reduced-motion
  implementation signals, and the limits of unattended keyboard emulation.

## Work and methods reviewed

The Council read the active Council Orientation Document, complete governing
Council packet, lane instructions and tools inventory, Owner direction and
vision, current Builder/Council state, coverage/handoff/debt/watch files, and
the current Auditor report. A new immutable snapshot and disposable runtime
were created. Offline dependencies, lint, production build, and immediate
TypeScript checks passed. The real in-app Browser was used throughout; the
rendered Services and Business Websites paths were literally viewed at desktop
(`1440x900`), tablet (`768x1024`), and phone (`390x844`) widths. Services →
Business Websites → Planner was followed, the mobile menu was opened/closed,
Planner Step 1 validation was triggered, synthetic local values advanced to Step
2, and business-description state survived a forward/back transition. The
native Explore business websites link and detail CTA both reached
`/start?service=business-websites`. The
previous round's route-contract method was not repeated as the primary method.

## Findings

### CYC-R19-F001 — Confirmed — responsive visual continuity and target treatment

The unchanged service-detail system remains visually coherent at all three
required widths. Services shifts from two cards to one without clipping; the
Business Websites hero keeps its outcome-led hierarchy, orbital signal, and CTA
pair through tablet and phone. The phone menu is readable, its Close menu
control visibly receives the blue focus outline, and closing it returns focus to
Open menu. No horizontal overflow was observed. This closes no new source work,
but confirms the accepted bounded slice did not regress while Council records
advanced.

### CYC-R19-F002 — Confirmed — Planner validation and local state continuity

At phone width, empty Step 1 Continue renders the three expected field-level
errors, focuses `fullName`, and visibly outlines that field. Synthetic local
review values advance to Step 2; the business description remains present after
Back. No submit or external transmission occurred. This is the strongest
reachable unattended evidence for the Planner's local boundary.

### CYC-R19-F003 — Observation — unattended keyboard and transition scroll remain unconfirmed

In-app CUA/locator Tab and Enter dispatch did not advance focus or activate a
link after a target was focused. Native click paths work, source uses native
anchors/buttons, and the Browser surface may not model native keyboard dispatch
faithfully; therefore this is not promoted to a product defect. Automated click
auto-scroll also left Planner `scrollY` near `617px` with the form near `107px`,
which confounds the intended smooth step scroll. Attended physical keyboard,
real reduced-motion emulation, and a different browser capability are required
to close both claims.

### CYC-R19-F004 — Owner Decision — concept-art fidelity remains the load-bearing visual gap

The honest orbital signal is legible and consistent, but approved mockup
`02-services-pricing.png` still has brighter globe/workspace artwork and denser
proof language. The product should either receive one Owner-approved art-
directed uplift using truthful assets or be explicitly accepted as the current
concept treatment. Do not fabricate client media or reopen this as token-only
polish.

### CYC-R19-F005 — Confirmed / Next — runtime and method health

The isolated runtime generated all 23 routes; lint, build, and TypeScript passed,
and live route smoke returned `200` for Services, all five detail routes, and
the Planner query plus `404` for an unknown service. The only build warning is
the already Owner-gated `metadataBase` fallback to `http://localhost:3000`.
No console warnings/errors were observed. Two post-R18 commits contain only
Council records, so the Builder has not supplied a new product slice; the next
plan should be Owner-led rather than more low-value polish.

## What was not checked

Safari/Firefox, physical keyboard input, OS-level reduced-motion emulation,
field Web Vitals, original second-computer scale, production domain/email,
server-side Planner delivery, and legal/metadata launch decisions remain
unconfirmed. No Auditor was active.

## Primary Next-Builder Plan

1. Hold the accepted service-detail/Planner boundary stable: preserve local
   no-submission behavior, query/draft precedence, semantic landmarks, and the
   `lg` tablet stack.
2. Obtain the Owner's explicit decision on the orbital-vs-mockup fidelity gap.
   If uplift is selected, make one coherent, truthful art-directed slice with
   real approved assets and a clear visual closure test; if not, treat the
   current concept treatment as accepted and stop token-only iteration.
3. Keep production domain, metadata, email/server delivery, and legal identity
   behind Owner input. Do not infer acceptance from this Council round.

## Strongest different next Council question

Use an attended or different browser capability to traverse the Services →
detail → Planner flow with a physical keyboard and emulated reduced motion at
desktop/tablet/phone widths, then verify Safari/Firefox or an original second
device if available. Reconcile the transition-scroll observation before
calling it a product defect.

## Evidence and closeout

- Durable evidence: `docs/agent-system/cyvexly/council/evidence/INDEX.md`,
  R19 accessibility review, R19 build media, and the R19 PNG captures listed
  there.
- Report publication must precede runtime stop; role-owned cleanup follows
  through `Complete-ReviewRound.ps1`.


---

<!-- council review CYC-R20-20260830-01 published 2026-08-31T14:07:36.6110307Z -->

# Cyvexly Council Quality & Methods Review — CYC-R20-20260830-01

## Council receipt

- Round: `council-20260831T134200Z`
- Role: independent Cyvexly Council; PM status: `NO ACTIVE PM PROMPT`
- Scheduler minute zero: `2026-08-31T13:42:16.503Z`
- Guard created: `2026-08-31T13:42:34.2383746Z`
- Snapshot head: `57480e359c2e8252006547da59b55d06dd100d7b`
- Start dirty fingerprint: `91C45C89D4CE8A9974471D79C7C639962EDF500A45C39C994AAD2BFB368989E8`
- Isolated runtime: Council snapshot on port `5373`; native Chromium probe was role-owned and temporary.

## Scope and method

The previous Council round found no product-source drift after R18 and left
physical keyboard, reduced-motion, and cross-browser/device proof open. R20
rotated to a stronger capability: native Chromium CDP keyboard events under a
390×844 reduced-motion emulation, while retaining the required visible
in-app Browser review at desktop, tablet, and phone widths. No form was filled
with personal data and nothing was submitted.

## Findings

### CYC-R20-F001 — Confirmed: Planner keyboard order

Native Tab events from `#fullName` advanced deterministically through
`workEmail`, `contactMethod`, `roleTitle`, `companyName`, and `country`.

### CYC-R20-F002 — Confirmed in Chromium emulation: reduced-motion treatment

With `prefers-reduced-motion: reduce`, the page reported the media query true,
root scrolling `auto`, no active CSS animation names, and a `0.000001s`
transition duration. This supports a reduced-motion implementation for this
Chromium path. It does not prove an OS-level setting, physical hardware, or
Safari/Firefox behavior.

### CYC-R20-F003 — Confirmed: responsive visual integrity

In-app Browser captures of Services and Business Websites at 1440×900,
768×1024, and 390×844 show coherent hierarchy, responsive stacking, readable
copy, full-width mobile CTAs, and no visible horizontal overflow. Planner phone
captures show the prefilled service context and the validation state.

### CYC-R20-F004 — Owner decision remains open: artwork fidelity

The current orbital/service signal remains a credible, lighter concept, but the
approved mockup’s globe/workspace direction is brighter and denser. Council does
not invent a direction or authorize another implementation round; Owner choice
is required if that fidelity gap is still in scope.

### CYC-R20-F005 — Next proof boundary

Still unconfirmed: attended physical-keyboard use, OS-level reduced motion,
Safari/Firefox, a second physical device, field vitals on a production-like
network, and production domain/email/legal/server delivery. These are explicit
evidence gaps, not regressions. No Builder or Auditor was active.

## Evidence

Durable evidence is indexed under `docs/agent-system/cyvexly/council/evidence/`:

- `council-20260831T134200Z-keyboard-motion-review.md`
- `council-20260831T134200Z-native-keyboard.json`
- `council-20260831T134200Z-planner-reduced-motion-phone.png`
- `council-20260831T134200Z-planner-reduced-validation-phone.png`
- visible Services, detail, and Planner captures listed in the evidence note.

## Next Council → Builder handoff

Preserve the current native-control, local-boundary, responsive, and reduced-
motion behavior. Do not spend a token-only polish round. If the Owner selects
art fidelity, make one coherent, truthful art-directed pass with the mockup as
the explicit acceptance reference; otherwise hold the slice. Keep integrations,
legal copy, domain/email, and delivery claims behind Owner decisions. The next
Council should select one materially different proof source: attended keyboard,
Safari/Firefox, a second device, or production-like vitals.

## Verification

Isolated `pnpm install --offline`, `pnpm lint`, `pnpm build`, and immediate
`pnpm exec tsc --noEmit` completed successfully. Build emitted only the known
`metadataBase` fallback warning for social images.


---

<!-- council review CYC-R21-20260831-01 published 2026-08-31T15:06:40.9170495Z -->

# Cyvexly Council Quality & Methods Review — CYC-R21-20260831-01

## Council receipt

- Round: `council-20260831T144100Z`
- Role: independent Cyvexly Council; PM status: `NO ACTIVE PM PROMPT`
- Scheduler minute zero: `2026-08-31T14:41:17.406Z`
- Guard created: `2026-08-31T14:42:03.1123957Z`
- Snapshot head: `dc0f104b3008f20842f3d86121d3a0d9fff7be3c`
- Start dirty fingerprint: `D519449B7946278E700CA973E6FD72ECE2BCF17641DE99F70ACE88CBCBE46123`
- Isolated runtime: Council snapshot on port `5373`.

## Scope and method

Builder Round 15 reported a live deployment repair for the accepted Home
showcase video. R21 therefore asked a new product question: does the public
Render route now serve the accepted source/media, and does it remain a coherent
responsive experience against the Owner’s larger integrated-video direction?
The actual public route and isolated local runtime were both opened in the
in-app Browser. The public control was exercised without submitting data.

## Findings

### CYC-R21-F001 — Confirmed: public deployment serves the showcase video

The public Home returned `200`; the in-app Browser rendered one ready video from
`/media/cyvexly-services-loop.mp4`, with 30-second duration, `readyState = 4`,
muted/looping playback, a named Play/Pause control, and no media error. Pause
and Play changed state and label correctly. Poster `200 image/webp` and a
`206 video/mp4` byte-range response (`bytes 0-1023/3978486`) independently
confirm asset delivery. No browser console errors appeared.

### CYC-R21-F002 — Confirmed: public responsive containment

At 1440×900 the public figure is 528×297 inside a 1425px client width, about
45.8% of the 1152px content frame and consistent with the Owner’s requested
46–50% hero media share. At 390×844 the video is 325×181.94 inside the 375px
layout width; desktop and phone both report no horizontal overflow. Headline
and actions remain first on phone, with the media stacked below.

### CYC-R21-F003 — Confirmed: local/public slice agrees

The isolated Council runtime on port 5373 served the same single video source
and matching desktop/phone containment. Smoke routes `/`, `/services`,
`/start?service=business-websites`, and `/accessibility` returned `200`; the
documented unknown service returned `404`.

The public Home-to-Planner path also preserved the `Business websites` starting
point, rendered the nine-step progress and no-payment copy, and stayed
contained at phone width.

### CYC-R21-F004 — Owner-gated fidelity observation

The mockup’s hero reel is brighter and denser, with a rich multi-device frame;
the live video’s sampled frame can read darker and more abstract. The live
composition nevertheless preserves the intended integrated position, hierarchy,
grid atmosphere, and controls. Treat further art direction as an Owner choice,
not as a deployment defect or permission for token-only polish.

### CYC-R21-F005 — Explicit limits

R21 did not re-prove native loop-boundary timing, OS-level reduced motion,
Safari/Firefox, physical second-device behavior, or production field vitals.
The Render dashboard/settings remain outside Council credentials; public
behavior and source/media identity are the evidence boundary.

## Evidence

Durable evidence is indexed under `docs/agent-system/cyvexly/council/evidence/`:

- `council-20260831T144100Z-public-video-review.md`
- `council-20260831T144100Z-public-video-metrics.json`
- `council-20260831T144100Z-public-home-desktop.png`
- `council-20260831T144100Z-public-home-paused-desktop.png`
- `council-20260831T144100Z-public-home-tablet.png`
- `council-20260831T144100Z-public-home-phone.png`
- `council-20260831T144100Z-public-menu-open-phone-settled.png`
- `council-20260831T144100Z-local-home-desktop.png`
- `council-20260831T144100Z-local-home-phone.png`
- `council-20260831T144100Z-public-planner-phone.png`

## Next Council → Builder handoff

Keep the deployed video source, poster, muted/loop/inline semantics, named
control, and responsive shell unchanged. Do not reopen deployment or spend a
token-only visual round. If the Owner wants parity with the richer mockup,
request one explicit art-directed video-frame/content decision and review it
as a coherent slice. Otherwise move to a materially different proof source:
attended physical keyboard, OS reduced motion, Safari/Firefox, second device,
or production-like vitals. Keep domains, metadata, legal copy, provider
settings, and server delivery behind explicit Owner decisions.

## Verification

In the isolated Council runtime, `pnpm install --offline`, `pnpm lint`,
`pnpm build`, and immediate `pnpm exec tsc --noEmit` completed successfully.
Build emitted only the known `metadataBase` fallback warning for social images.


---

<!-- council review CYC-R22-20260831-01 published 2026-08-31T16:04:45.1602245Z -->

# Cyvexly Council Quality & Methods Review — CYC-R22-20260831-01

## Council receipt

- Round: `council-20260831T153900Z`
- Role: independent Cyvexly Council; PM status: `NO ACTIVE PM PROMPT`
- Scheduler minute zero: `2026-08-31T15:39:18.493Z`
- Guard created: `2026-08-31T15:40:10.5614803Z`
- Snapshot head: `dc0f104b3008f20842f3d86121d3a0d9fff7be3c`
- Start dirty fingerprint: `1998D33B3DB037D04875F6D10B81B414966896F98A4B97960053D6A27FA4F7DA`
- Isolated runtime: Council snapshot on port `5373`.

## Scope and method

No product-source commit landed after R21. To avoid repeating the live-video
probe, R22 selected a new public product question: does the deployed Work
portfolio and case-study path remain visually coherent, honest about concept
provenance, filterable, and contained across required viewpoints? The public
route was opened in the in-app Browser at desktop/tablet/phone widths, filters
were exercised, a case study was opened, and the same slice was checked in the
isolated local runtime. No user data was entered or transmitted.

## Findings

### CYC-R22-F001 — Confirmed: public Work surface is coherent and contained

At 1440×900, 768×1024, and 390×844, Work renders one clear H1,
“Design judgment you can see.”, a consistent grid, readable copy, and three
clearly labeled concept cards. `scrollWidth === clientWidth` at each viewpoint;
the phone layout stacks cards without clipping.

### CYC-R22-F002 — Confirmed: filters are real state changes

The `Concept` filter reports `aria-pressed="true"` and shows Aurora Spaces,
Nexora Systems, and Vellora Care. The `Commerce` filter reports pressed state
and reduces the visible set to Vellora Care. The state is reflected visually in
the selected blue filter and card set, not merely in URL or source markup.

### CYC-R22-F003 — Confirmed: case-study route keeps provenance and landmarks

`/work/vellora-care` renders one `main`, one H1 (`Vellora Care`), an explicit
“Concept project” label, audience/challenge copy, and no horizontal overflow at
desktop or phone width. The abstract visual remains clearly concept-oriented,
so the portfolio does not imply shipped-client evidence.

### CYC-R22-F004 — Confirmed: local/public route agreement

Read-only smoke returned `200` for Home, Work, Vellora, and Services, and `404`
for the documented unknown service. The isolated local runtime served the same
accepted source head and matched the public Work/case-study structure. Browser
console errors were zero.

### CYC-R22-F005 — Explicit limits and next boundary

No product source changed after R21, so there is no new Builder implementation
to accept. R22 did not re-prove video playback, OS motion, physical keyboard,
Safari/Firefox, second-device behavior, production vitals, or delivery/legal
settings. Those remain explicit open questions; do not infer closure from this
portfolio pass.

## Evidence

Durable evidence is indexed under `docs/agent-system/cyvexly/council/evidence/`:

- `council-20260831T153900Z-work-review.md`
- `council-20260831T153900Z-work-review.json`
- `council-20260831T153900Z-work-desktop.png`, `...work-tablet.png`,
  `...work-phone.png`
- `...work-concept-filter-desktop.png`, `...work-commerce-filter-desktop.png`
- `...vellora-desktop.png`, `...vellora-phone.png`
- `...local-work-desktop.png`, `...local-work-phone.png`

## Next Council → Builder handoff

Preserve honest concept labels, abstract provenance-safe visuals, filter
semantics, one-main/one-H1 landmarks, and responsive containment. Do not open
a token-only polish round or replace concept art with fabricated client media.
The next Council should use a materially different proof source: attended
physical keyboard, OS reduced motion, Safari/Firefox, second device, or
production-like vitals. If the Owner requests richer portfolio art, make that
an explicit art-direction decision and review it as one coherent slice.

## Verification

In the isolated Council runtime, `pnpm install --offline`, `pnpm lint`,
`pnpm build`, and immediate `pnpm exec tsc --noEmit` completed successfully.
Build emitted only the known `metadataBase` fallback warning for social images.


---

<!-- council review CYC-R24-20260831-01 published 2026-08-31T17:06:07.4537616Z -->

# CYC-R24-20260831-01 — Council brief

## Outcome

**PASS for the reviewed Home hero reel slice; no release-blocking defect found.**

Round 24 reviewed Builder commit `14e12d4` against Owner direction `2026-08-31-07`. The Home hero now reads as a primary integrated studio reel rather than a thumbnail: at 1440px the isolated render measured a 594.44px translucent copy pane beside a 726.56px reel shell, with the intended light ice-blue bezel, cyan spectral edge, atmospheric panes, and real progress signal. The accepted local MP4 remains the only media source; no generated mockup claims or screens were copied.

## Proof

- Isolated runtime `5373`: offline install, lint, optimized build, and immediate TypeScript check passed (only the known `metadataBase` fallback warning).
- In-app Browser literally viewed local desktop 1440×900, breakpoint 1024×900, tablet 768×1024, and phone 390×844 captures; public Render desktop and phone captures matched the hero slice.
- Additional isolated stress at 1023px stacked the copy and reel at 960px each, and 320px held a 273px reel; both stayed contained with no horizontal overflow.
- Local and public each showed one H1 and one ready 30-second muted, looping, inline video with no browser diagnostics. Local `scrollWidth === clientWidth` at tablet and phone; public phone matched. Pause/Play labels and playback state changed correctly, and progress advanced to `5.15198%` at 1.596 seconds.
- Public MP4 returned `200 video/mp4`, 3,978,486 bytes, with byte-range support. Route smoke returned 200 for `/`, `/work`, `/services`, `/start` and 404 for an unknown path.
- Mobile menu opened to `Close menu` and closed cleanly without overflow.

Durable evidence: `docs/agent-system/cyvexly/council/evidence/council-20260831T164049Z-home-hero-review.md`, matching metrics JSON, and indexed captures.

## Product and method disposition

The Owner's scale, hierarchy, lighter-blue glass, copy contrast, reel treatment, and mobile order are visibly implemented and public. Owner acceptance remains explicitly Owner-gated; this review does not promote visual direction to acceptance. OS-level reduced-motion, Safari/Firefox, physical second-device, field-vitals, and delivery/legal proof remain open and are carried forward. Next Council should select a materially different capability rather than repeat hero geometry.

## Round identity and custody

- Scheduler minute zero: `2026-08-31T16:40:49.578Z`.
- Role round: `council-20260831T164049Z`; source head `dbcbc0bd3169000cd58331f2eff79fbc17d4ed5c`; start fingerprint `1F6CAB78985627766DD848016BACB8915B683CA353314E085A5386A2F50AD67E`.
- Report publication and exact browser/process cleanup timestamps are written into the hot Council records at closeout. Runtime and browser resources are role-owned and are closed before exit.


---

<!-- council review CYC-R25-20260831-01 published 2026-08-31T18:08:48.8583283Z -->

# CYC-R25 Services pathway review

## Scope and identity

- Review: `CYC-R25-20260831-01`; scheduler minute zero `2026-08-31T17:43:20.481Z`.
- Independent snapshot head: `b5dfd502b998c086903a9dab0b67a1929c0bc4b8` (Builder commit `b5dfd50`, Services combination pathways).
- Council runtime: `.codex/runtime/council/council-20260831T174320Z/runtime`, port `5373`; source/runtime hashes match for `src/app/services/page.tsx`, `src/app/globals.css`, and `src/lib/site-config.ts`.
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied.

## Product question and method

Round 25 used a materially different fresh slice from R24: the new `/services` audience-pathway module and its connected Planner handoff, with a responsive/readability question rather than another Home-hero pass. I read the preserved Round 17 visual plan and baseline/final captures, opened the isolated optimized runtime and public Render deployment in the real in-app Browser, literally viewed desktop, compact-desktop, tablet, phone, and narrow-phone states, opened the retained baseline/final comparison captures and approved `mockups/02-services-pricing.png`, exercised the mobile menu and Services-to-Planner CTA, checked semantic landmarks/list structure, inspected browser diagnostics, and compared local/public content and geometry. The implementation follows the mockup's icon-math/glass language while intentionally retaining truthful five-audience combinations rather than copying unsupported mockup claims; this is not a claim of final Owner parity.

## Evidence

- Isolated runtime build artifacts exist after `pnpm install --offline`, ESLint exit `0`, optimized Next build completion, and `tsc --noEmit` exit `0`; only the known `metadataBase` fallback warning remains.
- Local visual captures: `council-20260831T174320Z-services-desktop.png`, `services-pathways-desktop.png`, `services-pathways-1024.png`, `services-pathways-tablet.png`, `services-pathways-phone.png`, `services-pathways-320.png`, and `services-pathways-320-bottom.png`.
- Public captures: `public-services-desktop.png`, `public-services-pathways.png`, and `public-services-phone.png`; public `/services` returned one H1, five cards, no overflow, and the CTA reached `/start` with the expected Planner H1.
- Local and public browser warning/error logs were empty. Route smoke returned 200 for `/`, `/services`, `/start`, `/work`, `/pricing`, and `/process`, and 404 for `/does-not-exist`.
- The sampled Services copy tokens retain strong contrast against the light stage/card fields: approximately `5.66:1` body-on-stage, `6.08:1` body-on-card, and `15.48:1` heading-on-card before transparency/compositing.
- Exact isolated metrics are in `council-20260831T174320Z-services-pathways-metrics.json`.

## Findings and disposition

### CYC-R25-F001 — PASS / no release-blocking defect — pathway comprehension and responsive containment

At 1440/1280 the module presents three 371px cards followed by a balanced pair; at 1024 it intentionally holds two 471px columns after the Builder's opened edge correction; at 768/720 it remains readable in two columns; at 390/320 it reflows each service path vertically without clipping or horizontal overflow. All five audience combinations preserve the prior facts, show fifteen named service nodes, hide only decorative plus signs from assistive semantics, and add plain-language outcomes. One `main` and one H1 remain. The opened local and public views are coherent with the established ice-blue glass system and materially richer than the baseline table.

**Closure test:** preserve the 1280 three-column threshold, two-column compact/tablet rhythm, single-column phone path, truthful service labels, and direct Planner handoff in future edits; re-run the exact widths after any shared grid or typography change.

### CYC-R25-F002 — Observation / field-vitals capability remains unconfirmed

The in-app Browser's page evaluation realm does not expose `window.performance` or paint/navigation entries, so this round cannot make a field Web Vitals claim. This is a capability boundary, not evidence of a product regression. A future attended/different-capability run should collect real loading/paint data on public `/services` and the media-heavy Home before launch decisions.

## Method and next-Builder plan

The Builder's method converges on a coherent data-to-visual pathway: existing service facts were structured into server-rendered cards, then an opened 1024px readability result moved the three-column threshold to 1280px. No unsupported client results, pricing, carousel, or external asset claims were introduced. Do not spend another round on Services token churn without new Owner evidence. The next Builder-facing outcome is Owner review of the public Services module and confirmation that the lighter glass language and five-pathway grouping fit the intended studio category. After that explicit decision, prioritize one authorized launch-readiness blocker (public-domain `metadataBase`, server-side Planner confirmation/email, or Privacy/Terms jurisdiction) rather than inventing facts.

## Not checked

Physical keyboard hardware, OS-level reduced motion, Safari/Firefox, the Owner's original second computer, field Web Vitals, external Planner/email side effects, production domain/legal identity, founder identity, and the Owner's final visual acceptance remain unconfirmed or Owner-gated. Council did not edit product source, tests, Builder resources, or automation.


---

<!-- council review CYC-R26-20260831-01 published 2026-08-31T19:06:40.3921194Z -->

# CYC-R26 Pricing and launch-readiness review

## Scope and identity

- Review: `CYC-R26-20260831-01`; scheduler minute zero `2026-08-31T18:41:21.337Z`.
- Independent snapshot head: `f0f1eacee667cf7f63be54b4cf3432f71056ab74` (no product-source diff after R25; latest product commit remains `b5dfd50`).
- Council runtime: `.codex/runtime/council/council-20260831T184121Z/runtime`, port `5373`; identity dirty fingerprint `35533D3BFBE4582F91092B7559F3447B04E303448BE5FE247D5A794D3347FA51`.
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied.

## Product question and method

With no new accepted product source after R25, Round 26 selected a materially different question from the coverage map: Pricing/package comprehension, its FAQ and mobile-menu states, Pricing-to-Planner path, public/local deployment agreement, and a fresh approved-mockup fidelity check. I opened the isolated optimized runtime and public Render in the real in-app Browser, literally viewed 1440 desktop, 768 tablet, 390 phone, and 320 narrow-phone entry/closeout states, opened `mockups/02-services-pricing.png`, exercised an expanded FAQ and mobile menu, activated the Pricing CTA into `/start`, inspected package truthfulness/semantics, collected exact responsive geometry and route smoke, and checked browser diagnostics. The in-app evaluation realm has no `window.performance` API, so field-vitals proof was not fabricated.

## Evidence

- Isolated runtime was repaired only within the Council-owned copy: `pnpm install --offline --force` restored the disposable dependency links; source-scoped ESLint exited `0`, optimized Next build completed, and `tsc --noEmit` exited `0`. The known `metadataBase` fallback warning remains. The optimized route manifest's 19 expected public paths all returned 200; only internal `_global-error`/`_not-found` control entries were excluded.
- Local captures: `council-20260831T184121Z-pricing-desktop.png`, `pricing-phone.png`, `pricing-tablet-top.png`, `pricing-phone-bottom.png`, `pricing-phone-closeout.png`, `pricing-cta-phone.png`, and `pricing-320.png`.
- Public captures: `public-pricing-desktop.png` and `public-pricing-phone.png`; public/local each show one `main`, one H1, exact containment, and matching Signal/Orbit/Nexus pricing copy.
- FAQ expansion changed `aria-expanded` from `false` to `true` and exposed the honest starting-point answer. Mobile menu opened and closed with no overflow. Pricing CTA reached `/start` with the expected Planner H1.
- Vision-required Pricing sections were present in the live text: package cards, “Compare packages,” “What every website project includes,” add-ons/ranges, optional care plans, billed-separately disclosures, payment schedule/methods, “Pricing questions,” and the Planner handoff. The add-on copy explicitly frames ranges as budget guidance rather than self-checkout; package and care payment terms were visible in the corresponding sections.
- Local/public route smoke: `/pricing` and `/start` returned 200; unknown `/does-not-exist` returned 404. Local/public Browser warning/error logs were empty. Exact package geometry is in `council-20260831T184121Z-pricing-metrics.json`.

## Findings and disposition

### CYC-R26-F001 — Owner Decision / visual parity remains gated

The live Pricing page is coherent, readable, honest about starting prices, and responsive, but it is intentionally much lighter and less art-directed than the approved `02-services-pricing` mockup: it omits the mockup's globe/orbital atmosphere, dense comparison matrix, and selected-work richness. That is a real visual-fidelity difference, not a reason to copy mockup-only prices, claims, or artwork into production. Owner acceptance must decide whether the current truthful glass system is sufficient or authorize a bounded richer Pricing/Services art pass.

**Closure test:** Owner reviews the public Pricing desktop/phone views against the approved mockup and explicitly accepts the current fidelity or supplies a bounded visual direction; no Council or Builder may infer acceptance.

### CYC-R26-F002 — Observation / field performance unconfirmed

The in-app Browser exposes no Navigation Timing, Paint Timing, or Web Vitals API in its page-evaluation realm. Local/public HTTP requests returned 200, but this is not field-vitals proof. A future attended/different-capability measurement should collect real LCP/INP/CLS on public Home, Services, Pricing, and the media-heavy route before launch readiness is claimed.

## Method and next-Builder plan

The current method is converging on honest package framing: starting-price language, billed-separately disclosure, accessible FAQ state, and direct Planner handoff all make scope boundaries legible without a self-checkout or unsupported guarantee. Do not reopen a token-only Pricing pass. The primary next Builder plan is to wait for the Owner's visual-fidelity decision, then address one authorized launch blocker in a coherent slice: public-domain `metadataBase`, server-side Planner confirmation/email, or Privacy/Terms jurisdiction. Keep package facts stable while that decision is pending. The next Council should use a different capability for field vitals, attended keyboard/OS motion, Safari/Firefox, or second-device scale.

## Not checked

Physical keyboard hardware, OS-level reduced motion, Safari/Firefox, the Owner's original second computer, field Web Vitals, external Planner/email side effects, production domain/legal identity, founder identity, and final Owner visual acceptance remain unconfirmed or Owner-gated. Council did not edit product source, tests, Builder resources, or automation.


---

<!-- council review CYC-R27-20260831-01 published 2026-08-31T20:05:11.4177757Z -->

# CYC-R27 Utility, legal, and 404 launch-readiness review

## Scope and identity

- Review: `CYC-R27-20260831-01`; scheduler minute zero `2026-08-31T19:39:52.110Z`.
- Independent snapshot head: `f0f1eacee667cf7f63be54b4cf3432f71056ab74`; no product-source diff after R26 and latest product commit remains `b5dfd50`.
- Council runtime: `.codex/runtime/council/council-20260831T193952Z/runtime`, port `5373`; source dirty fingerprint `C5A096A911B9C61F0C7AFC8A993EB716D773C1844F90EB7161831B9E022C5EF7`.
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied.

## Product question and method

With no new accepted product source after R26, Round 27 selected a materially different launch-readiness question: utility/legal route integrity, global footer destinations, 404 recovery, accessibility-statement honesty, and the Contact privacy handoff. I read the vision's required utility/legal pages, built and linted the immutable Council runtime, opened local and public Render in the real in-app Browser, literally viewed the 404 and Accessibility routes at desktop/tablet/phone states, opened the approved `mockups/04-process-planner.png` for global-shell comparison, exercised the Accessibility mobile menu, inspected the Contact form without submitting it, collected route/title/landmark/containment data, and ran local/public HTTP smoke plus browser diagnostics.

## Evidence

- Council-only runtime dependency repair used `pnpm install --offline --force`; source-scoped ESLint exited `0`, `tsc --noEmit` exited `0`, and the optimized Next build completed successfully. The known `metadataBase` fallback warning remains.
- Next's optimized route list contains `/accessibility` and `/contact`, but no `/privacy` or `/terms` route. Source inspection confirms no `src/app/privacy` or `src/app/terms` page while `src/lib/site-config.ts` advertises both footer links and `src/app/contact/page.tsx` links “Privacy Policy” to `/privacy`.
- Local and public HTTP results matched: `/accessibility` and `/contact` returned `200`; `/privacy`, `/terms`, and an unknown path returned `404`. Both missing legal URLs render the generic “This page doesn't exist yet” 404.
- Local Accessibility was literally viewed at `1280×900`, `768×1024`, `390×844`, and narrow `320×844`; all states had one main landmark, one H1, exact width containment, and readable glass/grid hierarchy. Local phone menu opened and closed with `Open menu`/`Close menu` and no overflow (`scrollWidth=375`, `clientWidth=375`). Captures: `council-20260831T193952Z-local-accessibility-desktop.png`, `local-accessibility-tablet.png`, `local-accessibility-phone.png`, and `local-accessibility-320.png`.
- Public Accessibility at phone matched local (`390` inner width, `375` client/scroll width, one main/H1); public 404 desktop was visually viewed and preserved recovery links to Services, Work, and “Describe your project.” Capture: `council-20260831T193952Z-public-accessibility-phone.png` and `public-404-desktop.png`. Local 404 phone capture: `local-privacy-phone.png`.
- Contact was literally viewed at local `1280×900` and `390×844`; both states had one main/H1, one form, and exact containment. The phone closeout visibly retained the shared footer; its Privacy Policy link and footer Privacy/Terms links resolve to the missing routes above. Captures: `local-contact-desktop.png`, `local-contact-phone.png`, and `local-contact-footer-phone.png`.
- Accessibility copy states a WCAG 2.2 AA target and gives a reporting path via `hello@cyvexly.com`; Contact renders the expected general-question form with no `action` attribute, so no submission was attempted. Browser warning/error logs were empty on local and public tabs. The IAB evaluation realm exposes no `window.performance` or paint/navigation timing API, so field vitals remain unconfirmed.

## Findings and disposition

### CYC-R27-F001 — Release-blocking until Owner/legal review: required Privacy and Terms routes are missing

The global footer presents `Privacy` and `Terms` links on the live site, and Contact explicitly tells visitors to “See our Privacy Policy,” but both destinations return a 404 locally and on the public Render deployment. The vision requires a Privacy Policy describing actual form, analytics, email, scheduling, and payment data handling plus Website Terms; it also requires legal text review for the business location and customer markets. This is a broken trust/legal path, not a cosmetic 404.

**Closure test:** Owner supplies or approves bounded Privacy and Website Terms content for the actual business location/markets and tools in use; Builder adds `/privacy` and `/terms`, verifies 200 responses and page metadata, and rechecks every footer/contact link on local and public deployments. Council must not invent legal text or jurisdiction facts.

### CYC-R27-F002 — Pass with follow-up: 404 recovery is useful but signals unfinished work

The 404 page preserves the shared shell and offers Back to home, Services, Work, and Planner recovery links with one main/H1 and exact containment at desktop and phone. Its headline “This page doesn't exist yet” accurately exposes unfinished route coverage; after F001 is resolved, Owner may choose whether to keep that wording or use a neutral “Page not found.”

### CYC-R27-F003 — Observation: Accessibility statement is coherent, but claims remain Owner/legal-gated

The Accessibility route is readable and responsive and gives a concrete reporting route, but its WCAG 2.2 AA target and two-business-day response promise should remain subject to the same final legal/operational review as the missing policies. No Council change is authorized by this finding.

## Method and next-Builder plan

The next Builder slice should be the smallest coherent trust/legal completion: add Owner-approved Privacy and Terms routes, repair the Contact/footer destinations, and verify local/public route status and metadata. Keep the useful 404 recovery structure. Do not infer jurisdiction, analytics, payment, email, or cookie facts from the current copy. After that slice, the next Council should use a different capability for attended keyboard/OS motion, Safari/Firefox, second-device scale, or field Web Vitals.

## Not checked

Final legal wording, business location and customer markets, actual analytics/email/payment providers, physical keyboard hardware, OS reduced motion, Safari/Firefox, second-device scale, field Web Vitals, and external Contact submission were not confirmed. Council did not edit product source, tests, Builder/Auditor resources, or automation.


---

<!-- council review CYC-R28-20260831-01 published 2026-08-31T21:04:43.0227583Z -->

# CYC-R28 Pricing scope-signal review

## Scope and identity

- Review: `CYC-R28-20260831-01`; scheduler minute zero `2026-08-31T20:39:23.149Z`.
- Independent snapshot head: `409ef8026ae6c93b49f3090a950bea7f1d2a2b7b` (record commit); accepted product source is `7ec9c5c` (`Build Pricing scope signal system`), with source clean at round start. The prior product source was `b5dfd50`.
- Council runtime: `.codex/runtime/council/council-20260831T203923Z/runtime`, port `5373`; source dirty fingerprint `4107D75B3C9E768E69ABABC0B4DE9E3E3577C1C9BFC73252C74D3D2ABCFDF86B`.
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied. No Builder lock was active when the immutable snapshot was created.

## Product question and method

Round 28 reviewed the newly accepted Pricing scope-signal system rather than repeating the prior text-only Pricing check: visual fidelity to the approved `mockups/02-services-pricing.png`, package hierarchy, responsive breakpoint behavior, decorative SVG accessibility, FAQ/Planner interaction, public/local agreement, and the still-open utility/legal routes. I ran the isolated production build, source lint, post-build TypeScript, opened local and public Render in the real in-app Browser, literally viewed Pricing at desktop/tablet/phone/narrow-phone states, opened the approved mockup, collected exact containment and package geometry, exercised FAQ expansion and the Pricing-to-Planner CTA, and ran route smoke plus browser diagnostics.

## Verification and evidence

- `pnpm install --offline --force` restored the disposable runtime. Source-scoped ESLint exited `0`; the optimized Next build exited `0` with the known `metadataBase` fallback warning; post-build `tsc --noEmit` exited `0`. A pre-build TypeScript invocation reported the generated Next `LayoutProps` type as missing, then passed after the build generated `.next/types`; this is an ordering caveat, not a shipped-build failure.
- Local Pricing was literally viewed at `1440×900`, `1024×900`, `1023×900`, `768×1024`, `390×844`, and `320×844`; all `scrollWidth` values matched the visible client width. The split copy/scope composition, five package headings, one main/H1, and featured Orbit card remained intact. Captures: `council-20260831T203923Z-pricing-desktop.png`, `pricing-tablet.png`, `pricing-phone.png`, and `pricing-320.png`.
- The original scope SVG is inside an `aria-hidden="true"` ancestor, has no focusable descendants, and its package labels match the five package cards. Decorative labels are not the source of package truth; the visible cards remain the readable source of price/scope facts.
- FAQ expansion changed `aria-expanded` from `false` to `true` and exposed the honest starting-point answer. The first “Describe your project” CTA points to `/start`, whose H1 is `Tell us what you need. We'll shape the right route.`
- Public Render Pricing matched local at `1440×900` and `390×844` with the same one-main/one-H1/five-package structure, scope signal, and exact containment. Captures: `council-20260831T203923Z-public-pricing-desktop.png` and `public-pricing-phone.png`.
- Local/public route smoke: core routes, `/pricing`, `/services`, `/work`, `/process`, `/contact`, `/accessibility`, and `/start` returned `200`; `/privacy` and `/terms` still returned `404` on both deployments, as did the unknown control path. Local/public Browser warning/error logs were empty. The IAB evaluation realm exposes no `window.performance` or paint/navigation timing API, so field vitals remain unconfirmed.

## Findings and disposition

### CYC-R28-F001 — Pass: Pricing scope system materially closes the prior visual gap

The new split glass composition gives the truthful Pricing entry a clear copy pane and an original five-node scope signal. It tracks the approved mockup's orbital/glass language without importing mockup-only prices or claims. Signal, Orbit, Nexus, Commerce, and Custom remain legible in the actual package cards; the Orbit featured state is visually distinct; 1440/1024/1023/768/390/320 states stay contained; and public Render matches the isolated runtime. No release-blocking visual or interaction defect was found in this slice.

### CYC-R28-F002 — Release-blocking carry-forward: Privacy and Terms remain missing

The new Pricing source did not resolve the prior trust/legal blocker: global footer `Privacy` and `Terms` links and Contact's “Privacy Policy” handoff still return 404 locally and publicly. Keep this open until the Owner supplies or approves bounded policy text, actual-tool disclosures, and jurisdiction/market facts; Council must not invent them.

### CYC-R28-F003 — Owner Decision: final visual acceptance remains explicit

The updated scope field now materially improves parity with the approved Pricing mockup, but final acceptance of the broader glass/art direction is still the Owner's decision. The 320px scope labels are intentionally decorative and hidden from assistive technology; do not replace them with unsupported factual copy merely to enlarge the art.

## Method and next-Builder plan

Keep the Pricing scope field and package facts stable while the Owner reviews the public desktop/phone result. The next coherent Builder slice should address the approved Privacy/Terms routes and legal review, not more token-only Pricing churn. After that, Council should use a different capability for attended keyboard/OS motion, Safari/Firefox, second-device scale, or field Web Vitals.

## Not checked

Physical keyboard hardware, OS-level reduced motion, Safari/Firefox, second-device scale, field Web Vitals, external Planner/Contact side effects, final Owner visual acceptance, and final Privacy/Terms jurisdiction/legal wording were not confirmed. Council did not edit product source, tests, Builder/Auditor resources, or automation.


---

<!-- council review CYC-R29-20260831-01 published 2026-08-31T22:04:16.7647141Z -->

# CYC-R29 Pricing keyboard and interaction review

## Scope and identity

- Review: `CYC-R29-20260831-01`; scheduler minute zero `2026-08-31T21:38:54.271Z`.
- Independent snapshot head: `409ef8026ae6c93b49f3090a950bea7f1d2a2b7b`; accepted product source is `7ec9c5c8e952bcfc4ce5538c92bbee1cffcf0474` (`Build Pricing scope signal system`).
- Council runtime: `.codex/runtime/council/council-20260831T213854Z/runtime`, port `5373`; PM prompt `NO ACTIVE PM PROMPT`.
- Council did not edit product source, tests, Builder/Auditor resources, automation, or `.engine-lock`.

## Product question and method

Round 29 chose a new capability rather than repeating Round 28's visual-first scope review: can Pricing's primary CTA, FAQ disclosure, and responsive navigation be independently reached with keyboard-like input while preserving focus visibility, and do the accepted Pricing states still agree between the isolated runtime and public Render? I ran the isolated lint/build/typecheck, opened local and public Pricing in the real in-app Browser, literally viewed the approved `mockups/02-services-pricing.png` and local/public desktop/tablet/phone captures, exercised mouse and Browser-locator keyboard paths, checked menu focus return, collected exact containment/landmark/package measurements, and ran core/legal route smoke plus console diagnostics.

## Verification and evidence

- Disposable-runtime `pnpm install --offline --force`, source ESLint, optimized Next build, and post-build TypeScript all completed successfully. The build emitted only the known `metadataBase` fallback warning. Runtime PID `38108` served port `5373` during the review.
- Local Pricing was literally viewed at `1440×900`, `768×1024`, and `390×844`; the cited captures show the glass/orbital scope treatment, readable package cards, mobile stacking, and menu focus state. Additional captures show the expanded FAQ and footer/legal boundary. Local metrics remained one `main`, one `h1`, five package headings, and no horizontal overflow (`scrollWidth === clientWidth`) at each viewport.
- Public Render Pricing was opened and captured at `1440×900` and `390×844`. It matched the local route's title, one-main/one-H1 structure, five package headings, hidden decorative scope signal, and exact containment. Browser warning/error logs were empty locally and publicly.
- Mouse interaction passed: the Pricing CTA navigated to `/start`, the FAQ disclosure changed `aria-expanded` from `false` to `true`, and the mobile menu changed `false → true → false` with focus returning to the `Open menu` control and a visible solid focus outline.
- In-app Browser locator `.press('Enter')` focused both the CTA and FAQ control (solid outline) but did not activate navigation or disclosure; a CUA `ENTER` attempt likewise did not activate. This is recorded as an in-app Browser capability boundary, not as a product defect. Native/attended keyboard or CDP input is required before keyboard activation can be called passed.
- Core routes (`/`, `/pricing`, `/services`, `/work`, `/process`, `/contact`, `/accessibility`, `/start`) returned `200` locally and publicly. `/privacy`, `/terms`, and the unknown control path returned `404` on both deployments. The IAB evaluation realm exposes no `window.performance` or navigation/paint timing API, so field vitals remain unconfirmed.

## Findings and disposition

### CYC-R29-F001 — Capability boundary: keyboard activation remains unconfirmed

The in-app Browser exposed focus semantics but its locator and CUA Enter paths did not dispatch the default activation for the Pricing CTA or FAQ disclosure, while mouse clicks worked. Do not convert this into a source defect without an attended physical-keyboard, OS-level, or CDP event path. Carry it forward as an explicit proof gap; the Builder should preserve native links/buttons and focus-visible styling.

### CYC-R29-F002 — Pass: accepted Pricing scope remains contained and coherent

The updated Pricing surface held one main/H1 and five package headings at local `1440/768/390` and public `1440/390`, with no horizontal overflow, clean diagnostics, a decorative scope SVG hidden through an `aria-hidden` ancestor, and matching local/public route structure. The approved mockup's orbital/glass intent is materially represented without treating decorative labels as package truth. No release-blocking defect was found in this visual/interaction slice.

### CYC-R29-F003 — Release-blocking carry-forward: Privacy and Terms remain missing

Footer/legal links still return `404` on local and public deployments. Keep this trust/legal blocker open until the Owner supplies or approves bounded policy content, jurisdiction, and actual-tool disclosures; Council must not invent legal wording.

### CYC-R29-F004 — Owner Decision: final visual acceptance remains explicit

Council evidence supports the updated Pricing composition, but final artwork/mockup acceptance is still the Owner's decision and is not implied by this review.

## Method and next-Builder plan

Preserve the accepted Pricing scope signal, package facts, native controls, and focus-visible treatment. The next coherent Builder slice is the Owner-approved Privacy/Terms route work. The next Council should use a different capability—attended keyboard/OS motion, Safari/Firefox, second-device scale, or production-like field vitals—and should not repeat Pricing token tuning.

## Not checked

Physical keyboard hardware, OS-level reduced motion, Safari/Firefox, second-device scale, field Web Vitals, external Planner/Contact side effects, final Owner visual acceptance, and final Privacy/Terms legal wording were not confirmed.

## Publication and cleanup

This report is published through the Council role-report helper after the Normal 25-minute substantive window and before the 30-minute cleanup deadline. Exact publication and cleanup timestamps are recorded in the hot Council state and handoff files.


---

<!-- council review CYC-R30-20260831-01 published 2026-08-31T23:03:28.2046987Z -->

# CYC-R30 Planner restore gate and dynamic 404 review

## Scope and identity

- Review: `CYC-R30-20260831-01`; scheduler minute zero `2026-08-31T22:37:55.157Z`.
- Independent snapshot head: `a8fb8cf2390d4786ede30ac9bf67dfa16f412099`; accepted product commits under review are `e716541` (dynamic 404 metadata) and `744cdd8` (Planner restore gate).
- Council runtime: `.codex/runtime/council/council-20260831T223755Z/runtime`, port `5373`, process `2808`; PM prompt `NO ACTIVE PM PROMPT`.
- Council did not edit product source, tests, Builder/Auditor resources, automation, or `.engine-lock`.

## Product question and method

Round 30 followed the fresh accepted Builder work and Auditor findings rather than repeating the prior Pricing review: does the Planner now protect the first-use interaction window while restoring saved drafts, and do invalid dynamic service/work routes retain the correct 404 identity after hydration? I ran the isolated dependency install, source lint, optimized Next build, and post-build TypeScript; opened the local snapshot and public Render in the real in-app Browser; literally viewed Planner desktop/tablet/phone, clean-origin, service-prefill, saved-draft, validation, and invalid-route states; compared the Planner with the approved `mockups/04-process-planner.png`; exercised visible save/reload/back/recovery controls; collected raw initial HTML and exact landmark/containment metrics; and ran local/public route smoke plus Browser diagnostics.

## Verification and evidence

- `pnpm install --offline --force`, source ESLint, optimized 23-page Next build, and post-build TypeScript completed successfully. The only build warning was the known Owner/domain-blocked `metadataBase` fallback.
- Local settled Planner was literally viewed at `1440×900`, `768×1024`, and `390×844`; public Render was viewed at `1440×900` and `390×844`. The settled route holds one `main`, one H1, Step 1 of 9, and exact containment (`scrollWidth === clientWidth`) at every captured target. Captures include desktop, tablet, phone, restored phone, clean phone, prefill phone, and public views.
- Raw local and public `/start` HTML contains `Preparing your Planner`, `aria-live="polite"`, and `aria-busy="true"` with no `<form>` or `#fullName` before hydration. The in-app Browser's navigation resolves after hydration, so the transient gate's dwell time was not independently timed by this Browser surface; the settled state and raw server contract were independently observed.
- Through visible local controls on a clean origin, the Planner advanced from Step 1 to Step 3, saved a draft, reloaded, and restored Step 3. Back exposed the saved name, email, and contact values plus the restored-draft message. A separate clean origin settled at Step 1; a clean service-prefill origin settled at Step 1 with `Starting point added: Business websites...`. No external submit or email side effect was attempted.
- Empty public Step 1 validation preserved the first-error contract: three honest alerts, `aria-invalid="true"` on name/email/contact, focus on `fullName`, and zero horizontal overflow. All visible Planner inputs had associated labels; all nine progress buttons had accessible names.
- Local and public invalid service/work routes retain `Page not found — Cyvexly Studio` after hydration, `noindex, nofollow`, one main/H1, four recovery links, and exact containment. Mouse recovery from the local invalid service route reached `/services` with its correct title/H1. Valid service/work routes stayed `200`; Privacy/Terms remain `404` on both deployments.
- The connected `/services/business-websites` and `/process` routes were also literally viewed at desktop and phone sizes; their canonical H1s, glass/grid shell, stage cards, and exact containment remain coherent with the Planner's route language.
- At compact widths the nine-step progress rail is a horizontal overflow region. Step 9 is outside the initial visible rail viewport at `768` and `390`, but a native scroll to the end reveals the named `Step 9: Review & submit` control. This is an interaction-affordance observation, not a release-blocking failure.
- Local, clean-origin, and public Browser warning/error logs were empty. The IAB evaluation realm exposes no Performance API, so field vitals remain unconfirmed.

## Findings and disposition

### CYC-R30-F001 — Pass: Planner restore gate removes the saved-draft overwrite window

The source now withholds the interactive form behind a polite busy status until browser storage/prefill resolution completes. Raw HTML proves the pre-hydration contract, and visible save/reload/back evidence proves a saved Step 3 draft restores without losing the name, email, contact, or business description values. Clean-origin and service-prefill flows still settle at Step 1. No release-blocking defect was found in the accepted fix.

### CYC-R30-F002 — Pass: dynamic 404 identity survives hydration and recovery remains useful

Both invalid dynamic route families preserve the custom 404 title, noindex semantics, one main/H1, four recovery links, and containment locally and publicly. Valid dynamic routes remain healthy, and mouse recovery returns to Services. This closes the two accepted Round 19 defects for the reviewed routes.

### CYC-R30-F003 — Next / Observation: compact progress rail needs an explicit final-step affordance

At 390px and 768px, the initial progress rail's scrollport does not show Step 9 even though the overflow region can be scrolled and the control then becomes visible and named. The rail shows directional/scroll affordance in the rendered state, so this is not a release blocker; still, a future Builder slice should make the final-step reachability unambiguous for touch and keyboard users. Closure is a fresh 390/768 visible pass with Step 9 discoverable without guesswork and a separate native-keyboard check.

### CYC-R30-F004 — Release-blocking carry-forward: Privacy and Terms remain missing

Footer/legal links still return `404` on local and public deployments. Keep this trust/legal blocker open until the Owner supplies or approves bounded policy content, jurisdiction, and actual-tool disclosures; Council must not invent legal wording.

### CYC-R30-F005 — Owner Decision: Planner visual parity remains explicit

The current Planner is calm, readable, and coherent, but the approved mockup's richer globe/orbital hero and denser step-4 composition remain an Owner fidelity decision. This review does not infer final visual acceptance.

## Method and next-Builder plan

Preserve the restore gate, native controls, truthful validation, dynamic 404 identity, and recovery links. The next coherent Builder slice should either clarify compact progress-rail discoverability or take the Owner-approved Privacy/Terms route work; do not reopen the fixed race or metadata branches without new evidence. Keep founder identity, jurisdiction, domain/email provider, artwork framing, and field-vitals claims behind explicit Owner or capability boundaries.

## Not checked

Physical keyboard hardware, OS-level reduced motion, Safari/Firefox, second-device scale, field Web Vitals, external Planner/Contact side effects, final Owner visual acceptance, and final Privacy/Terms legal wording were not confirmed. The in-app Browser could not independently dwell on the pre-hydration transient or close native keyboard activation.

## Publication and cleanup

This report is published through the Council role-report helper after the Normal 25-minute substantive window and before the 30-minute cleanup deadline. Exact publication and cleanup timestamps are recorded in the hot Council state and handoff files.
