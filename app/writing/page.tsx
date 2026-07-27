import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BlogView } from "@/sections/library/BlogView";
import { LibraryView } from "@/sections/library/LibraryView";
import { TabsNavigation } from "@/components/ui/TabsNavigation";
import { getAllWritingPosts, getFeaturedPost } from "@/lib/blog/api";
import { getAllLearningPaths } from "@/lib/learning/api";
import { getLearningPathUrl } from "@/lib/learning/urls";

export const metadata: Metadata = {
  title: "Writing & Insights | Belema Girma",
  description: "Technical articles, structured learning journeys, and books I have read.",
  alternates: { canonical: "/writing" },
};

type Props = {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function WritingPage(props: Props) {
  const searchParams = props.searchParams ? await props.searchParams : {};
  const tab = typeof searchParams.tab === "string" ? searchParams.tab : "writing";

  const tabs = [
    { id: "writing", label: "Writing", href: "/writing?tab=writing" },
    { id: "learning", label: "Learning", href: "/writing?tab=learning" },
    { id: "shelf", label: "Shelf", href: "/writing?tab=shelf" },
  ];

  return (
    <main className="section">
      <Container>
        <TabsNavigation tabs={tabs} activeTabId={tab} />

        <p className="label-numbered">Insights / 002</p>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          {tab === "writing" && "Writing"}
          {tab === "learning" && "Learning"}
          {tab === "shelf" && "Shelf"}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-[var(--color-text-secondary)] mb-12">
          {tab === "writing" && "Technical articles, build logs, and reflections on engineering, projects, and growth."}
          {tab === "learning" && "Structured learning journeys where I document concepts from first principles, connect theory to implementation, and record what I genuinely understand."}
          {tab === "shelf" && "Books I have finished and films, series, and documentaries I have watched."}
        </p>

      </Container>
      
      <div className="mt-8">
        {tab === "writing" && (
          <BlogView posts={getAllWritingPosts()} featured={getFeaturedPost()} />
        )}

        {tab === "learning" && (
          <Container>
            <div className="grid gap-6">
              {getAllLearningPaths().map((path) => {
                const partCount = path.days.reduce((total, day) => total + day.parts.length, 0);
                return (
                  <article key={path.slug} className="border border-[var(--color-border-strong)] p-6 md:p-10">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.1em]">Featured path</span>
                      <span className="border border-[var(--color-border-strong)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em]">{path.status}</span>
                    </div>
                    <h2 className="mt-6 text-2xl font-bold md:text-4xl">{path.title}</h2>
                    <p className="mt-4 max-w-3xl text-[var(--color-text-secondary)]">{path.description}</p>
                    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
                      <span>{path.days.length} learning days</span>
                      <span>{partCount} notes</span>
                      <span>Status: {path.status}</span>
                    </div>
                    <Link href={getLearningPathUrl(path.slug)} className="mt-8 inline-block bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-[var(--color-secondary)]">
                      Explore learning path →
                    </Link>
                  </article>
                );
              })}
            </div>
          </Container>
        )}

        {tab === "shelf" && (
          <LibraryView />
        )}
      </div>
    </main>
  );
}
