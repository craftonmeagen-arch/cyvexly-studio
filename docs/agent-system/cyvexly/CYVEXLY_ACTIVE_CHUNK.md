# Cyvexly Active Chunk

**Chunks:** 3 — Project Planner (opened round 4, in progress) and 4 —
Utility/legal pages (opened round 2, in progress) retain incomplete closure
items. **Chunk 5 — United States Launch Completion & Business Operations is
now OPEN**, started round 29. Its integrated verification will close the
overlapping delivery and launch items in Chunks 3 and 4. Chunk 2 — Core
marketing pages — remains closed but revisitable.

**Round 78** (scheduled/unattended) checked the Auditor inbox
(`IFA-2026-09-07-R69`, 44th consecutive clean confirmation, "PASS WITH
COMMENDATION" on round 76's video via the Auditor's own live CDP run — no
Builder action needed) and found that round 77's "live/CDP verification is
categorically unreachable this session type" conclusion was too broad: only
`preview_start({name})`'s dev-server launch is refused for unattended
sessions. Starting `next dev` manually via the Bash tool and attaching with
`preview_start({url: "http://localhost:5173"})` (round 1's own documented
workaround) got genuine compositing screenshots and a real `Tab`-key focus
move this round — both degraded to intermittent partway through, matching
rounds 35/40's pattern. Used the working window to close round 76's named
proof-instrument gap with genuine positive evidence: `document.hidden` read
`false` (not stuck `true` as in round 76's session), and the ambient video's
`currentTime` advanced 3.24s → 11.14s across a real 3-second wait, proving
actual autoplay progression; independently re-verified the lightbox's
open/Escape-close/focus-return live. No source change — a proof-gap-closure
and environment-capability round. Full detail in
`CYVEXLY_APP_DEBT.md`'s "Round 78" and `CYVEXLY_TOOLS_AND_CAPABILITIES.md`'s
round-78 note.

**Round 77** (scheduled/unattended — dev-server preview disabled for
unattended sessions, so proof was source-level only) dispositioned
Auditor item `IFA-2026-09-07-R68` (43rd consecutive clean confirmation,
0 active code defects; its "Production Domain Connection" gate note is
stale, corrected by round 53). Completed the round-76-recommended
field-by-field diff of `service-details.ts` against `site-config.ts`'s
`pricingPackages`/`carePlans`/`servicesGroups` for all 5 services (round
75 checked only one), plus a source-level accessibility scan (zero
`<img>`/`<Image>` anywhere in `src/`; every form input in
`contact-form.tsx` and the shared Planner `FieldShell` has a real
`<label htmlFor>` and wired `aria-invalid`/`aria-describedby`). **No
defect found** in either — genuine negative results, no source change.
See `CYVEXLY_APP_DEBT.md`'s "Round 77" and
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

**Round 76** (interactive session, Owner direction `2026-09-06-17`)
added a Home "So how does it work?" section: a supplied process video
embedded under the "We're not a DIY builder" panel as a silent,
looping, chrome-less ambient clip that expands to a controllable
lightbox on click. Found and fixed a real bug during verification — the
lightbox's `fixed` overlay wasn't actually viewport-fixed because a
`backdrop-filter` ancestor (the sitewide glass treatment) created a new
CSS containing block — by portaling the modal to `document.body`. See
the round-76 report below and `CYVEXLY_OWNER_DIRECTION.md`.

**Round 75** (scheduled/unattended, 50-minute limit) dispositioned Auditor
item `IFA-2026-09-06-R64` (39th consecutive clean confirmation, 0 active
code defects, reviewed commit `7db867c`, round 73's head). Actioned its
one recommendation: replaced the last 4 remaining pre-refresh `#1478FF`
literals (the `gradient` Tailwind class strings in `site-config.ts`,
confirmed inert since round 73) with the current `#0F66E0` token —
zero visual effect, full sitewide token consistency. Adversarially
diffed `service-details.ts`'s "From $X" package prices against
`pricingPackages`/`carePlans`' bare "$X" (plus the JSON-LD price
extractor) per the round-74 handoff's recommended next surface: both
render paths independently label the figure as a starting price, and
structured data extracts the numeric value regardless of a "From "
prefix — a genuine negative result, not a defect. See the round-75
report below and `CYVEXLY_APP_DEBT.md`'s "Resolved round 75" section.

Round 74's inline summary is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_74_REPORT.md` (moved
round 77 to restore hot-file headroom; `CYVEXLY_APP_DEBT.md`'s round-74
entry and the round-74 full report below already preserve the detail).
Round 74 found 0 new defects (extended color-token/truth audit, no
source change).

