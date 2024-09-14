import { cn } from "@Konect U -resume/utils";

export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("animate-pulse rounded-md bg-secondary", className)} {...props} />
);
