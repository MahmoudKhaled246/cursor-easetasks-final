import {
  Globe,
  LayoutGrid,
  Code2,
  Palette,
  Check,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  LayoutGrid,
  Code2,
  Palette,
};

export function ServicesPreview() {
  return (
    <AnimatedSection className="section-padding bg-background-secondary">
      <div className="container-main">
        <SectionLabel centered>Our Capabilities</SectionLabel>
        <h2 className="text-center text-3xl font-bold text-text-primary md:text-4xl">
          End-to-end engineering solutions.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <AnimatedCard
                key={service.id}
                delay={idx * 0.1}
                className="card-surface group flex flex-col p-6 transition-colors hover:border-accent/20"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <ul className="mt-4 space-y-2">
                  {service.previewFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text-muted"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
