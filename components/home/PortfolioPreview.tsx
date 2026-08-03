import Link from "next/link";
import { Check } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";

export function PortfolioPreview() {
  return (
    <AnimatedSection className="section-padding bg-background-secondary">
      <div className="container-main">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Our Portfolio</SectionLabel>
            <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
              Products we&apos;ve brought to life.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="shrink-0 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            View All Work →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project, idx) => (
            <AnimatedCard
              key={project.id}
              delay={idx * 0.1}
              className="card-surface group overflow-hidden transition-colors hover:border-accent/20"
            >
              {/* Project visual mockup */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                    {project.badge}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-medium text-accent">
                    <Check className="h-3 w-3" />
                    {project.status}
                  </span>
                </div>
                {/* Abstract UI mockup */}
                <div className="mt-6 space-y-2">
                  <div className="h-3 w-3/4 rounded bg-white/10" />
                  <div className="h-3 w-1/2 rounded bg-white/10" />
                  <div className="mt-4 h-16 rounded-lg bg-white/5" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
