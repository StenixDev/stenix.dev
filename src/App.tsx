import { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  Mail,
  Terminal,
  Code2,
  Rocket,
  Brain,
  ChevronRight,
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const fullText = 'Your Personal Web Developer and Beyond';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const projects = [
    {
      type: 'Active Development',
      title: 'Web Applications',
      description:
        'Building modern, responsive web applications with React, Next.js, and Node.js. Focus on clean architecture and user experience.',
      tech: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
      status: 'In Progress',
    },
    {
      type: 'Learning',
      title: 'System Architecture',
      description:
        'Exploring microservices, cloud infrastructure, and scalable system design patterns.',
      tech: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      status: 'Ongoing',
    },
    {
      type: 'Experiment',
      title: 'AI Integration',
      description:
        'Experimenting with AI APIs and machine learning models to enhance web applications.',
      tech: ['OpenAI', 'Python', 'TensorFlow', 'FastAPI'],
      status: 'Research',
    },
  ];

  const skills = [
    { name: 'Frontend Development', level: 90 },
    { name: 'Backend Architecture', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'DevOps & Cloud', level: 75 },
  ];

  return (
    <div className='min-h-screen bg-zinc-950 text-zinc-100 font-mono'>
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800' : 'bg-transparent'}`}
      >
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Terminal className='w-6 h-6 text-emerald-400' />
            <span className='text-lg font-bold'>
              stenix<span className='text-emerald-400'>.dev</span>
            </span>
          </div>
          <div className='hidden md:flex items-center gap-8'>
            {['about', 'journey', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm hover:text-emerald-400 transition-colors capitalize ${activeSection === item ? 'text-emerald-400' : 'text-zinc-400'}`}
              >
                {item}
              </button>
            ))}
            <a
              href='https://github.com/StenixDev'
              target='_blank'
              rel='noopener noreferrer'
              className='px-4 py-2 bg-emerald-400/10 text-emerald-400 rounded border border-emerald-400/20 hover:bg-emerald-400/20 transition-colors text-sm'
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id='home'
        className='min-h-screen flex items-center justify-center px-6 pt-20'
      >
        <div className='max-w-4xl w-full'>
          <div className='mb-8'>
            <div className='flex items-center gap-2 text-emerald-400 mb-4'>
              <span className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse'></span>
              <span className='text-sm'>Available for projects</span>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
              Hi, I'm <span className='text-emerald-400'>Stephen</span>
            </h1>
            <div className='text-2xl md:text-3xl text-zinc-400 mb-8 h-12'>
              {typedText}
              <span className='animate-pulse'>|</span>
            </div>
            <p className='text-lg text-zinc-400 mb-12 max-w-2xl'>
              Independent developer crafting modern web experiences. Focused on
              clean code, continuous learning, and building solutions that
              matter.
            </p>
            <div className='flex flex-wrap gap-4'>
              <button
                onClick={() => scrollToSection('journey')}
                className='px-8 py-3 bg-emerald-400 text-zinc-950 rounded hover:bg-emerald-500 transition-colors font-medium flex items-center gap-2'
              >
                View My Journey <ChevronRight className='w-4 h-4' />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className='px-8 py-3 border border-zinc-700 rounded hover:border-emerald-400 hover:text-emerald-400 transition-colors font-medium'
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className='flex gap-4 mt-12'>
            {[
              { icon: Github, url: 'https://github.com/StenixDev' },
              {
                icon: Linkedin,
                url: 'https://www.linkedin.com/in/stephemarkg/',
              },
              { icon: Youtube, url: 'https://www.youtube.com/@smedia91/' },
              { icon: Facebook, url: 'https://www.facebook.com/stenix.dev/' },
              { icon: Instagram, url: 'https://www.instagram.com/stenix91/' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 flex items-center justify-center border border-zinc-800 rounded hover:border-emerald-400 hover:text-emerald-400 transition-colors'
              >
                <social.icon className='w-5 h-5' />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-32 px-6 bg-zinc-900/50'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex items-center gap-3 mb-12'>
            <Code2 className='w-6 h-6 text-emerald-400' />
            <h2 className='text-3xl font-bold'>About Me</h2>
          </div>
          <div className='grid md:grid-cols-2 gap-12'>
            <div>
              <p className='text-zinc-400 leading-relaxed mb-6'>
                I'm an independent developer with a passion for building clean,
                functional web applications. My journey in tech spans CompTech,
                Networking, Cybersecurity, System Administration, and Web
                Development.
              </p>
              <p className='text-zinc-400 leading-relaxed mb-6'>
                What started as a team venture has evolved into a focused solo
                practice. I now dedicate my time to crafting personalized
                solutions, experimenting with new technologies, and continuously
                expanding my skillset.
              </p>
              <p className='text-zinc-400 leading-relaxed'>
                Every project is an opportunity to learn, iterate, and deliver
                something meaningful. I believe in writing code that's not just
                functional, but maintainable and elegant.
              </p>
            </div>
            <div>
              <h3 className='text-xl font-semibold mb-6 text-emerald-400'>
                Core Skills
              </h3>
              {skills.map((skill, i) => (
                <div key={i} className='mb-6'>
                  <div className='flex justify-between mb-2'>
                    <span className='text-sm text-zinc-400'>{skill.name}</span>
                    <span className='text-sm text-emerald-400'>
                      {skill.level}%
                    </span>
                  </div>
                  <div className='h-2 bg-zinc-800 rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-1000'
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id='journey' className='py-32 px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex items-center gap-3 mb-12'>
            <Rocket className='w-6 h-6 text-emerald-400' />
            <h2 className='text-3xl font-bold'>Development Journey</h2>
          </div>
          <p className='text-zinc-400 mb-12 max-w-2xl'>
            A snapshot of my current projects, learning paths, and experiments.
            Each represents a step forward in my evolution as a developer.
          </p>
          <div className='grid md:grid-cols-3 gap-6'>
            {projects.map((project, i) => (
              <div
                key={i}
                className='border border-zinc-800 rounded-lg p-6 hover:border-emerald-400/50 transition-all group bg-zinc-900/50'
              >
                <div className='flex items-center justify-between mb-4'>
                  <span className='text-xs px-3 py-1 bg-zinc-800 rounded-full text-emerald-400 border border-zinc-700'>
                    {project.type}
                  </span>
                  <span className='text-xs text-zinc-500'>
                    {project.status}
                  </span>
                </div>
                <h3 className='text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors'>
                  {project.title}
                </h3>
                <p className='text-zinc-400 text-sm mb-4 leading-relaxed'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className='text-xs px-2 py-1 bg-zinc-800/50 text-zinc-400 rounded border border-zinc-700/50'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className='mt-12 p-8 border border-zinc-800 rounded-lg bg-zinc-900/30'>
            <div className='flex items-start gap-4'>
              <Brain className='w-6 h-6 text-emerald-400 mt-1 flex-shrink-0' />
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
                  className='inline-flex items-center gap-2 text-emerald-400 hover:underline'
                >
                  View my GitHub activity <ChevronRight className='w-4 h-4' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-32 px-6 bg-zinc-900/50'>
        <div className='max-w-3xl mx-auto'>
          <div className='flex items-center gap-3 mb-12'>
            <Mail className='w-6 h-6 text-emerald-400' />
            <h2 className='text-3xl font-bold'>Let's Connect</h2>
          </div>
          <p className='text-zinc-400 mb-12 text-lg'>
            Have a project in mind or just want to chat about tech? I'm always
            open to interesting conversations and new opportunities.
          </p>
          <div className='space-y-6'>
            <div>
              <label className='block text-sm text-zinc-400 mb-2'>Name</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 focus:outline-none focus:border-emerald-400 transition-colors'
                placeholder='Your name'
              />
            </div>
            <div>
              <label className='block text-sm text-zinc-400 mb-2'>Email</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 focus:outline-none focus:border-emerald-400 transition-colors'
                placeholder='your.email@example.com'
              />
            </div>
            <div>
              <label className='block text-sm text-zinc-400 mb-2'>
                Message
              </label>
              <textarea
                rows='6'
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 focus:outline-none focus:border-emerald-400 transition-colors resize-none'
                placeholder='Tell me about your project...'
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className='w-full md:w-auto px-8 py-3 bg-emerald-400 text-zinc-950 rounded hover:bg-emerald-500 transition-colors font-medium'
            >
              Send Message
            </button>
          </div>
          <div className='mt-12 pt-12 border-t border-zinc-800 text-center'>
            <p className='text-zinc-500 text-sm'>
              © 2024 stenix.dev • Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
