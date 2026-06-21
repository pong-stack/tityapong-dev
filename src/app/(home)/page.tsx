import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Resume from './components/Edu_Exp';
import Skill from './components/Skill';
import Projects from './components/Projects';
import GalleryComponent from './components/portfolio-gallery';
import AchievementsSection from './components/AchievementsSection';
import Footer from './components/ Footer';

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
