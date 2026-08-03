import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/utils";

/** Lazy-load below-the-fold sections for better Core Web Vitals */
const Process = dynamic(() =>
  import("@/components/home/Process").then((m) => m.Process)
);
const Testimonials = dynamic(() =>
  import("@/components/home/Testimonials").then((m) => m.Testimonials)
);
const FinalCTA = dynamic(() =>
  import("@/components/home/FinalCTA").then((m) => m.FinalCTA)
);

export const metadata: Metadata = createMetadata({
  title: "Custom Software Engineering",
  description: siteConfig.description,
  path: "/",
});

/** JSON-LD Organization structured data for SEO */
function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <PortfolioPreview />
      <Process />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
