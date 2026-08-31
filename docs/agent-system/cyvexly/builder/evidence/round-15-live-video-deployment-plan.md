# Round 15 — Live Home video deployment plan

**Session:** `builder-20260831T091345658Z-b8c1c2b439ba`
**Lock claimed:** `2026-08-31T13:13:46.0974085Z`
**Plan preserved before implementation:** 2026-08-31
**PM prompt:** no active prompt

## Intended outcome

Restore the already accepted Round 11 Home showcase video to the real public
site at `https://cyvexly-studio.onrender.com/`. The deployed Home hero must
serve the current accepted component and media asset, not the obsolete orbit
graphic, while preserving the current headline, actions, responsive layout,
accessibility control, reduced-motion/data-saver behavior, and honest media
provenance.

## Baseline and root-cause hypothesis

- Public Render HTML currently has `videoCount = 0`, no Play/Pause control, and
  three visible Orbit labels (`STRATEGY`, `DESIGN`, `DEVELOPMENT`). The opened
  live capture is `round-15-live-home-before.png`.
- GitHub's default branch is `main` at `c13ae7a`; the current Builder branch and
  pushed product source are `master` at `57480e3`.
- `main` has zero commits absent from `master`; `master` is a strict 52-commit
  fast-forward of `main` and contains product commit `34a5bd3` plus
  `public/media/cyvexly-services-loop.mp4`.
- The normal connected-repository deployment pattern is to deploy a configured
  branch after a push. The cheapest falsifier is a safe fast-forward of the
  configured/default branch followed by direct public HTML, asset, header,
  visual, and playback checks. If Render does not advance after the push, the
  deployment hook/configuration—not the video component—is the remaining layer.

## Visual and responsive target

This round does not redesign the hero. It publishes the already planned,
implemented, and proved Round 11 composition:

- desktop/tablet: the existing copy hierarchy remains paired with one contained
  16:9 glass media panel;
- phone: the same content and control remain available in the established
  stacked layout with no horizontal overflow;
- poster remains visible before playback or whenever autoplay is held;
- one visibly named Play/Pause control remains available; the video is muted,
  loops, plays inline, and is decorative to the sales message rather than a
  source of required information;
- the old Orbit graphic must be absent after deployment.

## Coherent slice and method

1. Confirm the branch relationship and current public baseline.
2. Fast-forward remote `main` to the already reviewed `master` source without a
   force push or history rewrite.
3. Observe the public deployment until it serves the new HTML and media, or
   prove that the automated deployment connection failed.
4. Exercise the live video through the real page at representative desktop and
   phone widths, including poster/source/control presence, playback advance,
   pause, loop attributes, asset MIME/range delivery, overflow, and console.
5. Run local lint/build/typecheck and reconcile every Builder-owned diff with
   this plan; preserve all Council-owned concurrent files untouched.

## Risks and boundaries

- Pushing `main` can trigger a real public deployment. The Owner's report that
  the public site is stale, combined with the earlier explicit commit/push
  request, authorizes correcting the branch that already serves that site.
- No deploy-platform credentials, settings mutation, domain change, scheduler
  change, or force push is authorized or needed.
- The fast-forward publishes all 52 reviewed commits after `c13ae7a`, not only
  the video. This is intentional because those commits are the accepted
  continuous product history and `main` has no independent work to preserve.
- If deployment remains stale, stop at the proven hosting boundary and route
  the exact missing Render authorization/configuration rather than guessing.

## Acceptance evidence

- remote `main` and `master` resolve to the same commit after a non-force push;
- public Home HTML has one video, `/media/cyvexly-services-loop.mp4`, and one
  Play/Pause control, with the old Orbit labels absent;
- public poster/video return successful media responses, including byte-range
  video delivery;
- opened desktop and phone captures match the established hero target with no
  clipping or horizontal overflow;
- playback time advances, Pause stops it, and the native loop/muted/playsinline
  properties remain true;
- live console has no new video/runtime error;
- lint, optimized build, and post-build TypeScript pass locally.
