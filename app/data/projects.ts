export type ProjectRoleItem = {
  index: string;
  text: string;
};

export type ProjectGalleryItem =
  | {
    type: "feature" | "full";
    src: string;
    alt: string;
  }
  | {
    type: "card";
    src: string;
    alt: string;
    label: string;
    title: string;
  };

export type ProjectDetail = {
  slug: string;
  title: string;
  year: string;
  liveUrl?: string;
  tags: string[];
  challenge: string;
  role: {
    title: string;
    subtitle: string;
    items: ProjectRoleItem[];
  };
  gallery: ProjectGalleryItem[];
};

export const projects: Record<string, ProjectDetail> = {
  scope: {
    slug: "scope",
    title: "SCOPE CMS",
    year: "2026",
    liveUrl: "https://scope-art.com/",
    tags: [
      "React",
      "Next.js",
      "Redux",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "CI/CD",
    ],
    challenge:
      "The main challenge was building the entire platform from scratch, including a custom CMS that communicates directly with a Supabase database. I designed a scalable architecture, implemented secure content management, and ensured seamless synchronization between the backend and frontend while maintaining high performance and long-term maintainability.",
    role: {
      title: "My Role",
      subtitle: "Full-Stack Engineer",
      items: [
        {
          index: "01",
          text: "Designed and developed the full-stack application from scratch.",
        },
        {
          index: "02",
          text: "Built a custom CMS with secure authentication and content management.",
        },
        {
          index: "03",
          text: "Designed the Supabase database schema and implemented backend APIs.",
        },
        {
          index: "04",
          text: "Optimized performance and created a scalable, maintainable architecture for future growth.",
        },
      ],
    },
    gallery: [
      {
        type: "feature",
        src: "/projects/scope/about.png",
        alt: "Scope CMS about page with information about the company",
      },
      {
        type: "full",
        src: "/projects/scope/visit.png",
        alt: "Scope CMS visit page with information about the visit",
      },
    ],
  },
  heali: {
    slug: "heali",
    title: "Heali",
    year: "2025",
    tags: [
      "React",
      "Next.js",
      "Redux",
      "TypeScript",
      "MariaDB",
      "Redis",
      "OpenAI",
      "Auth0",
    ],
    challenge:
      "One of the main challenges was developing a scalable platform capable of processing complex nutritional data and calculating dietary scores with accuracy. The application also required integrating multiple data sources while maintaining high performance, reliability, and an intuitive user experience for institutional food service providers.",
    role: {
      title: "My Role",
      subtitle: "Full-Stack Engineer",
      items: [
        {
          index: "01",
          text: "Developed and delivered new features across the full technology stack.",
        },
        {
          index: "02",
          text: "Built interactive data visualizations and analytics dashboards.",
        },
        {
          index: "03",
          text: "Implemented AI-powered functionality to enhance data analysis and user workflows.",
        },
        {
          index: "04",
          text: "Optimized backend services and database queries to improve performance and scalability.",
        },
      ],
    },
    gallery: [
      {
        type: "feature",
        src: "/projects/heali/login.png",
        alt: "Heali login page with email and password input fields",
      }
    ],
  },
  "ainslie-ainslie": {
    slug: "ainslie-ainslie",
    title: "Ainslie + Ainslie",
    year: "2025",
    liveUrl: "https://ainslieainslie.com/",
    tags: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CSS",
      "HTML",
    ],
    challenge:
      "This project is a Shopify-powered supply e-commerce store focused on delivering a seamless online shopping experience. The main challenge was extending the existing storefront with new design features, custom Shopify widgets, and tailored pages while maintaining performance, responsiveness, and a consistent user experience.",
    role: {
      title: "My Role",
      subtitle: "Full-Stack Developer",
      items: [
        {
          index: "01",
          text: "Implemented new UI components and design features across the storefront.",
        },
        {
          index: "02",
          text: "Developed custom Shopify sections, widgets, and reusable components.",
        },
        {
          index: "03",
          text: "Built and customized landing pages to match design specifications.",
        },
        {
          index: "04",
          text: "Enhanced the user experience while maintaining performance and responsive design.",
        },
      ],
    },
    gallery: [
      {
        type: "feature",
        src: "/projects/ainslie/ainslie-ainslie.png",
        alt: "Epikcart e-commerce hero section with luxury furniture storefront interface",
      },
      {
        type: "full",
        src: "/projects/ainslie/reviews.png",
        alt: "Epikcart responsive mockup across mobile, tablet, and desktop devices",
      },
    ],
  },
  "frieze": {
    slug: "frieze",
    title: "Frieze Portal",
    year: "2025",
    tags: [
      "TypeScript",
      "Next.js",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    challenge:
      "This project is a custom portal for managing art fair and gallery applications. The main challenge was implementing new functionality while maintaining a reliable and intuitive experience for galleries, artists, and administrators throughout the application process.",
    role: {
      title: "My Role",
      subtitle: "Full-Stack Developer",
      items: [
        {
          index: "01",
          text: "Implemented new features across the application.",
        },
        {
          index: "02",
          text: "Developed enhancements for the gallery and fair application workflows.",
        },
        {
          index: "03",
          text: "Fixed bugs and improved application stability.",
        },
        {
          index: "04",
          text: "Collaborated with the team to deliver reliable, high-quality releases.",
        },
      ],
    },
    gallery: [
      {
        type: "feature",
        src: "/projects/frieze/hero.png",
        alt: "Epikcart e-commerce hero section with luxury furniture storefront interface",
      },
    ],
  },
};

export const projectSlugs = Object.keys(projects);

export function getProject(slug: string): ProjectDetail | undefined {
  return projects[slug];
}
