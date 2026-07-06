'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Calendar, ExternalLink, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import type React from 'react';

interface Experience {
  company: string;
  logo: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  url?: string;
  isCurrent?: boolean;
}

interface Education {
  institution: string;
  logo: string;
  degree: string;
  startDate: string;
  endDate: string;
  url?: string;
  isCurrent?: boolean;
}

const experiences: Experience[] = [
  {
    company: 'Ministry of Economy and Finance',
    logo: '/mef_logo.png',
    role: 'Developer',
    startDate: 'Sep 2025',
    endDate: 'Present',
    isCurrent: true,
    description: [
      'Collaborated with cross-functional teams to develop and maintain user-friendly and responsive UI/UX.',
      'Participated in technical discussions to translate Business Logic into frontend workflows.',
      'Implemented and integrated RESTful APIs based on backend specifications and Business Logic.',
      'Worked closely with the backend team to ensure smooth data flow, validation, and system integration.',
    ],
  },
  {
    company: 'Cotafer Co., Ltd',
    logo: '/cotafer_logo.jpeg',
    role: 'Web Developer',
    startDate: 'Mar 2025',
    endDate: 'Aug 2025',
    description: [
      'Wrote and tested Vue.js components to ensure correct functionality',
      'Reviewed and debugged code to maintain high code quality and performance',
      'Ensured maintainability by following clean code practices and component reusability',
    ],
  },
];

