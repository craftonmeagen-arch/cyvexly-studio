# Cyvexly Active Chunk — Round 46 Full Report (Archived)

Archived round 49 to keep `CYVEXLY_ACTIVE_CHUNK.md` under its byte cap and
restore the intended latest-three rotation (§7.14).

## Round 46 report — global round 46 (scheduled/unattended session)

Read the one new Auditor inbox item, `IFA-2026-09-05-R37` (reviewed commit
`12e43a7`, round 44's HEAD, one commit behind round 45's BreadcrumbList
JSON-LD commit). Thirteenth consecutive independent confirmation — 0 active
code defects, re-verifies the FAQPage JSON-LD scoping, both honeypots, WCAG
1.4.10 reflow on `/faq`, canonicals, security headers, and live production
parity. Not a new finding. Moved to `exchange/processed/`.

Ran two genuinely new angles, both reachable without any Owner gate:

1. **Removed five dead `create-next-app` scaffold assets from `public/`**
   (`next.svg`, `vercel.svg`, `window.svg`, `globe.svg`, `file.svg`) —
   confirmed via a full source grep that nothing in `src/` referenced any of
   them. These were publicly served at e.g. `cyvexly.com/vercel.svg` on the
   live launched domain: unrelated third-party branding shipped by accident,
   not a Cyvexly asset, and pure dead weight on a site vision §17 requires
   to be "truthful" and fully QA'd. Verified post-build: all five now 404 on
   the real production server while `icon.svg` (the actual brand mark)
   still serves 200.
2. **Added a Web App Manifest** (`src/app/manifest.ts`, Next's special-file
   convention) — the site previously had none, a routine part of launch QA
   (PWA/"Add to Home Screen" metadata) that was never covered by any prior
   round. Uses only already-confirmed facts: `name`/`short_name` from
   `site-config.ts`, the tagline as `description`, and the already-shipped
   brand tokens for `theme_color` (`#0f66e0` cyber-blue) and
   `background_color` (`#eef4fa` arctic-mist) — no invented facts. Icon
   entry reuses the existing `icon.svg` (`sizes: "any"`, correct
   `image/svg+xml` type per the Web App Manifest spec) rather than
   generating new raster assets this round. §4.12 check: `manifest.ts` is
   Next.js's own documented convention, auto-linked into every page's
   `<head>` — not a departure.
   **Verified:** real production build (`pnpm run build`) emits
   `/manifest.webmanifest`; parsed its actual body (correct name, icon,
   colors, `display: "standalone"`); confirmed `index.html` carries
   `<link rel="manifest" href="/manifest.webmanifest"/>`. Live-verified
   against a real `next start` production server on port 5173: manifest
   returns `200 application/manifest+json`; a real in-app-Browser screenshot
   of Home shows zero visual regression and zero console/network errors.

`tsc --noEmit`/`lint`/`build` all pass clean (lint's one warning is a
pre-existing unused-var in round 42's evidence script, untouched this
round). Committed and pushed.
