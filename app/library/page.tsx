import type { Metadata } from "next";
import {
  booksReading,
  booksFinished,
  quotes,
  movies,
} from "@/data/library";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BookCard } from "@/components/cards/BookCard";
import { MovieCard } from "@/components/cards/MovieCard";

export const metadata: Metadata = {
  title: "Library | Belema Girma",
  description: "Books, quotes, and movie notes that shape how I think about craft and growth.",
};

export default function LibraryPage() {
  return (
    <div className="section space-y-20">
      <Container>
        <SectionHeader
          title="Library"
          subtitle="Books, ideas, and films that connect to creativity, discipline, and building."
          align="center"
        />
      </Container>

      <Container id="reading">
        <SectionHeader title="Books I'm Reading" />
        <div className="grid gap-6 md:grid-cols-2">
          {booksReading.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
      </Container>

      <Container id="finished">
        <SectionHeader title="Books I Finished" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {booksFinished.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
      </Container>

      <Container id="quotes">
        <SectionHeader title="Favorite Quotes" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q) => (
            <blockquote
              key={q.quote}
              className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-transparent"
            >
              <p className="font-medium text-[var(--color-primary)]">
                &ldquo;{q.quote}&rdquo;
              </p>
              <footer className="mt-3 text-sm text-[var(--color-text-secondary)]">
                — {q.source}
              </footer>
              <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                {q.note}
              </p>
            </blockquote>
          ))}
        </div>
      </Container>

      <Container id="movies">
        <SectionHeader title="Movie Notes" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </Container>
    </div>
  );
}
