# Council R22 public Work and case-study review

- Round: `council-20260831T153900Z` / review `CYC-R22-20260831-01`
- Scheduler minute zero: `2026-08-31T15:39:18.493Z`
- Snapshot head: `dc0f104b3008f20842f3d86121d3a0d9fff7be3c`
- Start dirty fingerprint: `1998D33B3DB037D04875F6D10B81B414966896F98A4B97960053D6A27FA4F7DA`
- Local runtime: isolated Council server on port `5373` (build/lint/typecheck pass).

## Visible public Work review

The public `https://cyvexly-studio.onrender.com/work` route was opened in the
real in-app Browser and literally viewed at 1440×900, 768×1024, and 390×844.
The page keeps one clear H1, honest “Concept project” labels, a coherent grid,
readable copy, and no horizontal overflow (`scrollWidth === clientWidth` at
each viewport). The desktop, tablet, and phone captures are:

- `council-20260831T153900Z-work-desktop.png`
- `council-20260831T153900Z-work-tablet.png`
- `council-20260831T153900Z-work-phone.png`

The `Concept` filter preserves all three concept cards; the `Commerce` filter
reduces the visible cards to Vellora Care. Focused filter states were captured
in `...work-concept-filter-desktop.png` and
`...work-commerce-filter-desktop.png`.

## Case-study path

The Vellora Care card opened `/work/vellora-care`. The rendered case study has
one `main`, one H1 (`Vellora Care`), an explicit “Concept project” label, and
no horizontal overflow at desktop or phone width. Captures:
`council-20260831T153900Z-vellora-desktop.png` and
`council-20260831T153900Z-vellora-phone.png`.

The visual treatment remains intentionally abstract and honest: the Vellora
concept uses a simple product signal rather than pretending to be a shipped
client screenshot. This matches the Owner’s provenance boundary.

## Source/runtime and boundaries

The isolated runtime served the same accepted source head as R21; no product
source diff exists after `dc0f104`. Read-only route smoke returned `200` for
Home, Work, Vellora, and Services, and `404` for the documented unknown service.
No user data was entered or transmitted. The public video deployment remains
covered by R21; this round intentionally changes the question to Work/filter/
case-study coherence rather than repeating the video probe.
