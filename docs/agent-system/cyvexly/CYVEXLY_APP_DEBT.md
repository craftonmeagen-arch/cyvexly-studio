# Cyvexly App Debt

## Resolved round 71

- **Checked the Auditor inbox first:** two new items existed
  (`IFA-2026-09-06-R59`, `IFA-2026-09-06-R60`) — the 34th and 35th
  consecutive clean confirmations (0 active code defects). R59 flagged
  `CYVEXLY_CURRENT_STATE.md` over its byte cap; round 69 had already fixed
  that before R60 re-verified it closed. Both moved to `exchange/processed/`.
- **Found and fixed a real, previously-unflagged reachable defect on a
  fresh surface (`/work`'s filter UI), per round 69/70's recommendation
  to review surfaces not yet given a dedicated pass.** `workFilters` in
  `src/lib/site-config.ts` listed `"Redesign"` and `"Landing Page"` as
  filter pills, but no `selectedWork` item's `category` is ever
  `"Redesign"` or `"Landing Page"` (all three concept projects are
  `"Business Site"` ×2 or `"Commerce"` ×1) — clicking either pill
  guaranteed the empty state ("No projects match that filter yet.") on a
  core marketing page, for every visitor, permanently. Not a truth-claim
  violation (no fabricated work), but a real dead-end interactive control.
- **Fixed:** trimmed `workFilters` to `["All", "Business Site", "Commerce",
  "Concept"]` — every remaining filter matches at least one real item. Did
  not fabricate a new concept project to fill the missing categories
  (out of proportion to the defect, and not requested).
- **Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
  pre-existing, unrelated round-42 evidence-script lint warning,
  untouched). Real `next start` server on port 5173: a scripted click of
  every filter pill confirmed 0 empty states (`All`→3, `Business Site`→2,
  `Commerce`→1, `Concept`→3 cards); an 18-route sweep (all public static
  and dynamic routes plus `robots.txt`/`sitemap.xml`) returned 200.
