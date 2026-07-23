import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ExpertiseSection from "./components/sections/ExpertiseSection";
import HeroSection from "./components/sections/HeroSection";
import SiteNav from "./components/sections/SiteNav";
import SkillsSection from "./components/sections/SkillsSection";
import WorkSection from "./components/sections/WorkSection";
import {
  aboutSection,
  contactSection,
  experienceSection,
  expertiseSection,
  skillsSection,
  workSection,
} from "./data/portfolio";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection {...aboutSection} />
      <SkillsSection {...skillsSection} />
      <ExpertiseSection {...expertiseSection} />
      <WorkSection {...workSection} />
      <ExperienceSection {...experienceSection} />
    </>
  );
}
