export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const heroStats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "35+", label: "Launched Apps" },
  { value: "4.9/5", label: "Partner Rating" },
] as const;

export const services = [
  {
    id: "website-development",
    icon: "Globe",
    title: "Website Development",
    description:
      "Lightning-fast, SEO-optimized sites built on headless architecture.",
    tags: ["Headless CMS", "SEO", "Responsive"],
    features: [
      "Next-gen architecture (Jamstack)",
      "Sub-second page loads",
      "Advanced SEO optimization",
      "Accessible & responsive design",
    ],
    previewFeatures: [
      "Next-gen architecture (Jamstack)",
      "Sub-second page loads",
    ],
    mockup: "website" as const,
  },
  {
    id: "web-applications",
    icon: "LayoutGrid",
    title: "Web Applications",
    description:
      "Complex logic wrapped in simple, intuitive user interfaces.",
    tags: ["SPAs / PWAs", "React / Vue", "Real-time"],
    features: [
      "Single Page Applications (SPAs)",
      "Progressive Web Apps (PWAs)",
      "Real-time data synchronization",
      "Offline-first capabilities",
    ],
    previewFeatures: [
      "Single Page Applications (SPAs)",
      "Progressive Web Apps (PWAs)",
    ],
    mockup: "webapp" as const,
  },
  {
    id: "custom-software",
    icon: "Code2",
    title: "Custom Software",
    description:
      "Bespoke tools and platforms engineered exactly for your business logic.",
    tags: ["85% Faster", "Scalable", "Secure"],
    features: [
      "Automated workflows",
      "Third-party API integrations",
      "Legacy system modernization",
      "Enterprise-grade security",
    ],
    previewFeatures: [
      "Automated workflows",
      "Third-party API integrations",
    ],
    mockup: "custom" as const,
  },
  {
    id: "ui-ux-design",
    icon: "Palette",
    title: "UI/UX Design",
    description: "Pixel-perfect, conversion-focused design systems.",
    tags: ["Design Tokens", "Figma", "Prototyping"],
    features: [
      "Comprehensive design systems",
      "Interactive prototyping",
      "User journey mapping",
      "Conversion rate optimization",
    ],
    previewFeatures: [
      "Comprehensive design systems",
      "Interactive prototyping",
    ],
    mockup: "design" as const,
  },
] as const;

export const whyChooseUs = {
  highlights: [
    { value: "100%", label: "Type-safe production codebase" },
    { value: "2.5x", label: "Faster delivery cycles" },
  ],
  items: [
    {
      icon: "Zap",
      title: "Fast & Predictable Delivery",
      description:
        "Iterative sprints mean you see progress weekly, not monthly.",
    },
    {
      icon: "Shield",
      title: "Scalable Type-Safe Code",
      description:
        "We build with strict typing so your app doesn't break at scale.",
    },
    {
      icon: "Headphones",
      title: "Dedicated Support",
      description:
        "Direct access to the engineers building your product.",
    },
    {
      icon: "Layers",
      title: "Modern Tech Stack",
      description:
        "React, Next.js, Node, Rust — tools that modern tech giants use.",
    },
  ],
} as const;

export const projects = [
  {
    id: "aether-store",
    badge: "SAAS PLATFORM",
    status: "Online",
    statusIcon: "check",
    title: "Aether Store",
    description:
      "A headless e-commerce engine designed for high-volume modern retailers.",
    tags: ["E-Commerce", "Next.js", "Stripe"],
    gradient: "from-emerald-900/40 to-teal-900/20",
    accentColor: "#10b981",
  },
  {
    id: "apex-metrics",
    badge: "WEB APPLICATION",
    status: "Realtime",
    statusIcon: "check",
    title: "Apex Metrics",
    description:
      "Real-time analytics dashboard rendering complex datasets with zero lag.",
    tags: ["Analytics Dashboard", "React", "WebGL"],
    gradient: "from-blue-900/40 to-indigo-900/20",
    accentColor: "#3b82f6",
  },
  {
    id: "velo-pay",
    badge: "FINTECH APP",
    status: "Encrypted",
    statusIcon: "check",
    title: "Velo Pay",
    description:
      "Secure, instant global payments platform with bank-grade encryption.",
    tags: ["Mobile Banking", "Fintech", "Rust"],
    gradient: "from-purple-900/40 to-violet-900/20",
    accentColor: "#8b5cf6",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map your business logic, technical requirements, and user needs.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We architect the system and design pixel-perfect interfaces.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We write clean, typed, scalable code in iterative sprints.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We deploy to production, monitor performance, and hand over the keys.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Ease Tasks delivered our platform 3 months ahead of schedule. The code quality is unmatched.",
    initials: "SJ",
    name: "Sarah Jenkins",
    role: "CTO, NexaFlow",
  },
  {
    quote:
      "They didn't just build what we asked for, they engineered a better solution than we imagined.",
    initials: "DC",
    name: "David Chen",
    role: "Founder, Horizon Retail",
  },
  {
    quote:
      "The fastest, most reliable engineering team we have ever partnered with. A truly premium experience.",
    initials: "ER",
    name: "Elena Rostova",
    role: "Product Lead, VeloPay",
  },
] as const;

export const philosophyCards = [
  {
    title: "Quality Over Volume",
    description:
      "We take on fewer projects to ensure every line of code meets our obsessive standards for performance and maintainability.",
  },
  {
    title: "Modern Architecture",
    description:
      "We leverage edge computing, strictly typed languages, and modern frameworks to build systems that load instantly.",
  },
  {
    title: "Engineered for Scale",
    description:
      "We design database schemas and infrastructure topologies that handle millions of requests without breaking a sweat.",
  },
] as const;

export const teamMembers = [
  {
    initials: "AM",
    name: "Alex Mercer",
    role: "Founder & Chief Architect",
    bio: "Ex-Stripe engineer focused on high-availability distributed systems.",
  },
  {
    initials: "ER",
    name: "Elena Rostova",
    role: "Head of UI/UX",
    bio: "Award-winning designer obsessed with micro-interactions and accessibility.",
  },
  {
    initials: "MV",
    name: "Marcus Vance",
    role: "Lead Systems Engineer",
    bio: "TypeScript and Rust specialist. Dreams in abstract syntax trees.",
  },
] as const;

export const projectTypes = [
  "Web Application",
  "Marketing Website",
  "Custom Software",
  "UI/UX Design",
  "Other",
] as const;

export const budgetRanges = [
  "$10k - $25k",
  "$25k - $50k",
  "$50k - $100k",
  "$100k+",
] as const;

export const codeSnippets = [
  `import { useState } from 'react';

export function Engine() {
  const [performance, setPerformance] = useState(100);

  return (
    <Platform>
      <Core speed={performance} />
      <Scale limit={Infinity} />
    </Platform>
  );
}`,
  `import { createClient } from '@/lib/db';

export async function deploy() {
  const client = createClient();
  await client.connect();

  return {
    status: 'ready',
    latency: '14ms',
  };
}`,
] as const;
