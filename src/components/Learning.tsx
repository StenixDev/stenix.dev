import { motion } from 'motion/react'; // or "framer-motion"
import { Brain, ChevronRight } from 'lucide-react';
function Learning() {
  return (
    <section id='learning' className='py-10 md:py-24 px-6'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className=' p-8 border border-zinc-800 rounded-lg bg-zinc-900/30'>
            <div className='flex items-start gap-4'>
              <Brain className='w-6 h-6 text-lime-400 mt-1 shrink-0' />
              <div>
                <h3 className='text-xl font-semibold mb-3'>
                  Continuous Learning
                </h3>
                <p className='text-zinc-400 leading-relaxed mb-4'>
                  Beyond active projects, I actively explore new technologies,
                  practice through personal repositories, and document my
                  learning journey on GitHub. Every day is a chance to improve
                  my understanding of system design and modern frameworks.
                </p>
                <a
                  href='https://github.com/StenixDev?tab=repositories'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 text-lime-400 hover:underline'
                >
                  View my GitHub activity <ChevronRight className='w-4 h-4' />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Learning;
