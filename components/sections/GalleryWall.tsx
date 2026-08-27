"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { moments } from "@/data/home";

export function GalleryWall() {
  const [selected, setSelected] = useState<number | null>(null);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return <>
    <div className="moment-wall">{moments.map((moment, index) => <button className="moment-image" type="button" key={moment.src} onClick={() => setSelected(index)} aria-label={`Open ${moment.alt}`}><Image src={moment.src} alt={moment.alt} fill sizes="(max-width: 700px) 50vw, 33vw" /></button>)}</div>
    {selected !== null ? <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded gallery image" onClick={() => setSelected(null)}><button className="lightbox-close" type="button" onClick={() => setSelected(null)}>CLOSE ×</button><div className="lightbox-image" onClick={(event) => event.stopPropagation()}><Image src={moments[selected].src} alt={moments[selected].alt} fill sizes="90vw" priority /></div></div> : null}
  </>;
}
