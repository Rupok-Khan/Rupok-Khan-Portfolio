export default function ExperienceItem({ period, title, children }) {
  return (
    <article className="experience-item">
      <span className="experience-dot" aria-hidden="true" />
      <small>{period}</small>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
