"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";

const VIDEO_ID = "cyvexly-how-it-works";

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
    addEventListener?: (type: "change", listener: () => void) => void;
    removeEventListener?: (type: "change", listener: () => void) => void;
  };
};

export function HowItWorksVideo() {
  const inlineVideoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  // `isOpen` is false on both server and first client render, so the
  // document.body access below (needed only once it flips true, which can
  // only happen from a client-side click/keypress after mount) never runs
  // during SSR — no separate mount-detection effect required.
  const [isOpen, setIsOpen] = useState(false);

  // The modal is portaled to document.body: several glass-panel ancestors
  // on this page use backdrop-filter, which (like transform/filter) creates
  // a new containing block for fixed-position descendants — an in-place
  // `fixed inset-0` here would end up positioned relative to that ancestor
  // instead of the viewport.

  // Ambient inline loop: autoplay, muted, no user-facing pause affordance.
  // Mirrors the Home hero showcase video's reduced-motion/data-saving/
  // visibility handling so behavior is consistent site-wide.
  useEffect(() => {
    const video = inlineVideoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as NavigatorWithConnection).connection;

    const syncPlayback = () => {
      if (isOpen || document.hidden || reducedMotion.matches || connection?.saveData) {
        video.pause();
        return;
      }
      video.muted = true;
      void video.play().catch(() => {});
    };

    video.muted = true;
    syncPlayback();
    reducedMotion.addEventListener("change", syncPlayback);
    connection?.addEventListener?.("change", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);

    return () => {
      reducedMotion.removeEventListener("change", syncPlayback);
      connection?.removeEventListener?.("change", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, [isOpen]);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Focus the close control on open; restore body scroll on close.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  useEffect(() => {
    const video = modalVideoRef.current;
    if (!video) return;

    if (isOpen) {
      video.currentTime = 0;
      video.muted = true;
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isOpen]);

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openModal();
  };

  return (
    <>
      <div
        ref={triggerRef}
        className="how-it-works-video-shell group relative isolate cursor-pointer overflow-hidden rounded-[1.75rem] border border-smoke-glass/70 bg-midnight-slate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ion-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        role="button"
        tabIndex={0}
        aria-label="Open the Cyvexly process video in a larger view"
        aria-haspopup="dialog"
        onClick={openModal}
        onKeyDown={handleTriggerKeyDown}
      >
        <div className="relative aspect-video w-full overflow-hidden">
          <video
            ref={inlineVideoRef}
            id={VIDEO_ID}
            className="h-full w-full object-cover"
            loop
            muted
            playsInline
            preload="metadata"
            poster="/media/cyvexly-how-it-works-poster.webp"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noplaybackrate"
            tabIndex={-1}
            aria-hidden="true"
          >
            <source src="/media/cyvexly-how-it-works.mp4" type="video/mp4" />
          </video>

          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,15,28,0.12),transparent_38%,rgba(4,15,28,0.46))]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-x-[8%] top-0 h-px bg-gradient-to-r from-transparent via-ion-cyan/70 to-transparent"
            aria-hidden="true"
          />

          {/* Subtle expand affordance only — never a play/pause icon, so the
              surface never reads as a pausable player. */}
          <span
            className="pointer-events-none absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#071526]/70 text-white/85 opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:bottom-5 sm:right-5"
            aria-hidden="true"
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path
                d="M7.5 3.5H3.5V7.5M12.5 3.5H16.5V7.5M7.5 16.5H3.5V12.5M12.5 16.5H16.5V12.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#040f1c]/88 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Cyvexly process video"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-black shadow-[0_30px_90px_rgba(2,8,20,0.6)]"
              onClick={(event) => event.stopPropagation()}
            >
              <video
                ref={modalVideoRef}
                className="aspect-video w-full"
                loop
                muted
                playsInline
                controls
                controlsList="nodownload"
                poster="/media/cyvexly-how-it-works-poster.webp"
              >
                <source src="/media/cyvexly-how-it-works.mp4" type="video/mp4" />
              </video>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#071526]/80 text-white/90 backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ion-cyan"
                aria-label="Close video"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                  <path
                    d="M5 5L15 15M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
