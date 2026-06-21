'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Send, Mail } from 'lucide-react';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Tityapong' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sok-tityapong-2194802b6/' },
  { icon: Send, label: 'Telegram', href: 'https://t.me/Tityapong' },
  { icon: Mail, label: 'Email', href: 'mailto:soktityapong@example.com' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden mt-0"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Gradient Top Border */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(168,85,247,0.4), transparent)' }}
      />

      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(99,102,241,0.03) 0%, transparent 100%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo + Copyright */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-bold font-mono text-sm text-[var(--text-primary)]">
              Sok_<span className="gradient-text-violet">Tityapong</span>
            </span>
            <p className="text-xs text-[var(--text-muted)]">
              © {year} Sok Tityapong. Built with Next.js & ♥
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.92 }}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-muted)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.35)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--accent-indigo)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
                }}
              >
                <Icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
