# Cyvexly App Debt

Current project-wide, external, account, and Owner-gated work only. Historical
resolved detail remains in `CYVEXLY_BUILD_SUMMARY.md`, `docs/archive/chunks/`,
Git history, and role memory.

## Current source position

- Primary accepted product source: `4232574` after Auditor R136/R137.
- Active Chunk 11 review candidate: none; review lifecycle falls back to
  accepted `4232574`.
- Production product source: `4232574`; release commit `8c34031` is pushed,
  canonical ETag `14aii22kn8q2otg` exposed the Home rail and consultation route,
  and live buyer/hierarchy suites passed.
- Chunk 10 closed in Round 174 after Auditor R132 and R133 independently passed
  exact `c8bc73d` with zero defects. No active review candidate remains; the
  lifecycle falls back to accepted `c8bc73d`.
- Auditor R128 failed superseded candidate `312937c` on Work-fold blocker
  `CYV-IFA-014`; Round 166 corrected and proved it in `ca2b84e`. The primary
  Auditor automation remains `PAUSED`; the Builder did not alter it.
- Auditor R129 and R130 passed exact `ca2b84e`, verified `CYV-IFA-014` resolved,
  and satisfy the two-review gate. Chunk 9 closed in global round 169.
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

2. **Formation verification and final copy approval.** Owner chose Cyvexly LLC
   and reports checking availability on September 10; filing is planned for
   September 11. Confirm approved formation and the filing's exact name before
   claiming an existing LLC. Public brand remains Cyvexly Studio. The Owner
   must approve the logo-led About copy, Privacy, Terms, and final visuals.
   No founder identity, testimonial, result, credential, or legal name may be
   invented.

3. **Real Contact/Planner/Consultation delivery.** Server-side Resend routes, validation,
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
