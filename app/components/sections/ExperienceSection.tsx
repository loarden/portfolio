import type { ExperienceItem } from "../../data/portfolio";
import Parallax from "../ui/Parallax";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

type ExperienceEntryProps = ExperienceItem & {
  parallaxSpeed: number;
};

function ExperienceEntry({
  role,
  period,
  company,
  description,
  active = false,
  delay,
  parallaxSpeed,
}: ExperienceEntryProps) {
  return (
    <Parallax speed={parallaxSpeed}>
      <Reveal delay={delay} className="relative">
        <div
          className={`absolute -left-[37px] top-2 h-3 w-3 rounded-full ring-8 ring-background md:-left-[69px] ${
            active ? "bg-primary" : "bg-white/20"
          }`}
        />
        <div className="mb-4 flex flex-col justify-between md:flex-row md:items-baseline">
          <h3 className="font-headline-lg text-[32px] uppercase text-pure-white">
            {role}
          </h3>
          <span className="font-headline-lg text-[24px] text-muted-gray/40">
            {period}
          </span>
        </div>
        <p className="mb-4 font-label-md uppercase text-primary">{company}</p>
        <p className="font-body-md text-muted-gray">{description}</p>
      </Reveal>
    </Parallax>
  );
}

type ExperienceSectionProps = {
  label: string;
  items: ExperienceItem[];
};

export default function ExperienceSection({
  label,
  items,
}: ExperienceSectionProps) {
  return (
    <section className="py-32" id="experience">
      <SectionHeading label={label} />
      <div className="ml-auto max-w-3xl space-y-24 border-l border-white/10 pl-8 md:pl-16">
        {items.map((item, index) => (
          <ExperienceEntry
            key={`${item.company}-${item.role}`}
            {...item}
            parallaxSpeed={0.04 + index * 0.03}
          />
        ))}
      </div>
    </section>
  );
}