- **Independently found and fixed a second real reachable defect: this
  file itself was already 2669 bytes over its 30720-byte hot-file cap**
  at round start (33389 bytes, confirmed via
  `.codex/roles/scripts/Test-HotFileCaps.ps1` — the same automated check
  the Auditor uses for `CYV-DOC-*` findings), from rounds 48-55's detail
  never having been rotated. Archived rounds 50, 51, and 55's full detail
  to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_{50,51,55}_ARCHIVE.md`;
  re-verified 0 hot-file-cap violations after the edit.
- Cleaned up: stopped the owned `next start`/`next dev` listeners
  (verified the real listener PID via `Get-NetTCPConnection -LocalPort
  5173 -State Listen`, not process name). Two scratch log files
  (`next-dev-5173.log`, `next-start-5173.log`) under `$env:TEMP` could not
  be removed this round (Windows reported them locked after the owning
  process exited) — same transient lock behavior round 48 hit with a
  Chrome profile directory; left in place as disposable OS-temp artifacts,
  next round should retry `Remove-Item` and report if it persists.

## Resolved round 70

- **Dispositioned fresh Owner direction `2026-09-06-16`** (text-cursor/
  editable-looking body copy defect, "on cyvexly i can click on any of
  the wording and a toggle shows as if i can type"). No new Auditor
  inbox item existed this round (`exchange/operational-inbox/` empty).
- **Reproduced live** on the real `next dev`/`next start` runtime:
  `getComputedStyle` on `h1`/`p` returned `cursor: "auto"`,
  `isContentEditable: false`, `document.designMode: "off"` — confirmed
  this is the browser's own default I-beam cursor over selectable text
  (universal on every website), not a Cyvexly-specific `contentEditable`/
  input-like styling bug. `grep` across `src/` found zero existing
  `cursor`/`contentEditable`/`user-select` rules.
- **Fixed as a real, reachable polish defect per the Owner's request**,
  without an accessibility regression: added a `cursor: default` rule
  (in `@layer base`) on non-interactive prose elements (`p`, `h1`-`h6`,
  `blockquote`, `figcaption`, `dt`, `dd`) plus an explicit
  `cursor: pointer` restoration on `a`/`button`/`[role="button"]`/
  `summary` so every real interactive control — including inline links
  nested inside a paragraph (`/privacy`, `/terms`, `/accessibility`,
  `/services/[slug]`'s "Return to all services") — keeps its pointer
  affordance. Left `user-select` untouched: text stays fully selectable/
  copyable, since disabling selection is a known usability/accessibility
  anti-pattern the Owner did not ask for ("doesn't hurt anything...
  should be fixed" targeted the visual affordance, not selectability).
- **Caught and fixed a real regression during verification, before
  committing:** the first version of this rule sat outside any
  `@layer`, so it unconditionally beat Tailwind utility classes like
  `disabled:cursor-not-allowed` regardless of specificity (Tailwind v4's
  own utilities live inside `@layer utilities`, and any unlayered rule
  outranks a layered one per the CSS cascade-layers spec) — live-tested
  on `/start`'s Planner progress rail, every not-yet-reached step button
  (`disabled`, class `cursor-not-allowed`) showed computed `cursor:
  "pointer"` instead of `"not-allowed"`. Moved the new rule inside
  `@layer base` (below Tailwind's own `utilities` layer in cascade
  order) and re-verified: disabled Planner buttons now correctly report
  `cursor: "not-allowed"` again, enabled buttons/links stay `"pointer"`,
  and prose stays `"default"`.
- **Verified:** `tsc`/`lint`/`build` clean (one pre-existing unrelated
  lint warning in a round-42 evidence script, not touched). Real
  `next start` on port 5173: computed-style checks on Home (`h1`/`p`
  → `default`), `/start` (all button states correct including
  `not-allowed`), `/privacy` (18 inline links all `pointer`),
  `/services/business-websites` ("Return to all services" `pointer`),
  `/contact` (submit button `pointer`), `/faq` (accordion buttons
  `pointer`). 12-route sitewide sweep all 200.
- **Environment fix, documented for the next round:** this scheduled
  session's PowerShell had no `node`/`npm`/`pnpm` on `PATH` at all
  (`Get-Command` failed for all three) even though `CYVEXLY_TOOLS_AND_
  CAPABILITIES.md` records them as installed — a stale/incomplete
  session PATH, not a missing install. Found real binaries at
  `C:\Users\Tcraf\AppData\Local\Programs\nodejs\node-v24.19.0-win-x64\
  node.exe` and `C:\Users\Tcraf\AppData\Roaming\npm\pnpm.cmd`/`.exe`
  and added both directories to `$env:Path` for this session only (no
  system/user environment-variable change made). If a future round hits
  "'pnpm'/'node' is not recognized" again, apply the same two-directory
  `$env:Path` addition before concluding the tool is unavailable.
- Cleaned up: stopped the owned `next start`/`next dev` listeners
  (verified the real listener PID via `Get-NetTCPConnection -LocalPort
  5173 -State Listen`, not by process name — this host runs many
  unrelated pre-existing `node.exe` processes); removed the scratch
  `next-dev-5173.log`/`next-start-5173*.log`/`rebuild.log` files from
  `$env:TEMP`; closed the owned Browser pane tab implicitly by not
  reusing it further. Left the pre-existing uncommitted
  `CYVEXLY_OWNER_DIRECTION.md`/`ARCHIVE.md` hot-file-cap archival edits
  (found already staged-but-uncommitted at round start, content
  verified correct/complete) to be committed together with this round's
  work rather than discarded.

## Resolved round 69

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R58`** — a
  thirty-fourth consecutive independent confirmation (reviewed commit
  `0cc8f61`, round 67's HEAD, predating round 68's robots.ts fix), 0
  active code defects. Moved to `exchange/processed/`.
- **Reviewed round 68's recommended surfaces** — `/about`/`/privacy`/
  `/terms` copy and `service-details.ts` — no defects found on either.
