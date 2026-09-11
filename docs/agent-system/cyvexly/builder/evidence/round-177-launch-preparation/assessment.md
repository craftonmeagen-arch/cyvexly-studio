# Round 177 — unattended launch-preparation evidence

**Run time:** 2026-09-10 America/New_York

**Exact product candidate:** `b14a92b1a9dbea8adb585f5aabd8bd4ac609c0c3`

**Accepted/deployed baseline:** product source `4232574`; release commit
`8c34031`

**Disposition:** BUILDER PROOF PASS; CANDIDATE AWAITS INDEPENDENT EXACT-SOURCE
REVIEW. NO PROVIDER ACTIVATION, EXTERNAL SUBMISSION, PUSH, OR DEPLOY OCCURRED.

## Consent-controlled analytics

- A valid `G-` measurement ID is required before the component or Google CSP
  sources exist.
- Google Analytics uses basic consent: the tag is absent and the browser makes
  zero Google requests before explicit grant.
- Allow/decline controls are keyboard-operable, at least 44px high, persistent,
  revocable, and contained at desktop and 390px.
- Advertising storage, ad user data, ad personalization, Google Signals, and
  ad-personalization signals remain denied/disabled.
- The only custom event is `generate_lead` after an accepted Contact, Planner,
  or Consultation response, with `lead_source: website` and the allowlisted
  inquiry type. No form values or PII are passed.
- The Privacy page conditionally explains the real configured or dormant state.

Visible captures:

- `analytics-choice-desktop.png` — 1280px consent choice.
- `analytics-choice-phone.png` — 390px consent choice.

The CDP smoke intercepted Google and Contact endpoints, so no real analytics
hit or message was sent. Result:

```json
{"googleRequestsBeforeConsent":0,"googleTagLoadedAfterGrant":true,"successfulInquiryEvent":"generate_lead/contact","desktopGeometry":{"panelInsideViewport":true,"noPageOverflow":true,"buttonHeights":[44,44]},"phoneOverflow":false}
```

## Search and indexing readiness

`scripts/search-readiness-smoke.mjs` passed three production-build states:

1. no IDs + no-index: no verification metadata, canonical/sitemap correct,
   robots disallow;
2. synthetic verification + no-index: verification metadata present, robots
   still disallow;
3. synthetic verification + explicit index: index/follow metadata and robots
   allow.

The final `.next` build was restored to state 1. Synthetic values were process-
local and were not committed. Real Search Console verification and indexing
remain separate Owner-controlled gates.

## Stripe readiness

Pricing, FAQ, Privacy, and Terms now identify Stripe Invoicing as the selected
future provider path while explicitly stating that the account/methods are not
active. Copy preserves signed-agreement-first invoicing, existing project
milestones, monthly-in-advance Care, provider-hosted payment entry, and no raw
payment storage. It does not expose checkout or claim ACH/card availability,
account verification, automated recurring billing, or transaction readiness.

## Verification ledger

- TypeScript: pass.
- ESLint: zero errors; one unchanged warning in historical round-42 evidence.
- Next production builds: three passes, 56 routes each.
- Buyer journey: pass, 35 routes and 17 inquiry contexts.
- Search readiness: pass in all three gated states.
- Analytics consent/browser: pass at desktop and 390px.
- Business-day: pass, seven cases.
- Consultation API: pass across email-only, phone-only, timezone, validation,
  honeypot, and rate-limit behavior; zero real messages.
- Submission receipts: pass, six intercepted requests; zero real messages.
- Responsive Home/Work/Consultation hierarchy: pass at 1280, 768, 390, and 320;
  zero runtime errors and zero page overflow.

## Remaining authority gates

Independent review must challenge exact `b14a92b` before acceptance. The Owner
must separately complete/approve LLC, Resend, GA4/GSC, indexing, Stripe test
invoice, Guardio review/recheck, legal copy, and final visuals. These are not
Builder-complete merely because dormant/synthetic proof passes.
