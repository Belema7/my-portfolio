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
import { HomeSection } from "@/components/home/HomeSection";

export function LibraryView() {
  return (
    <div className="space-y-20">
      <HomeSection index={1} showConnector={false} markerAlign="flush">
        <Container id="reading">
          <SectionHeader title="Books I'm Reading" />
          <div className="grid gap-6 md:grid-cols-2">
            {booksReading.map((book) => (
              <BookCard key={book.title} book={book} />
            ))}
          </div>
        </Container>
      </HomeSection>

      <HomeSection index={2} showConnector={false} markerAlign="flush">
        <Container id="finished">
          <SectionHeader title="Books I Finished" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {booksFinished.map((book) => (
              <BookCard key={book.title} book={book} />
            ))}
          </div>
        </Container>
      </HomeSection>

      <HomeSection index={3} showConnector={false} markerAlign="flush">
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
      </HomeSection>

      <HomeSection index={4} showConnector={false} markerAlign="flush" isLast>
        <Container id="movies">
          <SectionHeader title="Movie Notes" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {movies.map((movie) => (
              <MovieCard key={movie.title} movie={movie} />
            ))}
          </div>
        </Container>
      </HomeSection>
    </div>
  );
}
