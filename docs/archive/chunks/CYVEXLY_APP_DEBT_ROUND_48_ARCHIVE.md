# Cyvexly App Debt — Round 48 Archive

Moved from `CYVEXLY_APP_DEBT.md` in round 71 to keep that file under its
30720-byte hot-file cap.

## Resolved round 48

- **Dispositioned Auditor inbox item `IFA-2026-09-05-R39`** — a fifteenth
  consecutive independent confirmation (reviewed commit `727d809`, round
  46's HEAD, one commit behind round 47's Apple touch icon commit), 0
  active code defects. Moved to `exchange/processed/`.
- **New angle — added raster 192×512 PNG manifest icons**
  (`src/app/icons/[size]/route.tsx`), closing the item round 46/47 named as
  open: the Web App Manifest was SVG-only, and Android's "Add to Home
  Screen" install flow has historically preferred PNG at these standard
  sizes. Same `next/og` `ImageResponse` technique as `apple-icon.tsx`,
  statically generated at build time via `generateStaticParams` restricted
  to exactly these two sizes (any other size 404s at runtime). No invented
  facts — reuses the existing C/Y mark and brand-blue token. Verified:
  production build emits correctly-sized real PNGs at both sizes (opened
  locally, clean/centered/unclipped); a real `next start` server serves
  both `200 image/png` with the exact built byte lengths; an unregistered
  size correctly 404s; the live manifest JSON lists all three icons;
  `apple-icon`/`icon.svg` unchanged; a real in-app-Browser screenshot of
  Home shows zero visual regression, zero console errors.
- **New angle — fixed a real print-legibility defect.** No route had any
  `@media print` CSS; this site's light-text-on-dark-background sections
  print invisible under browsers' default no-background-printing behavior.
  Added `print-color-adjust: exact` (`globals.css`, MDN's documented fix).
  Verified via CDP `Page.printToPDF`: `printBackground:false`/`:true`
  produced identically-sized PDFs (~41.7MB each), proving backgrounds
  embed regardless of the toggle; no screen-mode regression.
- `tsc`/`lint`/`build` all pass clean. Committed (`8d959f0`, `90ea41e`) and
  pushed.
- Cleaned up: stopped the owned `next start` server and headless Chrome
  process tree (verified real listener PID via the port's actual listener,
  not `Start-Process`'s returned PID — see the new caveat in
  `CYVEXLY_TOOLS_AND_CAPABILITIES.md`; Chrome verified by exact
  `chrome-profile-round48` `--user-data-dir` match), closed the owned
  Browser-pane tab. The temporary Chrome profile directory under the OS
  temp root could not be removed this round (Windows reported the path
  locked after process exit despite no matching process remaining) — left
  in place as a disposable OS-temp artifact; the next round should retry
  `Remove-Item` on `%TEMP%\chrome-profile-round48` and report if it
  persists.
