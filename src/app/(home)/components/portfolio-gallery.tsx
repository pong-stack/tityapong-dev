'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

const portfolioImages = [
  { id: 1, src: '/graduated.jpg', alt: 'Architecture Building', mobileSpan: 'row-span-2', tabletSpan: 'md:row-span-2', desktopSpan: 'lg:row-span-2' },
  { id: 2, src: '/g2.jpg', alt: 'Fresh Strawberries', mobileSpan: 'row-span-1', tabletSpan: 'md:row-span-1', desktopSpan: 'lg:row-span-2' },
  { id: 3, src: '/g8.jpg', alt: 'Dark Rose', mobileSpan: 'row-span-2', tabletSpan: 'md:row-span-2', desktopSpan: 'lg:row-span-1' },
  { id: 4, src: '/g4.jpg', alt: 'Workspace Setup', mobileSpan: 'row-span-1', tabletSpan: 'md:row-span-1', desktopSpan: 'lg:row-span-2' },
  { id: 5, src: '/g5.jpg', alt: 'Abstract Dark', mobileSpan: 'row-span-2', tabletSpan: 'md:row-span-2', desktopSpan: 'lg:row-span-1' },
  { id: 6, src: '/g6.jpg', alt: 'City Lights Bokeh', mobileSpan: 'row-span-1', tabletSpan: 'md:row-span-1', desktopSpan: 'lg:row-span-2' },
  { id: 7, src: '/g7.jpg', alt: 'City Lights', mobileSpan: 'row-span-1', tabletSpan: 'md:row-span-1', desktopSpan: 'lg:row-span-2' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const imgVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function GalleryComponent() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const openModal = (i: number) => setSelectedIndex(i);
  const closeModal = () => setSelectedIndex(null);

  const navigate = (dir: 'prev' | 'next') => {
    if (selectedIndex === null) return;
    const last = portfolioImages.length - 1;
    setSelectedIndex(dir === 'next'
      ? selectedIndex === last ? 0 : selectedIndex + 1
      : selectedIndex === 0 ? last : selectedIndex - 1
    );
  };

  const selectedImage = selectedIndex !== null ? portfolioImages[selectedIndex] : null;

  return (
    <>
      <section className="section-wrapper !py-0 pb-0">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)' }}
          >
            <Images className="w-4 h-4 text-[var(--accent-indigo)]" />
          </div>
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Visual Highlights</h2>
        </div>
        <p className="text-[var(--text-muted)] text-sm mb-8">
          Moments from projects, events, and daily creativity.
        </p>

        {/* Gallery Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 auto-rows-[minmax(150px,_1fr)] md:auto-rows-[minmax(200px,_1fr)] lg:auto-rows-[minmax(240px,_1fr)]"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {portfolioImages.map((image, index) => (
            <motion.button
              key={image.id}
              type="button"
              className={`relative cursor-pointer overflow-hidden rounded-2xl group ${image.mobileSpan} ${image.tabletSpan} ${image.desktopSpan}`}
              style={{ border: '1px solid var(--border-subtle)' }}
              variants={imgVariants}
              onClick={() => openModal(index)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            >
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: 'rgba(7,7,14,0.4)', backdropFilter: 'blur(2px)' }}
              >
                <div
                  className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: 'rgba(99,102,241,0.8)', color: 'white' }}
                >
                  View
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(16px)' }}
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-4xl max-h-[90vh] aspect-video"
              onClick={e => e.stopPropagation()}
            >
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative w-full h-full"
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain rounded-2xl"
                />
              </motion.div>
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={e => { e.stopPropagation(); navigate('prev'); }}
              className="absolute left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={e => { e.stopPropagation(); navigate('next'); }}
              className="absolute right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Counter */}
            <div
              className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-mono text-white"
              style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
            >
              {selectedIndex + 1} / {portfolioImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
