import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/MyJourney/Journey';
import Skill from './components/Skills/Skill';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import AchievementsSection from './components/Achievements/AchievementsSection';
import Learning from './components/Learning/Learning';
import Roadmap from './components/Roadmap/Roadmap';
import Contact from './components/Contact/Contact';
import CV from './components/cv';
import Projects from './components/Project/Projects';
import Footer from './components/footer';
import './assets/css/nav.css';
import './App.css';

function App() {
  useEffect(() => {
    const revealSelector = [
      '.hero-left', '.hero-right', '.journey-header', '.journey-step', '.journey-callout',
      '.skills-content', '.skill-level-panel', '.skill-category', '.skills-card',
      '.experience-content', '.experience-visual', '.experience-item', '.education-header',
      '.education-detail-row', '.subject-list .subject-card', '.learning-header',
      '.learning-card', '.learning-footer', '.projects-header', '.project-card',
      '.achievements-header', '.achievement-card',
      '.roadmap-header', '.roadmap-step', '.contact-header', '.contact-detail',
      '.contact-form', '.cv-copy', '.cv-visual', '.footer-main', '.footer-bottom'
    ].join(', ');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = new WeakSet();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    const reveal = (element, index) => {
      if (seen.has(element)) return;
      seen.add(element);
      element.classList.add('reveal');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 8, 6) * 70}ms`);
      if (prefersReducedMotion) element.classList.add('is-visible');
      else observer.observe(element);
    };
    const scan = () => document.querySelectorAll(revealSelector).forEach(reveal);
    document.documentElement.classList.add('motion-ready');
    scan();
    const mutationObserver = new MutationObserver(scan);
    mutationObserver.observe(document.querySelector('.app-shell'), { childList: true, subtree: true });
    let frame;
    const updateScrollProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      document.documentElement.style.setProperty('--scroll-progress', `${progress * 100}%`);
      frame = undefined;
    };
    const onScroll = () => {
      if (frame === undefined) frame = requestAnimationFrame(updateScrollProgress);
    };
    updateScrollProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (frame !== undefined) cancelAnimationFrame(frame);
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar />
      <Hero />
      <Journey/>
      <Skill />
      <Experience />
      <Education />
      <AchievementsSection />
      <Learning />
      <Projects />
      <Roadmap />
      <Contact />
      <CV />
      <Footer />

    </div>
  );
}

export default App;
