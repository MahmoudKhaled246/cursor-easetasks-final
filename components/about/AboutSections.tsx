import { heroStats, philosophyCards, teamMembers } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection, AnimatedCard } from "@/components/ui/AnimatedSection";

export function AboutHero() {
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-16">
      <div className="container-main text-center">
        <SectionLabel centered>Who We Are</SectionLabel>
        <h1 className="text-4xl font-bold text-text-primary md:text-5xl">
          Our Mission & Story
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
          We are custom software engineers focused on building elegant,
          high-performance, and scalable digital solutions for modern
          businesses.
        </p>
      </div>
    </section>
  );
}

export function MissionSection() {
  return (
    <AnimatedSection className="section-padding bg-background-secondary">
      <div className="container-main">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — story text */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              Engineering the future of digital business.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Founded with a vision to eliminate technical friction, Ease Tasks
              was built on a simple premise: engineering should enable
              business, not constrain it. We saw too many companies struggling
              with bloated legacy systems, slow delivery cycles, and unscalable
              architecture.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              We assemble elite teams of engineers and designers to build
              software that performs beautifully and scales effortlessly. We
              don&apos;t just write code; we architect solutions.
            </p>
          </div>

          {/* Right — quote card */}
          <div className="card-surface relative overflow-hidden p-8 md:p-10">
            <div className="absolute -right-4 -top-4 text-8xl font-serif text-accent/10">
              &ldquo;
            </div>
            <blockquote className="relative text-lg italic leading-relaxed text-text-primary md:text-xl">
              Software shouldn&apos;t just work — it should be a joy to use,
              effortless to scale, and clean enough to live by.
            </blockquote>
            <div className="mt-8 flex items-center gap-3 border-t border-white/5 pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-black">
                ET
              </div>
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  The Ease Tasks Team
                </p>
                <p className="text-xs text-text-muted">
                  Foundational Philosophy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function PhilosophySection() {
  return (
    <AnimatedSection className="section-padding">
      <div className="container-main">
        <div className="grid gap-6 md:grid-cols-3">
          {philosophyCards.map((card, idx) => (
            <AnimatedCard key={card.title} delay={idx * 0.1} className="card-surface p-6">
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

export function TeamSection() {
  return (
    <AnimatedSection className="section-padding">
      <div className="container-main">
        <SectionLabel centered>The Architects</SectionLabel>
        <h2 className="text-center text-3xl font-bold text-text-primary md:text-4xl">
          Meet the leadership team.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {teamMembers.map((member, idx) => (
            <AnimatedCard
              key={member.name}
              delay={idx * 0.1}
              className="card-surface p-6 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-lg font-bold text-accent">
                {member.initials}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text-primary">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {member.bio}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
