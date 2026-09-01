# Council evidence — R37 release metadata, route integrity, and Planner handoff

- Review ID: CYC-R37-20260901-01
- Scheduler minute zero: 2026-09-01T12:35:30.631Z (heartbeat automation `cyvexly-product-quality-methods-council`)
- Round identity: `20260901T123530Z-heartbeat`; isolated runtime port 5373; source head `a7e07ca30a40757fa00ee3d7d6452918edba5137`; source dirty fingerprint `0F8611D0F6EF940752F094854BE6D500E603503DC962FA9D08393781D6619EB5`.
- Runtime: `http://127.0.0.1:5373`; fresh production build succeeded. Browser IAB smoke used Planner at default desktop and Home metadata; no browser warn/error diagnostics were reported.

## Release route smoke

| Path | Status | Title / note |
|---|---:|---|
| `/` | 200 | Cyvexly Studio — Websites built to make your business unmistakable |
| `/services` | 200 | Services — Cyvexly Studio |
| `/work` | 200 | Work — Cyvexly Studio |
| `/pricing` | 200 | Pricing — Cyvexly Studio |
| `/process` | 200 | Process — Cyvexly Studio |
| `/start` | 200 | Project Planner — Cyvexly Studio |
| `/contact` | 200 | Contact — Cyvexly Studio |
| `/faq` | 200 | FAQ — Cyvexly Studio |
| `/accessibility` | 200 | Accessibility Statement — Cyvexly Studio |
| `/about` | 404 | route absent |
| `/privacy` | 404 | footer link dead end |
| `/terms` | 404 | footer link dead end |
| `/sitemap.xml` | 404 | release discovery artifact absent |
| `/robots.txt` | 200 | served |
| `/opengraph-image` | 200 | served |

## Metadata and handoff observations

Home HTML has accurate title and description, but `og:image` and `twitter:image` resolve to `http://localhost:3000/opengraph-image?...` because `metadataBase` is unset. The page also emits `noindex, nofollow` because `NEXT_PUBLIC_SITE_INDEXABLE` is not enabled in this runtime. This is safe for preview but must be made an explicit Owner-approved launch setting before public release.

Footer visibly links Privacy and Terms to 404 routes. About is not linked in the current Home footer/header, but the route remains absent and Owner debt says founder facts must be supplied before inventing an About page. Privacy/Terms require Owner-supplied jurisdiction/legal facts.

The IAB Planner snapshot showed a restored draft, nine-step flow, clear consent, and truthful interim copy. Source inspection confirms submit builds a `mailto:hello@cyvexly.com` summary and explicitly states it does not send an automatic confirmation email from Cyvexly. Contact uses the same client-side mailto bridge. No real email was sent.

Build emitted the known nonblocking arbitrary-background CSS optimizer warning and the `metadataBase` warning; TypeScript and static generation completed successfully.

## Closure evidence needed

1. Owner approves public domain, indexability, and legal/founder facts; configure `metadataBase`, canonical/sitemap/OG absolute URLs, and launch robots, then verify public HTML and route status.
2. Add truthful Privacy and Terms routes (and About only after supplied identity facts), or remove/replace their visible links; verify no public navigation target returns 404.
3. Replace the interim Planner/Contact mailto bridge with an approved server/provider route that records the submission and sends internal plus prospect confirmation; prove end-to-end in a sandbox without exposing credentials.
