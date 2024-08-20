import "./Header.scss"

function Header() {
    return (
        <header>
            <nav>
                <div className="nav-title">
                    <div className="content">
                        <h2>Portfolio</h2>
                        <h3>Xraww</h3>
                    </div>
                </div>

                <ul className="nav-links">
                    <li className="selected"><a href="#home">Accueil</a></li>
                    <li><a href="#projects">Mes projets</a></li>
                    <li><a href="#skills">Mes compétences</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="about">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eligendi cupiditate vero amet reiciendis, error ullam! Est officiis eaque, repellat sunt ex impedit quidem laudantium placeat, voluptate eligendi quis adipisci aliquid molestias ipsa libero earum beatae quos, nam repudiandae? Dolor!</p>
            </div>
        </header>
    )
}

export default Header;