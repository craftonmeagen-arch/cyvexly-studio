import type { ReactElement } from "react";

// Only inspectable built demonstrations are presented as portfolio proof.
// Reuse their real rendered captures here so cards show the built interfaces,
// while each case-study page retains the fuller desktop/mobile comparison.

function NexoraSystemsPreview() {
  return (
    <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="400" height="240" fill="#10213D" />
      <image
        href="/media/nexora-release-demo.png"
        width="400"
        height="250"
        preserveAspectRatio="xMidYMin slice"
      />
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
