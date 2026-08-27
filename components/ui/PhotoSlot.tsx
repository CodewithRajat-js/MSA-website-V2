import Image from "next/image";

type PhotoSlotProps = Readonly<{ label: string; sublabel?: string; className?: string; src?: string; href?: string; objectPosition?: string }>;
export function PhotoSlot({ label, sublabel, className = "", src, href, objectPosition }: PhotoSlotProps) {
  const innerContent = (
    <>
      {src ? <Image className="photo-asset" src={src} alt={label} fill sizes="(max-width: 700px) 100vw, 60vw" style={objectPosition ? { objectPosition } : undefined} /> : null}
      <div className="photo-slot-copy"><span>MSA BIT JAIPUR</span><strong>{label}</strong>{sublabel ? <small>{sublabel}</small> : src ? null : <small>APPROVED PHOTOGRAPHY PENDING</small>}</div>
    </>
  );

  const containerClass = `photo-slot ${src ? "has-image" : ""} ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={containerClass} aria-label={`${label} profile`}>
        {innerContent}
      </a>
    );
  }

  return (
    <div className={containerClass} role={src ? undefined : "img"} aria-label={src ? undefined : `${label}. Approved MSA photography to be added.`}>
      {innerContent}
    </div>
  );
}
