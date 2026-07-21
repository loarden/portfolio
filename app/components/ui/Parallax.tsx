"use client";

import { useLenis } from "lenis/react";
import { useEffect, useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

export default function Parallax({
  children,
  speed = 0.1,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useLenis(() => {
    const node = ref.current;
    if (!node || reducedMotion.current) return;

    const rect = node.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementCenter = rect.top + rect.height / 2;
    const distanceFromCenter = elementCenter - viewportHeight / 2;
    const y = distanceFromCenter * speed;

    node.style.transform = `translate3d(0, ${y}px, 0)`;
  });

  return (
    <div
      ref={ref}
      data-parallax
      className={className}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
