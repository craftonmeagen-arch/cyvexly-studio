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

function EduAILenzPreview() {
  return (
    <div className="flex h-full min-h-72 w-full items-center justify-center bg-[radial-gradient(circle_at_82%_8%,rgba(174,231,242,0.8),transparent_36%),linear-gradient(135deg,#16213e,#5b4bdb)] p-5 sm:p-8">
      <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/35 bg-[#f7f8fc] shadow-2xl">
        <div className="flex items-center justify-between bg-[#16213e] px-4 py-3 text-white">
          <span className="font-display text-sm font-semibold">EduAILenz</span>
          <span className="rounded-full bg-white/15 px-2 py-1 font-mono text-[8px] uppercase tracking-wider">Teacher workspace</span>
        </div>
        <div className="grid grid-cols-[5rem_1fr] sm:grid-cols-[7rem_1fr]">
          <div className="space-y-2 bg-[#eceffd] p-3">
            {["Plan", "Students", "Reading", "Live"].map((label, index) => (
              <div key={label} className={`rounded-lg px-2 py-2 text-[9px] ${index === 0 ? "bg-[#5b4bdb] text-white" : "text-[#404562]"}`}>
                {label}
              </div>
            ))}
          </div>
          <div className="p-4">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-[#5b4bdb]">Today&apos;s workspace</p>
            <p className="mt-1 font-display text-base font-semibold text-[#16213e]">Plan, support, and teach</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {["Lesson studio", "BloomED goals", "Reading lab", "Live activities"].map((label, index) => (
                <div key={label} className="rounded-xl border border-[#dfe3f3] bg-white p-3 shadow-sm">
                  <span className={`block h-2 w-8 rounded-full ${index % 2 ? "bg-[#aee7f2]" : "bg-[#8a7df0]"}`} />
                  <span className="mt-3 block text-[9px] font-medium text-[#313750]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MudoinklePreview() {
  return (
    <div className="flex h-full min-h-72 w-full items-center justify-center bg-[radial-gradient(circle_at_18%_15%,rgba(255,183,3,0.55),transparent_28%),linear-gradient(145deg,#30104d,#7b2cbf)] p-5 sm:p-8">
      <div className="w-full max-w-xl rounded-[2rem] border border-white/30 bg-[#fff7e6] p-5 shadow-2xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#7b2cbf]">Pick a game</p>
            <p className="mt-1 font-display text-xl font-bold text-[#30104d]">Mudoinkle</p>
          </div>
          <span className="rounded-full bg-[#30104d] px-3 py-1 text-[8px] font-semibold uppercase tracking-wider text-white">Game night</span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
          {[
            ["Witigglies", "Pass & play", "bg-[#ffb703]"],
            ["Awmuhog", "Host a room", "bg-[#7b2cbf]"],
            ["List Off", "Join & display", "bg-[#e85d75]"],
          ].map(([name, mode, color]) => (
            <div key={name} className={`${color} min-h-28 rounded-2xl p-3 text-white shadow-lg`}>
              <span className="block h-8 w-8 rounded-full border-2 border-white/60 bg-white/20" />
              <span className="mt-4 block text-[10px] font-bold sm:text-xs">{name}</span>
              <span className="mt-1 block text-[8px] text-white/80">{mode}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const previews: Record<string, (viewport: PreviewViewport) => ReactElement> = {
  "velora-dining": VeloraDiningPreview,
  "nexora-systems": NexoraSystemsPreview,
  eduailenz: EduAILenzPreview,
  mudoinkle: MudoinklePreview,
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
