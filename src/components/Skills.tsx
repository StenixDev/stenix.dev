import { skills } from '../data/content';
import { animate, inView } from 'motion';
import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
}

interface SkillBarProps {
  skill: Skill;
}

function Skills() {
  return (
    <div>
      <h3 className='text-xl font-semibold mb-6 text-lime-400 text-center'>
        Core Technical Skills
      </h3>
      {skills.map((skill: Skill) => (
        <SkillBar key={skill.name} skill={skill} />
      ))}
    </div>
  );
}

function SkillBar({ skill }: SkillBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!barRef.current || !numberRef.current) return;

    const stop = inView(barRef.current, () => {
      // Animate the progress bar width
      animate(0, skill.level, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (latest) => {
          if (barRef.current) {
            barRef.current.style.width = `${latest}%`;
          }
          if (numberRef.current) {
            numberRef.current.textContent = `${Math.round(latest)}%`;
          }
        },
      });
    });

    return stop;
  }, [skill.level]);

  return (
    <div className='mb-6'>
      <div className='flex justify-between mb-2'>
        <span className='text-sm text-zinc-400'>{skill.name}</span>
        <span ref={numberRef} className='text-sm text-lime-400'>
          0%
        </span>
      </div>
      <div className='h-2 bg-zinc-800 rounded-full overflow-hidden'>
        <div
          ref={barRef}
          className='h-full w-0 bg-linear-to-r from-lime-500 to-lime-400'
        />
      </div>
    </div>
  );
}

export default Skills;
