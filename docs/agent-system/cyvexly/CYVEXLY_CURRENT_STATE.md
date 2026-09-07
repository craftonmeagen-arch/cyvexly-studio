# Cyvexly Current State

**Global round:** 78. Owner launch direction updated 2026-09-04, extended
2026-09-05-15 (full launch-readiness execution direction, interactive
session — see `CYVEXLY_OWNER_DIRECTION.md`). Round 76 (interactive)
added a supplied Home process video under Owner direction
`2026-09-06-17`. Rounds 77-78 (scheduled/unattended) found 0 new defects;
round 78 also re-opened live/CDP verification for this session type (see
below) and closed round 76's autoplay proof gap.
**Active/next chunks:** Chunk 3 — Project Planner and Chunk 4 — Utility/legal
and launch readiness retain incomplete closure items. **Chunk 5 — United
States Launch Completion & Business Operations is open** since round 29.
About/Privacy/Terms, security headers/CSP, canonical tags, structured data
(Organization/FAQPage/BreadcrumbList/Service/OfferCatalog), Web App Manifest,
icons, error boundaries, OG/Twitter metadata (sitewide + per-route + per-slug),
real server-side Contact/Planner email delivery via Resend, dormant GA4/GSC
scaffolding, a rate-limiter IP-spoofing + memory-leak fix, a dormant
Cloudflare-bypass gate (+ timing-safe hardening), a request-body-size cap,
and multiple Planner data-loss/label fixes are done — full round-by-round
detail is in `CYVEXLY_ACTIVE_CHUNK.md`, `CYVEXLY_NEXT_BUILDER_HANDOFF.md`, and
`CYVEXLY_APP_DEBT.md`; older rounds are archived under `docs/archive/chunks/`.
Remaining Chunk 5 scope (real Resend account/API key, DNS/domain provider
access, analytics/search ownership, exact LLC name, final indexability
approval) is Owner-gated — see `CYVEXLY_OWNER_DIRECTION.md`'s "Remaining
Owner gates".

**Round 78 outcome (scheduled/unattended):** dispositioned Auditor item
`IFA-2026-09-07-R69` (44th consecutive clean confirmation, 0 action
needed). Found round 77's "live/CDP verification unreachable this
session type" conclusion too broad: manually starting `next dev` then
attaching the Browser pane via `preview_start({url})` (round 1's own
workaround) got real compositing screenshots and a real `Tab`-key focus
move this round, though both degraded to intermittent partway through
(see `CYVEXLY_TOOLS_AND_CAPABILITIES.md`). Used the window to close
round 76's `document.hidden`-stuck-true proof gap with genuine positive
evidence (video `currentTime` advanced 3.24s→11.14s over a real 3s wait)
and re-verify the lightbox's open/Escape-close/focus-return live. No
source change. Full detail in `CYVEXLY_APP_DEBT.md`/
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`. Round 77 (0 new defects, source-level
service-details/accessibility diff) is archived at
`docs/archive/chunks/CYVEXLY_BUILDER_HANDOFF_ROUND_77_REPORT.md`.

**Round 76 outcome (interactive, Owner direction `2026-09-06-17`):**
added a Home "So how does it work?" section embedding an Owner-supplied
process video as a silent, looping, chrome-less ambient clip that opens
a controllable lightbox on click. Found and fixed a real bug during
verification: the lightbox's `fixed` overlay wasn't viewport-fixed
because a `backdrop-filter` ancestor (sitewide glass treatment) creates
a new CSS containing block for `position: fixed` — fixed via
`createPortal(..., document.body)`. `tsc`/lint/build clean; verified via
CDP. Owner visual acceptance pending. Full detail in
`CYVEXLY_ACTIVE_CHUNK.md`/`CYVEXLY_APP_DEBT.md`/`CYVEXLY_OWNER_DIRECTION.md`.

Rounds 53-75 (domain/HTTPS verification, real Resend email delivery,
GA4/GSC scaffolding, per-slug/sitewide OG images, JSON-LD rollout,
meta-description trims, `html lang="en-US"`, rate-limiter security fixes,
the Cloudflare-bypass gate, request-body caps, the text-cursor fix,
Planner data-loss/label/validation-bypass fixes, a `/work` filter-pill
fix, and a full sitewide color-token consistency pass) are summarized in
`CYVEXLY_APP_DEBT.md`'s resolved-round history and
`CYVEXLY_ACTIVE_CHUNK.md`.

**Immediate next mission:** continue Chunk 5 from Owner direction
`2026-09-04-14` and `CYVEXLY_VISION_PLAN.md` §17. Check the Auditor inbox
first for anything published after round 78. The Planner (server +
client), About/Privacy/Terms copy, `service-details.ts` (fully diffed,
round 77), `/work` filters, color tokens, form accessibility, and
case-study content/artwork/palette are all checked clean. A full live
keyboard-only Tab traversal of the header nav/Contact/Planner is still
worth attempting — round 78 reopened the manual-start-then-attach
Browser-pane path (intermittent; retry early, fall back to `read_page`/
`javascript_tool` when it degrades — see
`CYVEXLY_TOOLS_AND_CAPABILITIES.md`). Round 76 added the Home "how does
it work?" video — visual acceptance of the final look is still pending.
The Cloudflare-bypass gap has a dormant code-side gate (round 62,
hardened round 63); it activates only once the Owner adds one Cloudflare
Transform Rule (see `CYVEXLY_APP_DEBT.md` item 3) — not more Builder
code. What remains is otherwise Owner-gated; see "Owner launch decisions
and remaining gates" below.

**Accepted product position:** `main` is pushed through round 76's source
commit on `origin/main` (rounds 77-78 made no source change) and Render
auto-deploys it. `cyvexly.com` is fully connected/HTTPS/canonicalized
(verified live, round 53). `origin/master` is historical, not the
deployment branch.

## Owner launch decisions and remaining gates

The Owner has now confirmed: Cyvexly Studio; LLC structure; Indiana, United
States; United States-only launch market; `cyvexly.com`;
`design@cyvexly.com`; `(317) 572-5780`; logo-led About; no public personal
founder name or portrait; and a studio-origin narrative authorized for review.

The following still require Owner account access, confirmation, or final
approval and must not be invented:

1. exact registered LLC legal name for legal text and later agreements;
2. Resend account creation, sending-domain DNS verification (account-
   specific records Resend generates after the domain is added — see
   `CYVEXLY_APP_DEBT.md` item 2), and `RESEND_API_KEY` entered securely in
   Render — the code path is built, deployed, and tested short of an
   actual send;
3. a GA4 property + Measurement ID (or an explicit no-analytics decision),
   and/or a Google Search Console verification value — both are wired in
   code (dormant) and activate the moment a real value is supplied;
4. review of About/Privacy/Terms drafts, public visual acceptance, and
   final permission to enable search indexing.

Domain/DNS/HTTPS/canonicalization is **done** — verified live round 53, not
merely code-complete. Payment-provider selection and real portfolio
replacement are deliberately tabled. Existing payment claims must be
removed or qualified until supported; existing concepts must remain
unmistakably labeled. Contact/Planner now use real server-side delivery
(not `mailto:`) — see `CYVEXLY_APP_DEBT.md` item 2.

## Working orientation

Use the six current root orientations and CYVEXLY_ROLE_RULES_MAPPING.md. New reviewer
reports and memory are external; read CYVEXLY_REVIEW_INDEX.md and all unread inbox items.
The existing architectural-glass visual baseline is unchanged. Older round proof is in
CYVEXLY_BUILD_SUMMARY.md and the archived pre-migration current state. No new product
round or Owner visual acceptance is claimed by the environment migration.
