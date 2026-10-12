import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExperienceItem from "./ExperienceItem";
import "../../assets/css/experience.css";

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-content">
        <header className="experience-header">
          <h2>Development Experience</h2>
          <h3>Learning <span>• Building</span> <strong>• Improving</strong></h3>
          <p>I’m currently an independent developer, working on personal projects to strengthen my front-end skills and build a professional portfolio.</p>
        </header>
        <div className="experience-timeline">
          <ExperienceItem period="2024 – Present" title="Independent Developer">Building web applications, exploring modern technologies, and improving problem-solving skills through real-world projects.</ExperienceItem>
          <ExperienceItem period="2023 – 2024" title="Project-Based Learning">Focused on React, Next.js, TypeScript and modern web development.</ExperienceItem>
          <ExperienceItem period="Ongoing" title="Continuous Improvement">Learning advanced topics, building new projects and preparing for professional opportunities.</ExperienceItem>
        </div>
      </div>
      <aside className="experience-visual" aria-label="Developer workspace illustration">
        <div className="code-badge"><FontAwesomeIcon icon={faCode} /></div>
        <div className="screen-card"><span /><span /><span /><b /></div>
        <div className="developer-figure"><i>👨‍💻</i></div>
        <div className="plant" aria-hidden="true">🌿</div>
        <div className="experience-quote"><strong>&ldquo;</strong><p>Every project is a step towards a better developer.</p></div>
      </aside>
    </section>
  );
}
