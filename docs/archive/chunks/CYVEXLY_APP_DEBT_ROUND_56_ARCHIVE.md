# Cyvexly App Debt — Round 56 Archive

Moved from `CYVEXLY_APP_DEBT.md` in round 60 to keep that file under its
30720-byte hot-file cap.

## Resolved round 56

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R46`** — a
  twenty-second consecutive independent confirmation (reviewed commit
  `82b531b`, round 54's HEAD, predating round 55's Service JSON-LD), 0
  active code defects. Its "Production Domain & DNS Connection" gate note
  was already stale (round 53 verified the domain fully connected). Moved
  to `exchange/processed/`.
- **New angle — OfferCatalog JSON-LD for `/pricing`.** Round 55's handoff
  named this directly: Services and each service-detail page now carry
  Service/AggregateOffer JSON-LD, but Pricing — the site's other core
  commercial page — had none. Added `pricingJsonLd` in
  `src/lib/structured-data.ts` (`Service` + `hasOfferCatalog`/`OfferCatalog`
  listing all 5 packages as `Offer`s), reusing each package's own
  already-published `name`/`bestFor`/`price`. "Custom system" ("Quoted
  after discovery") has no extractable figure and is listed without a
  `priceSpecification` rather than inventing one — matching the page's own
  "Price" vs. "Starting at" label distinction.
- **Verified:** `tsc --noEmit`/`lint`/`build` all pass clean (same
  pre-existing, unrelated lint warning in the round-42 evidence script).
  Real `next start` server on port 5173: fetched `/pricing`, parsed both
  JSON-LD script tags — valid JSON, `Organization` unchanged, new `Service`
  block lists all 5 packages in order with prices 1800/3500/5800/8500
  matching the published copy exactly and "Custom system" correctly
  price-less. A 14-route regression sweep (static + dynamic + sitemap/
  robots + an invalid path) shows zero regressions. Committed (`8f5fc2b`)
  and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `netstat`/`Get-Process` before stopping), removed the
  round's own scratch HTML fetch.
