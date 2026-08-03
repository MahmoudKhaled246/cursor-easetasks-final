import { heroStats } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CodeEditor } from "@/components/home/CodeEditor";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div>
            <SectionLabel>Custom Software Engineering</SectionLabel>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              We build high-performance software for scaling businesses.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-text-muted md:text-lg">
              We design, develop, and deploy bespoke web applications, custom
              digital platforms, and robust websites engineered to accelerate
              your growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Start Your Project
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get a Free Quote
              </Button>
            </div>
          </div>

          {/* Right column — code editor */}
          <div className="relative">
            <CodeEditor />
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/5 pt-10 md:mt-20">
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-2xl font-bold text-text-primary md:text-3xl">
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
