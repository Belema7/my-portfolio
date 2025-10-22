import AboutMeMain from "./components/aboutMeSection/AboutMeMain"
import HeroGradient from "./components/heroSection/HeroGradient"
import HeroMain from "./components/heroSection/HeroMain"
import SubHeroSection from "./components/heroSection/SubHeroSection"
import NavbarMain from "./components/navbar/NavbarMain"
import SkillsMain from "./components/skillsSection/SkillsMain"
import ExperienceMain from "./components/experienceSection/ExperienceMain"
import ProjectsMain from "./components/projectsSection/ProjectsMain"
import ContactMeMain from "./components/contactMeSection/ContactMeMain"
 import FooterMain from "./components/footerSection/FooterMain"


function App() {
  return (  
  <main className="font-body ">
    <NavbarMain/>
    <HeroMain/>
    <HeroGradient/>
    <SubHeroSection/>
    <AboutMeMain/>
    <SkillsMain/>
    <ExperienceMain/>
    <ProjectsMain/>
    <ContactMeMain/>
    <FooterMain/>
  </main>
  )

}

export default App
//  1:33:20