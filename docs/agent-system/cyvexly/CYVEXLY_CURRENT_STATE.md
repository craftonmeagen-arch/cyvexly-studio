# Cyvexly Current State

**Global round:** 53. Owner launch direction updated 2026-09-04, extended
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

**Round 52 outcome (scheduled/unattended, 50-minute limit):** dispositioned
the one new Auditor inbox item, `IFA-2026-09-06-R43` — a nineteenth
consecutive independent confirmation, 0 active code defects, not a new
finding. Shipped the exact reachable angle round 51's handoff named:
**per-route Open Graph images.** Every route shared Home's single
generated `opengraph-image`, so shared links for About/Services/Pricing/
Work/Process/Contact/FAQ/Project Planner all showed the same generic Home
preview instead of one reflecting the actual page. Added
`src/lib/og-image.tsx`'s `renderRouteOgImage()` helper (reuses Home's
brand mark/palette) and a new `opengraph-image.tsx` per static route,
reusing only each route's own already-shipped title/description. Verified
via a real `next start` server: each route's `og:image` now resolves to
its own distinct, correctly rendered PNG (visually opened two); confirmed
the dynamic `services/[slug]`/`work/[slug]` routes have no `og:image` both
before and after this change (pre-existing gap, not a regression — real
before/after A-B test, not assumed). Full 26-route/asset regression sweep,
zero regressions. `tsc`/`lint`/`build` all clean. Full detail in
`CYVEXLY_APP_DEBT.md`'s "Resolved round 52" section and
`CYVEXLY_NEXT_BUILDER_HANDOFF.md`.

**Immediate next mission:** continue Chunk 5 from Owner direction
`2026-09-04-14` and `CYVEXLY_VISION_PLAN.md` §17. Check the Auditor inbox
first for anything published after round 52. Untried angles remaining: a
true rate-limiting check beyond the honeypot (architecturally tied to the
same server-side email delivery this chunk already defers); the dynamic
`services/[slug]`/`work/[slug]` routes still have no per-route
`opengraph-image` at all (confirmed pre-existing round 52, not a
regression — worth a deliberate look, since Next's image-convention file
does not automatically cascade into a parameterized child segment the way
static metadata text fields do). Structured data, manifest/icons, print
CSS, error boundaries/theme-color, COOP/CORP headers/security.txt, sitewide
Open Graph/Twitter Card metadata, and now per-route OG images are all
shipped — keep looking for genuinely new QA/build angles rather than
assuming the surface is empty. What remains genuinely Owner-gated (real
Contact/Planner email delivery, DNS/domain connection, analytics/search
ownership, exact LLC name, final indexability approval, About/legal/visual
review) is unchanged; see "Owner launch decisions and remaining gates"
below.

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
