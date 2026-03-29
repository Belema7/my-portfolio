/**
 * Projects Section - Showcase portfolio projects
 */

import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export function Projects() {
    return (
        <section
            id="projects"
            className="relative section"
            aria-labelledby="projects-heading"
        >
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2
                        id="projects-heading"
                        className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4"
                    >
                        Featured Projects
                    </h2>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        A selection of projects I&apos;ve built. Each one taught me something new.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
