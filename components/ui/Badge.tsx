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
        // Sharp corners, monospaced, small uppercase
        "inline-flex items-center px-2 py-0.5 font-mono text-[10px] font-medium tracking-[0.06em] uppercase",
        variant === "default" &&
          "border border-[var(--color-border-strong)] bg-[var(--color-primary)]/5 text-[var(--color-text-secondary)]",
        variant === "accent" &&
          "border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/8 text-[var(--color-text-primary)]",
        variant === "outline" &&
          "border border-[var(--color-border-strong)] bg-transparent text-[var(--color-text-secondary)]",
        className
      )}
    >
      {children}
    </span>
  );
}
