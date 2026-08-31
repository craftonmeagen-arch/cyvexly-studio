# Cyvexly Next Builder Handoff

## Round 15 closeout

**Session:** `builder-20260831T091345658Z-b8c1c2b439ba`
**Lock claim:** `2026-08-31T13:13:46.0974085Z`
**Accepted product source:** `57480e3` on `main`
**Video source commit:** `34a5bd3`
**PM prompt:** no active prompt
**Source safety:** remote `main` was fast-forwarded without force from
`c13ae7a` to accepted source `57480e3`; remote `master` was preserved at the
same source. Council-owned files and evidence remained untouched. No scheduler
or automation was modified.

## Completed work

- Reproduced the Owner's report on the real public Render Home: it served the
  older orbital hero and contained no video despite accepted local source.
- Proved the deployment mismatch: GitHub's default/deployed `main` was 52
  commits behind accepted `master`, with no `main`-only commits.
- Fast-forwarded `origin/main` to `57480e3`, then renamed the local accepted
  branch to `main` and configured it to track `origin/main`.
- Watched the public HTML change, then proved the accepted 30-second showcase
  appears, loads, autoplays muted, loops, and has a visible Pause/Play control.
- Preserved remote `master` as a recoverable historical pointer rather than
  deleting it during the incident repair.

## Verification

- The public Home, poster, and MP4 return 200; the MP4 returns `video/mp4` and
  supports byte-range delivery with 206 responses.
- Real public desktop and exact 390x844 phone renders show the video without
  horizontal overflow. Playback advances, Pause/Play works, and the loop
  crosses the 30-second boundary without ending.
- Reduced-motion and data-saver preferences begin paused and allow explicit
  user playback; normal preference begins playing. All modes remain muted,
  inline, and error-free.
- Public smoke covered 22 expected pages/assets plus expected 404 behavior;
  browser console warnings/errors were empty.
- The media is H.264/yuv420p, 1280x720, silent, 30 seconds, approximately
  3.98 MB, with `moov` before `mdat` for fast-start delivery.
- Lint, optimized build (23 pages), immediate post-build TypeScript, and local
  route checks pass. The known domain-blocked `metadataBase` warning remains.
- Durable plan, before/after renders, and verification are indexed in
  `docs/agent-system/cyvexly/builder/evidence/INDEX.md`.

## Blockers and honest limits

- The Owner has not yet confirmed the live result on the exact computer that
  first exposed the missing-video or scale issue.
- The Owner's newer, separately recorded visual direction says the live video
  still reads like a thumbnail and should become a larger integrated hero reel.
  This round repaired deployment truth and did not absorb that new redesign
  into the already bounded incident slice.
- `/about` remains Owner-blocked on founder identity/story/image. Privacy/Terms
  jurisdiction, production-domain metadata, transactional email, and abstract-
  versus-commissioned concept-art framing remain Owner decisions.
- Physical Safari/Firefox, field Web Vitals, and the original second computer
  were not available in this round.

## Recommended next tasks

1. Ask the Owner to hard-refresh the public Home and confirm the video on the
   exact affected computer; capture viewport, DPR, browser font settings, and
   OS display scale if its apparent zoom still differs.
2. Treat `CYVEXLY_OWNER_DIRECTION.md`'s 2026-08-31-07 larger integrated Home
   hero-video direction and its durable mockup as the next visual source. Plan,
   implement, render, and compare it in a fresh Builder round.
3. Route founder/legal/domain/email/art-framing decisions without inventing
   facts. Build `/about` only when real founder inputs arrive.
4. Keep `main` as the deployment/source branch. Do not delete remote `master`
   unless the Owner separately authorizes cleanup after a safe retention period.

## Completion state

**DONE WITH PUBLIC PROOF** for round 15's live-video deployment repair.
**OWNER DEVICE CONFIRMATION PENDING** for the original computer and final visual
fidelity judgment.
