import { microsoftFormEmbedUrl } from "@/data/site";

export function ApplicationForm() {
  return <section id="apply" className="application-form section-light"><p className="section-number">07</p><div><p className="eyebrow">JOIN MSA BIT JAIPUR</p><h2>START YOUR<br />NEXT CHAPTER.</h2><p>Applications for the MSA team will be collected through the form below.</p></div>{microsoftFormEmbedUrl ? <iframe title="MSA BIT Jaipur team registration form" src={microsoftFormEmbedUrl} className="microsoft-form" loading="lazy">Loading…</iframe> : <div className="form-placeholder"><strong>MICROSOFT FORM READY TO EMBED</strong><p>Send the Microsoft Forms embed URL and it will appear here.</p></div>}</section>;
}
