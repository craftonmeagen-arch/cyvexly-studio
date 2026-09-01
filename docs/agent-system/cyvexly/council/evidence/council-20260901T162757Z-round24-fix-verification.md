# Council evidence — R39 Round 24 fix verification

- Review ID: CYC-R39-20260901-01
- Scheduler minute zero: 2026-09-01T16:27:57.175Z
- Round: `20260901T162757Z-heartbeat`; isolated runtime port 5373
- Source head: `06fbadd6448b4e8e8c77d1618b1c4e6cb14238f2`; dirty fingerprint `4EDDB01E548F1D926F193B15C3CBBA135C47BBDC652E6191FE0F66AE653252D1`.

## Question and method

This round rechecked the accepted Round 24 source after the Builder's contrast (`2227961`) and Contact first-invalid-focus (`06fbadd`) fixes, while independently inspecting the sitewide glass rollout (`5656584`). Real in-app Browser states covered Contact and Planner blank validation at 390px, Home/Services/Work/Pricing/Process/FAQ/Accessibility and detail routes at 390px/768px/1440px, mobile menu, Work empty filter, sticky header, media, and direct route HTTP status. Approved `mockups/06-sitewide-blue-glass-owner-direction.png` was viewed alongside rendered Home captures. No valid form or mailto side effect was triggered.

## Evidence

- Contact blank submit: first invalid control is focused as `name`; four field errors are present and linked with `aria-invalid`/`aria-describedby`. Error color is `rgb(189, 45, 73)` at 12px over `rgb(248, 251, 255)`; measured contrast `5.565983806114899:1` (pass against 4.5:1 AA).
- Planner blank Step 1 at 390px: first invalid control is focused as `fullName`; three errors link to their controls; same error color measured `5.565983806114899:1`; no overflow.
- Home screenshots at phone/tablet/desktop show the approved pale-blue architectural glass environment, dark focal reel, coherent hierarchy, and protected copy. Home and Services full-width continuation sections compute nontransparent shared `glass-continuation`/`glass-section` surfaces.
- Header remains `position: sticky; top: 0; z-index: 50`; mobile menu `aria-expanded` toggles true with expected destinations; scrolled top hit remains inside `HEADER`.
- 390/768/1440 route checks for major pages retained one `main`, one `h1`, and no horizontal overflow. Work filters preserve pressed state and truthful “No projects match that filter yet.” empty copy for Landing Page. FAQ expands/collapses correctly. Home media remains muted, looping, `0.75×`, ready and playing.
- HTTP routes: implemented pages and assets return 200; `/about`, `/privacy`, `/terms`, and `/sitemap.xml` remain 404 bounded Owner/domain/legal debt; `/robots.txt` returns 200. Metadata still uses preview `noindex,nofollow` and localhost OG fallback until Owner domain decision.
- Browser warning/error logs were empty. Build and TypeScript/static generation passed; known generated CSS optimizer warning and `metadataBase` warning remain nonblocking.

## Disposition

R38's contrast finding is independently closed in current source. Sticky/glass continuity is independently verified closed. Carry forward only Owner-blocked metadata/domain/indexability, Privacy/Terms, sitemap, and server-confirmation decisions. Next proof should hold this visual/accessibility contract while an Owner-approved launch decision is made.
