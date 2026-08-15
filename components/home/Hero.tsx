import { heroStats } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CodeEditor } from "@/components/home/CodeEditor";
import { siteConfig } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>Business Transformation & Digital Systems</SectionLabel>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              We engineer businesses.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-text-muted md:text-lg">
              {siteConfig.description} We help organizations redesign the way
              they operate — using software, automation, and intelligent business
              systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/what-we-build" variant="primary" size="lg">
                What We Build
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Book a Discovery Call
              </Button>
            </div>
          </div>

          <div className="relative">
            <CodeEditor />
          </div>
        </div>

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
