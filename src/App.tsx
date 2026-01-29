import './App.css';
import { useState, useEffect } from 'react';
import { Brain, ChevronRight } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedText, setTypedText] = useState<string>('');

  const fullText = 'Your Personal Web Developer and Beyond';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

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

        <Hero typeText={typedText} scrollToSection={scrollToSection} />
      </header>

      {/* About Section */}

      <About />

      {/* Journey Section */}
      <section id='journey' className='py-10 md:py-24 px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className=' p-8 border border-zinc-800 rounded-lg bg-zinc-900/30'>
            <div className='flex items-start gap-4'>
              <Brain className='w-6 h-6 text-lime-400 mt-1 shrink-0' />
              <div>
                <h3 className='text-xl font-semibold mb-3'>
                  Continuous Learning
                </h3>
                <p className='text-zinc-400 leading-relaxed mb-4'>
                  Beyond active projects, I'm constantly exploring new
                  technologies, contributing to open source, and documenting my
                  learning journey on GitHub. From system architecture to modern
                  frameworks, every day is an opportunity to grow.
                </p>
                <a
                  href='https://github.com/StenixDev'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 text-lime-400 hover:underline'
                >
                  View my GitHub activity <ChevronRight className='w-4 h-4' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
export default App;