Rounds 71-73's inline summaries are archived (moved round 76 to restore
hot-file headroom; each round's full report and `CYVEXLY_APP_DEBT.md`
"Resolved round N" entry already preserve the detail):
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_71_REPORT.md` (dead-end
`/work` filter fix), `..._ROUND_72_REPORT.md` (Planner validation-bypass
fix), `..._ROUND_73_REPORT.md` (case-study color-token staleness fix).

Round 69-70's inline summaries are archived (moved round 76 to restore
hot-file headroom): `CYVEXLY_APP_DEBT.md`'s "Resolved round 69"/
"Resolved round 70" and their full reports below preserve the detail
(text-cursor/editable-looking-copy fix, Home FAQ CMS-claim
qualification).

**Round 68** (scheduled/unattended, 50-minute limit) dispositioned
Auditor item `IFA-2026-09-06-R57` (33rd consecutive confirmation, 0
active code defects) and, moving to a fresh surface per round 67's
recommendation, found/fixed a real gap on a fourth surface:
`robots.ts` never declared the `Sitemap:` directive pointing at the
real `sitemap.xml`. See the round-68 report below and
`CYVEXLY_APP_DEBT.md`'s "Resolved round 68" section.

**Round 67** (scheduled/unattended, 50-minute limit) dispositioned Auditor
item `IFA-2026-09-06-R56` (32nd consecutive confirmation, 0 active code
defects) and, continuing round 66's field-by-field adversarial diff of
the Planner pipeline, found/fixed a second real defect on the same
route: the "Secondary goals" checkbox group's raw ids were never mapped
to human labels in the email. See the round-67 report below and
`CYVEXLY_APP_DEBT.md`'s "Resolved round 67" section.

**Round 66** (scheduled/unattended, 50-minute limit) dispositioned Auditor
item `IFA-2026-09-06-R55` (31st consecutive confirmation, 0 active code
defects) and found/fixed a real data-loss defect: the Planner's four
visual-direction style sliders (`data.spectrum`) were never read
server-side, so that step's answers never reached the notification
email. See the round-66 report below and `CYVEXLY_APP_DEBT.md`'s
"Resolved round 66" section.

**Round 65** (scheduled/unattended, 50-minute limit) dispositioned
Auditor item `IFA-2026-09-06-R54` (30th consecutive confirmation) and
found/fixed an unbounded request-body-size defect on both API routes.
See the round-65 report below.

**Round 64** (scheduled/unattended, 50-minute limit) dispositioned Auditor
item `IFA-2026-09-06-R53` (29th consecutive confirmation, reviewed commit
`47874b9`, round 62's HEAD, predating round 63's timing-safe-comparison
fix) and ran a fresh adversarial re-review of the mailer/rate-limiter/
origin-gate surface plus a sitewide truth-claim sweep — 0 new defects
found. See the round-64 report below and `CYVEXLY_APP_DEBT.md`'s
"Resolved round 64" section.

Round 63 fixed a timing-side-channel weakness in round 62's own new
`isTrustedOrigin()` gate (archived report; see `CYVEXLY_APP_DEBT.md`'s
"Resolved round 63" section).

**Round 62** (scheduled/unattended, 50-minute limit) found no new
Auditor item and instead prepared dormant, Builder-reachable scaffolding
for the round-60-named Cloudflare-bypass gap: an origin-secret header
check that stays inert until the Owner adds a matching Cloudflare
Transform Rule and Render env var. See the round-62 report below and
`CYVEXLY_APP_DEBT.md` item 3.

**Round 61** (scheduled/unattended, 50-minute limit) dispositioned Auditor
item `IFA-2026-09-06-R51` (27th consecutive confirmation, 0 active code
defects) and found/fixed a second real defect in round 60's own new
rate-limiter code: the in-memory tracking `Map` never deleted a key, so
an attacker varying its own key (the spoofable `x-forwarded-for`
fallback) could grow it without bound — a memory-exhaustion DoS. See the
round-61 report below and `CYVEXLY_APP_DEBT.md`'s "Resolved round 61"
section.

**Round 60** (scheduled/unattended, 50-minute limit) dispositioned Auditor
item `IFA-2026-09-06-R50` (26th consecutive confirmation, 0 active code
defects) and found/fixed a real security defect no prior Auditor round
had named: the Contact/Planner rate limiter's client-IP detection was
trivially bypassable via a spoofed `X-Forwarded-For` header. See the
round-60 report below and `CYVEXLY_APP_DEBT.md`'s "Resolved round 60"
section.

**Round 59** (scheduled/unattended, 50-minute limit) dispositioned Auditor
item `IFA-2026-09-06-R49` (25th consecutive confirmation, 0 active code
defects; its hot-file-cap observation on `CYVEXLY_CURRENT_STATE.md` was
already stale, fixed round 58) and fixed the one real finding it raised:
the Home route's meta description at 166 chars, 6 over the ~155-160 char
budget round 57 established sitewide. See the round-59 report below and
`CYVEXLY_APP_DEBT.md`'s "Resolved round 59" section.

**Round 58** (scheduled/unattended, 50-minute limit) dispositioned Auditor
item `IFA-2026-09-06-R48` (24th consecutive confirmation, 0 active code
defects; its "Production Domain & DNS Connection" gate note is stale,
corrected by round 53) and fixed the one real finding it raised: a
hot-file-cap violation in `CYVEXLY_CURRENT_STATE.md` (archived rounds
52-56's duplicated detail, rewrote it as a lean dashboard). Also found and
fixed a rotation-order defect in `CYVEXLY_NEXT_BUILDER_HANDOFF.md` (round
54 had stayed live out of order ahead of round 55), and shipped an
`html lang="en"` → `en-US` correction matching the US-only launch market
(named as untried in round 57's handoff). See the round-58 report below
and `CYVEXLY_APP_DEBT.md`'s "Resolved round 58" section.

**Round 55** (scheduled/unattended, 50-minute limit) dispositioned Auditor
item `IFA-2026-09-06-R45` (21st consecutive confirmation, 0 active code
defects; reviewed commit `26bc8b2`, predating round 54's per-slug OG
images) and shipped Service JSON-LD for the five `/services/[slug]`
detail pages — previously the only structured-data type missing from the
site's core commercial routes. See the round-55 report below and
`CYVEXLY_APP_DEBT.md`'s "Resolved round 55" section.

**Round 54** (interactive session) dispositioned Auditor item
`IFA-2026-09-06-R44` (20th consecutive confirmation, 0 active code
defects; its "domain DNS still needed" gate note was stale, already
corrected by round 53) and shipped per-slug Open Graph images for the
`services/[slug]` and `work/[slug]` dynamic routes — the exact gap round
52's handoff named as pre-existing and untried. See the round-54 report
below and `CYVEXLY_APP_DEBT.md`'s "Resolved round 54" section.

**Round 53** (interactive session, Owner direction `2026-09-05-15` — "take
Cyvexly to production-ready and launch-ready") verified the domain/HTTPS/
canonicalization is already fully live (correcting a stale debt entry),
replaced Contact/Planner `mailto:` submission with real server-side email
delivery via Resend, added dormant GA4/GSC scaffolding, fixed a stale
Privacy Policy section, and ran a sitewide audit finding zero defects. See
the round-53 report below and `CYVEXLY_APP_DEBT.md` items 1-2.

**Round 52** (scheduled/unattended, 50-minute limit) dispositioned the
nineteenth consecutive Auditor confirmation (`IFA-2026-09-06-R43`, 0 active
code defects) and shipped per-route Open Graph images — every route shared
Home's single generated `opengraph-image`, so shared links for About/
Services/Pricing/Work/Process/Contact/FAQ/Project Planner all showed the
same generic Home preview. See the round-52 report below and
`CYVEXLY_APP_DEBT.md`'s "Resolved round 52" section.

**Round 51** (scheduled/unattended, 50-minute limit) dispositioned the
eighteenth consecutive Auditor confirmation (`IFA-2026-09-06-R42`, 0 active
code defects) and shipped sitewide Open Graph and Twitter Card metadata —
every route had `title`/`description`/canonical but none defined
`og:site_name`, `og:type`, `og:locale`, or `twitter:card`, so shared links
carried no branded preview and Twitter/X never rendered the large-image
card at all. See the round-51 report below and `CYVEXLY_APP_DEBT.md`'s
"Resolved round 51" section.

**Round 50** (scheduled/unattended, 50-minute limit) dispositioned the
seventeenth consecutive Auditor confirmation (`IFA-2026-09-05-R41`, 0 active
code defects), fixed a real hot-memory rotation defect in this file (round
47's report had gone un-archived and round 48's report was accidentally
duplicated in its place), and shipped COOP/CORP security headers plus a
`/.well-known/security.txt` file. See the round-50 report below and
`CYVEXLY_APP_DEBT.md`'s "Resolved round 50" section.

**Round 29** (scheduled/unattended, 50-minute limit) opens Chunk 5 and closes
one bounded workstream: public contact identity (`design@cyvexly.com`, `(317)
572-5780`) sitewide, the code-only half of production metadata/discovery
(`metadataBase`, `sitemap.xml`), and a United States-only truth audit removing
stale "worldwide"/international-market and unsupported-payment-method claims.
See the round-29 report below and `CYVEXLY_APP_DEBT.md`'s "Resolved round 29"
section. Chunk 5's About page, Privacy/Terms, real inquiry delivery,
domain/DNS connection, analytics, and full release QA remain open — this is
one workstream, not chunk completion.

**Current status:** see `CYVEXLY_PROJECT_CHUNK_MAP.md`'s Chunk 2/3/4/5 entries
for the live progress dashboard. Rounds 14-28's detailed narrative (Planner
UI, Home reel/glass-theme rollout, Services/Pricing rebuilds) is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_HISTORICAL_STATUS_ARCHIVE.md` (moved
round 74 to restore hot-file headroom).

