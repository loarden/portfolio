import Link from "next/link";
import type { Project } from "../../data/portfolio";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import TechTag from "../ui/TechTag";

type ProjectRowProps = Project;

function ProjectRow({
  index,
  title,
  href,
  tags,
  delay,
  borderClass = "border-t",
}: ProjectRowProps) {
  return (
    <Reveal delay={delay}>
      <Link
        href={href}
        className={`project-row group block ${borderClass} border-white/10 py-16`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <span className="pt-4 font-headline-lg text-[32px] text-muted-gray/40">
              {index}
            </span>
            <h3 className="project-title font-headline-xl text-headline-xl uppercase text-pure-white">
              {title}
            </h3>
          </div>
          <div className="ml-14 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <TechTag key={tag} label={tag} />
            ))}
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

type WorkSectionProps = {
  label: string;
  projects: Project[];
};

export default function WorkSection({ label, projects }: WorkSectionProps) {
  return (
    <section className="py-32" id="work">
      <SectionHeading label={label} />
      <div className="space-y-0">
        {projects.map((project) => (
          <ProjectRow key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
