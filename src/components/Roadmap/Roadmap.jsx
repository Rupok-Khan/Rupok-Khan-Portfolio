import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClipboardQuestion,
	faListCheck,
	faCode,
	faClipboardCheck,
	faWandMagicSparkles
} from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/roadmap.css";

const steps = [
	["01", "Understand", "Define the problem, users and required functionality.", faClipboardQuestion],
	["02", "Plan", "Break the interface into components and create a development plan.", faListCheck],
	["03", "Build", "Implement responsive and optional functionality using modern technologies.", faCode],
	["04", "Test", "Check functionality, responsiveness and browser compatibility.", faClipboardCheck],
	["05", "Improve", "Refine performance, accessibility and visual details.", faWandMagicSparkles]
];

export default function Roadmap() {
	return (
		<section className="roadmap-section" id="roadmap">
			<header className="roadmap-header">
				<h2>How I Build<br /><span>From Idea to Implementation</span></h2>
				<p>A simple process I follow to build effective and user-friendly web applications.</p>
			</header>
			<div className="roadmap-steps">
				{steps.map(([number, title, description, icon], index) => (
					<div className="roadmap-step" key={title}>
						<div className="roadmap-step-visual">
							<span className="roadmap-icon" aria-hidden="true"><FontAwesomeIcon icon={icon} /></span>
							{index < steps.length - 1 && <span className="roadmap-arrow" aria-hidden="true">→</span>}
						</div>
						<span className="roadmap-number">{number}</span>
						<h3>{title}</h3>
						<p>{description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
