import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { LearningDayCard } from "@/components/learning/LearningDayCard";
import { getAllLearningPaths, getLearningPathBySlug } from "@/lib/learning/api";
import { getLearningDayUrl } from "@/lib/learning/urls";

type Props = { params: Promise<{ seriesSlug: string }> };
export function generateStaticParams() { return getAllLearningPaths().map(({ slug: seriesSlug }) => ({ seriesSlug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { seriesSlug } = await params; const path = getLearningPathBySlug(seriesSlug);
  if (!path) return { title: "Learning Path Not Found" };
  const url = `/learning/${seriesSlug}`;
  return { title: `${path.title} | Belema Girma`, description: path.description, alternates: { canonical: url }, openGraph: { title: path.title, description: path.description, url } };
}
export default async function LearningPathPage({ params }: Props) {
  const { seriesSlug } = await params; const path = getLearningPathBySlug(seriesSlug); if (!path) notFound();
  const partCount = path.days.reduce((total, day) => total + day.parts.length, 0); const latest = path.days.at(-1);
  return <main className="section"><Container>
    <Link href="/learning" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">← All learning paths</Link>
    <div className="mt-10 border-b border-[var(--color-border-strong)] pb-10"><div className="flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.1em]"><span>{path.status}</span><span>·</span><span>Started {new Date(path.startDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span></div>
      <h1 className="mt-5 text-4xl font-bold md:text-6xl">{path.title}</h1><p className="mt-5 max-w-3xl text-lg text-[var(--color-text-secondary)]">{path.description}</p>
      <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-text-secondary)]"><span>{path.days.length} days</span><span>{partCount} parts</span><span>{path.topics.slice(0, 4).join(" · ")}</span></div>
      {latest && <Link className="mt-7 inline-block bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-[var(--color-secondary)]" href={getLearningDayUrl(path.slug, latest.number)}>Continue learning →</Link>}
    </div>
    <section className="mt-12" aria-labelledby="roadmap"><h2 id="roadmap" className="text-2xl font-bold">Learning roadmap</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{path.days.map((day) => <LearningDayCard key={day.number} day={day} />)}</div></section>
  </Container></main>;
}
