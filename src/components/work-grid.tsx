"use client";

import { useMemo, useState } from "react";
import { ConceptPreview } from "@/components/concept-preview";
import { selectedWork, workFilters } from "@/lib/site-config";

export function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return selectedWork;
    if (activeFilter === "Concept") {
      return selectedWork.filter((project) => project.kind.includes("Concept"));
    }
    return selectedWork.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

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
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <a
              key={project.name}
              href={project.href}
              className="group glass-panel flex flex-col overflow-hidden rounded-2xl transition-transform duration-200 hover:-translate-y-1"
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
                <span className="mt-auto pt-2 text-sm font-medium text-cyber-blue group-hover:text-[#0b4fb0]">
                  View case study →
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
