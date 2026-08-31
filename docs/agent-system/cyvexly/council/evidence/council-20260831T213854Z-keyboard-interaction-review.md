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
