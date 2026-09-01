"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";

const VIDEO_ID = "cyvexly-services-showcase";
const PLAYBACK_RATE = 0.75;

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
    addEventListener?: (type: "change", listener: () => void) => void;
    removeEventListener?: (type: "change", listener: () => void) => void;
  };
};

function applyPlaybackPreferences(video: HTMLVideoElement) {
  video.muted = true;
  video.defaultPlaybackRate = PLAYBACK_RATE;
  video.playbackRate = PLAYBACK_RATE;
}

export function HeroShowcaseVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const pausedByUserRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);

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

      applyPlaybackPreferences(video);
      void video.play().catch(() => setIsPlaying(false));
    };

    applyPlaybackPreferences(video);
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
      applyPlaybackPreferences(video);
      void video.play().catch(() => setIsPlaying(false));
      return;
    }

    pausedByUserRef.current = true;
    video.pause();
  };

  const handleSurfaceKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    togglePlayback();
  };

  return (
    <figure
      className="hero-video-shell relative isolate rounded-[2rem] border border-white/90 p-2 sm:p-3"
      aria-labelledby="hero-showcase-caption"
    >
      <span className="hero-video-edge hero-video-edge-top" aria-hidden="true" />
      <span className="hero-video-edge hero-video-edge-right" aria-hidden="true" />
      <span className="hero-video-edge hero-video-edge-bottom" aria-hidden="true" />
      <div
        className="hero-video-surface relative aspect-video w-full cursor-pointer overflow-hidden rounded-[1.45rem] bg-midnight-slate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ion-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:rounded-[1.35rem]"
        role="button"
        tabIndex={0}
        aria-controls={VIDEO_ID}
        aria-label={isPlaying ? "Pause showcase video" : "Play showcase video"}
        aria-pressed={isPlaying}
        onClick={togglePlayback}
        onKeyDown={handleSurfaceKeyDown}
      >
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
          onLoadedMetadata={(event) => applyPlaybackPreferences(event.currentTarget)}
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

        <div className="pointer-events-none absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
          <p className="font-display text-sm font-medium tracking-tight text-white sm:text-base">
            Strategy · Design · Development · Reliability
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#b9d7ed]">
            Digital experiences engineered to perform
          </p>
        </div>
      </div>

      <figcaption id="hero-showcase-caption" className="sr-only">
        A visual showcase of Cyvexly Studio services, including strategy, commerce,
        web applications, security, reliability, and performance.
      </figcaption>
    </figure>
  );
}
