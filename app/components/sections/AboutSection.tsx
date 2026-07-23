import Parallax from "../ui/Parallax";
import Reveal from "../ui/Reveal";

type AboutSectionProps = {
  label: string;
  bio: string;
};

export default function AboutSection({ label, bio }: AboutSectionProps) {
  return (
    <section className="py-32" id="about-me">
      <Parallax speed={0.03}>
        <Reveal>
          <h2 className="mb-8 font-label-md text-label-md uppercase tracking-[0.2em] text-primary">
            {label}
          </h2>
          <p className="max-w-3xl font-headline-lg text-headline-lg uppercase text-pure-white">
            {bio}
          </p>
        </Reveal>
      </Parallax>
    </section>
  );
}
