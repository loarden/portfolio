"use client";

import { useLenis } from "lenis/react";
import { useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useLenis((lenis) => {
    const bar = barRef.current;
    if (!bar) return;

    const progress = lenis.limit > 0 ? lenis.scroll / lenis.limit : 0;
    bar.style.transform = `scaleX(${progress})`;
  });

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div ref={barRef} className="scroll-progress-bar" />
    </div>
  );
}