- **Found and fixed a real, previously-unflagged truth-claim defect on
  an adjacent surface (`site-config.ts`'s `faqPreview`).** The Home FAQ
  preview's answer to "Will I be able to update my website myself?"
  claimed "Yes. Every site includes an editable CMS or content
  workflow" — but the Signal package's own `pricingPackages` scope list
  has no CMS line item, and `service-details.ts`'s own answer to the
  same question is explicitly conditional ("When regular updates are
  part of the brief, we can include an appropriate CMS..."). The
  Services page also lists "Content & CMS" as its own separately-scoped
  service group, confirming CMS was never a universal inclusion —
  exactly the "inconsistent service descriptions"/"unsupported claims"
  category Owner direction `2026-09-04-14`'s truth audit names.
- **Fixed:** reworded `faqPreview`'s answer to "Most projects include an
  editable CMS or content workflow scoped to your plan and comfort
  level, with training included at handoff — the exact editable areas
  are agreed before build," matching `service-details.ts`'s existing
  qualified wording.
- **Verified:** `tsc`/`lint`/`build` clean. Real `next start` on port
  5173: confirmed the corrected sentence in the rendered Home page's
  RSC output; a 12-route sitewide sweep all 200. Committed (`7239d3b`)
  and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `netstat`/`taskkill` first); removed scratch
  response captures.

## Resolved round 68

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R57`** — a
  thirty-third consecutive independent confirmation (reviewed commit
  `33e3f4c`, round 66's HEAD, predating round 67's secondary-goals-label
  fix), 0 active code defects. Moved to `exchange/processed/`.
- **Moved to a fresh surface per round 67's recommendation** (Contact
  client JS, `site-config.ts`, JSON-LD generation) — reviewed all
  three, no defects found. Contact's client JS matches the server
  route field-for-field; `pricingPreview`/`pricingPackages` stay in
  sync; US-only/payment-deferral copy is consistent; `structured-
  data.ts`'s JSON-LD builders reuse only real published copy.
- **Found and fixed a real, previously-unflagged gap on an adjacent
  surface:** `src/app/robots.ts` never declared a `Sitemap:` directive,
  even though `src/app/sitemap.ts` already builds a real 20-route
  sitemap — a standard, zero-cost crawler-discovery convention serving
  Owner direction `2026-09-04-14`/vision §17's sitemap/robots/
  indexing-readiness workstream.
- **Fixed:** `robots.ts` now returns `sitemap: \`${SITE_URL}/sitemap.xml\``
  (reusing `layout.tsx`'s existing `SITE_URL` constant), in both index
  and no-index modes.
- **Verified:** `tsc`/`lint`/`build` clean. Real `next start` on port
  5173: `curl /robots.txt` shows the new `Sitemap:` line alongside the
  existing `Disallow: /`; `/sitemap.xml` unchanged; a 12-route sitewide
  sweep all 200. Committed (`ce28c0e`) and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `netstat`/`taskkill` first); removed the scratch
  server log.

Round 67's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_67_ARCHIVE.md` (moved there
round 69 to keep this file under its 30,720-byte hot-file cap): the
Planner secondary-goals-label mapping fix.

## Resolved round 66

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R55`** — a
  thirty-first consecutive independent confirmation (reviewed commit
  `846975d`, round 64's HEAD, predating round 65's body-size-cap fix), 0
  active code defects at the reviewed commit. Moved to
  `exchange/processed/`.
- **Found and fixed a real data-loss defect on a third surface**
  (mailer/rate-limiter/origin-gate and the Planner sanitize/validate
  pipeline had each gone a round clean): diffed every `PlannerData`
  field (`src/lib/planner-config.ts`) against every `raw.<field>` read
  in `src/app/api/planner/route.ts`. The Planner's "Visual direction"
  step's four style sliders (`data.spectrum`) had no corresponding
  server read at all — every other ~47 fields did — so that whole
  step's answers were silently dropped before reaching
  `design@cyvexly.com`, contrary to Owner direction `2026-09-04-14`'s
  "All project-planner answers" requirement.
- **Fixed:** `src/app/api/planner/route.ts` now reads `raw.spectrum`,
  keeping only known `visualSpectrums` ids paired with an in-range
  integer (0-4, matching the client's step slider) and adds a new
  "Style spectrum" email row (e.g. `Minimal ↔ Expressive: 3/4`).
- **Verified:** `tsc`/`lint`/`build` clean. Real `next start` on port
  5173 with a temporary debug log (removed before commit): a mixed
  payload (3 valid ids, 1 unknown id, 1 non-numeric value) produced
  exactly the 3 valid labels with no crash; an absent `spectrum`
  produced `[]`, no crash — both still reached the existing 503
  not-configured response. Regression: valid payload still 503;
  missing fields still 400 with the same field-error set; malformed
  JSON still 400; 150KB body still 413s; Contact route unaffected; a
  12-route sitewide sweep all 200. Committed (`4a7b26f`) and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID first); removed all scratch payload/log files.

Round 65's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_65_ARCHIVE.md` (moved there
round 68 to keep this file under its 30,720-byte hot-file cap): the
request-body-size-cap fix on both API routes.

