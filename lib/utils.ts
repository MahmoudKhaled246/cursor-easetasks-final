import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Ease Tasks",
  legalName: "Easetasks Solutions LTD",
  tagline: "We Ease Your Daily Business Tasks",
  url: "https://easetasks.com",
  email: "info@easetasks.com",
  location: "IFZA, Dubai, UAE",
  description:
    "Business Transformation & Digital Systems Consultancy. We help organizations redesign the way they operate — using software, automation, and intelligent business systems.",
  founded: "July 2026",
  regions: ["UAE", "Egypt", "England"],
};
