# Cyvexly Review Index
**Independent roles:** Auditor, Council, Functional Smoke; explicit invocation or existing Owner-managed schedule.

Current authoritative root: C:/app projects/website-independent-review.
| Role | Current report | Archive | Memory |
|---|---|---|---|
| Auditor | reports/AUDITOR_CURRENT.md | reports/AUDITOR_ARCHIVE.md | memory/auditor/ |
| Council | reports/QUALITY_METHODS_CURRENT.md | reports/QUALITY_METHODS_ARCHIVE.md | memory/council/ |
| Functional Smoke | reports/FUNCTIONAL_AUDIT_CURRENT.md | reports/FUNCTIONAL_AUDIT_ARCHIVE.md | memory/functional/ |

These paths are relative to the external root. A missing first report means no review yet;
provisioning must never replace a real report with a placeholder.
Each new publication also has a permanent reports/published/<role>/<review-id>.md and its
own exchange/operational-inbox/<role>-<review-id>.json. Read every unconsumed item, not
only the latest current report. Builder records findings/disposition in handoff/debt and
moves the consumed item to exchange/processed/ without deleting the unique report.

Historical fallback: this directory's reports/AUDITOR_CURRENT.md, QUALITY_METHODS_CURRENT.md,
and archives/evidence record pre-migration reviews. They remain evidence for those sources,
not active role instructions or new review results. Seeded external copies keep their actual
identities. In-repository reviewer memory is historical once external memory is present.
Allocate finding IDs above prior current/archive/published report maxima, including historical
prefixes. Never renumber an old finding. New Functional findings use CYV-FS.

Current reports need an actual published review identity and exact reviewed source. Pending
Council R42 publication/cleanup remains unverified until its evidence is reconciled.
