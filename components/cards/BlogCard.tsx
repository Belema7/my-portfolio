import Link from "next/link";
import type { Post } from "@/types/content";
import { Badge } from "@/components/ui/Badge";

export function BlogCard({ post }: { post: Post }) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="group border border-[var(--color-border)] p-6 transition-all duration-300 hover:border-[var(--color-border-strong)] hover:shadow-md">
      {/* Meta row */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Badge variant="accent">{post.category}</Badge>
        <span className="label-numbered">{date}</span>
        <span className="label-numbered">·</span>
        <span className="label-numbered">{post.readingTime}</span>
      </div>

      {/* Title */}
      <h3 className="mb-3 font-heading text-base font-bold leading-snug text-[var(--color-primary)] transition-opacity group-hover:opacity-70">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>

      {/* Excerpt */}
      <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {post.description}
      </p>

      {/* CTA */}
      <Link
        href={`/blog/${post.slug}`}
        className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
      >
        Read Article ↗
      </Link>
    </article>
  );
}
