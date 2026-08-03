import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "From high-converting marketing sites to complex distributed systems. We build software that performs.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-main text-center">
          <SectionLabel centered>Our Capabilities</SectionLabel>
          <h1 className="text-4xl font-bold text-text-primary md:text-5xl">
            End-to-end engineering solutions.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            From high-converting marketing sites to complex distributed systems.
            We build software that performs.
          </p>
        </div>
      </section>

      {/* Service details — alternating layout */}
      {services.map((service, idx) => (
        <div
          key={service.id}
          className={idx % 2 === 1 ? "bg-background-secondary" : ""}
        >
          <ServiceDetail service={service} reversed={idx % 2 === 1} />
        </div>
      ))}

      {/* Custom solution CTA */}
      <AnimatedSection className="section-padding">
        <div className="container-main text-center">
          <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
            Need a custom solution not listed here?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-text-muted">
            We thrive on complex technical challenges. Tell us what you&apos;re
            trying to build.
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
