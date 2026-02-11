import './App.css';
import { useState, useEffect } from 'react';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Learning from './components/Learning';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedText, setTypedText] = useState<string>('');
  const [stephenText, setStephenText] = useState<string>('');
  const stephen = `Hi, I'm Stephen`;
  const fullText = 'Your Personal Web Developer and Beyond';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= stephen.length) {
        setStephenText(stephen.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        // Start the fullText animation after stephen finishes
        startFullTextAnimation();
      }
    }, 50);
    return () => clearInterval(timer);
  }, [stephen]);

  const startFullTextAnimation = () => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className='min-h-screen bg-zinc-950 text-zinc-100 font-mono'>
      <header className='container-cover'>
        <Navigation
          isScrolled={isScrolled}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <Hero
          typeText={typedText}
          stephen={stephenText}
          scrollToSection={scrollToSection}
        />
      </header>

      {/* About Section */}

      <About />

      {/* Learning Section */}

      <Learning />

      {/* Contact Section */}

      <Contact scrollToSection={scrollToSection} />
    </div>
  );
}
export default App;
