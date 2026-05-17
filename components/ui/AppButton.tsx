import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AppButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
};

export function AppButton({
  href,
  children,
  variant = "primary",
  className,
  external,
}: AppButtonProps) {
  const styles = cn(
    "rounded-lg px-6 py-6 text-base font-medium transition-colors",
    variant === "primary" &&
      "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]",
    variant === "outline" &&
      "border border-[var(--surface-border)] bg-transparent text-[var(--color-text-primary)] hover:bg-black/5 dark:hover:bg-white/10",
    variant === "ghost" && "text-[var(--color-accent)] hover:underline",
    className
  );

  if (!href) {
    return <Button className={styles}>{children}</Button>;
  }

  return (
    <Button asChild className={styles}>
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    </Button>
  );
}
