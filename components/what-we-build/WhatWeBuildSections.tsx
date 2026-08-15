import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  LayoutGrid,
  Workflow,
  Building2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { pillars } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  LayoutGrid,
  Workflow,
  Building2,
};

export function WhatWeBuildHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-[150px]" />
      <div className="container-main relative text-center">
        <SectionLabel centered>What We Build</SectionLabel>
        <h1 className="text-4xl font-extrabold leading-tight text-text-primary md:text-5xl lg:text-6xl">
          Four strategic pillars.
          <br />
          <span className="text-accent">One integrated vision.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-text-muted md:text-lg">
          Our services are organized into four strategic pillars — each designed
          to address a distinct layer of business operations. Each pillar works
          independently — and more powerfully when integrated.
        </p>
        <div className="mt-8">
          <Button href="/contact" variant="primary" size="lg">
            Start a Discovery Session
          </Button>
        </div>
      </div>
    </section>
  );
}

export function PillarsGrid() {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-main">
        <div className="grid gap-8 md:grid-cols-2">
          {pillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] ?? Globe;
            return (
              <AnimatedCard
                key={pillar.id}
                delay={idx * 0.1}
                className="card-surface group overflow-hidden transition-colors hover:border-accent/20"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <span className="text-3xl font-bold text-accent/40">
                      {pillar.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {pillar.subtitle}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-text-primary">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {pillar.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {pillar.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 border-t border-white/5 pt-4 text-sm italic text-text-primary/80">
                    {pillar.closingStatement}
                  </p>

                  <Link
                    href="/services"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                  >
                    Explore in detail
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function IntegrationBanner() {
  return (
    <AnimatedSection className="section-padding">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-card border border-accent/10 bg-surface p-8 text-center shadow-glow md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-accent/5" />
          <div className="relative">
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              Integrated. Not isolated.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted">
              Each pillar is designed to work independently — and more powerfully
              when integrated. From your digital presence to enterprise
              platforms, we engineer a unified operational layer that grows with
              your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/services" variant="primary" size="lg">
                View All Services
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Book a Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
