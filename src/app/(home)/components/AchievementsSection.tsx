'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, BookOpen, Code2, Shield, Star, Trophy, Zap } from 'lucide-react';

const achievements = [
  {
    icon: Shield,
    title: 'Cyber Arena 2026',
    org: 'Team H1T – National Cybersecurity CTF',
    description: "Participated in Cyber Arena 2026, Cambodia's national cybersecurity Capture The Flag (CTF) competition, as a member of Team H1T. Selected as one of the Top 10 reserve teams, competing across Digital Forensics, Binary Exploitation (Pwn), Cryptography, Reverse Engineering, Web Security, and OSINT.",
    color: '#a855f7',
    year: '2026',
  },

  {
    icon: Star,
    title: 'Full Scholarship',
    org: 'ANT Training Center – MPTC',
    description: 'Awarded a full scholarship for the Web Development program — selected based on academic performance and potential.',
    color: '#f59e0b',
    year: '2024',
  },

  {
    icon: BookOpen,
    title: 'DevOps Course Graduate',
    org: 'Sala Cyber',
    description: 'Successfully completed a comprehensive DevOps program covering Docker, Kubernetes, Jenkins, Ansible, and CI/CD pipelines.',
    color: '#22d3ee',

    year: '2025–2026',
  },


  {
    icon: Award,
    title: '5+ Production Projects',
    org: 'Personal & Team Projects',
    description: 'Shipped 5+ production-grade web applications ranging from e-commerce platforms to government ticketing systems.',
    color: '#f97316',
    year: '2023–2025',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function AchievementsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div id="achievements" className="section-wrapper">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.2)' }}
        >
          <Trophy className="w-4 h-4 text-amber-400" />
        </div>
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Achievements</h2>
      </div>
      <p className="text-[var(--text-muted)] text-sm mb-10">
        Milestones, recognitions, and moments that shaped my journey.
      </p>

      {/* Grid */}
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {achievements.map(item => (
          <motion.div
            key={item.title}
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl p-5"
            style={{
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-subtle)',
              backdropFilter: 'blur(16px)',
            }}
            whileHover={{
              y: -3,
              borderColor: `${item.color}30`,
              boxShadow: `0 20px 40px rgba(0,0,0,0.45), 0 0 30px ${item.color}10`,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient wash */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
              style={{ background: `radial-gradient(400px at 0% 0%, ${item.color}07, transparent 70%)` }}
            />

            {/* Top row: Icon + Year */}
            <div className="flex items-start justify-between mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <span
                className="text-xs font-mono px-2.5 py-1 rounded-full"
                style={{
                  background: `${item.color}10`,
                  border: `1px solid ${item.color}20`,
                  color: item.color,
                }}
              >
                {item.year}
              </span>
            </div>

            {/* Title & Org */}
            <h3 className="font-bold text-[var(--text-primary)] mb-1 leading-tight">{item.title}</h3>
            <p className="text-xs font-medium mb-3" style={{ color: item.color }}>{item.org}</p>

            {/* Description */}
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.description}</p>

            {/* Bottom accent bar */}
            <div
              className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
              style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

