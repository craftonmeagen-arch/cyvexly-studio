# Council evidence — CYC-R40-20260901-01

## Review identity

- Scheduler minute zero: `2026-09-01T17:25:28.342Z`; round `20260901T172528Z-heartbeat`.
- Fresh Council snapshot/runtime identity: source head `2cd912158e5b7214534f71df5332eedffb8eae9f`; dirty fingerprint `8CA19FA00FAF9A97640E6020C4B7D307EA7FDFC0160D676F6FFB3652C2C8C33C`; isolated runtime port `5373`.
- PM prompt: `NO ACTIVE PM PROMPT`.

## Review question and method

R40 used a new method relative to R39's interaction/contrast smoke: a same-origin static link crawl from 17 implemented seed routes, followed by real in-app Browser handoff and not-found-boundary checks. The normalized crawl retained path targets (query/hash removed) so query variants do not inflate coverage. No form was submitted and no mailto side effect was triggered.

## Static route/link crawl

The 17 seed routes were Home, Services, Work, Pricing, Process, Planner, Contact, FAQ, Accessibility, five service details, and three work details. The crawl found 27 normalized same-origin targets: 25 returned HTTP 200 and two returned the expected unresolved launch/legal paths:

| target | result |
| --- | --- |
| `/`, `/services`, `/work`, `/pricing`, `/process`, `/start`, `/contact`, `/faq`, `/accessibility` | 200 |
| `/services/business-websites`, `/services/ecommerce-websites`, `/services/landing-pages`, `/services/website-care`, `/services/website-redesigns` | 200 |
| `/work/aurora-spaces`, `/work/nexora-systems`, `/work/vellora-care` | 200 |
| `/_next` CSS/JS/font assets, `/favicon.ico`, `/icon.svg` | 200 |
| `/privacy`, `/terms` | 404 (known Owner/legal carry-forward) |

`/about` was not advertised by any crawled route in this source, so no new visible dead link was created. A direct unknown route returned HTTP 404, title `Page not found — Cyvexly Studio`, and one H1, `This page doesn't exist yet.`

## In-app Browser checks

- Home at 1440×900 rendered the approved blue-glass header/hero/video composition with no visual console warnings or errors.
- FAQ at 390×844 rendered the compact header, hero card, and category controls without horizontal overflow in the visible state.
- Contact `Describe your project →` navigated to `/start` (`Project Planner — Cyvexly Studio`); browser Back returned to `/contact`.
- Planner source and DOM expose the truthful client-mail bridge: submission opens the user's mail client with a prefilled summary and explicitly says it does not yet send an automatic confirmation email from Cyvexly.
- Browser diagnostics for FAQ, Planner, and not-found checks were empty (`[]` for warning/error logs).

## Assessment

No new Priority Now product defect was established. The only crawl failures are the already documented Privacy/Terms legal 404s, pending Owner jurisdiction decisions. Metadata/indexability (preview `noindex,nofollow`, localhost OG/Twitter fallback and unset canonical/metadataBase), sitemap, legal/founder facts, and server/provider-backed confirmation remain launch-boundary decisions, not regressions in this docs-only source interval. R39's contrast, first-invalid focus, sticky header, glass continuity, route containment, media, FAQ, and filter closures remain accepted and were not reopened without new evidence.

## Reproduction boundary

Evidence is local isolated runtime only. Public origin, final domain, production legal copy, real transactional delivery, reduced-motion/physical keyboard hardware, Safari/Firefox, production vitals, and Owner second-computer acceptance remain unverified.
