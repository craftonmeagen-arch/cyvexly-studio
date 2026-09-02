# Cyvexly Owner Direction

Fulfilled setup/approval direction `2026-08-30-01`/`02` and superseded visual
history `2026-08-30-04`/`05` are preserved in
`docs/archive/CYVEXLY_OWNER_DIRECTION_ARCHIVE.md`. The active scheduler boundary
remains here deliberately.

## Scheduler boundary 2026-08-30-03

**Status:** ACTIVE
**Source:** Owner via Codex side conversation  
**Recorded:** 2026-08-30 America/New_York

> “yes just set up teh environment not the schedulars”

Do not create, configure, enable, or modify recurring role schedulers or automations unless later authenticated Owner direction explicitly authorizes them and provides the needed cadence/metadata.

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

**Status:** IMPLEMENTED — ROUND 16 PUBLIC DEPLOYMENT/OWNER REVIEW PENDING
**Source:** Owner via Codex side conversation
**Recorded:** 2026-08-31 America/New_York

> “I like your version better and the size . add the mockup and your ur description. the video in the actual looks like a thumbnail and not like what you have. add all this to owners direction”

Follow-up material and contrast direction from the Owner:

> “also there is a translucent background of some kind that you have. we need something like that to give a futuristic glassy blue look.”

> “yes but it looks like that messes with the contrast a bit. so maybe lighter? grayish?”

> “ok sorry maybe just ligher blue than the first”

> “yeah that works. ok add that as the mockup and remove the other one you have in place. explain in words my wishes in owners direction”

The live Home video currently reads too much like a thumbnail. Replace that
small-media impression with the larger, integrated hero-reel treatment shown
in the Owner reference below. This direction concerns the video composition,
scale, hierarchy, and surrounding glass treatment; it does not authorize
copying image-generation text artifacts, invented interfaces, brands, claims,
scores, or metrics into production.

![Owner reference for the larger integrated Home hero video](../../../mockups/05-home-hero-video-owner-direction.png)

Durable visual reference:
`mockups/05-home-hero-video-owner-direction.png`.

This file now contains the Owner-approved lighter-blue version. It replaces the
earlier reference at the same path; the earlier, more neutral mockup is not an
alternative direction and must not be treated as co-equal guidance.

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
- Give the Home hero a clearly visible translucent futuristic-glass background,
  not merely a flat blue gradient. Use overlapping frosted panes, believable
  backdrop blur and refraction, soft depth, thin illuminated edges, fine grids,
  and restrained signal traces so the page feels dimensional and technologically
  advanced.
- The accepted background color is light ice blue: visibly bluer than neutral
  pearl gray, but appreciably lighter and less saturated than the first blue
  exploration. Do not wash the full copy area in saturated royal blue or cyan,
  and do not reduce the result to an almost colorless gray treatment.
- Protect reading contrast with a quiet translucent blue-white glass field
  behind the headline, supporting copy, and actions. Background lines and
  refractions beneath that field should be faint and softly blurred; headline
  text remains near-black midnight slate and body text remains dark graphite.
- Concentrate the strongest cyber blue in the primary CTA, thin glass edges,
  small signal accents, and the video rim/glow. Navigation and the credibility
  rail may reveal the pale-blue atmosphere through frosted glass, but their text
  and controls must remain immediately readable.
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

Round 16 implements this direction in product commit `14e12d4`: the Home-only
stage expands to approximately 1440px, the desktop reel grows from 528px to
726.56px in the measured 1440 viewport, the copy receives its own quiet
translucent field, and the player receives a light-ice-blue glass bezel plus
real playback progress. Exact desktop/tablet/phone renders, breakpoint
geometry, playback/loop/Pause/Play, reduced-motion, semantics, containment,
console, route, lint, build, and TypeScript proof are indexed in
`builder/evidence/INDEX.md`. The accepted real video remains unchanged; no
invented mockup screens or generated claims were copied. The implementation is
awaiting Owner review on the public site.

