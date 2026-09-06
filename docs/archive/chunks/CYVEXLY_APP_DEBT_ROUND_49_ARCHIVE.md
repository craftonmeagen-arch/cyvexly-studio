# Cyvexly App Debt — Round 49 Full Archive (archived round 55)

Moved here round 55 to keep `CYVEXLY_APP_DEBT.md` under its 30720-byte
hot-file cap. Round 49 added route-segment/root-layout error boundaries
and viewport theme-color/color-scheme metadata.

## Resolved round 49

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R40`** — a sixteenth
  consecutive independent confirmation (reviewed commit `1c64d81`, round
  47's HEAD, one commit behind round 48's raster-icon commit), 0 active
  code defects. Moved to `exchange/processed/`.
- **New angle — `src/app/error.tsx` route-segment error boundary.** No
  route had one; an unhandled render error previously fell through to
  Next's default unstyled generic error screen. Same special-file family
  as `not-found.tsx`; reuses `SiteHeader`/`SiteFooter`/`ButtonLink`.
- **New angle — `src/app/global-error.tsx`** for a root-layout-level error
  (which `error.tsx` cannot catch). Renders its own `<html>`/`<body>` per
  Next's documented convention; dependency-free (inline styles only).
- **New angle — `viewport.themeColor`/`colorScheme`** added to the root
  layout metadata (`#0f66e0`, `light`) — no invented facts, reuses the
  existing brand-blue token.
- Verified with a temporary `force-dynamic` throwaway route (deleted before
  commit, confirmed clean via a full re-typecheck/re-lint/re-build) against
  a real `next start` server: sanitized error digest in the SSR shell, real
  in-app-Browser navigation showed the actual `error.tsx` UI text with the
  digest as the only console error; `theme-color`/`color-scheme` meta
  confirmed live via `document.querySelector`; Home/`/faq`/manifest/
  apple-icon/icons all still `200` with zero regressions afterward.
- `tsc`/`lint`/`build` all pass clean. Committed and pushed.
- Archived round 46's full `CYVEXLY_ACTIVE_CHUNK.md` report and rounds 46
  and 47's full `CYVEXLY_NEXT_BUILDER_HANDOFF.md` closeouts to restore the
  intended latest-three rotation (§7.14) in both files.
- Cleaned up: stopped the owned `next start` server (verified real listener
  PID via the port's actual listener before stopping), closed the owned
  Browser-pane tab.

