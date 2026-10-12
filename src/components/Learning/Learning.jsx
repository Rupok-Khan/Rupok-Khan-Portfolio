import { useState } from "react";
import LearningCard from "./LearningCard";
import "../../assets/css/learning.css";

const topics = [
  ["⚛", "Advanced React", "Deepening component design and state management.", "cyan"],
  ["N", "Next.js", "Exploring advanced routing, server components and performance.", "dark"],
  ["TS", "TypeScript", "Improving type safety and building scalable applications.", "blue"],
  ["◢", "Three.js", "Creating interactive 3D web experiences.", "slate"],
  ["♬", "Modern UI Animation", "Learning advanced animation techniques.", "pink"],
  ["⚙", "Full-Stack Development", "Exploring backend technologies and integration.", "blue"],
  ["◉", "AI-Powered Web Applications", "Experimenting with AI APIs and intelligent features.", "purple"],
  ["💡", "Better Developer", "Continuously improving through real projects.", "purple"],
];

export default function Learning() {
  const [isExploring, setIsExploring] = useState(false);

  const explore = () => setIsExploring((isOpen) => !isOpen);

  return <section className="learning-section" id="learning"><header className="learning-header"><span className="learning-label">🎓 &nbsp;Currently Exploring</span><h2>Always Learning,<br /><span>Always Building</span></h2><p>I’m continuously exploring new technologies to improve <br></br>my skills and build better, more meaningful web experiences.</p><div className="learning-hero-art" aria-hidden="true"><i className="learning-note">Learn<br />Build<br />Grow →</i><b className="learning-bulb">💡</b><b className="learning-chart">▥</b><div className="learning-laptop"><small>● &nbsp; ◦ &nbsp; ◦</small><code>const future =<br /><em>alwaysLearning()</em>;</code></div><div className="learning-rocket">🚀</div><i className="learning-script">Better<br />Developer<br />Tomorrow</i></div></header>{isExploring && <div className="learning-card-grid learning-roadmap">{topics.map(([icon, title, text, tone], index) => <LearningCard key={title} icon={icon} title={title} tone={tone} step={index + 1}>{text}</LearningCard>)}</div>}<footer className="learning-footer"><span>📖</span><p>“Small steps in learning today, big possibilities tomorrow.”</p><button type="button" onClick={explore} aria-expanded={isExploring}>{isExploring ? "Hide Roadmap ↑" : "Keep Exploring →"}</button></footer></section>;
}
