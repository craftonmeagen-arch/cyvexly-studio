# Guardio detection-review packet — Owner submission draft

**Prepared:** 2026-09-10 America/New_York

**Status:** DRAFT FOR OWNER/ACCOUNT-HOLDER SUBMISSION. NOT SUBMITTED. NO
ALLOWLIST OR CLEARANCE CLAIM.

## Requested review

Please review Guardio's classification of `https://cyvexly.com/`. A retained
September 8 browser capture showed Guardio blocking the domain and describing a
credential, money, or identity-theft risk. That capture proves the Guardio
classification in that environment; it does not by itself establish malware or
phishing behavior.

## Site identity

- Public brand: Cyvexly Studio.
- Purpose: United States web design/development studio marketing site with
  same-origin inquiry forms and clearly labeled portfolio/demonstration work.
- Canonical domain: `https://cyvexly.com/`.
- Current accepted production product source: `4232574`.
- Current release commit: `8c34031`.
- Repository: `https://github.com/craftonmeagen-arch/cyvexly-studio`.

## Existing technical evidence

Round 119 reviewed exact then-public source `d7a545c23e22dbe5116c7e7c8f391ab5ef064603`
and found no current compromise evidence:

- canonical HTTPS returned 200; HTTP and `www` redirected to HTTPS/apex;
- a valid Google Trust Services certificate negotiated TLS 1.3;
- HSTS, restrictive CSP, frame denial, no-sniff, strict referrer policy, and a
  restrictive permissions policy were present;
- Home loaded only same-origin scripts, with no external form, iframe, or
  `javascript:` URL; Contact/Planner posted only to same-origin APIs;
- production dependency audit reported no known vulnerability;
- source search found no dynamic evaluation, obfuscated decoding, credential
  API, WebAssembly, or miner markers under `src/`/`public/`;
- VirusTotal's existing report showed 0/89 vendors flagging the domain, while
  Sucuri reported no malware and no blacklist match. Google Transparency
  Report returned no available data, which is neither a clean nor dangerous
  verdict.

The full evidence and qualifications remain in
`builder/evidence/round-119-domain-trust/assessment.md`. Round 119's supported
disposition was a likely Guardio-specific false positive/new-domain reputation
classification, not a proven cause and not a clearance claim.

## Owner submission procedure

1. Open Guardio's warning detail and use its official **Report a Detection
   Problem** or support path.
2. Provide the canonical URL, the site purpose, this evidence summary, and the
   exact date/screenshot of the observed classification.
3. Ask Guardio to identify the detection category and review/reclassify the
   domain. Do not include passwords, API keys, account tokens, or private user
   data.
4. Record the case/ticket reference and Guardio's exact response outside public
   source if it contains account information.
5. After Guardio responds, test the canonical site in a clean Guardio-enabled
   browser without allowlisting. Record the date, result, and visible evidence.

Do not close this gate from a successful ordinary-browser visit, other vendors'
results, a submitted ticket, or a local allowlist. Closure requires the Guardio-
specific clean recheck after provider review. Do not change application source,
DNS, or indexing merely to influence the classifier without new technical
evidence that warrants such a change.
