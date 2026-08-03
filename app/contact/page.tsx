import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Ready to turn your software vision into reality? Get in touch with Ease Tasks for a free consultation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container-main text-center">
          <SectionLabel centered>Get In Touch</SectionLabel>
          <h1 className="text-4xl font-bold text-text-primary md:text-5xl">
            Ready to turn your software vision into reality?
          </h1>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-main">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Form — left, wider column */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            {/* Info cards — right */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
