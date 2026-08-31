"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_ID = "cyvexly-services-showcase";

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
    addEventListener?: (type: "change", listener: () => void) => void;
    removeEventListener?: (type: "change", listener: () => void) => void;
  };
};

export function HeroShowcaseVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pausedByUserRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as NavigatorWithConnection).connection;

    const syncPlayback = () => {
      if (
        document.hidden ||
        reducedMotion.matches ||
        connection?.saveData ||
        pausedByUserRef.current
      ) {
        video.pause();
        return;
      }

      video.muted = true;
      void video.play().catch(() => setIsPlaying(false));
    };

    syncPlayback();
    reducedMotion.addEventListener("change", syncPlayback);
    connection?.addEventListener?.("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      reducedMotion.removeEventListener("change", syncPlayback);
      connection?.removeEventListener?.("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      video.pause();
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      pausedByUserRef.current = false;
      video.muted = true;
      void video.play().catch(() => setIsPlaying(false));
      return;
    }

    pausedByUserRef.current = true;
    video.pause();
  };

  const syncProgress = () => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) {
      setProgress(0);
      return;
    }

    setProgress((video.currentTime / video.duration) * 100);
  };

  return (
    <figure
      className="hero-video-shell relative isolate rounded-[2rem] border border-white/90 p-2 sm:p-3"
      aria-labelledby="hero-showcase-caption"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-[1.45rem] bg-midnight-slate sm:rounded-[1.35rem]">
        <video
          ref={videoRef}
          id={VIDEO_ID}
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          preload="metadata"
          poster="/media/cyvexly-services-poster.webp"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noplaybackrate"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={syncProgress}
          onLoadedMetadata={syncProgress}
          aria-hidden="true"
        >
          <source src="/media/cyvexly-services-loop.mp4" type="video/mp4" />
        </video>

        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,15,28,0.22),transparent_42%,rgba(4,15,28,0.78))]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-ion-cyan/80 to-transparent"
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-[#071526]/70 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/85 backdrop-blur-md sm:left-5 sm:top-5">
          <span className="h-1.5 w-1.5 rounded-full bg-ion-cyan shadow-[0_0_10px_rgba(54,199,255,0.95)]" />
          Cyvexly systems
        </div>

        <div className="pointer-events-none absolute right-5 top-5 hidden items-center gap-2 rounded-full border border-white/15 bg-[#071526]/65 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/80 backdrop-blur-md sm:flex">
          Muted loop <span aria-hidden="true">·</span> 00:30
        </div>

        <div className="pointer-events-none absolute bottom-4 left-4 right-16 sm:bottom-5 sm:left-5">
          <div className="mb-3 h-px overflow-hidden bg-white/25" aria-hidden="true">
            <span
              className="block h-full bg-gradient-to-r from-ion-cyan to-white shadow-[0_0_10px_rgba(54,199,255,0.9)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="font-display text-sm font-medium tracking-tight text-white sm:text-base">
            Strategy · Design · Development · Reliability
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#b9d7ed]">
            Digital experiences engineered to perform
          </p>
        </div>

        <button
          type="button"
          onClick={togglePlayback}
          className="absolute bottom-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#071526]/75 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-[#0d2a48] sm:bottom-5 sm:right-5"
          aria-controls={VIDEO_ID}
          aria-label={isPlaying ? "Pause showcase video" : "Play showcase video"}
          aria-pressed={isPlaying}
        >
          {isPlaying ? (
            <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
              <path d="M6.25 4.5h2.5v11h-2.5zm5 0h2.5v11h-2.5z" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
              <path d="m7 4.6 8 5.4-8 5.4z" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>

      <figcaption id="hero-showcase-caption" className="sr-only">
        A visual showcase of Cyvexly Studio services, including strategy, commerce,
        web applications, security, reliability, and performance.
      </figcaption>
    </figure>
  );
}
