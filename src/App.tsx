import { useState, useEffect, useCallback } from 'react';
import { useTheme } from './hooks/useTheme';
import { useReveal } from './hooks/useReveal';
import Header from './sections/Header';
import Hero from './sections/Hero';
import NavTabs from './sections/NavTabs';
import About from './sections/About';
import Projects from './sections/Projects';
import Research from './sections/Research';
import Academics from './sections/Academics';
import DesignWork from './sections/DesignWork';
import Certifications from './sections/Certifications';
import References from './sections/References';
import Footer from './sections/Footer';

const SECTIONS = [
  { id: 'about', component: About },
  { id: 'projects', component: Projects },
  { id: 'research', component: Research },
  { id: 'academics', component: Academics },
  { id: 'design', component: DesignWork },
  { id: 'certifications', component: Certifications },
  { id: 'references', component: References },
];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('about');

  useReveal();

  // Scroll spy to update active tab
  const handleScroll = useCallback(() => {
    const headerOffset = 180; // Adjusted for NavTabs sticky height
    const scrollPos = window.scrollY + headerOffset;

    for (let i = SECTIONS.length - 1; i >= 0; i--) {
      const el = document.getElementById(SECTIONS[i].id);
      if (el && el.offsetTop <= scrollPos) {
        setActiveTab(SECTIONS[i].id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleTabChange = (tabId: string) => {
    const el = document.getElementById(tabId);
    if (el) {
      const headerOffset = 160;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--fg)' }}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <NavTabs activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="flex-1">
        {SECTIONS.map(({ id, component: Component }) => (
          <section key={id} id={id}>
            <Component />
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
