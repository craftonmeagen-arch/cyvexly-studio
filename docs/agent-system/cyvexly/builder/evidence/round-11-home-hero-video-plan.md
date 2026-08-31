# Round 11 Home Hero Video Plan

**Session:** `184dd314-df8f-4e46-8a1f-37dcb993f775`  
**Start source:** `a1245d8` plus an uncommitted Owner-directed Home media delta  
**Status:** preserved before this round's source acceptance or correction

## Source and provenance

The Owner supplied `yes_security_and_reliabilty_a.mp4` in the active thread and
explicitly asked for it to be added to Home. The current workspace contains two
web-delivery derivatives made from that source: a silent, fast-start H.264/
yuv420p 1280x720 30-second MP4 (3,978,486 bytes) and a 1280x720 WebP poster
extracted at 1.5 seconds (12,006 bytes). The source media's upstream production
method is not stated, so this round will not claim Gemini or any other generator
provenance.

## Baseline and target comparison

The accepted Home mockup uses a luminous globe/device treatment beside the
outcome-led headline. Round 10's static orbit was truthful and lightweight but
remained the largest visible fidelity gap identified by Council. The supplied
video adds real motion and a dark-blue systems sequence covering design,
commerce, web applications, security, reliability, and performance. It is a
stronger advertisement of the studio's offer, but it must remain subordinate
to the headline and must not turn the hero into a dark gaming/crypto surface.

The intended composition is:

- desktop (1024px+): copy and 16:9 media share the hero grid; the CTA remains
  the first visual and keyboard action;
- tablet/phone: copy precedes a full-width 16:9 media panel, with the playback
  control clear of both overlaid copy and edges;
- no-motion or unavailable-media state: the 12KB poster preserves the complete
  composition and all meaningful information remains present in nearby text;
- the media shell uses the existing blue/cyan glass language, not a separate
  visual system.

## Interaction, accessibility, and performance constraints

- Muted inline playback may start only when the document is visible, the user
  has not paused it, reduced motion is not requested, and the browser allows it.
- A visible, keyboard-operable play/pause control must expose a stable name,
  pressed state, and target relationship. User pause must survive visibility
  changes; explicit user play remains available in reduced-motion mode.
- The visual media is supplementary. Its text-like generated details are not
  required to understand the service offer; a concise figure caption supplies
  the accessible description without pretending the frames are client work.
- The video has no audio track. Captions are therefore not required for speech,
  and no audio control should be implied.
- The MP4 budget is 4MB and the poster budget is 15KB for this Owner-supplied
  asset. `preload="metadata"`, fast-start encoding, and a still poster must keep
  first paint independent of full video download. Data-saver behavior and
  reduced motion will be measured before any additional loading logic is added.

## Proof plan and falsifiers

1. Inspect representative source frames and the poster; record codec, duration,
   dimensions, audio absence, byte budget, and fast-start placement.
2. Run lint, a clean production build, and post-build TypeScript.
3. Serve the production app on a Builder-owned port, launch Builder-owned Chrome
   and use exact CDP device metrics at 1440x900, 1024x800, 768x1024, and 390x844.
4. Open the rendered hero at every width. Reject the slice for overflow,
   headline/CTA displacement, media/control overlap, missing poster, or a media
   panel wider than its container.
5. Prove time advances in normal motion, stops on the visible control, stays
   stopped across hidden/visible transitions, resumes only by explicit action,
   and loops near the 30-second boundary.
6. Emulate `prefers-reduced-motion: reduce`; require a still initial state and
   explicit user ability to play. Exercise native Tab/Enter on the playback
   control and inspect its computed accessible state.
7. Audit actual media requests and response headers, plus the established
   sitewide phone semantic/overflow route matrix, before acceptance.

Any source correction must respond to observed evidence from this plan. The
round will not rewrite the supplied media, invent claims, or broaden into
domain, legal, About, email-provider, deployment, or scheduler work.
