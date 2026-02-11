import { Github, Linkedin, Facebook, Instagram, Plus } from 'lucide-react';
import profile from '../assets/profile.png';
import { motion } from 'motion/react'; // or "framer-motion"

type HeroProps = {
  scrollToSection: (id: string) => void;
  typeText: string;
  stephen: string;
};

function Hero({ typeText, stephen, scrollToSection }: HeroProps) {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center  px-6 pt-20 pb-10'
    >
      <div className='max-w-4xl w-full flex flex-col items-center  '>
        <div className='mb-8'>
          <div className='flex items-center gap-2 text-lime-400 mb-4 '>
            <span className='w-2 h-2 bg-lime-400 rounded-full animate-pulse'></span>
            <span className='text-sm '>Available for projects</span>
          </div>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>
            {/* Hi, I'm <span className='text-lime-400'>Stephen</span> */}
            {stephen}
            <span className='animate-pulse text-lime-400 ml-2'>&gt;</span>
          </h1>
          <div className='text-2xl md:text-3xl text-white mb-8 h-12'>
            {typeText}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeIn', delay: 3 }}
          >
            <p className='text-lg text-lime-400 mb-12 max-w-2xl  '>
              <img
                src={profile}
                alt='stenix'
                width={120}
                className='float-left mr-4 mb-2 '
              />
              Independent developer focused on crafting modern web experiences
              and building solutions that matter.
            </p>
            <div className='flex flex-wrap gap-4 justify-center'>
              <a
                className='px-8 py-3 bg-lime-400 text-zinc-950 rounded hover:bg-lime-500 transition-colors font-medium flex items-center gap-2'
                href='https://www.linkedin.com/in/stephemarkg/'
                target='_blank'
              >
                Connect <Plus className='w-4 h-4' />
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className='px-8 py-3 border border-zinc-700 rounded hover:border-lime-400 hover:text-lime-400 transition-colors font-medium cursor-pointer'
              >
                Hire Me!
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeIn', delay: 3 }}
        >
          <div className='flex gap-4 md:mt-12'>
            {[
              { icon: Github, url: 'https://github.com/StenixDev' },
              {
                icon: Linkedin,
                url: 'https://www.linkedin.com/in/stephemarkg/',
              },

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
        </motion.div>
      </div>
    </section>
  );
}
export default Hero;
