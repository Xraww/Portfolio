import Home from "../../components/Home/Home"
import Projects from "../../components/Projects/Projects"
import Skills from "../../components/Skills/Skills"
import Contact from "../../components/Contact/Contact"

import "./RightSide.scss"

function RightSide({ activeSection }) {
    return (
        <>
            {activeSection === "home" && <Home/>}
            {activeSection === "projects" && <Projects/>}
            {activeSection === "skills" && <Skills/>}
            {activeSection === "contact" && <Contact/>}
        </>
    )
}

export default RightSide;