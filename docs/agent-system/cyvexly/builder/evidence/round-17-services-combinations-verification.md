# Round 17 Services combination pathways — verification

## Result

The `/services` page now expresses all five existing audience combinations as
mockup-aligned, icon-led glass pathways rather than a sparse table. Each card
shows three named disciplines joined by decorative plus signs and a concise
plain-language outcome. No claim, price, client result, or project provenance
was invented.

## Rendered comparison

- Baseline `round-17-services-combinations-baseline.png` shows the prior
  two-column table/text-row adaptation inside the full page.
- `round-17-public-services-desktop.png` shows the final 1440px deployed
  module: three cards followed by a centered pair, with luminous ice-blue
  glass, a visible service-math path, and a Planner handoff.
- `round-17-services-combinations-tablet.png` shows two readable columns at
  768px. `round-17-public-services-phone.png` shows the deployed single-column
  390px state with each three-service path reflowed vertically.
- `round-17-services-combinations-desktop.png` preserves the complete final
  Services page rhythm.
- After product commit `b5dfd50` reached `origin/main`, public Render changed
  from ETag `"jlon5lh8er29b7"` without the new copy to
  `"4w3peakpmy2p3t"` with the new heading. Opened public desktop and phone
  captures match the optimized local result.

The first 1024px edge check technically fit three 307px cards, but the longest
service name wrapped too aggressively. The implementation moved the three-card
switch from `lg` to `xl`; final 1024px uses two 471px cards, while 1280px uses
three 371px cards. This is a responsive readability correction within the
preserved plan's desktop/tablet/phone state map, not a change of scope.

## Runtime and accessibility proof

- Exact 1440, 1280, 1024, 768, 720 zoom-equivalent, 390, and 320 CSS-width
  checks all report
  `scrollWidth === clientWidth`.
- The page retains one `main` and one H1. The module has five article cards,
  five named service lists, and fifteen list items/service nodes. Icons and
  plus signs remain decorative; the visible labels carry the meaning.
- All fifteen service icons render, all ten plus signs are hidden from the
  accessibility tree, unnamed links/buttons are zero, and the 390px Planner
  CTA measures `224.05×46px`.
- Native activation of `Find your starting point →` reached `/start` and its
  H1, `Tell us what you need. We'll shape the right route.`, in both the local
  optimized runtime and the deployed public site.
- The clean Cyvexly browser tab reported no warning or error logs.
- Twenty built routes/assets returned 200 from the optimized production
  server. ESLint, `tsc --noEmit`, and the 23-page optimized build pass. The
  only warning is the already documented `metadataBase` decision, which cannot
  be resolved without the Owner's public domain.
- A 480-instance rendered internal-link audit found 27 unique targets: 24
  return 200 and the only 404s are the already documented Owner-blocked
  `/about`, `/privacy`, and `/terms` routes. No unexpected link failure exists.
- The public Home regression check still finds the real video element/source;
  its MP4 returns `206`, `video/mp4`, and the requested `0-1023/3978486` range.
- Public desktop (`1425px` client width) and phone (`375px`) each show all five
  cards/fifteen nodes, one main/H1, exact width containment, and zero browser
  warnings or errors.

Exact metrics and the route list are in
`round-17-services-combinations-runtime-proof.json`.

## Plan/diff accountability and limits

The source diff matches the preserved plan: structured combination data,
server-rendered pathway markup, Services-scoped glass/grid CSS, a Planner CTA,
and desktop/tablet/phone evidence. The only deliberate refinement was holding
the three-column layout until 1280px after the opened 1024px edge comparison.

No scheduler or automation was read, modified, paused, deleted, rescheduled,
or otherwise touched. Concurrent Council files and evidence were excluded.
Owner acceptance, the original second computer, physical Safari/Firefox,
field Web Vitals, founder/legal/domain/email-provider decisions, and the
abstract-versus-commissioned artwork decision remain outside this proof.
