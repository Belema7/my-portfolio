import Link from "next/link";
import { cn } from "@/lib/utils";

type Tab = {
  id: string;
  label: string;
  href: string;
};

export function TabsNavigation({ tabs, activeTabId }: { tabs: Tab[], activeTabId: string }) {
  return (
    <div className="mb-12 flex flex-wrap gap-2 border-b border-[var(--color-border)] pb-4">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <Link
            key={tab.id}
            href={tab.href}
            className={cn(
              "rounded-md px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-wider transition-colors",
              isActive 
                ? "bg-[var(--color-primary)] text-[var(--color-secondary)]" 
                : "text-[var(--color-text-secondary)] hover:bg-[var(--color-border)] hover:text-[var(--color-primary)]"
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
