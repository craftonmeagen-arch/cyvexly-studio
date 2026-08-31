# IFA-2026-08-31-R6 — Accepted-layout and dynamic 404 metadata probe

## Identity and isolation

- Review: `IFA-2026-08-31-R6`; heartbeat minute zero `2026-08-31T20:13:22.550Z`.
- Builder lock was active (`.engine-lock`, session `builder-20260831T194253Z-r18`) with uncommitted Pricing source changes. Per Auditor rules, I did not inspect or run the mutable Builder tree. The reviewed source was a role-owned disposable archive of accepted commit `f0f1eacee667cf7f63be54b4cf3432f71056ab74` (39 `src/` files; prior fingerprint `4aa73afd7b0cfac313700c241c88df6ef56d71cfdd732e1fab01cee0a57f09b7`).
- Standard role guard remains unavailable because managed permissions deny `.codex` writes. Exact temp runtime: `C:\Users\Tcraf\AppData\Local\Temp\cyvexly-auditor-20260831T2013Z-006`, port `5273`; no Builder/Council resource was touched.

## Scope and method

This round used a fresh narrow-layout and dynamic-route metadata method: exact 320px and 1023/1024 breakpoint checks across the accepted page set, one opened 320px Home render, hydrated unknown-service 404 inspection, server HTTP status/title comparison, and source review of both dynamic route `generateMetadata` functions. The real Codex in-app Browser was used against the isolated runtime. The mutable Builder Pricing edits were explicitly excluded.

## Results

### Narrow-layout route sweep

At requested 320×900 (305px layout viewport after the scrollbar), Home, Services, all five service details, Work, all three case studies, Pricing, Process, Contact, FAQ, Accessibility, and Planner each rendered one H1 and one `main` with `scrollWidth=clientWidth=305`. Home's video was ready/playing at `255×143.44` and the named Pause control was present. The opened `auditor-20260831T2013Z-006-home-320.jpg` shows readable copy/actions followed by a contained reel with no horizontal clipping.

At the accepted breakpoint boundary, requested 1023px produced the compact menu and stacked `960px` copy/reel; requested 1024px produced the desktop nav and a `502.16px` reel beside the copy. Both were exactly contained (`scrollWidth=clientWidth` in their respective layout viewports). This confirms the authored breakpoint rather than a zoom accident for the accepted source.

### New finding: dynamic unknown routes hydrate with the wrong document title

`/services/not-a-real-service` and `/work/not-a-real-project` both returned HTTP `404` and server HTML title `Page not found — Cyvexly Studio`. After hydration in a fresh in-app Browser load, their body correctly showed the custom 404 (one H1, four recovery links, no overflow), but `document.title` became `Service — Cyvexly Studio` and `Project — Cyvexly Studio` respectively.

The source cause is direct and reproducible in the accepted commit: `src/app/services/[slug]/page.tsx` returns `{ title: "Service — Cyvexly Studio" }` from `generateMetadata` for an invalid slug, while `src/app/work/[slug]/page.tsx` returns `{ title: "Project — Cyvexly Studio" }`. Each page then calls `notFound()`. The custom 404 body is visually strong and recovery links work, but the hydrated title describes a service/project rather than a not-found state. This can mislead browser history/tab users and search/share metadata consumers of invalid links.

**Finding `CYV-IFA-008` — P2 / launch quality:** invalid dynamic service/work URLs must preserve a not-found title after hydration. Closure: return `notFound()`-appropriate metadata (or omit the dynamic fallback so the not-found metadata wins), then prove fresh-load `document.title === "Page not found — Cyvexly Studio"` for both unknown routes while retaining HTTP 404, custom 404 recovery links, and one H1/main.

Opened evidence: `auditor-20260831T2013Z-006-service-404.jpg` (320px custom 404 render; visually inspected).

## Other findings and limits

- `CYV-IFA-005` remains open: static optimized artifacts still use localhost:3000 OG/Twitter URLs until an Owner domain/`metadataBase` decision.
- `CYV-IFA-006` remains open: Planner still lacks server-side receipt and automatic confirmation email.
- `CYV-IFA-007` remains provisional: scratch route absent in the accepted/current source candidate, pending next immutable source/build confirmation.
- Public deployment, Builder's in-progress Pricing changes, physical keyboard, reduced-motion preference, cross-browser behavior, and field vitals were not claimed.
