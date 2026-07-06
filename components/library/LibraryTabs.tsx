import Link from "next/link";
import { cn } from "@/lib/utils";

interface LibraryTabsProps {
  activeTab: "blog" | "library";
}

export function LibraryTabs({ activeTab }: LibraryTabsProps) {
  return (
    <div className="mt-8 flex justify-start">
      <div className="inline-flex rounded-full border border-[var(--color-border)] p-1.5 bg-white dark:border-white/10 dark:bg-black/40 backdrop-blur-sm shadow-sm">
        <Link
          href="/library?view=blog"
          scroll={false}
          className={cn(
            "rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 cursor-pointer",
            activeTab === "blog"
              ? "bg-[var(--color-accent)] text-[var(--color-secondary)] shadow-sm"
              : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
          )}
        >
          Blog
        </Link>
        <Link
          href="/library?view=library"
          scroll={false}
          className={cn(
            "rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 cursor-pointer",
            activeTab === "library"
              ? "bg-[var(--color-accent)] text-[var(--color-secondary)] shadow-sm"
              : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]"
          )}
        >
          Library
        </Link>
      </div>
    </div>
  );
}
