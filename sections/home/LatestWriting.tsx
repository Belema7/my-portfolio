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
        <div className="grid gap-px border border-[var(--color-border)] bg-[var(--color-border)] md:grid-cols-3">
          {posts.map((post) => (
            <div key={post.slug} className="bg-[var(--color-bg)]">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
