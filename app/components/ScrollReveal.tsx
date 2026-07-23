"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function revealIfInView(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  if (rect.top < window.innerHeight - 50) {
    element.classList.add("active");
    return true;
  }

  return false;
}

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -50px 0px" },
    );

    for (const element of elements) {
      if (element.classList.contains("active")) continue;

      if (!revealIfInView(element)) {
        observer.observe(element);
      }
    }

    const retry = window.setTimeout(() => {
      for (const element of elements) {
        if (element.classList.contains("active")) continue;
        revealIfInView(element);
      }
    }, 450);

    return () => {
      window.clearTimeout(retry);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
