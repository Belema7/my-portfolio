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
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6 lg:gap-8 auto-rows-fr items-stretch">
                    {skillCategories.map((category) => (
                        <div
                            key={category.name}
                            className="group p-6 rounded-2xl bg-white dark:bg-transparent border border-[var(--surface-border)] h-full shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl hover:border-gray-300 dark:hover:border-white/20 dark:hover:shadow-white/5"
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
