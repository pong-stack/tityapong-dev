import type React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
// import PageTransition from "@/components/page-transition";
import { Analytics } from '@vercel/analytics/next';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://tityapong-dev.vercel.app'),
  title: {
    default: 'Sok Tityapong | Full Stack Developer Cambodia',
    template: '%s | Sok Tityapong',
  },
  description:
    'Portfolio of Sok Tityapong, a professional Full Stack Developer based in Phnom Penh, Cambodia. Specializing in TypeScript, Next.js, React, Node.js, and PostgreSQL.',
  keywords: [
    'Sok Tityapong',
    'Tityapong',
    'Sok Tityapong developer',
    'Tityapong full stack developer',
    'Sok Tityapong Cambodia',
    'Full Stack Developer Cambodia',
    'Next.js Developer Cambodia',
    'React Developer Cambodia',
    'Phnom Penh',
    'IT Engineering student RUPP',
    'web developer portfolio',
    'responsive web design',
  ],
  authors: [{ name: 'Sok Tityapong', url: 'https://tityapong-dev.vercel.app' }],
  openGraph: {
    title: 'Sok Tityapong | Full Stack Developer Cambodia',
    description:
      "Explore the portfolio of Sok Tityapong, a Full Stack Web Developer from Cambodia showcasing modern projects in Next.js and React.",
    url: 'https://tityapong-dev.vercel.app',
    siteName: 'Sok Tityapong Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sok Tityapong Full Stack Developer Cambodia Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sok Tityapong | Full Stack Developer Cambodia',
    description:
      'Explore the portfolio of Sok Tityapong, featuring full stack projects in Next.js and React for responsive applications.',
    images: ['/og-image.png'],
    creator: '@SokTityapong',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://tityapong-dev.vercel.app',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/pong.png', type: 'image/png' },
    ],
  },
};

// Define props type for RootLayout
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://tityapong-dev.vercel.app/#person',
        name: 'Sok Tityapong',
        jobTitle: 'Full Stack Developer',
        url: 'https://tityapong-dev.vercel.app',
        sameAs: [
          'https://github.com/Tityapong',
          'https://www.linkedin.com/in/sok-tityapong-2194802b6/',
          'https://t.me/Tityapong',
        ],
        image: 'https://tityapong-dev.vercel.app/Tityapong_PV.png',
        description:
          'Sok Tityapong is a Full Stack Developer and IT Engineering student at the Royal University of Phnom Penh based in Cambodia, specializing in Next.js, React, TypeScript, and Node.js.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Phnom Penh',
          addressCountry: 'Cambodia',
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Royal University of Phnom Penh',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://tityapong-dev.vercel.app/#website',
        url: 'https://tityapong-dev.vercel.app',
        name: 'Sok Tityapong Portfolio',
        description:
          'Developer portfolio of Sok Tityapong, Full Stack Web Developer and Next.js specialist based in Cambodia.',
        publisher: {
          '@id': 'https://tityapong-dev.vercel.app/#person',
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <Script id="person-ldjson" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
      </head>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
