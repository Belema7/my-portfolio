import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { LearningBreadcrumbs } from "@/components/learning/LearningBreadcrumbs";
import { getAllLearningPaths, getLearningDay, getLearningPathBySlug } from "@/lib/learning/api";
import { getLearningDayUrl, getLearningPartUrl, getLearningPathUrl } from "@/lib/learning/urls";

type Props = { params: Promise<{ seriesSlug: string; daySlug: string }> };
function dayNumber(slug: string) { const match = /^day-(\d{2})$/.exec(slug); return match ? Number(match[1]) : undefined; }
export function generateStaticParams() { return getAllLearningPaths().flatMap((path) => path.days.map((day) => ({ seriesSlug: path.slug, daySlug: day.slug }))); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { seriesSlug, daySlug } = await params; const number = dayNumber(daySlug); const day = number ? getLearningDay(seriesSlug, number) : undefined;
  if (!day) return { title: "Learning Day Not Found" }; const url = getLearningDayUrl(seriesSlug, day.number); const title = `Day ${day.number}: ${day.title} | Backend from First Principles`;
  return { title, description: day.description, alternates: { canonical: url }, openGraph: { title, description: day.description, url } };
}
export default async function LearningDayPage({ params }: Props) {
  const { seriesSlug, daySlug } = await params; const number = dayNumber(daySlug); const path = getLearningPathBySlug(seriesSlug); const day = number ? getLearningDay(seriesSlug, number) : undefined; if (!path || !day) notFound();
  const index = path.days.findIndex((candidate) => candidate.number === day.number); const previous = path.days[index - 1]; const next = path.days[index + 1]; const first = day.parts[0];
  return <main className="section"><Container>
    <LearningBreadcrumbs items={[{ label: "Learning", href: "/learning" }, { label: path.title, href: getLearningPathUrl(path.slug) }, { label: `Day ${day.number}` }]} />
    <div className="max-w-3xl"><p className="label-numbered">{path.title}</p><p className="mt-4 font-mono text-xs uppercase tracking-[0.12em]">Day {String(day.number).padStart(2, "0")}</p><h1 className="mt-3 text-4xl font-bold md:text-5xl">{day.title}</h1><p className="mt-5 text-lg text-[var(--color-text-secondary)]">{day.description}</p>
      <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-text-secondary)]"><span>{day.parts.length} parts</span><span>{day.readingMinutes} min read</span><span>Published</span></div>
      {day.topics.length > 0 && <p className="mt-4 text-sm text-[var(--color-text-secondary)]">Topics: {day.topics.slice(0, 6).join(" · ")}</p>}
      {first && <Link href={getLearningPartUrl(seriesSlug, day.number, first.meta.partSlug)} className="mt-7 inline-block bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-[var(--color-secondary)]">Start Day {day.number} →</Link>}
    </div>
    <section className="mt-14 border-t border-[var(--color-border-strong)] pt-10"><h2 className="text-2xl font-bold">Lessons</h2><ol className="mt-6 divide-y divide-[var(--color-border-strong)] border-y border-[var(--color-border-strong)]">{day.parts.map((part) => <li key={part.meta.slug}><Link href={getLearningPartUrl(seriesSlug, day.number, part.meta.partSlug)} className="grid gap-2 px-2 py-5 hover:bg-[var(--color-primary)]/[0.03] sm:grid-cols-[4rem_1fr_auto] sm:items-center"><span className="font-mono text-xs">{String(part.meta.part).padStart(2, "0")}</span><span><strong className="block font-heading">{part.meta.title}</strong><span className="mt-1 block text-sm text-[var(--color-text-secondary)]">{part.meta.description}</span></span><span className="text-sm text-[var(--color-text-secondary)]">{part.meta.readingTime} →</span></Link></li>)}</ol></section>
    <nav aria-label="Learning day navigation" className="mt-10 grid gap-4 sm:grid-cols-2">{previous ? <Link className="border border-[var(--color-border-strong)] p-4" href={getLearningDayUrl(seriesSlug, previous.number)}>← Day {previous.number}: {previous.title}</Link> : <span />}{next && <Link className="border border-[var(--color-border-strong)] p-4 text-right" href={getLearningDayUrl(seriesSlug, next.number)}>Day {next.number}: {next.title} →</Link>}</nav>
  </Container></main>;
}
