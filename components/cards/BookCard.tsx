import type { Book } from "@/types/content";
import { Badge } from "@/components/ui/Badge";

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-transparent">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-[var(--color-primary)]">{book.title}</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">{book.author}</p>
        </div>
        <Badge variant="accent">{book.status}</Badge>
      </div>
      <p className="mb-3 text-sm text-[var(--color-text-secondary)]">{book.note}</p>
      <p className="text-sm italic text-[var(--color-text-secondary)]">
        &ldquo;{book.favoriteIdea}&rdquo;
      </p>
    </article>
  );
}
