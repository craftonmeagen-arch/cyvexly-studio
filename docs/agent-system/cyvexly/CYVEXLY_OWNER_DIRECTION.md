# Cyvexly Owner Direction

## Active direction 2026-08-30-01

**Status:** FULFILLED BY ENVIRONMENT SETUP  
**Source:** Owner via Codex side conversation  
**Recorded:** 2026-08-30 America/New_York

> “bring these files into this folder so that we can set up the environment for the agents to perform each role in this folder (website folder) so we can run these roles in this folder and on this project. once these files are in place then set up the evironments of each role according to the rules inside those files”

## Approval 2026-08-30-02

**Status:** ACTIVE AUTHORIZATION  
**Source:** Owner via Codex side conversation  
**Recorded:** 2026-08-30 America/New_York

> “yes but i looked over them and approve.”

Agent interpretation: The Owner approved coordinated project-scoped activation of the four supplied packets. This interpretation is not Owner-authored wording.

## Scheduler boundary 2026-08-30-03

**Status:** ACTIVE
**Source:** Owner via Codex side conversation  
**Recorded:** 2026-08-30 America/New_York

> “yes just set up teh environment not the schedulars”

Do not create, configure, enable, or modify recurring role schedulers or automations unless later authenticated Owner direction explicitly authorizes them and provides the needed cadence/metadata.

## Visual fidelity direction 2026-08-30-04

**Status:** PARTIALLY FULFILLED — ROUND 13 FINAL-CTA SYSTEM PASS; OWNER REVIEW PENDING
**Source:** Owner via Codex side conversation
**Recorded:** 2026-08-30 America/New_York

> “i've noticed the mockup and the actual are close but not. the glassy futuristic look is still not on par with the mockup. ptu that in owners direction.”

The current implementation is not yet accepted as visually on par with the mockup. Continue refining the product's glassy, futuristic visual treatment toward the mockup's standard while preserving usability, accessibility, responsiveness, and truthful product representation.

Round 9 upgraded the shared glass primitive, signal-grid atmosphere, sticky header, primary CTA, and hero orbit, with rendered desktop/mobile comparison against the accepted Home mockup. This is meaningful forward fidelity work, not a claim of Owner acceptance or final parity; keep the direction active until the Owner evaluates the result.

Round 10 changed method from another token-only adjustment to a reference-driven
component-structure pass. It shipped an inset rounded glass header shell, an
icon-led five-claim credibility rail, and icon-bearing capability cards, all
verified in opened 1440/768/390 production renders and a native keyboard/menu
check. The result closes three visible structural gaps against
`mockups/01-home.png`; it still does not claim Owner acceptance or final parity.

Round 11 replaces the remaining static hero orbit with the Owner-supplied
30-second systems showcase as a muted, looping, poster-backed glass media panel.
Opened 1440/768/390 production renders confirm the new motion increases the
hero's luminous technology/art-direction density while retaining the bright
page, message hierarchy, responsive containment, reduced-motion behavior, and
truthful claims. This is an implementation of the Owner's supplied media and
active fidelity direction, not a claim of final visual acceptance.

Round 12 closes two more visible structural gaps against `mockups/01-home.png`:
the formerly text-only partner statement now has an original luminous
wireframe system diagram, and the formerly text-only five-stage Home process
now has a connected desktop signal route with distinct stage icons plus
contained tablet/phone cards. Opened exact 1440/768/390 production renders and
a 24px-root phone stress state remain width-contained. The work advances the
active direction without copying the reference literally or claiming final
Owner acceptance.

Round 13 closes the next reachable reference-visible gap: the former flat,
centered final CTA is now a compact split glass composition with an original
luminous planetary/network horizon, brighter protected copy, and a responsive
centered phone adaptation. Exact 1440/768/390 and full-Home renders plus 320px
and 24px-root stress checks are contained. This is forward fidelity work, not a
claim of final Owner acceptance; portfolio imagery remains bounded by truthful
asset provenance.

## Cross-device view consistency direction 2026-08-30-05

**Status:** IMPLEMENTED — OWNER DEVICE CONFIRMATION PENDING
**Source:** Owner via Codex side conversation
**Recorded:** 2026-08-30 America/New_York

> “is there some issue with different views? i logged into the website on one view and it looked normal. i logged into another computer (there was no zoom) and it looked like it is a zoomed in view. put this in owners direction to fix as well.”

Investigate and fix the observed cross-computer scale inconsistency. The site must remain visually proportionate and intentional across supported desktop and laptop environments when browser zoom is 100%, rather than appearing unexpectedly zoomed in on one machine. Verify the same routes across representative effective viewport sizes, device-pixel ratios, and operating-system display-scaling settings; treat those factors as hypotheses to test rather than an assumed cause. Preserve responsive behavior and accessibility, including legitimate user zoom.

