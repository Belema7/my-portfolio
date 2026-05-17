import { cn } from "@/lib/utils";

/** Aligns with Container (max-w-6xl + md:px-8); ~50px gap between marker and text. */
const MARKER_LEFT =
  "left-[max(1.5rem,calc((100%-min(100%,72rem))/2+2rem-2.75rem-50px))]";
const LINE_LEFT =
  "left-[max(calc(1.5rem+1.375rem),calc((100%-min(100%,72rem))/2+2rem-1.375rem-50px))]";

type HomeSectionProps = {
  index: number;
  isLast?: boolean;
  showConnector?: boolean;
  markerAlign?: "start" | "flush";
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
          MARKER_LEFT,
          markerAlign === "flush" ? "top-0" : "top-24 md:top-28"
        )}
      >
        <div className="section-marker">{label}</div>
      </div>

      {showConnector && !isLast && (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute bottom-0 hidden w-px bg-orange-200/60 md:block dark:bg-orange-500/20",
            LINE_LEFT,
            "top-[calc(6rem+2.75rem)] md:top-[calc(7rem+2.75rem)]"
          )}
        />
      )}

      {children}
    </div>
  );
}
