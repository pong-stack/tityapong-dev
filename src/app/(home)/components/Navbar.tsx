'use client';

import { motion } from 'framer-motion';
import { Clock, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
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
          {cambodiaTime && (
            <motion.div
              variants={itemVariants}
              className="hidden sm:flex items-center gap-2 rounded-full border border-gray-200/70 dark:border-gray-700/70 bg-white/70 dark:bg-gray-900/50 px-3 py-1.5 backdrop-blur-md shadow-sm"
            >
              <span className="flex items-center gap-1.5">
                <motion.span
                  className="relative flex h-2 w-2"
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                  }}
                >
                  <span className="absolute inset-0 rounded-full bg-emerald-500/40" />
                  <span className="absolute inset-0 rounded-full bg-emerald-500" />
                </motion.span>
                <Clock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </span>
              <span className="overflow-hidden rounded-sm ring-1 ring-black/10 dark:ring-white/10">
                <Image
                  src="/Flag_of_Cambodia.svg"
                  alt="Cambodia flag"
                  width={18}
                  height={12}
                  className="h-3 w-[18px] object-cover"
                />
              </span>
              <span className="text-[11px] font-medium tracking-wide text-gray-600 dark:text-gray-300">
                Phnom Penh
              </span>
              <span className="h-4 w-px bg-gray-200/70 dark:bg-gray-700/70" />
              <span className="text-xs font-semibold tabular-nums font-mono text-gray-900 dark:text-gray-100">
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
