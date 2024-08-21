import Home from "../../components/Home/Home"
import Projects from "../../components/Projects/Projects"
import Skills from "../../components/Skills/Skills"
import Contact from "../../components/Contact/Contact"

import "./RightSide.scss"

function RightSide() {
    return (
        <div className="rightSide">
            <Home/>
            <Projects/>
            <Skills/>
            <Contact/>
        </div>
    )
}

export default RightSide;