import { LucideIcon } from 'lucide-react';

interface TimelineCardProps {
  icon: LucideIcon;
  year: string;
  title: string;
  description: string;
}

export function TimelineCard({ icon: Icon, year, title, description }: TimelineCardProps) {
  return (
    <div className="group rounded-2xl border border-[var(--color-border)] bg-white dark:bg-transparent p-6 shadow-sm transition hover:-translate-y-1 hover:border-black/15 hover:shadow-lg dark:border-white/10 dark:hover:border-white/20">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--surface-border)] bg-black/5 text-[var(--color-accent)] shadow-sm dark:bg-black/30">
        {Icon ? <Icon className="h-6 w-6" /> : null}
      </div>

      <p className="mt-4 text-sm font-semibold tracking-wide text-[var(--color-text-secondary)]">
        {year}
      </p>

      <h3 className="mt-2 text-lg font-semibold text-[var(--color-primary)]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {description}
      </p>
    </div>
  )
}
