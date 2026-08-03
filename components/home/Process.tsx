import { processSteps } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";

export function Process() {
  return (
    <AnimatedSection className="section-padding">
      <div className="container-main">
        <SectionLabel centered>Our Process</SectionLabel>
        <h2 className="text-center text-3xl font-bold text-text-primary md:text-4xl">
          How we build custom software.
        </h2>

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
