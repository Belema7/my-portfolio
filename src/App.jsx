import AboutMeMain from "./components/aboutMeSection/AboutMeMain"
import HeroGradient from "./components/heroSection/HeroGradient"
import HeroMain from "./components/heroSection/HeroMain"
import SubHeroSection from "./components/heroSection/SubHeroSection"
import NavbarMain from "./components/navbar/NavbarMain"
import SkillsMain from "./components/skillsSection/SkillsMain"
import ExperienceMain from "./components/experienceSection/ExperienceMain"
import ProjectsMain from "./components/projectsSection/ProjectsMain"


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
  </main>
  )

}

export default App
//  1:33:20