# Council Round 34 Work filters and case-study continuity review

## Scope and identity

- Review: `CYC-R34-20260901-01`; scheduler minute zero `2026-09-01T02:35:01.889Z`.
- Independent snapshot head: `445c8763457bdbafb74171d232d6e302e25472c5`; the
  accepted change since R33 is Owner documentation/mockup direction only; no
  product-source change was present after R33.
- Runtime: Council-owned immutable snapshot on port `5373`; PM prompt
  `NO ACTIVE PM PROMPT`.
- Product question: do Work filters, concept labels, visual previews, and
  Work → case-study → Planner handoffs remain truthful, keyboard-operable,
  coherent, and contained across desktop, tablet, phone, and narrow phone
  widths, including the approved `mockups/03-work-case-study.png` comparison?

## Method and proof

I read the frozen Council packet, lane orientation, Owner direction, current
vision index/plan, Builder and Auditor state, Council memory/debt/watch, and
the current report. I opened the approved Work case-study mockup, then used the
real in-app Browser against the isolated production runtime. I literally viewed
local Work renders at `1440×900`, `768×1024`, `390×844`, and `320×844`, the
Business Site and Redesign filter states, the Commerce phone state, Aurora
Spaces at desktop/tablet/phone, the lower case-study content, and the Planner
handoff. The public Work route was also viewed at `390×844` and compared for
matching labels, cards, landmarks, and containment.

I exercised every filter with direct click and with the CUA native `Enter` and
`Space` key paths. The filter state remained on `/work`, updated
`aria-pressed`, and produced the expected card/empty-state matrix. All three
case-study routes were opened at phone width. Browser warning/error diagnostics
were empty. The Council runtime passed offline dependency install, ESLint, and
post-build TypeScript. I did not edit product source, tests, Builder/Auditor
resources, `.engine-lock`, or automation.

Evidence: this report's paired metrics JSON and the indexed PNG captures,
including `...-work-desktop.png`, `...-work-tablet.png`,
`...-work-phone.png`, `...-work-narrow.png`,
`...-work-filter-business-desktop.png`,
`...-work-filter-redesign-desktop.png`,
`...-work-filter-commerce-phone.png`, `...-aurora-desktop.png`,
`...-aurora-tablet.png`, `...-aurora-phone.png`,
`...-aurora-lower-desktop.png`, and `...-work-public-phone-actual.png`.

## Findings

### CYC-R34-F001 — Pass: filter truth, empty states, and native activation

The six visible filters are real `type="button"` controls with a single
`aria-pressed="true"` state. Direct click and CUA `Enter`/`Space` activation
both changed the active filter without changing route. The observed matrix was
All → three cards; Business Site → Aurora Spaces and Nexora Systems; Redesign
→ zero cards plus `No projects match that filter yet.`; Landing Page → the
same honest empty state; Commerce → Vellora Care; Concept → all three cards.
  The empty states do not fabricate portfolio proof, and the cards retain the
  truthful `Concept project` label. Public Work matched the local card,
  label, landmark, and containment contract at phone width (the public All
  state was the observed filter state).

### CYC-R34-F002 — Pass: responsive Work containment and case-study handoff

The Work grid and filter group remain contained at all reviewed widths: local
layout widths were `1425`, `753`, `375`, and `305` with matching `scrollWidth`
and no horizontal overflow. At `320px`, filters wrap into three intentional
rows without clipping. Work and each case-study route expose one `main`, one
primary H1, and stable route identity. Aurora, Nexora, and Vellora all opened
at phone width with one main/H1 and no overflow; Aurora's `← All work` link and
`Describe your project` CTA resolve to `/work` and `/start` respectively.
The case-study preview SVGs are explicitly named role images with labels, while
decorative Work-card previews remain `aria-hidden`.

### CYC-R34-F003 — Owner decision: concept-art fidelity and the site-wide glass gap

The approved Work mockup presents richer photographic/project compositions and
more detailed case-study proof than the current three hand-authored abstract
SVG concept previews. The implementation is honest—every card and case study
labels itself as a concept, and the case-study copy says the previews are
illustrative rather than pixel-accurate or client results—so Council must not
invent imagery or results to close that visual difference. Owner direction
remains the decision point: accept the restrained abstract concept treatment,
or authorize a bounded, provenance-safe visual asset plan. Separately, this
round's Work captures confirm the R33 carry-forward that its introduction uses
the transparent `signal-grid-bg` rather than a protected glass copy field;
copy remains legible, but the active site-wide blue-glass completion direction
is not yet fulfilled on this route.

### CYC-R34-F004 — Carry-forward release blocker: Privacy and Terms

Local route smoke returned `200` for `/work`, all three case studies, and
`/start`, while `/privacy` and `/terms` remain linked `404` routes. Preserve
this trust/legal blocker until the Owner supplies or approves bounded policy
content, jurisdiction, and actual-tool disclosures; Council must not invent
legal text.

### CYC-R34-F005 — Capability boundary

This round proves the in-app Browser's CUA key paths, not a physical keyboard,
OS-level reduced motion, Safari/Firefox, a second device's display scaling,
field Web Vitals, or final Owner visual acceptance. Locator `.press` behavior
was not treated as product evidence when the CUA path was available. Production
domain, legal, email, and other external side effects remain unconfirmed.

## Next-Builder plan

Preserve the honest Concept labels, real filter state/empty states, SVG
semantics, responsive containment, and Work → case-study → Planner handoff.
Ask the Owner to choose between accepting the current abstract concept-art
level and authorizing a provenance-safe visual asset plan; do not copy mockup
screens or generated claims. In parallel, the smallest active visual-system
slice remains a shared protected `PageIntro` glass field for Work and the other
non-Home introductions, with composited contrast checked at desktop/tablet/
phone/narrow widths. Keep Privacy/Terms as an explicit Owner/legal task. The
next Council should use a different capability—attended keyboard/OS motion,
Safari/Firefox, second-device scale, or production-like field vitals—rather
than repeating this same Work filter review without new Owner/source evidence.

## Publication and cleanup

The Normal substantive threshold was reached at `2026-09-01T03:00:01.889Z`
(`25m00.000s` from scheduler minute zero). Report publication completed at
`2026-09-01T03:00:22.2206401Z` (`25m20.3316401s`), and cleanup completed at
`2026-09-01T03:01:24.4972556Z` (`26m22.6082556s` total), before the minute-30
hard edge. The guard, round root, port `5373`, registered Council processes,
and Council-owned Browser tabs were all absent after closeout.
