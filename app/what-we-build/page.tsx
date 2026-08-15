import type { Metadata } from "next";
import {
  WhatWeBuildHero,
  PillarsGrid,
  IntegrationBanner,
} from "@/components/what-we-build/WhatWeBuildSections";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "What We Build",
  description:
    "Four strategic pillars — Digital Presence, Business Systems, Automation, and Enterprise Platforms — designed to transform how your business operates.",
  path: "/what-we-build",
});

export default function WhatWeBuildPage() {
  return (
    <>
      <WhatWeBuildHero />
      <PillarsGrid />
      <IntegrationBanner />
    </>
  );
}
