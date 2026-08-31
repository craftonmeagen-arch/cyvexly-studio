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

**Status:** PARTIALLY FULFILLED — ROUND 10 STRUCTURAL GLASS PASS; OWNER REVIEW PENDING
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

## Cross-device view consistency direction 2026-08-30-05

**Status:** IMPLEMENTED — OWNER DEVICE CONFIRMATION PENDING
**Source:** Owner via Codex side conversation
**Recorded:** 2026-08-30 America/New_York

> “is there some issue with different views? i logged into the website on one view and it looked normal. i logged into another computer (there was no zoom) and it looked like it is a zoomed in view. put this in owners direction to fix as well.”

Investigate and fix the observed cross-computer scale inconsistency. The site must remain visually proportionate and intentional across supported desktop and laptop environments when browser zoom is 100%, rather than appearing unexpectedly zoomed in on one machine. Verify the same routes across representative effective viewport sizes, device-pixel ratios, and operating-system display-scaling settings; treat those factors as hypotheses to test rather than an assumed cause. Preserve responsive behavior and accessibility, including legitimate user zoom.

Owner-provided visual evidence: `Screenshot 2026-08-30 200831.png` and `Screenshot 2026-08-30 200855.png`.

Round 9 reproduced a concrete 100%-page-zoom cause: the design system inherited a browser profile's non-default 24px base font size through rem-based tokens and responsive breakpoints, enlarging the entire interface and changing its desktop/mobile mode. Commit `8ec27c1` pins the author design root at 16px and defines responsive breakpoints in CSS pixels. In controlled Chrome and Edge profiles, the normal-default and 24px-default profiles now produce matching geometry and responsive states across desktop, high-DPR laptop, and phone viewports. A separate minimum-font-24 audit found and commit `2d82b0b` fixed two phone overflow cases. The actual second computer still needs Owner confirmation because its browser/OS configuration was not directly inspected.
