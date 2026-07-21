"use client";

import { useEffect, useRef } from "react";

type Flake = {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
  phase: number;
  opacity: number;
};

export default function SnowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let flakes: Flake[] = [];
    let animationId = 0;

    const makeFlake = (spawnAtTop: boolean): Flake => ({
      x: Math.random() * width,
      y: spawnAtTop ? -10 : Math.random() * height,
      radius: Math.random() * 2 + 0.6,
      speed: Math.random() * 0.6 + 0.2,
      drift: Math.random() * 0.6 + 0.15,
      phase: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.5 + 0.2,
    });

    const paint = (flake: Flake) => {
      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
      ctx.fill();
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(140, Math.floor((width * height) / 14000));
      flakes = Array.from({ length: count }, () => makeFlake(false));

      if (reduceMotion) {
        ctx.clearRect(0, 0, width, height);
        flakes.forEach(paint);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const flake of flakes) {
        flake.y += flake.speed;
        flake.phase += 0.01;
        flake.x += Math.sin(flake.phase) * flake.drift;

        if (flake.y > height + 10) {
          Object.assign(flake, makeFlake(true));
        } else if (flake.x > width + 10) {
          flake.x = -10;
        } else if (flake.x < -10) {
          flake.x = width + 10;
        }

        paint(flake);
      }
      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduceMotion) {
      animationId = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
