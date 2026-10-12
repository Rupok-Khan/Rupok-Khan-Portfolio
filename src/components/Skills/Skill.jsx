import {
  faCss3Alt, faGitAlt, faGithub, faHtml5, faJs, faNodeJs, faReact,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { faCloud, faCode, faDatabase, faMobileScreenButton, faPenRuler, faUniversalAccess, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import SkillCategory from "./SkillCategory";
import "../../assets/css/skills.css";

const skillGroups = [
  { title: "AI Automation", skills: [
    { title: "AI Workflow Automation", icon: faWandMagicSparkles, tone: "pink" }, { title: "AI Agents", icon: faCode, tone: "purple" },
    { title: "LLM API Integration", icon: faCloud, tone: "cyan" }, { title: "Prompt Engineering", iconLabel: "AI", tone: "dark" },
    { title: "Process Automation", icon: faCode, tone: "blue" },
  ] },
  { title: "Frontend", skills: [
    { title: "HTML5", icon: faHtml5, tone: "orange" }, { title: "CSS3", icon: faCss3Alt, tone: "blue" },
    { title: "JavaScript", icon: faJs, tone: "yellow" }, { title: "TypeScript", iconLabel: "TS", tone: "blue" },
    { title: "React.js", icon: faReact, tone: "cyan" }, { title: "Next.js", iconLabel: "N", tone: "dark" },
  ] },
  { title: "UI & Interaction", skills: [
    { title: "Framer Motion", icon: faCode, tone: "pink" }, { title: "Three.js", icon: faPenRuler, tone: "slate" },
    { title: "Responsive UI", icon: faMobileScreenButton, tone: "blue" }, { title: "Accessibility", icon: faUniversalAccess, tone: "blue" },
    { title: "Component Design", icon: faCode, tone: "blue" },
  ] },
  { title: "Development Tools", skills: [
    { title: "Git", icon: faGitAlt, tone: "orange" }, { title: "GitHub", icon: faGithub, tone: "dark" },
    { title: "npm", iconLabel: "npm", tone: "red" }, { title: "VS Code", icon: faCode, tone: "blue" },
    { title: "Chrome DevTools", icon: faCode, tone: "blue" },
  ] },
  { title: "Backend / Supporting", skills: [
    { title: "Node.js", icon: faNodeJs, tone: "green" }, { title: "Express.js", iconLabel: "ex", tone: "dark" },
    { title: "APIs", icon: faCode, tone: "blue" }, { title: "Database", icon: faDatabase, tone: "blue" },
    { title: "Deployment", icon: faCloud, tone: "blue" },
  ] },
];

const skillLevels = [
  ["AI Automation", "Expert", 95], ["React.js", "Advanced", 96], ["Next.js", "Intermediate", 74], ["TypeScript", "Intermediate", 68],
  ["JavaScript", "Advanced", 91], ["Node.js", "Intermediate", 65], ["UI/UX", "Intermediate", 72], ["Three.js", "Learning", 35],
];

const filters = [
  ["All", "All"], ["AI Automation", "AI Automation"], ["Frontend", "Frontend"], ["UI & Interaction", "UI & Interaction"],
  ["Development", "Development Tools"], ["Backend", "Backend / Supporting"],
];

export default function Skill() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleGroups = activeFilter === "All" ? skillGroups : skillGroups.filter(({ title }) => title === activeFilter);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-content">
        <header className="skills-header">
          <h2>Technical Stack<br />I Work With</h2>
          <p>The technologies and tools I use to build modern web applications.</p>
          <div className="skills-filters" aria-label="Skill categories">
            {filters.map(([label, value]) => (
              <button key={value} className={activeFilter === value ? "active" : ""} type="button" onClick={() => setActiveFilter(value)}>{label}</button>
            ))}
          </div>
        </header>
        <div className="skills-groups">{visibleGroups.map((group) => <SkillCategory key={group.title} {...group} />)}</div>
      </div>
      <aside className="skill-level-panel">
        <h3>My Skill Level</h3>
        {skillLevels.map(([name, level, value]) => <div className="skill-level" key={name}><div><span>{name}</span><span>{level}</span></div><i><b style={{ width: `${value}%` }} /></i></div>)}
        <div className="skills-quote"><strong>&ldquo;</strong><p>I focus on learning by building real projects and solving real problems.</p></div>
      </aside>
    </section>
  );
}
