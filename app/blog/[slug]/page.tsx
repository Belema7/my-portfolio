import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/data/helpers";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PostContent } from "@/components/PostContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Belema Girma`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="section">
      <Container className="max-w-3xl">
        <Link
          href="/library?view=blog"
          className="mb-8 inline-block text-sm font-medium text-[var(--color-accent)]"
        >
          ← Back to Blog
        </Link>
        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-secondary)]">
          <Badge variant="accent">{post.category}</Badge>
          <span>{date}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
          {post.description}
        </p>
        <div className="mt-10 border-t border-[var(--color-border)] pt-10">
          <PostContent content={post.content} />
        </div>
      </Container>
    </article>
  );
}
