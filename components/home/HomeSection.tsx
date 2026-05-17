import { cn } from "@/lib/utils";

type HomeSectionProps = {
  index: number;
  isLast?: boolean;
  showConnector?: boolean;
  markerAlign?: "start" | "hero" | "flush";
  children: React.ReactNode;
};

export function HomeSection({
  index,
  isLast = false,
  showConnector = true,
  markerAlign = "start",
  children,
}: HomeSectionProps) {
  const label = String(index).padStart(2, "0");

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute z-10 hidden md:block",
          "left-4 lg:left-6",
          markerAlign === "hero"
            ? "md:top-48"
            : markerAlign === "flush"
              ? "top-0"
              : "top-24 md:top-28"
        )}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-green-300/50 bg-green-50/90 font-mono text-xs font-semibold text-green-600/75 dark:border-green-400/20 dark:bg-green-950/30 dark:text-green-200/70">
          {label}
        </div>
      </div>

      {showConnector && !isLast && (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute bottom-0 hidden w-px bg-green-300/40 md:block dark:bg-green-400/15",
            "left-[calc(1rem+1.375rem)] lg:left-[calc(1.5rem+1.375rem)]",
            markerAlign === "hero"
              ? "md:top-[calc(12rem+2.75rem)]"
              : "top-[calc(6rem+2.75rem)] md:top-[calc(7rem+2.75rem)]"
          )}
        />
      )}

      {children}
    </div>
  );
}
