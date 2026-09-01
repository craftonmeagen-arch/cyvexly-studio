# Round 20 — Home showcase cleanup visual plan

**Owner direction:** “the video has shows muted video in the top right corner. and there is a play bar that keeps going. and the paly and stop button needs to be removed it can be slower too.”

## Rendered baseline

The opened 1440×900 Home render at accepted source `05a2403` shows the
726.56×420.06px hero figure beside the message pane. Inside the video are a
top-right `MUTED LOOP · 00:30` pill, a continuously advancing bottom progress
line, and a circular Pause/Play button. Native media measurements report a
30-second muted loop playing at `1.0×`. The retained media bezel, top-left
`CYVEXLY SYSTEMS` identifier, and lower capability caption already provide the
premium studio-reel identity; the three playback-status elements add visual
chrome the Owner no longer wants.

Baseline evidence: `round-20-home-video-cleanup-baseline.png`.

## Target composition

- Preserve the Home hero layout, substantial 16:9 reel, light-ice-blue glass
  bezel, source media, poster, top-left studio identifier, lower capability
  caption, and the surrounding hero atmosphere.
- Remove the visible muted/duration pill, progress line, and circular
  Pause/Play control completely. No replacement status badge or timeline is
  introduced.
- Set the authored playback rate from the measured `1.0×` baseline to `0.75×`.
  This is a 25% slower media rate and extends one 30-second source cycle to
  about 40 seconds without altering the asset.
- Keep the reel muted, inline, and looping. Keep visibility, data-saver, and
  reduced-motion holds; reduced-motion and data-saving sessions remain on the
  designed poster unless the user explicitly activates the reel.
- Preserve a pause mechanism without restoring visible playback chrome: the
  complete media surface becomes the named keyboard/click target. A keyboard
  focus outline appears only when that surface is focused. This reconciles the
  Owner's request to remove the button with the product's WCAG 2.2 motion and
  keyboard commitments.

## Responsive states and acceptance

- Desktop: unchanged two-column balance; the reel reads as a clean cinematic
  panel without three competing control signals.
- Tablet/phone: unchanged stacked placement and full available width; no
  control overlap or residual reserved space.
- Render acceptance: no visible `Muted loop`, timeline, or circular control at
  1440/768/390; one 16:9 video; exact width containment; capability copy stays
  readable against the lower gradient.
- Runtime acceptance: `playbackRate === 0.75`, `muted === true`, `loop === true`;
  media time advances about 1.5 seconds over two real seconds; the named media
  surface toggles pause/resume by click and Enter/Space; reduced motion holds
  the poster until explicit activation; no browser warning/error.
- Regression acceptance: lint, optimized build, immediate post-build
  TypeScript, route/media HTTP smoke, and public deployment adoption pass.

## Falsifiers and boundaries

Reject the implementation if any removed label/control remains visible, if
the progress signal still advances, if the slower rate is not observable after
metadata load or resume, if the clean surface loses its accessible pause
mechanism, or if responsive containment changes. This direction changes only
the showcase's presentation/playback behavior; it does not modify the source
video, business copy, hero sizing, claims, routes, scheduler, or automation.
