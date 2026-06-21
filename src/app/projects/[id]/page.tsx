'use client';

import { notFound } from 'next/navigation';
import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { projects, techIconMap } from '@/lib/projects-data';

// ── Image Carousel ────────────────────────────────────────────────────────────
function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [idx, setIdx] = useState(0);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl"
      style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0"
        >
          <Image
            src={images[idx] || '/placeholder.svg'}
            alt={`${title} screenshot ${idx + 1}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => setIdx(i => (i - 1 + images.length) % images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button
            type="button"
            onClick={() => setIdx(i => (i + 1) % images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                className="rounded-full transition-all duration-200"
                style={{
                  width: i === idx ? '20px' : '6px',
                  height: '6px',
                  background: i === idx ? '#fff' : 'rgba(255,255,255,0.35)',
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <div
            className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-full text-xs font-mono"
            style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)', color: 'rgba(255,255,255,0.7)' }}
          >
            {idx + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}

// ── Shared accent color for the detail page ────────────────────────────────
const ACCENT = '#38bdf8';

// ── Page ─────────────────────────────────────────────────────────────────────
export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const projectIndex = projects.findIndex(p => p.id === id);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const prevProject = projects[projectIndex - 1] ?? null;
  const nextProject = projects[projectIndex + 1] ?? null;

  return (
    <div
      className="min-h-screen"
      style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      {/* ── Top navigation bar ── */}
      <div className="sticky top-0 z-40 border-b" style={{ background: 'rgba(7,7,14,0.85)', backdropFilter: 'blur(16px)', borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            back to projects
          </Link>

          {/* Prev / Next */}
          <div className="flex items-center gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.id}`}
                className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 hover:text-white"
                style={{ color: 'var(--text-muted)' }}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                prev
              </Link>
            ) : <span />}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.id}`}
                className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 hover:text-white"
                style={{ color: 'var(--text-muted)' }}
              >
                next
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ── Hero section ── */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Meta + Title */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-5"
          >
            {/* Project counter */}
            <p className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
              [ PROJECT {String(projectIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} ]
            </p>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
              style={{ color: ACCENT }}
            >
              {project.title}
            </h1>

            {/* Period row */}
            <div className="flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-mono">{project.period}</span>
            </div>

            {/* Short description */}
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {project.description}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.links.map(link => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-80"
                  style={{
                    background: `${ACCENT}18`,
                    border: `1px solid ${ACCENT}35`,
                    color: ACCENT,
                  }}
                >
                  {link.icon}
                  {link.label}
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ImageCarousel images={project.images} title={project.title} />
          </motion.div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
      </div>

      {/* ── Details section ── */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left: The idea + features */}
          <div className="lg:col-span-2 space-y-10">

            {/* The idea */}
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <span style={{ color: ACCENT }}>//</span> The idea
              </h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {project.description}
              </p>
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <span style={{ color: ACCENT }}>//</span> Key Features
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {project.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: ACCENT }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Right: Built with */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-5"
          >
            <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Built with</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => {
                const cfg = techIconMap[tech] ?? { icon: null, color: '#94a3b8' };
                return (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <span className="text-base leading-none flex-shrink-0" style={{ color: cfg.color }}>
                      {cfg.icon}
                    </span>
                    {tech}
                  </span>
                );
              })}
            </div>
          </motion.aside>
        </div>
      </div>

      {/* ── Bottom navigation ── */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="h-px mb-10" style={{ background: 'rgba(255,255,255,0.06)' }} />
        <div className="flex items-center justify-between">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.id}`}
              className="group flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="group-hover:text-white transition-colors duration-200">{prevProject.title}</span>
            </Link>
          ) : <span />}
          {nextProject && (
            <Link
              href={`/projects/${nextProject.id}`}
              className="group flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: 'var(--text-muted)' }}
            >
              <span className="group-hover:text-white transition-colors duration-200">{nextProject.title}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
