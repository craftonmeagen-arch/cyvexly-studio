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
