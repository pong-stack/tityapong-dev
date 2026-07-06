'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Patrick_Hand } from 'next/font/google';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiRender,
  SiRailway,
  SiPhp,
  SiLaravel,
  SiNestjs,
  SiDocker,
  SiJenkins,
  SiAnsible,
  SiKubernetes,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiServerless,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { Layers } from 'lucide-react';

const patrickHand = Patrick_Hand({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const frontendSkills = [
  { name: 'ReactJS', icon: SiReact, color: '#61DAFB' },
  { name: 'Nextjs', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'VueJs', icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'Tailwindcss', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Typescript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Javascript', icon: SiJavascript, color: '#F7DF1E' },
];

const backendSkills = [
  { name: 'Expressjs', icon: SiExpress, color: '#FFFFFF' },
  { name: 'NestJs', icon: SiNestjs, color: '#E0234E' },
  { name: 'Serverless', icon: SiServerless, color: '#FD5750' },
  { name: 'Nodejs', icon: SiNodedotjs, color: '#339933' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'RESTful APIs', icon: TbApi, color: '#FF6B35' },
];

const databaseSkills = [
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Mongo DB', icon: SiMongodb, color: '#47A248' },
];

const devOpsToolsSkills = [
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
  { name: 'Ansible', icon: SiAnsible, color: '#EE0000' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
  { name: 'Render', icon: SiRender, color: '#46E3B7' },
  { name: 'Railway', icon: SiRailway, color: '#FFFFFF' },
];

const categories = [
  { id: 'FRONTEND', title: '// FRONTEND', skills: frontendSkills },
  { id: 'BACKEND', title: '// BACKEND', skills: backendSkills },
  { id: 'DATABASE', title: '// DATABASE', skills: databaseSkills },
  { id: 'TOOLS', title: '// TOOLS & DEVOPS', skills: devOpsToolsSkills },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', staggerChildren: 0.05 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 5 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

export default function Skill() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div id="skills" className="section-wrapper">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)' }}
        >
          <Layers className="w-4 h-4 text-[var(--accent-indigo)]" />
        </div>
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Tech Stack</h2>
      </div>
      <p className="text-[var(--text-muted)] text-sm mb-10">
        Technologies I work with across the full stack as a Next.js Developer and React Developer. Specializing in TypeScript, Node.js, and databases to build high-performance, responsive web systems in Phnom Penh, Cambodia.
      </p>

      {/* Tech Stack Container (Without card background) */}
      <motion.div
        ref={ref}
        className="w-full relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="space-y-8 md:space-y-10 relative z-10">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={rowVariants}
              className="flex flex-col gap-3.5"
            >
              {/* Category Comment Header */}
              <div className="font-mono text-xs md:text-sm font-semibold tracking-widest text-zinc-500 select-none">
                {category.title}
              </div>

              {/* Skills Row */}
              <div className="flex flex-wrap gap-2.5 md:gap-3.5">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={pillVariants}
                    className={`${patrickHand.className} group flex items-center gap-2 px-3 py-1 md:px-3.5 md:py-1.5 rounded border border-white/[0.06] bg-white/[0.02] shadow-[0_1px_2px_rgba(0,0,0,0.2)] transition-all duration-200 cursor-default select-none`}
                    whileHover={{
                      scale: 1.04,
                      y: -1,
                      borderColor: `${skill.color}45`,
                      backgroundColor: `${skill.color}0a`,
                    }}
                  >
                    {/* Brand Icon */}
                    <skill.icon
                      className="text-base md:text-lg flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    {/* Skill Name */}
                    <span className="text-sm md:text-base font-medium text-[var(--text-primary)] transition-colors duration-150">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
