# Round 25 navigation resilience verification

## Accepted scope and method

Round 25 is the required fifth-round wider audit. Fresh Auditor R20 and Council
R40 found no new defect in accepted Round 24 truth; known legal, metadata,
founder, email-provider, and concept-release questions remain Owner decisions.
Comparing recent Builder methods also showed that another token or stacking
pass would be churn. The reachable shared gap was compact-header lifecycle and
current-location semantics. The implementation follows the W3C APG disclosure
navigation pattern and Next.js route-aware Client Component pattern without
changing the Owner-approved mockup 06 visual contract.

## Product changes

- `SiteHeader` now closes an open compact disclosure on Escape and returns
  focus to its named trigger, clears hidden compact state on entry to the
  1024px desktop breakpoint, and exposes `aria-current="page"` for Home,
  standard/nested Services and Work routes, Pricing, Process, and the Planner
  CTA.
- Existing link activation remains the route-close mechanism; a native
  Services → Pricing → browser-Back baseline already returned closed, so no
  redundant synchronous pathname effect was retained.
- The wide matrix uncovered one existing cross-computer stress defect:
  `/services` reached 402px at a 390px viewport with a 24px root because “Find
  your starting point” was `shrink-0`. That CTA alone can now shrink/wrap within
  its existing field; copy, section hierarchy, theme, and breakpoints did not
  change.

Product commit: `e38851f` (`fix: harden shared navigation resilience`).

## Native interaction and semantic proof

Builder-owned Chrome 151/raw CDP against an optimized production runtime proves:

- baseline Escape left the menu open; final Escape closes it and returns focus
  to `button[aria-controls="mobile-nav"]`;
- an open 390px menu closes at 1024px and remains closed when returning to
  390px; native Tab reaches logo → toggle, Enter opens, and the next Tab reaches
  Services;
- route link activation and browser Back leave the disclosure closed;
- current-page semantics pass on `/`, every `/services/*`, every `/work/*`,
  `/pricing`, `/process`, and `/start`, with no false marker on Contact, FAQ,
  Accessibility, Privacy, or Terms.

Council R41 independently built/linted the immutable candidate and reproduced
Escape/focus return, link/Back close, 390→1024→1023 reconciliation, and exact
current semantics in the real in-app Browser. It found no local visual,
contrast, route, content, or accessibility defect; its initial public finding
was explicitly a pre-deployment gate.

## Matrix and rendered comparison

- 19 routes × six exact widths (`1440`, `1024`, `1023`, `768`, `390`, `320`)
  = 114 optimized cases. HTTP status, one `main`, one `h1`, sticky header,
  closed compact state, expected current link, and exact horizontal containment
  all pass. Privacy/Terms are the two known truthful 404s.
- A separate 19-route 390px/24px-root sweep passes structure and containment
  after the CTA correction. `/services` changes from 402px to 390px scroll
  width. The corrected CTA is 224×46 at the normal root and 256×98 with a
  centered two-line wrap at 24px, both inside the 390px document.
- Opened 1440/390 before/after header renders are byte-identical at all three
  closed/open viewpoints. Because no color or surface changed, Round 24's
  composited WCAG proof remains exact; new semantic attributes have no visual
  selector. Opened service-detail phone, clean Planner tablet, work-detail
  desktop, and normal/root24 CTA frames preserve protected readable blue-glass
  hierarchy.
- Browser warning/error entries are zero on implemented routes; the only
  recorded network errors are the expected Privacy/Terms 404 responses.

## Build and accountability

- `pnpm run lint` — pass.
- `pnpm run build` — pass, including TypeScript and all 23 generated pages;
  only the known Owner-domain-blocked `metadataBase` warning remains.
- Exact local, `origin/main`, and external `refs/heads/main` matched
  `e38851fe477c3183472eaf0e21e8b3b78a6fa887` after product push.
- Concurrent Auditor/Council files were preserved and excluded from Builder
  staging. No scheduler/automation state was read or changed.

## Public adoption and limits

Render changed from pre-R25 ETag `8pc78tpgnj2ry5` to adopted ETag
`44zd3ca5e02ryz`. Public HTML exposes `aria-current` and the wrapping-safe CTA
class. Fresh public Chrome/CDP proof at 1440/390 passes exact containment,
Services current semantics, Escape close/focus return, route/Back close,
390→1024→390 state reconciliation, and native Tab→toggle→Enter→Services order
with zero console warnings/errors. All three public header PNGs are byte-
identical to optimized local truth. This closes Council `CYC-R41-F001`'s
deployment gate.

Physical keyboard hardware, Safari/Firefox, field Web Vitals, real email
delivery, a true clean Auditor Planner context, final domain/legal/founder
facts, and Owner original-computer visual acceptance remain unclaimed.
