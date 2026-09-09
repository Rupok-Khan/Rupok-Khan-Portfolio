import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendarDays, faBuilding } from "@fortawesome/free-solid-svg-icons";

export default function AchievementCard({ achievement }) {
  const { icon, category, title, organization, date, description, highlights, highlight, link, cta, tone } = achievement;

  return (
    <article className={`achievement-card achievement-card-${tone}`}>
      <div className="achievement-card-topline">
        <span className="achievement-icon" aria-hidden="true"><FontAwesomeIcon icon={icon} /></span>
        <span className="achievement-category">{category}</span>
        <span className="achievement-date"><FontAwesomeIcon icon={faCalendarDays} aria-hidden="true" /> {date}</span>
      </div>
      <div className="achievement-card-content">
        <h3>{title}</h3>
        <p className="achievement-organization"><FontAwesomeIcon icon={faBuilding} aria-hidden="true" /> {organization}</p>
        <p className="achievement-description">{description}</p>
        {highlight && <strong className="achievement-highlight">{highlight}</strong>}
        {highlights && <ul className="achievement-highlights">{highlights.map((item) => <li key={item}>{item}</li>)}</ul>}
        {tone === "creator" && <div className="achievement-journey" aria-label="Creator journey stages">{["Content Creation", "Digital Media", "Web Development", "AI-Assisted Creation", "Tech & Entrepreneurship"].map((stage, index) => <span key={stage}>{stage}{index < 4 && <b aria-hidden="true">↓</b>}</span>)}</div>}
      </div>
      <a className="achievement-link" href={link} target="_blank" rel="noopener noreferrer">{cta} <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a>
    </article>
  );
}
