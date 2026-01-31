'use client';

import { Calendar, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type React from 'react';
import Title from './Tittle';

interface Experience {
  company: string;
  logo: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  url?: string;
}

interface Education {
  institution: string;
  logo: string;
  degree: string;
  startDate: string;
  endDate: string;
  url?: string;
}

const experiences: Experience[] = [
  {
    company: 'General Department of State Property and Non-Tax Revenue at MEF',
    logo: '/mef_logo.png',
    role: 'Developer',
    startDate: 'Sep 2025',
    endDate: 'Present',
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
    endDate: 'Jun 2025',
    description: [
      'Wrote and tested Vue.js components to ensure correct functionality',
      'Reviewed and debugged code to maintain high code quality and performance',
      'Ensured maintainability by following clean code practices and component reusability',
    ],
    url: 'https://www.cotafer.group/',
  },
  {
    company: 'Event Appointment',
    logo: '/logoevent.png',
    role: 'Full Stack Developer',
    startDate: 'Aug 2024',
    endDate: 'Dec 2024',
    description: [
      'Developed responsive frontend components using Next.js and Tailwind CSS',
      'Built RESTful APIs with Express.js for event creation, booking, and authentication',
      'Implemented JWT authentication and integrated MySQL for secure data handling',
      'Collaborated in an Agile team, following clean code practices and using Git for version control',
    ],
  },
  {
    company: 'ANT Training Center - MPTC',
    logo: '/ant.png',
    role: 'Web Development Training (Full Scholarship)',
    startDate: 'Jan 2024',
    endDate: 'Mar 2025',
    description: [
      'Built real-world Node.js APIs with MySQL and Postman',
      'Applied MVC architecture and followed clean code principles',
      'Gained hands-on experience with Git, version control, and Agile teamwork',
      'Developed reusable modules and participated in code reviews',
      'Integrated frontend applications with backend APIs',
    ],
    url: 'https://antkh.com/',
  },
];

const education: Education[] = [
  {
    institution: 'Royal University of Phnom Penh',
    logo: '/rupp.jpeg',
    degree: 'Bachelor of Information Technology Engineering',
    startDate: 'Mar 2022',
    endDate: 'Present',
    url: 'https://www.fe.rupp.edu.kh/',
  },
    {
    institution: 'Sala Cyber',
    logo: '/salacyber_logo.png',
    degree: 'DevOps Course',
    startDate: 'Dec 2025',
    endDate: 'Present',
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

interface CardWrapperProps {
  children: React.ReactNode;
  url?: string;
}

const CardWrapper = ({ children, url }: CardWrapperProps) => {
  const content = (
    <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/70 p-6 shadow-sm ring-1 ring-black/5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg dark:ring-white/10">
      <div className="relative z-10">
        {children}
        {url && (
          <div className="mt-6 flex justify-end">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span>Visit Website</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (url) {
    return (
      <Link href={url} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </Link>
    );
  }
  return content;
};

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <CardWrapper url={experience.url}>
    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
      <div className="flex items-start gap-4 flex-1">
        <div className="relative h-12 w-12 overflow-hidden rounded-xl p-1 flex items-center justify-center flex-shrink-0">
          <Image
            src={experience.logo || '/placeholder.svg?height=48&width=48'}
            alt={`${experience.company} logo`}
            width={40}
            height={40}
            className="object-contain rounded-lg"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                {experience.company}
              </h2>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                {experience.role}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/60 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4" />
              <span>
                {experience.startDate} - {experience.endDate}
              </span>
            </div>
          </div>
          <div className="space-y-2">
            {experience.description.map(desc => (
              <div key={desc} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/70 mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </CardWrapper>
);

interface EducationCardProps {
  education: Education;
}

const EducationCard = ({ education }: EducationCardProps) => (
  <CardWrapper url={education.url}>
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
      <div className="flex items-start gap-4 flex-1">
        <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-white p-1 flex items-center justify-center flex-shrink-0">
          <Image
            src={education.logo || '/placeholder.svg?height=48&width=48'}
            alt={`${education.institution} logo`}
            width={40}
            height={40}
            className="object-contain rounded-lg"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                {education.institution}
              </h2>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                {education.degree}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/60 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4" />
              <span>
                {education.startDate} - {education.endDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </CardWrapper>
);

export default function Portfolio() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      <section className="space-y-8">
        <Title text="Experience" className="flex flex-col items-center justify-center" />
        <div className="space-y-6">
          {experiences.map(experience => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </div>
      </section>
      <section className="space-y-8">
        <Title text="Education" className="flex flex-col items-center justify-center" />
        <div className="space-y-6">
          {education.map(edu => (
            <EducationCard key={edu.institution} education={edu} />
          ))}
        </div>
      </section>
    </div>
  );
}
