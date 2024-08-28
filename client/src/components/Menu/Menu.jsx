import "./Menu.scss"

function Menu({ scrollToSection, activeSection }) {
    const sections = ["home", "projects", "skills", "contact"];
    const displaySections = ["Accueil", "Projets", "Compétences", "Contacter"];

    return (
        <div className="Menu">
            <div className="menu-header">
                <h2><a href="https://github.com/Xraww/Portfolio" target="_blank" rel="nofollow noopener noreferrer">Portfolio</a></h2>
                <h3>Xraww</h3>
            </div>

            <nav>
                <ul className="nav-links">
                    {sections.map((section, index) => (
                        <li key={section} onClick={() => scrollToSection(index)} className={activeSection === index ? "selected" : ""}>
                            {displaySections[index]}
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="neon-ball"></div>
        </div>
    )
}

export default Menu;