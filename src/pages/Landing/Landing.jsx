import React, { useState } from "react";

import Menu from "../../components/Menu/Menu"
import RightSide from "../../components/RightSide/RightSide"

import "./Landing.scss"

function Landing() {
    const [activeSection, setActiveSection] = useState("home");

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            <Menu activeSection={activeSection} onSectionChange={handleSectionChange}/>
            <RightSide/>
        </>
    )
}

export default Landing;