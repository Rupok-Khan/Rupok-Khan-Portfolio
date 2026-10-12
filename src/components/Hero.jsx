
import '../assets/css/hero.css';
import HeroImage from '../assets/images/hero_image_2.png';
import CvPdf from '../assets/cv/cv.pdf';
import Button from './hero_components/Button';
import SkillBadge from './hero_components/Skill';
import { faReact, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-left">
                <p className="hero-intro">Hello, I'm</p>
                <h1 className="hero-name">Rupok <span className="accent">Khan</span></h1>

                <div className="hero-roles">
                    <span>Front End Developer</span>
                    <span className="sep">&middot;</span>
                    <span>AI Automation Expert</span>
                </div>

                <p className="hero-desc">
                    I build modern web applications and AI-powered automations that turn repetitive work into reliable workflows. I combine polished UI, API integrations and intelligent agents to solve real business problems.
                </p>

                <div className="hero-ctas">
                   <Button text="View Projects" type="primary" href="#projects" />
                   <Button text="Contact Me" type="secondary" href="#contact" />
                   <Button text="View CV" type="secondary" href={CvPdf} target="_blank" />
                </div>

                <div className="skill-badges">
                   <SkillBadge name="React" icon={faReact} />
                   <SkillBadge name="JavaScript" icon={faJs} />
                   <SkillBadge name="Node.js" icon={faNodeJs} />
                   <SkillBadge name="AI Automation" icon={faWandMagicSparkles} />
                </div>

                <div className="hero-features">
                    <div className="feature">
                        <div className="f-icon" aria-hidden>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="4" width="20" height="14" rx="2" stroke="#0f172a" strokeWidth="1.5" fill="#fff"/>
                                <path d="M8 18h8" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round"/>
                                <circle cx="12" cy="11" r="2" fill="#0ea5a4" />
                            </svg>
                        </div>
                        <div>
                    
                            <div className="f-title">Modern UI</div>
                            <div className="f-sub">Clean & Responsive</div>
                        </div>
                    </div>

                    <div className="feature">
                        <div className="f-icon" aria-hidden>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="6" y="3" width="12" height="12" rx="3" stroke="#0f172a" strokeWidth="1.5" fill="#fff"/>
                                <path d="M9 15v2a1 1 0 001 1h4a1 1 0 001-1v-2" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round"/>
                                <circle cx="12" cy="7" r="1.5" fill="#0ea5a4" />
                            </svg>
                        </div>
                        <div>
                            <div className="f-title">AI Automation</div>
                            <div className="f-sub">Agents &amp; Workflows</div>
                        </div>
                    </div>

                    <div className="feature">
                        <div className="f-icon" aria-hidden>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 22s4-6 10-6 10 6 10 6-4-8-10-8S2 22 2 22z" fill="#0ea5a4" />
                                <path d="M12 2v6" stroke="#042027" strokeWidth="1.2" strokeLinecap="round"/>
                                <circle cx="12" cy="10" r="1.2" fill="#042027" />
                            </svg>
                        </div>
                        <div>
                            <div className="f-title">Real Impact</div>
                            <div className="f-sub">Ideas to Reality</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-right">
                <div className="image-wrap">
                    <img src={HeroImage} alt="Rupok Khan" />
                </div>
            </div>
        </section>
    );
}
