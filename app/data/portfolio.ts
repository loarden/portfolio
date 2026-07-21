export type Project = {
  index: string;
  title: string;
  href: string;
  tags: string[];
  delay?: string;
  borderClass?: string;
};

export type ExpertiseItem = {
  icon: string;
  title: string;
  description: string;
  delay?: string;
  offsetClass?: string;
};

export type ExperienceItem = {
  role: string;
  period: string;
  company: string;
  description: string;
  active?: boolean;
  delay?: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export const hero = {
  status: "Available for full-time opportunities",
  title: ["Full-Stack", "Engineer"] as const,
  description:
    "Building robust, scalable applications across the stack. Focused on performance, precision, and high-impact digital experiences.",
};

export const expertiseSection = {
  label: "01 / Expertise",
  headline: "Bridging the gap between complex logic and clean design.",
  items: [
    {
      icon: "terminal",
      title: "Full-Stack Dev",
      description:
        "End-to-end engineering from reactive frontends to distributed backends and database optimization.",
      delay: "100ms",
    },
    {
      icon: "neurology",
      title: "AI Integration",
      description:
        "Integrating LLMs and neural architectures into production environments to solve real-world problems.",
      delay: "200ms",
      offsetClass: "lg:ml-12",
    },
    {
      icon: "architecture",
      title: "System Architecture",
      description:
        "Designing scalable cloud-native systems with a focus on reliability, security, and developer velocity.",
      delay: "300ms",
      offsetClass: "lg:ml-24",
    },
  ] satisfies ExpertiseItem[],
};

export const workSection = {
  label: "02 / Selected Work",
  projects: [
    {
      index: "01.",
      title: "Warehouse Ops",
      href: "/projects/warehouse-ops",
      tags: ["React", "Node.js", "PostgreSQL"],
      borderClass: "border-t",
    },
    {
      index: "02.",
      title: "Enterprise CRM",
      href: "/projects/enterprise-crm",
      tags: ["Next.js", "GraphQL", "AWS"],
      delay: "100ms",
      borderClass: "border-t",
    },
    {
      index: "03.",
      title: "Neural Copilot",
      href: "/projects/neural-copilot",
      tags: ["Python", "OpenAI API", "TypeScript"],
      delay: "200ms",
      borderClass: "border-t border-b",
    },
  ] satisfies Project[],
};

export const experienceSection = {
  label: "03 / Experience",
  items: [
    {
      role: "Senior Engineer",
      period: "2022 — Present",
      company: "Kinetic Engineering",
      description:
        "Leading core infrastructure development and mentoring full-stack teams on scalable architecture patterns.",
      active: true,
    },
    {
      role: "Full-Stack Engineer",
      period: "2019 — 2022",
      company: "DevScale",
      description:
        "Developed high-performance web applications and automated CI/CD pipelines for enterprise-level clients.",
      delay: "100ms",
    },
  ] satisfies ExperienceItem[],
};

export const contactSection = {
  label: "04 / Get in Touch",
  prompt: "Ready to build something exceptional?",
  email: "hello@orsbiacsi.dev",
  socialLinks: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
  ] satisfies SocialLink[],
  cvHref: "#",
  attribution: "Designed & built by Örs Biacsi",
  copyright: "© 2024",
};
