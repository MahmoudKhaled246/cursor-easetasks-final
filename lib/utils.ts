import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "Ease Tasks",
  url: "https://easetasks.com",
  email: "hello@easetasks.com",
  location: "San Francisco, CA",
  description:
    "We design, develop, and deploy bespoke web applications, custom digital platforms, and robust websites engineered to accelerate your growth.",
};
