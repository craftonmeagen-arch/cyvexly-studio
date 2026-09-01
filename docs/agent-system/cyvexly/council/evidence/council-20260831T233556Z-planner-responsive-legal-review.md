# CYC-R31 Planner responsive and legal-route review

## Scope and identity

- Review: `CYC-R31-20260901-01`; scheduler minute zero: `2026-08-31T23:35:56.196Z`.
- Independent snapshot head: `05a2403184c53f3d80f522e7ae958052dda324c5`; accepted product commits under review are `e716541` (dynamic 404 metadata) and `744cdd8` (Planner restore gate). The snapshot also contains the documentation-only review record commit.
- Later shared-working-tree Builder/Auditor edits and their evidence appeared after the immutable snapshot and were excluded from this review; no Council action touched them.
- Council runtime: `.codex/runtime/council/council-20260831T233556Z/runtime`, port `5373`, process `39000`; PM prompt: `NO ACTIVE PM PROMPT`.
- Council did not edit product source, tests, Builder/Auditor resources, automation, or `.engine-lock`.

## Product question and method

Round 31 followed the accepted Planner restore/404 fixes and the prior compact-rail observation with a fresh responsive/connected-route check. I ran the isolated optimized build, ESLint, and post-build TypeScript; opened the immutable local runtime in the real in-app Browser; literally viewed the Planner at phone and tablet widths; captured settled screenshots; inspected Planner progress semantics and source; checked the approved `mockups/04-process-planner.png`; and verified local/public Privacy and Terms routes. A requested 24px-root stress probe was attempted in the IAB, but its DOM is read-only for stylesheet mutation; that capability boundary is recorded rather than treated as product evidence.

## Verification and evidence

- `pnpm install --offline --force`, source ESLint, optimized Next build, and post-build TypeScript completed successfully. The only build warning was the known Owner/domain-blocked `metadataBase` fallback.
- The local Planner was literally viewed at `320×844`, `390×844`, and `768×1024`; settled states have one `main`, one H1, Step 1 of 9, and exact horizontal containment (`scrollWidth === clientWidth`). Current captures are `council-20260831T233556Z-planner-320.png`, `council-20260831T233556Z-planner-phone-verified.png`, and `council-20260831T233556Z-planner-tablet-verified.png`.
- The phone capture shows the calm grid hero, readable heading/intro, menu control, and the compact progress rail with the visible directional affordance. The tablet capture shows the same hierarchy, two-column first-step fields, and the rail's intentional horizontal overflow without page-level overflow.
- Source inspection confirms the progress rail is a named `nav` with nine named buttons and the current step marked with `aria-current="step"`; the active step is scrolled into view on step changes, respecting reduced-motion preference. The initial Step 9 remains outside the compact rail scrollport until the user scrolls it, carried forward as an affordance observation rather than a release blocker.
- Local `Privacy` and `Terms` links both still resolve to the custom `Page not found — Cyvexly Studio` state at phone width (`one main`, `This page doesn't exist yet.`, `noindex`); public Render `/privacy` and `/terms` show the same hydrated 404 identity. The linked Accessibility route does resolve to its statement page with one main/H1 and exact containment. No `src/app/privacy` or `src/app/terms` route exists. Current evidence is `council-20260831T233556Z-privacy-404-phone.png` and `council-20260831T233556Z-accessibility-phone.png`.
- The connected Planner and route language remain coherent with the approved mockup's Planner column. The mockup's richer globe/orbital art direction remains an Owner fidelity decision, not a Council-authorized implementation change.

## Findings and disposition

### CYC-R31-F001 — Pass: responsive Planner shell remains contained and legible

At 390px and 768px, the settled Planner preserves its one-main/one-H1 structure, readable hierarchy, usable first-step fields, and page-level containment. The accepted restore gate remains structurally safe; no new responsive regression was found.

### CYC-R31-F002 — Next / Observation: compact progress rail still needs a clearer final-step cue

Step 9 is initially outside the visible rail at compact widths, although the horizontal scroll region and nine accessible buttons make it reachable. Keep this as a focused future Builder slice: provide an unambiguous touch/keyboard affordance and re-prove at 390/768 with native keyboard input where available.

### CYC-R31-F003 — Release-blocking carry-forward: Privacy and Terms remain missing

Footer/legal links still return 404 locally and publicly. Keep this trust/legal blocker open until the Owner supplies or approves bounded policy content, jurisdiction, and actual-tool disclosures; Council must not invent legal wording.

### CYC-R31-F004 — Owner Decision: Planner visual parity remains explicit

The current responsive Planner is coherent and calm, but the approved mockup's richer globe/orbital visual treatment remains Owner-gated. This review does not infer final visual acceptance.

### CYC-R31-F005 — Capability boundary: IAB cannot perform root-24 stylesheet mutation

The IAB evaluate realm rejected a direct `document.documentElement.style.fontSize` assignment as read-only. No 24px-root geometry claim is made from that attempt; use a separately owned native Chromium/CDP profile for that stress case in a future round.

## Method and next-Builder plan

Preserve the restore gate, truthful validation, dynamic 404 identity, and recovery links. The next coherent Builder slice should either clarify compact progress-rail discoverability or take the Owner-approved Privacy/Terms route work. Do not infer jurisdiction, legal wording, domain, analytics, payment, email, cookie, or field-vitals facts. A future Council should use native CDP or another approved capability for the 24px-root case and native keyboard proof.

## Not checked

Physical keyboard hardware, OS-level reduced motion, Safari/Firefox, second-device scale, field Web Vitals, external Planner/Contact side effects, final Owner visual acceptance, and final Privacy/Terms legal wording were not confirmed.

## Publication and cleanup

Published `2026-09-01T00:01:17.5900668Z` after `25m21.3940668s` substantive
work; cleanup verified `2026-09-01T00:01:52.3353719Z` (`25m56.1393719s` total),
before the hard edge. No Council guard, runtime, port, process, or Browser tab
remains.