Round 64's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_64_ARCHIVE.md` (moved there
round 65 to keep this file under its 30,720-byte hot-file cap): the
30th consecutive audit confirmation plus a clean adversarial re-review.

Round 63's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_63_ARCHIVE.md` (moved there
round 64 to keep this file under its 30,720-byte hot-file cap): the
timing-safe-comparison fix for `isTrustedOrigin()`.

Round 62's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_62_ARCHIVE.md` (moved there
round 63 to keep this file under its 30,720-byte hot-file cap): prepared
the dormant Cloudflare-bypass origin-secret gate.

Round 61's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_61_ARCHIVE.md` (moved there
round 62 to keep this file under its 30,720-byte hot-file cap): the
rate-limiter memory-pruning fix.

Round 59's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_59_ARCHIVE.md` (moved there
round 66 to keep this file under its 30,720-byte hot-file cap): fixed
Home's meta description overage.

Round 58's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_58_ARCHIVE.md` (moved there
round 66 to keep this file under its 30,720-byte hot-file cap): shipped
`html lang="en-US"` and fixed a hot-file-cap violation plus a handoff
rotation-order defect.

Round 57's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_57_ARCHIVE.md` (moved there
round 67 to keep this file under its 30,720-byte hot-file cap): round 57
trimmed 5 oversized meta descriptions past the search-snippet budget.

Round 54's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_54_ARCHIVE.md` (moved there
round 57 to keep this file under its 30720-byte hot-file cap): round 54
added per-slug Open Graph images for `services/[slug]` and `work/[slug]`.

Round 56's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_56_ARCHIVE.md` (moved there
round 60 to keep this file under its 30720-byte hot-file cap): round 56
added OfferCatalog JSON-LD to `/pricing`.

Round 55's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_55_ARCHIVE.md` (moved there
round 71 to keep this file under its 30720-byte hot-file cap): round 55
added Service JSON-LD to the five `/services/[slug]` detail pages.

Round 52's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_52_ARCHIVE.md` (moved there
round 56 to keep this file under its 30720-byte hot-file cap): round 52
added per-route Open Graph images for the 8 static marketing routes and
proved the dynamic-route OG-image gap was pre-existing.

Round 46's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_46_ARCHIVE.md` (moved there
round 52 to keep this file under its 30720-byte hot-file cap): round 46
removed 5 dead scaffold SVG assets and added the Web App Manifest.

Round 51's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_51_ARCHIVE.md` (moved there
round 71 to keep this file under its 30720-byte hot-file cap): round 51
added sitewide Open Graph and Twitter Card metadata.

Round 50's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_50_ARCHIVE.md` (moved there
round 71 to keep this file under its 30720-byte hot-file cap): round 50
added COOP/CORP security headers and `/.well-known/security.txt`, and
fixed a hot-memory rotation defect.

Round 49's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_49_ARCHIVE.md` (moved there
round 55 to keep this file under its 30720-byte hot-file cap). Round 49
added route-segment/root-layout error boundaries and viewport theme-color/
color-scheme metadata.

Round 48's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_48_ARCHIVE.md` (moved there
round 71 to keep this file under its 30720-byte hot-file cap): round 48
added raster 192/512 PNG manifest icons and fixed a print-legibility
defect.

Round 47's full detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_47_ARCHIVE.md` (moved there
round 52 to keep this file under its 30720-byte hot-file cap). Round 47
implemented the Apple touch icon.

Rounds 44-45 full detail are archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUNDS_44_45_ARCHIVE.md` (moved there
round 49 to keep this file under its 30720-byte hot-file cap): round 45
added BreadcrumbList JSON-LD for service-detail/case-study routes; round 44
added FAQPage JSON-LD for `/faq`.

Round 43 detail is archived at
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_43_ARCHIVE.md` (moved there
round 48 to keep this file under its 30720-byte hot-file cap). Round 43
found the site had no structured data at all and added sitewide
Organization JSON-LD.

## Open

