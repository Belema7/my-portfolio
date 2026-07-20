import Link from "next/link";
import type { LearningDay } from "@/lib/learning/types";
import { cn } from "@/lib/utils";
import { getLearningPartUrl, LEARNING_SERIES_SLUG } from "@/lib/learning/urls";

function PartLinks({ day, activePart }: { day: LearningDay; activePart: number }) {
  return (
    <ol className="space-y-1">
      {day.parts.map((part) => (
        <li key={part.meta.slug}>
          <Link
            href={getLearningPartUrl(LEARNING_SERIES_SLUG, day.number, part.meta.partSlug)}
            aria-current={part.meta.part === activePart ? "page" : undefined}
            className={cn("block border-l-2 px-3 py-2 text-sm leading-snug", part.meta.part === activePart ? "border-[var(--color-primary)] bg-[var(--color-primary)]/[0.05] font-medium text-[var(--color-primary)]" : "border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]")}
          >
            <span className="mr-2 font-mono text-[10px]">{String(part.meta.part).padStart(2, "0")}</span>
            {part.meta.title}
          </Link>
        </li>
      ))}
    </ol>
  );
}

export function LessonNavigation({ day, activePart }: { day: LearningDay; activePart: number }) {
  return (
    <>
      <details className="mb-8 border border-[var(--color-border-strong)] p-4 lg:hidden">
        <summary className="cursor-pointer font-heading font-semibold">Lessons in Day {day.number}</summary>
        <div className="mt-4"><PartLinks day={day} activePart={activePart} /></div>
      </details>
      <aside className="hidden lg:block" aria-label={`Day ${day.number} lessons`}>
        <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto border-l border-[var(--color-border-strong)] pl-4">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.1em]">Day {day.number} lessons</p>
          <PartLinks day={day} activePart={activePart} />
        </div>
      </aside>
    </>
  );
}
