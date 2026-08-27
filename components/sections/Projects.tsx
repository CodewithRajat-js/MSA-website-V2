import { projects } from "@/data/home";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function Projects() { 
  return (
    <section id="projects" className="projects section-dark">
      <SectionHeading number="04" title="PROJECTS" description="Ideas turned into impact." />
      
      <div style={{ padding: "10rem 0", display: "flex", justifyContent: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "60%", height: "80%", background: "radial-gradient(circle, rgba(0, 120, 212, 0.15) 0%, transparent 70%)", filter: "blur(40px)" }} />
        
        <h3 style={{ 
          fontSize: "clamp(3rem, 10vw, 8rem)", 
          fontWeight: 800, 
          letterSpacing: "-0.05em", 
          margin: 0,
          background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          position: "relative",
          zIndex: 1
        }}>
          We're cooking.
        </h3>
      </div>
    </section>
  ); 
}
