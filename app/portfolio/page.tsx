import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/lib/data";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Portfolio",
  description:
    "A selection of platforms, applications, and websites engineered for speed, scale, and conversion.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-main text-center">
          <SectionLabel centered>Our Portfolio</SectionLabel>
          <h1 className="text-4xl font-bold text-text-primary md:text-5xl">
            Products we&apos;ve brought to life.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            A selection of platforms, applications, and websites engineered for
            speed, scale, and conversion.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-main">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={idx * 0.1}
                showInquire
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
