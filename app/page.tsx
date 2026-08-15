import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { WhatWeBuildPreview } from "@/components/home/WhatWeBuildPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/utils";

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
  title: "Business Transformation & Digital Systems",
  description: siteConfig.description,
  path: "/",
});

function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    logo: `${siteConfig.url}/brand/icon.png`,
    description: siteConfig.description,
    foundingDate: "2026-07",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "UAE",
        addressCountry: "AE",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Cairo",
        addressCountry: "EG",
      },
    ],
    sameAs: ["https://linkedin.com/company/easetasks"],
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
      <WhatWeBuildPreview />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
