const serviceSignals = {
  "business-websites": {
    label: "Clarity",
    nodes: ["Offer", "Proof", "Inquiry"],
    path: "M32 142 C104 38 221 28 310 91 C346 116 372 153 382 197",
  },
  "website-redesigns": {
    label: "Renewal",
    nodes: ["Audit", "Reframe", "Rebuild"],
    path: "M35 196 C66 91 169 36 273 56 C329 67 370 105 389 153",
  },
  "landing-pages": {
    label: "Focus",
    nodes: ["Promise", "Proof", "Action"],
    path: "M35 112 C103 85 153 76 210 120 C268 164 325 154 389 108",
  },
  "ecommerce-websites": {
    label: "Commerce",
    nodes: ["Discover", "Choose", "Checkout"],
    path: "M38 180 C108 180 128 58 219 58 C309 58 324 170 389 170",
  },
  "website-care": {
    label: "Continuity",
    nodes: ["Monitor", "Update", "Improve"],
    path: "M43 151 C77 71 177 47 249 82 C321 117 327 200 382 201",
  },
} as const;

type ServiceSignalSlug = keyof typeof serviceSignals;

export function ServiceDetailSignal({ slug }: { slug: ServiceSignalSlug }) {
  const signal = serviceSignals[slug];
  const nodePositions = [
    { x: 68, y: 128 },
    { x: 219, y: 92 },
    { x: 354, y: 174 },
  ];

  return (
    <div className="service-detail-signal" aria-hidden="true">
      <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id={`${slug}-core`} cx="0" cy="0" r="1" gradientTransform="translate(210 139) rotate(90) scale(60)">
            <stop stopColor="#FFFFFF" />
            <stop offset="0.34" stopColor="#B7EDFF" />
            <stop offset="0.72" stopColor="#36C7FF" />
            <stop offset="1" stopColor="#0F66E0" />
          </radialGradient>
          <linearGradient id={`${slug}-route`} x1="34" y1="52" x2="389" y2="220" gradientUnits="userSpaceOnUse">
            <stop stopColor="#36C7FF" stopOpacity="0.12" />
            <stop offset="0.5" stopColor="#0F66E0" stopOpacity="0.82" />
            <stop offset="1" stopColor="#36C7FF" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        <ellipse cx="210" cy="139" rx="174" ry="86" stroke="#0F66E0" strokeOpacity="0.18" />
        <ellipse cx="210" cy="139" rx="139" ry="118" transform="rotate(-32 210 139)" stroke="#36C7FF" strokeOpacity="0.2" />
        <ellipse cx="210" cy="139" rx="152" ry="64" transform="rotate(26 210 139)" stroke="#0F66E0" strokeOpacity="0.26" />
        <path d={signal.path} stroke={`url(#${slug}-route)`} strokeWidth="2" strokeLinecap="round" />

        <circle cx="210" cy="139" r="60" fill={`url(#${slug}-core)`} />
        <circle cx="210" cy="139" r="74" stroke="#36C7FF" strokeOpacity="0.18" />
        <circle cx="210" cy="139" r="89" stroke="#0F66E0" strokeOpacity="0.1" />
        <circle cx="190" cy="119" r="17" fill="white" fillOpacity="0.36" />

        {nodePositions.map((position, index) => (
          <g key={signal.nodes[index]}>
            <circle cx={position.x} cy={position.y} r="9" fill="#F8FBFF" stroke="#0F66E0" strokeOpacity="0.5" />
            <circle cx={position.x} cy={position.y} r="3" fill="#0F66E0" />
            <text
              x={position.x}
              y={position.y + (index === 1 ? -18 : 26)}
              textAnchor="middle"
              fill="#526176"
              fontSize="10"
              fontFamily="var(--font-jetbrains-mono), monospace"
              letterSpacing="1.2"
            >
              {signal.nodes[index].toUpperCase()}
            </text>
          </g>
        ))}

        <text
          x="210"
          y="145"
          textAnchor="middle"
          fill="#10213D"
          fontSize="11"
          fontWeight="700"
          fontFamily="var(--font-jetbrains-mono), monospace"
          letterSpacing="1.4"
        >
          {signal.label.toUpperCase()}
        </text>
      </svg>
    </div>
  );
}
