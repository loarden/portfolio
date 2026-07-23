"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

type PageTransitionTemplateProps = {
  children: React.ReactNode;
};

export default function PageTransitionTemplate({
  children,
}: PageTransitionTemplateProps) {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set([".page-transition", ".page-transition--inner"], {
        yPercent: -100,
      });
      return;
    }

    const timeline = gsap.timeline();

    timeline
      .to(".page-transition--inner", {
        yPercent: 0,
        duration: 0.25,
        ease: "power3.inOut",
      })
      .to(".page-transition--inner", {
        yPercent: -100,
        duration: 0.25,
        ease: "power3.inOut",
      })
      .to(
        ".page-transition",
        {
          yPercent: -100,
          duration: 0.3,
          ease: "power3.inOut",
        },
        "-=0.05",
      );
  });

  return (
    <>
      <div
        className="page-transition pointer-events-none fixed top-0 left-0 z-[100] h-screen w-screen bg-background"
        aria-hidden
      >
        <div className="page-transition--inner h-screen w-screen translate-y-full bg-primary" />
      </div>
      {children}
    </>
  );
}
