export default function LearningCard({ icon, title, children, tone = "blue", step }) {
  return <article className="learning-card"><span className="learning-card-step" aria-hidden="true">{step}</span><span className="learning-card-orbit" aria-hidden="true" /><span className="learning-card-dots" aria-hidden="true">•••</span><span className={`learning-card-icon ${tone}`} aria-hidden="true">{icon}</span><h3>{title}</h3><p>{children}</p></article>;
}
