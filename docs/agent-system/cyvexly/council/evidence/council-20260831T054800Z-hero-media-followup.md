# Council Round 12 — Hero media follow-up

## Review identity

- Review: `CYC-R12-20260830-01`
- Round: `council-20260831T054800Z`
- Scheduler timestamp: `2026-08-31T05:48:38.165Z`; durable guard start: `2026-08-31T05:50:50.8938779Z`
- Fresh immutable snapshot head: `c0a8cc8805fe8bf478f254cdde65e4f8e47a3281`
- Current workspace HEAD observed during the round: `dc900bb`; its
  post-snapshot drift was documentation/evidence only, not product source.
- Start dirty fingerprint: `51E05A2AB859FACD2D6E38FEC080D20B3D70A4009616F441FEA186F37923FAD4`
- Runtime: Council-owned production server at `http://localhost:5373`

## Fresh visual evidence

Opened and literally viewed clean production captures at `1440×900`, `768×1024`, and `390×844`, plus the full Home page. The desktop hero keeps the outcome-led headline and CTA on the left while the 16:9 dark systems panel sits on the right. At tablet the copy precedes a full-width panel; at phone the two CTAs remain stacked before the panel. The panel, caption, and playback affordance stay contained with no clipping or overlap.

Side-by-side comparison with `mockups/01-home.png` confirms the motion asset is a stronger futuristic signal than the former orbit, but the approved reference still has a brighter globe/device composition, lighter art direction, and richer lower-page artwork. This remains an Owner-level fidelity choice, not a reason to invent imagery.

## Runtime interaction and structure

- Home figure exposes the caption through `aria-labelledby`; the video is decorative (`aria-hidden="true"`), muted, looping, inline, poster-backed, and `preload="metadata"`.
- At phone width the video measured `325×181.94` inside its `342`-pixel figure. The visible button changed from `Pause showcase video`/`aria-pressed=true` to `Play showcase video`/`false`; explicit play advanced time again after a 0.9-second sample.
- The compact menu opened and closed with `aria-expanded=true/false` and exposed five route links plus the project CTA. The timing FAQ changed `aria-expanded` from false to true and exposed its answer. Empty Planner Step 1 focused `fullName` and produced three linked alerts with `aria-invalid` on the required fields.
- All 15 route targets at desktop and phone had one `main`, one `h1`, no missing image alts, zero horizontal overflow, and no alert residue outside the deliberate Planner validation state. `/about`, `/privacy`, and `/terms` remain the documented Owner-blocked 404 routes.

## Accepted Builder follow-up reviewed

The current Builder handoff and evidence now document a constrained `150ms`/approximately `1.64Mbps` cold run with poster LCP around `1.004s`, CLS `0.00009`, active playback after eight seconds, and range delivery. It also records `saveData` and reduced-motion poster-first behavior, native Enter play, and a global luminance scan. These close the previous evidence gap for the implemented data-saver/reduced-motion branch, while physical keyboard, Safari/Firefox, field Web Vitals, and local flash-area analysis remain unconfirmed. The supplied loop has a visible end-to-start composition cut; only an Owner watching the complete loop can accept or request a crossfaded master.

## Method and evidence limits

This round used a fresh Council snapshot/runtime, clean production server, opened responsive captures, direct Playwright interaction, DOM/accessibility inspection, source/diff review, route probes, and isolated lint/build/typecheck. The in-app browser does not expose a genuine reduced-motion or physical keyboard device emulation in this session; Builder's separately owned CDP evidence is cited as Builder evidence, not relabeled as Council-owned proof. The Council did not submit Planner data, change source/tests, or touch Builder/Auditor resources.
