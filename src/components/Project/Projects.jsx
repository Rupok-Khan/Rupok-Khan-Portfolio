import "../../assets/css/project.css";
import { links } from "../../data/links";
import MistriChaiImage from "../../assets/images/project_1.png";
import PuratonLabsImage from "../../assets/images/project_2.png";
import PortfolioImage from "../../assets/images/project_3.png";

const projects = [
	{
		number: "01",
		title: "MistriChai",
		description: "A trusted home-service platform for discovering and booking verified technicians.",
		tags: ["React", "Vercel", "Service Platform"],
		tone: "mistri",
		liveUrl: "https://mistri-chai-jade.vercel.app/",
		githubUrl: "https://github.com/Rupok-Khan/MistriChai"
	},
	{
		number: "02",
		title: "Puraton Labs",
		description: "Software and automation solutions featuring AI agents, POS software, scalable web applications, and business dashboards.",
		tags: ["React", "Node.js", "n8n", "Vercel"],
		tone: "puraton",
		liveUrl: "#contact",
		githubUrl: links.github
	},
	{
		number: "03",
		title: "Personal Developer Portfolio",
		description: "A profile and journey experience presenting a CSE background, front-end focus, modern web skills, and practical project direction.",
		tags: ["React", "JavaScript", "Next.js", "TypeScript"],
		tone: "portfolio-image",
		liveUrl: "#contact",
		githubUrl: links.github
	},
];

function ProjectPreview({ tone }) {
	if (tone === "mistri") {
		return <div className="project-preview mistri"><img className="project-preview-image" src={MistriChaiImage} alt="MistriChai home services platform" /></div>;
	}
	if (tone === "puraton") {
		return <div className="project-preview puraton"><img className="project-preview-image" src={PuratonLabsImage} alt="Puraton Labs software and automation solutions dashboard" /></div>;
	}
	if (tone === "portfolio-image") {
		return <div className="project-preview portfolio-image"><img className="project-preview-image" src={PortfolioImage} alt="Rupok Khan developer portfolio About page" /></div>;
	}

	return <div className={`project-preview ${tone}`} aria-hidden="true"><span className="preview-glow" /><div className="preview-window"><span className="preview-topbar" /><span className="preview-sidebar" /><span className="preview-content"><i /><i /><i /><b /></span><span className="preview-person" /></div><span className="preview-orb preview-orb-one" /><span className="preview-orb preview-orb-two" /></div>;
}

export default function Projects() {
	return (
		<section className="projects-section" id="projects">
			<header className="projects-header">
				<div><span>Projects</span><h2>Selected <strong>Projects</strong><br /><em>Real Work, Real Learning</em></h2><p>A collection of projects that demonstrate my skills in building modern web applications.</p></div>
				<a className="projects-view-all" href="#contact">View All Projects <span aria-hidden="true">→</span></a>
			</header>
			<div className="project-grid">
				{projects.map((project) => <article className="project-card" key={project.title}>
					<ProjectPreview tone={project.tone} />
					<div className="project-card-body"><span className="project-number">{project.number}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-actions"><a href={project.liveUrl} target={project.liveUrl.startsWith("http") ? "_blank" : undefined} rel={project.liveUrl.startsWith("http") ? "noreferrer" : undefined}>{project.tone === "mistri" ? "Live Project" : "Request Demo"}</a><a href={project.githubUrl} target={project.githubUrl.startsWith("http") ? "_blank" : undefined} rel={project.githubUrl.startsWith("http") ? "noreferrer" : undefined}>GitHub</a></div></div>
				</article>)}
			</div>
		</section>
	);
}
