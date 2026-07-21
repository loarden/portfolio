import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";

const projects = [
  {
    index: "01.",
    title: "Warehouse Ops",
    href: "/projects/warehouse-ops",
    tags: ["React", "Node.js", "PostgreSQL"],
    delay: "0ms",
    border: "border-t",
  },
  {
    index: "02.",
    title: "Enterprise CRM",
    href: "/projects/enterprise-crm",
    tags: ["Next.js", "GraphQL", "AWS"],
    delay: "100ms",
    border: "border-t",
  },
  {
    index: "03.",
    title: "Neural Copilot",
    href: "/projects/neural-copilot",
    tags: ["Python", "OpenAI API", "TypeScript"],
    delay: "200ms",
    border: "border-t border-b",
  },
];

const expertise = [
  {
    icon: "terminal",
    title: "Full-Stack Dev",
    copy: "End-to-end engineering from reactive frontends to distributed backends and database optimization.",
    delay: "100ms",
    offset: "",
  },
  {
    icon: "neurology",
    title: "AI Integration",
    copy: "Integrating LLMs and neural architectures into production environments to solve real-world problems.",
    delay: "200ms",
    offset: "lg:ml-12",
  },
  {
    icon: "architecture",
    title: "System Architecture",
    copy: "Designing scalable cloud-native systems with a focus on reliability, security, and developer velocity.",
    delay: "300ms",
    offset: "lg:ml-24",
  },
];

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 z-50 flex w-full justify-end p-8">
        <button className="text-on-surface transition-colors hover:text-primary">
          <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>
            menu
          </span>
        </button>
      </nav>

      <main className="mx-auto max-w-[1200px] px-margin-mobile md:px-8">
        <section className="flex min-h-screen flex-col justify-center pt-24 pb-32">
          <div className="reveal mb-12 flex items-center gap-3">
            <span className="h-3 w-3 animate-pulse rounded-full bg-primary" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
              Available for full-time opportunities
            </span>
          </div>
          <h1
            className="reveal mb-12 font-display-lg-mobile text-display-lg-mobile uppercase text-pure-white md:font-display-lg md:text-display-lg"
            style={{ transitionDelay: "100ms" }}
          >
            Full-Stack
            <br />
            Engineer
          </h1>
          <p
            className="reveal max-w-2xl font-body-lg text-body-lg text-muted-gray"
            style={{ transitionDelay: "200ms" }}
          >
            Building robust, scalable applications across the stack. Focused on
            performance, precision, and high-impact digital experiences.
          </p>
        </section>

        <section className="py-32" id="about">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div className="reveal">
              <h2 className="mb-8 font-label-md text-label-md uppercase tracking-[0.2em] text-primary">
                01 / Expertise
              </h2>
              <h3 className="max-w-md font-headline-lg text-headline-lg uppercase text-pure-white">
                Bridging the gap between complex logic and clean design.
              </h3>
            </div>
            <div className="grid gap-6">
              {expertise.map((item) => (
                <div
                  key={item.title}
                  className={`expertise-card reveal border border-white/10 p-8 ${item.offset}`}
                  style={{ transitionDelay: item.delay }}
                >
                  <span
                    className="material-symbols-outlined mb-6 text-primary"
                    style={{ fontSize: "40px" }}
                  >
                    {item.icon}
                  </span>
                  <h4 className="mb-4 font-headline-lg text-[24px] uppercase text-pure-white">
                    {item.title}
                  </h4>
                  <p className="font-body-md text-muted-gray">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32" id="work">
          <h2 className="reveal mb-16 font-label-md text-label-md uppercase tracking-[0.2em] text-primary">
            02 / Selected Work
          </h2>
          <div className="space-y-0">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className={`project-row group reveal block ${project.border} border-white/10 py-16`}
                style={{ transitionDelay: project.delay }}
              >
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <span className="pt-4 font-headline-lg text-[32px] text-muted-gray/40">
                      {project.index}
                    </span>
                    <h3 className="project-title font-headline-xl text-headline-xl uppercase text-pure-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="ml-14 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm border border-white/10 bg-white/5 px-3 py-1 font-label-sm text-label-sm uppercase text-muted-gray"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-32" id="experience">
          <h2 className="reveal mb-16 font-label-md text-label-md uppercase tracking-[0.2em] text-primary">
            03 / Experience
          </h2>
          <div className="ml-auto max-w-3xl space-y-24 border-l border-white/10 pl-8 md:pl-16">
            <div className="reveal relative">
              <div className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-primary ring-8 ring-background md:-left-[69px]" />
              <div className="mb-4 flex flex-col justify-between md:flex-row md:items-baseline">
                <h3 className="font-headline-lg text-[32px] uppercase text-pure-white">
                  Senior Engineer
                </h3>
                <span className="font-headline-lg text-[24px] text-muted-gray/40">
                  2022 — Present
                </span>
              </div>
              <p className="mb-4 font-label-md uppercase text-primary">
                Kinetic Engineering
              </p>
              <p className="font-body-md text-muted-gray">
                Leading core infrastructure development and mentoring full-stack
                teams on scalable architecture patterns.
              </p>
            </div>
            <div className="reveal relative" style={{ transitionDelay: "100ms" }}>
              <div className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-white/20 ring-8 ring-background md:-left-[69px]" />
              <div className="mb-4 flex flex-col justify-between md:flex-row md:items-baseline">
                <h3 className="font-headline-lg text-[32px] uppercase text-pure-white">
                  Full-Stack Engineer
                </h3>
                <span className="font-headline-lg text-[24px] text-muted-gray/40">
                  2019 — 2022
                </span>
              </div>
              <p className="mb-4 font-label-md uppercase text-primary">DevScale</p>
              <p className="font-body-md text-muted-gray">
                Developed high-performance web applications and automated CI/CD
                pipelines for enterprise-level clients.
              </p>
            </div>
          </div>
        </section>

        <footer
          className="flex flex-col items-center border-t border-white/5 py-32 text-center"
          id="contact"
        >
          <div className="reveal mb-12">
            <h2 className="mb-8 font-label-md text-label-md uppercase tracking-[0.2em] text-primary">
              04 / Get in Touch
            </h2>
            <p className="mb-8 font-body-md text-muted-gray">
              Ready to build something exceptional?
            </p>
            <a
              className="block break-all font-headline-xl text-headline-xl leading-tight lowercase text-pure-white transition-colors hover:text-primary"
              href="mailto:hello@orsbiacsi.dev"
            >
              hello@orsbiacsi.dev
            </a>
          </div>
          <div
            className="reveal flex flex-col items-center gap-12 md:flex-row"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex gap-8">
              <a
                href="#"
                className="font-label-md uppercase text-on-surface transition-colors hover:text-primary"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="font-label-md uppercase text-on-surface transition-colors hover:text-primary"
              >
                GitHub
              </a>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 rounded-sm bg-primary px-8 py-4 font-label-md uppercase text-on-primary transition-opacity hover:opacity-90"
            >
              <span>Download CV</span>
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
                download
              </span>
            </a>
          </div>
          <div className="mt-32 flex w-full flex-col items-center justify-between gap-4 opacity-40 md:flex-row">
            <p className="font-label-sm uppercase tracking-widest">
              Designed &amp; built by Örs Biacsi
            </p>
            <p className="font-label-sm uppercase tracking-widest">© 2024</p>
          </div>
        </footer>
      </main>

      <ScrollReveal />
    </>
  );
}
