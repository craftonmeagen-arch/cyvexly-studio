# Round 144 — Home timing truth

- **Observed gap:** deployed source `f9a21a0` told Home visitors “Typical
  websites: 2–6 weeks” and its preview FAQ stopped at Nexus, while the
  published package schedule also includes Nexus at 6–9 weeks, Commerce at
  8–14+ weeks, and discovery-scoped custom applications.
- **Change:** Home now says “Website timelines: 2–14+ weeks by scope.” The
  adjacent FAQ names Signal, Orbit, Nexus, Commerce, and the custom-application
  boundary without changing any price or schedule.
- **Regression:** the strengthened buyer suite fails on the prior public
  source, then passes locally and after deployment across 33 routes and 15
  inquiry contexts.
- **Rendered proof:** the hierarchy suite measures the new timing label as
  contained at 1280×720 (`64px` item / `33px` label) and 390×844 (`64px`
  item / `16.5px` label), with zero horizontal overflow or runtime errors.
  The local and deployed pages were also viewed in the visible in-app browser;
  the phone FAQ was expanded and remained readable.
- **Evidence:** `home-timing-desktop.png` and `home-timing-phone.png` are the
  retained focused captures. The same run also refreshed broader hierarchy
  captures while checking Pricing, Services, Work, Contact, and Planner.
- **Infrastructure:** the first capture run exposed a Chromium-profile cleanup
  race. `internal-hierarchy-smoke.mjs` now waits for its owned browser to exit
  and retries only the unique temporary profile on `EBUSY`/`EPERM`; the rerun
  and public run both exited cleanly.
- **Validation:** 52-route production build, post-build TypeScript, lint (one
  historical evidence-script warning), local/public buyer suites, local/public
  responsive hierarchy suites, and visible desktop/phone review pass. No
  inquiry, email, call, account, indexing, transaction, or Team 2 action
  occurred.
- **Source:** local product commit `904e8ef`; deployed product commit
  `1d7c65d`. The final evidence/continuity source identity is recorded in the
  current state and handoff.
