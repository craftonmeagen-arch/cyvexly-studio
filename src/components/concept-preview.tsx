import type { ReactElement } from "react";

// Existing concept studies use hand-authored schematic compositions. Velora
// is the one built capability demo, so its preview uses captures of the real
// responsive experience instead of implying that another unbuilt concept is
// a finished client site.

function AuroraSpacesPreview() {
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="240" fill="#10213D" />
      <path d="M0 170 L120 90 L200 150 L260 70 L400 140 V240 H0 Z" fill="#0F66E0" opacity="0.18" />
      <path d="M40 240 L150 120 L230 200 L320 60 L400 170 V240 Z" fill="#36C7FF" opacity="0.14" />
      <rect x="28" y="176" width="150" height="6" rx="3" fill="#0F66E0" />
      <rect x="28" y="192" width="90" height="4" rx="2" fill="#36C7FF" opacity="0.7" />
    </svg>
  );
}

function NexoraSystemsPreview() {
  const cards = [
    { x: 24, y: 96, w: 104, h: 62 },
    { x: 140, y: 96, w: 104, h: 62 },
    { x: 256, y: 96, w: 120, h: 62 },
    { x: 24, y: 168, w: 172, h: 44 },
    { x: 208, y: 168, w: 168, h: 44 },
  ];
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="240" fill="#10213D" />
      <rect x="0" y="39" width="400" height="1" fill="#46576E" opacity="0.5" />
      <circle cx="28" cy="20" r="6" fill="#0F66E0" />
      <rect x="300" y="15" width="30" height="10" rx="5" fill="#46576E" opacity="0.6" />
      <rect x="338" y="15" width="30" height="10" rx="5" fill="#46576E" opacity="0.6" />
      {cards.map((c, i) => (
        <rect
          key={i}
          x={c.x}
          y={c.y}
          width={c.w}
          height={c.h}
          rx="6"
          fill="#0F66E0"
          opacity={i % 2 === 0 ? 0.16 : 0.1}
          stroke="#36C7FF"
          strokeOpacity="0.35"
        />
      ))}
      <path d="M40 145 L60 120 L80 135 L100 108 L118 120" fill="none" stroke="#36C7FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      <path d="M156 148 L172 128 L190 140 L212 112" fill="none" stroke="#36C7FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
    </svg>
  );
}

function VelloraCarePreview() {
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="240" fill="#EEF4FA" />
      <rect x="168" y="46" width="64" height="104" rx="20" fill="#36C7FF" opacity="0.5" />
      <rect x="186" y="66" width="28" height="14" rx="4" fill="#EEF4FA" />
      <circle cx="272" cy="70" r="9" fill="#0A6B45" />
      <rect x="286" y="65" width="46" height="4" rx="2" fill="#0A6B45" opacity="0.6" />
      <rect x="286" y="74" width="34" height="4" rx="2" fill="#0A6B45" opacity="0.4" />
      <rect x="40" y="188" width="320" height="34" rx="17" fill="#D8E1EA" />
      <rect x="284" y="196" width="60" height="18" rx="9" fill="#0A6B45" opacity="0.85" />
    </svg>
  );
}

type PreviewViewport = "desktop" | "mobile";

function VeloraDiningPreview(viewport: PreviewViewport) {
  const source =
    viewport === "mobile"
      ? "/media/velora-capability-demo-mobile.webp"
      : "/media/velora-capability-demo.webp";
  const width = viewport === "mobile" ? 200 : 400;
  const height = viewport === "mobile" ? 320 : 240;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width={width} height={height} fill="#20271F" />
      <image
        href={source}
        width={width}
        height={height}
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  );
}

const previews: Record<string, (viewport: PreviewViewport) => ReactElement> = {
  "velora-dining": VeloraDiningPreview,
  "aurora-spaces": AuroraSpacesPreview,
  "nexora-systems": NexoraSystemsPreview,
  "vellora-care": VelloraCarePreview,
};

export function ConceptPreview({
  slug,
  viewport = "desktop",
}: {
  slug: string;
  viewport?: PreviewViewport;
}) {
  const Preview = previews[slug];
  if (!Preview) return null;
  return Preview(viewport);
}
