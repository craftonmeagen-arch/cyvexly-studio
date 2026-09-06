# Cyvexly Active Chunk — Round 52 Full Report (archived round 55)

Moved here round 55 to restore the latest-three rotation (§7.14) in
`CYVEXLY_ACTIVE_CHUNK.md`. Round 52 added per-route Open Graph images.

## Round 52 report — global round 52 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-06-R43` (reviewed commit
`eb03a33`, round 50's HEAD, one commit behind round 51's OG/Twitter-
metadata commit). Nineteenth consecutive independent confirmation — 0
active code defects, re-verifies COOP/CORP headers, security.txt, error
boundaries, theme-color/color-scheme metadata, raster manifest icons,
print-color-adjust, Apple touch icon, scaffold-asset removal, all JSON-LD,
both Contact/Planner honeypots, WCAG 1.4.10 reflow, canonicals, and full
security-header suite against a local isolated build and live production
parity. Not a new finding. Moved to `exchange/processed/`.

Shipped the exact reachable angle round 51's own handoff named: **per-route
Open Graph images.** Round 51 gave every route correct `og:*`/`twitter:*`
text fields, but every route still shared Home's single generated
`opengraph-image` (`grep`-confirmed only `/` had one), so shared links for
About/Services/Pricing/Work/Process/Contact/FAQ/Project Planner all showed
the same generic Home preview instead of one reflecting the actual page.
Added `src/lib/og-image.tsx`'s `renderRouteOgImage()` helper (reuses Home's
exact brand mark/palette/grammar — logo, "CYVEXLY STUDIO" eyebrow, large
page name, description line) and a new `opengraph-image.tsx` per static
route (About, Services, Pricing, Work, Process, Contact, FAQ, Start),
reusing only each route's own already-shipped `buildPageMetadata()`
title/description — no invented copy.

**Verified:** `tsc --noEmit`/`lint`/`build` all pass clean. Started a real
`next start` production server on port 5173: each of the 9 routes' `og:image`
meta now resolves to its own distinct URL; downloaded and visually opened
the actual generated PNGs for Services and Project Planner (representative
sample) — correct brand mark, page name, description text, palette, and no
clipping/overflow at the full 1200×630 canvas.

**Regression discipline on the known pre-existing gap:** before shipping,
moved the two new sibling files (`services/opengraph-image.tsx`,
`work/opengraph-image.tsx`) aside, rebuilt, and curled
`/services/business-websites` and `/work/aurora-spaces` — confirmed they
already had **no** `og:image` at all in that baseline (Next's image-
convention file does not cascade into a parameterized `[slug]` child
segment the way static metadata text fields do). Restored the files,
rebuilt, and confirmed the same absence afterward — a real before/after A-B
test proving this round's sibling files did not cause or worsen the
dynamic-route gap, which remains pre-existing and is named as a next-round
candidate below. A full 26-route/asset regression sweep (all static/dynamic
pages, sitemap, robots, manifest, icons, security.txt, an invalid path)
shows zero regressions — every prior 200/404 status is unchanged. Committed
(`57b8fb7`) and pushed.
