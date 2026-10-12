import SubjectCard from "./SubjectCard";
import "../../assets/css/education.css";

const subjects = [
  ["</>", "Programming", "Building logic and solving problems", "blue"], ["♧", "Data Structures", "Organizing and managing data", "mint"],
  ["♙", "Algorithms", "Efficient problem solving techniques", "purple"], ["▤", "Database Systems", "Data storage and management", "orange"],
  ["◎", "Computer Networks", "Understanding network communication", "red"], ["▦", "Operating Systems", "System design and management", "pink"],
  ["⚙", "Software Engineering", "Building reliable software systems", "sky"], ["</>", "Web Development", "Modern web technologies", "violet"],
];

export default function Education() {
  return (
    <section className="education-section" id="education">
      <header className="education-header">
        <span className="education-label">Education</span>
        <h3>My Academic<br /><span>Background</span></h3>
        <p>My formal education in Computer Science and Engineering <br></br>has given me a strong foundation in problem-solving, <br></br>algorithms and software development.</p>
        <div className="education-hero-art" aria-hidden="true"><span className="hero-bulb">💡</span><div className="hero-cap">🎓</div><div className="hero-books"><b>Knowledge</b><b>Skills</b><b>Better Future</b></div><i>Learning<br />today<br />Building<br />tomorrow</i></div>
      </header>
      <div className="education-detail-row"><article className="degree-card">
        <div className="degree-icon" aria-hidden="true">🎓</div>
        <div><span className="degree-label">🎓 &nbsp;Bachelor's Degree</span><h4>Computer Science &amp; Engineering</h4><p>🏛 &nbsp;Varendra University<br />📍 &nbsp;Rajshahi,Bangladesh<br />🗓 &nbsp;Graduation Year 2026</p></div>
        <footer><span>📖 Strong Fundamentals</span><span>⚙️ Problem Solving</span><span>👥 Team Collaboration</span><span>▥ Real-World Mindset</span></footer>
      </article><aside className="education-quote"><strong>&ldquo;</strong><p>A strong academic foundation helps me learn faster, solve complex problems and adapt to new technologies.</p><i /></aside></div>
      <h4 className="subjects-title">Key Subjects</h4>
      <p className="subjects-intro">Core areas that shaped my problem-solving skills and technical foundation.</p>
      <a className="learning-path" href="#learning">Explore My Learning Path &nbsp; →</a>
      <div className="subject-list">{subjects.map(([icon, title, description, tone]) => <SubjectCard key={title} icon={icon} title={title} description={description} tone={tone} />)}</div>
    </section>
  );
}
