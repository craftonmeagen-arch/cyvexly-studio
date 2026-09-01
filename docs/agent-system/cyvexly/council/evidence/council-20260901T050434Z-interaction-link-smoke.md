# Council R36 evidence — interaction contract and global link smoke

- Review ID: `CYC-R36-20260901-01`
- Scheduler minute zero: `2026-09-01T05:04:34.573Z`
- Round: `20260901T050434Z-heartbeat`
- Source head: `a7e07ca30a40757fa00ee3d7d6452918edba5137`
- Dirty fingerprint: `68A4CA9076E70C887C2CC3AC1E9DF4613B97194596BAB17E7C6230DAC7F69911`
- Runtime: fresh Council production build, `127.0.0.1:5373`
- Public comparison: `https://cyvexly-studio.onrender.com/`
- Council PM Prompt: `NO ACTIVE PM PROMPT`

## Browser paths and interactions

The in-app Browser visibly opened the local Council runtime at Home, Services,
Work, Planner (`/start`), and `/about`; it also opened public Home and `/about`,
and public `/privacy` and `/terms`. Local Home/Services/Work/Planner were
checked at `320×844`; Home and Services were also viewed at `1440×900` and
Home at `390×844`. Public Home was viewed at `390×844` and the public About
404 at `390×844`.

- Home showcase: local and public autoplay reached `Pause showcase video`,
  `aria-pressed="true"`, muted, looped, and playback rate `0.75`; clicking the
  named surface paused to `Play showcase video`, then clicking again resumed.
- Mobile navigation: local `Open menu` → `Close menu` → `Open menu` worked.
- Planner validation: clicking Continue on blank Step 1 focused `fullName` and
  exposed honest required errors; filling name/email/contact advanced to Step 2.
  Progress exposed Step 1 complete, Step 2 current (`aria-current="step"`),
  later steps disabled; clicking the completed Step 1 returned to the first
  step. Save-and-continue produced a saved indication and the name restored
  after reload in the same local browser context.
- Narrow containment: local Home, Services, Work, and Planner each measured
  `clientWidth=scrollWidth=305` at the 320px viewport and exposed one H1.
- Diagnostics: local and public Browser warning/error logs were empty.

## Link/route smoke

The Home header/footer expose internal links for `/about`, `/privacy`, and
`/terms`. Local and public HTTP checks returned `404` for all three. The
in-app Browser clicked the primary desktop header `About` link locally and
publicly; both landed on `Page not found — Cyvexly Studio` with the custom
404 H1. The remaining visible Home internal links returned `200` locally.
Source inspection and the production route list confirm there is no
`src/app/about` route, while `src/lib/site-config.ts` still names `/about` in
header/footer navigation. Existing app debt explains that About needs
Owner-supplied founder identity; Council did not invent it.

## Motion/build capability boundary

The runtime default `matchMedia("(prefers-reduced-motion: reduce)")` was false,
and source inspection confirmed explicit reduced-motion branches for the Home
video and Planner progress/form. The IAB did not provide OS-level reduced-motion
emulation, a physical keyboard, Safari/Firefox, or second-device scaling, so
those branches remain unverified rather than claimed closed.

`pnpm install --offline --frozen-lockfile` and `pnpm run build` completed. The
build emitted the existing non-blocking arbitrary-gradient CSS optimizer
warning and `metadataBase` warning; the output still compiled and served. Both
local and public video assets returned `200 video/mp4`, `Accept-Ranges: bytes`,
and a `206 bytes 0-63/3978486` range response.
