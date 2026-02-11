import { motion } from 'motion/react'; // or "framer-motion"
import { Code2 } from 'lucide-react';
import Skills from './Skills';

function About() {
  return (
    <section
      id='about'
      className='py-10 md:py-32  px-6 bg-zinc-900/50 scroll-mt-20'
    >
      <div className='max-w-4xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className='flex items-center gap-3 mb-12'>
                <Code2 className='w-6 h-6 text-lime-400' />
                <h2 className='text-3xl font-bold'>About Me</h2>
              </div>
              <p className='text-zinc-400 leading-relaxed mb-6'>
                I'm an independent developer with a passion for building
                functional web applications. My journey in tech spans CompTech,
                Networking, Cybersecurity, System Administration, and Web
                Development.
              </p>
              <p className='text-zinc-400 leading-relaxed mb-6'>
                I'm always eager to expand my skill set based on project needs.
                Whether it's a new framework, library, or technology stack, I'm
                committed to learning what's necessary to deliver the best
                solution for your project. My adaptability and quick learning
                ability ensure that I can tackle diverse challenges effectively.
              </p>
            </motion.div>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
}
export default About;
