# Cyvexly Auditor Summary

## IFA-2026-08-31-R9 — 2026-08-31

- Audited accepted Round-19 successor `a8fb8cf` (40 `src/` files; fingerprint `98dad5e...`) in an exact isolated archive on port `5273`; no Builder lock was present at start and no product/other-role resource was touched.
- Re-proved unknown service/work routes with local HTTP and real in-app Browser: both return 404 and hydrate to the custom `Page not found — Cyvexly Studio` title/body with exact 375px mobile containment; `CYV-IFA-008` is verified closed.
- Re-proved the Planner restore gate at 390×844: no form/full-name control exists through initial/100ms/500ms, settled Step 1 by 1700ms, and visible-UI draft values restored after reload. `CYV-IFA-009` is mitigated but no-draft first use remains unconfirmed because storage clearing and alternate origins were unavailable.
- Browser diagnostics, ESLint, and TypeScript passed. Standard guard remained write-denied; report/evidence manually routed. Exact runtime/server cleaned; scheduler automation remains active.

## IFA-2026-08-31-R8 — 2026-08-31

- Audited the accepted `409ef80` snapshot while Builder lock `builder-20260831T213918Z-r19` held mutable dynamic-route edits; those edits were excluded and no product source or other-role resource was touched.
- Chose a fresh Planner lifecycle/state method at 390px and 1440px: a saved draft restores after the initial Step 1 render. The real in-app Browser showed Step 1 for the first ~0.2–0.5s, then Step 3 after hydration; immediate synthetic typing into Step 1 was discarded and prior saved values reappeared when returning to Step 1.
- Found `CYV-IFA-009` (P2): mount-time `localStorage` restore can overwrite immediate Planner input and visibly jump steps. Closure requires restore-ready gating or edit preservation, plus no-draft/saved-draft/immediate-input proof. Opened before/after phone captures and empty browser diagnostics are recorded.
- `CYV-IFA-005`, `CYV-IFA-006`, and `CYV-IFA-008` remain open; `CYV-IFA-007` remains provisional. Standard guard remained unavailable; exact accepted archive was cleaned after manual report routing.

## IFA-2026-08-31-R7 — 2026-08-31

## IFA-2026-08-31-R7 — 2026-08-31

- Audited newly accepted Round-18 Pricing scope-system commit `409ef80` in an exact isolated archive after the Builder lock had cleared; no product source or other role resource was touched.
- Real in-app Browser proof at 320/390/768/1440 and the 1023/1024 boundary found exact containment, one H1/main, five package cards, and a readable original scope signal. Mobile menu, FAQ expansion, Planner CTA, SVG semantics, local HTTP, and a seven-route 390px smoke passed with empty warning/error logs.
- Opened full and focused desktop/mobile captures. No new Pricing defect established. Terminal mobile max-scroll shows the sticky header overlaying the first footer branding paragraph; it is recoverable by scrolling slightly upward and is recorded as an observation/watch item.
- `CYV-IFA-005`, `CYV-IFA-006`, and `CYV-IFA-008` remain open; `CYV-IFA-007` remains provisional. Standard guard and direct isolated lint were unavailable/stalled under managed permissions and junction constraints; Builder's accepted build proof remains bounded evidence.

## IFA-2026-08-31-R6 — 2026-08-31

## IFA-2026-08-31-R6 — 2026-08-31

- Audited the accepted `f0f1eac` source archive while the Builder lock was active; mutable Pricing edits were excluded and no Builder/Council resources were touched.
- At exact requested 320px, Home, Services, all five service details, Work/case studies, Pricing, Process, Contact, FAQ, Accessibility, and Planner each rendered one H1/main with exact containment. The 1023/1024 breakpoint switched compact/desktop modes as authored; Home video remained ready and contained.
- Found `CYV-IFA-008` (P2): unknown dynamic service/work paths return HTTP 404 and the correct custom 404 body, but hydrated `document.title` becomes `Service — Cyvexly Studio` / `Project — Cyvexly Studio` instead of `Page not found — Cyvexly Studio`. Source cause is the invalid-slug `generateMetadata` fallback in both dynamic route files.
- `CYV-IFA-005` and `CYV-IFA-006` remain open; `CYV-IFA-007` remains provisionally closed. No other defect established.
- Standard guard remained unavailable under managed permissions; exact accepted-commit temp runtime used and cleaned. Evidence and report manually routed.

## IFA-2026-08-31-R5 — 2026-08-31

- Performed a new launch-readiness slice on the same source (`f0f1eac`) using real in-app Browser plus local HTTP/static artifact inspection, rather than repeating the prior media/services route pass.
- Confirmed preview `robots: noindex, nofollow`; generated OG/icon/favicon/media assets returned expected 200 types and byte counts; MP4 range returned 206 with correct `Content-Range`; OG image was opened and visually inspected.
- Confirmed latest available static HTML emits localhost:3000 OG/Twitter URLs and current source still omits `metadataBase`; `CYV-IFA-005` remains open. `CYV-IFA-006` remains open; `CYV-IFA-007` scratch route remains absent provisionally.
- Browser warning/error query empty. Fresh optimized build was not conclusive because the isolated dependency junction is outside Turbopack's root and Webpack font fetches hit sandbox HTTPS EACCES. No new product defect established.
- Standard guard remains unavailable under managed permissions; exact temp runtime was used and will be cleaned before close.

## IFA-2026-08-31-R4 — 2026-08-31

- Independently reviewed the Round-16/17 Home media and service-detail source on `f0f1eac` with a fresh real in-app Browser pass in an isolated port-5273 temp runtime.
- Home video: one ready 30s source/poster, muted/looping/inline, named Play/Pause control, Pause hold and Play `1.2636s` advance, exact desktop/phone containment, opened renders, empty warn/error query.
- Five service-detail routes: all local HTTP 200, distinct titles/H1s, one main/one H1, required sections, matching `/start?service=` links, concept case-study links, exact 375px containment. Unknown service and three intentional Owner routes returned 404.
- `CYV-IFA-005` and `CYV-IFA-006` remain open; `CYV-IFA-007` scratch route is absent in the current candidate (provisional close). No new product defect was established.
- Lint and TypeScript passed. Isolated optimized build was not conclusive: Turbopack rejected the out-of-root junction, and Webpack was blocked by sandbox HTTPS EACCES during Google Font fetches.
- Standard role guard/publisher could not write `.codex` under managed permissions; deviation and exact cleanup target are recorded in the current report and evidence. No source or tests were edited.

## Prior rounds

- R3: Planner, route, concept-visual, metadata, email, and scratch findings.
- R2: route/interaction/metadata narrowing.
- R1: initial route and visual baseline.
