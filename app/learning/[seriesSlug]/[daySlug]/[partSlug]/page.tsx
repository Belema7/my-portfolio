import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { MDXComponents } from "@/components/mdx/MDXComponents";
import { LearningBreadcrumbs } from "@/components/learning/LearningBreadcrumbs";
import { LessonNavigation } from "@/components/learning/LessonNavigation";
import { getAdjacentLearningPart, getAllLearningPaths, getLearningDay, getLearningPart, getLearningPathBySlug } from "@/lib/learning/api";
import { getLearningDayUrl, getLearningPartUrl, getLearningPathUrl } from "@/lib/learning/urls";

type Props = { params: Promise<{ seriesSlug: string; daySlug: string; partSlug: string }> };
function dayNumber(slug: string) { const match = /^day-(\d{2})$/.exec(slug); return match ? Number(match[1]) : undefined; }
export function generateStaticParams() { return getAllLearningPaths().flatMap((path) => path.days.flatMap((day) => day.parts.map((part) => ({ seriesSlug: path.slug, daySlug: day.slug, partSlug: part.meta.partSlug })))); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { seriesSlug, daySlug, partSlug } = await params; const number = dayNumber(daySlug); const part = number ? getLearningPart(seriesSlug, number, partSlug) : undefined; if (!part) return { title: "Lesson Not Found" };
  const url = getLearningPartUrl(seriesSlug, number!, partSlug); return { title: `${part.meta.title} | Backend from First Principles`, description: part.meta.description, alternates: { canonical: url }, openGraph: { type: "article", title: part.meta.title, description: part.meta.description, url, publishedTime: part.meta.date, modifiedTime: part.meta.updatedAt } };
}
export default async function LearningPartPage({ params }: Props) {
  const { seriesSlug, daySlug, partSlug } = await params; const number = dayNumber(daySlug); const path = getLearningPathBySlug(seriesSlug); const day = number ? getLearningDay(seriesSlug, number) : undefined; const part = number ? getLearningPart(seriesSlug, number, partSlug) : undefined; if (!path || !day || !part) notFound(); const adjacent = getAdjacentLearningPart(seriesSlug, day.number, part.meta.part);
  const date = new Date(part.meta.learnedAt ?? part.meta.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  return <main className="section"><Container>
    <LearningBreadcrumbs items={[{ label: "Learning", href: "/learning" }, { label: path.title, href: getLearningPathUrl(path.slug) }, { label: `Day ${day.number}`, href: getLearningDayUrl(seriesSlug, day.number) }, { label: `Part ${part.meta.part}` }]} />
    <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-12"><article className="min-w-0"><header className="border-b border-[var(--color-border-strong)] pb-9"><p className="label-numbered">{path.title}</p><p className="mt-3 text-sm text-[var(--color-text-secondary)]">Day {day.number} · {day.title}</p><p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em]">Part {String(part.meta.part).padStart(2, "0")} of {String(day.parts.length).padStart(2, "0")}</p><h1 className="mt-5 text-3xl font-bold md:text-5xl">{part.meta.title}</h1><p className="mt-4 text-lg text-[var(--color-text-secondary)]">{part.meta.description}</p><div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-secondary)]"><span>Learned {date}</span><span>·</span><span>{part.meta.readingTime}</span>{part.meta.tags?.slice(0, 3).map((tag) => <Badge key={tag}>{tag}</Badge>)}</div></header>
      <div className="prose-custom pt-10"><MDXRemote source={part.content} components={MDXComponents} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} /></div>
      <nav aria-label="Lesson navigation" className="mt-12 grid gap-4 border-t border-[var(--color-border-strong)] pt-8 sm:grid-cols-3">{adjacent.previous ? <Link className="border border-[var(--color-border-strong)] p-4 text-sm" href={getLearningPartUrl(seriesSlug, day.number, adjacent.previous.meta.partSlug)}>← Previous part</Link> : <span />}<Link className="border border-[var(--color-border-strong)] p-4 text-center text-sm" href={getLearningDayUrl(seriesSlug, day.number)}>Day overview</Link>{adjacent.next && <Link className="border border-[var(--color-border-strong)] p-4 text-right text-sm" href={getLearningPartUrl(seriesSlug, day.number, adjacent.next.meta.partSlug)}>Next part →</Link>}</nav>
    </article><LessonNavigation day={day} activePart={part.meta.part} /></div>
  </Container></main>;
}
