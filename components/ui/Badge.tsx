import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium",
        variant === "default" &&
          "bg-black/5 text-[var(--color-text-secondary)] border border-[var(--surface-border)] dark:bg-white/10 dark:text-white/80",
        variant === "accent" &&
          "bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20",
        variant === "outline" &&
          "border border-[var(--surface-border)] text-[var(--color-text-secondary)]",
        className
      )}
    >
      {children}
    </span>
  );
}
