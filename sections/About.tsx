/**
 * About Section - Professional summary
 */

import { personalInfo } from '@/data/personal';
import { GraduationCap, Code2, LayoutGrid, Briefcase } from 'lucide-react';
import { TimelineCard } from '@/components/TimelineCard';

export function About() {
    const { about } = personalInfo;

    return (
        <section
            id="about"
            className="relative section text-white"
            aria-labelledby="about-heading"
        >
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/grid-bg.png')`,
                }}
            />
            <div className="absolute inset-0 z-1 bg-black/70" />

            <div className="relative z-10">
                <div className="container max-w-3xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2
                            id="about-heading"
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            About Me
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            A quick snapshot of my journey so far.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <p className="text-lg text-gray-200 leading-relaxed">
                            {about.summary}
                        </p>
                        <p className="text-lg text-gray-200 leading-relaxed">
                            {about.philosophy}
                        </p>
                    </div>

                    {/* Timeline Cards */}
                    <div className="mt-12 pt-10 border-t border-[var(--color-border)]">
                        <div className="grid md:grid-cols-2 gap-6">
                            <TimelineCard
                                icon={GraduationCap}
                                year="2023"
                                title="Started University"
                                description="Began my university journey and built a foundation for consistent learning."
                            />
                            <TimelineCard
                                icon={Code2}
                                year="2024"
                                title="Started Coding"
                                description="Dove into modern JavaScript and React—shipping small projects while learning fast."
                            />
                            <TimelineCard
                                icon={LayoutGrid}
                                year="2025"
                                title="Built Portfolio Projects"
                                description="Focused on real UI/UX, reusable components, and production-style project structure."
                            />
                            <TimelineCard
                                icon={Briefcase}
                                year="Present"
                                title="Open for Internship"
                                description="Actively looking for an internship to grow with a team and contribute to real products."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
