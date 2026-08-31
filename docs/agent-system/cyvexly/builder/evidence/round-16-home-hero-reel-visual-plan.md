# Round 16 — Integrated Home hero reel visual plan

**Session:** `builder-20260831T110720-7c9b5e92d4f1`
**Lock claimed:** `2026-08-31T15:07:46.1928578Z`
**Start source:** `dc0f104` on local `main`, tracking `origin/main`
**PM prompt:** no active prompt
**Owner target:** Owner direction `2026-08-31-07` and
`mockups/05-home-hero-video-owner-direction.png`

## Intended outcome

Make the real Home hero feel like the Owner-approved premium studio-reel
composition instead of a good video placed inside a comparatively small card.
The accepted 30-second showcase remains the truthful media source. This round
changes its spatial importance, the hero's surrounding translucent pale-blue
glass atmosphere, and the player's reel treatment without changing product
claims, routes, conversion order, or media semantics.

## Current rendered baseline and measured discrepancy

The current public 1425×891 Council capture at accepted source `dc0f104` shows:

- a 1152px hero content frame;
- a 528×297 video shell, 37.1% of the viewport and 45.8% of the content frame;
- correct two-column hierarchy, but a broad unframed copy area and a player
  whose overall footprint reads as a thumbnail beside the headline;
- a mostly flat grid/gradient field rather than the Owner-requested overlapping
  pale-blue glass panes and visible refraction;
- correct muted loop, named Pause/Play control, and desktop/phone containment.

The Owner's current 1672×941 reference (SHA-256
`854c011d40a8662a9d95f82ae841b8db77661203969d3feea8e677099bec0083`)
uses a substantially wider hero stage, a large bright reel, an explicit
frosted copy pane, a luminous outer media frame, and a pale ice-blue layered
atmosphere. Small generated words and invented screens in the mockup are
non-authoritative; its scale, hierarchy, depth, color, and glass treatment are
authoritative visual direction.

## Spatial and responsive target

- Expand only the Home hero composition to a maximum stage near 1440px rather
  than widening every page container.
- At a 1440px viewport, target approximately 700–800px for the reel and
  500–600px for the copy pane, closing most of the current 528px-media gap in
  one coherent adjustment. Use an asymmetric desktop grid instead of another
  token-only change.
- Place the headline, body, and actions on a quiet translucent blue-white
  glass pane with enough blur and opacity to preserve near-black text contrast.
- Give the player a visible pale-blue glass bezel, thin ion-cyan edge, spectral
  glow, truthful loop metadata, and an actual playback-progress signal. Keep
  the poster, overlay labels, and named control legible against every frame.
- Widen the credibility rail's inner composition enough to visually connect it
  to the new hero stage while preserving five equal claims.
- Below the desktop breakpoint, retain the established sequence: copy/actions,
  then full-width video, then credibility. Phone media remains inside the
  available content width with no first-screen overlay or horizontal overflow.

## Methodology and coherent slice

Premium studio hero reels are normally treated as primary art direction: a
large media object, protected sales copy, and one coordinated atmospheric
surface. The existing Home already owns the correct component boundary and
media lifecycle, so the normal source-layer change is:

1. refactor only the Home hero markup into explicit stage/layout/copy classes;
2. add scoped CSS layers for the approved light ice-blue glass atmosphere;
3. strengthen the existing `HeroShowcaseVideo` frame and expose real progress
   from its native playback state;
4. render and measure the integrated route rather than evaluating CSS tokens in
   isolation.

No new dependency, generated claim, stock asset, hosting change, scheduler
change, or external integration is needed.

## Accessibility and behavior boundaries

- Keep the video muted, looping, inline, decorative to the message, and
  controlled by the existing named Play/Pause button.
- Preserve reduced-motion, save-data, visibility, and explicit-user-pause
  behavior. The progress line is supplemental decoration, not an unlabeled
  seek control.
- Preserve keyboard focus visibility, canonical H1/copy/actions, and DOM order.
- The translucent copy field must protect readable contrast; atmospheric lines
  remain faint behind it.

## Risks and falsifiers

- A larger reel could force the copy too narrow or create a tablet split; keep
  the asymmetric layout at `lg` only and verify 1023/1024 boundaries.
- The new bezel could distort 16:9 media or crop controls; put aspect ratio on
  the inner media viewport, not on a padded outer frame.
- Extra glass may reduce contrast or look saturated/cyan; inspect real captures
  against the accepted lighter-blue reference and measure computed colors.
- Phone height can become excessive even without width overflow; inspect the
  complete first-screen sequence and keep the media directly after actions.
- If the reel remains near the current 528px desktop width, or the copy pane
  still appears unprotected against a flat grid, the implementation has not
  closed the Owner's named gap.

## Acceptance proof

- lint, optimized build, and immediate post-build TypeScript pass;
- opened desktop, tablet, and phone production captures compared directly with
  this plan and the Owner reference;
- exact hero/copy/video/rail geometry at representative widths, including
  1023/1024 and phone containment;
- real playback advance, progress advance, Pause/Play, natural loop, reduced
  motion, save-data, and named-control behavior;
- heading/control/overflow/console and route smoke checks;
- actual Git diff reconciled against this preserved plan and the Builder's
  expected file set before adoption.