1. **RESOLVED round 53 (verified live, not a code change).** This item's
   text below claimed the DNS/Render connection was still open and required
   Owner account access. Round 53 (interactive session, Owner direction
   `2026-09-05-15`) checked the actual production domain directly — no
   account access needed to observe live DNS/HTTP/TLS behavior — and found
   it fully connected: `http://cyvexly.com` and `http://www.cyvexly.com`
   both 301 to `https://cyvexly.com/`; `https://www.cyvexly.com` 301s to
   the apex; a valid Google Trust Services certificate is active (the
   domain sits behind Cloudflare in front of the Render origin, confirmed
   via `Server: cloudflare` plus `x-render-origin-server: Render` response
   headers); `robots.txt`, `sitemap.xml`, and per-route canonical/og tags
   all resolve correctly on the live production domain; round 52's per-
   route Open Graph images are already deployed and live. No reachable
   Builder work remains on domain/HTTPS/canonicalization. **Original text,
   preserved for history:** "Production domain is confirmed; the account-
   bound DNS/Render connection remains open. Round 29 closed the reachable
   code-side metadata gap. The Owner confirmed `cyvexly.com`. The domain
   still needs Render custom-domain setup, DNS replacement of the
   Namecheap parking destination, HTTPS verification, root/`www` canonical
   behavior, and public route proof — these require account access this
   Builder does not have."
   **Round 29 update:** `metadataBase` is now set to `https://cyvexly.com` in
   `src/app/layout.tsx`, and a real `src/app/sitemap.ts` (App Router
   `MetadataRoute.Sitemap` special file) now enumerates all 17 built public
   routes (static pages plus every service-detail and case-study slug) with
   the production origin. Verified via a real production `pnpm run build`:
   the generated `.next/server/app/sitemap.xml.body` lists all 17 absolute
   `https://cyvexly.com/...` URLs, and `.next/server/app/index.html`'s baked
   `og:image`/`twitter:image` meta tags now resolve to
   `https://cyvexly.com/opengraph-image?...` instead of the previous
   `http://localhost:3000` fallback — the long-standing domain-blocked
   `metadataBase` warning is gone from the build output. **Round 33:** added
   `alternates: { canonical: ... }` to the root layout and all 13 static/
   dynamic route metadata exports (every `export const metadata`/
   `generateMetadata` in `src/app`), closing the last code-only follow-up
   named above. Staged indexing behavior (`NEXT_PUBLIC_SITE_INDEXABLE`)
   is unchanged and still defaults to no-index; robots.txt already gates on
   the same env var. This closes the code-only portion of item 1 completely;
   the DNS/Render account connection is still the real remaining blocker.
2. **RESOLVED round 53 (code-complete; delivery untested pending Owner
   account).** Contact and Planner now both submit server-side (Next.js
   Route Handlers, `src/app/api/contact/route.ts` and
   `src/app/api/planner/route.ts`) through Resend, per Owner direction
   `2026-09-05-15`. Internal notification goes to `design@cyvexly.com`
   with Reply-To set to the visitor's email; a best-effort visitor
   confirmation is sent with Reply-To `design@cyvexly.com`. Server-side
   validation mirrors every client-side required-field rule; the honeypot
   is re-checked server-side; a per-IP in-memory rate limiter (5/15min) is
   new defense-in-depth; all text is sanitized (control-character/length
   caps, single-line header-injection defense) before use in email
   subjects/headers/bodies. `src/lib/mailer.ts` centralizes this. No secret
   is readable from client code — `RESEND_API_KEY` is read only inside the
   two Node-runtime route handlers.
   **What remains — a real Owner account, not a Builder-reachable gap:**
   1. Create a Resend account (resend.com).
   2. Add `cyvexly.com` (or a subdomain) as a sending domain in Resend and
      add the DNS records Resend generates (SPF/DKIM, account-specific —
      only available after adding the domain) in Namecheap; verify in
      Resend.
   3. Create an API key in Resend and add it to Render's environment
      variables as `RESEND_API_KEY` (a secret — never place it in source,
      docs, or chat). Optionally set `RESEND_FROM_EMAIL` to override the
      default `Cyvexly Studio <notifications@cyvexly.com>`.
   4. Redeploy (Render redeploys automatically on push; setting an env var
      alone also triggers a redeploy).
   **Verified without a real account:** `tsc`/`lint`/`build` clean; a real
   running server with no `RESEND_API_KEY` returns 503 `not-configured`
   (confirmed live on production, not just locally); every required-field
   validation and the honeypot rejection verified via real HTTP requests on
   both routes; the rate limiter verified by exhausting it live; a
   deliberately invalid API key produced a real Resend API auth failure,
   caught as a graceful 502 rather than a crash; a real browser-driven
   (not synthetic) submission on production shows the intended error UI
   and preserves the visitor's entered data. Actual message delivery is
   the one thing that cannot be verified without step 1-3 above.

