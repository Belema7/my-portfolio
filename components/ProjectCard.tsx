/**
 * ProjectCard component for displaying individual projects
 */

import Image from "next/image"

interface Project {
    id: string | number;
    name: string;
    description: string;
    techStack: string[];
    image?: string | null;
    github?: string;
    live?: string;
}

export function ProjectCard({ project }: { project: Project }) {
    const { name, description, techStack, image, github, live } = project;

    return (
        <article className="
      group
      bg-white dark:bg-transparent
      rounded-2xl
      border border-[var(--color-border)]
      overflow-hidden
      transition-all duration-300
      hover:shadow-lg hover:border-black/15
      hover:-translate-y-1
      dark:border-white/10
      dark:hover:border-white/20
    ">
            {/* Project Image/Placeholder */}
            <div className="
        aspect-video
        bg-gradient-to-br from-black/10 to-black/20
        dark:from-white/5 dark:to-white/10
        flex items-center justify-center
        overflow-hidden
        relative
      ">
                {image ? (
                    <Image
                        src={image}
                        alt={`${name} screenshot`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                ) : (
                    <div className="text-neutral-400 text-sm font-medium">
                        <svg
                            className="w-12 h-12 mx-auto mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        Screenshot
                    </div>
                )}
            </div>

            {/* Project Content */}
            <div className="p-5">
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                    {name}
                </h3>

                <p className="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2">
                    {description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="
                px-2 py-0.5
                text-xs font-medium
                bg-black/5 text-[var(--color-text-secondary)]
                border border-[var(--surface-border)]
                rounded-md
                dark:bg-black/30 dark:text-white/75 dark:border-white/10
              "
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-3 border-t border-[var(--color-border)]">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                inline-flex items-center gap-1.5
                text-sm font-medium
                text-[var(--color-text-secondary)]
                hover:text-[var(--color-primary)]
                transition-colors duration-200
              "
                            aria-label={`View ${name} source code on GitHub`}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            Code
                        </a>
                    )}
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                inline-flex items-center gap-1.5
                text-sm font-medium
                text-[var(--color-accent)]
                hover:text-[var(--color-accent-hover)]
                transition-colors duration-200
              "
                            aria-label={`View ${name} live demo`}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
