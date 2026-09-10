import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { ConceptPreview } from "@/components/concept-preview";
import { selectedWork } from "@/lib/site-config";

const realProjectPreviews: Record<string, { src: string; alt: string }> = {
  eduailenz: {
    src: "/media/eduailenz-live-desktop.png",
    alt: "Current public EduAILenz teacher-workspace homepage",
  },
  mudoinkle: {
    src: "/media/mudoinkle-live-desktop.png",
    alt: "Current public Mudoinkle staging homepage",
  },
};

export function WorkGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {selectedWork.map((project) => {
        const realPreview = realProjectPreviews[project.slug];
        return (
          <article
            key={project.name}
            className="glass-panel flex flex-col overflow-hidden rounded-2xl"
          >
            <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}>
              {realPreview ? (
                <Image
                  src={realPreview.src}
                  alt={realPreview.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              ) : (
                <div aria-hidden="true" className="h-full">
                  <ConceptPreview slug={project.slug} />
                </div>
              )}
            </div>
          <div className="flex flex-1 flex-col gap-2 p-5">
            <span className="w-fit rounded-full bg-ice-field px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-cool-graphite">
              {project.kind}
            </span>
            <h2 className="font-display text-lg font-semibold text-midnight-slate">
              {project.name}
            </h2>
            <p className="text-sm text-cool-graphite">{project.summary}</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-midnight-slate">
              {project.capabilities.map((capability) => (
                <li key={capability} className="flex items-start gap-2">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyber-blue"
                    aria-hidden="true"
                  />
                  {capability}
                </li>
              ))}
            </ul>
            <div className="mt-1 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-arctic-mist px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-cool-graphite"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-2 pt-3">
              <ButtonLink
                href={project.href}
                variant="secondary"
                className="px-4 py-2 text-xs"
              >
                View case study
              </ButtonLink>
              <ButtonLink
                href={project.demoHref}
                className="px-4 py-2 text-xs"
                target={project.demoExternal ? "_blank" : undefined}
                rel={project.demoExternal ? "noreferrer" : undefined}
              >
                {project.demoLabel}{project.demoExternal ? " ↗" : ""}
              </ButtonLink>
            </div>
          </div>
          </article>
        );
      })}
    </div>
  );
}
