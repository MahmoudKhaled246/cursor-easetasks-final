import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
