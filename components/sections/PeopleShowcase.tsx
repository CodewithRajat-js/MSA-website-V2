"use client";

import { coreTeam, pocTeam, ogTeam, headsTeam } from "@/data/home";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PeopleShowcase() {
  return (
    <section id="people" className="people section-dark">
      <SectionHeading number="03" title="THE PEOPLE" description="The minds and hearts behind the movement." />
      
      <div className="team-group">
        <header className="team-group-header">
          <p className="eyebrow">Leadership</p>
          <h3>Core Team</h3>
        </header>
        <div className="core-grid">
          {coreTeam.map((member) => (
            <PhotoSlot 
              key={member.name} 
              className="portrait-slot core-portrait" 
              label={member.name} 
              sublabel={member.role}
              src={member.image} 
              href={member.linkedin}
              objectPosition={(member as any).objectPosition}
            />
          ))}
        </div>
      </div>

      <div className="team-group">
        <header className="team-group-header">
          <p className="eyebrow">Management</p>
          <h3>Heads</h3>
        </header>
        <div className="marquee-container">
          <div className="marquee-content">
            {headsTeam.map((member) => (
              <PhotoSlot 
                key={member.name} 
                className="portrait-slot poc-portrait" 
                label={member.name} 
                sublabel={member.role}
                src={member.image} 
                href={member.linkedin}
                objectPosition={(member as any).objectPosition}
              />
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {headsTeam.map((member) => (
              <PhotoSlot 
                key={`${member.name}-dup`} 
                className="portrait-slot poc-portrait" 
                label={member.name} 
                sublabel={member.role}
                src={member.image} 
                href={member.linkedin}
                objectPosition={(member as any).objectPosition}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="team-group">
        <header className="team-group-header">
          <p className="eyebrow">Specialists</p>
          <h3>Points of Contact</h3>
        </header>
        <div className="marquee-container">
          <div className="marquee-content reverse">
            {pocTeam.map((member) => (
              <PhotoSlot 
                key={member.name} 
                className="portrait-slot poc-portrait" 
                label={member.name} 
                sublabel={member.role}
                src={member.image} 
                href={member.linkedin}
                objectPosition={(member as any).objectPosition}
              />
            ))}
          </div>
          <div className="marquee-content reverse" aria-hidden="true">
            {pocTeam.map((member) => (
              <PhotoSlot 
                key={`${member.name}-dup`} 
                className="portrait-slot poc-portrait" 
                label={member.name} 
                sublabel={member.role}
                src={member.image} 
                href={member.linkedin}
                objectPosition={(member as any).objectPosition}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="team-group">
        <header className="team-group-header">
          <p className="eyebrow">Legacy</p>
          <h3>The OGs</h3>
        </header>
        <div className="og-grid">
          {ogTeam.map((member) => (
            <PhotoSlot 
              key={member.name} 
              className="portrait-slot core-portrait" 
              label={member.name} 
              sublabel={member.role}
              src={member.image} 
              href={member.linkedin}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
