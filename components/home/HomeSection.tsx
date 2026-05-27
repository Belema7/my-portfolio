import { cn } from "@/lib/utils";

type HomeSectionProps = {
  index: number;
  isLast?: boolean;
  showConnector?: boolean;
  markerAlign?: "start" | "flush";
  children: React.ReactNode;
};

/** Simplified wrapper — just renders children. The old marker/connector
 *  decorations are removed since the new design uses SectionHeader numbered
 *  labels directly inside each section. */
export function HomeSection({
  children,
}: HomeSectionProps) {
  return <div className="relative">{children}</div>;
}
