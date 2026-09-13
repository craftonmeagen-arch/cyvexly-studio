# Cyvexly Current State

**Last completed global round:** 187

**Current global round:** 188

**Active chunk:** Chunk 12 — Search Visibility & Useful Content Growth

**Current mission:** execute Owner direction `2026-09-13-01` through phased,
truthful search improvements while preserving the accepted cyber-blue product
and United States service model.

**Current repository source:** `53b802c` — deployment-gated IndexNow
notification, pushed to `origin/main`; Round 187 continuity records are the
next docs-only commit.

**Current deployed product source:** `53b802c`; its canonical production
deployment passed the complete live search-readiness contract on September 13,
2026, and IndexNow accepted all 25 canonical sitemap URLs with HTTP 200.

## Round 187 — Bing discovery and deployment-gated IndexNow

- Imported the verified `cyvexly.com` Search Console property into Bing
  Webmaster Tools with view-only Google access and submitted the canonical
  sitemap. Bing accepted the sitemap and reported it as processing; crawl and
  reporting data can take up to 48 hours and must not be overstated.
- Added a protected Render `INDEXNOW_KEY`, a public protocol-required
  `/indexnow-key.txt` verification route, and a no-indexed `/api/release`
  endpoint that reports Render's deployed Git commit.
- Added a GitHub Actions workflow that waits for canonical production to report
  the exact pushed commit, verifies the live key location, reads the current
  sitemap, and submits only same-origin canonical URLs to IndexNow. The workflow
  reads the intentionally public key from production rather than duplicating it
  into GitHub secrets.
- Local smoke, TypeScript, lint (one unchanged historical warning), and the
  61-route production build passed before push. Render deployed exact source
  `53b802c`; live release/key/sitemap checks and the complete indexable search-
  readiness suite passed afterward.
- A direct release-gated run received HTTP 200 from IndexNow for all 25
  canonical sitemap URLs. This is successful discovery notification, not an
  indexing or ranking guarantee.

## Round 186 — first useful buyer-resource cluster

- Added `/resources` plus substantial guides at
  `/resources/small-business-website-cost` and
  `/resources/what-custom-website-includes`.
- Grounded the cost guide in Cyvexly's real $1,800/$3,500/$5,800/$8,500
  starting points, real timelines, and separate-cost boundaries; it explicitly
  says these are not market averages or a project quote.
- Built the inclusions guide around planning, design, development, launch,
  ownership, support, separate scope, and seven proposal questions.
- Connected Resources through primary/footer navigation, Services, Pricing,
  Process, reciprocal guide links, contextual inquiry states, and the sitemap.
- Added per-guide metadata, Open Graph art, Organization-authored Article data,
  Breadcrumb data, static generation, and expanded search/buyer regression.
- Desktop and 375px phone inspection passed for the hub, both guide openings,
  long-form cards/table reflow, and new Services/Pricing discovery panels.
- Canonical production proof passed after Render deployed `483975d`: 61 static/
  dynamic routes built, the expanded search contract passed, and the buyer
  journey passed with 37 routes and 19 inquiry contexts.
- Search Console still reports the submitted sitemap as successful with 22
  discovered pages from its September 12 read, while the property overview is
  still processing data. On September 13, Google accepted priority-crawl
  requests for `/resources`, `/resources/small-business-website-cost`, and
  `/resources/what-custom-website-includes`; all three were still unknown/not
  indexed at request time, so indexing and ranking remain asynchronous.

## Round 185 — commercial search-purpose foundation

- Replaced generic metadata on Home, Services, Pricing, and all six service
  pages with unique, descriptive titles and page-specific summaries that match
  the actual published service. Titles stay within 46–57 characters; summaries
  stay within 138–160 characters.
- Added homepage-only `WebSite` JSON-LD naming `Cyvexly Studio` with the
  established shorthand `Cyvexly`, while preserving the existing Organization,
  Service, OfferCatalog, FAQ, and Breadcrumb data.
- Expanded `search-readiness-smoke.mjs` from a Home/robots/sitemap gate into a
  nine-route commercial metadata contract covering title, description,
  canonical uniqueness, site identity, sitemap, and both indexable and dormant
  modes.
- Repaired stale buyer-suite assertions that still expected pending LLC
  formation and a proposed retention policy after the Owner-confirmed legal and
  policy updates on September 12. No public legal copy changed in this round.
- Visible layout, buyer flow, pricing, service scope, analytics, inquiry
  delivery, and payment behavior are unchanged.

## Proof

- `pnpm run lint` — pass.
- `NEXT_PUBLIC_SITE_INDEXABLE=true pnpm run build` — 55 routes generated.
- `pnpm exec tsc --noEmit` — pass after the required Next.js build.
- `pnpm run test:search-readiness` — pass against production-style local
  runtime in both dormant/no-index and indexable modes; all nine commercial
  routes have their expected unique metadata and canonical.
- `node scripts/buyer-journey-smoke.mjs` — pass: 35 routes, five buyer service
  routes, 12 pricing anchors, 17 inquiry contexts, and no submission.
- `BASE_URL=https://cyvexly.com EXPECT_INDEXABLE=true pnpm run
  test:search-readiness` — live pass after Render deployed `feb0b2d`.
- Current external search checks still did not surface Cyvexly for the sampled
  brand/service queries. This is an asynchronous discovery/ranking outcome,
  not evidence that the live technical release failed.

## Next phase

Monitor the accepted Google recrawl requests for Resources and both guide
routes, Bing's processing sitemap, and the automatic IndexNow workflow on later
production pushes. Request refreshed Home, Services, and Pricing crawling only
if coverage evidence shows it is needed. Then use Search Console/Bing query and
coverage evidence plus GA4
behavior to decide whether a later resource should address redesign timing,
website versus web application, booking/ecommerce prerequisites, or after-
launch ownership. Do not create another batch without evidence.

Separately pursue legitimate external authority: consistent business profiles,
real partnerships/associations, and earned mentions or links. Do not buy links,
fabricate reviews, or claim a local market the business does not genuinely
serve.

## Standing account-side work

- Stripe verification and invoice proof remain deferred until the Owner has the
  required business information.
- Guardio review submission and a clean un-allowlisted recheck remain
  Owner/account-holder work.
- Search Console and GA4 are active monitoring inputs; indexing/ranking is
  asynchronous and must not be overstated.
- Underlying outside products and HoneyHearted remain Team 2 scope.
