import SkillCard from "./SkillCard";

export default function SkillCategory({ title, skills }) {
  return <section className="skill-category"><h3>{title}</h3><div className="skill-card-grid">{skills.map((skill) => <SkillCard key={skill.title} {...skill} />)}</div></section>;
}
