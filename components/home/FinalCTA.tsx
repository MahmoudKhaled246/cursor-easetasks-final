import { Clock, Shield, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function FinalCTA() {
  return (
    <AnimatedSection className="section-padding">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-card border border-accent/10 bg-surface p-8 text-center shadow-glow md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-accent/5" />

          <div className="relative">
            <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
              Let&apos;s build better business systems.
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              The first step is a conversation. Not a sales call. A genuine
              operational discovery session.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Start Your Project
              </Button>
              <Button href="/what-we-build" variant="outline" size="lg">
                What We Build
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                No commitment required
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-accent" />
                Honest assessment
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent" />
                NDA Protected
              </span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
