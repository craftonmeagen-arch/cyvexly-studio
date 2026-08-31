export function PartnershipSignalGraphic() {
  return (
    <div className="partnership-signal" aria-hidden="true">
      <svg viewBox="0 0 360 260" fill="none" role="presentation">
        <defs>
          <linearGradient id="partner-face-a" x1="92" y1="40" x2="258" y2="224">
            <stop stopColor="#F8FBFF" stopOpacity="0.92" />
            <stop offset="0.48" stopColor="#36C7FF" stopOpacity="0.2" />
            <stop offset="1" stopColor="#0F66E0" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="partner-face-b" x1="270" y1="74" x2="126" y2="220">
            <stop stopColor="#36C7FF" stopOpacity="0.26" />
            <stop offset="1" stopColor="#F8FBFF" stopOpacity="0.08" />
          </linearGradient>
          <radialGradient id="partner-core" cx="0" cy="0" r="1" gradientTransform="translate(181 132) rotate(90) scale(48)">
            <stop stopColor="#F8FBFF" />
            <stop offset="0.34" stopColor="#8DE2FF" stopOpacity="0.9" />
            <stop offset="1" stopColor="#0F66E0" stopOpacity="0" />
          </radialGradient>
          <filter id="partner-glow" x="-90%" y="-90%" width="280%" height="280%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        <g stroke="#0F66E0" strokeOpacity="0.12">
          <path d="M28 211H332" />
          <path d="M50 228H310" />
          <path d="M73 244H287" />
          <path d="M181 26V242" />
          <path d="M47 211L181 144L315 211" />
          <path d="M84 228L181 180L278 228" />
        </g>

        <ellipse cx="181" cy="134" rx="146" ry="75" stroke="#36C7FF" strokeOpacity="0.3" />
        <ellipse
          cx="181"
          cy="134"
          rx="118"
          ry="50"
          stroke="#0F66E0"
          strokeOpacity="0.24"
          transform="rotate(-24 181 134)"
        />

        <path d="M181 42L269 88V182L181 229L93 182V88L181 42Z" fill="url(#partner-face-a)" stroke="#0F66E0" strokeOpacity="0.48" strokeWidth="1.5" />
        <path d="M181 42V136L269 182V88L181 42Z" fill="url(#partner-face-b)" stroke="#36C7FF" strokeOpacity="0.42" />
        <path d="M181 136L269 182L181 229L93 182L181 136Z" fill="#0F66E0" fillOpacity="0.07" stroke="#0F66E0" strokeOpacity="0.3" />
        <path d="M93 88L181 136L269 88" stroke="#0F66E0" strokeOpacity="0.46" strokeWidth="1.5" />
        <path d="M181 42V136M93 88V182M269 88V182M181 136V229" stroke="#0F66E0" strokeOpacity="0.42" strokeWidth="1.5" />

        <path d="M181 77L236 106V164L181 193L126 164V106L181 77Z" fill="#F8FBFF" fillOpacity="0.24" stroke="#36C7FF" strokeOpacity="0.62" strokeWidth="1.5" />
        <path d="M126 106L181 135L236 106M181 77V135M181 135V193" stroke="#36C7FF" strokeOpacity="0.58" />

        <circle cx="181" cy="134" r="40" fill="url(#partner-core)" filter="url(#partner-glow)" opacity="0.9" />
        <circle cx="181" cy="134" r="3.5" fill="#F8FBFF" stroke="#36C7FF" strokeWidth="2" />

        <g fill="#F8FBFF" stroke="#0F66E0" strokeWidth="1.5">
          <circle cx="93" cy="88" r="4" />
          <circle cx="269" cy="88" r="4" />
          <circle cx="269" cy="182" r="4" />
          <circle cx="181" cy="229" r="4" />
          <circle cx="93" cy="182" r="4" />
        </g>

        <g fill="#0A6B45">
          <circle cx="47" cy="211" r="3" />
          <circle cx="315" cy="211" r="3" />
        </g>
      </svg>
    </div>
  );
}
