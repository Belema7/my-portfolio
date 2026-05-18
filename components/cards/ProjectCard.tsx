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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/15 hover:shadow-lg dark:border-white/10 dark:bg-transparent dark:hover:border-white/20">
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl border-b border-[var(--color-border)] bg-gradient-to-br from-black/5 to-black/10 dark:from-white/5 dark:to-white/10">
        {image ? (
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : null}
        <div className="absolute left-4 top-4">
          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm dark:bg-black/60">
            {type}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold tracking-tight text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-accent)]">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {description}
        </p>

        <div className="mt-4 rounded-lg border border-[var(--color-border)] bg-black/[0.03] p-3 text-sm dark:bg-white/[0.04]">
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-text-primary)]">
            Problem
          </p>
          <p className="mt-1.5 leading-relaxed text-[var(--color-text-secondary)]">{problem}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <Badge key={tech} className="text-[11px]">
              {tech}
            </Badge>
          ))}
          {overflowCount > 0 && (
            <Badge className="text-[11px]">+{overflowCount}</Badge>
          )}
        </div>

        <div className="mt-auto flex items-center gap-6 border-t border-[var(--color-border)] pt-4">
          <Link
            href={`/projects/${slug}`}
            className="text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)] hover:underline"
          >
            Case Study
          </Link>
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              Live Demo
            </a>
          ) : null}
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              Code
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
