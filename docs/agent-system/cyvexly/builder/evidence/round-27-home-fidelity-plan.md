# Round 27 Home fidelity correction plan

**Owner authority:** `mockups/06-sitewide-blue-glass-owner-direction.png` and
the instruction, “Look at the home page. Still doesn't match the mockup. Fix.
Visualize the fix. Commit and push.”

## Measured public baseline

- Visible in-app Browser at 1440×900: document width `1425/1425`; Home hero
  `1425×718.25`; copy field `594.44×499.25`; media shell
  `726.56×420.06`; credibility rail `1425×90`.
- The baseline preserves the correct split hierarchy, content, and media, but
  the page reads as a flat blue grid with two opaque rounded cards. It lacks
  the reference's architectural glass corridor, bright depth rails, double
  refractive edges, and integrated floor/ceiling light.
- Baseline evidence: `round-27-live-baseline-home-1440.png`.

## Visual target before source change

1. Build a Home-only architectural scene with visible foreground and
   background glass planes, vertical rails, horizontal light shelves, circuit
   traces, coordinate labels, and a grounded floor reflection.
2. Keep the copy in a protected calm reading field, but replace the opaque
   card impression with transparent layered glass: double rim, edge notches,
   and an inner contrast veil.
3. Turn the video into the hero's dark focal stage through a deeper nested
   bezel, scan rail, side trace, and reflected base. Do not add playback chrome
   or change the accepted source media/0.75× behavior.
4. Integrate the credibility rail into the same glass architecture rather than
   a flat separator strip.
5. Preserve the established headline, actions, truthful copy, accessible named
   media surface, reduced-motion/data-saving behavior, and exact responsive
   containment.

## Acceptance and falsifiers

- At 1440×900, the first viewport must visibly read as a luminous glass
  environment before inspecting selectors or computed styles.
- The Home copy/media hierarchy must remain immediately legible; normal text
  cannot rely on glow for contrast.
- At 390×844, decorative density must reduce, the hero must stack, the media
  must remain fully visible, and `scrollWidth` must equal `clientWidth`.
- Sticky navigation, one `main`, one visible H1, media keyboard pause/resume,
  removed native/video chrome, lint, TypeScript, and optimized build must pass.
- A visible in-app Browser screenshot of the implemented local result must be
  opened against the approved mockup before commit.
