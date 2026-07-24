export type Project = {
  index: string;
  title: string;
  href: string;
  image: string;
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

export type NavSection = {
  index: string;
  label: string;
  href: string;
};

export type SkillCategory = {
  icon: string;
  title: string;
  skills: string[];
};

export const navSections = [
  { index: "00", label: "Home", href: "/#home" },
  { index: "01", label: "About", href: "/#about-me" },
  { index: "02", label: "Skills", href: "#skills" },
  { index: "03", label: "Expertise", href: "/#about" },
  { index: "04", label: "Projects", href: "/#projects" },
  { index: "05", label: "Experience", href: "/#experience" },
  { index: "06", label: "Contact", href: "/#contact" },
] satisfies NavSection[];

export type HeroMetric = {
  value: string;
  label: string;
};

export const hero = {
  status: "Available for full-time opportunities",
  title: ["Full-Stack", "Engineer"] as const,
  description:
    "Building fast, scalable web applications with clean code and modern technologies.",
  metrics: [
    { value: "3+", label: "Years of Experience" },
    { value: "7+", label: "Completed Projects" },
    { value: "10+", label: "Technologies" },
  ] satisfies HeroMetric[],
};

export const aboutSection = {
  label: "00 / About Me",
  welcome: "Welcome",
  title: "Hi, I'm Örs.",
  description:
    "I'm a Full-Stack Software Engineer who enjoys turning complex problems into reliable, scalable products. I work across the stack — from polished interfaces to robust APIs and data layers — with a focus on clean code, performance, and maintainable architecture. Whether it's a business platform, an e-commerce experience, or an AI-powered workflow, I care about building software that feels great to use and holds up in production.",
};

export const expertiseSection = {
  label: "02 / Expertise",
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

export const skillsSection = {
  label: "01 / Skills",
  categories: [
    {
      icon: "web",
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      icon: "database",
      title: "Backend",
      skills: ["Node.js", "PHP", "PostgreSQL", "GraphQL", "RESTful APIs", "MongoDB"],
    },
    {
      icon: "construction",
      title: "Tools",
      skills: ["Git", "Docker", "CI/CD", "Cursor", "OpenAI", "Anthropic"],
    },
  ] satisfies SkillCategory[],
};

export const workSection = {
  label: "03 / Selected Projects",
  projects: [
    {
      index: "01.",
      title: "SCOPE CMS",
      href: "/projects/scope",
      image: "/projects/scope/hero.png",
      tags: ["React", "Next.js", "Redux", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "CI/CD"],
      borderClass: "border-t",
    },
    {
      index: "02.",
      title: "FRIEZE Portal",
      href: "/projects/frieze",
      image: "/projects/frieze/hero.png",
      tags: ["TypeScript", "Next.js", "Redux", "Node.js", "Express", "MongoDB"],
      borderClass: "border-t",
    },
    {
      index: "03.",
      title: "Heali",
      href: "/projects/heali",
      image: "/projects/heali/hero.png",
      tags: ["React", "Next.js", "Redux", "Node.js", "Express", "TypeScript", "MariaDB", "Redis", "OpenAI", "Auth0"],
      delay: "100ms",
      borderClass: "border-t",
    },
    {
      index: "04.",
      title: "Ainslie + Ainslie",
      href: "/projects/ainslie-ainslie",
      image: "/projects/ainslie/hero.png",
      tags: ["Shopify", "Liquid", "JavaScript", "CSS", "HTML"],
      delay: "200ms",
      borderClass: "border-t border-b",
    },
  ] satisfies Project[],
};

export const experienceSection = {
  label: "04 / Experience",
  items: [
    {
      role: "Full-Stack Engineer",
      period: "2025 — Present",
      company: "DRB Services Kft.",
      description:
        "Building scalable business applications and AI-powered solutions, developing robust APIs, and creating seamless user experiences across the full technology stack.",
      active: true,
    },
    {
      role: "Full-Stack Engineer",
      period: "2023 — 2025",
      company: "Pallatrax Hungary Kft.",
      description:
        "Developed and maintained e-commerce platforms, CRM systems, and warehouse management applications, focusing on performance, usability, and system reliability.",
      delay: "100ms",
    },
  ] satisfies ExperienceItem[],
};

export const contactSection = {
  label: "05 / Get in Touch",
  prompt: "Ready to build something exceptional?",
  email: "biacsi.ors@gmail.com",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/örs-biacsi/" },
    { label: "GitHub", href: "https://github.com/loarden" },
  ] satisfies SocialLink[],
  cvHref: "/assets/Ors_Biacsi_CV_ENG.pdf",
  attribution: "Designed & built by Örs Biacsi",
  copyright: "© 2026",
};
