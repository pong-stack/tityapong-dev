'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
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
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { Layers } from 'lucide-react';

const skills = [
  { name: 'React.js',       icon: SiReact,       color: '#61DAFB' },
  { name: 'Next.js',        icon: SiNextdotjs,   color: '#FFFFFF' },
  { name: 'Vue.js',         icon: SiVuedotjs,    color: '#4FC08D' },
  { name: 'TypeScript',     icon: SiTypescript,  color: '#3178C6' },
  { name: 'JavaScript',     icon: SiJavascript,  color: '#F7DF1E' },
  { name: 'Tailwind CSS',   icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js',        icon: SiNodedotjs,   color: '#339933' },
  { name: 'Express.js',     icon: SiExpress,     color: '#FFFFFF' },
  { name: 'NestJS',         icon: SiNestjs,      color: '#E0234E' },
  { name: 'PHP',            icon: SiPhp,         color: '#777BB4' },
  { name: 'Laravel',        icon: SiLaravel,     color: '#FF2D20' },
  { name: 'RESTful APIs',   icon: TbApi,         color: '#FF6B35' },
  { name: 'Postman',        icon: SiPostman,     color: '#FF6C37' },
  { name: 'MySQL',          icon: SiMysql,       color: '#4479A1' },
  { name: 'PostgreSQL',     icon: SiPostgresql,  color: '#336791' },
  { name: 'Git',            icon: SiGit,         color: '#F05032' },
  { name: 'GitHub',         icon: SiGithub,      color: '#FFFFFF' },
  { name: 'Docker',         icon: SiDocker,      color: '#2496ED' },
  { name: 'Jenkins',        icon: SiJenkins,     color: '#D24939' },
  { name: 'Ansible',        icon: SiAnsible,     color: '#EE0000' },
  { name: 'Kubernetes',     icon: SiKubernetes,  color: '#326CE5' },
  { name: 'Figma',          icon: SiFigma,       color: '#9747FF' },
  { name: 'Vercel',         icon: SiVercel,      color: '#FFFFFF' },
  { name: 'Render',         icon: SiRender,      color: '#46E3B7' },
  { name: 'Railway',        icon: SiRailway,     color: '#FFFFFF' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
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

      {/* Pill Grid */}
      <motion.div
        ref={ref}
        className="flex flex-wrap gap-3"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {skills.map(skill => (
          <motion.div
            key={skill.name}
            variants={pillVariants}
            className="group flex items-center gap-2.5 px-4 py-2 rounded-full cursor-default select-none"
            style={{
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-subtle)',
              backdropFilter: 'blur(12px)',
              transition: 'all 0.25s ease',
            }}
            whileHover={{
              scale: 1.06,
              borderColor: `${skill.color}45`,
              backgroundColor: `${skill.color}0d`,
              boxShadow: `0 4px 20px ${skill.color}20`,
            }}
          >
            {/* Icon */}
            <skill.icon
              className="text-base flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
              style={{ color: skill.color }}
            />
            {/* Name */}
            <span
              className="text-sm font-medium whitespace-nowrap"
              style={{ color: 'var(--text-primary)' }}
            >
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
