import { publicEvent } from "@/data/home";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function EventsArchive() { return <section id="events" className="events section-dark"><SectionHeading number="02" title="EVENTS" description="Moments that bring us together." /><article className="event-feature"><p className="event-index">01</p><PhotoSlot label="SparkFactory Ideathon" src="/images/ideathon.jpg" /><div className="event-copy"><p className="eyebrow">{publicEvent.type} · {publicEvent.venue}</p><h3>{publicEvent.name}</h3><p>{publicEvent.description}</p></div></article></section>; }
