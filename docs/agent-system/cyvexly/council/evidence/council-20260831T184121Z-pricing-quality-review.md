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
