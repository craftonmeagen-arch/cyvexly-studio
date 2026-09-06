# Cyvexly Current State

**Global round:** 57. Owner launch direction updated 2026-09-04, extended
2026-09-05-15 (full launch-readiness execution direction, interactive
session — see `CYVEXLY_OWNER_DIRECTION.md`).
**Active/next chunks:** Chunk 3 — Project Planner and Chunk 4 — Utility/legal
and launch readiness retain incomplete closure items. **Chunk 5 — United
States Launch Completion & Business Operations is open** since round 29.
About/Privacy/Terms (round 30), security headers/CSP (rounds 31-32),
per-route canonical tags (round 33), the Auditor-tracked `/contact`
link-collision defect `CYV-IFA-012` (round 34), a sitewide
skip-to-main-content link (round 39), the Planner's step-advance
focus/scroll/live-region defect (round 40), the Contact form's missing
spam/rate protection (round 42), sitewide Organization JSON-LD structured
data (round 43), FAQPage JSON-LD for `/faq` (round 44), BreadcrumbList
JSON-LD for service-detail/case-study routes (round 45), a Web App
Manifest plus dead-asset cleanup (round 46), an Apple touch icon
(round 47), raster 192/512 PNG manifest icons plus a print-legibility fix
(round 48), route-segment/root error boundaries plus theme-color/
color-scheme metadata (round 49), COOP/CORP headers plus security.txt
(round 50), and sitewide Open Graph/Twitter Card metadata (round 51) are
done. Remaining Chunk 5 scope (real Contact/Planner email delivery,
DNS/domain connection, analytics/search ownership, final indexability
approval) is Owner-gated — see `CYVEXLY_OWNER_DIRECTION.md`'s "Remaining
Owner gates". Full round-by-round detail is in `CYVEXLY_ACTIVE_CHUNK.md`
and `CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

**Round 57 outcome (scheduled/unattended):** dispositioned Auditor item
`IFA-2026-09-06-R47` (23rd consecutive confirmation, reviewed commit
`63fc8fe`, predating round 56's Pricing OfferCatalog JSON-LD, 0 active
code defects — its "Production Domain & DNS Connection" gate note was
stale, corrected by round 53). Measured every route's rendered meta
description for the first time and found 5 exceeded the ~155-160 char
search-snippet budget (`/services` 169, `/pricing` 174, the three
`/work/[slug]` case studies 189-211); tightened the two static
descriptions and switched `work/[slug]` to reuse the already-published
`selectedWork` card summary instead of the long on-page narrative.
`tsc`/`lint`/`build` clean; verified via a real `next start` server (all
5 now render 48-154 chars, on-page copy unchanged, zero regressions
across a 19-route sweep). Full detail in `CYVEXLY_APP_DEBT.md`'s
"Resolved round 57" section.

**Round 56 outcome (scheduled/unattended):** dispositioned Auditor item
`IFA-2026-09-06-R46` (22nd consecutive confirmation, reviewed commit
`82b531b`, predating round 55's Service JSON-LD, 0 active code defects —
its "Production Domain & DNS Connection" gate note was stale, corrected by
round 53). Added OfferCatalog JSON-LD to `/pricing`
(`pricingJsonLd` in `src/lib/structured-data.ts`), reusing each of the 5
packages' own published name/bestFor/price via one `Offer` per package —
"Custom system" (no fixed price) correctly lists without a
`priceSpecification`. `tsc`/`lint`/`build` clean; verified via a real
`next start` server (both JSON-LD scripts parse valid on `/pricing`, all 5
package prices match the published copy exactly, zero regressions across a
14-route sweep). Full detail in `CYVEXLY_APP_DEBT.md`'s "Resolved round 56"
section.

**Round 55 outcome (scheduled/unattended):** dispositioned Auditor item
`IFA-2026-09-06-R45` (21st consecutive confirmation, reviewed commit
`26bc8b2`, predating round 54's per-slug OG images, 0 active code
defects — its "domain DNS still needed" gate note was stale, corrected by
round 53). Added Service JSON-LD to all five `/services/[slug]` detail
pages (`buildServiceJsonLd()` in `src/lib/structured-data.ts`), reusing
each service's own published name/summary/starting price via
`AggregateOffer.lowPrice` — no invented copy. `tsc`/`lint`/`build` clean;
verified via a real `next start` server (all 5 slugs' JSON-LD parses
valid with correct fields and prices matching the published copy exactly,
zero regressions across a 12-route sweep). Full detail in
`CYVEXLY_APP_DEBT.md`'s "Resolved round 55" section.

**Round 52 outcome (scheduled/unattended):** dispositioned Auditor item
`IFA-2026-09-06-R43` (19th consecutive confirmation, not new) and shipped
per-route Open Graph images for the 8 static marketing routes. Confirmed
the dynamic `services/[slug]`/`work/[slug]` routes still had no
`opengraph-image` of their own (pre-existing gap, not a regression). Full
detail in `CYVEXLY_APP_DEBT.md`'s "Resolved round 52" section.

**Round 54 outcome (interactive session):** dispositioned Auditor item
`IFA-2026-09-06-R44` (20th consecutive confirmation, reviewed round-51
commit, 0 active code defects — its "domain DNS still needed" gate note
was stale, corrected by round 53). Closed the exact gap round 52 named:
added `services/[slug]/opengraph-image.tsx` and
`work/[slug]/opengraph-image.tsx` so all 5 service-detail and all 3
case-study routes now generate their own per-slug social-preview image
instead of having none. `tsc`/`lint`/`build` clean; verified via a real
`next start` server (all 8 dynamic routes 200, invalid slugs 404 on both
page and image, two images visually opened, zero regressions across a
static-route sample). Full detail in `CYVEXLY_APP_DEBT.md`'s "Resolved
round 54" section.

**Immediate next mission:** continue Chunk 5 from Owner direction
`2026-09-04-14` and `CYVEXLY_VISION_PLAN.md` §17. Check the Auditor inbox
first for anything published after round 56. Open Graph/Twitter coverage
(static and dynamic routes), structured data (Organization, FAQPage,
BreadcrumbList, per-service Service/AggregateOffer JSON-LD, and now
Pricing's OfferCatalog JSON-LD), manifest/icons, print CSS, error
boundaries/theme-color, and COOP/CORP headers/security.txt are all
shipped — keep looking for genuinely new QA/build angles (e.g. a true
rate-limiting check beyond the honeypot) rather than assuming the surface
is empty. What remains genuinely Owner-gated (real Contact/Planner email
delivery, analytics/search ownership, exact LLC name, final indexability
approval, About/legal/visual review) is unchanged; see "Owner launch
decisions and remaining gates" below.

**Round 53 outcome (interactive session, Owner direction `2026-09-05-15`):**
verified the production domain is already fully connected (DNS/HTTPS/
canonicalization all correct — the debt file's "DNS still needed" claim was
stale, not current); replaced Contact/Planner `mailto:` submission with
real server-side delivery via Resend (`src/lib/mailer.ts`,
`src/app/api/{contact,planner}/route.ts`) including server-side
validation, sanitization, honeypot re-check, and per-IP rate limiting;
added dormant GA4 + Google Search Console verification scaffolding
(zero footprint until the Owner supplies real values); corrected the
Privacy Policy's stale mailto-era description of form handling; ran a
sitewide link/alt-text/JSON-LD/console-error audit on live production
with zero defects found. Full detail in `CYVEXLY_APP_DEBT.md` and
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

**Accepted product position:** `main` is pushed through round 53's commits
on `origin/main` (see `git log`) and Render has auto-deployed them — the
new Contact/Planner fields and `/api/*` routes are confirmed live on
`https://cyvexly.com`. The production domain `cyvexly.com` is fully
connected, HTTPS-verified, and canonicalized. `origin/master` is
historical and is not the deployment branch.

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

Domain/DNS/HTTPS/canonicalization (formerly gate 2 here) is **done** —
verified live round 53, not merely code-complete. Payment-provider
selection and real portfolio replacement are deliberately tabled. Existing
payment claims must be removed or qualified until supported; existing
concepts must remain unmistakably labeled. Contact/Planner now use real
server-side delivery (not `mailto:`) — see `CYVEXLY_APP_DEBT.md` item 2.


## Working orientation

Use the six current root orientations and CYVEXLY_ROLE_RULES_MAPPING.md. New reviewer
reports and memory are external; read CYVEXLY_REVIEW_INDEX.md and all unread inbox items.
The existing architectural-glass visual baseline is unchanged. Older round proof is in
CYVEXLY_BUILD_SUMMARY.md and the archived pre-migration current state. No new product
round or Owner visual acceptance is claimed by the environment migration.
