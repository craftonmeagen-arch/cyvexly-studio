# Cyvexly App Debt — HoneyHearted rounds 105–107

## Round 107 — HoneyHearted free-sample print focus

Accepted/deployed source `9465ae9` fixes the free-sample Print action moving
focus into its 1×1 `aria-hidden` iframe. A new real-Chromium regression failed
on the public baseline (`IFRAME#sample-print-frame`) and passes locally and on
production after removing the unnecessary frame-focus call; the iframe still
contains and invokes the promised printable document. TypeScript, lint (one
known evidence warning), the 53-route build, and complete local/public suites
pass. Two independent reviews remain the only reachable Chunk 7 debt.

## Round 106 — HoneyHearted routed accessibility contract

No new external-review intake existed. Proof source `f4adb32` adds an 18-route
real-Chromium contract for visible H1/heading structure, interactive names,
form labels, ARIA ID references, embedded-image availability, and route-focus
transfer. The initial heading alert was correctly refuted as instrument noise
from decorative `aria-hidden` cover text. TypeScript, lint (one known evidence
warning), the 53-route build, and complete local/public suites pass with zero
failures/errors. Product source remains `165b246`; two independent reviews
remain the only reachable Chunk 7 debt.

## Round 105 — HoneyHearted activation-integration proof

No new external-review intake existed. Proof source `cacc5af` adds real-
Chromium coverage for illustrative-cover notice keyboard open/Escape focus
return, notice-to-launch routing with visible-heading focus, configured store/
product/social/sample destinations, protected HTTPS new-tab attributes, and
the documented local `hh:outbound` event contract. TypeScript, lint (one known
evidence warning), the 53-route build, and the complete local/public suites
pass with zero failures/errors. Product source remains `165b246`; two
independent reviews remain the only reachable Chunk 7 debt.