Owner-provided visual evidence: `Screenshot 2026-08-30 200831.png` and `Screenshot 2026-08-30 200855.png`.

Round 9 reproduced a concrete 100%-page-zoom cause: the design system inherited a browser profile's non-default 24px base font size through rem-based tokens and responsive breakpoints, enlarging the entire interface and changing its desktop/mobile mode. Commit `8ec27c1` pins the author design root at 16px and defines responsive breakpoints in CSS pixels. In controlled Chrome and Edge profiles, the normal-default and 24px-default profiles now produce matching geometry and responsive states across desktop, high-DPR laptop, and phone viewports. A separate minimum-font-24 audit found and commit `2d82b0b` fixed two phone overflow cases. The actual second computer still needs Owner confirmation because its browser/OS configuration was not directly inspected.

## Live Home video direction 2026-08-31-06

**Status:** FULFILLED — ROUND 15 PUBLIC DEPLOYMENT PROOF
**Source:** Owner via Codex active conversation
**Recorded:** 2026-08-31 America/New_York

> “it still didn't show up on the website... the video”

Round 15 traced the discrepancy to source/deployment identity rather than the
video component: GitHub/Render were still serving repository default branch
`main` at pre-video commit `c13ae7a`, while the accepted Builder history had
been pushed only to `master` at `57480e3`. Because `main` had zero independent
commits and was a strict ancestor, the Builder fast-forwarded it without force,
then renamed the local branch to track `origin/main` so ordinary future pushes
reach the deployment branch. The public Render site changed within about 51
seconds and now visibly serves the 30-second showcase at desktop and phone
widths. Public MIME/range delivery, real playback, Pause/Play, loop boundary,
reduced-motion/data-saver holds, explicit recovery, responsive containment,
route smoke, console, lint, build, and TypeScript all pass. Durable proof is
indexed in `builder/evidence/INDEX.md`. No scheduler or automation was touched.

## Home hero video scale and placement direction 2026-08-31-07

**Status:** ACTIVE — OWNER VISUAL DIRECTION FOR A FUTURE BUILDER PASS
**Source:** Owner via Codex side conversation
**Recorded:** 2026-08-31 America/New_York

> “I like your version better and the size . add the mockup and your ur description. the video in the actual looks like a thumbnail and not like what you have. add all this to owners direction”

The live Home video currently reads too much like a thumbnail. Replace that
small-media impression with the larger, integrated hero-reel treatment shown
in the Owner reference below. This direction concerns the video composition,
scale, hierarchy, and surrounding glass treatment; it does not authorize
copying image-generation text artifacts, invented interfaces, brands, claims,
scores, or metrics into production.

![Owner reference for the larger integrated Home hero video](../../../mockups/05-home-hero-video-owner-direction.png)

Durable visual reference:
`mockups/05-home-hero-video-owner-direction.png`.

Implementation direction:

- Place the video in the Home hero's primary visual/media position beside the
  headline and actions, rather than in a separate strip above the navigation or
  as a small card that resembles a thumbnail.
- On desktop, give the video approximately 46–50% of the hero width in a
  substantial 16:9 smoke-glass player. Its height and presence should visually
  balance the full message-and-actions column.
- Preserve the headline, supporting message, and unmistakable primary CTA in
  the left column. The video must demonstrate capability without competing
  with or covering that first-minute information.
- Integrate the player into the arctic cyber-blue hero atmosphere with a crisp
  frosted edge, restrained depth, and spectral glow. It should feel like a
  premium Cyvexly studio reel, not a banner advertisement or generic embedded
  player.
- Retain an intentional poster frame plus a clear Pause/Play control. If the
  reel autoplays, it must be muted, inline, and looping; never autoplay audible
  media.
- For reduced-motion or playback failure, hold the designed poster frame while
  keeping the page message and actions complete without motion. If spoken or
  meaning-carrying audio is later introduced, provide captions and a transcript.
- On mobile, stack the video at full available content width immediately below
  the hero actions and above the credibility strip. It should remain prominent
  while avoiding horizontal overflow or excessive first-screen displacement.
- Keep the credibility strip directly after the hero and let Selected Work
  remain the next major proof section.

The reference was created from the written Cyvexly vision rather than from the
current website or earlier mockups. Its intended hierarchy is: compact glass
navigation; outcome-led copy and CTAs on the left; a large playable studio reel
on the right; then credibility and Selected Work. Small generated lettering in
the image is non-authoritative; canonical product copy and truthful content
requirements continue to govern implementation.
