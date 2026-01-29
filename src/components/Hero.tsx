import {
  Github,
  Linkedin,
  Youtube,
  Facebook,
  Instagram,
  ChevronRight,
} from 'lucide-react';

type HeroProps = {
  scrollToSection: (id: string) => void;
  typeText: string;
};

function Hero({ typeText, scrollToSection }: HeroProps) {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center  px-6 pt-20 pb-10'
    >
      <div className='max-w-4xl w-full flex flex-col items-center '>
        <div className='mb-8'>
          <div className='flex items-center gap-2 text-lime-400 mb-4'>
            <span className='w-2 h-2 bg-lime-400 rounded-full animate-pulse'></span>
            <span className='text-sm'>Available for projects</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
            Hi, I'm <span className='text-lime-400'>Stephen</span>
          </h1>
          <div className='text-2xl md:text-3xl text-zinc-400 mb-8 h-12'>
            {typeText}
            <span className='animate-pulse text-lime-400'>|</span>
          </div>
          <p className='text-lg text-zinc-400 mb-12 max-w-2xl'>
            Independent developer crafting modern web experiences. Focused on
            clean code, continuous learning, and building solutions that matter.
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <button
              onClick={() => scrollToSection('journey')}
              className='px-8 py-3 bg-lime-400 text-zinc-950 rounded hover:bg-lime-500 transition-colors font-medium flex items-center gap-2'
            >
              View My Journey <ChevronRight className='w-4 h-4' />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className='px-8 py-3 border border-zinc-700 rounded hover:border-lime-400 hover:text-lime-400 transition-colors font-medium'
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className='flex gap-4 md:mt-12'>
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
              className='w-10 h-10 flex items-center justify-center border border-zinc-800 rounded hover:border-lime-400 hover:text-lime-400 transition-colors'
            >
              <social.icon className='w-5 h-5' />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Hero;
