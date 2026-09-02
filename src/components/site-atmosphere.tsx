export function SiteAtmosphere() {
  return (
    <div className="site-atmosphere" aria-hidden="true">
      <span className="site-atmosphere-plane site-atmosphere-plane-left" />
      <span className="site-atmosphere-plane site-atmosphere-plane-right" />
      <span className="site-atmosphere-portal site-atmosphere-portal-left" />
      <span className="site-atmosphere-portal site-atmosphere-portal-right" />
      <span className="site-atmosphere-rail site-atmosphere-rail-a" />
      <span className="site-atmosphere-rail site-atmosphere-rail-b" />
      <span className="site-atmosphere-rail site-atmosphere-rail-c" />
      <span className="site-atmosphere-beam site-atmosphere-beam-a" />
      <span className="site-atmosphere-beam site-atmosphere-beam-b" />
      <span className="site-atmosphere-beam site-atmosphere-beam-c" />
      <span className="site-atmosphere-horizon" />
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
          <path d="M-40 70H352L430 148H736L824 60H1108L1186 138H1640" />
          <path d="M-40 892H214L316 790H574L662 878H954L1046 786H1640" />
          <path d="M64 -40V132L156 224V456L70 542V1040" />
          <path d="M1510 -40V172L1422 260V508L1518 604V1040" />
        </g>
        <g className="site-atmosphere-wire-bright">
          <path d="M-40 430H126L210 346H390" />
          <path d="M1214 152H1390L1470 232H1640" />
          <path d="M1146 862H1322L1404 780H1640" />
          <path d="M520 -20V116L600 196V332" />
          <path d="M744 1000V866L828 782V648" />
          <path d="M0 620H260L340 540H516" />
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
          <circle cx="430" cy="148" r="3" />
          <circle cx="1186" cy="138" r="3" />
          <circle cx="316" cy="790" r="3" />
          <circle cx="1046" cy="786" r="3" />
          <circle cx="600" cy="196" r="3" />
          <circle cx="828" cy="782" r="3" />
        </g>
      </svg>
      <span className="site-atmosphere-data site-atmosphere-data-a">CYV / GRID</span>
      <span className="site-atmosphere-data site-atmosphere-data-b">NORTH / 08</span>
      <span className="site-atmosphere-data site-atmosphere-data-c">SIGNAL / 17</span>
      <span className="site-atmosphere-data site-atmosphere-data-d">STUDIO / 01</span>
    </div>
  );
}
