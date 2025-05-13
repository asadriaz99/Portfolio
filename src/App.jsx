import { Contact } from "lucide-react"
import FooterPage from "./Components/Footer"
import Main from "./Components/Main"
import Navbar from "./Components/Navbar"
import ProjectsSection from "./Components/Projects"
import SkillsPage from "./Components/Skills"
import WhyWorkWithMe from "./Components/WhyWorkWithMe"
import CreativeWorkflow from "./Components/CreativeWorkflow"
import MyJourney from "./Components/MyJourney"
import GetInTouch from "./Components/GetInTouch"
import AccentBackground from "./Components/AccentBackground"



function App() {
 

  return (
    <>
    <AccentBackground/>
    <Navbar/>
    <Main/>
    <MyJourney/>
    <SkillsPage/>
    <CreativeWorkflow/>
    <WhyWorkWithMe/>
    <ProjectsSection/>
    <GetInTouch/>
    <FooterPage/>
    </>
  )
}

export default App
