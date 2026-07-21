import type { ExpertiseItem } from "../../data/portfolio";
import MaterialIcon from "../ui/MaterialIcon";
import Reveal from "../ui/Reveal";

type ExpertiseCardProps = ExpertiseItem;

function ExpertiseCard({
  icon,
  title,
  description,
  delay,
  offsetClass = "",
}: ExpertiseCardProps) {
  return (
    <Reveal
      delay={delay}
      className={`expertise-card border border-white/10 p-8 ${offsetClass}`}
    >
      <MaterialIcon name={icon} size={40} className="mb-6 text-primary" />
      <h4 className="mb-4 font-headline-lg text-[24px] uppercase text-pure-white">
        {title}
      </h4>
      <p className="font-body-md text-muted-gray">{description}</p>
    </Reveal>
  );
}

type ExpertiseSectionProps = {
  label: string;
  headline: string;
  items: ExpertiseItem[];
};

export default function ExpertiseSection({
  label,
  headline,
  items,
}: ExpertiseSectionProps) {
  return (
    <section className="py-32" id="about">
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <Reveal>
          <h2 className="mb-8 font-label-md text-label-md uppercase tracking-[0.2em] text-primary">
            {label}
          </h2>
          <h3 className="max-w-md font-headline-lg text-headline-lg uppercase text-pure-white">
            {headline}
          </h3>
        </Reveal>
        <div className="grid gap-6">
          {items.map((item) => (
            <ExpertiseCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
