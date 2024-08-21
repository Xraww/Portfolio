import "./Menu.scss"

function Menu({ activeSection, onSectionChange }) {
    const handleClick = (section) => {
        onSectionChange(section);
    };

    return (
        <div className="Menu">
            <div className="menu-header">
                <h2><a href="https://github.com/Xraww/Portfolio" target="_blank" rel="nofollow noopener noreferrer">Portfolio</a></h2>
                <h3>Xraww</h3>
            </div>

            <nav>
                <ul className="nav-links">
                    <li onClick={() => handleClick("home")} className={activeSection === "home" ? "selected" : ""}><a href="#home">Accueil</a></li>
                    <li onClick={() => handleClick("projects")} className={activeSection === "projects" ? "selected" : ""}><a href="#projects">Mes projets</a></li>
                    <li onClick={() => handleClick("skills")} className={activeSection === "skills" ? "selected" : ""}><a href="#skills">Mes compétences</a></li>
                    <li onClick={() => handleClick("contact")} className={activeSection === "contact" ? "selected" : ""}><a href="#contact">Contact</a></li>
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

            <div className="neon-balls">
                <div class="neon-ball"></div>
            </div>
        </div>
    )
}

export default Menu;