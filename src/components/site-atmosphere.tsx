export function SiteAtmosphere() {
  return (
    <div className="site-atmosphere" aria-hidden="true">
      <span className="site-atmosphere-plane site-atmosphere-plane-left" />
      <span className="site-atmosphere-plane site-atmosphere-plane-right" />
      <svg
        className="site-atmosphere-wiring"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <g className="site-atmosphere-wire-soft">
          <path d="M-80 210H180L286 104H530L635 210H824" />
          <path d="M1040 -54V94L922 212V374L1010 462V650" />
          <path d="M1680 724H1450L1354 628H1126L1018 736H826" />
          <path d="M286 1000V850L392 744V592L310 510V346" />
        </g>
        <g className="site-atmosphere-wire-bright">
          <path d="M-40 430H126L210 346H390" />
          <path d="M1214 152H1390L1470 232H1640" />
          <path d="M1146 862H1322L1404 780H1640" />
        </g>
        <g className="site-atmosphere-nodes">
          <circle cx="180" cy="210" r="4" />
          <circle cx="286" cy="104" r="4" />
          <circle cx="922" cy="212" r="4" />
          <circle cx="1010" cy="462" r="4" />
          <circle cx="1354" cy="628" r="4" />
          <circle cx="392" cy="744" r="4" />
          <circle cx="210" cy="346" r="3" />
          <circle cx="1470" cy="232" r="3" />
        </g>
      </svg>
      <span className="site-atmosphere-data site-atmosphere-data-a">08.31</span>
      <span className="site-atmosphere-data site-atmosphere-data-b">2048</span>
      <span className="site-atmosphere-data site-atmosphere-data-c">17.6</span>
      <span className="site-atmosphere-data site-atmosphere-data-d">CYV / 09</span>
    </div>
  );
}
