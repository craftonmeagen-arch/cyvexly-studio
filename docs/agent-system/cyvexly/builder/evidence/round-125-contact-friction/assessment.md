# Round 125 — Contact-form friction assessment

- **Accepted source:** deployed `d1bcb5f`; equivalent local Builder commit
  `8a17d85`. Their stable patch IDs match.
- **Observed gap:** the Contact introduction promised that name, email, and a
  short description were enough, but phone, company, and topic still appeared
  at equal visual weight in the first-use form.
- **Change:** name, email, and message now form the direct path. A native,
  initially collapsed `details` control holds phone, company, and topic; all
  three remain supported and are explicitly optional. Support/press guidance
  points to the disclosure without changing the submission payload or server
  contract.
- **Visible proof:** the exact production build was opened at 1440×900 and
  390×844 in the Codex in-app browser. The disclosure opened and collapsed by
  real click/Enter input, retained focus, measured 44px high, and produced no
  horizontal overflow. Blank-submit validation on the production build kept
  the disclosure collapsed and focused Name. No inquiry was submitted.
- **Automated proof:** TypeScript, full ESLint (one unchanged historical
  evidence warning), the 50-route webpack production build, and the 29-route
  buyer suite pass in the clean deployment worktree and publicly on
  `https://cyvexly.com`. Public browser diagnostics contained no warnings or
  errors.
- **Method audible:** webpack development hot refresh was blocked by the
  product CSP and therefore could not hydrate the form. That development-only
  result was not treated as a product failure; validation was repeated against
  the optimized production runtime.
- **Review:** Auditor `IFA-2026-09-08-R98` is a clean exact-patch review of the
  Round 124 accepted source. It has been processed and closes the prior exact-
  source gate; Round 125 still needs independent review.
- **Retention:** this compact assessment is the only new retained round
  evidence. The opened IAB views were used for live inspection and not
  duplicated to disk; no committed Contact mockup exists that triggers a
  retained target-comparison pair.
- **Cleanup:** the Builder production server and both Builder-created browser
  tabs were closed, the viewport override was reset, and port 5173 is clear.
  The clean deployment worktree was deregistered; its remaining verified
  `node_modules` directory (804,507,347 bytes) was sent to the Recycle Bin
  after normal removal left only that disposable dependency tree.
