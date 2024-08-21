import "./Menu.scss"

function Menu({ activeSection, onSectionChange }) {
    const handleClick = (section) => {
        onSectionChange(section);
    };

    return (
        <div className="Menu">
            <nav>
                <div className="nav-title">
                    <h2><a href="https://github.com/Xraww/Portfolio" target="_blank" rel="noopener noreferrer">Portfolio</a></h2>
                    <h3>Xraww</h3>
                </div>

                <ul className="nav-links">
                    <li onClick={() => handleClick("home")} className={activeSection === "home" ? "selected" : ""}>Accueil</li>
                    <li onClick={() => handleClick("projects")} className={activeSection === "projects" ? "selected" : ""}>Mes projets</li>
                    <li onClick={() => handleClick("skills")} className={activeSection === "skills" ? "selected" : ""}>Mes compétences</li>
                    <li onClick={() => handleClick("contact")} className={activeSection === "contact" ? "selected" : ""}>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;