# Round 21 Site-wide Blue-glass Verification

## Scope and source

- Start source: `445c876` on `main`.
- Accepted product source: `1437f5b`, pushed to `origin/main`.
- Owner direction: `CYVEXLY_OWNER_DIRECTION.md` entry 2026-08-31-09.
- Approved visual reference: `mockups/06-sitewide-blue-glass-owner-direction.png`.
- Pre-implementation plan: `round-21-sitewide-blue-glass-visual-plan.md`.
- No active PM prompt was present when planning or immediately before implementation.

## Implemented result

The root layout now provides one assistive-technology-hidden, pointer-inert,
fixed atmosphere with a pale-blue grid, translucent architectural planes,
seven signal traces, and four explicitly decorative data labels. Standard
route introductions use a shared protected glass field. Home and Pricing keep
their bespoke accepted compositions, while former opaque ice bands use a
translucent continuation surface. Canonical copy, routes, Planner behavior,
Work filters, and the cleaned Home reel remain unchanged.

## Rendered comparison

Opened and inspected the approved reference plus final optimized-runtime
captures for Home, Work, Services, Pricing, Process, Planner, Accessibility,
a service detail, a case study, and the 404 route. The final system is visibly
blue, layered, and glass-like across route families. Copy fields remain calm;
wires/numerals stay outside the reading hierarchy; desktop and phone captures
show no overlap, clipping, or horizontal crop.

Exact CDP metrics in `round-21-sitewide-blue-glass-runtime.json` show one
`main`, one H1, one atmosphere, seven wire paths, four decorative labels, and
`scrollWidth === clientWidth` in every sampled 1440×900 or 390×844 state.
The atmosphere reports `aria-hidden="true"`, `position: fixed`, and
`pointer-events: none`. Generic introductions report the intended layered
background, 30px blur, 138% saturation, and bright protected border.

## Final composited-pixel contrast

Pixels were sampled from the final PNGs inside the protected introduction
fields at the runtime-recorded coordinates. Ratios below use WCAG relative
luminance against the actual composited RGB pixel, not a nominal CSS color.

| State | Pixel | Midnight copy | Graphite body | Cyber accent | Emerald signal |
| --- | --- | ---: | ---: | ---: | ---: |
| Work desktop | `249,252,255` | 15.61 | 6.12 | 5.10 | 6.37 |
| Work phone | `248,251,254` | 15.47 | 6.07 | 5.06 | 6.32 |
| Services desktop | `249,252,255` | 15.61 | 6.12 | 5.10 | 6.37 |
| Process phone | `250,253,255` | 15.73 | 6.17 | 5.14 | 6.42 |
| Planner phone | `248,252,254` | 15.57 | 6.11 | 5.09 | 6.35 |
| Accessibility phone | `248,252,254` | 15.57 | 6.11 | 5.09 | 6.35 |
| Service detail | `249,252,255` | 15.61 | 6.12 | 5.10 | 6.37 |
| Case study | `248,253,254` | 15.66 | 6.15 | 5.12 | 6.39 |
| 404 phone | `248,252,254` | 15.57 | 6.11 | 5.09 | 6.35 |

Every normal-text pair exceeds 4.5:1, including the lowest measured cyber
accent at 5.06:1 and graphite body at 6.07:1.

## Behavior and production checks

- Optimized Next.js build completed all 23 generated pages; only the existing
  Owner/domain-blocked `metadataBase` warning remains.
- ESLint and TypeScript pass.
- Optimized route sweep passes Home, all five service details, all three case
  studies, Work, Pricing, Process, FAQ, Accessibility, Contact, Planner, and
  the 3,978,486-byte MP4. Known About/invalid-route controls remain 404.
- MP4 range request returns 206, `video/mp4`, and the correct 0–1023 range.
- Public Render changed from ETag `"kzfa6xg2yc2f7v"` without the new shared
  atmosphere to `"10h74cxm9iq2hzw"` with it after `1437f5b` reached `main`.
- A post-adoption public matrix covered Home, Work, Services, Pricing, Process,
  and Planner at 1440, 1280, 1152, 1024, 960, 853, 768, 640, 480, 390, and 320
  CSS pixels, plus opened 1440 Home and 390 Work. All 68 states expose one
  atmosphere/main/H1, zero overflow, the correct desktop/mobile navigation
  switch, and none of the removed playback text. The 1152–853 widths also act
  as layout proxies for common 125–150% desktop zoom states.
- Opened the public 320px Home, Services, and Planner tops after explicitly
  resetting scroll position. Header, protected copy, button wrapping, and intro
  boundaries remain legible and unclipped at the narrowest audited width.
- Work renders six named filters; activating Business Site changes the selected
  button and card count from three to two while retaining focus. The same
  interaction passes again on the adopted public site.
- Home media is muted, inline, looping, actively advancing, without native or
  custom visible playback controls and without the removed `Muted loop` text.
- Planner service-query route reaches Step 1 at 390px with zero overflow.
  Public Planner query entry and public Home muted-loop playback without native,
  custom, or removed visible chrome pass again after adoption.

## Accountability and limits

Diff-to-plan contains only the shared atmosphere/protected-field system,
route-family adoption, translucent section continuation, visual evidence, and
canonical closeout. Concurrent Auditor/Council files and evidence were neither
edited nor staged. No scheduler or automation was read, modified, paused,
deleted, renamed, rescheduled, or otherwise touched.

Physical Safari/Firefox, field Web Vitals, the Owner's original second
computer, and Owner visual acceptance were unavailable. About founder identity,
Privacy/Terms jurisdiction, production domain/email provider, and concept-art
framing remain Owner decisions.