## Active chunk boundaries

### Chunk 3 — Project Planner

- **Outcome:** A calm, nine-step conversational form at `/start`, covering the
  complete vision field plan and eventually sending a real automatic
  confirmation email from Cyvexly.
- **Built:** UI, state, validation, conditional fields, review/edit, draft save,
  responsive progress rail, and DOM/accessibility-tree audit.
- **Remaining:** the real server-side delivery path. The production domain is
  now confirmed; a business-inbox/transactional-email provider, credentials,
  sending-domain verification, internal receipt, visitor confirmation, and
  production delivery proof remain.
- **Closure boundary:** the UI remains fully proved and the delivery gap is
  implemented and publicly proved after provider/account authorization; if an
  account gate remains, it must be named precisely rather than treated as an
  unknown domain decision.

### Chunk 4 — Utility, legal & launch readiness

- **Outcome:** utility/legal routes, metadata assets, and launch-readiness
  conditions from vision §15.
- **Built:** custom 404, FAQ, Accessibility statement, favicon/ICO, OG image,
  robots/no-index preview default.
- **Remaining:** logo-led About, Indiana/United States Privacy/Terms, exact LLC
  legal-name confirmation, `cyvexly.com` DNS/HTTPS/canonical setup,
  production-domain metadata, sitemap, indexing release, analytics/search
  ownership, and full production QA. Chunk 5 owns this integrated completion.

