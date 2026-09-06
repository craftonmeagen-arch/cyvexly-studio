# Cyvexly Current State

**Global round:** 72. Owner launch direction updated 2026-09-04, extended
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

**Round 72 outcome:** no new Auditor inbox item. Adversarially reviewed
`planner-form.tsx`'s client-side step logic (round 71's recommended fresh
surface) and found/fixed a real, reachable validation-bypass defect:
`handleSubmit` only ran `validateStep(9)`, but the progress rail lets a
visitor jump straight back to Review after using a review-page "Edit" link
to revisit (and invalidate) an earlier step — `maxReachedStep` never resets.
Reproduced live: cleared the required `fullName` field after using Edit,
jumped directly to Step 9 via the progress rail (no re-validation triggered),
then submitted — the client sent the empty field to the server, which
correctly 400'd, but the visitor was left on Review with zero visible error
(no alert, no field message, button just re-enabled) — a silent dead end.
**Fixed:** added `validateAllSteps()`, used by `handleSubmit` instead of
`validateStep(9)`; on any error, the visitor is now routed to the first
invalid step with the real field error visible, and no network request is
sent for known-invalid data. Verified against both `next dev` (HMR) and a
real `next start` production build: the exact repro now shows `fetch was
called: false`, lands back on Step 1, and displays "Please enter your name."
Regression-checked: an in-place Step 9-only error (missing consent) still
blocks correctly without navigating away; a fully valid submission still
reaches `/api/planner` (503 not-configured, expected — no `RESEND_API_KEY`
in this environment). `tsc`/lint/build clean (same pre-existing round-42
evidence-script lint warning), 20-route sweep all 200. Full detail in
`CYVEXLY_ACTIVE_CHUNK.md`/`CYVEXLY_APP_DEBT.md`.

Round 71 outcome: dispositioned two new Auditor inbox items (34th/35th
consecutive clean confirmations). Found/fixed a real dead-end defect on
`/work`: two filter pills matched zero projects, guaranteeing an empty
state — trimmed the filter list. Also fixed a hot-file-cap violation in
`CYVEXLY_APP_DEBT.md` itself. Full detail archived; see
`CYVEXLY_APP_DEBT.md`'s "Resolved round 71".

Round 70 outcome: dispositioned Owner direction `2026-09-06-16` (text-cursor/
editable-looking body copy) — confirmed it was the browser's default I-beam
cursor over selectable text, not a Cyvexly bug, and fixed it without an
accessibility regression. Full detail archived; see `CYVEXLY_APP_DEBT.md`'s
"Resolved round 70".

Rounds 53-69 (domain/HTTPS verification, real Resend email delivery, GA4/GSC
scaffolding, per-slug/sitewide OG images, JSON-LD rollout, meta-description
trims, `html lang="en-US"`, rate-limiter security fixes, the Cloudflare-bypass
gate, request-body caps, and Planner data-loss/label fixes) are summarized in
`CYVEXLY_APP_DEBT.md`'s resolved-round history and `CYVEXLY_ACTIVE_CHUNK.md`.

**Immediate next mission:** continue Chunk 5 from Owner direction
`2026-09-04-14` and `CYVEXLY_VISION_PLAN.md` §17. Check the Auditor inbox
first for anything published after round 72 (empty as of round 72). The
Planner's server route/shared config, About/Privacy/Terms copy, and
`service-details.ts` are all checked clean (rounds 66-69/71); the client-side
step-logic gap found this round is fixed. Case-study (`/work/[slug]`) content
against `site-config.ts`'s `selectedWork`/`caseStudies` remains a genuinely
fresh surface not yet given a dedicated adversarial pass. The Cloudflare-
bypass gap has a dormant code-side gate (round 62, hardened round 63); it
activates only once the Owner adds one Cloudflare Transform Rule (see
`CYVEXLY_APP_DEBT.md` item 3) — not more Builder code. What remains is
otherwise Owner-gated; see "Owner launch decisions and remaining gates"
below.

**Accepted product position:** `main` is pushed through round 72's source
commit on `origin/main` and Render auto-deploys it. `cyvexly.com` is fully
connected/HTTPS/canonicalized (verified live, round 53). `origin/master` is
historical, not the deployment branch.

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
