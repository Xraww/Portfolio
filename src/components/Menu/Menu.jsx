import "./Menu.scss"

function Menu({ scrollToSection, activeSection }) {
    const sections = ["home", "projects", "skills", "contact"];
    const displaySections = ["Accueil", "Projets", "Compétences", "Me contacter"];

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

            <div className="menu-footer">
                <p>© 2024 Xraww. All rights reserved</p>

                <span>
                    Développé avec
                    <a href="https://react.dev/" target="_blank" rel="nofollow noopener noreferrer">
                        <img src="/images/react-logo.svg" alt="ReactJs logo"/>
                    </a>
                    et hébergé sur
                    <a href="https://github.com/Xraww/Portfolio" target="_blank" rel="nofollow noopener noreferrer">
                        <img src="/images/github-logo.svg" alt="GitHub logo" id="github-logo"/>
                    </a>
                </span>
            </div>

            <div className="neon-ball"></div>
        </div>
    )
}

export default Menu;