## Home showcase playback-chrome direction 2026-08-31-08

**Status:** FULFILLED — ROUND 20 PUBLIC DEPLOYMENT PROOF
**Source:** Owner via Codex active conversation
**Recorded:** 2026-08-31 America/New_York

> “the video has shows muted video in the top right corner. and there is a play bar that keeps going. and the paly and stop button needs to be removed it can be slower too.”

This newer direction supersedes the Round 16 requirement for a visible
Pause/Play control and progress treatment on the current Home showcase. Remove
the top-right muted/duration pill, advancing progress line, and circular
playback control. Retain the clean media bezel, studio identifier, capability
caption, muted inline loop, poster, and reduced-motion/data-saving holds. Slow
the authored playback rate to `0.75×` (a 30-second source cycle takes about 40
seconds). The complete reel surface remains a named click/keyboard pause target
so the playback chrome disappears without discarding the site's motion and
keyboard accessibility commitments.

## Site-wide blue-glass atmosphere and contrast direction 2026-08-31-09

**Status:** PARTIALLY FULFILLED — ROUNDS 21–22 FOUNDATION; NEW FULL-HEIGHT EVERY-ROUTE PASS REQUIRED
**Source:** Owner via Codex active conversation
**Recorded:** 2026-08-31 America/New_York

> “the actual and the last mockup don't match there needs to b that bluish glass background that is int he mockup. on every page. if you want translucent wires and numbers like futuristic tech as well. give me a mockup first so I know we are on the same page”

After reviewing the new mockup, the Owner approved it with this additional
requirement:

> “yes just like that but make sure the words don't lose contrast or there are no contrast issues. make this owners direction and explain clearly the goal.”

### Goal

Bring the entire production website—not only the Home hero or its video—into
the visual world shown in the approved reference below. Every public page
should feel like part of one pale ice-blue, translucent-glass environment. The
effect must be visibly dimensional and futuristic while all words, controls,
forms, and essential information remain immediately legible. Visual atmosphere
never outranks contrast or usability.

![Owner-approved site-wide blue-glass direction](../../../mockups/06-sitewide-blue-glass-owner-direction.png)

Durable visual reference:
`mockups/06-sitewide-blue-glass-owner-direction.png`.

### Authoritative visual direction

- Treat the page background itself as part of the glass system. It should be a
  clearly blue-tinted, luminous environment with layered translucent planes,
  restrained refraction and blur, thin illuminated edges, soft spectral
  shadows, and believable depth. Do not limit the effect to isolated cards over
  a flat or nearly white background.
- Carry this visual language across every route and major section: navigation,
  page introductions, content surfaces, cards, proof sections, forms, calls to
  action, and footers. Adapt its intensity to the content instead of copying the
  Home composition literally onto every page.
- Translucent signal wires, circuit-like traces, coordinate ticks, and sparse
  futuristic numerals may appear as a low-opacity atmospheric layer. They are
  decorative only: they must not imply real metrics, system readings, customer
  results, or other factual claims.
- Keep the atmosphere refined and architectural. Avoid a gaming, hacker, crypto,
  science-fiction HUD, or generic dashboard appearance; avoid dense pseudo-code,
  excessive bloom, visual noise, and saturated blue covering large reading
  areas.
- Preserve canonical product copy, truthful claims, existing information
  hierarchy, and route purpose. Generated lettering, screens, numbers, and
  interface details in the reference are non-authoritative visual artifacts.
- This direction does not restore the removed Home video muted label, progress
  bar, or play/pause button. The newer playback-chrome direction remains in
  force.

### Non-negotiable contrast and readability requirements

- Place headlines, paragraphs, labels, navigation, and controls on calm,
  protected glass fields with sufficient opacity and blur. Decorative wires,
  numerals, highlights, and refractions must fade, soften, or stop beneath text
  rather than showing through strongly enough to compete with it.
