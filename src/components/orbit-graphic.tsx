export function OrbitGraphic() {
  return (
    <svg
      viewBox="0 0 420 420"
      className="mx-auto w-full max-w-md text-cyber-blue"
      role="img"
      aria-label="Animated signal orbit representing strategy, design, and development working together"
    >
      <defs>
        <radialGradient id="orbit-core" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="18%" stopColor="#EAF8FF" />
          <stop offset="52%" stopColor="#77C8FF" />
          <stop offset="100%" stopColor="#0F66E0" />
        </radialGradient>
        <radialGradient id="orbit-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#36C7FF" stopOpacity="0.28" />
          <stop offset="56%" stopColor="#1478FF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#1478FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="orbit-gloss" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
          <stop offset="46%" stopColor="#FFFFFF" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <filter id="orbit-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#0F66E0" floodOpacity="0.3" />
        </filter>
      </defs>

      <circle cx="210" cy="210" r="176" fill="url(#orbit-halo)" />

      <g stroke="currentColor" strokeOpacity="0.25" fill="none">
        <circle cx="210" cy="210" r="180" />
        <circle cx="210" cy="210" r="140" />
      </g>

      <g
        stroke="#36C7FF"
        strokeOpacity="0.55"
        fill="none"
        strokeWidth="1.2"
        className="motion-safe:animate-[spin_28s_linear_infinite]"
        style={{ transformOrigin: "210px 210px" }}
      >
        <ellipse cx="210" cy="210" rx="180" ry="70" />
      </g>
      <g
        stroke="#1478FF"
        strokeOpacity="0.5"
        fill="none"
        strokeWidth="1.2"
        className="motion-safe:animate-[spin_36s_linear_infinite_reverse]"
        style={{ transformOrigin: "210px 210px" }}
      >
        <ellipse cx="210" cy="210" rx="70" ry="180" />
      </g>

      <g filter="url(#orbit-shadow)">
        <circle cx="210" cy="210" r="92" fill="url(#orbit-core)" />
        <ellipse cx="184" cy="174" rx="50" ry="34" fill="url(#orbit-gloss)" transform="rotate(-24 184 174)" />
        <circle cx="210" cy="210" r="91" fill="none" stroke="#FFFFFF" strokeOpacity="0.48" />
      </g>

      <g fontFamily="var(--font-mono)" fontSize="11" fill="#526176" letterSpacing="0.08em">
        <text x="34" y="70">STRATEGY</text>
        <text x="330" y="180" textAnchor="end">DESIGN</text>
        <text x="150" y="360">DEVELOPMENT</text>
      </g>
    </svg>
  );
}
