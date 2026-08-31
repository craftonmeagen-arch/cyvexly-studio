# Cyvexly Audit Coverage Map

Rounds `IFA-2026-08-30-R1`–`R3` used the isolated Auditor runtime on port `5273`, real in-app-browser navigation, and desktop/tablet/phone work. R4 reviewed Home media and service details. R5 rechecked launch metadata/indexing and generated assets. R6 audited the accepted `f0f1eac` archive while the Builder lock was active, using exact 320px and 1023/1024 breakpoint checks plus hydrated dynamic-404 metadata. R7 audited accepted Round-18 Pricing scope-system work at exact 320/390/768/1440 and 1023/1024 boundary states, including full-page visuals and interactions. `.codex` remained write-denied, so later rounds disclose exact temp runtimes.

| Surface / path | Method and viewports | Outcome |
| --- | --- | --- |
| `/` Home hero media | Real IAB DOM/playback; 1440×900 and 390×844 requested | One ready 30s muted/looping/inline video, named Play/Pause control, pause hold/play advance, exact containment; opened desktop/phone captures. |
| `/services` | IAB DOM/visual; prior Council R25 pathway review plus R4 route target reconciliation | Five combination pathways remain covered by Council; R4 checked all five detail targets and no new defect. |
| Five `/services/<slug>` details | Real IAB navigation/DOM; exact phone 375px and Business Websites desktop | All 200, distinct title/H1, one main/H1, required sections, matching Planner and case-study links, zero overflow; Business Websites desktop/phone captures opened. |
| Service unknown and bounded routes | Local HTTP + IAB | Unknown service, `/about`, `/privacy`, `/terms` return expected 404. |
| `/pricing`, `/process`, `/work`, case studies | Prior IAB/Council coverage | Existing renders, filters, responsive behavior, and truthful concept visuals remain covered. |
| `/start` Planner | Prior R3/Council coverage; R4 observed saved draft precedence without submit | UI/state/validation remains covered; server-side confirmation/email is still `CYV-IFA-006`. |
| `/contact`, `/faq`, `/accessibility`, custom 404 | Prior IAB coverage | Existing DOM/navigation/validation coverage retained. |
| Responsive geometry | R4 exact 1425px layout and 375px layout; prior 1440/1024/768 coverage | Home/service detail containment exact in sampled states. |
| Semantics/runtime health | Read-only DOM, semantic control activation, console warn/error query | One main/H1 on sampled routes; video control named/pressed; no warning/error entries. |
| Motion/reduced motion/keyboard | Source/prior reviewer evidence only | Physical Tab traversal and visible reduced-motion animation remain unconfirmed. |
| Build metadata/indexing | R4 lint/tsc; isolated build attempts; prior clean builds | Lint/tsc pass; isolated build blocked by junction root and outbound font fetch; `CYV-IFA-005` remains open. |
| Source hygiene | Current `git status --short src`, source inspection | Scratch favicon route absent; `CYV-IFA-007` provisionally closed pending next snapshot/build. |
| Public deployment | R4 attempted public URL; managed HTTPS blocked | No new public claim; prior Builder/Council public proof remains record. |
| Static metadata/indexing | R5 real IAB live meta + latest available `.next` artifact | Preview remains `noindex, nofollow`; static OG/Twitter URLs still fall back to localhost:3000, confirming `CYV-IFA-005`. |
| Generated assets/media delivery | R5 local HTTP and MP4 byte-range | OG/icon/favicon/MP4/poster return expected 200 MIME/bytes; MP4 range returns 206 with correct range headers. |
| Dynamic unknown service/work routes | R6 fresh IAB hydration + server HTTP comparison | HTTP 404 and custom recovery body pass, but hydrated titles become `Service`/`Project` instead of not-found; `CYV-IFA-008` open. |
| 320px narrow layout and 1023/1024 boundary | R6 accepted-commit IAB exact viewport | 17 routes one H1/main, exact containment; authored compact/desktop switch remains correct. |
| Round-18 Pricing scope system | R7 accepted `409ef80`; real IAB 320/390/768/1440, full-page visuals, menu/FAQ/CTA, SVG semantics | New scope signal, split hero, five cards, comparison/add-ons/care/payment/FAQ/CTA render as authored with exact containment and no new defect. |
| Pricing adjacent regression smoke | R7 real IAB 390px; `/`, `/services`, `/work`, `/process`, `/contact`, `/faq`, `/start` | All seven routes retain one H1/main and exact containment; terminal max-scroll sticky header/footer overlay noted as observation/watch. |
| Planner saved-draft hydration race | R8 accepted `409ef80`; real IAB 390px and 1440px; timing checkpoints, immediate typing, step recovery, opened captures | Initial Step 1 render changes to saved Step 3 after mount; immediate Step 1 input is discarded and prior draft values return. `CYV-IFA-009` open. |
| Successor dynamic 404 metadata and Planner restore gate | R9 accepted `a8fb8cf`; real IAB requested 390×844 (375px layout), local HTTP, valid-route regression, gate timing, visible-UI save/reload, opened captures | Unknown service/work routes return 404 and hydrate with custom not-found title/body; `CYV-IFA-008` verified closed. Planner gate removes the pre-hydration interactive target and saved-draft values restore; `CYV-IFA-009` mitigated, no-draft first use unconfirmed. |
