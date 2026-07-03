import type { Metadata } from 'next';
import Script from 'next/script';
import CertificateGalleryClient from './CertificateGalleryClient';

export const metadata: Metadata = {
  title: 'Certificates & Achievements',
  description: 'Explore the verified training certifications, technical courses, achievements, and community volunteer work of Sok Tityapong, a Full Stack Developer based in Cambodia.',
  alternates: {
    canonical: 'https://tityapong-dev.vercel.app/certificate',
  },
  openGraph: {
    title: 'Certificates & Achievements | Sok Tityapong',
    description: 'Verified training certifications, technical courses, and volunteer work of Sok Tityapong, a Full Stack Developer based in Cambodia.',
    url: 'https://tityapong-dev.vercel.app/certificate',
  },
};

export default function CertificatePage() {
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
        name: 'Certificates',
        item: 'https://tityapong-dev.vercel.app/certificate',
      },
    ],
  };

  return (
    <>
      <Script id="breadcrumb-cert-ldjson" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(breadcrumbJson)}
      </Script>
      <CertificateGalleryClient />
    </>
  );
}
