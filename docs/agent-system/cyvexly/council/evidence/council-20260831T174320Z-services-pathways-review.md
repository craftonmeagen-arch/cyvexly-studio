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
