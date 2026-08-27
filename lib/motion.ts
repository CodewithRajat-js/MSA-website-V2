"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let configured = false;

export function getGsap() {
  if (!configured) {
    gsap.registerPlugin(ScrollTrigger);
    configured = true;
  }

  return { gsap, ScrollTrigger };
}
