# Cyvexly Next Builder Handoff

## Round 76 closeout

**Session:** interactive Claude Code chat, 2026-09-06, Owner direction
`2026-09-06-17`
**Start source:** `55ffb6d` on `main` (pushed, matched `origin/main`)
**Scope:** Owner-requested feature — a supplied process video added to
Home under a new "So how does it work?" heading.
**Completion:** DONE WITH PROOF — feature shipped; a real bug found and
fixed during verification. See `CYVEXLY_APP_DEBT.md`'s "Resolved round
76" and `CYVEXLY_OWNER_DIRECTION.md`'s "Home 'how does it work?' process
video 2026-09-06-17" for full detail.

### What was built and fixed

Added `src/components/how-it-works-video.tsx` (ambient muted looping
inline video, no play/pause affordance, click/Enter opens a lightbox
with real controls) and wired it into `src/app/page.tsx` under the
existing "We're not a DIY builder" panel. Copied
`public/media/cyvexly-how-it-works.mp4` and generated a poster WebP.

Found and fixed a real bug: the lightbox's `fixed inset-0` overlay
wasn't actually viewport-fixed, because a `backdrop-filter` ancestor
(the sitewide glass treatment) creates a new CSS containing block for
`position: fixed` — same category as `transform`/`filter`/
`perspective`. Fixed via `createPortal(..., document.body)`; re-verified
correct full-viewport coverage and backdrop-click-to-close via CDP.

`tsc --noEmit`/lint/`pnpm run build` clean; real `next start` 21-route
sweep all 200; port 5173 cleanly stopped, no scratch files left. One
named proof-instrument limitation (this session's `document.hidden`
always reads `true`) — see `CYVEXLY_APP_DEBT.md` for detail; not a
product defect.

### Recommended next workstream

Owner visual acceptance of the new video section is pending. Re-check
the Auditor inbox first for anything published since round 75. Beyond
that, consider a fresh accessibility pass (real keyboard-only traversal
via CDP, last done round 8) or a field-by-field diff of each
`serviceDetails[slug].included`/`clientInputs`/`scopeFactors` list
against its matching `servicesGroups`/`pricingPackages.scope` entries
(not yet attempted). Owner gates unchanged: Resend account/DNS/API key,
analytics/Search Console ownership, exact LLC name, About/legal/visual
review, final indexability approval (see `CYVEXLY_OWNER_DIRECTION.md`).

Round 75's full report is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_75_REPORT.md` (moved
there round 76 to keep this file under its 12,288-byte hot-file cap).
Round 75 completed brand-color token consistency in decorative gradient
strings.

Round 74 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_74_REPORT.md` (moved
there round 75 to keep this file under its 12,288-byte hot-file cap).
Round 74 found 0 new defects (extended color-token audit, no source
change).

Round 73 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_73_REPORT.md` (moved
there round 74 to keep this file under its 12,288-byte hot-file cap).
Round 73 fixed the case-study/decorative-artwork color-token staleness
defect.

Round 72 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_72_REPORT.md` (moved
there round 73 to keep this file under its 12,288-byte hot-file cap).
Round 72 fixed the Planner Review-page validation-bypass defect.

Round 71 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_71_REPORT.md` (moved
there round 72 to keep this file under its 12,288-byte hot-file cap).
Round 71 fixed the `/work` dead-end filter-pill defect and an
`APP_DEBT.md` hot-file-cap violation.

Round 70 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_70_REPORT.md` (moved
there round 72 to keep this file under its 12,288-byte hot-file cap).
Round 70 fixed the text-cursor/editable-looking-copy defect.

Round 69 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_69_REPORT.md` (moved
there round 71 to keep this file under its 12,288-byte hot-file cap).
Round 69 fixed the Home FAQ preview's CMS-inclusion overclaim.

Round 67 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_67_REPORT.md` (moved
there round 69 to keep this file under its 12,288-byte hot-file cap).
Round 67 fixed the Planner secondary-goals-label mapping defect.

Round 68 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_68_REPORT.md` (moved
there round 70 to keep this file under its 12,288-byte hot-file cap).
Round 68 fixed a missing `Sitemap:` directive in `robots.ts`.

Round 66 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_66_REPORT.md` (moved
there round 68 to keep this file under its 12,288-byte hot-file cap).
Round 66 fixed the Planner spectrum-slider data-loss defect.

Round 65 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_65_REPORT.md` (moved
there round 67 to keep this file under its 12,288-byte hot-file cap).
Round 65 fixed the request-body-size defect on both API routes.

Round 63 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_63_REPORT.md` (moved
there round 65 to keep this file under its 12,288-byte hot-file cap).
Round 63 fixed the timing-side-channel defect in `isTrustedOrigin()`.

Round 64 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_64_REPORT.md` (moved
there round 66 to keep this file under its 12,288-byte hot-file cap).
Round 64 found 0 new defects (docs-only round, no source changed).

