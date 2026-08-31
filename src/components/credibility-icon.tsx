import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  "owner-led": (
    <>
      <path d="M12 3 19 7v10l-7 4-7-4V7l7-4Z" />
      <path d="m8.8 12 2 2 4.4-4.5" />
    </>
  ),
  "custom-strategy": (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="m14.5 9.5 5-5M16.2 4.5h3.3v3.3" />
    </>
  ),
  "clean-code": <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 4 10.5 20" />,
  secure: (
    <>
      <path d="M12 3 19 6v5.2c0 4.6-2.7 7.8-7 9.8-4.3-2-7-5.2-7-9.8V6l7-3Z" />
      <path d="m9.2 12 1.8 1.8 3.9-4" />
    </>
  ),
  communication: (
    <>
      <path d="M4 5.5h11a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H9l-4.5 3v-3.7A3 3 0 0 1 3 12.2V6.5A1 1 0 0 1 4 5.5Z" />
      <path d="M7 9h7M7 12h5" />
    </>
  ),
};

export function CredibilityIcon({ id }: { id: string }) {
  const path = paths[id];
  if (!path) return null;

  return (
    <span className="signal-icon" aria-hidden="true">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {path}
      </svg>
    </span>
  );
}
