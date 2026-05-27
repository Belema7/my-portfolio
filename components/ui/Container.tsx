import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentPropsWithoutRef<"div">;

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-6 md:px-12", className)}
      {...props}
    >
      {children}
    </div>
  );
}
