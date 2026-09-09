# Round 138 — featured Nexora proof

- **Observed baseline:** the public Home and Work cards describe Nexora as a
  working demonstration but render the older abstract five-panel SVG. The new
  regression fails against `https://cyvexly.com` on that missing real capture.
- **Accepted target:** the existing, already-published
  `public/media/nexora-release-demo.png` capture of the actual fictional Nexora
  dashboard. The case study already uses this asset beside its 390px capture.
- **Implemented result:** the shared `ConceptPreview` now renders that real
  dashboard capture, updating Home, Work, Services, service details, and the
  Nexora case-study hero without changing claims, actions, or demo behavior.
- **Measured result:** the Work preview renders at 537 × 335.625 CSS pixels on
  desktop and 322 × 201.25 CSS pixels at 390px, with zero page overflow or
  captured runtime errors.
- **Opened visual evidence:** `work-nexora-desktop.png` and
  `work-nexora-phone.png` show the actual dashboard fitting the established
  glass cards and remaining recognizable at both sizes.
- **Interactive evidence:** visible IAB comparison showed the prior public
  schematic and the local real-dashboard card on Home and Work at 390px. No
  inquiry, account action, or external message was submitted.
