import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  "strategy-structure": (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M7.6 7.4 10.6 16.2M16.4 7.4 13.4 16.2M8 6H16" />
    </>
  ),
  "website-design": (
    <path d="M4 20 5.2 15.8 15.8 5.2a1.7 1.7 0 0 1 2.4 0l0.6 0.6a1.7 1.7 0 0 1 0 2.4L8.2 18.8 4 20ZM14 7l3 3" />
  ),
  "website-development": (
    <path d="M9 7 4 12l5 5M15 7l5 5-5 5" />
  ),
  "content-cms": (
    <>
      <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
      <path d="M8.5 8h7M8.5 11.5h7M8.5 15h4.5" />
    </>
  ),
  "commerce-integrations": (
    <>
      <path d="M4 6h2l1.6 9.2a1.5 1.5 0 0 0 1.5 1.3h7.4a1.5 1.5 0 0 0 1.5-1.3L19 8H7" />
      <circle cx="10" cy="20" r="1.3" />
      <circle cx="17" cy="20" r="1.3" />
    </>
  ),
  "search-performance-accessibility": (
    <>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="M15 15l5 5" />
    </>
  ),
  "care-improvement": (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
};

export function ServiceIcon({ id }: { id: string }) {
  const path = paths[id];
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
