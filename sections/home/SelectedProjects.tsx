import Link from "next/link";
import { getFeaturedProjects } from "@/data/helpers";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/cards/ProjectCard";

export function SelectedProjects() {
  const featured = getFeaturedProjects(3);

  return (
    <section
      aria-labelledby="work-heading"
      className="section border-t border-[var(--color-border)]"
    >
      <Container>

        {/* ── Section header ───────────────────────────────────── */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label-numbered mb-3" style={{ color: "var(--color-text-muted-readable)" }}>
              // 01 — Selected Work
            </p>
            <h2 id="work-heading" className="section-title-xl">
              Projects
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Real work first — interfaces and products built with modern full-stack tools.
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex shrink-0 items-center gap-1.5 border border-[var(--color-border-strong)] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
          >
            View all projects
            <span className="transition-transform duration-150 motion-safe:group-hover:translate-x-0.5" aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* ── Card grid — 3 per row ───────────────────── */}
        <div id="projects" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* ── Bottom CTA row ───────────────────────────────────── */}
        <div className="mt-10 flex items-center justify-between border-t border-[var(--color-border)] pt-6">
          <p
            className="font-mono text-[10px] uppercase tracking-[0.1em]"
            style={{ color: "var(--color-text-muted-readable)" }}
          >
            {featured.length} featured — more in the archive
          </p>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
          >
            Full project archive
            <span className="transition-transform duration-150 motion-safe:group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </Link>
        </div>

      </Container>
    </section>
  );
}
