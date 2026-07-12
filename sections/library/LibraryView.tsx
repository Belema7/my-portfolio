import { getLibraryContent } from "@/lib/library/get-library-content";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BookCard } from "@/components/cards/BookCard";
import { MediaLibrary } from "@/components/library/MediaLibrary";
import { HomeSection } from "@/components/home/HomeSection";

export function LibraryView() {
  const { booksFinished, media } = getLibraryContent();
  return (
    <div className="space-y-20">
      <HomeSection index={1} showConnector={false} markerAlign="flush">
        <Container id="finished">
          <SectionHeader title="Books I've Finished" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {booksFinished.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </Container>
      </HomeSection>

      <HomeSection index={2} showConnector={false} markerAlign="flush" isLast>
        <Container id="watched">
          <SectionHeader title="Films & Series I've Watched" />
          <MediaLibrary entries={media} />
        </Container>
      </HomeSection>
    </div>
  );
}
