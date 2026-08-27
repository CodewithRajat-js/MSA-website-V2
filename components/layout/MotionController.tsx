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

        if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
        
        gsap.fromTo(".hero h1, .hero p, .hero .button-link", 
          { y: 40, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power3.out" }
        );
        
        gsap.to(".hero-brand", {
          yPercent: 50,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
        });
        
        gsap.utils.toArray<HTMLElement>(".about-content > div, .project-feature, .partner-list > div, .moment-wall .photo-slot").forEach((el) => {
          gsap.fromTo(el, 
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 85%" } }
          );
        });
        
        gsap.utils.toArray<HTMLElement>(".photo-slot-inset").forEach((el) => {
          gsap.fromTo(el,
            { clipPath: "inset(100% 0 0 0)" },
            { clipPath: "inset(0% 0 0 0)", duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 80%" } }
          );
        });
        
        gsap.fromTo(".join-cta > div",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".join-cta", start: "top 70%" } }
        );
        }
      }
    );

    return () => mm.revert();
  }, []);

  return null;
}
