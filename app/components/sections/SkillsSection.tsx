import type { SkillCategory } from "../../data/portfolio";
import MaterialIcon from "../ui/MaterialIcon";
import Parallax from "../ui/Parallax";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import TechTag from "../ui/TechTag";

type SkillCardProps = SkillCategory & {
  delay?: string;
  parallaxSpeed: number;
};

function SkillCard({
  icon,
  title,
  skills,
  delay,
  parallaxSpeed,
}: SkillCardProps) {
  return (
    <Parallax speed={parallaxSpeed}>
      <Reveal
        delay={delay}
        className="expertise-card border border-white/10 p-8"
      >
        <MaterialIcon name={icon} size={40} className="mb-6 text-primary" />
        <h4 className="mb-4 font-headline-lg text-[24px] uppercase text-pure-white">
          {title}
        </h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <TechTag key={skill} label={skill} />
          ))}
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
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {categories.map((category, index) => (
          <SkillCard
            key={category.title}
            {...category}
            delay={index > 0 ? `${index * 100}ms` : undefined}
            parallaxSpeed={0.04 + index * 0.02}
          />
        ))}
      </div>
    </section>
  );
}
