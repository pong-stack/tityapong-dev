'use client';

import type React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import {
  SiGithub,
  SiNextdotjs,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiJavascript,
  SiJsonwebtokens,
  SiSocketdotio,
  SiTypescript,
  SiReact,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiBootstrap,
} from 'react-icons/si';
import { FaGlobe, FaChevronLeft, FaChevronRight, FaBolt } from 'react-icons/fa';
import Title from './Tittle';

const projects = [
  {
    id: 'ticket-provider-api',
    title: 'Ticket Provider API',
    period: 'Feb 2025 - May 2025',
    description:
      'Comprehensive ticket management system with API endpoints for event ticketing. Features include ticket creation, booking management, user authentication, and real-time availability tracking.',
    images: ['/ticker-api.png', '/t1.png', '/t2.png', '/t3.png'],
    technologies: ['Next.js', 'shadcn/ui', 'Tailwind CSS', 'PHP', 'Laravel'],
    features: [
      'User authentication and authorization',
      'Event creation and management',
      'Ticket booking system',
      'Order management',
      'Admin dashboard',
      'QR code generation',
    ],
    links: [
      {
        label: 'Source',
        icon: <SiGithub className="w-4 h-4" />,
        url: 'https://github.com/Tityapong/Ticket-Provider.git',
      },
    ],
  },
  {
    id: 'we-soccer',
    title: 'We Soccer',
    period: 'Jan 2025 - Mar 2025',
    description:
      'Platform for booking football fields and finding teams. Users can apply to find teams. Admins manage beverage orders, accept/reject bookings with email/Telegram notifications.',
    images: [
      '/we-soccer.png',
      '/we1.png',
      '/we2.png',
      '/we3.png',
      '/we4.png',
      '/we5.png',
      '/we6.png',
      '/we7.png',
      '/we8.png',
    ],
    technologies: [
      'Node.js',
      'Express',
      'MySQL',
      'EJS',
      'JWT',
      'Socket.io',
      'nodemailer',
      'Telegram Bot API',
    ],
    features: [
      'Football field booking system',
      'Team finding and application',
      'real-time chat',
      'Beverage order management',
      'Email notifications',
      'Telegram bot integration',
      'Admin approval system',
      'User profile management',
      'Booking calendar',
    ],
    links: [
      {
        label: 'Video Demo',
        icon: <FaGlobe className="w-4 h-4" />,
        url: 'https://youtu.be/qiVKt4XoSdE?si=kXYicxF1z-yYVX5Q',
      },
      {
        label: 'Source',
        icon: <SiGithub className="w-4 h-4" />,
        url: 'https://github.com/Tityapong/we_soccer.git',
      },
    ],
  },
  {
    id: 'book-my-event',
    title: 'BookMyEvent',
    period: 'Oct 2024 - Jan 2025',
    description:
      'Event booking platform allowing user ratings and service listing by category. Admins manage categories (CRUD). Suppliers manage their bookings and event listings.',
    images: [
      '/bookevent.png',
      '/b1.png',
      '/b2.png',
      '/b3.png',
      '/b4.png',
      '/b5.png',
      '/b6.png',
      '/b7.png',
      '/b8.png',
      '/b9.png',
    ],
    technologies: ['Node.js', 'Express', 'MySQL', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JWT'],
    features: [
      'Event service listings',
      'Category management (CRUD)',
      'User rating system',
      'Supplier dashboard',
      'Booking management',
      'Search and filtering',
      'Review system',
      'Admin panel',
      'Service provider profiles',
    ],
    links: [
      {
        label: 'Website',
        icon: <FaGlobe className="w-4 h-4" />,
        url: 'https://book-my-event-pink.vercel.app/',
      },
      {
        label: 'Source',
        icon: <SiGithub className="w-4 h-4" />,
        url: 'https://github.com/Tityapong/BookMyEvent.git',
      },
    ],
  },
  {
    id: 'booking-hotel',
    title: 'Booking Hotel',
    period: 'March 2024 - April 2024',
    description:
      'A static hotel booking website prototype. An early team project focusing on front-end implementation.',
    images: ['/booking_hotel.png'],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    features: [
      'Hotel room listings',
      'Booking interface',
      'Room details view',
      'Responsive design',
      'Image gallery',
      'Contact forms',
    ],
    links: [
      {
        label: 'Website',
        icon: <FaGlobe className="w-4 h-4" />,
        url: 'http://antstudents.com/WebScholarshipS2/Group-7/ProjectCSS_Booking%26Tour/index.html',
      },
      {
        label: 'Source',
        icon: <SiGithub className="w-4 h-4" />,
        url: '/',
      },
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    period: 'June 2023 - Sep 2023',
    description:
      'E-commerce platform featuring product listing, product creation capabilities, and user authentication.',
    images: ['/Ecommerce.png', '/e1.png', '/e2.png', '/e3.png', '/e4.png', '/e5.png', '/e6.png'],
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    features: [
      'Product catalog',
      'Shopping cart',
      'User authentication',
      'Product creation',
      'Order management',
      'Admin dashboard',
      'Search functionality',
      'Responsive design',
    ],
    links: [
      {
        label: 'Website',
        icon: <FaGlobe className="w-4 h-4" />,
        url: 'https://ecommerce-frontend-lemon-sigma.vercel.app/',
      },
      {
        label: 'Source',
        icon: <SiGithub className="w-4 h-4" />,
        url: 'https://github.com/Tityapong/Ecommerce-App.git',
      },
    ],
  },
];

// Technology configuration with icons and brand colors
const getTechConfig = (tech: string) => {
  const techConfig: {
    [key: string]: { icon: React.ReactNode; bgColor: string; textColor: string };
  } = {
    'Next.js': {
      icon: <SiNextdotjs className="w-3 h-3" />,
      bgColor: 'bg-black dark:bg-white',
      textColor: 'text-white dark:text-black',
    },
    'Tailwind CSS': {
      icon: <SiTailwindcss className="w-3 h-3" />,
      bgColor: 'bg-[#06B6D4]',
      textColor: 'text-white',
    },
    PHP: {
      icon: <SiPhp className="w-3 h-3" />,
      bgColor: 'bg-[#777BB4]',
      textColor: 'text-white',
    },
    Laravel: {
      icon: <SiLaravel className="w-3 h-3" />,
      bgColor: 'bg-[#FF2D20]',
      textColor: 'text-white',
    },
    'Node.js': {
      icon: <SiNodedotjs className="w-3 h-3" />,
      bgColor: 'bg-[#339933]',
      textColor: 'text-white',
    },
    Express: {
      icon: <SiExpress className="w-3 h-3" />,
      bgColor: 'bg-[#000000] dark:bg-[#ffffff]',
      textColor: 'text-white dark:text-black',
    },
    MySQL: {
      icon: <SiMysql className="w-3 h-3" />,
      bgColor: 'bg-[#4479A1]',
      textColor: 'text-white',
    },
    JavaScript: {
      icon: <SiJavascript className="w-3 h-3" />,
      bgColor: 'bg-[#F7DF1E]',
      textColor: 'text-black',
    },
    JWT: {
      icon: <SiJsonwebtokens className="w-3 h-3" />,
      bgColor: 'bg-[#000000] dark:bg-[#ffffff]',
      textColor: 'text-white dark:text-black',
    },
    'Socket.io': {
      icon: <SiSocketdotio className="w-3 h-3" />,
      bgColor: 'bg-[#010101] dark:bg-[#ffffff]',
      textColor: 'text-white dark:text-black',
    },
    TypeScript: {
      icon: <SiTypescript className="w-3 h-3" />,
      bgColor: 'bg-[#3178C6]',
      textColor: 'text-white',
    },
    React: {
      icon: <SiReact className="w-3 h-3" />,
      bgColor: 'bg-[#61DAFB]',
      textColor: 'text-black',
    },
    MongoDB: {
      icon: <SiMongodb className="w-3 h-3" />,
      bgColor: 'bg-[#47A248]',
      textColor: 'text-white',
    },
    HTML: {
      icon: <SiHtml5 className="w-3 h-3" />,
      bgColor: 'bg-[#E34F26]',
      textColor: 'text-white',
    },
    CSS: {
      icon: <SiCss3 className="w-3 h-3" />,
      bgColor: 'bg-[#1572B6]',
      textColor: 'text-white',
    },
    Bootstrap: {
      icon: <SiBootstrap className="w-3 h-3" />,
      bgColor: 'bg-[#7952B3]',
      textColor: 'text-white',
    },
    EJS: {
      icon: (
        <div className="w-3 h-3 bg-[#90A93A] rounded-sm flex items-center justify-center text-[8px] font-bold text-white">
          E
        </div>
      ),
      bgColor: 'bg-[#90A93A]',
      textColor: 'text-white',
    },
    nodemailer: {
      icon: (
        <div className="w-3 h-3 bg-[#0F9D58] rounded-sm flex items-center justify-center text-[8px] font-bold text-white">
          @
        </div>
      ),
      bgColor: 'bg-[#0F9D58]',
      textColor: 'text-white',
    },
    'Telegram Bot API': {
      icon: (
        <div className="w-3 h-3 bg-[#0088CC] rounded-sm flex items-center justify-center text-[8px] font-bold text-white">
          T
        </div>
      ),
      bgColor: 'bg-[#0088CC]',
      textColor: 'text-white',
    },
    'shadcn/ui': {
      icon: (
        <div className="w-3 h-3 bg-[#000000] dark:bg-[#ffffff] rounded-sm flex items-center justify-center text-[8px] font-bold text-white dark:text-black">
          S
        </div>
      ),
      bgColor: 'bg-[#000000] dark:bg-[#ffffff]',
      textColor: 'text-white dark:text-black',
    },
  };

  return (
    techConfig[tech] || {
      icon: (
        <div className="w-3 h-3 bg-gray-500 rounded-sm flex items-center justify-center text-[8px] font-bold text-white">
          {tech.charAt(0)}
        </div>
      ),
      bgColor: 'bg-gray-500',
      textColor: 'text-white',
    }
  );
};

export default function PortfolioShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background text-foreground p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-8">
          <div className="text-center">
            <Title text="Projects Experience" className="inline-block" />
          </div>
        </div>

        <div className="pt-12 space-y-6">
          {projects.map(project => (
            <ProjectListItem
              key={project.id}
              title={project.title}
              period={project.period}
              description={project.description}
              images={project.images}
              technologies={project.technologies}
              features={project.features}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProjectProps {
  title: string;
  period: string;
  description: string;
  images: string[];
  technologies: string[];
  features: string[];
  links: {
    label: string;
    icon: React.ReactNode;
    url: string;
  }[];
}

function ProjectImageCarousel({ title, images }: { title: string; images: string[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="md:w-1/2 relative overflow-hidden aspect-[4/2] md:aspect-[16/9]">
      {images.map((imageSrc, index) => (
        <Image
          key={imageSrc || index}
          src={imageSrc || '/placeholder.svg'}
          alt={`${title} screenshot ${index + 1}`}
          fill
          className={`object-contain transition-opacity duration-300 ${
            index === currentImageIndex ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
          }`}
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm shadow-lg z-10"
            aria-label="Previous image"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm shadow-lg z-10"
            aria-label="Next image"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((imageSrc, index) => (
              <button
                key={imageSrc || `${title}-dot-${index}`}
                type="button"
                onClick={() => goToImage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  index === currentImageIndex
                    ? 'bg-white scale-125 shadow-lg'
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm shadow-lg z-10">
            {currentImageIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectListItem({
  title,
  period,
  description,
  images,
  technologies,
  features,
  links,
}: ProjectProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 blur-2xl transition-opacity duration-300 hover:opacity-100" />
      <div className="flex flex-col md:flex-row min-h-[250px]">
        <ProjectImageCarousel title={title} images={images} />

        {/* Content Section - Right Side (50% width) */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-muted-foreground text-sm mb-4">{period}</p>
            <p className="text-foreground/80 mb-6 leading-relaxed">{description}</p>

            {/* Features - Clean List Style */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <FaBolt className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-sm">Key Features</h3>
              </div>
              <div className="bg-muted/20 rounded-md p-3 border border-border/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {features.map(feature => (
                    <div key={feature} className="flex items-center gap-2 text-sm py-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-foreground/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies with Brand Colors */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-sm">Technologies:</h3>
              <div className="flex flex-wrap gap-1.5">
                {technologies.map(tech => {
                  const config = getTechConfig(tech);
                  return (
                    <span
                      key={tech}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 hover:shadow-md ${config.bgColor} ${config.textColor}`}
                    >
                      {config.icon}
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Links - Bottom of content */}
          <div className="flex gap-2 mt-auto">
            {links.map(link => (
              <a
                key={link.url || link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 transition-colors rounded-full text-sm text-primary hover:scale-105"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
