import Link from "next/link";
import type { Project } from "../../data/portfolio";
import Parallax from "../ui/Parallax";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import TechTag from "../ui/TechTag";

type ProjectRowProps = Project & {
  parallaxSpeed: number;
};

function ProjectRow({
  index,
  title,
  href,
  tags,
  delay,
  borderClass = "border-t",
  parallaxSpeed,
}: ProjectRowProps) {
  return (
    <Reveal delay={delay}>
      <Link
        href={href}
        className={`project-row group block ${borderClass} border-white/10 py-16`}
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
        {projects.map((project, index) => (
          <ProjectRow
            key={project.title}
            {...project}
            parallaxSpeed={0.06 + index * 0.02}
          />
        ))}
      </div>
    </section>
  );
}
