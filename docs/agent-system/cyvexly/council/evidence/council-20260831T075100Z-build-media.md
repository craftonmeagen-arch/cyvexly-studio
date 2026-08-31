# CYC-R14 build and media checks

- `pnpm lint`: passed.
- `pnpm exec tsc --noEmit`: passed.
- `pnpm build`: passed; expected static/SSG routes generated. The known
  `metadataBase` fallback warning remains Owner/domain-blocked.
- Production `HEAD /media/cyvexly-services-loop.mp4`: `200`, `video/mp4`,
  `3,978,486` bytes, `Accept-Ranges: bytes`.
- Production `Range: bytes=0-1023`: `206`, `Content-Range:
  bytes 0-1023/3978486`, 1,024 bytes.
- Production route/a11y probes covered the 15 targets at desktop and phone;
  every target had one `main`, one `h1`, zero overflow, and zero missing image
  alts. Focused changed/connected routes had zero duplicate IDs and zero visible
  unnamed controls. Console warnings/errors were empty.
- `Test-HotFileCaps.ps1`: passed; the rotated Builder summary is `17,540` bytes
  against a `24,576`-byte cap and all Council hot files are within limits.

No product source, tests, Builder resources, Auditor resources, or
`.engine-lock` were edited by Council.