### Chunk 5 — United States Launch Completion & Business Operations (NEXT)

- **Authority:** Owner direction `2026-09-04-14`, vision §17, and the Chunk 5
  entry in `CYVEXLY_PROJECT_CHUNK_MAP.md`.
- **Outcome:** launch a truthful, contactable, searchable, legally coherent
  United States business site on canonical `https://cyvexly.com`.
- **Required scope:** domain/HTTPS/canonical redirects; metadata/canonicals/
  social URLs/sitemap/staged robots; `design@cyvexly.com` and public phone;
  logo-led About; Indiana/United States Privacy and Website Terms; secure real
  Contact/Planner delivery and visitor confirmation; privacy-aware analytics
  and search ownership; United States/payment/portfolio truth audit; complete
  public release QA.
- **Deferred:** payment-provider integration and real-client portfolio
  replacement. Do not invent, activate, or claim either.
- **Owner gates:** exact registered LLC name; account-bound DNS/Render access;
  inbox/transactional-email provider authorization and securely entered
  secrets; analytics/Search Console ownership or no-analytics decision; About/
  legal/public-visual review; final indexability approval.
- **Closure boundary:** all Chunk 5 requirements pass on the production domain,
  and the carried Chunk 3/4 operational items are closed. A partial domain-only,
  legal-only, or UI-only release does not close this chunk.

