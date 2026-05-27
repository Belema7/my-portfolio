import { getLatestPosts } from "@/data/helpers";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlogCard } from "@/components/cards/BlogCard";

export function LatestWriting() {
  const posts = getLatestPosts(3);

  return (
    <section className="section border-t border-[var(--color-border)]">
      <Container>
        <SectionHeader
          title="Latest Writing"
          subtitle="Notes on frontend engineering, learning, and building in public."
          action={{ label: "Read the blog", href: "/library" }}
          numbered="03"
        />
        <div className="grid gap-0 border border-[var(--color-border)] md:grid-cols-3">
          {posts.map((post, i) => (
            <div
              key={post.slug}
              className={i < posts.length - 1 ? "border-b md:border-b-0 md:border-r border-[var(--color-border)]" : ""}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
