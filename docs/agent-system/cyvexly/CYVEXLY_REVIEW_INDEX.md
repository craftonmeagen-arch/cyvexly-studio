# Cyvexly Build Team — Review Index

**Independent roles:** Cyvexly Build Team Independent Forensic Auditor,
Quality & Methods Council, and Functional Smoke Auditor; explicit invocation
or existing Owner-managed schedule.

Current authoritative root: `C:/app projects/website-independent-review`.
| Role | Current report | Archive | Memory |
|---|---|---|---|
| Auditor | reports/AUDITOR_CURRENT.md | reports/AUDITOR_ARCHIVE.md | memory/auditor/ |
| Council | reports/QUALITY_METHODS_CURRENT.md | reports/QUALITY_METHODS_ARCHIVE.md | memory/council/ |
| Functional Smoke | reports/FUNCTIONAL_AUDIT_CURRENT.md | reports/FUNCTIONAL_AUDIT_ARCHIVE.md | memory/functional/ |

These paths are relative to the external root. A missing first report means no review yet;
provisioning must never replace a real report with a placeholder.
Each new publication also has a permanent `reports/published/<role>/<review-id>.md`
and its own `exchange/operational-inbox/<role>-<review-id>.json`. Read every
unconsumed Cyvexly item, not only the latest current report. Builder records
findings/disposition in handoff/debt and moves only the consumed item to
`exchange/processed/` without deleting the unique report. Legacy Team 2 inbox
items are outside this lane and remain untouched.

Historical fallback: this directory's reports/AUDITOR_CURRENT.md, QUALITY_METHODS_CURRENT.md,
and archives/evidence record pre-migration reviews. They remain evidence for those sources,
not active role instructions or new review results. Seeded external copies keep their actual
identities. In-repository reviewer memory is historical once external memory is present.
Allocate finding IDs above prior current/archive/published report maxima, including historical
prefixes. Never renumber an old finding. New Functional findings use CYV-FS.

Current reports need an actual published review identity and exact reviewed source. Pending
Council R42 publication/cleanup remains unverified until its evidence is reconciled.

Latest Builder disposition: Auditor publications `IFA-2026-09-10-R117`, R118,
and R120–R127 each repeated a zero-defect pass of old accepted source
`48a2470385e7641b1bd500eed55850286896677e`. Their inbox items were consumed and
moved to the external processed lane; published reports/evidence remain
external. They do not cover local Chunk 9 candidate `312937c`, which still needs
two separate independent exact-source reviews. Legacy Team 2 R90–R92 inbox
items remain untouched and outside the primary lane.

Round 164 corrected the review source selector: the lifecycle now uses the
explicit **Active review source** from current state (`312937c`) and falls back
to the accepted source only when no candidate is declared. The isolated
auditor/council/functional lifecycle suite passes all 57 checks.
