import ScrollReveal from "./components/ScrollReveal";
import ContactSection from "./components/sections/ContactSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ExpertiseSection from "./components/sections/ExpertiseSection";
import HeroSection from "./components/sections/HeroSection";
import SiteNav from "./components/sections/SiteNav";
import WorkSection from "./components/sections/WorkSection";
import {
  contactSection,
  experienceSection,
  expertiseSection,
  workSection,
} from "./data/portfolio";

export default function Home() {
  return (
    <>
      <SiteNav />

      <main className="mx-auto max-w-[1200px] px-margin-mobile md:px-8">
        <HeroSection />
        <ExpertiseSection {...expertiseSection} />
        <WorkSection {...workSection} />
        <ExperienceSection {...experienceSection} />
        <ContactSection {...contactSection} />
      </main>

      <ScrollReveal />
    </>
  );
}
