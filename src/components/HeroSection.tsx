import React, { useMemo } from "react";
import { TypewriterEffect } from "./hero/TypewriterEffect";
import { BackgroundParticle } from "./hero/BackgroundParticle";
import { EmailSignupForm } from "./hero/EmailSignupForm";
import { UserShowcase } from "./hero/UserShowcase";

export const HeroSection = () => {
  // Reduced background particles from 6 to 4 for better performance
  const backgroundParticles = useMemo(() => {
    return Array.from({ length: 4 }).map((_, i) => ({
      key: i,
      width: Math.random() * 160 + 40,
      height: Math.random() * 160 + 40,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: Math.random() * 12 + 8,
      animationDelay: Math.random() * 2
    }));
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
      {/* Optimized animated background particles with reduced count */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundParticles.map((particle) => (
          <BackgroundParticle key={particle.key} particle={particle} />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto text-center relative z-20 max-w-5xl">
        <div className="relative">
          {/* Main heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-space-grotesk font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight relative z-10 px-2">
            <span className="block sm:inline">Where Devs Vibe, </span>
            <span className="text-aurora-pink font-bold block sm:inline whitespace-nowrap typewriter-text">
              <TypewriterEffect />
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-medium px-4 relative z-10">
            A place where Vibe Coders dream aloud, build boldly, and shape the future with lines of prompts and sparks of vision.
          </p>

          <div className="mt-10 sm:mt-20 lg:mt-28"></div>

          {/* Email signup form */}
          <EmailSignupForm />

          {/* User showcase section */}
          <UserShowcase />
        </div>
      </div>
    </section>
  );
};
