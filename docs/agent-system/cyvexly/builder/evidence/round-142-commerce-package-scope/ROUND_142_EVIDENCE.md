# Round 142 — Commerce package booking scope

**Outcome:** ACCEPTED AND DEPLOYED — EXACT-SOURCE REVIEW PENDING

## Buyer discrepancy

Round 141 made the shared Commerce service truthful for stores and booking-led
businesses, but the linked Pricing card still described only store structure,
products, catalog entry, checkout, shipping, and tax. A booking-led buyer could
see the `$8,500` starting point without seeing what booking work that package
covered. The same card also rendered the redundant qualifier “Starting at / From
$8,500.”

## Change

- Reframed all Commerce card and comparison fields around the existing either/or
  offer: storefront or booking journey, product or service content, checkout or
  scheduling, and shipping/tax or booking requirements.
- Kept the published `$8,500` starting amount, timeline, package name, inquiry
  key, provider-neutral language, and milestone terms unchanged.
- Added a regression contract requiring every booking-inclusive field, rejecting
  the superseded store-only phrases, and rejecting the repeated price qualifier.

## Source identity

- Local product commit: `8e55b63`
- Deployed commit: `95cf243`
- Stable patch ID for both: `58c591f93b547ff22e593512f2e231a216dd3d2a`
- Canonical `origin/main` and `https://cyvexly.com/pricing` adopted `95cf243`.

## Verification

- The strengthened 33-route/15-context buyer suite fails against prior deployed
  source `af9b4e2` at the first missing booking-inclusive package field.
- `pnpm exec tsc --noEmit`: pass.
- `pnpm run lint`: pass with the one historical unused-variable warning in the
  Round 42 evidence script and zero errors.
- `pnpm run build`: pass, 52 routes.
- Local buyer-journey suite: pass.
- Local responsive hierarchy suite: pass at 1280×720 and 390×844 with zero
  runtime errors or horizontal overflow.
- Adopted-public buyer-journey suite: pass.
- Visible IAB checks opened the local and deployed Commerce package at desktop
  and phone widths. The complete copy remains readable, the glass composition is
  intact, and the phone deep link settles at `96px` below an `82px` header with
  no positive horizontal overflow.
- The package CTA reaches the contextual short inquiry, and its optional detailed
  Planner link preserves the neutral “Commerce or booking website” starting
  point. No inquiry, email, call, payment, or transaction was submitted.

## Remaining gates

Round 142 supersedes the source reviewed by Auditor R107. Two independent
verification rounds of deployed source `95cf243` are required before Chunk 8
readiness. Guardio/account-holder and Owner launch gates remain unchanged.

## Cleanup

The visible IAB tab was closed and its temporary viewport reset. The verified
Builder process tree was stopped and port 5173 is clear. The clean deployment
worktree and generated `.next` cache were removed after boundary, clean-state,
and link checks, reclaiming 662,678,391 measured bytes. No protected migration,
Team 2, account, scheduler, or user files were staged, reverted, or removed.
