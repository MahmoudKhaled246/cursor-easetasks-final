import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  LayoutGrid,
  Workflow,
  Building2,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { pillars } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  LayoutGrid,
  Workflow,
  Building2,
};

export function WhatWeBuildPreview() {
  return (
    <AnimatedSection className="section-padding bg-background-secondary">
      <div className="container-main">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
              Four strategic pillars.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-text-muted">
              Each pillar addresses a distinct layer of business operations —
              designed to work independently and more powerfully when integrated.
            </p>
          </div>
          <Link
            href="/what-we-build"
            className="shrink-0 text-sm font-medium text-accent transition-colors hover:text-accent/80"
          >
            Explore All Pillars →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] ?? Globe;
            return (
              <AnimatedCard
                key={pillar.id}
                delay={idx * 0.08}
                className="card-surface group flex flex-col overflow-hidden transition-colors hover:border-accent/20"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                  <span className="absolute left-4 top-4 text-lg font-bold text-accent/60">
                    {pillar.number}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-4 w-4 text-accent" />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                    {pillar.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {pillar.tags.map((tag) => (
                      <Tag key={tag} className="text-[10px] px-2 py-0.5">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button href="/what-we-build" variant="primary" size="md" className="gap-2">
            See What We Build
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
