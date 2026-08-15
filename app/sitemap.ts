import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/what-we-build",
    "/services",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/what-we-build" ? 0.9 : 0.8,
  }));
}
