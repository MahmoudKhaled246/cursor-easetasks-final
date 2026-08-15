import Image from "next/image";
import {
  Globe,
  LayoutGrid,
  Workflow,
  Building2,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  LayoutGrid,
  Workflow,
  Building2,
};

interface ServiceDetailProps {
  service: {
    id: string;
    icon: string;
    title: string;
    subtitle?: string;
    description: string;
    longDescription?: string;
    tags: readonly string[];
    features: readonly string[];
    image: string;
    closingStatement?: string;
  };
  reversed?: boolean;
}

export function ServiceDetail({ service, reversed }: ServiceDetailProps) {
  const Icon = iconMap[service.icon] ?? Globe;

  return (
    <AnimatedSection className="section-padding">
      <div className="container-main">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
            reversed ? "lg:[direction:rtl]" : ""
          }`}
        >
          <div className={reversed ? "lg:[direction:ltr]" : ""}>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            {service.subtitle && (
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {service.subtitle}
              </p>
            )}
            <h2 className="mt-1 text-2xl font-bold text-text-primary md:text-3xl">
              {service.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              {service.longDescription ?? service.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <ul className="mt-6 space-y-3">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-text-muted"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
            {service.closingStatement && (
              <p className="mt-6 border-l-2 border-accent/30 pl-4 text-sm italic text-text-primary/80">
                {service.closingStatement}
              </p>
            )}
          </div>

          <div className={reversed ? "lg:[direction:ltr]" : ""}>
            <div className="card-surface relative aspect-[4/3] overflow-hidden">
              <Image
                src={service.image}
                alt={`${service.title} — Ease Tasks service illustration`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
