"use client";

import { useLayoutEffect } from "react";
import { getGsap } from "@/lib/motion";

export function MotionController() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { gsap } = getGsap();
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isMobile } = context.conditions as { isDesktop: boolean; isMobile: boolean };
        const yOffset = isMobile ? 24 : 50;
        const parallaxY = isMobile ? 6 : 12;
        const insetReveal = isMobile ? "inset(2% 2% 2% 2%)" : "inset(4% 4% 4% 4%)";

        // Hero entrance
        gsap.from(".hero h1", { autoAlpha: 0, y: yOffset, duration: 1.4, ease: "expo.out", delay: 0.1 });
        gsap.from(".hero-meta", { autoAlpha: 0, y: isMobile ? 12 : 20, duration: 1.2, ease: "expo.out", delay: 0.5 });
        gsap.from(".hero-image", { scale: 1.1, duration: 2, ease: "expo.out" });
        
        // Hero parallax
        gsap.to(".hero-image", { yPercent: parallaxY, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

        // Generic section reveals
        [".about-content", ".event-feature", ".people-stage", ".project-feature"].forEach((selector) => {
          gsap.from(selector, { autoAlpha: 0, y: yOffset, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: selector, start: "top 82%", once: true } });
        });

        // Photo slot inset reveals
        gsap.utils.toArray(".photo-slot").forEach((slot: unknown) => {
          const el = slot as Element;
          gsap.fromTo(
            el,
            { clipPath: insetReveal, autoAlpha: 0 },
            { clipPath: "inset(0% 0% 0% 0%)", autoAlpha: 1, duration: 1.5, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 85%", once: true } }
          );
        });

        // Join CTA
        gsap.from(".join-cta > div", { autoAlpha: 0, y: yOffset, duration: 1.2, ease: "expo.out", scrollTrigger: { trigger: ".join-cta", start: "top 75%", once: true } });
      }
    );

    return () => mm.revert();
  }, []);

  return null;
}
