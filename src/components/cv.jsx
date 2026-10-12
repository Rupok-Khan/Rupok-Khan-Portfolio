import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faUser } from "@fortawesome/free-solid-svg-icons";
import CvPdf from "../assets/cv/cv.pdf";
import "../assets/css/cv.css";

export default function CV() {
	return (
		<section className="cv-section" id="cv">
			<div className="cv-copy">
				<span className="cv-eyebrow">Resume</span>
				<h2>Download <strong>My CV</strong></h2>
				<p>Get a copy of my resume to learn more about my education, skills and projects.</p>
				<div className="cv-actions">
					<a className="cv-download" href={CvPdf} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDownload} /> Request My CV</a>
					<a className="cv-projects" href="#projects">View Projects</a>
				</div>
			</div>
			<div className="cv-visual" aria-hidden="true">
				<div className="cv-paper">
					<div className="cv-paper-heading"><span className="cv-avatar"><FontAwesomeIcon icon={faUser} /></span><b>RUPAK KHAN</b></div>
					<i />
					<span className="cv-paper-line wide" /><span className="cv-paper-line" /><span className="cv-paper-line short" />
					<span className="cv-paper-line wide" /><span className="cv-paper-line" /><span className="cv-paper-line short" />
				</div>
				<span className="cv-round-download"><FontAwesomeIcon icon={faDownload} /></span>
			</div>
		</section>
	);
}
