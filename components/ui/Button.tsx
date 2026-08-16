import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
> {
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-black font-semibold shadow-glow-btn hover:bg-accent/90 hover:shadow-glow transition-all duration-300",
  secondary:
    "bg-surface text-text-primary border border-white/10 hover:border-white/20 hover:bg-surface/80 transition-all duration-300",
  outline:
    "bg-transparent text-text-primary border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300",
  ghost:
    "bg-transparent text-text-muted hover:text-text-primary transition-colors duration-300",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-btn",
  md: "px-6 py-2.5 text-sm rounded-btn",
  lg: "px-8 py-3 text-base rounded-btn",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium whitespace-nowrap",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
