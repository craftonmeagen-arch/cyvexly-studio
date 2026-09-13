# Cyvexly App Debt

Current project-wide, external, account, and Owner-gated work only. Historical
resolved detail remains in `CYVEXLY_BUILD_SUMMARY.md`, `docs/archive/chunks/`,
Git history, and role memory.

## Current source position

- Current deployed product source: `feb0b2d`, the Round 185 commercial
  search-purpose foundation. Its canonical production deployment passed the
  live search-readiness contract on September 13, 2026.
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

2. **Real Contact/Planner/Consultation delivery.** Server-side Resend routes, validation,
   honeypot, rate limiting, sanitization, honest not-configured/failure states,
   and best-effort visitor confirmation are implemented. The Owner/account
   holder must verify the sending domain and store `RESEND_API_KEY` only in
   Render's protected environment. Round 176 intentionally attempted one real
   Contact, one Planner, and one email-path Consultation delivery to
   the Owner inbox; all three returned `503 not-configured`, so no notification
   or requester-confirmation email was sent. After protected configuration and
   redeployment, coordinate one fresh attempt per route and verify the internal
   notification first and requester confirmation separately. Phone-only requests
   do not send SMS or email confirmation. Do not repeat before configuration
   changes, and do not store or print the secret.

3. **Stripe activation and invoice proof.** The Owner selected Stripe Invoicing
   Starter with provider-hosted invoices after signed agreement. Candidate copy
   preserves package milestones and monthly-in-advance Care while stating that
   ACH/cards are not active. The Owner must create/verify the account, confirm
   enabled methods/settings, and send a test invoice. Do not add public checkout,
   pre-agreement payment, raw payment storage, automated recurring billing, or
   an activation claim.

4. **Optional origin-bypass hardening.** Dormant `CF_ORIGIN_SECRET` support is
   implemented and tested. Activating it requires a matching protected
   Cloudflare request-header rule and Render secret. This is an optional
   Owner/account security enhancement, not a current product defect or launch
   completion claim.

## Related chunk gate

Chunk 6 still needs one complete independent physical/visual review of accepted
Velora source `fce01e8`; track that review in `CYVEXLY_CHUNK_DEBT.md`.
