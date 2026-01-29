import { Mail } from 'lucide-react';
import { useState } from 'react';
import { Rocket } from 'lucide-react';

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
              <h2 className='text-3xl font-bold'>Development Journey</h2>
            </div>
            <p className='text-zinc-400 mb-12 max-w-2xl text-lg'>
              A snapshot of my current projects, learning paths, and
              experiments. Each represents a step forward in my evolution as a
              developer.
            </p>
            <div className='flex flex-col gap-6'>
              {projects.map((project, i) => (
                <div
                  key={i}
                  className='border border-zinc-800 rounded-lg p-6 hover:border-lime-400/50 transition-all group bg-zinc-900/50'
                >
                  <div className='flex items-center justify-between mb-4'>
                    <span className='text-xs px-3 py-1 bg-zinc-800 rounded-full text-lime-400 border border-zinc-700'>
                      {project.type}
                    </span>
                    <span className='text-xs text-zinc-500'>
                      {project.status}
                    </span>
                  </div>
                  <h3 className='text-xl font-semibold mb-3 group-hover:text-lime-400 transition-colors'>
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
          </div>
          <div className=' flex flex-col flex-1'>
            <div className='flex items-center gap-3 mb-12'>
              <Mail className='w-6 h-6 text-lime-400' />
              <h2 className='text-3xl font-bold'>Let's Connect</h2>
            </div>
            <p className='text-zinc-400 mb-12 text-lg'>
              Have a project in mind or just want to chat about tech? I'm always
              open to interesting conversations and new opportunities.
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
          <span className='text-lime-400'>.dev</span> • Built with Reactjs &
          TailwindCSS
        </p>
      </div>
    </section>
  );
}
export default Contact;
