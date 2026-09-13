# Cyvexly App Debt

Current project-wide, external, account, and Owner-gated work only. Historical
resolved detail remains in `CYVEXLY_BUILD_SUMMARY.md`, `docs/archive/chunks/`,
Git history, and role memory.

## Current source position

- Current deployed product source: `2923ce5`, the Round 188 Indianapolis service
  presence on top of the commercial search, buyer-resource, and IndexNow
  foundations. Its canonical production deployment passed expanded search and
  buyer contracts on September 13, 2026.
- Last independently reviewed product baseline: `85c128e` after Auditor
  R139/R140. Later commits include a low-risk visual correction, the
  Owner-confirmed Cyvexly LLC/final legal baseline, indexing-release records,
  and Round 185 search-facing metadata/test work. No report newer than R152
  existed at Round 185 intake.
- Public indexing, Search Console domain verification/sitemap submission, GA4,
  Cyvexly LLC identity, and the final legal baseline are no longer open gates;
  they were completed or confirmed under Owner directions `2026-09-12-01`
  through `2026-09-12-03`.
- Active product work is Chunk 12, governed by `2026-09-13-01`. Ranking is an
  external outcome to monitor, not a product completion claim.

## Open external and Owner gates

1. **Guardio reputation review.** Round 119 found no compromise across deployed
   source, visible runtime, TLS/redirects/headers, dependencies, and other
   reputation checks. The supported disposition is a likely Guardio-specific
   false positive/new-domain classification, not demonstrated malware. The
   Owner/account holder must request or complete provider review and then run a
   clean Guardio-enabled recheck without allowlisting. Do not change product
   source, DNS, or indexing merely to game the classifier.

2. **Stripe activation and invoice proof.** The Owner selected Stripe Invoicing
   Starter with provider-hosted invoices after signed agreement. Candidate copy
   preserves package milestones and monthly-in-advance Care while stating that
   ACH/cards are not active. The Owner must create/verify the account, confirm
   enabled methods/settings, and send a test invoice. Do not add public checkout,
   pre-agreement payment, raw payment storage, automated recurring billing, or
   an activation claim.

3. **Optional origin-bypass hardening.** Dormant `CF_ORIGIN_SECRET` support is
   implemented and tested. Activating it requires a matching protected
   Cloudflare request-header rule and Render secret. This is an optional
   Owner/account security enhancement, not a current product defect or launch
   completion claim.

## Related chunk gate

Chunk 6 still needs one complete independent physical/visual review of accepted
Velora source `fce01e8`; track that review in `CYVEXLY_CHUNK_DEBT.md`.

The protected Contact, Planner, and Consultation delivery gate is closed.
Owner-supplied inbox evidence reviewed September 13 shows that all three
September 12 production tests delivered the studio notification and requester
confirmation after Resend/domain configuration. No credentials, message
contents, or private inbox screenshot are stored in this repository.
