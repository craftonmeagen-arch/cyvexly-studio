# Cyvexly Auditor Summary

## IFA-2026-09-01-R17 — 2026-09-01

- Re-identified current HEAD `a7e07ca` as a docs-only successor of product source `1437f5b`; `src/` tree `50dc64c9...` has 41 files and no diff. An active Builder lock with mutable Home/Services/CSS changes was preserved; cleanup status also showed `src/lib/site-config.ts`; only an exact accepted-HEAD archive was reviewed.
- Used the real in-app Browser at a temporary 390×844 phone viewport to stress Contact blank-submit validation, FAQ expansion/collapse, Contact → Planner → Back recovery, containment, atmosphere semantics, and diagnostics. Contact produced the intended accessible errors, FAQ and handoff passed, and no external submit occurred.
- Found `CYV-IFA-011` (P1): 12px `--color-warning-coral` field errors measure `4.1139:1` against the frosted input background, below WCAG AA `4.5:1` normal-text contrast. Shared Planner error components use the same token.
- Published R17 report/evidence and exact metrics; after publication, the phone viewport/tab, Auditor process chain, port-5273 temp runtime, and other exact role-owned resources were cleaned while `.engine-lock` and scheduler automation remained untouched.

## IFA-2026-09-01-R14 — 2026-09-01

- Re-identified current HEAD `a7e07ca` as a docs-only successor of product source `1437f5b`; `src/` tree `50dc64c9...` has 41 files and no diff from the product commit.
- Used the real in-app Browser against an exact port-5273 accepted-HEAD runtime at desktop and phone widths. Route shells, invalid-service 404, shared atmosphere semantics, phone menu, and no-overflow checks passed; Browser warnings/errors were empty; ESLint and TypeScript passed.
- Found and reproduced `CYV-IFA-010` (P1): the new unlayered `.site-root > :not(.site-atmosphere)` selector overrides `SiteHeader`'s `sticky top-0 z-50` with computed `position: relative; z-index: 1`. The header scrolled out of view after 592px desktop / 618px phone scrolls.
- Published focused header-cascade evidence and captures, then reset the viewport, closed the tab, stopped the exact Auditor process chain, removed the exact temp runtime, verified port 5273 clear, and preserved `.engine-lock`/scheduler automation.

## IFA-2026-09-01-R13 — 2026-09-01

- Re-identified accepted HEAD `445c876` (docs-only successor of R12) with unchanged `src/` fingerprint `db2aadb...`; no Builder lock or product source edits.
- Used the real in-app Browser against an exact port-5273 accepted-commit runtime for a new site-wide blue-glass/contrast baseline, all public route shells, metadata, and dynamic not-found boundary; R11 Home video and R12 Planner restore passes were not repeated.
- Home, Services, Pricing, Process, Accessibility, Work, Contact, FAQ, Planner, valid detail/case-study, and intentional 404 shells each showed one main/H1 with exact `1265/1265` containment. Invalid service 404 remained custom and hydrated correctly.
- Representative captures show pale-blue radial atmosphere and translucent blurred glass across Home/Services/Pricing. Fixed-token contrast screening exceeded AA, but composited-pixel proof and Owner acceptance remain unconfirmed.
- Preview metadata remains `noindex,nofollow`, lacks canonical, and points OG/Twitter images to localhost; `CYV-IFA-005` stays open. Exact R13 runtime, Browser tab, viewport, process chain, and port were cleaned after publication.

## IFA-2026-09-01-R12 — 2026-09-01

- Re-identified accepted HEAD `8e7ad52` and unchanged `src/` fingerprint `db2aadb...`; no Builder lock or source edits.
- Used the real in-app Browser against an exact port-5273 accepted-commit runtime to audit the Planner restore-ready gate and service-entry precedence, avoiding a repeat of R11 Home chrome work.
- Observed the accessible “Preparing your Planner” status, settled saved-draft notice/Step 1 state, and preserved draft on `/start?service=landing-pages`; exact local document width containment and empty browser warn/error logs.
- Public Render and alternate `127.0.0.1` origins were rejected by saved Browser permissions; no workaround or storage inspection/clearing. `CYV-IFA-009` remains partially mitigated pending true clean no-draft proof. Full-page Planner capture was opened.
- Exact R12 runtime, browser tabs, viewport, process chain, and port were cleaned after publication; scheduler automation remains active.

## IFA-2026-09-01-R11 — 2026-09-01

- Audited accepted HEAD `8e7ad52` (40 `src/` files; fingerprint `db2aadb...`) after the Owner-directed Home showcase cleanup. The source diff was limited to `hero-showcase-video.tsx`, removing visible muted/time/progress/button chrome and setting `0.75×` playback with a named click/keyboard surface.
- Real in-app Browser proof at exact 320/390/768/1024/1440 states showed muted inline looping media, stable pause/resume, Enter/Space activation, exact containment, empty diagnostics, and opened phone/tablet/desktop captures without residual chrome. No new defect was established.
- ESLint and TypeScript passed. Turbopack build was blocked by the isolated junction and webpack by sandbox-denied Google Fonts fetches; no new optimized/public claim was made. Existing `CYV-IFA-005`, `CYV-IFA-006`, mitigated `CYV-IFA-009`, and provisional `CYV-IFA-007` remain; `CYV-IFA-008` remains closed. Exact runtime/browser cleanup completed.

## IFA-2026-08-31-R10 — 2026-08-31

- Audited accepted HEAD `05a2403` (40 `src/` files; fingerprint `98dad5e...`) in an exact isolated archive while the Builder lock held mutable Home video-cleanup work. Repository HEAD later advanced through `d6cd17c` to `8e7ad52`; those successors were not audited.
- Fresh real in-app Browser checks covered Home showcase playback/control stress and 320/390/768/1024/1440 containment, Services five combination pathways plus detail/back recovery, mobile menu, four-question FAQ, and Process five-stage responsive/accessibility/CTA behavior. Opened captures showed no new defect; browser diagnostics, ESLint, and TypeScript passed.
- `CYV-IFA-005`, `CYV-IFA-006`, and provisional `CYV-IFA-007` remain bounded debt; `CYV-IFA-009` remains mitigated pending no-draft first use; `CYV-IFA-008` remains verified closed. Standard guard remained write-denied; exact runtime/server/browser were cleaned and scheduler automation remains active.

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
