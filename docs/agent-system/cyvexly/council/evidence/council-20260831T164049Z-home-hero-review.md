# Council Round 24 — Home hero reel review

- Review: `CYC-R24-20260831-01`
- Scheduler minute zero: `2026-08-31T16:40:49.578Z`
- Role round: `council-20260831T164049Z`
- Reviewed source snapshot: `dbcbc0bd3169000cd58331f2eff79fbc17d4ed5c`
- Start dirty fingerprint: `1F6CAB78985627766DD848016BACB8915B683CA353314E085A5386A2F50AD67E`
- Owner reference: `mockups/05-home-hero-video-owner-direction.png` (SHA-256 `854c011d40a8662a9d95f82ae841b8db77661203969d3feea8e677099bec0083`)

## Question and method

R24 reviewed the new Home hero reel slice from Builder commit `14e12d4`, using the Council-isolated production runtime on port `5373` and the public Render route. The intended question was whether the Owner's “thumbnail to primary reel” direction is now visibly met without sacrificing truthful media behavior, readable copy, responsive containment, or route health.

The isolated runtime passed `pnpm install --offline`, lint, optimized build, and immediate TypeScript check. The in-app Browser literally viewed full-page captures at 1440×900, 1024×900, 768×1024, and 390×844; the public route was viewed at 1440×900 and 390×844. The Owner mockup and all retained captures were visually inspected. Native video interaction, mobile menu state, route smoke, asset delivery, and browser diagnostics were also checked.

## Findings

### Pass — primary hero hierarchy and fidelity direction

At the 1440 viewport the isolated render measured a 594.44px copy pane and 726.56px reel shell, with the reel occupying the primary right-hand visual position. The copy is protected by a quiet translucent blue-white pane, while the reel has a light ice-blue bezel, cyan edge/glow, visible progress line, and restrained atmospheric panes. The result closes the previously recorded 528px thumbnail impression while preserving canonical H1, body copy, and CTAs. The literal capture is `council-20260831T164049Z-home-desktop.png`; the public equivalent is `...-public-home-desktop.png`.

### Pass — responsive composition and containment

At 1024px the asymmetric desktop layout remains coherent at the breakpoint. At 768px the copy precedes a 705px full-width reel, and at 390px the content width is 343px with the reel directly below the actions. In both tablet and phone checks, `scrollWidth === clientWidth` (753 and 375 respectively), with one H1 and no horizontal overflow. The phone capture keeps the first-screen sequence usable; the mobile menu opens to a named Close menu state and closes cleanly. Captures: `...-home-desktop-1024.png`, `...-home-tablet.png`, `...-home-phone.png`, `...-public-home-phone.png`.

Additional boundary stress at 1023px stacked the copy and reel at 960px each with no overflow (`scrollWidth === clientWidth` at 1008px); a 320px viewport stayed contained at 273px content width with a 273px reel. These captures are `...-home-edge1023.png` and `...-home-narrow320.png`.

### Pass — truthful media lifecycle and control

Local and public renders each exposed one 30-second MP4 video with `readyState=4`, `muted=true`, `loop=true`, and inline playback. Local playback advanced (`currentTime=1.596`, progress style `width: 5.15198%`); the named control paused and resumed the video with the expected `Play showcase video` / `Pause showcase video` labels. The public asset returned `200 video/mp4`, `3,978,486` bytes, and `Accept-Ranges: bytes`. No browser diagnostics were recorded in either tab.

## Disposition

No release-blocking defect was found in the reviewed Home hero slice. The implementation is materially aligned with the Owner's scale, hierarchy, light-blue glass, and responsive direction, without copying non-authoritative generated mockup text or screens. Owner acceptance is still a product decision, not inferred from this review. OS-level reduced-motion, Safari/Firefox, physical second-device, field-vitals, and delivery/legal proof remain outside this round's capability and stay open in the Council handoff.

## Evidence custody

Retained artifacts are the review note, metrics JSON, and the literally viewed local/public captures listed in `council/evidence/INDEX.md`. Runtime, browser tabs, and registered processes are closed during round closeout; no role-owned duplicate source is retained.
