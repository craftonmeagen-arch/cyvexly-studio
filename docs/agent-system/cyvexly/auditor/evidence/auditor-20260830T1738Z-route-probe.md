# IFA-2026-08-30-R2 route and interaction probe

- Round: `auditor-20260830T1738Z-002`
- Runtime: Auditor-owned `http://localhost:5273`
- Source candidate: `a8bf75b54dd4dd6e740129d0b295b0eebd13c6e5adf0148b4fbb36f3e97d2526` (`src/`, 26 files); current HEAD `b45ea23` with a dirty worktree.
- Method: visible same-origin links were collected from the rendered home page and each distinct target was navigated in the real in-app browser; current routes were then exercised at `1440×900` and `390×844`.

## Reachability

The refreshed route set returned rendered content for `/`, `/services`, `/work`, `/pricing`, `/process`, `/contact`, `/faq`, `/accessibility`, all three case-study slugs, and all five `/services#...` anchor targets. `/about`, `/start`, `/privacy`, and `/terms` rendered the intentional custom 404 (`Page not found — Cyvexly Studio`, H1 `This page doesn't exist yet.`).

The custom unknown-case-study path `/work/not-a-real-project` also rendered the custom 404 with recovery links to Home, Services, Work, and the Project Planner.

## Stateful checks

- Work filters: `Business Site` isolated Aurora Spaces and Nexora Systems; `Commerce` isolated Vellora Care; `Concept` returned all three; `Redesign` and `Landing Page` returned the explicit empty state `No projects match that filter yet.`; `All` restored all three. The empty-state behavior is truthful, but those two filters currently have no sample project.
- Pricing mobile navigation opened with `aria-expanded="true"` and six links; closing restored the compact header.
- Pricing FAQ `Are these prices final?` changed `aria-expanded` from false to true and mounted its `aria-controls` panel.
- Contact empty submit stayed on `/contact`, added `aria-invalid="true"` to name/email/message/consent, and rendered the four specific validation messages plus a `role="alert"` banner. No valid-submit was attempted because the valid path opens a mail client and would be an external communication side effect.
- All tested pages had one H1, no unnamed links, and no horizontal overflow at the tested mobile width. A clean browser tab had no console warnings or errors.

Durable visual evidence: `auditor-20260830T1738Z-case-study-desktop.png`, `auditor-20260830T1738Z-work-mobile.png`, `auditor-20260830T1738Z-work-redesign-empty.png`, and `auditor-20260830T1738Z-pricing-desktop.png`.
