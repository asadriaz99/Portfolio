import { Contact } from "lucide-react"
import FooterPage from "./Components/Footer"
import Main from "./Components/Main"
import Navbar from "./Components/Navbar"
import ProjectsSection from "./Components/Projects"
import SkillsPage from "./Components/Skills"
import ContactPage from "./Components/Contact"


function App() {
 

  return (
    <>
    <Navbar/>
    <Main/>
    <SkillsPage/>
    <ProjectsSection/>
    <ContactPage/>
    <FooterPage/>
    </>
  )
}

export default App
