'use client';

import Link from 'next/link';
import { HomeIcon, Award, Moon, Sun, Github, Linkedin, Youtube, Mail, Send } from 'lucide-react';
import { Dock, DockIcon } from '@/components/magicui/dock';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const Icons = {
  github: Github,
  linkedin: Linkedin,
  youtube: Youtube,
  email: Mail,
  sun: Sun,
  moon: Moon,
  telegram: Send,
};

// Data structure for navbar and contact information
const DATA = {
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/certificate', icon: Award, label: 'Certificate' },
  ],
  contact: {
    email: 'hello@example.com',
    tel: '+123456789',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/Tityapong',
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sok-tityapong-2194802b6/',
        icon: Icons.linkedin,
        navbar: true,
      },
      Telegram: {
        name: 'Telegram',
        url: 'https://t.me/Tityapong',
        icon: Icons.telegram,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,
        navbar: false,
      },
    },
  },
};

// ModeToggle component for theme switching
function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-12')}
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

// DockBar component
export default function DockBar() {
  return (
    <TooltipProvider>
      <div className="pointer-events-none fixed inset-x-0 bottom-5 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
        <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
        <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
          {DATA.navbar.map(item => (
            <DockIcon key={item.href}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-12')}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social)
            .filter(([, social]) => social.navbar)
            .map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'size-12')}
                    >
                      <social.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{social.name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </div>
    </TooltipProvider>
  );
}
