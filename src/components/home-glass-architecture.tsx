export function HomeGlassArchitecture() {
  return (
    <div className="home-glass-architecture" aria-hidden="true">
      <span className="home-architecture-plane home-architecture-plane-a" />
      <span className="home-architecture-plane home-architecture-plane-b" />
      <span className="home-architecture-plane home-architecture-plane-c" />
      <span className="home-architecture-column home-architecture-column-a" />
      <span className="home-architecture-column home-architecture-column-b" />
      <span className="home-architecture-column home-architecture-column-c" />
      <span className="home-architecture-beam home-architecture-beam-a" />
      <span className="home-architecture-beam home-architecture-beam-b" />
      <span className="home-architecture-floor" />
      <svg
        className="home-architecture-traces"
        viewBox="0 0 1600 760"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <g className="home-architecture-trace-soft">
          <path d="M0 168H168L242 94H430L506 170H688" />
          <path d="M1600 128H1410L1328 210H1168L1090 132H906" />
          <path d="M0 548H214L298 464H482L568 550H744" />
          <path d="M1600 520H1444L1360 436H1196L1104 528H888" />
          <path d="M134 0V106L222 194V372L142 452V760" />
          <path d="M1464 0V126L1378 212V396L1466 484V760" />
        </g>
        <g className="home-architecture-trace-bright">
          <path d="M0 284H126L202 208H356" />
          <path d="M1244 274H1404L1486 192H1600" />
          <path d="M0 636H306L392 550H554" />
          <path d="M1050 650H1270L1352 568H1600" />
          <path d="M514 0V98L584 168V276" />
          <path d="M1018 760V638L1094 562V452" />
        </g>
        <g className="home-architecture-trace-nodes">
          <circle cx="168" cy="168" r="4" />
          <circle cx="242" cy="94" r="4" />
          <circle cx="1328" cy="210" r="4" />
          <circle cx="298" cy="464" r="4" />
          <circle cx="1360" cy="436" r="4" />
          <circle cx="202" cy="208" r="3" />
          <circle cx="1486" cy="192" r="3" />
          <circle cx="392" cy="550" r="3" />
          <circle cx="1352" cy="568" r="3" />
          <circle cx="584" cy="168" r="3" />
          <circle cx="1094" cy="562" r="3" />
        </g>
      </svg>
      <span className="home-architecture-coordinate home-architecture-coordinate-a">08.31</span>
      <span className="home-architecture-coordinate home-architecture-coordinate-b">2048</span>
      <span className="home-architecture-coordinate home-architecture-coordinate-c">17.6</span>
    </div>
  );
}
