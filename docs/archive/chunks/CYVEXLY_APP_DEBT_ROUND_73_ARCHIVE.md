# Cyvexly App Debt — Round 73 archived detail

Moved from `CYVEXLY_APP_DEBT.md` round 78 to keep that file under its
30,720-byte hot-file cap. One-line outcome preserved inline there: case-study
palette/artwork color-token staleness fix (Aurora Spaces, Nexora Systems).

## Resolved round 73

- **Checked the Auditor inbox first:** two new items existed
  (`IFA-2026-09-06-R61`, `IFA-2026-09-06-R62`) — the 36th and 37th
  consecutive clean confirmations (0 active code defects). R61 flagged
  `CYVEXLY_APP_DEBT.md` over its byte cap (`CYV-DOC-002`, 33,389 bytes);
  round 71 had already archived rounds 50/51/55 and brought it to
  29,158 bytes before R62 independently re-verified 47/47 hot files
  compliant and closed the finding. No new Builder action was needed
  for either item. Both moved to `exchange/processed/`.
- **Adversarially reviewed the case-study surface
  (`/work/[slug]` content in `src/lib/site-config.ts`'s `caseStudies`
  against `selectedWork`), per round 69-72's recommendation — the one
  genuinely fresh surface not yet given a dedicated pass.** Diffed
  every case study's `palette` array (hex + label, rendered as a
  colored swatch chip plus the literal hex text on the page) against
  the live `--color-*` custom properties in `src/app/globals.css`.
  Found a real, reachable staleness defect: Aurora Spaces' and Nexora
  Systems' palettes both still listed `#1478FF` for "Cyber blue
  accent"; Nexora also listed `#526176` for "Cool graphite text" — not
  arbitrary numbers, but the *exact original* `--color-cyber-blue`/
  `--color-cool-graphite` values (confirmed via `git log -S` on
  `globals.css`) from before round 1 darkened cyber-blue to `#0F66E0`
  for WCAG contrast and round 28's sitewide glass pass darkened
  cool-graphite to `#46576E`. Vellora Care's own palette (ion cyan,
  arctic mist, smoke glass, signal emerald) already used every
  corrected value with none of the stale ones — proof this was
  accumulated drift across the three case studies' different write
  times, not a deliberate distinct brand palette per fictional client.
- **Root-caused into the matching artwork, not just the documentation
  swatches.** `src/components/concept-preview.tsx`'s own top comment
  states it "reuses each project's own exact palette hex values" —
  its Aurora/Nexora SVG illustrations were indeed hardcoded with the
  identical stale `#1478FF`/`#526176` pixels, so the artwork and the
  swatch text were self-consistent with *each other* but both wrong
  against the live site. Fixing only the swatch numbers without the
  artwork would have created a new, more visible mismatch (a labeled
  "#0F66E0" swatch sitting two sections above artwork still rendering
  in the old blue) — so both were corrected together. A further grep
  across `src/` for the same two stale hex strings found them also
  hardcoded in two unrelated decorative SVGs — `src/components/
  pricing-scope-signal.tsx` and `src/components/service-detail-
  signal.tsx` — each already using the corrected `#0F66E0` for
  cyber-blue elsewhere in the very same file, confirming the
  cool-graphite darkening from round 28 was simply never propagated to
  these components' hardcoded label-text fills.
- **Fixed:** replaced the stale hex literals with the current tokens
  in all 4 files: `src/lib/site-config.ts` (2 `palette` entries: Aurora
  and Nexora's "Cyber blue accent"; Nexora's "Cool graphite text"),
  `src/components/concept-preview.tsx` (5 SVG `fill` values across the
  Aurora/Nexora compositions), `src/components/pricing-scope-signal.tsx`
  (2 `<text fill>` values), `src/components/service-detail-signal.tsx`
  (1 `<text fill>` value). Deliberately left `site-config.ts`'s
  `gradient` fields (the Tailwind `from-[#1478FF]...` background-div
  classes) untouched after checking `work-grid.tsx` and `[slug]/
  page.tsx`: `ConceptPreview`'s own SVG always renders an opaque
  full-viewBox background `<rect>` on top, so that gradient div is
  fully covered and invisible in every render path — the surviving
  `#1478FF` string is inert class-name text, not a rendering gap.
- **Verified:** `tsc --noEmit`/`lint`/`pnpm run build` all clean (same
  single pre-existing, unrelated round-42 evidence-script lint
  warning, untouched). Ran a real `next start` production build and
  fetched the rendered HTML for `/work/aurora-spaces` and `/work/
  nexora-systems`: the palette swatch `style={{backgroundColor}}`
  values and their adjacent `<span>` label text both now read
  `#0F66E0`/`#46576E`, matching `getComputedStyle`-verified live
  tokens exactly (no live browser session needed for this check — the
  claim is about static/SSG HTML output, which a direct fetch proves
  directly). A 22-route production sweep (every public static/dynamic
  route, `/not-found`, `robots.txt`, `sitemap.xml`) returned 200
  (`/not-found` correctly 404s).
- Cleaned up: stopped the owned `next start` listener on port 5173
  (verified the real listener PID via `Get-NetTCPConnection -LocalPort
  5173 -State Listen` before `Stop-Process -Force`, not by process
  name — this host runs many unrelated pre-existing `node.exe`
  processes); removed the scratch `next-start-5173.log` file from
  `$env:TEMP`.
- **Housekeeping:** archived round 72's full "Resolved round 72"
  detail and round 70's full "Resolved round 70" detail (see pointers
  below) to keep this file under its 30,720-byte cap after adding this
  round's entry; `CYVEXLY_ACTIVE_CHUNK.md` is left at 30,644/30,720
  bytes (76 bytes headroom) — flagged in the handoff for the next round
  to archive further before adding new detail there.
