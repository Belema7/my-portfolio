"use client";

import { useState } from "react";
import Link from "next/link";
import { posts } from "@/data/posts";
import { getFeaturedPost } from "@/data/helpers";
import type { PostCategory } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { BlogCard } from "@/components/cards/BlogCard";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const categories: (PostCategory | "All")[] = [
  "All",
  "Technical Notes",
  "Learning Journey",
  "Building in Public",
  "Personal Thoughts",
];

export function BlogView() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const featured = getFeaturedPost();

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const rest = sorted.filter((p) => p.slug !== featured?.slug);

  return (
    <Container>
      {featured && active === "All" && (
        <div className="mb-12 rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-sm dark:border-white/10 dark:bg-transparent">
          <Badge variant="accent" className="mb-3">
            Featured
          </Badge>
          <h2 className="text-2xl font-bold text-[var(--color-primary)] md:text-3xl">
            <Link
              href={`/blog/${featured.slug}`}
              className="hover:text-[var(--color-accent)]"
            >
              {featured.title}
            </Link>
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--color-text-secondary)]">
            {featured.description}
          </p>
          <Link
            href={`/blog/${featured.slug}`}
            className="mt-4 inline-block text-sm font-medium text-[var(--color-accent)]"
          >
            Read featured article →
          </Link>
        </div>
      )}

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-lg border px-4 py-2 text-sm font-medium transition-colors cursor-pointer",
              active === cat
                ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-text-secondary)]/30"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {(active === "All" ? rest : sorted).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
}
