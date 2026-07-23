"use client";

import { useLenis } from "lenis/react";
import Image from "next/image";
import { useRef } from "react";
import type { ProjectGalleryItem } from "../../data/projects";
import Reveal from "../ui/Reveal";

type ProjectGalleryProps = {
  items: ProjectGalleryItem[];
};

function GalleryImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLenis(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const speed = 0.05;
    const offset = (window.innerHeight - rect.top) * speed;
    el.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
  });

  return (
    <div ref={ref} className={`project-gallery-image ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        className="h-auto w-full object-cover"
        sizes="(min-width: 1024px) 1200px, 100vw"
      />
    </div>
  );
}

export default function ProjectGallery({ items }: ProjectGalleryProps) {
  const feature = items.find((item) => item.type === "feature");
  const cards = items.filter((item) => item.type === "card");
  const full = items.find((item) => item.type === "full");

  return (
    <section className="project-gallery-layer space-y-8 md:space-y-12">
      {feature ? (
        <Reveal className="project-gallery-item overflow-hidden rounded-xl border border-white/5 bg-deep-charcoal">
          <GalleryImage src={feature.src} alt={feature.alt} />
        </Reveal>
      ) : null}

      {cards.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {cards.map((item, index) =>
            item.type === "card" ? (
              <Reveal
                key={item.title}
                delay={`${(index + 1) * 100}ms`}
                className="project-gallery-item glass-panel overflow-hidden rounded-xl border border-white/5"
              >
                <div className="p-8 pb-0">
                  <span className="mb-2 block font-label-sm text-label-sm uppercase text-primary">
                    {item.label}
                  </span>
                  <h4 className="mb-4 font-headline-lg text-[32px] uppercase text-pure-white">
                    {item.title}
                  </h4>
                </div>
                <GalleryImage src={item.src} alt={item.alt} />
              </Reveal>
            ) : null,
          )}
        </div>
      ) : null}

      {full ? (
        <Reveal
          delay="300ms"
          className="project-gallery-item overflow-hidden rounded-xl border border-white/5 bg-deep-charcoal"
        >
          <GalleryImage src={full.src} alt={full.alt} />
        </Reveal>
      ) : null}
    </section>
  );
}
