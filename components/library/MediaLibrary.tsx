"use client";

import { useState } from "react";
import { MediaCard } from "@/components/cards/MediaCard";
import type { Media, MediaCategory } from "@/lib/library/types";
import { cn } from "@/lib/utils";

const filters: { category: MediaCategory; label: string }[] = [
  { category: "Movie", label: "Movies" },
  { category: "Series", label: "Series" },
  { category: "Documentary", label: "Documentary Films" },
];

export function MediaLibrary({ entries }: { entries: Media[] }) {
  const [activeCategory, setActiveCategory] = useState<MediaCategory>("Movie");
  const filteredEntries = entries.filter(({ category }) => category === activeCategory);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" aria-label="Filter watched media">
        {filters.map(({ category, label }) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]",
              activeCategory === category
                ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-secondary)]/30 hover:text-[var(--color-primary)]"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEntries.map((entry) => (
          <MediaCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </div>
  );
}
