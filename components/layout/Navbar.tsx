"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <nav className="container-main flex h-16 items-center justify-between md:h-20">
        <Logo onClick={() => setMobileOpen(false)} />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  pathname === link.href
                    ? "text-accent"
                    : "highlight" in link && link.highlight
                      ? "text-accent/80 hover:text-accent"
                      : "text-text-muted hover:text-text-primary"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/contact" variant="ghost" size="sm">
            Get a Free Quote
          </Button>
          <Button href="/contact" variant="primary" size="sm">
            Start Your Project
          </Button>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-btn p-2 text-text-primary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="container-main flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-btn px-4 py-3 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-accent/10 text-accent"
                      : "highlight" in link && link.highlight
                        ? "text-accent/80 hover:bg-accent/5"
                        : "text-text-muted hover:bg-white/5 hover:text-text-primary"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-4 flex flex-col gap-2 px-4">
              <Button href="/contact" variant="outline" size="md" className="w-full">
                Get a Free Quote
              </Button>
              <Button href="/contact" variant="primary" size="md" className="w-full">
                Start Your Project
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
