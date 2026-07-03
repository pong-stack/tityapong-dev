import type { Metadata } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects-data';
import ProjectDetailClient from './ProjectDetailClient';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map(p => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find(p => p.id === id);
  if (!project) return {};

  const title = `${project.title} | Sok Tityapong`;
  const desc = `${project.description} Custom software project built using ${project.technologies.join(', ')} by Sok Tityapong, a Full Stack Developer in Cambodia.`;

  return {
    title,
    description: desc,
    alternates: {
      canonical: `https://tityapong-dev.vercel.app/projects/${id}`,
    },
    openGraph: {
      title,
      description: project.description,
      url: `https://tityapong-dev.vercel.app/projects/${id}`,
      type: 'website',
      images: [
        {
          url: project.images[0] || '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${project.title} screenshot`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: project.description,
      images: [project.images[0] || '/og-image.png'],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const projectIndex = projects.findIndex(p => p.id === id);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];

  // Structured schemas
  const breadcrumbJson = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tityapong-dev.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: 'https://tityapong-dev.vercel.app/#projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `https://tityapong-dev.vercel.app/projects/${project.id}`,
      },
    ],
  };

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: project.images[0] ? `https://tityapong-dev.vercel.app${project.images[0]}` : undefined,
    url: `https://tityapong-dev.vercel.app/projects/${project.id}`,
    creator: {
      '@type': 'Person',
      name: 'Sok Tityapong',
    },
    genre: 'Software Application',
    programmingLanguage: project.technologies,
  };

  return (
    <>
      <Script id={`breadcrumb-project-${id}`} type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(breadcrumbJson)}
      </Script>
      <Script id={`schema-project-${id}`} type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(projectSchema)}
      </Script>
      <ProjectDetailClient id={id} projectIndex={projectIndex} />
    </>
  );
}
