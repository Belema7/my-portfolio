import { getLatestPosts } from "@/data/helpers";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlogCard } from "@/components/cards/BlogCard";

export function LatestWriting() {
  const posts = getLatestPosts(3);

  return (
    <section className="section">
      <Container>
        <SectionHeader
          title="Latest Writing"
          subtitle="Notes on frontend engineering, learning, and building in public."
          action={{ label: "Read the blog", href: "/blog" }}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
