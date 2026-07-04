import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Resume from './components/Edu_Exp';
import Skill from './components/Skill';
import Projects from './components/Projects';
import GalleryComponent from './components/portfolio-gallery';
import AchievementsSection from './components/AchievementsSection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Sok Tityapong | Full Stack Developer Cambodia',
  description:
    'Official portfolio of Sok Tityapong, a professional Full Stack Developer and Next.js specialist based in Phnom Penh, Cambodia. Discover custom web development projects, skills, and achievements.',
  alternates: {
    canonical: 'https://tityapong-dev.vercel.app',
  },
  openGraph: {
    title: 'Sok Tityapong | Full Stack Developer Cambodia',
    description:
      'Official portfolio of Sok Tityapong, a professional Full Stack Developer based in Phnom Penh, Cambodia. Specializing in TypeScript, Next.js, React, Node.js, and modern databases.',
    url: 'https://tityapong-dev.vercel.app',
  },
};

export default function page() {
  return (
    <div
      className="min-h-screen"
      style={{ background: 'var(--bg-primary)' }}
    >
      <Navbar />

      {/* Hero — full viewport, no top padding (Navbar is fixed) */}
      <Hero />

      {/* Main content */}
      <main>
        {/* Experience & Education Timeline */}
        <Resume />

        {/* Tech Stack Grid */}
        <Skill />

        {/* Gallery */}
        <GalleryComponent />

        {/* Featured Projects */}
        <Projects />

        {/* Achievements + Contact */}
        <AchievementsSection />
      </main>

      <Footer />
    </div>
  );
}