## Round 76 report — global round 76 (interactive session, Owner direction 2026-09-06-17)

Owner (via interactive Claude Code chat) asked for a supplied local
video (`cyvexley video.mp4`, a Project Planner intake-flow screen
recording, 640×368, ~28.3s) to be added to Home under the "We're not a
DIY builder" panel, sized like the existing tiles (not full-bleed), in
a seamless look, under a new "So how does it work?" heading; a
follow-up message specified a silent looping ambient embed that never
looks pausable, with click/Enter opening a larger controllable view.
Explicitly confirmed as Owner-direction work. Full transcript recorded
in `CYVEXLY_OWNER_DIRECTION.md`'s "Home 'how does it work?' process
video 2026-09-06-17".

**Built:** `src/components/how-it-works-video.tsx` — an ambient inline
loop (autoplay, muted, `loop`, no visible controls, no click-to-pause,
respects reduced-motion/data-saver/tab-visibility like the existing
Home hero video) with a subtle corner "expand" icon (never a play/pause
icon) that opens a `createPortal`-rendered lightbox with real native
`<video controls>`, closable via close button/Escape/backdrop click,
with focus moved to the close control on open and returned to the
trigger on close. Copied the source video to
`public/media/cyvexly-how-it-works.mp4` and generated a poster frame
(`cyvexly-how-it-works-poster.webp`) via an in-browser canvas capture
(no ffmpeg/ffprobe available on this host — used the Browser pane's
`javascript_tool` to draw a video frame to canvas and encode WebP,
avoiding a raw/unposterized video element). Wired into
`src/app/page.tsx`'s "The difference" section, inside the same
`max-w-6xl` container as the existing DIY-builder panel (not a separate
full-width section) so it reads as one continuous tile stack.

**Found and fixed a real bug during verification, not just a proof
gap.** The first implementation rendered the lightbox in place with
`fixed inset-0`. Live CDP inspection showed the overlay's
`getBoundingClientRect()` at a negative, scroll-dependent Y offset
instead of `(0,0)` — several glass-panel ancestors on this page set
`backdrop-filter` (the sitewide frosted-glass treatment), which — like
`transform`/`filter`/`perspective`/`will-change: transform` — creates a
new containing block for `position: fixed` descendants per the CSS
spec. The overlay was fixed to that ancestor, not the viewport, so a
backdrop click at a real viewport corner missed it entirely. Fixed by
rendering the modal through `createPortal(..., document.body)`; since
`isOpen` is `false` on both server and first client render, no separate
mount-detection effect was needed (avoided a `react-hooks/set-state-in-
effect` lint error this way too). Re-verified: dialog is now a direct
child of `<body>`, `getBoundingClientRect()` matches the window exactly
regardless of scroll position, and a backdrop-corner click now closes
it.

