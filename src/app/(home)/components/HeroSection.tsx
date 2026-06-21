'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowDown, Github, Linkedin, Sparkles } from 'lucide-react';
import Image from 'next/image';

const roles = ['Full Stack Developer'];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const role = roles[0];
    const speed = isDeleting ? 40 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(role.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
        if (charIndex + 1 === role.length) {
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        setDisplayText(role.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Animated Dot Grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* ── Floating Orbs ── */}
      <div className="orb orb-violet" style={{ width: '500px', height: '500px', top: '-10%', left: '-10%' }} />
      <div className="orb orb-cyan" style={{ width: '400px', height: '400px', top: '20%', right: '-5%' }} />
      <div className="orb orb-purple" style={{ width: '350px', height: '350px', bottom: '-5%', left: '30%' }} />

      {/* ── Content ── */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            className="flex flex-col gap-6 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Mobile Header: Name & Profile Photo side-by-side */}
            <div className="flex lg:hidden items-center justify-between gap-4 w-full">
              <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tight text-white leading-tight">
                  Sok Tityapong
                </h1>
                <p className="text-lg font-semibold leading-snug" style={{ color: '#38bdf8' }}>
                  Full Stack <br /> Developer
                </p>
              </div>
              <div className="relative w-24 h-24 flex-shrink-0 rounded-full overflow-hidden border border-zinc-800 bg-zinc-950">
                <Image
                  src="/Tityapong_PV.png"
                  alt="Sok Tityapong"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Mobile Meta (Location & Availability Status) */}
            <div className="flex lg:hidden items-center flex-wrap gap-4 text-xs text-[var(--text-muted)] border-t border-zinc-800/40 pt-4 mt-2">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Phnom Penh, Cambodia</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available</span>
              </div>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:flex flex-col gap-6">
              {/* Badge */}
              <motion.div variants={itemVariants} className="flex justify-start">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background: 'rgba(16,185,129,0.08)',
                    border: '1px solid rgba(16,185,129,0.25)',
                  }}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">
                    Available for opportunities
                  </span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={itemVariants} className="space-y-2">
                <p className="text-sm font-medium text-[var(--text-muted)] tracking-widest uppercase">
                  Hello World, I&apos;m
                </p>
                <h1
                  className="font-bold leading-none tracking-tighter text-[var(--text-primary)]"
                  style={{ fontSize: 'clamp(3.2rem, 8vw, 6.5rem)' }}
                >
                  Sok{' '}
                  <span style={{ color: '#38bdf8' }}>Tityapong</span>
                </h1>

                {/* Location */}
                <div className="flex items-center justify-start gap-2 pt-1">
                  <MapPin className="w-4 h-4 text-[var(--text-muted)]" />
                  <span className="text-sm text-[var(--text-muted)]">Phnom Penh, Cambodia</span>
                </div>
              </motion.div>

              {/* Typewriter Role */}
              <motion.div variants={itemVariants}>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
                  <span className="text-[var(--text-muted)]">~/</span>{' '}
                  <span style={{ color: '#38bdf8' }}>{displayText}</span>
                  <span className="inline-block w-0.5 h-7 ml-0.5 animate-pulse" style={{ background: '#38bdf8' }} />
                </h2>
              </motion.div>
            </div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-xl text-left"
            >
              IT Engineering student at{' '}
              <span className="text-[var(--text-primary)] font-medium">Royal University of Phnom Penh</span>{' '}
              crafting elegant digital experiences with modern web technologies.
              Passionate about clean code, great design, and building things that matter.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 justify-start"
            >
              {[
                { num: '5+', label: 'Projects Built' },
                { num: '4+', label: 'Tech Stacks' },
                { num: '2+', label: 'Years Coding' },
              ].map(stat => (
                <div key={stat.label} className="text-left">
                  <div className="text-2xl font-bold" style={{ color: '#38bdf8' }}>{stat.num}</div>
                  <div className="text-xs text-[var(--text-muted)] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>


          </motion.div>

          {/* Right: Profile Photo */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ProfilePhoto />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[var(--text-muted)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function ProfilePhoto() {
  return (
    <div className="relative w-80 h-80">
      {/* Cyan outer glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.2) 0%, transparent 70%)',
          filter: 'blur(30px)',
          transform: 'scale(1.35)',
        }}
      />

      {/* Sky glow — offset */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          transform: 'scale(1.5) translate(15%, -10%)',
        }}
      />

      {/* Rotating conic border ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #38bdf8, #7dd3fc, #38bdf8, #0ea5e9, #38bdf8)',
          padding: '2.5px',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-full h-full rounded-full" style={{ background: 'var(--bg-primary)' }} />
      </motion.div>

      {/* Photo */}
      <div className="absolute inset-[3px] rounded-full overflow-hidden">
        <Image
          src="/Tityapong_PV.png"
          alt="Sok Tityapong"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* "Open to work" badge — top right */}
      <motion.div
        className="absolute -top-2 -right-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
        style={{
          background: 'rgba(16,185,129,0.12)',
          border: '1px solid rgba(16,185,129,0.3)',
          backdropFilter: 'blur(12px)',
          color: '#34d399',
        }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
        Open to work
      </motion.div>

      {/* "Full Stack Dev" chip — bottom left */}
      <motion.div
        className="absolute -bottom-3 -left-4 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium"
        style={{
          background: 'rgba(7,7,14,0.85)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(16px)',
          color: 'var(--text-primary)',
        }}
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <span className="text-base">⚡</span>
        Full Stack Dev
      </motion.div>
    </div>
  );
}
