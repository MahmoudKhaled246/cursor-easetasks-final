import { processSteps } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";

export function Process() {
  return (
    <AnimatedSection className="section-padding bg-background-secondary">
      <div className="container-main">
        <SectionLabel centered>How We Work</SectionLabel>
        <h2 className="text-center text-3xl font-bold text-text-primary md:text-4xl">
          From discovery to delivery.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-text-muted">
          We operate on an Agile SCRUM methodology — structured, transparent,
          and built for iterative delivery. Clients are never left wondering
          what is happening.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, idx) => (
            <AnimatedCard key={step.number} delay={idx * 0.1} className="relative">
              <span className="text-5xl font-bold text-accent/20">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {step.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
