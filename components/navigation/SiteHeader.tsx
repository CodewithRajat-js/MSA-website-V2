"use client";

import { useState } from "react";
import Image from "next/image";
import { navigationItems } from "@/data/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="site-mark" href="#top" aria-label="MSA BIT Jaipur home"><Image src="/images/brand/msa-logo-transparent.png" alt="" width={34} height={32} priority />MSA BIT JAIPUR</a>
      <nav id="mobile-navigation" className={menuOpen ? "is-open" : ""} aria-label="Primary navigation">
        <ul className="nav-list">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    <a className="join-link" href="#apply">JOIN US <span aria-hidden="true">↗</span></a>
      <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
        <span className="sr-only">Toggle navigation</span><span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
      </button>
    </header>
  );
}
