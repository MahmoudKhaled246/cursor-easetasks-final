import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export function SectionLabel({ children, className, centered }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "section-label mb-4",
        centered && "text-center",
        className
      )}
    >
      {children}
    </p>
  );
}
