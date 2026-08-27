import { SiteFooter } from "@/components/layout/SiteFooter";
import { MotionController } from "@/components/layout/MotionController";
import { ApplicationForm } from "@/components/sections/ApplicationForm";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { About } from "@/components/sections/About";
import { EventsArchive } from "@/components/sections/EventsArchive";
import { Hero } from "@/components/sections/Hero";
import { JoinCta } from "@/components/sections/JoinCta";
import { Partners } from "@/components/sections/Partners";
import { PeopleShowcase } from "@/components/sections/PeopleShowcase";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return <main id="top"><MotionController /><SiteHeader /><Hero /><About /><EventsArchive /><PeopleShowcase /><Projects /><Partners /><JoinCta /><ApplicationForm /><SiteFooter /></main>;
}