const education: Education[] = [
  {
    institution: 'Royal University of Phnom Penh',
    logo: '/rupp.jpeg',
    degree: 'Bachelor of Information Technology Engineering',
    startDate: 'Mar 2022',
    endDate: '2026',
    isCurrent: false,
    url: 'https://www.fe.rupp.edu.kh/',
  },
  {
    institution: 'Sala Cyber',
    logo: '/salacyber.png',
    degree: 'DevOps Course',
    startDate: 'Dec 2025',
    endDate: 'Mar 2026',
    isCurrent: false,
    url: 'https://www.salacyber.com/',
  },
  {
    institution: 'ANT Technology Training Center',
    logo: '/ant.png',
    degree: 'Fullstack Web Developer',
    startDate: 'Jan 2024',
    endDate: 'Mar 2025',
    url: 'https://antkh.com/',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function SectionTitle({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(56,189,248,0.10)', border: '1px solid rgba(56,189,248,0.2)' }}
      >
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-[var(--text-primary)]">{text}</h2>
    </div>
  );
}

function TimelineItem({
  logo,
  title,
  subtitle,
  dateRange,
  bullets,
  url,
  isCurrent,
  isLast,
}: {
  logo: string;
  title: string;
  subtitle: string;
  dateRange: string;
  bullets: string[];
  url?: string;
  isCurrent?: boolean;
  isLast?: boolean;
}) {

  // ── Mobile card (shown below lg) — collapsible ──────────────────────────
  function MobileCard() {
    const [open, setOpen] = useState(false);
    const hasBullets = bullets.length > 0;

    const cardContent = (
      <>
        {/* Top: logo + name + role + chevron */}
        <div className="flex items-center gap-3 w-full">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <Image
              src={logo || '/placeholder.svg'}
              alt={title}
              width={40}
              height={40}
              className="object-contain rounded-lg"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm text-[var(--text-primary)] leading-tight">{title}</h3>
            <p className="text-xs mt-0.5" style={{ color: '#38bdf8' }}>{subtitle}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {isCurrent && (
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#34d399' }}
              />
            )}
            {hasBullets && (
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <ChevronDown className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
              </motion.div>
            )}
          </div>
        </div>

        {/* Date row */}
        <div className="flex items-center justify-between w-full">
          <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            {dateRange}
          </span>
          {url && !hasBullets && (
            <span className="inline-flex items-center gap-1 text-xs font-medium" style={{ color: '#38bdf8' }}>
              <ExternalLink className="w-2.5 h-2.5" />
              Visit Website
            </span>
          )}
        </div>
      </>
    );

    const renderHeader = () => {
      if (hasBullets) {
        return (
          <button
            type="button"
            className="w-full flex flex-col gap-3 p-4 text-left focus:outline-none"
            onClick={() => setOpen(o => !o)}
          >
            {cardContent}
          </button>
        );
      }
      if (url) {
        return (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex flex-col gap-3 p-4 text-left cursor-pointer"
          >
            {cardContent}
          </a>
        );
      }
      return (
        <div className="w-full flex flex-col gap-3 p-4 text-left">
          {cardContent}
        </div>
      );
    };

    return (
      <motion.div
        variants={itemVariants}
        className="lg:hidden rounded-2xl mb-3 overflow-hidden"
        style={{
          background: 'var(--bg-glass)',
          border: '1px solid var(--border-subtle)',
          backdropFilter: 'blur(16px)',
        }}
      >
        {/* Header row — interactive depending on content */}
        {renderHeader()}

        {/* Collapsible body */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ overflow: 'hidden' }}
            >
              <div
                className="px-4 pb-4 space-y-2 pt-1"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                {bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: '#38bdf8' }}
                    />
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{b}</p>
                  </div>
                ))}
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs mt-2 hover:underline"
                    style={{ color: '#38bdf8' }}
                    onClick={e => e.stopPropagation()}
                  >
                    <ExternalLink className="w-3 h-3" />
                    Visit Website
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  // ── Desktop timeline (shown at lg+) ──────────────────────────────────────
  const desktopItem = (
    <motion.div
      variants={itemVariants}
      className="hidden lg:flex relative gap-5 pb-10"
    >
      {/* Timeline Line + Dot */}
      <div className="relative flex flex-col items-center flex-shrink-0 w-10">
        <div
          className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 z-10 ${isCurrent ? 'timeline-dot timeline-dot-active' : ''}`}
          style={
            isCurrent
              ? {}
              : {
                  background: 'rgba(56,189,248,0.5)',
                  border: '2px solid rgba(56,189,248,0.3)',
                }
          }
        />
        {!isLast && (
          <div
            className="flex-1 w-px mt-2"
            style={{ background: 'linear-gradient(to bottom, rgba(56,189,248,0.35), rgba(56,189,248,0.05))' }}
          />
        )}
      </div>

      {/* Card Wrapper */}
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 glass-card p-5 mb-0 group cursor-pointer block hover:border-[#38bdf8]/35 transition-colors duration-300"
          style={{ borderRadius: '14px' }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              {/* Logo + Title */}
              <div className="flex items-start gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <Image
                    src={logo || '/placeholder.svg'}
                    alt={title}
                    width={36}
                    height={36}
                    className="object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] leading-tight">{title}</h3>
                  <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={{ background: 'rgba(56,189,248,0.10)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.2)' }}
                    >
                      {subtitle}
                    </span>
                    {isCurrent && (
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium"
                        style={{ background: 'rgba(52,211,153,0.1)', color: '#34d399', border: '1px solid rgba(52,211,153,0.2)' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Date */}
              <div
                className="flex items-center gap-1.5 px-3 py-1 rounded-full flex-shrink-0 text-xs"
                style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <Calendar className="w-3 h-3" />
                <span className="whitespace-nowrap font-medium">{dateRange}</span>
              </div>
            </div>

            {/* Bullets */}
            {bullets.length > 0 && (
              <div className="space-y-2">
                {bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: '#38bdf8' }}
                    />
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Visit Link */}
            <div className="flex items-center gap-1.5 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline" style={{ color: '#38bdf8' }}>
              <ExternalLink className="w-3 h-3" />
              <span>Visit Website</span>
            </div>
          </div>
        </a>
      ) : (
        <div
          className="flex-1 glass-card p-5 mb-0 group cursor-default"
          style={{ borderRadius: '14px' }}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              {/* Logo + Title */}
              <div className="flex items-start gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <Image
                    src={logo || '/placeholder.svg'}
                    alt={title}
                    width={36}
                    height={36}
                    className="object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] leading-tight">{title}</h3>
                  <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={{ background: 'rgba(56,189,248,0.10)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.2)' }}
                    >
                      {subtitle}
                    </span>
                    {isCurrent && (
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium"
                        style={{ background: 'rgba(52,211,153,0.1)', color: '#34d399', border: '1px solid rgba(52,211,153,0.2)' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Date */}
              <div
                className="flex items-center gap-1.5 px-3 py-1 rounded-full flex-shrink-0 text-xs"
                style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <Calendar className="w-3 h-3" />
                <span className="whitespace-nowrap font-medium">{dateRange}</span>
              </div>
            </div>

            {/* Bullets */}
            {bullets.length > 0 && (
              <div className="space-y-2">
                {bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: '#38bdf8' }}
                    />
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );


  return (
    <>
      <MobileCard />
      {desktopItem}
    </>
  );
}


export default function Portfolio() {
  const expRef = useRef(null);
  const eduRef = useRef(null);
  const expInView = useInView(expRef, { once: true, margin: '-80px' });
  const eduInView = useInView(eduRef, { once: true, margin: '-80px' });

  return (
    <div id="experience" className="section-wrapper">
      {/* Experience */}
      <section ref={expRef} className="mb-20">
        <SectionTitle
          icon={<Briefcase className="w-4 h-4" style={{ color: '#38bdf8' }} />}
          text="Experience"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={expInView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, i) => (
            <TimelineItem
              key={exp.company}
              logo={exp.logo}
              title={exp.company}
              subtitle={exp.role}
              dateRange={`${exp.startDate} — ${exp.endDate}`}
              bullets={exp.description}
              url={exp.url}
              isCurrent={exp.isCurrent}
              isLast={i === experiences.length - 1}
            />
          ))}
        </motion.div>
      </section>

      {/* Education */}
      <section ref={eduRef}>
        <SectionTitle
          icon={<GraduationCap className="w-4 h-4" style={{ color: '#38bdf8' }} />}
          text="Education"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={eduInView ? 'visible' : 'hidden'}
        >
          {education.map((edu, i) => (
            <TimelineItem
              key={edu.institution}
              logo={edu.logo}
              title={edu.institution}
              subtitle={edu.degree}
              dateRange={`${edu.startDate} — ${edu.endDate}`}
              bullets={[]}
              url={edu.url}
              isCurrent={edu.isCurrent}
              isLast={i === education.length - 1}
            />
          ))}
        </motion.div>
      </section>
    </div>
  );
}
