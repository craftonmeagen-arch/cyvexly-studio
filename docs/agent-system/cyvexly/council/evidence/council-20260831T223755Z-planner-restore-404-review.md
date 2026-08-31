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
