import type { Media } from "@/lib/library/types";

export function MediaCard({ entry }: { entry: Media }) {
  return (
    <article className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-transparent">
      <h3 className="font-semibold text-[var(--color-primary)]">{entry.title}</h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-text-secondary)]">
        {entry.category}
      </p>
    </article>
  );
}
