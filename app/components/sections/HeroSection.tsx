import { hero } from "../../data/portfolio";
import Reveal from "../ui/Reveal";

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col justify-center pt-24 pb-32">
      <Reveal className="mb-12 flex items-center gap-3">
        <span className="h-3 w-3 animate-pulse rounded-full bg-primary" />
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
          {hero.status}
        </span>
      </Reveal>
      <Reveal
        delay="100ms"
        className="mb-12 font-display-lg-mobile text-display-lg-mobile uppercase text-pure-white md:font-display-lg md:text-display-lg"
      >
        <h1>
          {hero.title[0]}
          <br />
          {hero.title[1]}
        </h1>
      </Reveal>
      <Reveal
        delay="200ms"
        className="max-w-2xl font-body-lg text-body-lg text-muted-gray"
      >
        <p>{hero.description}</p>
      </Reveal>
    </section>
  );
}
