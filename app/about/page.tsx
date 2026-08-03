import type { Metadata } from "next";
import {
  AboutHero,
  MissionSection,
  PhilosophySection,
  StatsRow,
  TeamSection,
} from "@/components/about/AboutSections";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "We are custom software engineers focused on building elegant, high-performance, and scalable digital solutions for modern businesses.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <PhilosophySection />
      <StatsRow />
      <TeamSection />
    </>
  );
}
