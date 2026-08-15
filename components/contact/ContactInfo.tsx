import { Mail, MapPin, Clock, Shield } from "lucide-react";
import { offices } from "@/lib/data";
import { siteConfig } from "@/lib/utils";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="card-surface p-6">
        <h4 className="text-base font-semibold text-text-primary">
          Contact Information
        </h4>
        <div className="mt-5 space-y-4">
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-sm text-text-muted">Email Us</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm font-medium text-text-primary transition-colors hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
          {offices.map((office) => (
            <div key={office.name} className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium text-text-primary">
                  {office.name}
                </p>
                <p className="text-sm text-text-muted">{office.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card-surface p-6">
        <h4 className="text-base font-semibold text-text-primary">
          Why Partner With Us?
        </h4>
        <div className="mt-5 space-y-4">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-medium text-text-primary">
                Rapid Response Time
              </p>
              <p className="text-sm text-text-muted">
                We guarantee a reply within 24 hours.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div>
              <p className="text-sm font-medium text-text-primary">
                Strictly Confidential
              </p>
              <p className="text-sm text-text-muted">
                Your ideas are protected by default NDA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
