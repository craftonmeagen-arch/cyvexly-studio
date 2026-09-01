# CYC-R32 Home showcase cleanup review

## Scope and identity

- Review: `CYC-R32-20260901-01`; scheduler minute zero `2026-09-01T00:32:58.594Z`.
- Independent snapshot head: `8e7ad528fe186c0b7a3b5e43ae579a8ce135d9d1`; accepted product change under review is `d6cd17c` (`Simplify and slow the Home showcase`). The snapshot also contains the Round 20 documentation record.
- The shared working tree had concurrent role-owned documentation/evidence changes at snapshot time and afterward; this immutable Council snapshot excluded later changes from the product judgment.
- Council runtime: `.codex/runtime/council/council-20260901T003258Z/runtime`, port `5373`, process `42088`; PM prompt `NO ACTIVE PM PROMPT`.
- Council did not edit product source, tests, Builder/Auditor resources, automation, or `.engine-lock`.

## Product question and method

Round 32 followed the Owner-approved Home showcase cleanup with a fresh direct visual and interaction review. I ran the isolated dependency install, ESLint, optimized Next build, and post-build TypeScript; opened the local snapshot and public Render in the real in-app Browser; literally viewed Home at desktop/tablet/phone/narrow-phone; compared current captures with `mockups/05-home-hero-video-owner-direction.png` and the accepted Owner direction; exercised click, Enter, and Space on the clean media surface; checked local/public media state; and verified MP4 MIME and range delivery. The IAB compositor/DOM boundaries and unavailable OS/Safari/field-vitals capabilities are recorded rather than overstated.

## Verification and evidence

- Install, ESLint, optimized Next build, and post-build TypeScript completed successfully. Next emitted two non-blocking Tailwind optimizer warnings for malformed generated arbitrary-value selectors and the known `metadataBase` fallback warning; no build failure occurred.
- Local Home was literally viewed and captured at `1440×900`, `1024×900`, `768×1024`, `390×844`, and `320×844`; public Render was viewed and captured at `1440×900` and `390×844`. Every settled target has one `main`, one H1, and exact page containment (`scrollWidth === clientWidth`). Current captures are indexed in `council/evidence/INDEX.md`.
- The cleaned showcase has no persistent time pill, advancing progress line, or separate circular control. Its full media surface is a named `role="button"` with `aria-pressed`, `aria-controls`, and visible focus styling. Click paused/resumed the video; locator Enter paused it and Space resumed it in the IAB. The video remained muted, looping, 30 seconds long, and at `0.75×` playback.
- Local and public Home agreed on title, H1, media source, surface label, muted playback, `0.75×` rate, 30-second duration, and exact containment. Local MP4 delivery returned `Content-Type: video/mp4`, `Accept-Ranges: bytes`, and `206 Partial Content` for `bytes=0-1023`; public delivery returned the same MIME/range capability and 3,978,486-byte asset.
- At 320px the stacked hero remains legible and contained; the media surface and CTA stay inside the viewport. At tablet the copy/video stack is intentional and the video preserves its dark signal-reel treatment. Desktop keeps the accepted copy-plus-reel composition and calm glass/grid hierarchy.
- Scrolling the local desktop Home to the connected Selected work slice showed three consistently labeled Concept Project cards and the following “What Cyvexly can do” section without page overflow, preserving whole-product continuity below the changed hero.
- The visible Home “Describe your project” CTA reached local `/start` at phone width with the canonical Planner H1, one main, and exact containment; the review returned to Home afterward without submitting data.
- Source inspection confirms reduced-motion, document-visibility, and data-saver holds remain in `hero-showcase-video.tsx`; no external submit, email, payment, or analytics effect was triggered.

## Findings and disposition

### CYC-R32-F001 — Pass: cleaned showcase matches the accepted Owner interaction direction

The committed cleanup removes the three rejected persistent controls while keeping the media surface operable by click, Enter, and Space. State, label, and `aria-pressed` update correctly; resumed playback reapplies the authored `0.75×` rate and mute. No regression was found in the accepted interaction contract.

### CYC-R32-F002 — Pass: Home remains coherent across responsive widths and deployment

The local and public Home renders preserve one main/H1, readable hierarchy, stacked narrow layouts, the desktop copy/reel balance, and zero page-level horizontal overflow at 320/390/768/1440. The visible phone/tablet/desktop captures show a coherent product surface rather than a cropped desktop layout.

### CYC-R32-F003 — Owner decision: visual fidelity remains gated

The current reel's abstract globe/signal content and clean surface are consistent with the newer Owner direction, while the approved mockup still depicts a richer multi-screen reel, visible playback chrome, and different signal copy. Council does not infer final visual acceptance; Owner review of the deployed cleaned reel remains required.

### CYC-R32-F004 — Carry-forward release blocker: Privacy and Terms

The prior Council evidence still records linked Privacy and Terms 404s on local and public deployments. Keep this trust/legal blocker open until the Owner supplies or approves bounded policy content, jurisdiction, and actual-tool disclosures; Council must not invent legal wording.

### CYC-R32-F005 — Capability boundary: platform coverage remains incomplete

This round used the real IAB plus visible screenshots and an IAB keyboard-like path. It did not prove physical hardware, OS-level reduced motion, Safari/Firefox, a second device's scale, or field Web Vitals. The IAB's DOM remains read-only for stylesheet mutation, so no root-24 stress claim is made.

## Method and next-Builder plan

Preserve the clean media surface, `0.75×` muted loop, reduced-motion/data-saver holds, focus treatment, and local/public asset delivery. The next coherent Builder slice should seek Owner acceptance of the cleaned Home reel and, if requested, refine the reel artwork/copy as a bounded visual task. Keep Privacy/Terms and second-device/platform evidence as explicit blockers; do not restore removed chrome without newer Owner direction.

## Not checked

Physical keyboard hardware, OS-level reduced motion, Safari/Firefox, second-device scale, field Web Vitals, external Planner/Contact effects, final Owner visual acceptance, final Privacy/Terms legal wording, and production domain/email provider were not confirmed.

## Publication and cleanup

Published `2026-09-01T00:58:31.2829494Z` after `25m32.6889494s` substantive
work; cleanup verified `2026-09-01T00:59:31.5586581Z` (`26m32.9646581s` total),
before the hard edge. No Council guard, runtime, port, process, or Browser tab
remains.
