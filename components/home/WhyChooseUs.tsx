import {
  Search,
  Brain,
  Sparkles,
  Shield,
  TrendingUp,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { whyChooseUs } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  Search,
  Brain,
  Sparkles,
  Shield,
  TrendingUp,
  Handshake,
};

export function WhyChooseUs() {
  return (
    <AnimatedSection className="section-padding">
      <div className="container-main">
        <SectionLabel centered>Why Easetasks</SectionLabel>
        <h2 className="text-center text-3xl font-bold text-text-primary md:text-4xl">
          We think before we build.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-text-muted">
          There are many technology vendors. There are few genuine business
          transformation partners. The difference is in how we think before we
          build.
        </p>

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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.items.map((item, idx) => {
            const Icon = iconMap[item.icon] ?? Search;
            return (
              <AnimatedCard
                key={item.title}
                delay={idx * 0.08}
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
