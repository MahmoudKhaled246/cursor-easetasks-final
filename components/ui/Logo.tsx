import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoVariant = "full" | "icon" | "mark";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  onClick?: () => void;
}

const logoConfig: Record<
  LogoVariant,
  { src: string; width: number; height: number; className: string }
> = {
  full: {
    src: "/brand/easetasks-logo.png",
    width: 48,
    height: 48,
    className: "h-9 w-9 rounded-xl object-cover ring-1 ring-white/10 md:h-11 md:w-11",
  },
  icon: {
    src: "/brand/easetasks-logo.png",
    width: 48,
    height: 48,
    className: "h-9 w-9 rounded-xl object-cover ring-1 ring-white/10 md:h-10 md:w-10",
  },
  mark: {
    src: "/brand/easetasks-logo.png",
    width: 48,
    height: 48,
    className: "h-8 w-8 rounded-lg object-cover ring-1 ring-white/10 md:h-9 md:w-9",
  },
};

export function Logo({ variant = "full", className, onClick }: LogoProps) {
  const config = logoConfig[variant];

  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center gap-3", className)}
      onClick={onClick}
      aria-label="Ease Tasks — Home"
    >
      <Image
        src={config.src}
        alt="Ease Tasks"
        width={config.width}
        height={config.height}
        className={config.className}
        priority={variant === "full"}
      />
      {variant === "full" && (
        <span className="text-lg font-semibold leading-none tracking-normal text-text-primary md:text-xl">
          Ease Tasks
        </span>
      )}
    </Link>
  );
}
