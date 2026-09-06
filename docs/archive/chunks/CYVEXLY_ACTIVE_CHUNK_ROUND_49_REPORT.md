# Cyvexly Active Chunk — Round 49 Report Archive

Moved from `CYVEXLY_ACTIVE_CHUNK.md` round 52 to restore the intended
latest-three rotation (§7.14) — 50, 51, 52 stay live.

## Round 49 report — global round 49 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R40` (reviewed commit
`1c64d81`, round 47's HEAD, one commit behind round 48's raster-icon
commit). Sixteenth consecutive independent confirmation — 0 active code
defects, re-verifies the Apple touch icon, Web App Manifest, scaffold-asset
removal, all JSON-LD (Organization/FAQPage/BreadcrumbList), both Contact/
Planner honeypots, WCAG 1.4.10 reflow, canonicals, security headers, and
live production parity against `https://cyvexly-studio.onrender.com/`. Not
a new finding. Moved to `exchange/processed/`.

Ran three genuinely new angles, all reachable without any Owner gate:

1. **Added `src/app/error.tsx`**, Next's special-file convention for a
   route-segment error boundary — same family as the already-shipped
   `not-found.tsx` (§4.12 check: documented Next.js App Router convention,
   not a departure). Before this round, any unhandled render error on any
   route fell through to Next's default unstyled generic error screen
   instead of a branded, accessible recovery UI — a real production-QA gap
   on a site whose vision emphasizes a coherent, polished, trustworthy
   presentation. Reuses `SiteHeader`/`SiteFooter`/`ButtonLink` exactly like
   `not-found.tsx`, offers "Try again" (calls the framework's `reset()`),
   "Back to home", and "Contact us".
2. **Added `src/app/global-error.tsx`** for the rarer case of an error in
   the root layout itself, which `error.tsx` cannot catch (Next's own
   documented convention — must render its own `<html>`/`<body>` since it
   replaces the root layout). Kept deliberately dependency-free (inline
   styles, no Tailwind/header/footer imports) since this is the fallback of
   last resort if the layout itself is what broke.
3. **Added `viewport.themeColor`/`colorScheme`** to the root layout's
   metadata (`src/app/layout.tsx`) — the site had no page-level
   `<meta name="theme-color">`, so mobile browser chrome/status-bar tinting
   and Safari's dark-mode UA styling of native form controls were
   unspecified. Set to the existing brand-blue token (`#0f66e0`) and
   `light` (the site has no dark theme) — no invented facts, reuses only an
   already-shipped color.
   **Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (lint's one
   warning is the same pre-existing unused-var in round 42's untouched
   evidence script). A temporary `force-dynamic` throwaway route
   (`src/app/round49-error-test/page.tsx`, deleted before commit — verified
   the deletion with a full re-typecheck/re-lint/re-build afterward) proved
   the error boundary against a real production `next start` server on
   port 5173: the initial SSR shell correctly ships only a sanitized error
   `digest` (no raw message leak, standard Next.js production behavior),
   and a real in-app-Browser navigation to the route showed the actual
   rendered `error.tsx` UI text ("Error / Something went wrong. / This page
   hit an unexpected error..." plus all three action links) with the
   console-logged digest as the only error, matching source. After
   deleting the test route, `/round49-error-test` correctly 404s and Home/
   `/faq`/`/manifest.webmanifest`/`/apple-icon`/`/icons/192` all still
   return `200` with zero console/network regressions. `theme-color`/
   `color-scheme` meta tags confirmed present and correct via live
   `document.querySelector` on the running server.

Committed and pushed.

Archived round 46's full report to
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_46_REPORT.md` to restore
the intended latest-three rotation (§7.14) — 47, 48, 49 stay live.

Round 47's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_47_REPORT.md` (moved there
round 50, correcting a prior round's accidental duplication of the round-48
report in place of archiving round 47 — see that file's note). Round 47
implemented the Apple touch icon.
