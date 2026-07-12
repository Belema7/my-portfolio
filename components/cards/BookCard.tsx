import type { Book } from "@/lib/library/types";

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-transparent">
      <h3 className="font-semibold text-[var(--color-primary)]">{book.title}</h3>
      <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{book.author}</p>
    </article>
  );
}
