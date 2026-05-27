import Link from "next/link";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  action?: { label: string; href: string };
  className?: string;
  align?: "left" | "center";
  numbered?: string; // e.g. "01"
};

export function SectionHeader({
  title,
  subtitle,
  action,
  className,
  align = "left",
  numbered,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {numbered && (
        <p className="label-numbered mb-4">// {numbered}</p>
      )}
      <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between")}>
        <div>
          <h2 className="section-title-xl">{title}</h2>
          {subtitle && (
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {subtitle}
            </p>
          )}
        </div>
        {action && (
          <Link
            href={action.href}
            className="shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)] underline-offset-4 hover:underline"
          >
            {action.label} ↗
          </Link>
        )}
      </div>
    </div>
  );
}
