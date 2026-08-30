import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { microsoftFormEmbedUrl } from "@/data/site";

export function JoinCta() { 
  const formUrl = microsoftFormEmbedUrl.replace("&embed=true", "");
  return <section id="join" className="join-cta"><div className="join-image" /><div><p className="section-number">06</p><h2>BE A PART OF<br />THE NEXT CHAPTER.</h2><p>Join a community that learns, builds, and grows together.</p><a className="button-link" href={formUrl} target="_blank" rel="noopener noreferrer">JOIN THE COMMUNITY <span aria-hidden="true">→</span></a></div></section>; 
}
