'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Code2, GraduationCap, MapPin } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="about" className="section-wrapper" ref={ref}>
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(56,189,248,0.12)', border: '1px solid rgba(56,189,248,0.2)' }}
        >
          <User className="w-4 h-4 text-[#38bdf8]" />
        </div>
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">About Me</h2>
      </div>
      <p className="text-[var(--text-muted)] text-sm mb-10">
        My background, engineering philosophy, and journey in software development.
      </p>

      {/* Grid Content */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* Left column: Bio card */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-2 rounded-2xl p-6 flex flex-col gap-5 justify-between relative overflow-hidden"
          style={{
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-subtle)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="text-[#38bdf8]">#</span> Who is Sok Tityapong?
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              I am a passionate **Full Stack Developer** and **Next.js Developer** based in Phnom Penh, **Cambodia**. Currently pursuing my Bachelor's degree in Information Technology Engineering at the **Royal University of Phnom Penh (RUPP)**, I bridge academic concepts with real-world industry requirements.
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              My core technical specialization lies in building high-performance, responsive web applications using **Next.js**, **React**, **TypeScript**, and **Node.js**. I take pride in crafting clean, modular code, premium design aesthetics, and optimizing web experiences for search visibility and technical SEO performance.
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              From building secure administrative systems for ministries to creating interactive, real-time consumer platforms, I enjoy translating complex logic into user-friendly digital architectures.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-zinc-800/40 text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Phnom Penh, Cambodia</span>
            </div>
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>IT Engineering Student at RUPP</span>
            </div>
          </div>
        </motion.div>

        {/* Right column: Highlights cards */}
        <div className="flex flex-col gap-6">
          {/* Engineering mindset card */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl p-6 relative overflow-hidden flex-1"
            style={{
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-subtle)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20 mb-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
              </div>
              <h4 className="text-sm font-bold text-white">Full Stack Engineering</h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Developing both client interfaces and server-side components. I ensure security (JWT), database speed (MySQL/PostgreSQL), and real-time synchronization (Socket.io).
              </p>
            </div>
          </motion.div>

          {/* Next.js expertise card */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl p-6 relative overflow-hidden flex-1"
            style={{
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-subtle)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div className="space-y-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-violet-500/10 border border-violet-500/20 mb-2">
                <GraduationCap className="w-4 h-4 text-violet-400" />
              </div>
              <h4 className="text-sm font-bold text-white">Modern Frameworks</h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Expertise in React, Vue.js, and specialized in Next.js App Router architectures to output highly fast, SEO-friendly, statically optimized, and server-rendered applications.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
