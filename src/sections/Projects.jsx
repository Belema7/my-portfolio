/**
 * Projects Section - Showcase portfolio projects
 */

import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import gridBg from '../assets/grid-bg.png';

export function Projects() {
    return (
        <section
            id="projects"
            className="relative section text-white"
            aria-labelledby="projects-heading"
            style={{
                backgroundImage: `url(${gridBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10">
                <div className="container">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2
                            id="projects-heading"
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            Featured Projects
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            A selection of projects I've built. Each one taught me something new.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
