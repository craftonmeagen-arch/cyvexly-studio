# Cyvexly Current State

**Global round:** 92. Owner launch direction updated 2026-09-04, extended
2026-09-05-15 (full launch-readiness execution direction, interactive
session — see `CYVEXLY_OWNER_DIRECTION.md`). Round 76 (interactive) added a
supplied Home process video under Owner direction `2026-09-06-17`. Rounds
77-81 (scheduled/unattended) found 0 new defects (proof-gap-closure and
verification rounds); round 82 (scheduled/unattended) found and fixed a
real Privacy Policy truth-accuracy defect; rounds 83-86 (scheduled/
unattended) found 0 new defects (convergence-checks across Terms/
Accessibility/sitemap/CSP, then FAQ/structured-data/Pricing/Contact/
Planner-email/About surfaces, then structured-data.ts JSON-LD vs.
rendered-page-facts, then round 86's Planner/Contact per-step-copy vs.
email-notification field-label check); round 87 (scheduled/unattended)
found and fixed a real Home pricing-preview truth-precision defect
(overstated a capped inclusion as guaranteed); rounds 88-90 (scheduled/
unattended) found 0 new defects (service-details.ts prose vs.
pricingPackages/carePlans scope convergence-check, then round 89's
faqLibrary/pricingFaq/faqPreview payment-copy convergence-check across
three independent surfaces, then round 90's Process-page step-copy vs.
Planner/Pricing/FAQ real-flow convergence-check). Round 84 also fixed a Builder-owned environment
defect: this session type's PowerShell process starts with only the
Machine `PATH` (Node.js/pnpm live in the User `PATH`, unset in this
process) — see `CYVEXLY_TOOLS_AND_CAPABILITIES.md`'s round-84 note for
the exact one-line fix future rounds need (reused successfully rounds
85-88). Round 91 (scheduled/unattended) found 0 new defects (About-page-
vs-vision §6.8 convergence-check + genuine in-pane Tab traversal of
Planner Step 6). Round 92 (scheduled/unattended) fixed a real
documentation-debt item (this file over its byte cap, `CYV-DOC-003`) and
found 0 new defects on a fresh Accessibility-statement-vs-actual-rendered-
behavior convergence check (contrast, focus order, skip-link,
reduced-motion) — full detail in `CYVEXLY_APP_DEBT.md`'s "Round 91"/
"Round 92".
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

**Round 92 outcome (scheduled/unattended):** dispositioned Auditor item
`IFA-2026-09-07-R83` (58th consecutive clean confirmation, "PASS WITH
COMMENDATION", 1 documentation-debt item `CYV-DOC-003` — this file over
its byte cap). Fixed `CYV-DOC-003`. Verified `tsc`/lint/build clean on
unchanged round-87 source. Fresh convergence check via real headless-
Chrome/CDP: Accessibility statement page's claims vs. actual rendered
behavior (contrast 6.27:1, genuine skip-link keyboard bypass proof,
reduced-motion CSS confirmed active) — **0 defects**. Full detail in
`CYVEXLY_APP_DEBT.md`'s "Round 92" and `CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

Rounds 87-91's outcome summaries (round 87 fixed a real Home pricing-
preview truth-precision defect, commit `c85419f`; rounds 88-91 found 0
new defects across service-details/faqLibrary/Pricing/Home payment-copy,
Process-page, and About-page/Planner-keyboard convergence-checks) are
archived in `CYVEXLY_APP_DEBT.md`'s "Round 87"-"Round 91" sections and
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`'s matching closeouts (moved round 92 to
restore this file's 8,192-byte hot-file cap headroom; no history lost).

**Accepted product position:** `main` is pushed through round 87's source
commit (`c85419f`) on `origin/main` and Render auto-deploys it (rounds
83-86 and 88-92 made no source change; round 87 fixed the Home
pricing-preview integrations wording).
`cyvexly.com` is fully connected/HTTPS/canonicalized (verified live,
round 53). `origin/master` is historical, not the deployment branch.

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
