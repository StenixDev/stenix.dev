import { Mail } from 'lucide-react';
import { useState } from 'react';
import { Rocket } from 'lucide-react';

const projects = [
  {
    type: 'Adaptable',
    title: 'Adaptable',
    description:
      'I’m not locked into one stack. I learn what your project needs.',
    tech: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
    status: 'In Progress',
  },
  {
    type: 'Clear Communication',
    title: 'Clear Communication',
    description:
      'I keep things transparent, simple, and honest throughout the process.',
    tech: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    status: 'Ongoing',
  },
  {
    type: 'Long-Term Mindset',
    title: 'Long-Term Mindset',
    description:
      'I care about building relationships and growing with your project over time.',
    tech: ['OpenAI', 'Python', 'TensorFlow', 'FastAPI'],
    status: 'Research',
  },
];
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const year = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label className='block text-sm text-zinc-400 mb-2'>Name</label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors resize-none'
                  placeholder='Tell me about your project...'
                ></textarea>
              </div>
              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='w-full md:w-auto px-8 py-3 bg-lime-400 text-zinc-950 rounded hover:bg-lime-500 transition-colors font-medium'
                >
                  Send
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
