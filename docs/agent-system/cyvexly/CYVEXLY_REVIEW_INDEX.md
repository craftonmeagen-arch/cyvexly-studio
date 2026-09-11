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

Auditor publications `IFA-2026-09-10-R117`, R118, and R120–R127 each repeated
a zero-defect pass of old accepted source
`48a2470385e7641b1bd500eed55850286896677e`. Their inbox items were consumed and
moved to the external processed lane; published reports/evidence remain
external. They do not cover Chunk 9. Legacy Team 2 R90–R92 inbox items remain
untouched and outside the primary lane.

Round 164 corrected the review source selector: the lifecycle uses an explicit
**Active review source** when a candidate is declared and otherwise falls back
to the accepted source. Chunk 11 now declares exact active review source
`4232574`; accepted source remains `c8bc73d`. The isolated
auditor/council/functional lifecycle suite passes all 57 checks.

Latest Builder disposition: R130 passed exact corrected source `ca2b84e`,
independently reconfirmed `CYV-IFA-014` resolved, and supplies clean challenge
2 of 2 after R129. Its inbox item was consumed; immutable report and evidence
remain in the external review root. The two exact-source reviews close Chunk 9
in global round 169. R131 later reverified that pre-rail baseline with zero
defects; its inbox was consumed, but it does not cover Chunk 10 candidate
`c8bc73d`. The primary Auditor automation remains stored `PAUSED`.

Auditor `IFA-2026-09-10-R132` is the first exact-source review of Chunk 10
candidate `c8bc73d`. It passed with zero defects across visual hierarchy,
rail controls and geometry, keyboard/touch operation, end states, reduced
motion, responsive containment, and regression suites. Its operational inbox
item is processed; immutable report/evidence remain external. R132 supplies
clean challenge 1 of 2; R133 below supplies the second independent challenge.

Auditor `IFA-2026-09-10-R133` independently passed exact `c8bc73d` with zero
defects and supplies challenge 2 of 2 after R132. Its operational inbox item is
processed; immutable report and 20 screenshots remain external. The two clean
exact-source reviews close Chunk 10 in global round 174 and make `c8bc73d`
eligible for acceptance, publication, and deployment.