Round 62 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_62_REPORT.md` (moved
there round 64 to keep this file under its 12,288-byte hot-file cap).
Round 62 prepared the dormant Cloudflare-bypass origin-secret gate.

Round 61 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_61_REPORT.md` (moved
there round 63 to keep this file under its 12,288-byte hot-file cap).
Round 61 fixed the rate limiter's unbounded-memory-growth defect.

Round 60 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_60_REPORT.md` (moved
there round 62 to keep this file under its 12,288-byte hot-file cap).
Round 60 fixed the Contact/Planner rate limiter's `X-Forwarded-For`
IP-spoofing bypass.

Round 59 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_59_REPORT.md` (moved
there round 61 to keep this file under its 12,288-byte hot-file cap).
Round 59 fixed a 6-char meta-description overage on Home.

Round 58 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_58_REPORT.md` (moved
there round 60 to keep this file under its 12288-byte hot-file cap).
Round 58 fixed a hot-file-cap violation, a handoff-rotation defect, and
shipped `html lang="en-US"`.

Round 57 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_57_REPORT.md` (moved
there round 59 to keep this file under its 12,288-byte hot-file cap).
Round 57 trimmed 5 oversized meta descriptions.

Round 56 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_56_REPORT.md` (moved
there round 58 to keep this file under its 12288-byte hot-file cap). Round
56 added OfferCatalog JSON-LD to `/pricing`.

Round 55 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_55_REPORT.md` (moved
there round 56 to keep this file under its 12288-byte hot-file cap). Round
55 added Service JSON-LD to the five `/services/[slug]` detail pages.

Round 54 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_54_REPORT.md` (moved
there round 58 to restore correct latest-three rotation — this file had
incorrectly kept round 54 live while round 55 was archived; see the
archive file's note). Round 54 added per-slug Open Graph images for
`services/[slug]` and `work/[slug]`.

Round 53 closeout detail is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_53_REPORT.md` (moved
there round 57 to keep this file under its 12288-byte hot-file cap). Round
53 was the full launch-readiness pass: verified domain/HTTPS live,
replaced Contact/Planner `mailto:` with real server-side Resend delivery,
added dormant GA4/GSC scaffolding, fixed a stale Privacy Policy section,
and ran a sitewide audit finding zero defects.

Round 52 closeout detail is archived at
docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_52_REPORT.md (moved there
round 55 to keep this file under its 12288-byte hot-file cap). Round 52
added per-route Open Graph images for 8 static marketing routes.

Round 50 closeout detail is archived at
docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_50_REPORT.md (moved there
round 52 to keep this file under its 12288-byte hot-file cap). Round 50
added COOP/CORP security headers and `/.well-known/security.txt`.

Round 51 closeout detail is archived at
docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_51_REPORT.md (moved
there round 53 to keep this file under its 12288-byte hot-file cap).
Round 51 added sitewide Open Graph/Twitter Card metadata.

Round 49 closeout detail is archived at
docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_49_REPORT.md (moved there
round 51 to keep this file under its 12288-byte hot-file cap). Round 49
added route-segment/root-layout error boundaries and viewport theme-color/
color-scheme metadata.

Round 48 closeout detail is archived at
docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_48_REPORT.md (moved there
round 50 to keep this file under its 12288-byte hot-file cap). Round 48
added raster 192/512 PNG manifest icons and fixed a print-legibility defect.

Round 47 closeout detail is archived at
docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_47_REPORT.md (moved there
round 49 to keep this file under its 12288-byte hot-file cap). Round 47
implemented the Apple touch icon.

Round 46 closeout detail is archived at
docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_46_REPORT.md (moved there
round 49 to keep this file under its 12288-byte hot-file cap). Round 46
removed five dead scaffold SVG assets and added the Web App Manifest.

Round 45 closeout detail is archived at
docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_45_REPORT.md (moved there
round 48 to keep this file under its 12288-byte hot-file cap). Round 45
implemented BreadcrumbList JSON-LD for service-detail and case-study
routes.

Rounds 39-44 closeout detail is archived at their correspondingly named
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_<N>_REPORT.md` files
(consolidated round 61 to keep this file under its 12,288-byte hot-file
cap): FAQPage JSON-LD (44), sitewide Organization JSON-LD (43), Contact
honeypot fix (42), no defect found (41), Planner scroll/focus fix (40,
`71d233f`), skip-to-main-content fix (39). Rounds 38, 37, 36, 35, 33-34,
31-32, and 28-30 are archived at their correspondingly named files under
`docs/archive/chunks/`. The current Chunk 5 scope and Owner gates are
summarized in `CYVEXLY_ACTIVE_CHUNK.md` and `CYVEXLY_OWNER_DIRECTION.md`.
