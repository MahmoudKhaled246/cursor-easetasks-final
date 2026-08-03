import {
  Globe,
  LayoutGrid,
  Code2,
  Palette,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { ServiceMockup } from "@/components/services/ServiceMockup";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  LayoutGrid,
  Code2,
  Palette,
};

interface ServiceDetailProps {
  service: {
    id: string;
    icon: string;
    title: string;
    description: string;
    tags: readonly string[];
    features: readonly string[];
    mockup: "website" | "webapp" | "custom" | "design";
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
          {/* Content */}
          <div className={reversed ? "lg:[direction:ltr]" : ""}>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              {service.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              {service.description}
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
          </div>

          {/* Mockup */}
          <div className={reversed ? "lg:[direction:ltr]" : ""}>
            <ServiceMockup type={service.mockup} />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
