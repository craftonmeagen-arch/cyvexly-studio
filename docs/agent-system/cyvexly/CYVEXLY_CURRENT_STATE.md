# Cyvexly Current State

**Global round:** 76. Owner launch direction updated 2026-09-04, extended
2026-09-05-15 (full launch-readiness execution direction, interactive
session — see `CYVEXLY_OWNER_DIRECTION.md`). Round 76 (interactive)
added a supplied Home process video under Owner direction
`2026-09-06-17`.
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

Round 75 outcome: dispositioned Auditor item `IFA-2026-09-06-R64`
(39th consecutive clean confirmation) and actioned its one
recommendation — replaced the last 4 pre-refresh `#1478FF` literals
(inert `gradient` class strings in `site-config.ts`) with `#0F66E0`
for full sitewide token consistency. Adversarially diffed
`service-details.ts` pricing copy against `site-config.ts` — both
render paths independently label the same starting price through
different copy; **no defect found** (genuine negative result).
Full detail in `CYVEXLY_ACTIVE_CHUNK.md`/`CYVEXLY_APP_DEBT.md`.

Round 74 outcome: dispositioned Auditor item `IFA-2026-09-06-R63`
(38th consecutive clean confirmation). Extended round 73's color-token
fix into a full `git log -G`-based historical audit of every token
value ever changed in `globals.css` — no further drift found sitewide.
**0 new defects found** this round; no source change.

Round 73 outcome: found/fixed a real cross-surface color-token
staleness defect (case-study palette swatches, `concept-preview.tsx`,
`pricing-scope-signal.tsx`, `service-detail-signal.tsx` all hardcoded
pre-refresh hex values). Full detail archived; see `CYVEXLY_APP_DEBT.md`'s
"Resolved round 73".

Round 72 outcome: found/fixed a real Planner validation-bypass defect —
`handleSubmit` only validated step 9, so a visitor could use a
review-page Edit link to invalidate an earlier step, jump straight back
to Review via the progress rail, and submit with zero visible error.
Added `validateAllSteps()`. Full detail archived; see
`CYVEXLY_APP_DEBT.md`'s "Resolved round 72".

Round 71 outcome: dispositioned two new Auditor inbox items (34th/35th
consecutive clean confirmations). Found/fixed a real dead-end defect on
`/work`: two filter pills matched zero projects, guaranteeing an empty
state — trimmed the filter list. Also fixed a hot-file-cap violation in
`CYVEXLY_APP_DEBT.md` itself. Full detail archived; see
`CYVEXLY_APP_DEBT.md`'s "Resolved round 71".

Rounds 53-70 (domain/HTTPS verification, real Resend email delivery, GA4/GSC
scaffolding, per-slug/sitewide OG images, JSON-LD rollout, meta-description
trims, `html lang="en-US"`, rate-limiter security fixes, the Cloudflare-bypass
gate, request-body caps, the text-cursor fix, and Planner data-loss/label
fixes) are summarized in `CYVEXLY_APP_DEBT.md`'s resolved-round history and
`CYVEXLY_ACTIVE_CHUNK.md`.

**Immediate next mission:** continue Chunk 5 from Owner direction
`2026-09-04-14` and `CYVEXLY_VISION_PLAN.md` §17. Check the Auditor inbox
first for anything published after round 76 (empty as of round 76). The
Planner (server + client), About/Privacy/Terms copy, `service-details.ts`
(including its pricing copy vs `site-config.ts`), `/work` filters, color
tokens (fully consistent sitewide, zero `#1478FF` remaining), and
case-study content/artwork/palette are all checked clean through round
75; response-time and payment-claim copy is verified consistent. Round
76 added the Home "how does it work?" video per Owner direction
`2026-09-06-17` — visual acceptance of the final look is still pending.
`CYVEXLY_ACTIVE_CHUNK.md`/`CYVEXLY_APP_DEBT.md` have healthy headroom
after round 76's archive/consolidation pass. The Cloudflare-bypass gap
has a dormant code-side gate (round 62, hardened round 63); it activates
only once the Owner adds one Cloudflare Transform Rule (see
`CYVEXLY_APP_DEBT.md` item 3) — not more Builder code. What remains is
otherwise Owner-gated; see "Owner launch decisions and remaining gates"
below.

**Accepted product position:** `main` is pushed through round 76's source
commit on `origin/main` and
Render auto-deploys it. `cyvexly.com` is fully connected/HTTPS/canonicalized
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
