import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPostSlugs } from "@/lib/blog/get-all-posts";
import { getPostBySlug } from "@/lib/blog/get-post-by-slug";
import { getAdjacentPosts } from "@/lib/blog/get-adjacent-posts";
import { getPostsByDay } from "@/lib/blog/get-posts-by-category";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { MDXComponents } from "@/components/mdx/MDXComponents";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.meta.title} | Belema Girma`,
    description: post.meta.description,
    keywords: post.meta.keywords ?? post.meta.tags,
    authors: post.meta.author ? [{ name: post.meta.author }] : undefined,
    alternates: { canonical: `/blog/${post.meta.slug}` },
    openGraph: {
      type: "article",
      title: post.meta.title,
      description: post.meta.description,
      publishedTime: post.meta.date,
      modifiedTime: post.meta.updatedAt,
      images: post.meta.coverImage ? [post.meta.coverImage] : undefined,
    },
    twitter: {
      card: post.meta.coverImage ? "summary_large_image" : "summary",
      title: post.meta.title,
      description: post.meta.description,
      images: post.meta.coverImage ? [post.meta.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const adjacent = getAdjacentPosts(slug);
  const sameDay = post.meta.series && post.meta.day !== undefined
    ? getPostsByDay(post.meta.series, post.meta.day)
    : [];

  const date = new Date(post.meta.date).toLocaleDateString("en-US", {
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
          <Badge variant="accent">{post.meta.category}</Badge>
          <span>{date}</span>
          <span>·</span>
          <span>{post.meta.readingTime}</span>
        </div>
        <h1 className="text-3xl font-bold text-[var(--color-primary)] md:text-4xl">
          {post.meta.title}
        </h1>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
          {post.meta.description}
        </p>
        <div className="mt-10 border-t border-[var(--color-border)] pt-10 prose-custom">
          <MDXRemote
            source={post.content}
            components={MDXComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>
        {sameDay.length > 1 && (
          <nav aria-label="Other parts from this day" className="mt-12 border-t border-[var(--color-border)] pt-8">
            <h2 className="mb-3 font-semibold text-[var(--color-primary)]">Other parts from day {post.meta.day}</h2>
            <div className="flex flex-wrap gap-2">
              {sameDay.map(({ meta }) => (
                <Link key={meta.slug} href={`/blog/${meta.slug}`} className="rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-accent)]">
                  Part {meta.part}
                </Link>
              ))}
            </div>
          </nav>
        )}
        <nav aria-label="Series navigation" className="mt-8 grid gap-4 border-t border-[var(--color-border)] pt-8 sm:grid-cols-2">
          {adjacent.prev ? <Link href={`/blog/${adjacent.prev.meta.slug}`} className="text-sm text-[var(--color-accent)]">← {adjacent.prev.meta.title}</Link> : <span />}
          {adjacent.next && <Link href={`/blog/${adjacent.next.meta.slug}`} className="text-right text-sm text-[var(--color-accent)]">{adjacent.next.meta.title} →</Link>}
        </nav>
      </Container>
    </article>
  );
}
