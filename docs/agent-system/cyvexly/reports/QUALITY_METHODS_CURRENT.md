# Cyvexly Council Quality & Methods Report

## Review identity

- Review ID: `CYC-R18-20260830-01`
- Role: Cyvexly Product Quality, Assurance & Methods Council
- Round: `council-20260831T114400Z`
- Scheduler timestamp (minute zero): `2026-08-31T11:44:44.512Z`
- Durable guard start: `2026-08-31T11:46:11.0805216Z`
- Source state: `GIT_WORKTREE`; immutable Council snapshot head
  `68fe4a476a89070b968a21852742680571794695`; no source drift after the
  accepted service-detail commit `930e050`.
- Start dirty fingerprint:
  `329025F57F43D74E228064E5AE842CED8FADE5870A368A27B3D1ECC20F6999B6`
- Council runtime: `.codex/runtime/council/council-20260831T114400Z/runtime`,
  port `5373`; visual fallback Chrome CDP port `9339`.
- PM prompt: `NO ACTIVE PM PROMPT`; standing Council role applied.
- Auditor: no active Auditor guard detected.

## Executive brief

Round 18 independently reviewed the post-R17 accepted five-service detail and
Planner-handoff system. Direct in-app use plus opened exact viewport captures
confirm a coherent, truthful extension of the existing glass/grid/signal
system. All five detail routes satisfy the vision content contract and remain
responsive, semantic, and contained. Native Services → detail → Planner use
works, and a fresh browser profile confirms every service's intended Planner
mapping. No external data was submitted.

## Findings and dispositions

### CYC-R18-F001 — Confirmed — five service-detail journeys and route boundaries

`/services/business-websites`, `/website-redesigns`, `/landing-pages`,
`/ecommerce-websites`, and `/website-care` each return `200`, expose one
unique outcome-led H1 and one `main`, and link to the correct case-study and
Planner query. The vision-required problem, outcome, inclusions, concept-work
label, client inputs, scope controls, starting price/timing, FAQ, and CTA are
present on every route. An unknown slug returns the expected `404`; duplicate
IDs, missing image alts, unnamed controls, and document overflow are absent.

### CYC-R18-F002 — Confirmed — service-to-Planner handoff and user-control boundary

The real in-app path Services → Business Websites → `Include this in my
project` reaches `/start?service=business-websites`. In a fresh browser profile,
advancing through Steps 1–2 exposes the intended mapping for all five offers:
business-site/credibility, redesign/replace, landing-page/launch,
ecommerce/sell, and not-sure/credibility plus Care `Yes`. The UI announces the
starting point as editable. The existing in-app browser's saved-draft notice
remains in control rather than being silently overwritten by a new query. Empty
Step 1 still returns three field-level alerts, focuses `fullName`, and remains
contained. No Planner or Contact submission was triggered.

### CYC-R18-F003 — Confirmed/no regression — responsive visual and interaction

Opened Services at desktop/tablet/phone and Business Websites detail at
`1440×1000`, `768×1024`, and `390×844`; also opened E-commerce, Redesign,
Landing Pages, and Website Care phone first views. The mobile menu opens to a
readable stacked panel with `aria-expanded=true`; the detail FAQ opens with its
answer and expanded state. A `320px` E-commerce view and `390px` explicit
`24px` root-font stress retain exact-width containment. Full Business detail
captures show the sections read as one route from offer to proof to inquiry.

### CYC-R18-F004 — Owner Decision / Next — remaining service-detail fidelity

The reusable detail system is materially more useful than the prior dead-end
cards and uses honest concept previews. Its orbital signal is legible and
service-labeled, but the five pages share one visual grammar and remain less
luminous/dense than the approved Services mockup's globe/workspace and richer
proof treatment. This is an active Owner fidelity decision, not a source defect
or permission to fabricate client media. Closure requires Owner selection of
the honest signal direction versus approved higher-fidelity media, followed by
an opened comparison at the matching service route.

### CYC-R18-F005 — Confirmed/Next — method and launch-readiness boundaries

The Builder's method produced a coherent typed model and reusable template,
found a too-narrow tablet split in the first render, and repaired it before
acceptance. Council's isolated lint, production build, and immediate post-build
typecheck pass; the known `metadataBase` localhost fallback remains
Owner/domain-blocked. Physical keyboard, attended reduced motion,
Safari/Firefox, field Web Vitals, second-device scale, deployment/cache,
server-side email, and legal/domain identity remain unconfirmed.

## Methods assessment and Primary Next-Builder Plan

Round 18 confirms that the Builder converted the vision's five focused service
journeys into a reusable, content-complete system without portfolio fabrication
or token-only churn. Preserve the `lg` tablet stacking fix, route boundaries,
concept-project labels, local Planner no-submission boundary, and query-versus-
saved-draft precedence. The next Builder slice should be Owner-led: either
select one approved higher-fidelity service visual direction or leave the
honest signal system stable and move to the next load-bearing Owner decision
(founder/legal/domain/email). Do not broaden the template or add integrations
without authorization.

The strongest different next Council question is an attended/different-
capability review of physical keyboard traversal, reduced-motion behavior,
Safari/Firefox parity, and second-device scale against the now-connected
service-to-Planner journey.

## Evidence and limits

Durable evidence is indexed in `docs/agent-system/cyvexly/council/evidence/INDEX.md`,
including opened Services/detail/Planner captures, route/status probes,
content-contract checks, Planner mapping, menu/FAQ state, semantic audits, and
24px-root stress. Council did not edit product source/tests, submit form data,
touch `.engine-lock`, or control Builder/Auditor resources.
