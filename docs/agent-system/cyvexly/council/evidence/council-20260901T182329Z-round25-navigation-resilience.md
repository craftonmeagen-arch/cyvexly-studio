# Council evidence — CYC-R41-20260901-01

## Review identity

- Scheduler minute zero: `2026-09-01T18:23:29.969Z`; round `20260901T182329Z-heartbeat`.
- Fresh Council snapshot/runtime identity: source head `26a768a9389b901c0be002f7e5a76e345915a45a`; dirty fingerprint `C35CC3462824692A5297603542782E4378A6AD21DECA33691CC0797819A83A0B`; isolated runtime port `5373`. During review, the same candidate was committed and pushed as `e38851f`; the Council snapshot remained immutable.
- PM prompt: `NO ACTIVE PM PROMPT`.
- Builder lock was active for `cyvexly-builder-20260901T175628Z-r25` at entry and released after `e38851f`/closeout; Council did not read, alter, or stop Builder resources.

## Review question and method

R41 reviewed the active Round 25 navigation-resilience candidate with a fresh method after R40's route-graph crawl: direct real in-app Browser interaction against the isolated candidate runtime, required visual viewpoints, semantic current-page checks, native Escape/focus behavior, history handoff, breakpoint reconciliation, and a read-only public-adoption comparison. Approved mockup 06 was viewed beside the current Home render. No form, mailto, or external side effect was triggered.

## Candidate runtime proof

- `pnpm install --offline --frozen-lockfile; pnpm run build` passed on the immutable Council runtime. Next 16.3.3 emitted only the known unset `metadataBase` warning.
- `pnpm exec eslint src` passed with no output.
- Real IAB renders were viewed at 1440×900, 768×1024, 390×844, and 320×844. The Home/Services blue-glass hierarchy remains coherent; mobile header and menu fit the viewport; the Services CTA has the intended wrapping-safe class.
- At `/services`, opening the compact disclosure sets `aria-expanded="true"` and mounts `#mobile-nav`; native `Escape` closes it and returns focus to the `Open menu` trigger, including when focus first moves to a menu link.
- Activating mobile `Work` closes the disclosure and reaches `/work`; browser Back returns to `/services` with the disclosure closed and `aria-current="page"` on Services.
- Resizing an open 390px disclosure to 1024px closes the compact nav and exposes the desktop Primary nav; returning to 1023px restores the compact trigger with no stale open panel.
- Current-page semantics resolve correctly on `/`, `/services/business-websites` (Services), `/work/nexora-systems` (Work), and `/start` (Describe your project); Contact is intentionally outside the primary nav. All sampled pages had one `main`, one `h1`, and empty Browser warning/error logs.
- Builder's independent final 114-case route matrix reports zero route/structure/current/containment failures; its raw-CDP focus, root-24 stress, and before/after captures were inspected as corroborating evidence, not substituted for this Council IAB pass.

## Public adoption proof

After Builder commit/push `e38851f` propagated, `https://cyvexly-studio.onrender.com/services` returned the new ETag `{"44zd3ca5e02ryz"}` and hydrated `aria-current="page"` on Services. At 390px, opening the menu set `aria-expanded="true"`; native Escape closed it and returned focus to the trigger. Mobile Work navigation closed the panel and updated the current marker; browser Back returned to Services closed. Resizing an open mobile panel to 1024px closed the compact nav and exposed Primary; 1023px restored the trigger. Public Home renders at 1440×900 and 768×1024 plus Services at 390×844 and 320×844 were viewed with empty Browser warning/error logs. A final recheck after the subsequent docs-only closeout deployment (ETag `{"es8or65zfo2ryz"}`) reproduced Services current marker, Escape/focus return, and clean diagnostics.

## Assessment

### `CYC-R41-F001` — Resolved before round close: public adoption matches local candidate

The local candidate's compact-navigation lifecycle and location semantics were independently reproduced on the public Render origin after `e38851f` propagated. Escape/focus return, route/history closure, 1024/1023 breakpoint reconciliation, nested current markers, and the narrow CTA contract agree across local and public evidence. No new Priority Now product defect was established.

Existing Owner-blocked metadata/domain/indexability, Privacy/Terms/founder facts, and provider-backed Planner/Contact confirmation remain carry-forward decisions.

## Verification limits

Public proof above was limited to a read-only `/services` navigation probe. Physical keyboard hardware, Safari/Firefox, reduced-motion, production vitals, true clean no-draft Planner first use, legal/domain facts, real email delivery, and Owner second-computer visual acceptance remain unverified.
