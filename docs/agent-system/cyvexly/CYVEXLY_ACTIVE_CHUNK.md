# Cyvexly Active Chunk

**Active product chunk:** Chunk 5 — United States Launch Completion & Business Operations

**Current position:** global round 177, launch-preparation round 1

**Accepted/deployed product source:** `4232574`

**Chunk 5 candidate / active review source:** `b14a92b`

**Scheduler state:** the primary Cyvexly Builder remains resumed; no scheduler
configuration changed.

## Outcome and boundaries

Owner direction `2026-09-10-07` authorizes unattended preparation—not account
activation or launch—for consent-controlled GA4, Search Console verification,
indexing, Stripe Invoicing, and the Guardio provider review.

Candidate `b14a92b` supplies:

- a persistent, keyboard-accessible allow/decline control that prevents every
  Google tag/request until explicit grant and keeps advertising/Signals denied;
- one minimal `generate_lead` event after accepted Contact, Planner, or
  Consultation success, carrying only the inquiry type and `website` source;
- strict GA ID validation and dormant CSP behavior;
- a truthful conditional Privacy disclosure and responsive settings control;
- synthetic search-readiness tests for verification metadata, canonical URLs,
  sitemap, no-index defaults, and the separate indexing switch;
- accurate Stripe-hosted-invoice readiness copy with no checkout, activation,
  pre-agreement payment, raw payment storage, or recurring-billing claim.

The curated evidence index is
`builder/evidence/round-177-launch-preparation/assessment.md`. Round 119 evidence
is summarized for an Owner-submitted Guardio review in
`builder/evidence/round-177-launch-preparation/GUARDIO_REVIEW_PACKET.md`.

## Proof and review gate

TypeScript, lint, three 56-route gated builds, 35-route/17-context buyer smoke,
consent interaction, search readiness, business-day, Consultation API,
intercepted receipts, and responsive hierarchy checks pass. No real message,
analytics hit, payment, provider submission, indexing change, push, or deploy
occurred.

Candidate `b14a92b` now requires the governing independent exact-source review
rounds before acceptance or publication. The accepted production baseline
remains `4232574` through release commit `8c34031`.

## Owner/account gates

1. File/verify Cyvexly LLC and approve final legal/visual copy.
2. Verify Resend domain, protect the API key, redeploy, and coordinate one real
   Contact, Planner, and Consultation check; do not repeat before configuration.
3. Create GA4 and Search Console domain properties, approve the consent/privacy
   draft, then separately supply protected values and indexing permission.
4. Create/verify Stripe, confirm invoice settings and enabled ACH/card methods,
   and send one test invoice before any activation claim.
5. Submit the Guardio review packet through the official channel, record the
   outcome, then recheck without allowlisting.

Chunk 11's accepted product behavior is preserved and its delivery gate is
consolidated here. Chunk 6's independent visual review remains separate. Team 2
retains all outside-application and HoneyHearted work.
