# Round 26 owner-visible theme repair verification

## Disposition

The Owner rejected the public Round 24/25 appearance as visually unchanged and
not representative of the approved mockup. Round 26 therefore reopened the
shared visual layer as a defect repair rather than treating previous selector,
matrix, or deployment evidence as proof of visual acceptance.

The candidate now presents an unmistakably blue, full-height architectural
environment: visible grid and rail layers, luminous wiring and nodes, deeper
translucent section fields, rim-lit protected panels, an inset glass header,
and a controlled dark cyber footer. The Home hero retains the approved split
composition and real showcase media while giving both copy and media visibly
stronger glass separation. Canonical copy, routes, pricing, and playback-chrome
direction are unchanged.

## Rendered comparison

- Authority: `mockups/06-sitewide-blue-glass-owner-direction.png`.
- Owner-rejected live evidence:
  `.codex-remote-attachments/01a054a9-fdd5-76e3-8e4a-85952b5b1598/32f9695d-ff09-4fd2-b293-74461d59e3bb/1-Photo-1.jpg`.
- Final Home desktop viewport: `round-26-home-1440-viewport.png`.
- Complete-page proof: `round-26-home-1440-full.png` and
  `round-26-services-1100-full.png`.
- Tablet/phone route-family proof: `round-26-pricing-768-full.png`,
  `round-26-planner-390-full.png`, and `round-26-contact-390-full.png`.
- Exact computed runtime measurements: `round-26-render-metrics.json`.

The opened 1440 Home viewport shows the approved hierarchy directly: luminous
glass navigation, protected outcome-led copy at left, large dark high-tech
media stage at right, and a translucent credibility rail. The complete Home
and Services captures show the blue environment continuing through every
section rather than collapsing to white gaps. Planner and Contact phone states
retain quiet readable form fields while the atmosphere remains visible around
them. All five measured states report `scrollWidth === clientWidth`, one main,
one visible H1, sticky/z50 navigation, a shared atmosphere, and three vertical
architectural rails.

## Contrast and usability boundary

Dense decorative layers remain behind protected blue-white glass. Primary copy
stays midnight slate and body copy stays graphite; the strongest blue remains
on actions, edges, and small signals. The dark footer explicitly switches to
white/cyan copy. Mobile suppresses two of three vertical rails and reduces wire
density. The Home showcase remains muted, inline, looping at the existing
authored rate, without the removed muted badge, timeline, or play/pause chrome.

## Build and accountability

- `pnpm run lint`: pass.
- `pnpm exec tsc --noEmit`: pass.
- `pnpm run build`: pass; all 23 generated pages/routes complete. The existing
  Owner/domain-blocked `metadataBase` warning remains unchanged.
- Product scope: shared CSS atmosphere/surfaces plus shared atmosphere, header,
  and footer components. No canonical content, pricing, form behavior, or
  scheduler/automation was changed.

This is a materially different rendered implementation, not a claim that the
Owner has accepted final parity. Final visual acceptance remains with the
Owner after the pushed deployment is visible.
