import Link from "next/link";
import { cn } from "@/lib/utils";

type AppButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

export function AppButton({
  href,
  children,
  variant = "primary",
  className,
  external,
  onClick,
}: AppButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-5 py-3 font-mono text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/50";

  const styles = cn(
    base,
    variant === "primary" &&
      "bg-[var(--color-primary)] text-[var(--color-secondary)] hover:opacity-80",
    variant === "outline" &&
      "border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)]",
    variant === "ghost" &&
      "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] underline-offset-4 hover:underline",
    className
  );

  if (!href) {
    return (
      <button type="button" className={styles} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={styles}
    >
      {children}
    </Link>
  );
}
