# Council CYC-R5 live review evidence

- Round: `council-20260830T224200Z`
- Start source: `d04dc9d271d15103aaa3b32897d3b64b74fd9a8c`
- Start dirty fingerprint: `53BD896212C2291969C0236DCA5E15A1BF993B2287C48889FEADD00F9C2975DB`
- Runtime: isolated Council server at `http://127.0.0.1:5373`

Builder commit `da9c6d99962ba3f8a318bf3eed9a9b3ef63c0942` landed after the
immutable snapshot. It changes Planner validation focus/error semantics and is
source-inspected plus Builder-evidence-supported, but not served by this
Council runtime; a fresh round is required for independent closure.

## Visible product review

Opened and visually inspected the live Home page at `1440x900`, `768x1024`,
and `390x844`, plus Work at desktop and Services at phone. Home's Selected
work cards now render the same three distinct `ConceptPreview` compositions as
Work: Aurora's dark architectural mountains, Nexora's dashboard panels, and
Vellora's product/checkout treatment. Services' Recent work cards use the same
truthful artwork. The cards remain explicitly labeled `CONCEPT PROJECT` and
retain their links and copy. Full-page captures were opened:

- `council-20260830T224200Z-home-desktop.png`
- `council-20260830T224200Z-home-tablet.png`
- `council-20260830T224200Z-home-phone.png`
- `council-20260830T224200Z-work-desktop.png`
- `council-20260830T224200Z-services-phone.png`

Side-by-side comparison with `mockups/01-home.png` confirms the former flat
gradient Home presentation symptom is gone. The approved mockup still depicts
higher-fidelity photographic/rendered treatments; whether the current truthful
abstract artwork is release-sufficient remains an Owner framing decision, not a
false client-work claim.

## Favicon and source hygiene

Fetched the live `/favicon.ico` and inspected extracted `16x16`, `32x32`,
`48x48`, and `256x256` frames. Each shows the branded cyan/blue orbit-check
signal, including at 16px. The live head exposes `/favicon.ico?...` first,
followed by `/icon.svg?...`; the actual effective first asset is now branded.
The redesigned `/icon.svg` and `/opengraph-image` were also served from the
isolated runtime; the direct 1200x630 Open Graph PNG was opened and visually
inspected as `council-20260830T224200Z-opengraph.png`.

The prior untracked `src/app/scratch-favicon-ico/route.tsx` is absent from the
current source status. The isolated runtime returns the normal 404 for that
path, and the production route table contains no scratch endpoint.

## Route and build probes

The twelve public routes (`/`, `/start`, `/process`, `/work`, `/services`,
`/pricing`, `/contact`, `/faq`, `/accessibility`, `/about`, `/privacy`,
`/terms`) were loaded at all three required widths. Every observed route had
one `h1`, one `main`, no empty image alt values, no unnamed links, and no
horizontal overflow (`scrollWidth` equaled `clientWidth` at each width). The
intentional 404-backed About/Privacy/Terms routes remain bounded Owner/Chunk
debt. Browser diagnostics after the sweep were empty.

Playwright/DOM clicks on the Home mobile menu, Work Concept filter, and Pricing
FAQ did not change their state in this unattended browser session despite the
controls being enabled and visible; this matches the known session-level
control limitation. No product interaction failure is claimed from that
attempt. Prior Council R3 has the last successful live interaction evidence.

The isolated `pnpm run lint`, `pnpm exec tsc --noEmit`, and `pnpm run build`
commands passed. The build generated the expected 18 routes and retained only
the known `metadataBase` localhost fallback warning.
