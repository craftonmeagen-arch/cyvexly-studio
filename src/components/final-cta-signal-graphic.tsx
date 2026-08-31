export function FinalCtaSignalGraphic() {
  return (
    <div className="final-cta-signal" aria-hidden="true">
      <svg viewBox="0 0 720 360" role="presentation">
        <defs>
          <radialGradient id="final-cta-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#8ee7ff" stopOpacity="0.72" />
            <stop offset="0.42" stopColor="#36c7ff" stopOpacity="0.26" />
            <stop offset="1" stopColor="#0f66e0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="final-cta-planet" cx="46%" cy="5%" r="88%">
            <stop offset="0" stopColor="#65d9ff" stopOpacity="0.7" />
            <stop offset="0.26" stopColor="#1b7cef" stopOpacity="0.72" />
            <stop offset="0.68" stopColor="#0e3974" stopOpacity="0.86" />
            <stop offset="1" stopColor="#071b3b" stopOpacity="0.98" />
          </radialGradient>
          <linearGradient id="final-cta-horizon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#36c7ff" stopOpacity="0" />
            <stop offset="0.22" stopColor="#8ee7ff" stopOpacity="0.64" />
            <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.94" />
            <stop offset="0.78" stopColor="#57d4ff" stopOpacity="0.62" />
            <stop offset="1" stopColor="#0f66e0" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="final-cta-orbit" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#36c7ff" stopOpacity="0" />
            <stop offset="0.46" stopColor="#a8ecff" stopOpacity="0.7" />
            <stop offset="1" stopColor="#4b96ff" stopOpacity="0" />
          </linearGradient>
          <clipPath id="final-cta-planet-clip">
            <circle cx="470" cy="430" r="282" />
          </clipPath>
        </defs>

        <ellipse cx="470" cy="184" rx="292" ry="92" fill="url(#final-cta-glow)" />

        <g fill="none" stroke="#7ddfff" strokeOpacity="0.18" strokeWidth="1">
          <path d="M58 83H235L274 45H454" />
          <path d="M112 128H266L302 92H610" />
          <path d="M177 301H300L336 268H688" />
          <path d="M268 23V70M545 76V121M661 172V221" />
        </g>

        <g fill="#b8efff">
          <circle cx="235" cy="83" r="2.5" />
          <circle cx="302" cy="92" r="2.5" />
          <circle cx="545" cy="121" r="2.5" />
          <circle cx="336" cy="268" r="2.5" />
          <circle cx="661" cy="221" r="2.5" />
        </g>

        <path
          d="M154 254C214 84 522 17 674 174"
          fill="none"
          stroke="url(#final-cta-orbit)"
          strokeWidth="1.5"
        />
        <path
          d="M219 283C281 148 510 84 650 207"
          fill="none"
          stroke="#8de9ff"
          strokeDasharray="3 8"
          strokeOpacity="0.34"
        />

        <circle cx="470" cy="430" r="282" fill="url(#final-cta-planet)" />
        <g clipPath="url(#final-cta-planet-clip)" fill="none" stroke="#a7eaff" strokeOpacity="0.27" strokeWidth="1">
          <path d="M171 206Q470 115 769 206" />
          <path d="M151 244Q470 151 789 244" />
          <path d="M137 286Q470 195 803 286" />
          <path d="M129 330Q470 244 811 330" />
          <path d="M470 145C403 212 391 292 392 360" />
          <path d="M470 145C537 212 549 292 548 360" />
          <path d="M470 145C346 215 314 292 313 360" />
          <path d="M470 145C594 215 626 292 627 360" />
          <path d="M470 145V360" />
          <path d="M249 205L356 329L470 244L568 344L704 219" strokeOpacity="0.4" />
          <path d="M205 270L331 219L443 337L565 230L756 301" strokeOpacity="0.34" />
        </g>
        <path
          d="M180 196Q470 107 760 196"
          fill="none"
          stroke="url(#final-cta-horizon)"
          strokeWidth="2.2"
        />

        <g fill="#d9f8ff" stroke="#36c7ff" strokeWidth="2">
          <circle cx="356" cy="329" r="4" />
          <circle cx="470" cy="244" r="4" />
          <circle cx="568" cy="344" r="4" />
          <circle cx="331" cy="219" r="3.5" />
          <circle cx="565" cy="230" r="3.5" />
        </g>
      </svg>
    </div>
  );
}
