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
  liveUrl: string;
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
  epikcart: {
    slug: "epikcart",
    title: "Epikcart",
    year: "2023",
    liveUrl: "https://demo.epikcart.siphertech.com/",
    tags: [
      "React",
      "Redux",
      "Tailwind CSS",
      "RTK Query",
      "Framer Motion",
      "i18n",
    ],
    challenge:
      "Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.",
    role: {
      title: "My Role",
      subtitle: "Lead Frontend Developer",
      items: [
        {
          index: "01",
          text: "Built the frontend architecture from scratch using React, Redux, and Tailwind CSS for high-performance rendering.",
        },
        {
          index: "02",
          text: "Developed complex dynamic filtering logic for the product search engine with admin-configurable parameters.",
        },
        {
          index: "03",
          text: "Architected multi-language support (i18n) and Right-to-Left (RTL) layout handling for global market expansion.",
        },
        {
          index: "04",
          text: "Collaborated closely with UI/UX designers to translate high-fidelity Figma mockups into pixel-perfect interactive code.",
        },
      ],
    },
    gallery: [
      {
        type: "feature",
        src: "/projects/epikcart/hero.jpg",
        alt: "Epikcart e-commerce hero section with luxury furniture storefront interface",
      },
      {
        type: "card",
        label: "System Logic",
        title: "Filtering & Search",
        src: "/projects/epikcart/filtering.jpg",
        alt: "Epikcart product filtering sidebar with range sliders and category filters",
      },
      {
        type: "card",
        label: "User Experience",
        title: "Inventory Dashboard",
        src: "/projects/epikcart/dashboard.jpg",
        alt: "Epikcart inventory management dashboard with charts and data tables",
      },
      {
        type: "full",
        src: "/projects/epikcart/responsive.jpg",
        alt: "Epikcart responsive mockup across mobile, tablet, and desktop devices",
      },
    ],
  },
};

export const projectSlugs = Object.keys(projects);

export function getProject(slug: string): ProjectDetail | undefined {
  return projects[slug];
}
