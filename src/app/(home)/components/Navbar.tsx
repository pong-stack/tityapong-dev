'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [cambodiaTime, setCambodiaTime] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll-aware shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Phnom_Penh',
      });
      setCambodiaTime(timeString);
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(7, 7, 14, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <motion.nav
        className="flex justify-between items-center max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Logo */}
        <motion.a
          href="/"
          className="relative group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="font-bold text-lg tracking-tight text-[var(--text-primary)] font-mono">
            Sok_<span className="gradient-text-violet">Tityapong</span>
          </span>
          <span
            className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
            style={{ background: 'linear-gradient(90deg, var(--accent-violet), var(--accent-cyan))' }}
          />
        </motion.a>

        {/* Right: Time Badge only */}
        <div className="flex items-center gap-2">
          {/* Time Badge */}
          {cambodiaTime && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-subtle)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Pulse dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>

              {/* Flag */}
              <span className="overflow-hidden rounded-sm ring-1 ring-white/10">
                <Image
                  src="/Flag_of_Cambodia.svg"
                  alt="Cambodia flag"
                  width={18}
                  height={12}
                  className="h-3 w-[18px] object-cover"
                />
              </span>

              <span className="hidden sm:block text-[11px] font-medium text-[var(--text-muted)] tracking-wide">
                Phnom Penh
              </span>

              <div className="hidden sm:block h-3.5 w-px bg-white/10" />

              <span className="text-xs font-semibold tabular-nums font-mono text-[var(--text-primary)]">
                {cambodiaTime}
              </span>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </div>
  );
}
