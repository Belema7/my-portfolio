"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import { getProjectTypes } from "@/data/helpers";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const types = ["All", ...getProjectTypes()];
  const [activeType, setActiveType] = useState("All");

  const filtered =
    activeType === "All"
      ? projects
      : projects.filter((p) => p.type === activeType);

  return (
    <Container>
      <SectionHeader
        title="Projects"
        subtitle="Real applications built with modern frontend and full-stack tools."
      />
      <div className="mb-10 flex flex-wrap gap-2">
        {types.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setActiveType(type)}
            className={cn(
              "border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors",
              activeType === type
                ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-secondary)]"
                : "border-[var(--color-border-strong)] bg-transparent text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            )}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
