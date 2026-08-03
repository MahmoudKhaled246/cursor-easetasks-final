import Link from "next/link";
import { navLinks } from "@/lib/data";
import { siteConfig } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background-secondary">
      <div className="container-main section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Company blurb */}
          <div>
            <Link href="/" className="text-lg font-bold text-text-primary">
              Ease Tasks<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {siteConfig.description}
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-primary">
              Company
            </h4>
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

          {/* Connect info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-text-primary">
              Connect
            </h4>
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
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Ease Tasks. All rights reserved.
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
