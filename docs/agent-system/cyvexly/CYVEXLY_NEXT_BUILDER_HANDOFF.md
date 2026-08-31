# Cyvexly Next Builder Handoff

## Round 11 closeout

**Session:** `184dd314-df8f-4e46-8a1f-37dcb993f775`
**Lock claim:** `2026-08-31T05:09:16.0099645Z`
**Product commit:** `34a5bd3` — add accessible Home showcase video
**PM prompt:** no active prompt
**Source safety:** Builder product source is committed. Council-owned dirty
files/evidence and the shared inbox remain intentionally untouched. No scheduler
or automation was modified. Owned runtime/Chrome processes are stopped, the OS-
temp Chrome profile and disposable `.next` output are removed, and Builder
scratch captures/scripts are clean.

## Completed work

- Adopted the Owner-supplied `yes_security_and_reliabilty_a.mp4` as a real Home
  hero advertisement. The shipping derivatives are a silent fast-start H.264
  1280x720, 30-second, 3.98MB loop and a 12KB 1280x720 WebP poster.
- Replaced the static orbit with `HeroShowcaseVideo`: responsive glass framing,
  visible Play/Pause, supplementary figure description, document-visibility and
  reduced-motion handling, poster fallback, and a retained user-pause state.
- Found and fixed one measured performance/preference defect: explicit browser
  data-saving mode previously still autoplayed the 4MB asset. It now holds the
  poster, responds to live connection changes, and still permits explicit Play.
- Removed the now-unused `OrbitGraphic` component.

## Verification

- `pnpm exec eslint src` and full `pnpm run lint` — pass. A live Chrome profile
  inside project `.codex/tmp` had made the first repository-wide scan
  pathologically slow; the passing rerun used the profile outside the project.
- `pnpm run build` — pass, all 18 generated app routes; only the known
  Owner/domain-blocked `metadataBase` warning.
- Post-build `pnpm exec tsc --noEmit` — pass.
- Opened exact Home production renders at 1440x900, 768x1024, and 390x844 plus
  the reduced-motion phone still. All remain width-contained with copy/actions
  first and no caption/control overlap.
- Normal video advance, zero-drift pause, the 30-second loop, reduced-motion
  poster/explicit native Enter play, save-data before/after, live connection
  changes, and persistent user pause all pass.
- Thirteen status cases and twelve phone content routes pass main/H1/control-
  name/overflow checks with zero unexpected console/runtime errors.
- MP4/WebP MIME, byte lengths, `Accept-Ranges`, and 1,024-byte 206 responses pass.
- A cold 150ms/~1.64Mbps desktop run measured video/poster LCP at 1.004s, CLS
  `0.00009`, active playback after eight seconds, and zero overflow.
- A 720-frame global-luminance scan found no adjacent average-brightness delta
  above 10; this is not a substitute for a WCAG local flash-area analysis.
- Council `CYC-R11-20260830-01` independently accepted the visual direction and
  found no responsive/semantic regression. Its requested provenance,
  reduced-motion, and constrained-network evidence gaps are now covered by the
  Builder plan/comparison and runtime proof; Owner parity remains open.
- Durable proof is indexed in
  `docs/agent-system/cyvexly/builder/evidence/INDEX.md`.

## Blockers and honest limits

- Final Home/mockup parity remains an Owner judgment. Round 11 materially adds
  luminous motion/device density but does not self-certify visual acceptance.
- The actual second computer still needs Owner confirmation for round 9's scale
  correction.
- Existing Owner inputs remain: About founder identity/story/image;
  Privacy/Terms jurisdiction and markets; production domain plus transactional
  email provider/credential; abstract-versus-commissioned concept-art framing.
- Physical Safari/Firefox, deployment cache behavior, and field (real-user)
  Core Web Vitals were not checked; the controlled constrained profile passed.
- The Owner supplied the source for this requested site use; no independent
  license, model-release, or third-party-rights audit was available or claimed.
- Sampled source frames contain baked-in stylized pseudo-interface wording,
  including truncated/malformed labels. It is mostly small at hero scale, but
  the Owner should watch the complete loop before release and provide a corrected
  master if any frame-level wording is unacceptable; CSS cannot repair source
  pixels honestly.
- The loop function is proven, but first/last-frame inspection shows a visible
  restart from the ending performance dashboard to the opening orb. Ask the
  Owner whether that cut is acceptable; otherwise derive/obtain a deliberately
  crossfaded master rather than calling the current source seamless.
- Port 5173 was initially occupied by an unrelated Vite process and was
  preserved; round proof used owned 5183. It exited independently, and final
  checks find 5173, 5183, and 9228 free. A live headless-Chrome profile must live
  outside the project tree because Turbopack/Tailwind may scan and collide with
  its locked database files.
- `CYVEXLY_ACTIVE_CHUNK.md` (30,418 bytes) and `CYVEXLY_WATCH.md` (20,139 bytes)
  are within but very near their 30KB/20KB hot-path caps. Round 12 must rotate
  the oldest active report and Watch material before adding substantive text.

## Recommended next tasks

1. Ask the Owner to compare round 11's desktop/tablet/phone evidence with
   `mockups/01-home.png` and identify the largest remaining fidelity gap.
2. Recheck the original second computer at 100% zoom. If it still differs,
   capture effective CSS viewport, DPR, computed root size, browser font
   settings, and OS display scale before changing source.
3. If media performance remains the chosen priority, compare the current cold
   1.004s controlled LCP baseline against an evidence-backed smaller/multi-codec
   derivative under the same profile; do not silently rewrite the Owner's source
   or sacrifice poster quality.
4. Route the four long-standing Owner decisions. Domain/email unlock metadata
   and real Planner delivery; founder/jurisdiction unlock missing routes.

## Completion state

**DONE WITH PROOF** for round 11's Owner-directed hero showcase slice.
**OWNER REVIEW PENDING** for final mockup parity and second-computer scale.
