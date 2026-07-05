import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ResearchAreas from '../components/ResearchAreas';
import KeyDiscoveries from '../components/KeyDiscoveries';
import Timeline from '../components/Timeline';
import Scientists from '../components/Scientists';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'research', 'discoveries', 'timeline', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} />
      <Hero />
      <ResearchAreas />
      <KeyDiscoveries />
      <Timeline />
      <Scientists />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
