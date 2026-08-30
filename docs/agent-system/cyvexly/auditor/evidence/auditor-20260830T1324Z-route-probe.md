# IFA-2026-08-30-R1 route probe

- Round: `auditor-20260830T1324Z-001`
- Runtime: Auditor-owned `http://localhost:5273`
- Source fingerprint reviewed: `c7051383588fbb1eb02ba5f1eefbebe15033d4368148226f1074efaa8ca46644`
- Probe times: 2026-08-30 13:36 UTC and refreshed 13:48 UTC after a new `src/app/process/page.tsx` appeared in the current worktree.
- Method: loaded `/`, collected its visible same-origin links, then navigated each target in the in-app browser and inspected the rendered result.

`/` loaded the Cyvexly home page. On the initial probe, every other visible same-origin destination rendered the Next.js `404` / `This page could not be found.` screen. On the refreshed probe, `/process` returned a rendered process page; every other destination below still returned 404:

`/services`, `/work`, `/pricing`, `/about`, `/start`, `/work/aurora-spaces`, `/work/nexora-systems`, `/work/vellora-care`, `/faq`, `/services#business-websites`, `/services#website-redesigns`, `/services#landing-pages`, `/services#ecommerce-websites`, `/services#website-care`, `/contact`, `/privacy`, `/terms`, `/accessibility`.

The built route table captured before the new process file reported only `/` and `/_not-found`; the refreshed build listed `/`, `/_not-found`, and `/process`. The refreshed runtime probe confirms `/process` is reachable but the remaining launch destinations are not.
