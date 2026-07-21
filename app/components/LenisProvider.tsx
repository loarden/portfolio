"use client";

import { ReactLenis } from "lenis/react";
import ScrollReveal from "./ScrollReveal";

type LenisProviderProps = {
  children: React.ReactNode;
};

export default function LenisProvider({ children }: LenisProviderProps) {
  return (
    <>
      <ReactLenis
        root
        options={{
          autoRaf: true,
          anchors: {
            offset: 96,
          },
          lerp: 0.08,
          duration: 1.4,
          smoothWheel: true,
          touchMultiplier: 1.15,
          wheelMultiplier: 1,
        }}
      />
      {children}
      <ScrollReveal />
    </>
  );
}
