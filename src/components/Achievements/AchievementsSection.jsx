import { faAward, faCertificate, faClapperboard } from "@fortawesome/free-solid-svg-icons";
import AchievementCard from "./AchievementCard";
import "../../assets/css/achievements.css";

const achievements = [
  {
    icon: faAward,
    category: "Achievement",
    title: "UIHP Pre-Seed Funding Winner",
    organization: "University Innovation Hub Program (UIHP)",
    date: "2025",
    description: "Recognized through the University Innovation Hub Program for an independent business concept and awarded pre-seed funding to support its development.",
    highlights: ["Innovation-focused recognition", "Pre-seed funding", "Specialized mentoring and grooming sessions", "Participation in innovation challenges"],
    link: "https://uihp.org/",
    cta: "View UIHP",
    tone: "award",
  },
  {
    icon: faCertificate,
    category: "Certification",
    title: "MERN Stack Web Development",
    organization: "Ostad",
    date: "December 2024",
    description: "Completed intensive MERN Stack Web Development training focused on modern web development and full-stack technologies.",
    highlights: ["Front-End Development", "React.js", "Node.js", "Express.js", "MongoDB", "Modern Web Technologies"],
    link: "https://drive.google.com/file/d/1fmcs4nPtDpIsdxfWPyYDAYrxaoywJ3iI/view?usp=drive_link",
    cta: "View Certificate",
    tone: "certificate",
  },
  {
    icon: faClapperboard,
    category: "Creator Journey",
    title: "From Content Creator to Tech Builder",
    organization: "Puraton Pothik",
    date: "2024 - Present",
    description: "Started and developed Puraton Pothik as a digital media platform focused on local history and wildlife, combining content creation, web development, SEO, multimedia production, and digital entrepreneurship.",
    highlight: "30,000+ Subscribers",
    highlights: ["Content-driven WordPress website", "Documentary-style wildlife and historical content", "Video and audio production", "SEO and Google Search Console indexing", "Brand partnerships and sponsorships", "E-commerce platform and AI-assisted content production"],
    link: "https://www.puratonpothik.com",
    cta: "Visit Puraton Pothik",
    tone: "creator",
  },
];

export default function AchievementsSection() {
  return (
    <section className="achievements-section" id="achievements">
      <header className="achievements-header">
        <span className="achievements-label">Milestones &amp; Momentum</span>
        <h2>Achievements <span>&amp; Journey</span></h2>
        <p>Milestones that shaped my journey from content creation to software development, AI automation, and entrepreneurship.</p>
      </header>
      <div className="achievements-grid">
        {achievements.map((achievement) => <AchievementCard key={achievement.title} achievement={achievement} />)}
      </div>
    </section>
  );
}
