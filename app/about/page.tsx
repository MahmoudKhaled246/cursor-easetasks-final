import type { Metadata } from "next";
import {
  AboutHero,
  WhatWeAreNotSection,
  MissionSection,
  FrameworkSection,
  PhilosophySection,
  StatsRow,
  OfficesSection,
  // TeamSection,
} from "@/components/about/AboutSections";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: siteConfig.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhatWeAreNotSection />
      <MissionSection />
      <FrameworkSection />
      <PhilosophySection />
      <StatsRow />
      <OfficesSection />
      {/* <TeamSection /> */}
    </>
  );
}
