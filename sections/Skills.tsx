/**
 * Skills Section - Display skills by category
 */

import { SkillTag } from '@/components/SkillTag';
import { skillCategories } from '@/data/skills';

export function Skills() {
    return (
        <section
            id="skills"
            className="relative section text-white"
            aria-labelledby="skills-heading"
        >
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/grid-bg.png')`,
                }}
            />
            <div className="absolute inset-0 z-1 bg-black/70" />

            <div className="relative z-10">
                <div className="container">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2
                            id="skills-heading"
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            Skills & Technologies
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            The tools and technologies I use to bring ideas to life.
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category) => (
                            <div
                                key={category.name}
                                className="group p-6 rounded-2xl bg-transparent border border-white/20 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/5 hover:shadow-lg"
                            >
                                <h3 className="text-lg font-semibold text-white mb-4">
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
            </div>
        </section>
    );
}
