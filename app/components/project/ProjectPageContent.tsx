import type { ProjectDetail } from "../../data/projects";
import TransitionLink from "../ui/TransitionLink";
import MaterialIcon from "../ui/MaterialIcon";
import Reveal from "../ui/Reveal";
import ProjectGallery from "./ProjectGallery";

type ProjectPageContentProps = {
  project: ProjectDetail;
};

export default function ProjectPageContent({ project }: ProjectPageContentProps) {
  return (
    <>
      <main className="project-page mx-auto max-w-[1200px] px-margin-mobile pb-32 pt-28 md:px-8 md:pt-36">
        <section className="mb-24">
          <div className="mb-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <TransitionLink
                href="/#projects"
                className="mb-6 inline-flex items-center gap-2 font-label-md text-label-md text-primary transition-transform hover:-translate-x-1"
              >
                <MaterialIcon name="arrow_back" size={20} />
                Back
              </TransitionLink>
              <h1 className="font-display-lg-mobile text-display-lg-mobile uppercase leading-none tracking-tight text-pure-white md:text-[120px] md:leading-[0.9]">
                {project.title}
              </h1>
            </div>
            {project.liveUrl && (
              <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center gap-3 rounded-full bg-pure-white px-8 py-4 font-label-md text-label-md text-background transition-transform hover:scale-105 active:scale-95"
            >
              Live Preview
              <MaterialIcon
                name="open_in_new"
                size={20}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            )}
          </div>
        </section>

        <div className="project-overlap-stage">
          <div className="project-content-layer">
            <Reveal className="mb-32 grid grid-cols-1 gap-12 border-t border-white/10 pt-16 md:grid-cols-12">
              <div className="md:col-span-3">
                <h3 className="mb-4 font-label-sm text-label-sm uppercase tracking-widest text-primary">
                  Year
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface">
                  {project.year}
                </p>
              </div>
              <div className="md:col-span-4">
                <h3 className="mb-4 font-label-sm text-label-sm uppercase tracking-widest text-primary">
                  Tech & Technique
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass-panel rounded-full px-3 py-1 font-label-sm text-label-sm text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5">
                <h3 className="mb-4 font-label-sm text-label-sm uppercase tracking-widest text-primary">
                  The Challenge
                </h3>
                <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                  {project.challenge}
                </p>
              </div>
            </Reveal>

            <Reveal delay="100ms" className="mb-16 md:mb-32">
              <div className="glass-panel relative overflow-hidden rounded-xl p-6 sm:p-8 md:p-12 lg:p-16">
                <div className="absolute top-0 right-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/5 blur-[80px] md:h-64 md:w-64 md:blur-[100px]" />
                <div className="relative z-10 flex flex-col gap-8 md:grid md:grid-cols-12 md:gap-12">
                  <div className="border-b border-white/10 pb-8 md:col-span-4 md:border-b-0 md:pb-0">
                    <h2 className="mb-3 font-headline-lg text-[clamp(1.75rem,7vw,3rem)] uppercase leading-tight text-pure-white">
                      {project.role.title}
                    </h2>
                    <p className="font-label-md text-label-md text-primary">
                      {project.role.subtitle}
                    </p>
                  </div>
                  <div className="md:col-span-8">
                    <ul className="space-y-6 md:space-y-8">
                      {project.role.items.map((item) => (
                        <li
                          key={item.index}
                          className="group grid grid-cols-[2.5rem_1fr] gap-x-3 gap-y-1 sm:flex sm:items-start sm:gap-6"
                        >
                          <span className="font-label-sm text-label-sm text-primary sm:mt-2">
                            {item.index}
                          </span>
                          <p className="font-body-md text-body-md leading-relaxed text-on-surface transition-colors group-hover:text-primary md:font-body-lg md:text-body-lg md:leading-normal">
                            {item.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <ProjectGallery items={project.gallery} />
        </div>
      </main>
    </>
  );
}
