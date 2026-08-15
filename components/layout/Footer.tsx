import Link from "next/link";
import { navLinks } from "@/lib/data";
import { siteConfig } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background-secondary">
      <div className="container-main section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo variant="full" />
            <p className="mt-1 text-xs text-accent">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {siteConfig.description}
            </p>
            <p className="mt-3 text-xs text-text-muted">
              {siteConfig.regions.join(" · ")}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-primary">Company</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-primary">Connect</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.location}</li>
              <li>Cairo, Egypt · England, UK</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-text-muted">
            <Link href="#" className="transition-colors hover:text-text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
