import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getAllLearningPaths } from "@/lib/learning/api";
import { getLearningPathUrl } from "@/lib/learning/urls";

export const metadata: Metadata = {
  title: "Learning | Belema Girma",
  description: "Structured learning journeys where I connect backend theory to implementation and document what I genuinely understand.",
  alternates: { canonical: "/learning" },
  openGraph: { title: "Learning | Belema Girma", description: "Structured learning journeys from first principles.", url: "/learning" },
};

export default function LearningPage() {
  const paths = getAllLearningPaths();
  return (
    <main className="section">
      <Container>
        <p className="label-numbered">Learning / 001</p>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">Learning</h1>
        <p className="mt-5 max-w-2xl text-lg text-[var(--color-text-secondary)]">Structured learning journeys where I document concepts from first principles, connect theory to implementation, and record what I genuinely understand.</p>
        <div className="mt-12 grid gap-6">
          {paths.map((path) => {
            const partCount = path.days.reduce((total, day) => total + day.parts.length, 0);
            return (
              <article key={path.slug} className="border border-[var(--color-border-strong)] p-6 md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em]">Featured path</span>
                  <span className="border border-[var(--color-border-strong)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em]">{path.status}</span>
                </div>
                <h2 className="mt-6 text-2xl font-bold md:text-4xl">{path.title}</h2>
                <p className="mt-4 max-w-3xl text-[var(--color-text-secondary)]">{path.description}</p>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
                  <span>{path.days.length} learning days</span><span>{partCount} notes</span><span>Status: {path.status}</span>
                </div>
                <Link href={getLearningPathUrl(path.slug)} className="mt-8 inline-block bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-[var(--color-secondary)]">Explore learning path →</Link>
              </article>
            );
          })}
        </div>
      </Container>
    </main>
  );
}
