import { partners } from "@/data/home";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";
export function Partners() { return <section id="partners" className="partners section-dark"><SectionHeading number="05" title="OUR PARTNERS" description="Grateful to collaborate with incredible organizations." /><div className="partner-list">{partners.map((partner) => <article key={partner.name}><Image src={partner.image} alt={`${partner.name} logo`} width={500} height={360} /><h3>{partner.name}</h3><p>{partner.description}</p></article>)}</div></section>; }
