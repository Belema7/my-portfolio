import type { Movie } from "@/types/content";

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <article className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-transparent">
      <h3 className="mb-2 font-semibold text-[var(--color-primary)]">{movie.title}</h3>
      <p className="mb-3 text-sm text-[var(--color-text-secondary)]">{movie.note}</p>
      <p className="text-sm">
        <span className="font-medium text-[var(--color-accent)]">Lesson: </span>
        <span className="text-[var(--color-text-secondary)]">{movie.lesson}</span>
      </p>
    </article>
  );
}
