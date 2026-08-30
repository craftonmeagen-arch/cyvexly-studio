# Round 8 Home/Services selected-work visual plan

**Session:** `7694882a-69e8-4ed1-8a51-535001d0780d`
**Baseline source:** `1904634` on `master`, with only pre-existing reviewer-owned dirty files outside Builder scope
**Plan recorded before source implementation:** 2026-08-30

## Observed baseline

- The current Council desktop render (`council-20260830T214320Z-home-desktop.png`) shows three 344-by-176-ish project-image regions as flat diagonal gradients. They occupy the correct place in the Home hierarchy but do not communicate that Aurora, Nexora, and Vellora are different projects.
- The accepted Home mockup (`mockups/01-home.png`) gives each selected-work card a distinct project treatment: architectural space, product/dashboard interface, and skincare product composition.
- The current Work page already renders three truthful, project-specific abstract SVG compositions through `ConceptPreview`, preserving the visible `CONCEPT PROJECT` disclosure and avoiding fabricated screenshots or clients.
- Source inspection found the root inconsistency in two marketing surfaces: `src/app/page.tsx` and `src/app/services/page.tsx` render only `project.gradient`, while `src/components/work-grid.tsx` and the case-study template layer `ConceptPreview` into the same gradient-backed media frame.

## Intended composition and behavior

- Reuse the existing `ConceptPreview` component inside the Home selected-work and Services recent-work media frames; do not create a second artwork system.
- Preserve the existing card widths, heights, typography, content order, links, disclosure chips, hover movement, and responsive grid breakpoints.
- Keep the existing per-project gradient as a safe backdrop/fallback, but make the project-specific SVG the visible content.
- Keep the artwork decorative (`aria-hidden`) because project identity and meaning remain available in the adjacent text; no duplicate accessible announcement.
- Expected responsive states: one column on phone, three columns from `md`, with no horizontal overflow or artwork distortion (`ConceptPreview` uses `preserveAspectRatio="xMidYMid slice"`).

## Acceptance comparison

The result should materially close the gap between the current flat-gradient Home section and the mockup's distinct project cards without pretending the fictional concepts have real screenshots. Home, Services, Work, and case-study surfaces should use the same three visual identities. Verify at 1440x900, 768x1024, and 390x844, open the rendered captures, and compare hierarchy, crop, disclosure, card density, and overflow against this plan and the cited baseline/mockup.
