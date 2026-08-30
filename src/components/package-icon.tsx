import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  Signal: (
    <>
      <circle cx="12" cy="17" r="1.6" />
      <path d="M8.5 13.5a5 5 0 0 1 7 0M5.6 10.6a9 9 0 0 1 12.8 0" />
    </>
  ),
  Orbit: (
    <>
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-24 12 12)" />
    </>
  ),
  Nexus: (
    <>
      <circle cx="12" cy="5.5" r="1.8" />
      <circle cx="5.5" cy="17" r="1.8" />
      <circle cx="18.5" cy="17" r="1.8" />
      <path d="M12 7.3v6M10.7 12.4 6.6 15.6M13.3 12.4l4.1 3.2" />
    </>
  ),
  Commerce: (
    <>
      <path d="M4 6h2l1.6 9.2a1.5 1.5 0 0 0 1.5 1.3h7.4a1.5 1.5 0 0 0 1.5-1.3L19 8H7" />
      <circle cx="10" cy="20" r="1.3" />
      <circle cx="17" cy="20" r="1.3" />
    </>
  ),
  "Custom system": (
    <>
      <path d="M12 4v2.4M12 17.6V20M4 12h2.4M17.6 12H20M6.5 6.5l1.7 1.7M15.8 15.8l1.7 1.7M17.5 6.5l-1.7 1.7M8.2 15.8l-1.7 1.7" />
      <circle cx="12" cy="12" r="3.4" />
    </>
  ),
};

export function PackageIcon({ name }: { name: string }) {
  const path = paths[name];
  if (!path) return null;

  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyber-blue/10 text-cyber-blue">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {path}
      </svg>
    </span>
  );
}
