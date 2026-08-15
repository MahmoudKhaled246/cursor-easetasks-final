export const navLinks = [
  { label: "What We Build", href: "/what-we-build", highlight: true },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const heroStats = [
  { value: "99.9%", label: "Uptime SLA" },
  { value: "4", label: "Global Offices" },
  { value: "100%", label: "Business First" },
] as const;

/** Four strategic pillars from the Ease Tasks presentation */
export const pillars = [
  {
    id: "digital-presence",
    number: "01",
    icon: "Globe",
    title: "Digital Presence",
    subtitle: "The operational face of your business",
    description:
      "Websites, email infrastructure, and brand platforms — engineered to communicate credibility, enable transactions, and support business development.",
    longDescription:
      "Your digital presence is not a marketing asset. It is operational infrastructure that communicates credibility, enables transactions, and supports business development. First impressions are operational decisions.",
    tags: ["Business Websites", "Email Infrastructure", "Brand Platforms"],
    features: [
      "Business websites architected for performance, conversion, and brand authority",
      "Professional email infrastructure with SPF, DKIM, and DMARC security",
      "Virtual business cards and digital-first contact systems",
      "Corporate identity platforms ensuring consistency across every touchpoint",
    ],
    previewFeatures: [
      "Performance-optimized business websites",
      "Enterprise-grade email infrastructure",
    ],
    image: "/images/services/digital-presence.png",
    closingStatement:
      "We build digital presence that earns trust before the first conversation.",
  },
  {
    id: "business-systems",
    number: "02",
    icon: "LayoutGrid",
    title: "Business Systems",
    subtitle: "The operational core of your organization",
    description:
      "CRM, ERP, dashboards, internal platforms, and management systems — replacing fragmented tools with unified, intelligent infrastructure.",
    longDescription:
      "The operational core of any organization is its internal systems. We design and build custom platforms that replace fragmented tools and manual processes with unified, intelligent infrastructure.",
    tags: ["Custom CRM", "ERP Systems", "Dashboards"],
    features: [
      "Custom CRM built around your actual sales process",
      "ERP systems connecting finance, operations, HR, and procurement",
      "Company portals for communication, documentation, and workflow",
      "Real-time reporting dashboards for leadership and department heads",
      "Purpose-built management systems for project, asset, and compliance",
    ],
    previewFeatures: [
      "Custom CRM & ERP platforms",
      "Real-time reporting dashboards",
    ],
    image: "/images/services/business-systems.png",
    closingStatement:
      "When your systems are aligned, your organization operates with clarity and speed.",
  },
  {
    id: "automation",
    number: "03",
    icon: "Workflow",
    title: "Automation",
    subtitle: "The operational engine of growth",
    description:
      "Workflow, email, AI-powered, and process automation — eliminating manual inefficiency and freeing teams to do work that matters.",
    longDescription:
      "Manual processes are the single largest source of operational inefficiency in growing organizations. We eliminate them — systematically. Automation is not about replacing people. It is about freeing them to do work that matters.",
    tags: ["Workflow Automation", "AI-Powered", "Process Automation"],
    features: [
      "Workflow automation across multi-step business processes",
      "Intelligent, trigger-based email communication systems",
      "End-to-end business process automation — approvals, reporting, data entry",
      "AI-powered systems that learn from operational data",
      "Structured approval workflows replacing email chains",
      "Notification and task automation ensuring the right information at the right time",
    ],
    previewFeatures: [
      "Workflow & process automation",
      "AI-powered intelligent systems",
    ],
    image: "/images/services/automation.png",
    closingStatement:
      "We eliminate manual inefficiency — systematically and at scale.",
  },
  {
    id: "enterprise-platforms",
    number: "04",
    icon: "Building2",
    title: "Enterprise Platforms",
    subtitle: "The operational backbone at scale",
    description:
      "Zoho, API integrations, and custom enterprise solutions — architected, implemented, and integrated to operate reliably and securely.",
    longDescription:
      "For organizations requiring enterprise-grade infrastructure, we architect, implement, and integrate platforms that operate at scale — reliably and securely. Enterprise complexity requires enterprise thinking.",
    tags: ["Zoho Solutions", "API Integration", "Custom Platforms"],
    features: [
      "Full-suite Zoho implementation: CRM, Books, People, Projects, Desk",
      "Enterprise integrations connecting ERP, CRM, HRMS, and finance",
      "Custom API development and third-party integration",
      "Bespoke enterprise applications for complex operational requirements",
    ],
    previewFeatures: [
      "Zoho & enterprise platform implementation",
      "Custom API integrations",
    ],
    image: "/images/services/enterprise-platforms.png",
    closingStatement:
      "We are technology-agnostic. Platform selection is always driven by business requirements.",
  },
] as const;

/** Legacy alias for services page */
export const services = pillars;

export const whatWeAreNot = [
  {
    title: "Not a software house.",
    description: "We do not sell code. We engineer operational systems.",
  },
  {
    title: "Not a digital agency.",
    description:
      "We do not run campaigns. We redesign how businesses function.",
  },
  {
    title: "Consulting first.",
    description:
      "Every engagement begins with understanding the business — before a single line of code is written.",
  },
] as const;

export const philosophyCards = [
  {
    title: "Business First",
    description:
      "Every engagement begins with operational discovery — not a product demo. We diagnose before we prescribe.",
  },
  {
    title: "Technology Second",
    description:
      "Software is selected or built only after the business requirement is fully understood.",
  },
  {
    title: "Elegant Simplicity",
    description:
      "The best system is simple enough to be used consistently and powerful enough to scale.",
  },
  {
    title: "Security by Design",
    description:
      "Every system is architected with data protection and access control from the first line of design.",
  },
  {
    title: "Long-term Partnership",
    description:
      "We measure success not at launch — but at the 12-month operational mark.",
  },
  {
    title: "Appropriate Solutions",
    description:
      "We do not over-engineer. We do not under-deliver. We match the solution to the actual need.",
  },
] as const;

export const whyChooseUs = {
  highlights: [
    { value: "6", label: "Core principles we never compromise" },
    { value: "3", label: "Countries — UAE, Egypt, England" },
  ],
  items: [
    {
      icon: "Search",
      title: "Business Understanding First",
      description:
        "We diagnose before we prescribe. Every engagement begins with operational discovery.",
    },
    {
      icon: "Brain",
      title: "Consulting Mindset",
      description:
        "We think like business advisors, not developers. Recommendations driven by operational outcomes.",
    },
    {
      icon: "Sparkles",
      title: "Elegant, Appropriate Systems",
      description:
        "We build what is needed — nothing more, nothing less. Complexity is never a feature.",
    },
    {
      icon: "Shield",
      title: "Security by Design",
      description:
        "Data protection and access control are architectural decisions, not afterthoughts.",
    },
    {
      icon: "TrendingUp",
      title: "Scalable Architecture",
      description:
        "Every system is designed to grow with the organization — without requiring a rebuild.",
    },
    {
      icon: "Handshake",
      title: "Long-term Partnership",
      description:
        "We measure success by operational performance — not by project closure.",
    },
  ],
} as const;

export const transformationFramework = [
  {
    number: "01",
    title: "Discover",
    description:
      "We map your business logic, operational workflows, technical requirements, and user needs.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We architect the system and design solutions aligned with your operational reality.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "We build, deploy, and hand over — with structured training and full documentation.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We listen first. Understand the business, the challenge, and the goal.",
  },
  {
    number: "02",
    title: "Operational Assessment",
    description:
      "We map your current workflows, systems, and gaps before proposing anything.",
  },
  {
    number: "03",
    title: "Solution Proposal",
    description:
      "A structured, consulting-grade proposal — not a generic quote.",
  },
  {
    number: "04",
    title: "Delivery & Review",
    description:
      "Regular sprint reviews, transparent progress reporting, and client sign-off at every milestone.",
  },
] as const;

export const industries = [
  "Defense & Government",
  "Real Estate",
  "Healthcare",
  "Startups & Scaleups",
  "Enterprise Organizations",
  "Professional Services",
  "E-Commerce & Retail",
  "Marketing Agencies",
] as const;

export const offices = [
  {
    name: "Headquarters",
    location: "IFZA, Dubai, United Arab Emirates",
    type: "HQ",
  },
  {
    name: "Cairo Office",
    location: "Cairo, Egypt — Operational Delivery",
    type: "Operations",
  },
  {
    name: "England Office",
    location: "England, United Kingdom — Marketing & Sales",
    type: "Sales",
  },
] as const;

export const teamMembers = [
  {
    initials: "Dabo",
    name: "Abdel-fattah",
    role: "Founder & CEO",
    bio: "Business transformation strategist focused on engineering operational systems that scale. Leading Easetasks Solutions LTD from IFZA, UAE.",
    image: "/images/team/ceo.png",
    isCEO: true,
  },
] as const;

export const testimonials = [
  {
    quote:
      "Easetasks didn't just build software — they redesigned how our entire operation functions. The ROI was visible within 90 days.",
    initials: "AK",
    name: "Ahmed Khalil",
    role: "Operations Director, Gulf Logistics",
  },
  {
    quote:
      "Finally a partner that understands the business before writing a single line of code. Their consulting approach is genuinely different.",
    initials: "SM",
    name: "Sarah Mitchell",
    role: "Managing Partner, Horizon Consulting",
  },
  {
    quote:
      "From Zoho implementation to custom automation — they delivered a unified system that replaced six disconnected tools.",
    initials: "RA",
    name: "Rashid Al-Mansouri",
    role: "CEO, Nexus Properties",
  },
] as const;

export const projectTypes = [
  "Digital Presence",
  "Business Systems",
  "Automation",
  "Enterprise Platforms",
  "Digital Transformation",
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
