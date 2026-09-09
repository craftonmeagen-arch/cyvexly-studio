"use client";

import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/button";
import { ConceptPreview } from "@/components/concept-preview";
import { selectedWork, workFilters } from "@/lib/site-config";

export function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return selectedWork;
    if (activeFilter === "Built demo") {
      return selectedWork.filter((project) => project.kind === "Built concept demo");
    }
    if (activeFilter === "Design concepts") {
      return selectedWork.filter((project) => project.kind === "Concept project");
    }
    return selectedWork.filter((project) => project.category === activeFilter);
  }, [activeFilter]);
  const gridColumns =
    filtered.length === 1
      ? "max-w-lg"
      : filtered.length === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-2 xl:grid-cols-4";

  return (
    <div>
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {workFilters.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-cyber-blue text-white"
                  : "glass-panel text-cool-graphite hover:text-midnight-slate"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-cool-graphite">
          No projects match that filter yet.
        </p>
      ) : (
        <div className={`mt-10 grid gap-6 ${gridColumns}`}>
          {filtered.map((project) => (
            <article
              key={project.name}
              className="glass-panel flex flex-col overflow-hidden rounded-2xl"
            >
              <div
                className={`h-48 w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}
                aria-hidden="true"
              >
                <ConceptPreview slug={project.slug} />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="w-fit rounded-full bg-ice-field px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-cool-graphite">
                  {project.kind}
                </span>
                <h2 className="font-display text-lg font-semibold text-midnight-slate">
                  {project.name}
                </h2>
                <p className="text-sm text-cool-graphite">{project.summary}</p>
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
                  <ButtonLink href={project.href} variant={project.demoHref ? "secondary" : "text"} className="px-4 py-2 text-xs">
                    {project.demoHref ? "View case study" : "View concept"}
                  </ButtonLink>
                  {project.demoHref ? (
                    <ButtonLink href={project.demoHref} className="px-4 py-2 text-xs">
                      Try demo
                    </ButtonLink>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
