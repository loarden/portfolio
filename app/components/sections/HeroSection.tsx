import { hero } from "../../data/portfolio";
import Parallax from "../ui/Parallax";
import Reveal from "../ui/Reveal";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col pt-24 pb-10 md:pb-12"
      id="home"
    >
      <div className="flex flex-1 flex-col justify-center">
        <Parallax speed={0.04}>
          <Reveal className="mb-12 flex items-center gap-3">
            <span className="h-3 w-3 animate-pulse rounded-full bg-primary" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
              {hero.status}
            </span>
          </Reveal>
        </Parallax>
        <Parallax speed={0.14}>
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
        </Parallax>
        <Parallax speed={0.08}>
          <Reveal
            delay="200ms"
            className="max-w-2xl font-body-lg text-body-lg text-muted-gray"
          >
            <p>{hero.description}</p>
          </Reveal>
        </Parallax>
      </div>

      <Parallax speed={0.05}>
        <Reveal
          delay="300ms"
          className="mt-10 w-full md:absolute md:right-0 md:bottom-12 md:mt-0 md:w-auto"
        >
          <div className="hero-metrics flex flex-row flex-wrap items-start justify-center gap-6 sm:gap-8 md:justify-end md:gap-10">
            {hero.metrics.map((metric) => (
              <div
                key={metric.label}
                className="min-w-[5.5rem] text-center md:text-right"
              >
                <p className="font-headline-lg text-[clamp(2rem,6vw,3rem)] leading-none text-pure-white">
                  {metric.value}
                </p>
                <p className="mt-2 font-label-sm text-label-sm uppercase leading-snug tracking-widest text-muted-gray">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Parallax>
    </section>
  );
}
