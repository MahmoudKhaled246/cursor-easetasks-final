import Image from "next/image";
import {
  heroStats,
  philosophyCards,
  teamMembers,
  whatWeAreNot,
  offices,
  transformationFramework,
} from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/utils";

export function AboutHero() {
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-16">
      <div className="container-main text-center">
        <SectionLabel centered>Who We Are</SectionLabel>
        <h1 className="text-4xl font-bold text-text-primary md:text-5xl">
          We engineer businesses.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
          {siteConfig.legalName} is a Business Transformation & Digital Systems
          Consultancy. We help organizations redesign the way they operate —
          using software, automation, and intelligent business systems.
        </p>
        <p className="mx-auto mt-3 text-sm text-accent">
          {siteConfig.regions.join(" · ")} · Founded {siteConfig.founded}
        </p>
      </div>
    </section>
  );
}

export function WhatWeAreNotSection() {
  return (
    <AnimatedSection className="section-padding bg-background-secondary">
      <div className="container-main">
        <div className="grid gap-6 md:grid-cols-3">
          {whatWeAreNot.map((item, idx) => (
            <AnimatedCard
              key={item.title}
              delay={idx * 0.1}
              className="card-surface border-accent/10 p-6"
            >
              <h3 className="text-lg font-semibold text-accent">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export function MissionSection() {
  return (
    <AnimatedSection className="section-padding">
      <div className="container-main">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              Engineering the future of digital business.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Founded with a vision to eliminate technical friction, Ease Tasks
              was built on a simple premise: engineering should enable business,
              not constrain it. We saw too many companies struggling with bloated
              legacy systems, slow delivery cycles, and unscalable architecture.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              We assemble elite teams of engineers and consultants to build
              operational systems that perform beautifully and scale
              effortlessly. We don&apos;t just write code; we architect
              solutions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Headquartered in IFZA, UAE — with operational presence in Cairo,
              Egypt and a Marketing & Sales office in England.
            </p>
          </div>

          <div className="card-surface relative overflow-hidden p-8 md:p-10">
            <div className="absolute -right-4 -top-4 text-8xl font-serif text-accent/10">
              &ldquo;
            </div>
            <blockquote className="relative text-lg italic leading-relaxed text-text-primary md:text-xl">
              That is our mandate — and the principle that governs every
              engagement we undertake. Understand the business before proposing
              any technology.
            </blockquote>
            <div className="mt-8 flex items-center gap-3 border-t border-white/5 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-black">
                ET
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  The Ease Tasks Team
                </p>
                <p className="text-xs text-text-muted">Foundational Philosophy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function FrameworkSection() {
  return (
    <AnimatedSection className="section-padding bg-background-secondary">
      <div className="container-main">
        <SectionLabel centered>Our Framework</SectionLabel>
        <h2 className="text-center text-3xl font-bold text-text-primary md:text-4xl">
          Digital Transformation Framework
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-text-muted">
          Every Easetasks engagement follows a structured, consulting-grade
          methodology. No shortcuts. No assumptions.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {transformationFramework.map((step, idx) => (
            <AnimatedCard key={step.title} delay={idx * 0.1} className="text-center">
              <span className="text-5xl font-bold text-accent/20">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {step.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export function PhilosophySection() {
  return (
    <AnimatedSection className="section-padding">
      <div className="container-main">
        <SectionLabel centered>Our Philosophy</SectionLabel>
        <h2 className="mb-10 text-center text-3xl font-bold text-text-primary md:text-4xl">
          Principles we never compromise.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {philosophyCards.map((card, idx) => (
            <AnimatedCard key={card.title} delay={idx * 0.08} className="card-surface p-6">
              <h3 className="text-lg font-semibold text-text-primary">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {card.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export function StatsRow() {
  return (
    <section className="border-y border-white/5 bg-background-secondary py-12">
      <div className="container-main">
        <div className="grid grid-cols-3 gap-6">
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-text-primary md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfficesSection() {
  return (
    <AnimatedSection className="section-padding bg-background-secondary">
      <div className="container-main">
        <SectionLabel centered>Global Presence</SectionLabel>
        <h2 className="text-center text-3xl font-bold text-text-primary md:text-4xl">
          Where we operate.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offices.map((office, idx) => (
            <AnimatedCard key={office.name} delay={idx * 0.1} className="card-surface p-6 text-center">
              <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                {office.type}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-text-primary">
                {office.name}
              </h3>
              <p className="mt-2 text-sm text-text-muted">{office.location}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export function TeamSection() {
  return (
    <AnimatedSection className="section-padding">
      <div className="container-main">
        <SectionLabel centered>Leadership</SectionLabel>
        <h2 className="text-center text-3xl font-bold text-text-primary md:text-4xl">
          Meet the team.
        </h2>

        <div className="mx-auto mt-12 max-w-md">
          {teamMembers.map((member, idx) => (
            <AnimatedCard
              key={member.name}
              delay={idx * 0.1}
              className="card-surface overflow-hidden"
            >
              <div className="relative h-72 w-full">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-text-primary">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {member.bio}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
