import Link from "next/link";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  action?: { label: string; href: string };
  className?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  title,
  subtitle,
  action,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        align === "center" && "items-center text-center sm:items-center",
        className
      )}
    >
      <div>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-[var(--color-primary)] md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-[var(--color-text-secondary)]">
            {subtitle}
          </p>
        )}
      </div>
      {action && (
        <Link
          href={action.href}
          className="shrink-0 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
        >
          {action.label} →
        </Link>
      )}
    </div>
  );
}
