import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LibraryTabs } from "@/components/library/LibraryTabs";
import { BlogView } from "@/sections/library/BlogView";
import { LibraryView } from "@/sections/library/LibraryView";

export const metadata: Metadata = {
  title: "Library | Belema Girma",
  description:
    "A collection of my writing, learning notes, books, quotes, and media reflections.",
};

type SearchParams = Promise<{ view?: string }>;

interface LibraryPageProps {
  searchParams: SearchParams;
}

export default async function LibraryPage({ searchParams }: LibraryPageProps) {
  const { view = "blog" } = await searchParams;
  const activeTab = view === "library" ? "library" : "blog";

  return (
    <div className="section">
      <Container>
        <SectionHeader
          title="Library"
          subtitle="A collection of my writing, learning notes, books, quotes, and media reflections."
          align="center"
        />
        <LibraryTabs activeTab={activeTab} />
      </Container>

      <div className="mt-16">
        {activeTab === "blog" ? (
          <BlogView />
        ) : (
          <LibraryView />
        )}
      </div>
    </div>
  );
}
