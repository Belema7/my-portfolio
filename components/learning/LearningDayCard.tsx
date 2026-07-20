import Link from "next/link";
import type { LearningDay } from "@/lib/learning/types";
import { getLearningDayUrl, LEARNING_SERIES_SLUG } from "@/lib/learning/urls";

export function LearningDayCard({ day }: { day: LearningDay }) {
  return (
    <article className="group flex h-full flex-col border border-[var(--color-border-strong)] p-6 transition-colors hover:bg-[var(--color-primary)]/[0.03]">
      <p className="label-numbered">Day {String(day.number).padStart(2, "0")}</p>
      <h3 className="mt-4 font-heading text-xl font-bold">{day.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">{day.description}</p>
      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
        {day.parts.length} {day.parts.length === 1 ? "part" : "parts"} · {day.readingMinutes} min read
      </p>
      <Link href={getLearningDayUrl(LEARNING_SERIES_SLUG, day.number)} className="mt-4 text-sm font-medium text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
        Explore Day {day.number} →
      </Link>
    </article>
  );
}
