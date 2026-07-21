import type { SkillCategory } from "../../data/portfolio";
import Parallax from "../ui/Parallax";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import TechIcon from "../ui/TechIcon";

type SkillCategoryBlockProps = SkillCategory & {
  delay?: string;
  parallaxSpeed: number;
};

function SkillCategoryBlock({
  title,
  skills,
  delay,
  parallaxSpeed,
}: SkillCategoryBlockProps) {
  return (
    <Parallax speed={parallaxSpeed}>
      <Reveal delay={delay}>
        <div className="skill-category">
          <h3 className="mb-6 font-label-md text-label-md uppercase tracking-[0.2em] text-primary">
            {title}
          </h3>
          <ul className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li key={skill.name}>
                <span className="skill-chip">
                  <TechIcon name={skill.icon} size={20} />
                  <span>{skill.name}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Parallax>
  );
}

type SkillsSectionProps = {
  label: string;
  categories: SkillCategory[];
};

export default function SkillsSection({
  label,
  categories,
}: SkillsSectionProps) {
  return (
    <section className="py-32" id="skills">
      <SectionHeading label={label} />
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
        {categories.map((category, index) => (
          <SkillCategoryBlock
            key={category.title}
            {...category}
            delay={index > 0 ? `${index * 100}ms` : undefined}
            parallaxSpeed={0.03 + index * 0.02}
          />
        ))}
      </div>
    </section>
  );
}
