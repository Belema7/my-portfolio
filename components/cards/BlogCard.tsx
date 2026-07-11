import Link from "next/link";
import type { Post } from "@/lib/blog/types";
import { Badge } from "@/components/ui/Badge";

export function BlogCard({ post }: { post: Post }) {
  const { meta } = post;
  const date = new Date(meta.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="group h-full p-6 transition-all duration-300 hover:bg-[var(--color-primary)]/[0.03]">
      {/* Meta row */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Badge variant="accent">{meta.category}</Badge>
        <span className="label-numbered">{date}</span>
        <span className="label-numbered">·</span>
        <span className="label-numbered">{meta.readingTime}</span>
      </div>

      {/* Title */}
      <h3 className="mb-3 font-heading text-base font-bold leading-snug text-[var(--color-primary)] transition-opacity group-hover:opacity-70">
        <Link href={`/blog/${meta.slug}`}>{meta.title}</Link>
      </h3>

      {/* Excerpt */}
      <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {meta.description}
      </p>

      {/* CTA */}
      <Link
        href={`/blog/${meta.slug}`}
        className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
      >
        Read Article ↗
      </Link>
    </article>
  );
}
