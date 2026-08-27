type SectionHeadingProps = Readonly<{ number: string; title: string; description?: string }>;
export function SectionHeading({ number, title, description }: SectionHeadingProps) { return <div className="section-heading"><p className="section-number">{number}</p><div><h2>{title}</h2>{description ? <p>{description}</p> : null}</div></div>; }
