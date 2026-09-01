# Round 20 — Home showcase cleanup verification

Product commit `d6cd17c` matches the preserved visual plan. The source diff is
limited to `hero-showcase-video.tsx`: it removes progress state and the three
visible playback-chrome blocks, sets `PLAYBACK_RATE` to `0.75`, reapplies that
preference at every playback boundary, and promotes the complete reel surface
to the existing named pause/resume interaction.

The opened baseline and final desktop render preserve the exact 726.56×420.06px
glass figure while removing the top-right muted/time pill, bottom timeline, and
circular control. Opened 768 and 390 states stack without residual spacing or
horizontal overflow. The retained identifier/capability caption now provide a
cleaner, less player-like studio-reel composition.

Runtime media reports `0.75×`, `muted`, and `loop`; it advanced 1.579 seconds
over two real seconds. Click, Enter, and Space each toggled the complete named
surface, with the label/state changing between Play and Pause. This preserves a
pause mechanism and focus-visible affordance while satisfying the Owner's
request to remove the visible button.

ESLint, the optimized 23-page build, immediate post-build TypeScript, a 22/22
expected route/asset production sweep, and MP4 MIME/range checks pass. The
built output contains neither `Muted loop` nor the removed progress-state
marker. The known domain-blocked `metadataBase` warning is unchanged.

Public Render changed ETag from `"17zuriw8lcv2fqm"` (old HTML still containing
`Muted loop`) to `"a75ifwpw1u2f7v"`; the final HTML contains the clean surface
class and no removed text. Public Home is 200 and the MP4 returns `206`,
`video/mp4`, and `bytes 0-1023/3978486`.

The in-app Browser blocked repeat navigation after the production-server
restart, so no second optimized or new public screenshot set is claimed. The
cited responsive images are genuine before/after hot-reloaded app renders;
optimized/public adoption uses build, HTML, ETag, and HTTP evidence. Concurrent
Auditor/Council files were excluded, and no scheduler or automation was touched.
