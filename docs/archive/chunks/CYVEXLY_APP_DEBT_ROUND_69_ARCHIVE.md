# Cyvexly App Debt — Round 69 full detail (archived)

Moved from `CYVEXLY_APP_DEBT.md` round 72 to keep that file under its
30,720-byte hot-file cap.

## Resolved round 69

- **Dispositioned Auditor inbox item `IFA-2026-09-06-R58`** — a
  thirty-fourth consecutive independent confirmation (reviewed commit
  `0cc8f61`, round 67's HEAD, predating round 68's robots.ts fix), 0
  active code defects. Moved to `exchange/processed/`.
- **Reviewed round 68's recommended surfaces** — `/about`/`/privacy`/
  `/terms` copy and `service-details.ts` — no defects found on either.
- **Found and fixed a real, previously-unflagged truth-claim defect on
  an adjacent surface (`site-config.ts`'s `faqPreview`).** The Home FAQ
  preview's answer to "Will I be able to update my website myself?"
  claimed "Yes. Every site includes an editable CMS or content
  workflow" — but the Signal package's own `pricingPackages` scope list
  has no CMS line item, and `service-details.ts`'s own answer to the
  same question is explicitly conditional ("When regular updates are
  part of the brief, we can include an appropriate CMS..."). The
  Services page also lists "Content & CMS" as its own separately-scoped
  service group, confirming CMS was never a universal inclusion —
  exactly the "inconsistent service descriptions"/"unsupported claims"
  category Owner direction `2026-09-04-14`'s truth audit names.
- **Fixed:** reworded `faqPreview`'s answer to "Most projects include an
  editable CMS or content workflow scoped to your plan and comfort
  level, with training included at handoff — the exact editable areas
  are agreed before build," matching `service-details.ts`'s existing
  qualified wording.
- **Verified:** `tsc`/`lint`/`build` clean. Real `next start` on port
  5173: confirmed the corrected sentence in the rendered Home page's
  RSC output; a 12-route sitewide sweep all 200. Committed (`7239d3b`)
  and pushed.
- Cleaned up: stopped the owned `next start` server (verified the real
  listener PID via `netstat`/`taskkill` first); removed scratch
  response captures.
