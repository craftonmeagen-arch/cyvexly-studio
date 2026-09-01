# Auditor R21 navigation and filter probe

- Review: `IFA-2026-09-01-R21` / `auditor-20260901T1837Z-021`
- Accepted product: commit `06fbadd6448b4e8e8c77d1618b1c4e6cb14238f2`, source tree `d9f3e4a976e08f4acc11307b152bcb388d6885a6`
- Runtime: exact archive `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260901T1837Z-021`, `next dev --webpack`, port `5273`, real in-app Browser tab `5`
- Mutable boundary: repository HEAD was `26a768a9389b901c0be002f7e5a76e345915a45a`; Builder lock `cyvexly-builder-20260901T175628Z-r25` was active and preserved. Working-tree changes in `src/app/services/page.tsx` and `src/components/site-header.tsx` were excluded.

## Work filter matrix

At desktop `1440x900`, every filter updated `aria-pressed` correctly and kept the page contained: All `3` cards, Business Site `2`, Redesign `0`, Landing Page `0`, Commerce `1`, Concept `3`. Redesign and Landing Page each render the authored `No projects match that filter yet.` empty state rather than a blank region.

At phone `390x844` (`375px` layout), Redesign and Landing Page showed the same explicit empty state; Commerce showed Vellora Care; All restored all three cards. The filter group remained `375/375` with no horizontal overflow. Opened visual evidence: `auditor/evidence/auditor-20260901T1837Z-021-work-redesign-390.png`.

At the exact narrow `320x844` (`305px` layout), all six filters again updated their pressed state, preserved the correct empty/card result, and remained `305/305` with no horizontal overflow.

## Navigation recovery

From the filtered Work state, the single `Describe your project` CTA reached `/start` after hydration with one `main`, one Planner H1, the existing saved-draft notice, restored `R9 Draft Test` name, and no phone overflow. Browser Back returned to `/work` with the default All filter and normal browser scroll restoration; no broken route or stale mobile menu was observed.

On phone, I opened the mobile menu and selected each primary destination in sequence: `/work`, `/pricing`, `/process`, and `/services`. Each opening exposed the five mobile links and `aria-expanded=true`; after navigation the menu was removed, each route had one `main` and one H1, and `scrollWidth` equaled the viewport width. Opened visual evidence for the Services route: `auditor/evidence/auditor-20260901T1837Z-021-services-390.png`.

At exact `320x844` on the Aurora Spaces case study reached from Work, the route settled with one main/H1, zero overflow, and three semantic `role="img"` previews, each carrying a descriptive accessible name. The case-study boundary and `← All work` recovery link remained reachable.

At terminal scroll on the `320x844` Work route, the header remained `position: sticky`, `top: 0`, `z-index: 50`; opening the menu placed it immediately below the header (`top: 81px`) with no horizontal overflow. This reconfirms the accepted sticky/menu boundary while exercising the new navigation sweep.

## Runtime and method limits

Warm Browser warning/error logs were empty and both `npm exec -- eslint src` and `npm exec tsc -- --noEmit` exited `0` in the exact archive. The Browser locator `press("Tab")` action did not advance focus from body or a focused header link in this IAB API, so physical keyboard traversal remains unconfirmed; this is recorded as a tooling/method limitation, not a product finding. No storage, profile, or alternate-origin workaround was attempted.

## Disposition

No new defect assigned. Existing `CYV-IFA-005` metadata/indexing debt, `CYV-IFA-006` delivery proof gap, and `CYV-IFA-009` clean-origin/no-draft boundary remain open per prior routing. `CYV-IFA-010` and `CYV-IFA-011` remain closed.
