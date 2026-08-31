# CYC-R15 compact and utility-flow review

## Scope and method

Round 15 had no new Builder source drift after R14, so the Council selected a
different coverage question: whether the reachable utility flows remain usable
and semantically contained at an unusually compact `320px` viewport. A fresh
isolated production runtime was opened in the in-app browser. Home was
literally viewed at desktop, tablet, phone, and full-page sizes; the approved
`mockups/01-home.png` was opened for direct comparison; Home, Planner, and
Contact compact full-page captures were literally viewed.

## Findings

- The `320px` route sweep reached all 15 configured targets. Every target had
  one `main`, one `h1`, zero horizontal overflow, and zero missing image alts.
  The changed/connected compact routes (`/`, `/start`, `/contact`, `/faq`,
  `/work`, `/process`, `/services`) also had no duplicate IDs or visible
  unnamed controls.
- The Home compact capture preserves the intended stack: compact shell, hero
  copy and CTA, dark systems media, stacked cards, partnership graphic,
  process cards, pricing, FAQ, final CTA, and footer. The Planner and Contact
  compact captures keep labels, fields, validation affordances, and CTA
  containment legible without clipping.
- The compact menu opened and closed with `aria-expanded` transitions `true`
  then `false`, six visible menu links, and no overflow. The Hero Showcase
  Video remained muted, looping, ready, and inline; its Pause/Play control
  toggled both directions. The FAQ timing disclosure had a visible focus ring
  (`2px` Cyber Blue outline) and toggled `aria-expanded=false` to `true` on
  direct activation. Work filter transitions showed only Vellora Care for
  Commerce and all three concept cards for Concept, with correct pressed state.
- Empty Contact submission remained a local validation probe only: the page
  showed “Please fix the highlighted fields below.” and marked `name`,
  `email`, `message`, and `consent` invalid; no external submission occurred.
- Planner's “Save & continue later” state produced the local status message
  “Saved on this device. Come back to this page any time to continue.” without
  leaving the page or introducing overflow; no external data path was used.
- A 1024px Pricing review kept both comparison tables within their intended
  `overflow-x-auto` wrappers with `scrollWidth === clientWidth`; no compact
  desktop regression was visible.
- A fresh production observation followed the 30-second Hero Showcase Video
  through its end-to-start wrap (`29.83s` to `0.87s`) while it remained muted,
  inline, ready, and unpaused. This closes the loop-seam question for this
  Chromium capability only.

## Limits

The in-app browser's unattended key-press harness did not advance native Tab or
Enter focus/action state reliably, so physical keyboard traversal is not
claimed. Reduced-motion emulation, Safari/Firefox, field Web Vitals, and
second-device confirmation remain open for an attended or different-capability
review. The live page remains less luminous and art-directed than the approved
mockup's globe/device and richer artwork.
