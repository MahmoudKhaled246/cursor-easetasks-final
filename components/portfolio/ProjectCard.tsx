import { Check } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { AnimatedCard } from "@/components/ui/AnimatedSection";

interface ProjectCardProps {
  project: {
    id: string;
    badge: string;
    status: string;
    title: string;
    description: string;
    tags: readonly string[];
    gradient: string;
  };
  delay?: number;
  showInquire?: boolean;
}

export function ProjectCard({
  project,
  delay = 0,
  showInquire = false,
}: ProjectCardProps) {
  return (
    <AnimatedCard
      delay={delay}
      className="card-surface group overflow-hidden transition-colors hover:border-accent/20"
    >
      {/* Project visual */}
      <div
        className={`relative h-52 bg-gradient-to-br ${project.gradient} p-6`}
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
        {/* Abstract dashboard mockup */}
        <div className="mt-8 grid grid-cols-3 gap-2">
          <div className="col-span-2 h-20 rounded-lg bg-white/5" />
          <div className="space-y-2">
            <div className="h-9 rounded bg-white/5" />
            <div className="h-9 rounded bg-white/5" />
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <div className="h-2 flex-1 rounded bg-white/10" />
          <div className="h-2 w-1/4 rounded bg-white/10" />
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
        {showInquire && (
          <div className="mt-6">
            <Button
              href="/contact"
              variant="outline"
              size="sm"
              className="w-full"
            >
              Inquire About Similar Project
            </Button>
          </div>
        )}
      </div>
    </AnimatedCard>
  );
}
