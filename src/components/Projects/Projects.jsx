import React, { useState, useRef, useEffect } from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { gsap } from "gsap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

import "./Projects.scss"

function Projects() {
    const parallax = useRef(null);

    const scroll = (number) => {
        if (parallax.current) {
            parallax.current.scrollTo(number)
        }
    };

    const handleGSAPAnimation = (closeIconRef, imageRef, textRef, clickIconRef, showText) => {
        if (imageRef.current && textRef.current) {
            if (showText) {
                gsap.to(imageRef.current, { opacity: 0, scale: 0.8, duration: 0.5 });
                gsap.to(textRef.current, { opacity: 1, y: 0, duration: 0.5, delay: 0.3 });
                textRef.current.style.pointerEvents = "auto";
                imageRef.current.style.pointerEvents = "none";

                closeIconRef.current.style.display = "block";
                clickIconRef.current.style.color = "transparent";
            } else {
                gsap.to(imageRef.current, { opacity: 1, scale: 1, duration: 0.5 });
                gsap.to(textRef.current, { opacity: 0, y: 20, duration: 0.5 });
                textRef.current.style.pointerEvents = "none";
                imageRef.current.style.pointerEvents = "auto";

                closeIconRef.current.style.display = "none";
                clickIconRef.current.style.color = "black";
            }
        }
    };

    const createParallaxLayer = (offset, title, imageSrc, text, link, scrollLeft, scrollRight) => {
        const [showText, setShowText] = useState(false);
        const closeIconRef = useRef(null);
        const imageRef = useRef(null);
        const textRef = useRef(null);
        const clickIconRef = useRef(null);
    
        useEffect(() => {
            handleGSAPAnimation(closeIconRef, imageRef, textRef, clickIconRef, showText);
        }, [showText]);
        return (
            <ParallaxLayer offset={offset} speed={0.5} className="layers">
                <div className="content">
                <button className="back-button" ref={closeIconRef} onClick={() => setShowText(false)}><GrClose/></button>

                    <div className="project-page">
                        <div className="image-icon">
                            <img ref={imageRef} src={imageSrc} alt={`Project ${offset + 1}`} className="project-img" onClick={() => setShowText(true)}/>
                            <span ref={clickIconRef} id="click-icon"><GiClick size={48}/></span>
                        </div>

                        <h3>Projet {offset + 1} - {title}</h3>

                        <div ref={textRef} className="project-text">
                            <h2>Détails du projet</h2>
                            <p>{text}</p>
                            <a href={link} target="_blank">Lien vers le répository GitHub</a>
                        </div>
                    </div>

                    <FaChevronLeft id="arrowleft" size={32} onClick={() => scroll(scrollLeft)} />
                    <FaChevronRight id="arrowRight" size={32} onClick={() => scroll(scrollRight)} />
                </div>
            </ParallaxLayer>
        );
    };

    return (
        <div id="projects"> 
            <h2>Mes projets</h2>

            <div className="parallax">
                <Parallax pages={5} ref={parallax} horizontal>
                    {createParallaxLayer(0, "Booki", "/images/project-1.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "https://github.com/Xraww/Booki", 4, 1)}
                    {createParallaxLayer(1, "Sophie Bluel | Portfolio", "/images/project-2.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "https://github.com/Xraww/Architecte", 0, 2)}
                    {createParallaxLayer(2, "Kasa Location", "/images/project-3.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.","https://github.com/Xraww/Kasa", 1, 3)}

                    {createParallaxLayer(3, "Mon vieux grimoire", "/images/project-4.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "https://github.com/Xraww/Grimoire", 2, 4)}
                    {createParallaxLayer(4, "Nina Carducci | Portfolio", "/images/project-5.png", "Lorem ipsum dolor sit amet, consectetur adipisicing elit.", "https://github.com/Xraww/Photographer", 3, 0)}
                </Parallax>
            </div>
        </div>
    );
};

export default Projects;