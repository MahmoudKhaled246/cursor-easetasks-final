import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { pillars, industries } from "@/lib/data";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Digital Presence, Business Systems, Automation, and Enterprise Platforms — four strategic pillars engineered to transform how your business operates.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-main text-center">
          <SectionLabel centered>Our Capabilities</SectionLabel>
          <h1 className="text-4xl font-bold text-text-primary md:text-5xl">
            End-to-end business transformation.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            From digital presence to enterprise platforms — we engineer
            operational systems that replace fragmented tools, manual processes,
            and disconnected workflows.
          </p>
        </div>
      </section>

      {pillars.map((pillar, idx) => (
        <div
          key={pillar.id}
          className={idx % 2 === 1 ? "bg-background-secondary" : ""}
        >
          <ServiceDetail service={pillar} reversed={idx % 2 === 1} />
        </div>
      ))}

      {/* Industries */}
      <AnimatedSection className="section-padding bg-background-secondary">
        <div className="container-main text-center">
          <SectionLabel centered>Industries We Serve</SectionLabel>
          <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
            Sectors where operational complexity is non-negotiable.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-white/10 bg-surface px-4 py-2 text-sm text-text-muted"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding">
        <div className="container-main text-center">
          <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
            Need a custom solution not listed here?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-text-muted">
            We thrive on complex technical challenges. Tell us what you&apos;re
            trying to build — we&apos;ll tell you honestly if we&apos;re the
            right partner.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Discuss Your Requirements
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
