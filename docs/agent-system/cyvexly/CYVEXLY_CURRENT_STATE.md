# Cyvexly Current State

**Global round:** 73. Owner launch direction updated 2026-09-04, extended
2026-09-05-15 (full launch-readiness execution direction, interactive
session — see `CYVEXLY_OWNER_DIRECTION.md`).
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

**Round 73 outcome:** dispositioned two new Auditor inbox items
(`IFA-2026-09-06-R61`/`R62`, 36th/37th consecutive clean confirmations;
R61's `CYV-DOC-002` hot-file-cap finding was already resolved by R62).
Gave the case-study surface (round 72's recommended fresh surface) its
first dedicated adversarial pass and found/fixed a real cross-surface
color-token staleness defect: Aurora/Nexora's case-study "Visual
direction" palette swatches, their matching `concept-preview.tsx`
artwork, and two unrelated decorative SVGs (`pricing-scope-signal.tsx`,
`service-detail-signal.tsx`) all still hardcoded the pre-refresh
cyber-blue (`#1478FF`)/cool-graphite (`#526176`) values that rounds
1/28 darkened site-wide to `#0F66E0`/`#46576E` for contrast — confirmed
via `git log -S` that these were the exact original token values, and
via Vellora Care's already-correct palette that this was drift, not a
deliberate per-project choice. **Fixed** all 4 files' hardcoded hex
literals to match the live tokens; left `site-config.ts`'s `gradient`
fields alone after confirming they're fully covered (thus invisible)
by `ConceptPreview`'s own opaque SVG background. `tsc`/lint/build
clean, 22-route sweep all 200, live HTML fetch confirmed the corrected
swatch colors render. Full detail in `CYVEXLY_ACTIVE_CHUNK.md`/
`CYVEXLY_APP_DEBT.md`.

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
first for anything published after round 73 (empty as of round 73). The
Planner (server + client), About/Privacy/Terms copy, `service-details.ts`,
`/work` filters, and case-study content/artwork/palette are all checked
clean through round 73. `CYVEXLY_ACTIVE_CHUNK.md` is at 30,644/30,720
bytes (76 bytes headroom) — next round should archive another old inline
round paragraph before adding new detail. The Cloudflare-bypass gap has a
dormant code-side gate (round 62, hardened round 63); it activates only
once the Owner adds one Cloudflare Transform Rule (see
`CYVEXLY_APP_DEBT.md` item 3) — not more Builder code. What remains is
otherwise Owner-gated; see "Owner launch decisions and remaining gates"
below.

**Accepted product position:** `main` is pushed through round 72's source
commit on `origin/main` (round 73's commit pending push at round close) and
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
