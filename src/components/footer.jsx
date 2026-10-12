import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../assets/css/footer.css";
import { emailHref, links } from "../data/links";

const quickLinks = [["Home", "#hero"], ["Journey", "#journey"], ["Projects", "#projects"], ["Skills", "#skills"], ["Experience", "#experience"], ["Contact", "#contact"]];

export default function Footer() {
	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<footer className="site-footer">
			<div className="footer-main">
				<section className="footer-profile">
					<h2>Rupok Khan</h2>
					<p className="footer-role">Front-End Developer <b>·</b> React <b>·</b> Next.js</p>
					<p>Building modern web experiences with clean code<br />and a focus on real-world solutions.</p>
					<div className="footer-socials"><a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a><a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a><a href={emailHref} aria-label="Email"><FontAwesomeIcon icon={faEnvelope} /></a></div>
				</section>
				<nav className="footer-links" aria-label="Quick links"><h3>Quick Links</h3>{quickLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav>
				<section className="footer-connect"><h3>Let&apos;s Connect</h3><a href={links.github} target="_blank" rel="noreferrer">GitHub</a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={emailHref}>Email</a><span>Bangladesh</span></section>
				<div className="footer-plant" aria-hidden="true"><span className="plant-leaf leaf-one" /><span className="plant-leaf leaf-two" /><span className="plant-leaf leaf-three" /><span className="plant-stem" /><span className="plant-pot" /></div>
				<button className="back-to-top" type="button" onClick={scrollToTop} aria-label="Back to top"><FontAwesomeIcon icon={faArrowUp} /></button>
			</div>
			<div className="footer-bottom"><span>© 2026 Rupok Khan. All rights reserved.</span><span>Built with React, modern web technologies and attention to detail.</span></div>
		</footer>
	);
}
