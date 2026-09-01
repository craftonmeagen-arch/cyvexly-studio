# Cyvexly Council report — CYC-R37-20260901-01

## Review identity and timing

- Scheduler minute zero: 2026-09-01T12:35:30.631Z; Council round: `20260901T123530Z-heartbeat`.
- Source head: `a7e07ca30a40757fa00ee3d7d6452918edba5137`; dirty fingerprint: `0F8611D0F6EF940752F094854BE6D500E603503DC962FA9D08393781D6619EB5`.
- Fresh isolated runtime on port 5373; production build passed. PM prompt: `NO ACTIVE PM PROMPT`.

## Question and method

This round asked whether release metadata, route/link integrity, and Planner/contact handoffs are truthful and ready for the next Builder round. I used the isolated runtime with in-app browser snapshots at the default desktop viewport, direct HTTP route smoke across public navigation/legal/discovery paths, server-rendered metadata inspection, source inspection of Planner and Contact submit paths, and browser warning/error diagnostics. This differs from R36's default interaction and keyboard/device pass by testing release-facing wiring and message truthfulness.

## Findings

### Priority Now — CYC-R37-F001 — Public metadata advertises localhost assets and preview robots

- Reviewed source/runtime: `src/app/layout.tsx`; Home server HTML from `http://127.0.0.1:5373/`.
- Condition: `og:image` and `twitter:image` are absolute `http://localhost:3000/opengraph-image?...`; `metadataBase` warning is emitted. Robots are `noindex, nofollow` because indexability is not enabled in this runtime.
- Gap/consequence: a public deployment can publish non-public social-image URLs or remain undiscoverable if launch settings are copied unchanged, weakening release trust and sharing previews.
- Uncertainty: the Owner has not supplied the final public domain or launch-indexability decision.
- Observable closure: Owner approves domain/indexability; configure `metadataBase`, canonical/sitemap/OG/Twitter URLs and launch robots; verify public HTML and fetch each absolute asset.

### Priority Now — CYC-R37-F002 — Footer legal links are public 404s

- Reviewed runtime route matrix and IAB Home/Planner footer snapshots.
- Condition: visible Privacy and Terms links target `/privacy` and `/terms`; both return 404. `/about` is also absent, with Owner debt requiring supplied identity facts before authoring it.
- Gap/consequence: visitors encounter dead legal links at the release boundary; missing legal routes are a launch blocker.
- Uncertainty: jurisdiction and founder identity are intentionally unprovided.
- Observable closure: publish truthful Owner-approved Privacy/Terms (and About only with supplied facts), or remove/replace links; every visible target returns 200 and is content-reviewed.

### Next — CYC-R37-F003 — Planner and Contact remain client-mail handoffs

- Reviewed `src/components/planner/planner-form.tsx`, `src/components/contact-form.tsx`, and IAB Planner snapshot.
- Condition: submit builds `mailto:hello@cyvexly.com`; success copy says the user's mail app should open and explicitly says Cyvexly does not yet send automatic confirmation email.
- Gap/consequence: the vision's structured intake plus internal/prospect confirmation is not yet achieved, and success depends on an installed mail client and the user pressing Send.
- Uncertainty: no approved provider, domain, or credentials are present in the sandbox; no real email was sent.
- Observable closure: approved server/provider path stores the structured brief and sends internal plus prospect confirmation; sandbox end-to-end proof shows both messages without exposing credentials.

### Observation — CYC-R37-F004 — Core route and Planner semantics remain coherent

The primary routes, nine-step Planner labels, consent copy, restored-draft notice, and explicit interim handoff disclosure were coherent in the IAB snapshot; browser warn/error diagnostics were empty. This is a pass for current preview behavior, not launch proof.

## Not checked

No final public domain, legal content, real email delivery, reduced-motion audit, physical keyboard/cross-browser/device matrix, or production Web Vitals were available in this round.

## Primary Next-Builder Plan

1. Resolve Owner domain/indexability/legal decisions and repair metadata, discovery, and legal routes.
2. Keep the interim mailto disclosure until an approved server/provider implementation proves internal and prospect confirmation.
3. Re-run route/metadata/handoff smoke after those changes, then perform a device and reduced-motion pass.

Next Council question: after Builder wiring changes, do public metadata, legal routes, and structured intake/confirmation behave truthfully on the approved domain at desktop and narrow mobile widths?

## Publication and cleanup

Durable evidence is `docs/agent-system/cyvexly/council/evidence/council-20260901T123530Z-release-metadata-planner-smoke.md`. Candidate report is ready for role publication; runtime and browser tabs must be closed by the round cleanup helper.
