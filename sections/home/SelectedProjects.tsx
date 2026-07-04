import Link from "next/link";
import Image from "next/image";
import { getFeaturedProjects } from "@/data/helpers";
import { Container } from "@/components/ui/Container";

export function SelectedProjects() {
  const featured = getFeaturedProjects(4);

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
              Real work first — interfaces and products built with modern frontend and full-stack tools.
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

        {/* ── Card grid — 3 per row, 6 total ───────────────────── */}
        <div id="projects" className="grid gap-4 md:gap-8 sm:grid-cols-2">
          {featured.map((project, i) => {
            const { title, slug, description, techStack, image, type, liveUrl, githubUrl } = project;
            const visibleTech = techStack.slice(0, 3);
            const overflowCount = techStack.length - visibleTech.length;

            return (
              <article
                key={slug}
                className="group flex flex-col border border-[var(--color-border)] bg-[var(--color-bg)] transition-all duration-300 hover:border-[var(--color-border-strong)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)]"
              >
                {/* ── Card meta row (above image, no overlay) ─── */}
                <div className="flex items-center justify-between border-b border-[var(--color-border)] px-3 py-2">
                  <span
                    className="font-mono text-[10px] tabular-nums"
                    style={{ color: "var(--color-text-muted-readable)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">
                    {type}
                  </span>
                </div>

                {/* ── Image (clean, hidden on mobile for minimalism) ── */}
                <div className="relative hidden md:block aspect-[16/8] overflow-hidden bg-[var(--color-primary)]/5">
                  {image ? (
                    <Image
                      src={image}
                      alt={`${title} screenshot`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 project-card-placeholder" aria-hidden="true" />
                  )}
                </div>

                {/* ── Card body ───────────────────────────────── */}
                <div className="flex flex-1 flex-col p-4 md:border-t border-[var(--color-border)] md:p-5">

                  {/* Title */}
                  <h3
                    className="leading-none text-[var(--color-primary)] transition-opacity duration-200 group-hover:opacity-70"
                    style={{
                      fontFamily: '"Bebas Neue", sans-serif',
                      fontSize: "1.25rem",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--color-text-secondary)]">
                    {description}
                  </p>

                  {/* Tech tags */}
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    {visibleTech.map((tech) => (
                      <span
                        key={tech}
                        className="border border-[var(--color-border)] bg-[var(--color-bg)] px-2 py-[3px] font-mono text-[9px] uppercase tracking-[0.06em] text-[var(--color-text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {overflowCount > 0 && (
                      <span
                        className="font-mono text-[9px] uppercase tracking-[0.06em]"
                        style={{ color: "var(--color-text-muted-readable)" }}
                      >
                        +{overflowCount} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex items-center border-t border-[var(--color-border)] pt-3 mt-4">
                    <Link
                      href={`/projects/${slug}`}
                      className="group/btn inline-flex min-h-[36px] items-center gap-1.5 bg-[var(--color-primary)] px-4 py-2 font-mono text-[9.5px] font-semibold uppercase tracking-[0.09em] text-[var(--color-secondary)] transition-opacity hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                    >
                      Case Study
                      <span className="transition-transform duration-150 motion-safe:group-hover/btn:translate-x-0.5 motion-safe:group-hover/btn:-translate-y-0.5" aria-hidden="true">↗</span>
                    </Link>

                    {liveUrl && (
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[36px] items-center border-l border-[var(--color-border)] px-4 py-2 font-mono text-[9.5px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
                      >
                        Live
                      </a>
                    )}
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[36px] items-center border-l border-[var(--color-border)] px-4 py-2 font-mono text-[9.5px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
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
