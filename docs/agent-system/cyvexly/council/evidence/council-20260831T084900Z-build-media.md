# CYC-R15 build and media checks

- `pnpm lint`: passed.
- `pnpm build`: passed in the fresh Council runtime after Next generated its
  `.next` type/build artifacts.
- A clean-runtime `pnpm exec tsc --noEmit` probe before build reported the
  generated Next global `LayoutProps` as missing; rerunning after `pnpm build`
  passed. This is a setup-order boundary, not a source change.
- Production `HEAD /media/cyvexly-services-loop.mp4`: `200`, `video/mp4`,
  `3,978,486` bytes, `Accept-Ranges: bytes`.
- Production range `bytes=0-1023`: `206`, `Content-Range:
  bytes 0-1023/3978486`, 1,024 bytes.
- `Test-HotFileCaps.ps1`: passed; Builder's rotated summary remains under the
  cap and Council hot files remain within their limits.

No product source, tests, Builder resources, Auditor resources, or
`.engine-lock` were edited by Council.
