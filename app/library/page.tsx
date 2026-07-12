import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { LibraryTabs } from "@/components/library/LibraryTabs";
import { BlogView } from "@/sections/library/BlogView";
import { LibraryView } from "@/sections/library/LibraryView";
import { getAllPosts, getFeaturedPost } from "@/lib/blog/api";

export const metadata: Metadata = {
  title: "Library | Belema Girma",
  description:
    "A collection of my writing, finished books, films, series, and documentaries.",
};

type SearchParams = Promise<{ view?: string }>;

interface LibraryPageProps {
  searchParams: SearchParams;
}

export default async function LibraryPage({ searchParams }: LibraryPageProps) {
  const { view = "blog" } = await searchParams;
  const activeTab = view === "library" ? "library" : "blog";

  const posts = getAllPosts();
  const featured = getFeaturedPost();

  return (
    <div className="section">
      <Container>

        <LibraryTabs activeTab={activeTab} />
      </Container>

      <div className="mt-16">
        {activeTab === "blog" ? (
          <BlogView posts={posts} featured={featured} />
        ) : (
          <LibraryView />
        )}
      </div>
    </div>
  );
}
