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
    default: 'Sok Tityapong | Web Developer Portfolio',
    template: '%s | Sok Tityapong',
  },
  description:
    'Portfolio of Sok Tityapong, a skilled web developer specializing in TypeScript, Next.js, and React. Explore modern, responsive web projects.',
  keywords: [
    'Sok Tityapong',
    'web developer',
    'TypeScript developer',
    'Next.js portfolio',
    'React developer',
    'frontend developer',
    'responsive web design',
  ],
  authors: [{ name: 'Sok Tityapong', url: 'https://tityapong-dev.vercel.app' }],
  openGraph: {
    title: 'Sok Tityapong | Web Developer Portfolio',
    description:
      "Discover Sok Tityapong's portfolio, showcasing expertise in TypeScript, Next.js, and React.",
    url: 'https://tityapong-dev.vercel.app',
    siteName: 'Sok Tityapong Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sok Tityapong Web Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sok Tityapong | Web Developer Portfolio',
    description:
      'Explore the portfolio of Sok Tityapong, featuring TypeScript and Next.js projects for modern, responsive web applications.',
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
    '@type': 'Person',
    name: 'Sok Tityapong',
    jobTitle: 'Web Developer',
    url: 'https://tityapong-dev.vercel.app',
    sameAs: [
      'https://linkedin.com/in/sok-tityapong',
      'https://github.com/sok-tityapong',
      'https://twitter.com/SokTityapong',
    ],
    description:
      'Sok Tityapong is a web developer specializing in TypeScript, Next.js, and React, building responsive and user-friendly applications.',
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
