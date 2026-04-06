/**
 * About Section - Professional summary
 */

import { personalInfo } from '@/data/personal';
import { GraduationCap, Code2, LayoutGrid, Briefcase } from 'lucide-react';


export function About() {
    const { about } = personalInfo;

    return (
        <section
            id="about"
            className="relative section"
            aria-labelledby="about-heading"
        >
            <div className="container max-w-3xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2
                        id="about-heading"
                        className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4"
                    >
                        About Me
                    </h2>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        A quick snapshot of my journey so far.
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                        {about.summary}
                    </p>
                    <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                        {about.philosophy}
                    </p>
                </div>

                {/* Timeline Vertical Layout */}
                <div className="mt-16 pt-10 border-t border-[var(--color-border)]">
                    <div className="relative border-l border-[var(--color-border)] dark:border-white/10 ml-3 md:ml-4 space-y-10 md:space-y-12 pb-4">
                        {[
                            {
                                icon: GraduationCap,
                                year: "2024",
                                title: "Academic Foundation",
                                description: "Began university studies while developing a disciplined approach to problem-solving, analytical thinking, and continuous learning."
                            },
                            {
                                icon: Code2,
                                year: "2025",
                                title: "Frontend Development Journey",
                                description: "Started building modern web interfaces with JavaScript, TypeScript, React, and core frontend engineering principles."
                            },
                            {
                                icon: LayoutGrid,
                                year: "2026",
                                title: "Production-Ready Project Work",
                                description: "Built real-world projects focused on scalable component systems, responsive design, accessibility, and clean architecture."
                            },
                            {
                                icon: Briefcase,
                                year: "Present",
                                title: "Career Growth & Opportunities",
                                description: "Actively pursuing internships and junior frontend engineering roles to contribute to real products and grow within collaborative teams."
                            }
                        ].map((item, index) => (
                            <div key={index} className="relative pl-8 md:pl-10 group">
                                {/* Timeline Dot / Icon wrapper */}
                                <div className="absolute -left-[20px] top-1 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--surface-border)] dark:border-white/10 bg-white dark:bg-[#0a0a0a] text-[var(--color-accent)] shadow-sm transition-all duration-300 group-hover:scale-110 dark:group-hover:border-white/20">
                                    <item.icon className="h-4 w-4 md:h-5 md:w-5" />
                                </div>
                                <div className="flex flex-col gap-2 rounded-2xl transition-colors duration-300 p-3 -ml-3 md:p-4 md:-ml-4 hover:bg-gray-50/50 dark:hover:bg-white/[0.02]">
                                    <span className="text-xs md:text-sm font-semibold tracking-wide text-[var(--color-text-secondary)]">
                                        {item.year}
                                    </span>
                                    <h3 className="text-lg md:text-xl font-bold text-[var(--color-primary)]">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm md:text-base leading-relaxed text-[var(--color-text-secondary)]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
