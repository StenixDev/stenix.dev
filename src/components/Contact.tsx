import { Mail } from 'lucide-react';
import { useRef, useState } from 'react';
import { Rocket } from 'lucide-react';
import { projects } from '../data/projects';
import emailjs from '@emailjs/browser';

function Contact() {
  const [isSending, setIsSending] = useState<boolean>(false);
  const year = new Date().getFullYear();

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);

    emailjs
      .sendForm('service_wcb7mxh', 'template_uxhombi', form.current!, {
<<<<<<< HEAD
        publicKey: import.meta.env.VITE_SENDEMAIL_PUBLIC,
=======
        publicKey: 'ZhjpIv5vuzI16M4jH',
>>>>>>> e70e5fa1708f5bf4852600e0835927605e1f575e
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id='contact' className='px-6 py-10 md:pt-32 pb-10  bg-zinc-900/50'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row gap-10'>
          <div className='flex-1'>
            <div className='flex items-center gap-3 mb-12'>
              <Rocket className='w-6 h-6 text-lime-400' />
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
            <p className='text-zinc-400 mb-12 text-lg'>
              If you have an idea, a small business, or a project that needs a
              developer who’s flexible and eager to grow, I’d love to hear about
              it.
            </p>
            <form onSubmit={sendEmail} ref={form} className='space-y-6'>
              <div>
                <label className='block text-sm text-zinc-400 mb-2'>Name</label>
                <input
                  type='text'
                  name='name'
                  className='w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors'
                  placeholder='Your name'
                />
              </div>
              <div>
                <label className='block text-sm text-zinc-400 mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  className='w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors'
                  placeholder='your.email@example.com'
                />
              </div>
              <div>
                <label className='block text-sm text-zinc-400 mb-2'>
                  Message
                </label>
                <textarea
                  rows={6}
                  name='message'
                  className='w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors resize-none'
                  placeholder='Tell me about your project...'
                ></textarea>
              </div>
              <div className='flex justify-end'>
                <button
                  disabled={isSending}
                  type='submit'
                  className='w-full md:w-auto px-8 py-3 bg-lime-400 text-zinc-950 rounded hover:bg-lime-500 transition-colors font-medium'
                >
                  {isSending ? 'Sending' : 'Send'}
                </button>
              </div>
            </form>
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
