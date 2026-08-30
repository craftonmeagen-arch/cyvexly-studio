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
          <stop offset="0%" stopColor="#EAF5FF" />
          <stop offset="45%" stopColor="#8FD2FF" />
          <stop offset="100%" stopColor="#1478FF" />
        </radialGradient>
      </defs>

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

      <circle cx="210" cy="210" r="92" fill="url(#orbit-core)" />

      <g fontFamily="var(--font-mono)" fontSize="11" fill="#526176" letterSpacing="0.08em">
        <text x="34" y="70">STRATEGY</text>
        <text x="330" y="180" textAnchor="end">DESIGN</text>
        <text x="150" y="360">DEVELOPMENT</text>
      </g>
    </svg>
  );
}
