"use client";

import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ANCHOR_OFFSET = 96;
const PAGE_TRANSITION_MS = 780;

export default function RouteEffects() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.resize();

    const hash = window.location.hash;
    if (!hash) {
      lenis?.scrollTo(0, { immediate: true });
      return;
    }

    let attempts = 0;
    let timeoutId = 0;
    let rafId = 0;

    const scrollToHash = () => {
      const target = document.querySelector(hash);

      if (target instanceof HTMLElement) {
        lenis?.scrollTo(target, { offset: -ANCHOR_OFFSET, duration: 1.2 });
        return;
      }

      if (attempts < 40) {
        attempts += 1;
        rafId = window.requestAnimationFrame(scrollToHash);
        return;
      }

      lenis?.scrollTo(0, { immediate: true });
    };

    timeoutId = window.setTimeout(scrollToHash, PAGE_TRANSITION_MS);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(rafId);
    };
  }, [pathname, lenis]);

  return null;
}
