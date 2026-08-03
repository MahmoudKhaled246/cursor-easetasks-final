import {
  Zap,
  Shield,
  Headphones,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { whyChooseUs } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Shield,
  Headphones,
  Layers,
};

export function WhyChooseUs() {
  return (
    <AnimatedSection className="section-padding">
      <div className="container-main">
        <SectionLabel centered>Why Choose Us</SectionLabel>
        <h2 className="text-center text-3xl font-bold text-text-primary md:text-4xl">
          Engineering philosophy built for speed and quality.
        </h2>

        {/* Highlight stats */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 md:gap-16">
          {whyChooseUs.highlights.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-3xl font-bold text-accent md:text-4xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-text-muted">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.items.map((item, idx) => {
            const Icon = iconMap[item.icon] ?? Zap;
            return (
              <AnimatedCard
                key={item.title}
                delay={idx * 0.1}
                className="card-surface p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h4 className="text-base font-semibold text-text-primary">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
