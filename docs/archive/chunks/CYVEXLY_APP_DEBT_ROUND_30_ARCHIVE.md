# Cyvexly App Debt — Round 30 Resolved-Section Archive

Archived round 36 to keep `CYVEXLY_APP_DEBT.md` under its 30720-byte
hot-file cap. This is the full, unedited "Resolved round 30" section
(the environment/PATH note at the end remains duplicated in the live
file since it documents an ongoing per-session workaround, not a
one-time historical fact).

## Resolved round 30

- **About page built and verified.** Owner direction `2026-09-04-14`
  authorized the studio-led launch treatment (no personal founder name or
  portrait). Built `/about` (`src/app/about/page.tsx`) with every element
  vision §6.8 requires: the Cyvexly signal mark as the principal identity
  image (no portrait), the approved studio-origin draft verbatim, five short
  values (`aboutValues` in `src/lib/site-config.ts`: Clarity, Originality,
  Practicality, Ownership, Continued care), working style/remote-availability
  copy, an honestly-worded collaborator model (independent studio, no
  in-house team invented, collaborators disclosed transparently when used),
  a brief technology mention (React/Next.js, chosen for compatibility, not
  marketing), current availability/response-time language, and a closing CTA
  to `/start`. Restored the "About" link to `primaryNav` and
  `footerNav.studio` now that the route is real and verified (was
  deliberately removed from navigation in round 22 while unbuilt).
- **Verification:** `pnpm exec tsc --noEmit`, `pnpm run lint`, and
  `pnpm run build` (25 routes) all pass clean; grepped the generated
  `.next/server/app/about.html` for every required content block (origin
  story, all five value names, working-style list, capability list, CTA) —
  all present. Heading hierarchy measured directly (`h1` → `h2` → `h3`, no
  skipped level). **Stronger proof than prior rounds' documented limitation:**
  this session's in-app Browser pane *can* composite and screenshot
  (`computer{action:"screenshot"}` succeeded after one retry, repeatedly) —
  unlike the hard limitation recorded in `CYVEXLY_TOOLS_AND_CAPABILITIES.md`
  for the historical Codex-based session type. Started the dev server
  manually (`preview_start` with a bare `{name}` still refuses in this
  unattended scheduled session, same as before) and attached via
  `preview_start({url})`, then took real screenshots at 375px (mobile),
  ~785px (default pane width, hamburger nav confirmed below `lg`), and
  1440px (full desktop nav with "About" present, two-column layout
  confirmed) — no horizontal overflow, no clipping, correct contrast at any
  width. One manually-emulated-1440px scroll position produced a blank
  screenshot on retry despite a correct, fully-populated accessibility tree
  (`read_page`) and zero console errors at that exact position — treated as
  a transient compositing quirk of the emulated-viewport path (reproduced
  once, did not reproduce at the pane's native width for the same content),
  not a product defect; not worth further session time chasing per the
  non-converging-loop guidance. Stopped the manually-started dev server
  processes before exiting (role-owned port 5173 cleanup).
- **Privacy Policy and Website Terms drafted and verified.** Built
  `/privacy` and `/terms` (`src/app/privacy/page.tsx`,
  `src/app/terms/page.tsx`), grounded in Indiana/United States operations and
  the site's *actual* current behavior rather than generic template
  language: verified in source first that the site has no live analytics,
  no cookies, no third-party tracking scripts, and self-hosts fonts (no
  live Google Fonts request); that Contact and the Project Planner both
  submit via a `mailto:` link (data goes device-to-inbox, no server-side
  storage today) with the Planner's `localStorage` draft-save and honeypot
  described accurately; and that no payment is collected anywhere on the
  site. Terms sets Indiana governing law and explicitly separates these
  public Website Terms from the future signed client project agreement, per
  vision §6.12 and Owner direction `2026-09-04-14` item 5. Both pages carry
  a visible "Draft under review" notice stating the exact registered LLC
  legal name is still pending Owner confirmation and that final Owner
  review has not happened yet — **do not remove that notice or treat either
  page as final/publishable until the Owner supplies the exact registered
  entity name and reviews the copy.** Footer legal links (already pointing
  to `/privacy` and `/terms` since round 1) now resolve instead of 404ing.
  Verified: `tsc`/`lint`/`build` clean (27 routes), `h1`→`h2`-only heading
  hierarchy on both pages (measured, no skip), both pages carry `noindex`
  consistent with every other page's staged-release gate, and real in-app
  Browser screenshots at 375px/785px/1440px show no overflow and correct
  contrast on both pages.
- **Found and fixed: `sitemap.ts` didn't list the three new routes.** After
  committing About/Privacy/Terms, re-checked the actual generated
  `sitemap.xml` (not just that the build succeeded) and found `/about`,
  `/privacy`, and `/terms` were missing from `src/app/sitemap.ts`'s
  `staticRoutes` array — they existed and were linked in navigation, but
  would have been invisible to search engines relying on the sitemap. Fixed
  by adding all three; re-verified `.next/server/app/sitemap.xml.body` lists
  all 20 static+dynamic routes. Separate commit (`1ea04eb`).
- **Environment fix, documented for the next agent:** this Windows host's
  Node.js 24.19.0 install
  (`C:\Users\Tcraf\AppData\Local\Programs\NodeJS\node-v24.19.0-win-x64`) and
  the global `pnpm` shim (`%APPDATA%\npm`) are registered in the **User**
  PATH environment variable, but the shell processes this tool session
  spawns do not inherit that PATH (`node`/`pnpm` were both "not recognized"
  until fixed). Workaround used this round: prepend both directories to
  `$env:Path` at the start of each PowerShell tool call that needs
  node/pnpm/next (per-call, since shell state does not persist between
  calls in this harness). This is a session/harness PATH inheritance gap,
  not a missing install — do not reinstall Node or edit the real PATH
  variable to "fix" it.