- Use near-black midnight slate for primary copy and dark graphite for body
  copy. Reserve vivid cyber blue for controlled accents such as primary actions,
  selected words, thin edges, focus indicators, and small signals.
- Meet or exceed WCAG AA contrast in the implemented result: at least `4.5:1`
  for normal text, `3:1` for large text, and `3:1` for meaningful component
  boundaries, icons, and interaction states where applicable. Do not rely on a
  mockup's apparent readability as proof.
- Verify contrast against the final composited pixels, including translucent
  surfaces over their brightest and darkest possible backgrounds, not only
  against a nominal CSS color token.
- Check representative desktop, laptop, tablet, and phone widths, browser zoom,
  text enlargement, focus/hover states, reduced-motion behavior, and both the
  brightest and busiest atmospheric regions. No breakpoint may trade away
  legibility to preserve decoration.
- If an atmospheric effect conflicts with readable content, reduce or remove
  the effect in that location. The correct result is the approved blue-glass
  feeling with protected information—not maximum visual density.

### Completion standard

This direction is fulfilled only when the shared visual system is visibly
present across all public routes and rendered verification shows both the
approved blue-glass atmosphere and dependable content contrast. A Home-only
restyle, token-only color adjustment, or isolated set of glass cards does not
satisfy the goal. Owner review remains required after implementation.

### Round 22 continuity correction

Fresh rendered/reviewer evidence showed that several Home and Services
sections still read as comparatively flat gaps inside the shared environment,
and a shared selector unintentionally overrode the sticky header's authored
stacking. Round 22 restores sticky/z50 navigation and adds full-width protected
pale-blue translucent fields around five Home and three Services continuation
sections. It does not increase decoration beneath copy or alter canonical
messaging. Authored and rendered-field normal-text checks meet or exceed 4.5:1;
154 optimized-runtime states across 18 routes and eight widths have exact
containment. This correction is part of the same Owner direction, not a new
visual direction, and remains subject to Owner review.

### Round 23 contrast correction

Auditor evidence found that the shared Contact/Planner warning coral did not
meet normal-text AA contrast on the actual form glass. Round 23 changes only
that semantic token, from `#d9435f` to `#bd2d49`. Opened local/public renders
retain the approved blue-glass hierarchy, while final composited error-state
contrast now starts at 4.6881:1. This is a readability correction inside the
approved concept, not a visual reinterpretation.

## Every-page full-height theme authority 2026-09-01-10

**Status:** IMPLEMENTED WITH PUBLIC PROOF — OWNER VISUAL REVIEW PENDING
**Source:** Owner via Project Manager continuation relay
**Recorded:** 2026-09-01 America/New_York

Faithful transcription of the relayed Owner direction:

> “mockups/06-sitewide-blue-glass-owner-direction.png is the authoritative NEW
> THEME for every page, full page height—not merely a Home reference. Define it
> canonically and require bright ice-blue cyber-glass environment, luminous
> architectural grid/wires/traces/coordinates and depth layers, protected
> translucent panels for all copy/forms/nav/cards/CTAs, controlled dark
> high-tech focal imagery/stages, consistent glow/refraction/blur/shadows, no
> flat white gaps or fallback old-theme pages, WCAG/readability protected, and
> no agent reinterpretation.”

Agent interpretation: Rounds 21–22 establish reusable atmosphere and protected
field foundations, but they do not close this newer full-height every-route
standard. The next Builder must treat the exact mockup as authoritative,
visually plan a coherent site-wide pass before source changes, inspect every
public route family at desktop/tablet/phone, and correct remaining flat or
fallback-old-theme surfaces without weakening contrast. This interpretation is
not Owner-authored wording.

### Round 24 implementation status

