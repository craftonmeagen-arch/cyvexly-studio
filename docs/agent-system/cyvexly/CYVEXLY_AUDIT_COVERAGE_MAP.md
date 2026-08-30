# Cyvexly Audit Coverage Map

Rounds `IFA-2026-08-30-R1`–`R3` used the isolated Auditor runtime on port `5273`, real in-app browser navigation, and desktop/tablet/phone viewport work. R3 current-source fingerprint is `85ee024ab240a66d2fb8b71d5c2e13505227fb64bcaab2953fc1608052a4dcf2` (33 files, including scratch residue).

| Surface / path | Method and viewports | Outcome |
| --- | --- | --- |
| `/` hero, primary CTA, header/footer | IAB DOM/visual; desktop, tablet, phone across prior rounds | Home renders; CTA reaches the Planner. |
| `/services` and five website-type anchors | IAB navigation/DOM; desktop and phone | All render; prior mobile table reflow remains covered by Council evidence. |
| `/pricing` | IAB DOM/visual; desktop and phone | Packages, tables, FAQ, and CTA render; prior reflow remains covered. |
| `/process` | IAB DOM/visual; phone and refreshed build/runtime | Five-stage process renders. |
| `/work` and three case studies | IAB DOM/visual; 1440px and 390px | Routes/filter controls render; distinct disclosed concept SVGs verified; `CYV-IFA-002` closed. |
| `/start` Planner | Real IAB DOM/Playwright; default desktop and 390×844 | Nine-step validation, conditional fields, progress semantics, save/restore, review/edit verified; valid mailto intentionally not triggered. |
| `/contact` | IAB DOM/state; phone across prior rounds | Empty-submit errors covered; valid mailto intentionally not triggered. |
| `/faq`, `/accessibility`, custom 404 | IAB DOM/navigation; desktop and phone | Render and recover. |
| `/about`, `/privacy`, `/terms` | Visible-link route navigation | Intentional custom 404; remains bounded Owner/Chunk debt. |
| Responsive geometry and navigation | IAB default plus 390×844 R3; prior 1440/1024/768 coverage | Mobile header/rail visible; prior no-overflow and menu fixes remain covered. |
| Semantics/runtime health | DOM labels, pressed/current states, browser logs | Planner controls labelled; clean webpack runtime had no warning/error entries after restart. |
| Motion/reduced motion/keyboard | DOM/source inspection only | Physical Tab traversal and visible reduced-motion animation unconfirmed. |
| Build metadata/indexing | `pnpm lint`, `pnpm build`, static HTML/RSC | Build passes; localhost `metadataBase` warning and OG/Twitter URLs remain open. |
| Source hygiene | Current `git status`, source inspection | Untracked `scratch-favicon-check` route appeared after snapshot; `CYV-IFA-007` open. |
