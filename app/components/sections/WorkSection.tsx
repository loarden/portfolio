"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "../../data/portfolio";
import Parallax from "../ui/Parallax";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import TechTag from "../ui/TechTag";
import TransitionLink from "../ui/TransitionLink";

type ProjectRowProps = Project & {
  parallaxSpeed: number;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
};

function ProjectRow({
  index,
  title,
  href,
  tags,
  delay,
  borderClass = "border-t",
  parallaxSpeed,
  isActive,
  onActivate,
  onDeactivate,
}: ProjectRowProps) {
  return (
    <Reveal delay={delay}>
      <TransitionLink
        href={href}
        className={`project-row group block ${borderClass} border-white/10 py-16 ${
          isActive ? "is-active" : ""
        }`}
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
        onFocus={onActivate}
        onBlur={onDeactivate}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <Parallax speed={parallaxSpeed * 0.6} className="shrink-0">
              <span className="pt-4 font-headline-lg text-[32px] text-muted-gray/40">
                {index}
              </span>
            </Parallax>
            <Parallax speed={parallaxSpeed}>
              <h3 className="project-title font-headline-xl text-headline-xl uppercase text-pure-white">
                {title}
              </h3>
            </Parallax>
          </div>
          <div className="ml-14 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <TechTag key={tag} label={tag} />
            ))}
          </div>
        </div>
      </TransitionLink>
    </Reveal>
  );
}

type ProjectPreviewProps = {
  project: Project | null;
};

function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <div
      className="project-preview pointer-events-none"
      data-visible={project !== null}
      aria-hidden={!project}
    >
      {project ? (
        <div key={project.title} className="project-preview-frame">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={640}
            height={400}
            className="project-preview-image"
            sizes="(min-width: 1280px) 380px, 320px"
          />
        </div>
      ) : null}
    </div>
  );
}

type WorkSectionProps = {
  label: string;
  projects: Project[];
};

export default function WorkSection({ label, projects }: WorkSectionProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section className="relative py-32" id="projects">
      <SectionHeading label={label} />
      <ProjectPreview project={activeProject} />
      <div className="space-y-0 lg:max-w-[58%]">
        {projects.map((project, index) => (
          <ProjectRow
            key={project.title}
            {...project}
            parallaxSpeed={0.06 + index * 0.02}
            isActive={activeProject?.title === project.title}
            onActivate={() => setActiveProject(project)}
            onDeactivate={() =>
              setActiveProject((current) =>
                current?.title === project.title ? null : current,
              )
            }
          />
        ))}
      </div>
    </section>
  );
}
