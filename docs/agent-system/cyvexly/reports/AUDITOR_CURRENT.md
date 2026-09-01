# Independent Forensic Auditor Report

## Review identity

- Review ID: `IFA-2026-09-01-R21`
- Round: `auditor-20260901T1837Z-021`
- Role: Cyvexly Independent Forensic Auditor
- Heartbeat minute zero: `2026-09-01T18:37:00.377Z`
- Accepted source: product commit `06fbadd6448b4e8e8c77d1618b1c4e6cb14238f2`, source tree `d9f3e4a976e08f4acc11307b152bcb388d6885a6`
- Runtime: `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260901T1837Z-021`, port `5273`, real Codex in-app Browser tab `5`
- PM prompt/status: `NO ACTIVE PM PROMPT`; standing Auditor role applied

## Isolation and method

The standard Auditor guard was attempted but remains blocked by managed-permission `UnauthorizedAccessException` while writing `.codex/role-state/auditor.active.json`. I used an exact archive/dependency-junction runtime and manual report/evidence routing. Repository HEAD was `26a768a9389b901c0be002f7e5a76e345915a45a` with Builder-owned changes in `src/app/services/page.tsx` and `src/components/site-header.tsx`; Builder lock `cyvexly-builder-20260901T175628Z-r25` was active and preserved. Those mutable changes and successor source were not inspected. Council resources and scheduler automation were untouched.

This was a fresh navigation-resilience and Work-filter pass, not a repeat of R20's legal/metadata method. The real in-app Browser exercised the Work filter matrix at `1440×900`, the same filters at `390×844` (`375px` layout), a filtered Work → Planner → browser-Back handoff, and a four-route mobile primary-navigation sweep. Opened phone renders for Work's empty-filter state and Services. Warm warning/error logs and accepted-archive ESLint were also checked.

## Results and disposition

### Work filter matrix and phone containment — pass; no new defect

At desktop, All returned three cards, Business Site two, Redesign zero, Landing Page zero, Commerce one, and Concept three. Every button updated `aria-pressed`; zero-result filters rendered the authored `No projects match that filter yet.` message rather than an unexplained blank. At phone width, Redesign and Landing Page retained that message, Commerce showed Vellora Care, All restored three cards, and the filter group remained exactly `375/375` with no horizontal overflow.

### Mobile navigation and route recovery — pass; no new defect

Opening the mobile menu exposed all five links with `aria-expanded=true`. Selecting `/work`, `/pricing`, `/process`, and `/services` in sequence removed the menu after navigation; each destination settled with one `main`, one H1, and no horizontal overflow. The filtered Work CTA reached `/start` with the restored saved-draft notice and one Planner main/H1. Browser Back returned to `/work` with the default All filter and normal scroll restoration; no broken route or stale menu remained.

At exact `320×844` on the Aurora Spaces case study reached from Work, the route settled with one main/H1, zero overflow, and three semantic `role="img"` previews with descriptive accessible names; the `← All work` recovery link remained reachable.

At terminal scroll on the `320×844` Work route, the header remained sticky at `top:0; z-index:50`; opening the menu positioned it immediately below the header with no horizontal overflow, reconfirming the accepted stacking boundary.

### Runtime verification and method boundary

The accepted archive's `npm exec -- eslint src` and `npm exec tsc -- --noEmit` both exited `0`; warm Browser warning/error logs were empty. The Browser locator `press("Tab")` action did not advance focus from body or a focused header link in this IAB API, so physical keyboard traversal remains unconfirmed. This is a tooling/method limit, not a product finding; no storage/profile inspection or policy workaround was attempted.

## Open debt and limits

`CYV-IFA-005` remains open for Owner-approved production domain, `metadataBase`, canonical/OG URL, and sitemap verification. `CYV-IFA-006` remains open for approved server-side Planner receipt/confirmation. `CYV-IFA-009` remains partially mitigated pending true no-draft first-use proof on a clean origin/context. `CYV-IFA-010` and `CYV-IFA-011` remain closed. Public deployment adoption, reduced-motion behavior, cross-browser behavior, physical keyboard, valid external mail, and real integrations remain unconfirmed.

Evidence: `auditor/evidence/auditor-20260901T1837Z-021-navigation-filter-probe.md`, `auditor/evidence/auditor-20260901T1837Z-021-runtime-metrics.json`, `auditor/evidence/auditor-20260901T1837Z-021-work-redesign-390.png`, and `auditor/evidence/auditor-20260901T1837Z-021-services-390.png`.

## Cleanup status

After the governing active-work floor and publication, the exact IAB tab/viewport was reset/closed, server PID `21860` plus launcher `34412` were stopped, and the R21 temp runtime was removed through exact role-owned cleanup. Port `5273` is clear and no IAB tabs remain. The Builder r25 lock cleared naturally during closeout; the next mutable HEAD is `4b087446` with source tree `3ea8774a`, observed but not inspected. `Complete-ReviewRound.ps1` remained unavailable for normal guard cleanup because the guard could not create its active state; this deviation is disclosed rather than represented as a successful guard close.
