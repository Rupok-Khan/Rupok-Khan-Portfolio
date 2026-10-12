import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import CvPdf from "../assets/cv/cv.pdf";

const links = [
    ["Overview", "#hero"],
    ["Stack", "#skills"],
    ["Projects", "#projects"],
    ["Journey", "#achievements"],
    ["Experience", "#experience"],
    ["Learning", "#learning"],
    ["Contact", "#contact"],
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const sections = links
            .map(([, href]) => document.querySelector(href))
            .filter(Boolean);
        const observer = new IntersectionObserver((entries) => {
            const visibleSection = entries
                .filter((entry) => entry.isIntersecting)
                .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
            if (visibleSection) setActiveSection(visibleSection.target.id);
        }, { rootMargin: "-25% 0px -60% 0px", threshold: [0.1, 0.35, 0.7] });
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <nav className="navbar" aria-label="Primary navigation"> 
            <div className="container">
                <a href="/" className="brand" aria-label="Rupok Khan home"><img src={Logo} alt="Rupok Khan" /></a>
                <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded={isOpen} aria-controls="primary-links" onClick={() => setIsOpen((open) => !open)}>
                    <span /><span /><span />
                </button>
                <ul className={`nav-links ${isOpen ? "is-open" : ""}`} id="primary-links">
                    {links.map(([label, href]) => <li key={label}><a className={activeSection === href.slice(1) ? "active" : ""} href={href} onClick={() => setIsOpen(false)}>{label}</a></li>)}
                </ul>
                <a className="cta" href={CvPdf} target="_blank" rel="noreferrer">View CV</a>
            </div>
        
        </nav>

    );
}
