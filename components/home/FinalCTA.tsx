import { Clock, Shield, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function FinalCTA() {
  return (
    <AnimatedSection className="section-padding">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-card border border-accent/10 bg-surface p-8 text-center shadow-glow md:p-16">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 bg-accent/5" />

          <div className="relative">
            <h2 className="text-3xl font-bold text-text-primary md:text-4xl">
              Ready to turn your software vision into reality?
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              We&apos;re ready to engineer it.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Start Your Project
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get a Free Quote
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                Response within 24 hours
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-accent" />
                100% Free Consultation
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
