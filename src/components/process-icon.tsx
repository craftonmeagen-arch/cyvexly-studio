const paths: Record<string, React.ReactNode> = {
  "01": <><circle cx="11" cy="11" r="6" /><path d="m15.5 15.5 4 4M8.5 11h5M11 8.5v5" /></>,
  "02": <><path d="M4 5.5 9 3l6 3 5-2.5v15L15 21l-6-3-5 2.5v-15Z" /><path d="M9 3v15M15 6v15" /></>,
  "03": <><path d="m4 18 9.5-9.5 2 2L6 20H4v-2Z" /><path d="m12 5 2-2 7 7-2 2M15 16l4 4M17 14l4 4" /></>,
  "04": <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" /></>,
  "05": <><path d="M14.5 5.5c2.8-2.8 5-2.5 5-2.5s.3 2.2-2.5 5l-4 4-4-3 5.5-3.5Z" /><path d="m9 9-3 .5-2.5 2.5 4.5 1M13 12l1 4.5-2.5 2.5-.5-3M6.5 17.5l-3 3" /></>,
};

export function ProcessIcon({ number }: { number: string }) {
  return (
    <span className="process-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {paths[number]}
      </svg>
    </span>
  );
}
