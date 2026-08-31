# Cyvexly Shared Deployment Round 15 Report

Archived from the Active Chunk hot path during Round 18 latest-three rotation.
The report text below is preserved from the prior canonical record.

## Round 15 report — global round 15

### Preserved plan, intake, and methodology

**Session:** `builder-20260831T091345658Z-b8c1c2b439ba`; lock claimed
`2026-08-31T13:13:46.0974085Z`; start HEAD `57480e3`; no active PM prompt.
Pre-repair plan:
`builder/evidence/round-15-live-video-deployment-plan.md`.

The Owner reported, “it still didn't show up on the website... the video”. The
accepted source already contained the Round 11 video and later local/browser
proof, so another media edit would have treated the visible symptom. The normal
connected-Render method is to deploy a configured Git branch on push. A real
public baseline, GitHub default branch, and branch graph identified a stronger
root-cause test: compare public output to `main` and `master`, then fast-forward
only if no independent `main` work existed.

### Root cause and completed work

The public Render Home had zero video/control elements and the exact old Orbit
labels. GitHub default/deployment source `main` remained at pre-video commit
`c13ae7a`; accepted Builder source had been pushed only to `master` at
`57480e3`, 52 commits ahead. `main` had zero unique commits and was a strict
ancestor. A non-force `git push origin master:main` safely published the full
accepted continuous history. The public ETag/content changed about 51 seconds
later and began serving the video.

The local branch was renamed from `master` to `main` and now tracks
`origin/main`, closing the recurrence path for ordinary future pushes. Remote
`master` remains preserved at the same source. No product code, media byte,
hosting setting, domain, credential, scheduler, or automation was changed.

### Public rendered comparison and verification

- Opened `round-15-live-home-before.png`: old Orbit graphic, no video/control.
- Opened final desktop/default and exact 390×844 phone captures: one contained
  16:9 showcase, visible Pause control, preserved copy/actions, no old Orbit,
  and no horizontal overflow. Phone shell is `327×183.94` at `x=24`.
- Public poster is `200 image/webp` (12,006 bytes); full MP4 is
  `200 video/mp4` (3,978,486 bytes); `bytes=0-1023` returns `206` and the exact
  `Content-Range`.
- Real browser video decoded at 1280×720/30 seconds with `readyState=4`, no
  error, and advancing playback. Pause held (0–0.088 seconds observed drift),
  Play advanced 1.21–1.49 seconds, and the 29.7-second boundary wrapped to
  1.092 seconds without entering `ended`.
- Separate Chrome 151 preference states: reduced motion and data saver each
  held at time `0` with the poster/Play control; explicit Play advanced about
  1.19 seconds in both. Normal state remained muted, looping, and inline.
- MP4 probe: silent H.264 High, 1280×720, 24 fps, 30 seconds, YUV420p,
  ~1.06 Mbps; `moov` precedes `mdat`, confirming fast-start structure.
- Live console warning/error log is empty. All 22 expected public pages/assets
  return `200`; unknown service and the three documented Owner-blocked routes
  return their expected `404`; expected HTML pages retain `main`/H1 baselines.
- Local lint, optimized 23-page build, and post-build TypeScript pass. The only
  build warning is the known Owner/domain-blocked `metadataBase` fallback.

Exact values, the official Render method, hashes, branch/source evidence, and
limits are in `round-15-live-video-deployment-verification.md`.

### Audibles, diff accountability, and limits

The first local preference-test launch combined proof and cleanup and was
blocked before execution by the command safety layer; nothing started or was
removed. Launch, proof, ownership check, and cleanup were split. The only
Builder-owned Chrome profile was placed under the OS temp root, Browser.close
ended Chrome, and the exact verified profile was moved to the Recycle Bin. The
temporary helper script was deleted. No Council process, runtime, evidence, or
dirty file was touched.

Diff-to-plan: implementation consists of the planned safe branch fast-forward,
public deployment verification, recurrence-proof local tracking, three cited
captures, verification/plan records, and canonical continuity updates. No
product file changed because current source was correct. Diff-to-belief found
only those Builder-owned records plus the deliberate round-12 latest-three
archive rotation; all other dirty paths are concurrent Council-owned records
and remain excluded from Builder adoption. A newer Owner-directed hero-video
mockup and its 2026-08-31-07 direction arrived during closeout, were visually
reviewed, and are preserved as authoritative input for a separate next-round
redesign; they do not alter this deployment-repair claim.

The Render dashboard/settings and logs were not credential-accessible, but the
strict before/after branch/output fingerprints, public ETag change, official
platform behavior, and real render prove the deployed result. Physical Safari/
Firefox and the Owner's original second computer were not checked. Existing
founder/legal/domain/email/art-framing decisions remain unchanged.

### Completion state

**DONE WITH PROOF** for the Owner-reported live-video gap. The showcase is now
visible and working on the real website. **OWNER REVIEW STILL ACTIVE** for final
mockup parity and original second-device scale.
