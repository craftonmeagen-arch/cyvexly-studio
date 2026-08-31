## Round 11 report — global round 11

### Plan and implementation

**Session:** `184dd314-df8f-4e46-8a1f-37dcb993f775`; lock claimed
`2026-08-31T05:09:16.0099645Z`; start HEAD `a1245d8`; no active PM prompt.
Pre-implementation plan:
`builder/evidence/round-11-home-hero-video-plan.md`.

The Owner supplied `yes_security_and_reliabilty_a.mp4` and directed that it be
added to Home. Commit `34a5bd3` replaces the static orbit with the 30-second
showcase's web derivatives: silent fast-start H.264/yuv420p at 1280x720
(3,978,486 bytes) and a 12,006-byte WebP poster. `HeroShowcaseVideo` provides
responsive glass framing, supplementary figure description, and a named,
stateful Play/Pause control. It autoplays only while visible and ordinary motion
is allowed; reduced motion and `navigator.connection.saveData` hold the poster.
Explicit Play remains available, and explicit user pause survives later
visibility/connection changes. The unused `OrbitGraphic` was removed.

### Rendered comparison and proof

Opened exact 1440x900, 768x1024, and 390x844 production captures. The media
measures 528x297, 705x396.56, and 342x192.38 respectively, stays within the
existing hero grid, keeps copy/actions first, and has no phone caption/control
overlap. A reduced-motion phone capture shows the poster-first still. The dark
systems panel materially advances the mockup's luminous motion/device direction
without claiming final Owner parity.

Normal playback advanced 0.904s, the pause control held with zero drift, and a
29.7s seek looped to 0.887s. Reduced motion started paused at time 0; native
Enter on Play advanced 0.893s. A before probe proved save-data still autoplayed
to 1.4s; after the fix it held time 0, explicit Play advanced 0.899s, live
save-data changes paused/resumed, and user pause stayed fixed. MP4/WebP HEAD and
1,024-byte 206 range delivery passed. Thirteen expected route statuses and
twelve 390px content routes passed one-main/one-H1, named-control, and overflow
checks with no unexpected console/runtime error. Lint, production build, and
post-build TypeScript passed; only the known domain-blocked `metadataBase`
warning remains. A cold 150ms/~1.64Mbps run measured video/poster LCP at 1.004s,
CLS `0.00009`, active playback, and zero overflow after eight seconds.

### Audibles, limits, and accountability

The first post-fix build found a Builder instrumentation fault: a live Chrome
profile under project `.codex/tmp` was swept by Turbopack/Tailwind, which failed
on Chrome's locked Cookies DB. The exact owned Chrome tree/profile was removed;
moving the profile to OS temp made the identical build pass. This is now in
Watch. Port 5173 remained occupied by an unrelated Vite process and was not
touched; proof used Builder-owned 5183. It later exited independently; final
checks found 5173, 5183, and 9228 free.

Source diff-to-plan is the Owner media/poster, Home/component/CSS integration,
the data-saver correction found by planned performance testing, and removal of
the now-dead orbit component. Council-owned dirty files/evidence and the shared
inbox remained outside Builder commits. No schedule or automation was touched.

Not checked: the Owner's original second computer, physical Safari/Firefox,
deployment/cache behavior, or field Core Web Vitals. The four existing Owner
decisions remain unchanged. Source-frame QA found baked-in stylized malformed/
truncated labels and a visible end-to-start cut; the Owner should watch and
accept the complete loop or provide a corrected/crossfaded master.

### Completion state

**DONE WITH PROOF** for the Owner-directed Home showcase slice;
**OWNER REVIEW STILL ACTIVE** for final mockup parity and original-device scale.
