import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/content";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ project }: { project: Project }) {
  const { title, slug, description, problem, techStack, image, type, liveUrl, githubUrl } =
    project;

  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/15 hover:shadow-lg dark:border-white/10 dark:bg-transparent dark:hover:border-white/20">
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-black/5 to-black/10 dark:from-white/5 dark:to-white/10">
        {image ? (
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : null}
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-[var(--color-primary)]">{title}</h3>
          <Badge variant="outline">{type}</Badge>
        </div>
        <p className="mb-2 line-clamp-2 text-sm text-[var(--color-text-secondary)]">
          {description}
        </p>
        <p className="mb-4 line-clamp-2 text-xs text-[var(--color-text-secondary)]">
          {problem}
        </p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {techStack.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {techStack.length > 4 && (
            <Badge>+{techStack.length - 4}</Badge>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-3 border-t border-[var(--color-border)] pt-3">
          <Link
            href={`/projects/${slug}`}
            className="text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
          >
            Case Study
          </Link>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
