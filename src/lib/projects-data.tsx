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
import { FaGlobe } from 'react-icons/fa';
import type React from 'react';

export interface ProjectLink {
  label: string;
  icon: React.ReactNode;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  images: string[];
  technologies: string[];
  features: string[];
  accentColor: string;
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: 'ticket-provider-api',
    title: 'Ticket Provider API',
    period: 'Feb 2025 – May 2025',
    description:
      'Comprehensive ticket management system with API endpoints for event ticketing. Features include ticket creation, booking management, user authentication, and real-time availability tracking.',
    images: ['/ticker-api.png', '/t1.png', '/t2.png', '/t3.png'],
    technologies: ['Next.js', 'shadcn/ui', 'Tailwind CSS', 'PHP', 'Laravel'],
    features: [
      'User authentication & authorization',
      'Event creation and management',
      'Ticket booking system',
      'Order management',
      'Admin dashboard',
      'QR code generation',
    ],
    accentColor: '#6366f1',
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
    period: 'Jan 2025 – Mar 2025',
    description:
      'Platform for booking football fields and finding teams. Admins manage beverage orders, accept/reject bookings with email/Telegram notifications.',
    images: ['/we-soccer.png', '/we1.png', '/we2.png', '/we3.png', '/we4.png', '/we5.png', '/we6.png', '/we7.png', '/we8.png'],
    technologies: ['Node.js', 'Express', 'MySQL', 'JWT', 'Socket.io'],
    features: [
      'Football field booking system',
      'Team finding & application',
      'Real-time chat',
      'Beverage order management',
      'Email & Telegram notifications',
      'Admin approval system',
    ],
    accentColor: '#22d3ee',
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
    period: 'Oct 2024 – Jan 2025',
    description:
      'Event booking platform allowing user ratings and service listing by category. Admins manage categories (CRUD). Suppliers manage their bookings and event listings.',
    images: ['/bookevent.png', '/b1.png', '/b2.png', '/b3.png', '/b4.png', '/b5.png', '/b6.png', '/b7.png', '/b8.png', '/b9.png'],
    technologies: ['Node.js', 'Express', 'MySQL', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JWT'],
    features: [
      'Event service listings',
      'Category management (CRUD)',
      'User rating system',
      'Supplier dashboard',
      'Search and filtering',
      'Admin panel',
    ],
    accentColor: '#a855f7',
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
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    period: 'Jun 2023 – Sep 2023',
    description:
      'E-commerce platform featuring product listing, product creation capabilities, and user authentication with a modern React frontend.',
    images: ['/Ecommerce.png', '/e1.png', '/e2.png', '/e3.png'],
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    features: [
      'Product catalog & cart',
      'User authentication',
      'Product creation',
      'Order management',
      'Admin dashboard',
      'Search functionality',
    ],
    accentColor: '#f59e0b',
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
  {
    id: 'booking-hotel',
    title: 'Booking Hotel',
    period: 'Mar 2024 – Apr 2024',
    description:
      'A static hotel booking website prototype — an early team project focusing on front-end implementation with responsive layouts.',
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
    accentColor: '#34d399',
    links: [
      {
        label: 'Website',
        icon: <FaGlobe className="w-4 h-4" />,
        url: 'http://antstudents.com/WebScholarshipS2/Group-7/ProjectCSS_Booking%26Tour/index.html',
      },
    ],
  },
];

export const techIconMap: Record<string, { icon: React.ReactNode; color: string }> = {
  'Next.js': { icon: <SiNextdotjs />, color: '#FFFFFF' },
  'Tailwind CSS': { icon: <SiTailwindcss />, color: '#06B6D4' },
  'shadcn/ui': { icon: null, color: '#94a3b8' },
  PHP: { icon: <SiPhp />, color: '#777BB4' },
  Laravel: { icon: <SiLaravel />, color: '#FF2D20' },
  'Node.js': { icon: <SiNodedotjs />, color: '#339933' },
  Express: { icon: <SiExpress />, color: '#FFFFFF' },
  MySQL: { icon: <SiMysql />, color: '#4479A1' },
  JavaScript: { icon: <SiJavascript />, color: '#F7DF1E' },
  JWT: { icon: <SiJsonwebtokens />, color: '#FFFFFF' },
  'Socket.io': { icon: <SiSocketdotio />, color: '#FFFFFF' },
  TypeScript: { icon: <SiTypescript />, color: '#3178C6' },
  React: { icon: <SiReact />, color: '#61DAFB' },
  MongoDB: { icon: <SiMongodb />, color: '#47A248' },
  HTML: { icon: <SiHtml5 />, color: '#E34F26' },
  CSS: { icon: <SiCss3 />, color: '#1572B6' },
  Bootstrap: { icon: <SiBootstrap />, color: '#7952B3' },
};
