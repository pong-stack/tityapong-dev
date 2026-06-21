'use client';

import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, FolderGit2 } from 'lucide-react';
import { projects } from '@/lib/projects-data';

const ACCENT = '#38bdf8';

// ── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Link href={`/projects/${project.id}`} className="block group">
      <motion.div
        className="overflow-hidden rounded-2xl flex flex-col h-full"
        style={{
          background: 'var(--bg-glass)',
          border: '1px solid var(--border-subtle)',
          backdropFilter: 'blur(16px)',
        }}
        whileHover={{ y: -3, borderColor: `${ACCENT}30` }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Cover Image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={project.images[0] || '/placeholder.svg'}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Bottom gradient fade */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(7,7,14,0.75) 0%, transparent 55%)' }}
          />
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          {/* Title */}
          <h3
            className="text-xl font-bold leading-tight"
            style={{ color: ACCENT }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed line-clamp-3 flex-1"
            style={{ color: 'var(--text-muted)' }}
          >
            {project.description}
          </p>

          {/* Tech tags — plain text separated by dots */}
          <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>
            {project.technologies.join('  ·  ')}
          </p>

          {/* Details link */}
          <span
            className="mt-1 self-start flex items-center gap-1.5 text-sm font-semibold group/btn"
            style={{ color: 'var(--text-muted)' }}
          >
            <span className="underline underline-offset-2 group-hover/btn:text-white transition-colors duration-200">
              details
            </span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

// ── Variants ─────────────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// ── Main Section ─────────────────────────────────────────────────────────────
export default function PortfolioShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div id="projects" className="section-wrapper">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)' }}
        >
          <FolderGit2 className="w-4 h-4 text-[var(--accent-indigo)]" />
        </div>
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Featured Projects</h2>
      </div>
      <p className="text-[var(--text-muted)] text-sm mb-10">
        Things I&apos;ve built — from concept to deployment. Click any card for full details.
      </p>

      {/* Grid */}
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {projects.map(project => (
          <motion.div key={project.id} variants={cardVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
