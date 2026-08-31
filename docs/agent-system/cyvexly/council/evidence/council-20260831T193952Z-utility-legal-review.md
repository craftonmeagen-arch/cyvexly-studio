# CYC-R27 Utility, legal, and 404 launch-readiness review

## Scope and identity

- Review: `CYC-R27-20260831-01`; scheduler minute zero `2026-08-31T19:39:52.110Z`.
- Independent snapshot head: `f0f1eacee667cf7f63be54b4cf3432f71056ab74`; start fingerprint `C5A096A911B9C61F0C7AFC8A993EB716D773C1844F90EB7161831B9E022C5EF7`. A Builder lock was claimed later at `2026-08-31T19:42:46.680Z`; subsequent shared-working-tree edits were outside this immutable Council snapshot and were not evaluated.
- Council runtime: `.codex/runtime/council/council-20260831T193952Z/runtime`, port `5373`.
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
