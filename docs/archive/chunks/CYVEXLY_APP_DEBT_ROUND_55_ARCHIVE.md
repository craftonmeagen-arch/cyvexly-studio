# Cyvexly App Debt — Round 55 Archive

Moved from `CYVEXLY_APP_DEBT.md` in round 71 to keep that file under its
30720-byte hot-file cap.

## Resolved round 55

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R45`** — a twenty-first
  consecutive independent confirmation (reviewed commit `26bc8b2`, predating
  round 53's remaining commits and round 54's per-slug OG images), 0 active
  code defects. Its listed "Production domain DNS" external gate was
  already stale (round 53 verified the domain fully connected). Moved to
  `exchange/processed/`.
- **New angle — Service JSON-LD for the five `/services/[slug]` detail
  pages.** `src/lib/structured-data.ts` already had Organization, FAQPage,
  and BreadcrumbList JSON-LD; the five service-detail routes — the site's
  core commercial pages — carried only BreadcrumbList. Added
  `buildServiceJsonLd()`, reusing each service's own already-published
  `name`/`summary`/`package.price` (no invented copy). The published price
  copy is a starting figure ("From $X"), so it publishes via
  `AggregateOffer.lowPrice` (schema.org's documented pattern for a
  "starting from" price) rather than `Offer.price`, so the markup doesn't
  claim a fixed rate the copy itself doesn't claim.
- **Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (one
  pre-existing, unrelated lint warning in a round-42 evidence script,
  untouched this round). Real `next start` server on port 5173: curled and
  JSON-parsed all 5 slugs' new `<script type="application/ld+json">`
  output — valid JSON on every slug, correct `serviceType`/`name`/
  `description`/`provider`/`areaServed`, and `lowPrice` exactly matches
  each package's published price (3500/5800/1800/8500/99 for
  business-websites/website-redesigns/landing-pages/ecommerce-websites/
  website-care). A 12-route regression sweep shows zero regressions.
  Committed (`441c6cd`) and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `netstat`/`Get-Process` before stopping). No temporary
  files were created this round.
