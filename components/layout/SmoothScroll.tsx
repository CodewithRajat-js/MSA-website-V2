"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { getGsap } from "@/lib/motion";

type SmoothScrollProps = Readonly<{ children: React.ReactNode }>;

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");

    if (reducedMotion.matches || !desktop.matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      lerp: 0.1,
      smoothWheel: true,
      touchMultiplier: 1,
    });
    let frameId = 0;
    const { ScrollTrigger } = getGsap();
    const updateScrollTrigger = () => ScrollTrigger.update();
    lenis.on("scroll", updateScrollTrigger);

    const onFrame = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(onFrame);
    };

    frameId = requestAnimationFrame(onFrame);
    return () => {
      cancelAnimationFrame(frameId);
      lenis.off("scroll", updateScrollTrigger);
      lenis.destroy();
    };
  }, []);

  return children;
}
