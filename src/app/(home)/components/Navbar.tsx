'use client';

import Link from 'next/link';
import { SiGithub, SiTelegram, SiLinkedin } from 'react-icons/si';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [cambodiaTime, setCambodiaTime] = useState('');

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const socials = [
    {
      Link: 'https://www.linkedin.com/in/sok-tityapong-2194802b6/',
      label: 'Linkedin',
      icon: SiLinkedin,
    },
    {
      Link: 'https://github.com/Tityapong',
      label: 'Github',
      icon: SiGithub,
    },
    {
      Link: 'https://t.me/Tityapong',
      label: 'Telegram',
      icon: SiTelegram,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (!mounted) return;

    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Phnom_Penh',
      });
      setCambodiaTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <motion.nav
        className="py-6 flex justify-between items-center max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo/Name */}
        <motion.h1
          className="text-xl md:text-2xl font-bold underline underline-offset-8 decoration-blue-600 dark:decoration-blue-400 -rotate-1 text-gray-900 dark:text-white transition-colors duration-300"
          whileHover={{ scale: 1.05, rotate: 0 }}
          whileTap={{ scale: 0.95 }}
        >
          Sok_Tityapong
        </motion.h1>

        {/* Social Links and Theme Toggle */}
        <motion.div
          className="flex items-center space-x-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Social Icons */}
          {socials.map(social => {
            const Icon = social.icon;
            return (
              <motion.div key={social.label} variants={itemVariants}>
                <Link
                  href={social.Link}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}

          {cambodiaTime && (
            <motion.div variants={itemVariants} className="hidden sm:flex flex-col items-end px-2">
              <span className="text-[10px] uppercase tracking-wide text-gray-400 dark:text-gray-500">
                Phnom Penh
              </span>
              <span className="text-xs font-semibold text-gray-800 dark:text-gray-100">
                {cambodiaTime}
              </span>
            </motion.div>
          )}

          {/* Theme Toggle Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.nav>
    </div>
  );
}