Round 24 preserves the frozen Owner wording above and implements it across all
17 generated public pages plus custom 404. The pre-implementation plan reads
the exact mockup, inventories every route family, and identifies remaining flat
gaps before source work. Shared full-height environment/surface primitives,
protected long-form/form fields, and controlled dark focal stages eliminate the
measured fallbacks without changing product claims or introducing unapproved
imagery. Opened desktop/tablet/phone renders, 198-state optimized and public
matrices, composited contrast (minimum 4.6388:1), interactions, build, push, and
Render artifact adoption pass. This records implementation evidence; only the
Owner can grant final visual acceptance.

## Owner rejection and visible fidelity correction 2026-09-01-11

**Status:** ROUND 26 IMPLEMENTED AND PUSHED — PUBLIC DEPLOYMENT/OWNER REVIEW PENDING
**Source:** Owner via Codex active conversation
**Recorded:** 2026-09-01 America/New_York

> “there are no changes here. Looks nothing like the agreed upon mockup”

> “Fix the issue”

> “Then commit and push”

This is direct Owner rejection of the prior Round 24/25 visible result. Earlier
implementation and deployment evidence does not override that judgment. The
exact concept in `mockups/06-sitewide-blue-glass-owner-direction.png` remains
the authority; the correction must be materially visible in rendered output,
not inferred from selector presence, low-opacity decoration, or test matrices.

Round 26 strengthens the shared full-height blue environment, architectural
grids/rails/wires, translucent rim-lit fields, inset glass navigation, and dark
cyber footer while preserving protected copy/forms and the approved Home media
composition. Opened Home, Services, Pricing, Planner, and Contact renders show
the new treatment across desktop, tablet, and phone without horizontal
overflow. This records implementation progress only. Owner acceptance remains
pending until the pushed public result is visible and reviewed.

## Home architectural-glass fidelity correction 2026-09-01-12

**Status:** ROUND 27 IMPLEMENTED AND PUSHED — PUBLIC DEPLOYMENT/OWNER REVIEW PENDING
**Source:** Owner via Codex active conversation
**Recorded:** 2026-09-01 America/New_York

> “Look at the home page. Still doesn't match the mockup. Fix. Visualize the
> fix. Commit and push”

> “did you do it?”

This direction keeps `mockups/06-sitewide-blue-glass-owner-direction.png` as
the exact visual authority and rejects treating Round 26's stronger global
tokens as final Home parity. Round 27 changes the Home component grammar:
discrete layered glass planes, luminous columns/beams, circuit traces/nodes,
coordinate marks, a reflected floor, a double-rim protected copy field, a
deeper media chassis, and an inset credibility deck. The established copy,
video source, `0.75×` playback, removed playback chrome, routes, and responsive
content remain unchanged. The visible in-app Browser result is retained at
desktop/tablet/phone widths; only the Owner can grant final acceptance.

## Continuous middle/lower-page fidelity correction 2026-09-01-13

**Status:** ROUND 28 IMPLEMENTED AND PUSHED — PUBLIC DEPLOYMENT/OWNER REVIEW PENDING
**Source:** Owner via Codex active conversation
**Recorded:** 2026-09-01 America/New_York

> “ok...fix it and any others that you notice that have the same issue. then
> commit and push”

This follows the Owner's review of the Home center after scrolling below the
Round 27 hero. The visible defect was not the first viewport: middle and lower
sections fell back to broad pale bands and ordinary white-card fields, losing
the continuous architectural depth in the approved mockup. The same failure
shape appeared on Services and Pricing and therefore required a shared-route
correction, not a Home-only patch.

Round 28 keeps `mockups/06-sitewide-blue-glass-owner-direction.png` as exact
authority. The required result is one continuous bright ice-blue architectural
environment through the complete height of every route, with visible portal
planes, rails, beams, wiring, nodes, coordinates, and controlled perspective.
Every major reading section sits in a bounded translucent glass bay with bright
rims, protected contrast, and environmental space visible between bays. On
phones, secondary density is removed rather than compressing noise beneath
copy. Product facts, routes, forms, navigation, media source, `0.75×` playback,
and removed playback chrome remain unchanged. Local visible-browser proof does
not constitute Owner acceptance or public-deployment proof.
