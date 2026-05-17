import {
  GraduationCap,
  Code2,
  LayoutGrid,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import type { TimelineItem } from "@/types/content";

const iconMap: Record<TimelineItem["icon"], LucideIcon> = {
  GraduationCap,
  Code2,
  LayoutGrid,
  Briefcase,
};

export function TimelineCard({ item }: { item: TimelineItem }) {
  const Icon = iconMap[item.icon];

  return (
    <div className="relative pl-8 md:pl-10">
      <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-accent)] md:left-0">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <p className="text-sm font-semibold tracking-wide text-[var(--color-accent)]">
        {item.year}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-[var(--color-primary)]">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {item.description}
      </p>
    </div>
  );
}
