import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/content";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ project }: { project: Project }) {
  const { title, slug, description, problem, techStack, image, type, liveUrl, githubUrl } =
    project;

  const visibleTech = techStack.slice(0, 4);
  const overflowCount = techStack.length - visibleTech.length;

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[var(--color-border)] transition-all duration-300 hover:border-[var(--color-border-strong)] hover:shadow-lg">
      {/* ── Image ──────────────────────────────────────────── */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-primary)]/5">
        {image ? (
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : null}
        {/* Type badge */}
        <div className="absolute left-0 top-0">
          <Badge variant="outline" className="border-0 border-r border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-sm">
            {type}
          </Badge>
        </div>
      </div>

      {/* ── Info ───────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col p-5">
        <h3
          className="text-[1.6rem] leading-none text-[var(--color-primary)] transition-opacity group-hover:opacity-70"
          style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.03em" }}
        >
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {description}
        </p>

        {/* Problem block */}
        <div className="mt-4 border-t border-[var(--color-border)] pt-4">
          <p className="label-numbered mb-1.5">// Problem</p>
          <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{problem}</p>
        </div>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {overflowCount > 0 && (
            <Badge>+{overflowCount}</Badge>
          )}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-0 border-t border-[var(--color-border)] pt-4">
          <Link
            href={`/projects/${slug}`}
            className="btn-sharp text-[10px] py-2 px-4"
          >
            Case Study ↗
          </Link>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
