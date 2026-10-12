export default function SubjectCard({ icon, title, description, tone }) {
  return <article className={`subject-card ${tone}`}><span className="subject-icon" aria-hidden="true">{icon}</span><div><b>{title}</b><p>{description}</p></div><i aria-hidden="true">›</i></article>;
}