3. **Dormant round-62 scaffolding for the residual Cloudflare-bypass gap
   named under "Resolved round 60" above — activation is an Owner/account
   step, not a Builder-reachable one.** `isTrustedOrigin()`
   (`src/lib/mailer.ts`), wired into both `/api/contact` and
   `/api/planner`, always passes today (no behavior change) and starts
   rejecting (403) any request missing a matching `x-cf-origin-secret`
   header once `CF_ORIGIN_SECRET` is set in Render. **Exact Owner steps
   to activate:** (1) In the Cloudflare dashboard for `cyvexly.com`: Rules
   → Transform Rules → create a "Modify Request Header" rule matching all
   incoming requests, action "Set static", header name
   `x-cf-origin-secret`, value = a long random secret you choose (this is
   not an API key or account credential — treat it like a password, don't
   paste it into chat or source). (2) In Render, on the `cyvexly-studio`
   web service: add environment variable `CF_ORIGIN_SECRET` set to that
   exact same value, then redeploy (Render also auto-redeploys on env
   changes). Once both match, direct requests to
   `cyvexly-studio.onrender.com` that skip Cloudflare have no way to learn
   or forge the secret and are rejected at the origin. Verified round 62:
   dormant (unset) and activated (set, matching/mismatched/missing header)
   behavior both proved live on a real `next start` server; zero
   regressions across a 14-route sweep. **Round 63:** hardened the secret
   comparison itself from `===` to `timingSafeEqual` (a plain string
   comparison is a timing side-channel once this gate is activated); same
   dormant/activated behavior reverified, no functional change.

Rounds 40-42 detail archived to
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUNDS_40_42_ARCHIVE.md` in round 58
to keep this file under its 30720-byte hot-file cap: Contact-form honeypot
fix plus first live Planner-honeypot verification (round 42), WCAG 1.4.10
reflow/zoom sweep with no defect found (round 41), and the Planner
step-advance scroll/focus/live-region fix (round 40).

Rounds 36-39 detail archived to docs/archive/chunks/CYVEXLY_APP_DEBT_ROUNDS_36_39_ARCHIVE.md in round 43 to keep this file under its 30720-byte hot-file cap: skip-to-main-content fix (round 39), full-site console/network diagnostics sweep (round 38), performance spot-check (round 37), and live production-deployment parity confirmation (round 36).

## Resolved round 35

Archived to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_35_ARCHIVE.md` in
round 42 to keep this file under its 30720-byte hot-file cap: dispositioned
`IFA-2026-09-05-R26` (stale `CYV-IFA-012` re-verification), a full
release-QA sweep (contrast, worldwide/payment-claim grep, sitemap/robots,
canonical tags, link crawl, security headers, live `/about` render), an
in-app-Browser-pane hidden-state tooling note, and corrections to two stale
`CYVEXLY_CHUNK_DEBT.md` entries.

## Resolved rounds 32-34

Archived to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUNDS_32_34_ARCHIVE.md` in
round 40 to keep this file under its 30720-byte hot-file cap: `CYV-IFA-012`
contact-link collision fix (round 34), per-route canonical tags (round 33),
and the corrected static Content-Security-Policy header (round 32, after
catching that the textbook nonce recipe would have broken hydration on this
mostly-static route architecture).

Round 31 detail archived to
`docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_31_ARCHIVE.md` in round 38
(security headers added; first full 27-route release-QA sweep).

## Resolved round 30

Archived to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_30_ARCHIVE.md` in
round 36 to keep this file under its 30720-byte hot-file cap: the built and
verified About page (`src/app/about/page.tsx`), Privacy Policy and Website
Terms drafts (`src/app/privacy`, `src/app/terms` — both still carry a
"Draft under review" notice pending the exact LLC name and Owner review),
and a fixed `sitemap.ts` omission (About/Privacy/Terms were missing from
`staticRoutes`).

- **Environment fix, documented for the next agent — still an active
  per-session workaround, kept inline rather than archived.** This Windows host's
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

## Resolved round 29

Archived to `docs/archive/chunks/CYVEXLY_APP_DEBT_ROUND_29_ARCHIVE.md` in
round 35 to keep this file under its 30720-byte hot-file cap: public
contact-identity replacement (`design@cyvexly.com`/`(317) 572-5780`
sitewide), the United States-only truth audit (removed stale
worldwide/international/payment-method claims), and the code-only
`metadataBase`/`sitemap.xml` fix (see item 1 above).
