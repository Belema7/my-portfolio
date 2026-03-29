/**
 * Skills Section - Display skills by category
 */

import { SkillTag } from '@/components/SkillTag';
import { skillCategories } from '@/data/skills';

export function Skills() {
    return (
        <section
            id="skills"
            className="relative section"
            aria-labelledby="skills-heading"
        >
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2
                        id="skills-heading"
                        className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4"
                    >
                        Skills & Technologies
                    </h2>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        The tools and technologies I use to bring ideas to life.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category) => (
                            <div
                                key={category.name}
                                className="group p-6 rounded-2xl bg-transparent border border-[var(--surface-border)] shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
                                    {category.name}
                                </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <SkillTag key={skill} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
