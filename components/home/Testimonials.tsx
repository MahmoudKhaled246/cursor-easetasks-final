import { testimonials } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";

export function Testimonials() {
  return (
    <AnimatedSection className="section-padding bg-background-secondary">
      <div className="container-main">
        <SectionLabel centered>Testimonials</SectionLabel>
        <h2 className="text-center text-3xl font-bold text-text-primary md:text-4xl">
          What our partners say about us.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <AnimatedCard
              key={item.name}
              delay={idx * 0.1}
              className="card-surface flex flex-col p-6"
            >
              <span className="text-3xl font-serif text-accent">&ldquo;</span>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                {item.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary">
                    {item.name}
                  </h4>
                  <p className="text-xs text-text-muted">{item.role}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