**Verified live via CDP:** inline video decodes correctly (`readyState
4`, plays with no error when forced); click and Enter/Space both open
the modal; clicking the video panel itself does not close it
(`stopPropagation` confirmed); Escape and the close button both close
it and restore focus/body scroll; zero horizontal overflow at 375px.
One honest proof-instrument limitation: this session's Browser pane
consistently reports `document.hidden = true` even when the tab is the
sole/fronted one (a`document.hidden`-driven pause is part of the
established sitewide video pattern, matching the Home hero video), so
autoplay-on-load could not be positively confirmed via the Page
Visibility API in this session — real screenshots taken earlier in the
same session (before this check was added) did show the frame content
visibly advancing over time, and manual `.play()` calls succeed with no
error, so the underlying playback path is sound; this is a session
proof-instrument limitation, the same class already recorded in
`CYVEXLY_WATCH.md` for this session type, not an unresolved product
defect. `tsc --noEmit`/lint/`pnpm run build` all clean (same
pre-existing round-42 evidence-script lint warning, untouched); a real
`next start` 21-route sweep (including both new media files) all
returned 200.

Cleaned up: stopped the owned `next start`/`next dev` listeners on port
5173 by verified PID; removed scratch log/base64 files from `$env:TEMP`
and the session scratchpad.

Round 75's full report is archived at
`docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND_75_REPORT.md` (moved
there round 76 to keep this file under its 30,720-byte hot-file cap).
Round 75 completed brand-color token consistency in decorative gradient
strings.

Rounds 42-73's full reports are each archived at their correspondingly
named `docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUND(S)_<N>_REPORT.md`
files (consolidated round 77 to keep this file under its 30,720-byte
hot-file cap; no history lost — one-line outcomes only, full detail in
each archive file and `CYVEXLY_APP_DEBT.md`'s matching "Resolved round
N" entry): 73 case-study/artwork color-token staleness fix; 72 Planner
Review-page validation-bypass fix; 71 `/work` dead-end filter-pill fix +
hot-file-cap fix; 70 text-cursor/editable-copy fix; 69 Home FAQ CMS-
claim qualification; 68 `robots.ts` missing `Sitemap:` fix; 67 Planner
secondary-goals-label fix; 66 Planner spectrum data-loss fix; 65
request-body-size cap; 64 0 new defects (source-only re-review); 63
timing-safe-comparison fix; 62 dormant Cloudflare-bypass gate; 61 rate-
limiter memory-pruning fix; 60 rate-limiter IP-spoofing fix; 59 Home
meta-description fix; 58 `lang="en-US"` + hot-file-cap + handoff-
rotation fix; 55 Service JSON-LD; 54 per-slug OG images; 53 full launch-
readiness pass (domain/HTTPS live, real Resend delivery, GA4/GSC
scaffolding); 51 sitewide OG/Twitter metadata; 50 COOP/CORP headers +
security.txt + rotation fix; 49 error boundaries + viewport theme-color;
48 raster manifest icons + print-legibility fix; 45 BreadcrumbList
JSON-LD; 44 FAQPage JSON-LD; 43 sitewide Organization JSON-LD; 42
Contact honeypot fix + first live Planner-honeypot verification.

Rounds 40-41 full reports are archived at docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_40_41_REPORT.md (moved there round 44 to restore latest-three rotation). Round 41 closed both of round 40's named QA candidates (WCAG 1.4.10 reflow/zoom, a Back-button re-check) with no defect found. Round 40 found and fixed the Planner step-advance scroll/focus/live-region defect (`71d233f`).

Rounds 31-39 full reports are archived at docs/archive/chunks/CYVEXLY_ACTIVE_CHUNK_ROUNDS_31_39_REPORT.md (moved there round 43 to restore latest-three rotation). Summarized outcomes remain in CYVEXLY_BUILD_SUMMARY.md and CYVEXLY_APP_DEBT.md.

## Prior round summaries

Rounds 1-29's full reports (Chunk 1/2 foundation, Chunk 3 Planner build,
Chunk 4 utility/legal pages, the shared Home/Services/Pricing visual systems,
the favicon/CDP-rendering/compositor-limitation methodology work, the
architectural-glass theme rollout and Owner-rejection corrections, and the
Chunk 5 opening workstream) are each individually archived at their
correspondingly named `docs/archive/chunks/CYVEXLY_CHUNK*`/
`CYVEXLY_SHARED_*` files (unchanged — this section previously duplicated
each pointer inline; consolidated round 72 to keep this file under its
30,720-byte hot-file cap, no history lost).
