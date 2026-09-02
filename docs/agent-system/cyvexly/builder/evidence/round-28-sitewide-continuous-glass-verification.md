# Round 28 — sitewide continuous architectural-glass verification

## Owner-visible defect

The visible in-app Browser confirmed the Owner's report: Round 27 gave Home a
strong architectural hero, but the middle and lower sections still collapsed
into broad pale bands and ordinary card fields. Services and Pricing showed the
same failure shape. `mockups/06-sitewide-blue-glass-owner-direction.png`
remained the exact visual authority.

## Implemented correction

- Strengthened the persistent shared environment with two portal planes, three
  illuminated cross-stage beams, and a perspective horizon while retaining the
  existing rails, wiring, nodes, coordinates, and layered planes.
- Reduced the opacity of full-width section masks so the shared architecture
  remains visible through the whole route instead of disappearing below the
  first viewport.
- Replaced flat continuation slabs with bounded section bays: bright outer
  rims, inner cyan edges, protected translucent fields, local grids/sheens,
  depth shadows, and visible environmental space between bays.
- Applied the same protected bay grammar to direct content sections so Home,
  Services, service details, Work, case studies, Pricing, Process, Planner,
  Contact, FAQ, Accessibility, and custom 404 do not fall back to the old pale
  theme.
- Darkened the shared secondary-copy token from `#526176` to `#46576e`. Against
  the conservative protected-field composite used during implementation
  (`#c5e5f9`), the modeled contrast is `5.5986:1`, above the `4.5:1` normal-text
  target. Primary copy remains midnight slate and the brightest decoration
  stays behind protected fields.
- Phone keeps one portal and two reduced beams while hiding secondary portal,
  rail, and data density.

## Visible in-app Browser proof

All visual and interaction checks used the visible Codex in-app Browser against
the real local Next application on port `5173`; no headless-browser substitute
was used.

- Opened and inspected Home's first viewport and center, the complete Home,
  complete Work and Contact, Pricing's comparison section, FAQ sections, and
  Planner phone entry. The middle/lower page now retains visible blue depth,
  structural rails/planes, and framed glass bays instead of flat pale bands.
- Opened Home at `1440×900` and `390×844`. The desktop composition retains the
  complete lattice; the phone composition simplifies decoration without losing
  the theme or clipping content.
- Exercised the Home showcase surface twice. It remains a clean named surface
  with no native controls; pause/resume remains available and the underlying
  media remains muted, looping, and authored at `0.75×`.
- Expanded the first FAQ item and opened/closed the phone navigation. Both
  interactions remained functional and legible on the new shared surfaces.
- After the optimized build completed, started that production artifact on the
  reserved port and reopened Home center and Pricing center in the visible
  in-app Browser. Both retained the same continuous scene and protected bays.

## Route and responsive matrix

The visible in-app Browser measured 18 route states at each of three widths:
desktop `1440`, tablet `768`, and phone `390` — 54 states total. The set covered
Home, Services, five service details, Work, three case studies, Pricing,
Process, Planner, Contact, FAQ, Accessibility, and an invalid route/custom 404.

Every state had:

- exact `scrollWidth === clientWidth` containment;
- one `main` landmark;
- one `h1`;
- sticky shared navigation with expected `z-index: 50`.

The exact client widths were `1425`, `753`, and `375` after the visible browser's
scrollbar allocation.

## Static verification and limits

- `pnpm lint`: pass.
- `pnpm exec tsc --noEmit`: pass.
- `pnpm build`: pass; all 23 generated pages complete. The existing
  Owner/domain-blocked `metadataBase` warning is unchanged.
- Builder hot-path files are within their configured caps after rotating Round
  25's Active report and older Owner/Build-summary history to `docs/archive/`.
  The global cap helper separately reports pre-existing concurrent Council
  Current/Handoff overages; those role-owned files were not edited by Builder.
- Canonical copy, facts, pricing, routes, forms, navigation semantics, accepted
  Home media, and playback direction were not changed.
- This is local rendered implementation proof. Public deployment adoption and
  final visual acceptance remain Owner decisions.
- Concurrent Council files and the Owner attachment were preserved and excluded
  from the Builder change. Scheduler/automation state was not read or changed.
