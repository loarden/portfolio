import Parallax from "../ui/Parallax";
import Reveal from "../ui/Reveal";

type AboutSectionProps = {
  label: string;
  welcome: string;
  title: string;
  description: string;
};

export default function AboutSection({
  label,
  welcome,
  title,
  description,
}: AboutSectionProps) {
  return (
    <section className="py-32" id="about-me">
      <Reveal>
        <h2 className="mb-16 font-label-md text-label-md uppercase tracking-[0.2em] text-primary">
          {label}
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <Parallax speed={0.03} className="lg:col-span-5">
          <Reveal delay="100ms">
            <p className="mb-6 font-label-sm text-label-sm uppercase tracking-[0.3em] text-on-surface-variant">
              {welcome}
            </p>
            <h3 className="font-headline-xl text-[clamp(2.5rem,6vw,4rem)] uppercase leading-none text-pure-white">
              {title}
            </h3>
          </Reveal>
        </Parallax>

        <Parallax speed={0.05} className="lg:col-span-7">
          <Reveal delay="200ms">
            <div className="about-intro border-l border-white/10 pl-8 md:pl-12">
              <p className="font-body-lg text-body-lg leading-relaxed text-muted-gray">
                {description}
              </p>
            </div>
          </Reveal>
        </Parallax>
      </div>
    </section>
  );
}
