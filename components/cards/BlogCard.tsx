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
    <article className="group rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/15 hover:shadow-lg dark:border-white/10 dark:bg-transparent dark:hover:border-white/20">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge variant="accent">{post.category}</Badge>
        <span className="text-xs text-[var(--color-text-secondary)]">{date}</span>
        <span className="text-xs text-[var(--color-text-secondary)]">·</span>
        <span className="text-xs text-[var(--color-text-secondary)]">{post.readingTime}</span>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)]">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="mb-4 line-clamp-3 text-sm text-[var(--color-text-secondary)]">
        {post.description}
      </p>
      <Link
        href={`/blog/${post.slug}`}
        className="text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)]"
      >
        Read article →
      </Link>
    </article>
  );
}
