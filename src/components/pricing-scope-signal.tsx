const packageNodes = [
  { name: "Signal", x: 96, y: 218, labelX: 62, labelY: 248, anchor: "start" },
  { name: "Orbit", x: 196, y: 90, labelX: 164, labelY: 62, anchor: "start" },
  { name: "Nexus", x: 354, y: 54, labelX: 354, labelY: 25, anchor: "middle" },
  { name: "Commerce", x: 518, y: 112, labelX: 556, labelY: 86, anchor: "end" },
  { name: "Custom", x: 526, y: 270, labelX: 566, labelY: 302, anchor: "end" },
] as const;

export function PricingScopeSignal() {
  return (
    <div className="pricing-scope-signal" aria-hidden="true">
      <svg viewBox="0 0 620 360" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient
            id="pricing-core"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="translate(355 175) rotate(90) scale(86)"
          >
            <stop stopColor="#FFFFFF" />
            <stop offset="0.25" stopColor="#D9F5FF" />
            <stop offset="0.62" stopColor="#55CFFF" />
            <stop offset="1" stopColor="#0F66E0" />
          </radialGradient>
          <linearGradient
            id="pricing-route"
            x1="80"
            y1="70"
            x2="550"
            y2="300"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#36C7FF" stopOpacity="0.12" />
            <stop offset="0.46" stopColor="#0F66E0" stopOpacity="0.76" />
            <stop offset="1" stopColor="#36C7FF" stopOpacity="0.16" />
          </linearGradient>
          <linearGradient
            id="pricing-horizon"
            x1="104"
            y1="309"
            x2="526"
            y2="309"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0F66E0" stopOpacity="0" />
            <stop offset="0.18" stopColor="#0F66E0" stopOpacity="0.34" />
            <stop offset="0.82" stopColor="#36C7FF" stopOpacity="0.38" />
            <stop offset="1" stopColor="#36C7FF" stopOpacity="0" />
          </linearGradient>
          <filter id="pricing-core-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              values="0 0 0 0 0.05 0 0 0 0 0.45 0 0 0 0 0.94 0 0 0 0.42 0"
            />
          </filter>
        </defs>

        <path
          d="M72 238C144 116 247 56 354 54C463 52 529 137 526 270"
          stroke="url(#pricing-route)"
          strokeWidth="1.5"
          strokeDasharray="2 8"
          strokeLinecap="round"
        />
        <path
          d="M96 218C167 244 237 236 298 204C368 168 432 117 518 112"
          stroke="url(#pricing-route)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <circle cx="355" cy="175" r="102" fill="#36C7FF" fillOpacity="0.18" filter="url(#pricing-core-glow)" />
        <ellipse cx="355" cy="175" rx="190" ry="78" stroke="#0F66E0" strokeOpacity="0.22" />
        <ellipse
          cx="355"
          cy="175"
          rx="178"
          ry="102"
          transform="rotate(-31 355 175)"
          stroke="#36C7FF"
          strokeOpacity="0.24"
        />
        <ellipse
          cx="355"
          cy="175"
          rx="154"
          ry="126"
          transform="rotate(24 355 175)"
          stroke="#0F66E0"
          strokeOpacity="0.16"
        />

        <circle cx="355" cy="175" r="76" fill="url(#pricing-core)" />
        <circle cx="355" cy="175" r="91" stroke="#FFFFFF" strokeOpacity="0.64" />
        <circle cx="355" cy="175" r="105" stroke="#36C7FF" strokeOpacity="0.16" />
        <ellipse cx="327" cy="144" rx="25" ry="18" fill="#FFFFFF" fillOpacity="0.28" />

        <path d="M310 172H400" stroke="#FFFFFF" strokeOpacity="0.24" />
        <path d="M319 193H391" stroke="#0F66E0" strokeOpacity="0.18" />
        <text
          x="355"
          y="166"
          textAnchor="middle"
          fill="#10213D"
          fontSize="10"
          fontWeight="700"
          fontFamily="var(--font-jetbrains-mono), monospace"
          letterSpacing="2"
        >
          PROJECT SCOPE
        </text>
        <text
          x="355"
          y="188"
          textAnchor="middle"
          fill="#10213D"
          fontSize="13"
          fontWeight="700"
          fontFamily="var(--font-space-grotesk), sans-serif"
          letterSpacing="1.2"
        >
          SHAPED TO FIT
        </text>

        {packageNodes.map((node, index) => (
          <g key={node.name}>
            <circle cx={node.x} cy={node.y} r="13" fill="#F8FBFF" fillOpacity="0.84" stroke="#FFFFFF" />
            <circle cx={node.x} cy={node.y} r="8.5" stroke="#0F66E0" strokeOpacity="0.46" />
            <circle cx={node.x} cy={node.y} r="3.2" fill={index === 2 ? "#0A6B45" : "#0F66E0"} />
            <text
              x={node.labelX}
              y={node.labelY}
              textAnchor={node.anchor}
              fill="#526176"
              fontSize="9"
              fontWeight="600"
              fontFamily="var(--font-jetbrains-mono), monospace"
              letterSpacing="1.1"
            >
              {node.name.toUpperCase()}
            </text>
          </g>
        ))}

        <path d="M104 316H526" stroke="url(#pricing-horizon)" />
        {["BRIEF 01", "SCOPE 02", "PROPOSAL 03"].map((label, index) => {
          const x = 168 + index * 155;
          return (
            <g key={label}>
              <circle cx={x} cy="316" r="4" fill="#F8FBFF" stroke="#0F66E0" strokeOpacity="0.6" />
              <text
                x={x}
                y="340"
                textAnchor="middle"
                fill="#526176"
                fontSize="8.5"
                fontFamily="var(--font-jetbrains-mono), monospace"
                letterSpacing="1.2"
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
