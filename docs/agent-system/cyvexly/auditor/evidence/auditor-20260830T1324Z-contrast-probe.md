# IFA-2026-08-30-R1 contrast probe

- Runtime: Auditor-owned `http://localhost:5273`
- Viewport: 1440×900
- Element: primary `Describe your project` link (`a[href="/start"]`)
- Rendered foreground: `rgb(255, 255, 255)`
- Initial rendered background: `rgb(20, 120, 255)` (`#1478FF`)
- Rendered text size/weight: 14px / 500
- Calculated WCAG contrast ratio: **4.07:1**

The control is normal-sized text, so the WCAG AA 4.5:1 threshold applies. The initial primary CTA color pair was below that threshold.

The initial `View all projects →` text link used the same `#1478FF` cyber blue over the arctic background (`#EEF4FA`) at 14px, measuring **3.67:1**, also below 4.5:1.

## Refreshed source disposition

After the source moved, the latest candidate changed the accent to `#0F66E0` and the hover/focus state to `#0B4FB0`. A refreshed 1440×900 runtime probe measured **5.25:1** for white text on `#0F66E0` and **4.74:1** for `#0F66E0` text on `#EEF4FA`; both clear 4.5:1. `CYV-IFA-004` is therefore closed within this round and is not an open current finding.
