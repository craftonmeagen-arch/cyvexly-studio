# Cyvexly App Debt

Current project-wide, external, account, and Owner-gated work only. Historical
resolved detail remains in `CYVEXLY_BUILD_SUMMARY.md`, `docs/archive/chunks/`,
Git history, and role memory.

## Current source position

- Primary accepted source: `48a2470`.
- Production head: `493d1e6`, Team 2's bounded outside-site portfolio
  integration directly on top of the primary source.
- Chunk 9 showcase candidate: corrected local commit `ca2b84e`; it is not
  accepted, pushed, or deployed while two clean exact-source reviews remain.
- Active review source: `ca2b84e`; the lifecycle selector uses this field before
  the accepted-source fallback.
- Auditor R128 failed superseded candidate `312937c` on Work-fold blocker
  `CYV-IFA-014`; Round 166 corrected and proved it in `ca2b84e`. The primary
  Auditor automation remains `PAUSED`; the Builder did not alter it.
- Chunk 8 closed in Round 159 after R112 and exact-source R116 supplied two
  separate clean challenges. No current primary product defect is open.
- Team 2 report `HH-IFA-023` closed review of the later integration; primary
  R116 does not cover it.

## Open external and Owner gates

1. **Guardio reputation review.** Round 119 found no compromise across deployed
   source, visible runtime, TLS/redirects/headers, dependencies, and other
   reputation checks. The supported disposition is a likely Guardio-specific
   false positive/new-domain classification, not demonstrated malware. The
   Owner/account holder must request or complete provider review and then run a
   clean Guardio-enabled recheck without allowlisting. Do not change product
   source, DNS, or indexing merely to game the classifier.

2. **Exact legal identity and final copy approval.** Confirm the exact
   registered LLC name before final legal publication. The Owner must approve
   the logo-led About copy, Privacy, Website Terms, and final public visuals.
   No founder identity, testimonial, result, credential, or legal name may be
   invented.

3. **Real Contact/Planner delivery.** Server-side Resend routes, validation,
   honeypot, rate limiting, sanitization, honest not-configured/failure states,
   and best-effort visitor confirmation are implemented. The Owner/account
   holder must verify the sending domain, store `RESEND_API_KEY` only in
   Render's protected environment, redeploy, and intentionally test one real
   Contact and one real Planner delivery. Do not store or print the secret.

4. **Analytics, search ownership, and indexing release.** The dormant GA4/GSC
   wiring and staged no-index posture are implemented. The Owner must supply
   GA4/Search Console values or explicitly choose no analytics, approve final
   copy/visuals, and separately authorize indexing. Until then, keep
   `robots.txt` disallowing crawling and page metadata at `noindex, nofollow`.

5. **Payment provider.** Selection and integration remain deliberately
   deferred for Owner research. Do not claim transaction readiness, supported
   methods, checkout, deposits, or payment availability before a real provider
   is approved and active.

6. **Optional origin-bypass hardening.** Dormant `CF_ORIGIN_SECRET` support is
   implemented and tested. Activating it requires a matching protected
   Cloudflare request-header rule and Render secret. This is an optional
   Owner/account security enhancement, not a current product defect or launch
   completion claim.

## Related chunk gate

Chunk 6 still needs one complete independent physical/visual review of accepted
Velora source `fce01e8`; track that review in `CYVEXLY_CHUNK_DEBT.md`.
