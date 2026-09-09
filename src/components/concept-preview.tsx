import type { ReactElement } from "react";

// Only inspectable built demonstrations are presented as portfolio proof.
// Velora uses a real responsive capture; Nexora's compact dashboard signal is
// paired with full desktop/mobile captures on its case-study page.

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
  "nexora-systems": NexoraSystemsPreview,
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
