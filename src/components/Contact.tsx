import { Mail } from 'lucide-react';
import { useState } from 'react';
import { Handshake } from 'lucide-react';
import { projects } from '../data/content';

import ContactForm from './ContactForm';

function Contact() {
  const [isSent, setIsSent] = useState<boolean>(false);
  const year = new Date().getFullYear();

  return (
    <section id='contact' className='px-6 py-10 md:pt-32 pb-10  bg-zinc-900/50'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row gap-10'>
          <div className='flex-1'>
            <div className='flex items-center gap-3 mb-12'>
              <Handshake className='w-6 h-6 text-lime-400' />
              <h2 className='text-3xl font-bold'>Why Work With Me</h2>
            </div>

            <div className='flex flex-col gap-6'>
              {projects.map((project, i) => (
                <div
                  key={i}
                  className='border border-zinc-800 rounded-lg p-6 hover:border-lime-400/50 transition-all group bg-zinc-900/50'
                >
                  <div className='flex items-center justify-between mb-4'></div>
                  <h3 className='text-xl font-semibold mb-3 group-hover:text-lime-400 transition-colors'>
                    {project.title}
                  </h3>
                  <p className='text-zinc-400 text-sm mb-4 leading-relaxed'>
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className=' flex flex-col flex-1'>
            <div className='flex items-center gap-3 mb-12'>
              <Mail className='w-6 h-6 text-lime-400' />
              <h2 className='text-3xl font-bold'>Let's Connect</h2>
            </div>

            {isSent ? (
              "Thanks for reaching out! I've received your message and will get back to you soon."
            ) : (
              <ContactForm setIsSent={setIsSent} />
            )}
          </div>
        </div>
      </div>

      <div className='mt-12 pt-12 border-t border-zinc-800 text-center'>
        <p className='text-zinc-500 text-sm'>
          © {year} <span className='text-white'>stenix</span>
          <span className='text-lime-400'>.dev</span>
        </p>
      </div>
    </section>
  );
}
export default Contact;
