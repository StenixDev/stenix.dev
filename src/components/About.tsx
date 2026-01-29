import { Code2 } from 'lucide-react';
import profile from '../assets/profile.png';

const skills = [
  { name: 'Frontend Development', level: 90 },
  { name: 'Backend Architecture', level: 85 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'DevOps & Cloud', level: 75 },
];

function About() {
  return (
    <section id='about' className='py-10 md:py-32  px-6 bg-zinc-900/50'>
      <div className='max-w-4xl mx-auto'>
        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <div className='flex items-center gap-3 mb-12'>
              <Code2 className='w-6 h-6 text-lime-400' />
              <h2 className='text-3xl font-bold'>About Me</h2>
            </div>
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
            <div className='flex justify-center mb-6'>
              <img src={profile} alt='stenix' width={120} />
            </div>
            <h3 className='text-xl font-semibold mb-6 text-lime-400'>
              Core Skills
            </h3>
            {skills.map((skill, i) => (
              <div key={i} className='mb-6'>
                <div className='flex justify-between mb-2'>
                  <span className='text-sm text-zinc-400'>{skill.name}</span>
                  <span className='text-sm text-lime-400'>{skill.level}%</span>
                </div>
                <div className='h-2 bg-zinc-800 rounded-full overflow-hidden'>
                  <div
                    className='h-full bg-linear-to-r from-lime-500 to-lime-400 transition-all duration-1000'
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
