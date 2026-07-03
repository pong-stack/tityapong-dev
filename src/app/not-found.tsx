'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-12 overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div
        className={`relative flex flex-col items-center max-w-md text-center transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Error Code with gradient */}
        <h1 className="text-8xl sm:text-9xl font-bold tracking-tighter bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          404
        </h1>

        {/* Error Illustration - More modern and animated */}
        <div className="my-6 sm:my-8 relative">
          <div
            className={`w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-muted/40 to-muted/10 flex items-center justify-center transition-all duration-1000 ease-in-out ${
              isVisible ? 'scale-100' : 'scale-50'
            }`}
          >
            <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse" />
            <div className="absolute inset-2 rounded-full border border-primary/5" />

            <svg
              className={`w-32 h-32 sm:w-40 sm:h-40 text-primary/60 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 8l8 8M16 8l-8 8" />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h2
          className={`text-2xl sm:text-3xl font-bold tracking-tight mb-2 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Page Not Found
        </h2>
        <p
          className={`text-muted-foreground mb-8 max-w-xs sm:max-w-sm transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved,
          deleted, or never existed.
        </p>

        {/* Action Buttons - Improved for mobile */}
        <div
          className={`flex flex-col sm:flex-row gap-4 w-full transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <Button
            className="flex-1 rounded-full border-primary/20 hover:bg-primary/5 transition-all duration-300"
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>

          <Button
            asChild
            className="flex-1 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/10 transition-all duration-300"
            size="lg"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home Page
            </Link>
          </Button>
        </div>
      </div>

      {/* Animated dots in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-primary/10 animate-float-slow`}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
