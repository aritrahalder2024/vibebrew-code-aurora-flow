import { Input } from "@/components/ui/input";
import { useState, useEffect, useMemo, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Button from "./Button";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Define types for the TypewriterEffect component
interface TypewriterEffectProps {
  text?: string;
  typeSpeed?: number;
  initialDelay?: number;
}

// Optimized TypewriterEffect component with better performance
const TypewriterEffect = React.memo(({
  text = "Build & Brew Ideas with AI",
  typeSpeed = 80,
  initialDelay = 400
}: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setIsTyping(true), initialDelay);
    return () => clearTimeout(startTimeout);
  }, [initialDelay]);

  useEffect(() => {
    if (!isTyping) return;
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isTyping, text, typeSpeed]);

  return (
    <span className="typewriter-container gpu-accelerated">
      {displayText}
      {displayText.length < text.length && <span className="typing-cursor">|</span>}
    </span>
  );
});

TypewriterEffect.displayName = 'TypewriterEffect';

// Define types for the user avatar component
interface UserAvatarProps {
  user: {
    name: string;
    img: string | null;
  };
  index: number;
  handleClick: (index: number) => void;
}

// Optimized avatar component with reduced DOM manipulation
const UserAvatar = React.memo(({ user, index, handleClick }: UserAvatarProps) => {
  const handleAvatarClick = useCallback(() => {
    handleClick(index);
  }, [handleClick, index]);

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            onClick={handleAvatarClick}
            className="w-10 h-10 rounded-full border-2 border-gray-500 flex items-center justify-center text-white font-bold text-lg shadow bg-gray-700 group smooth-transform hover:scale-110 hover:z-20 hover:ring-2 hover:ring-pink-400 cursor-pointer gpu-accelerated"
            style={{ zIndex: 10 - index }}
          >
            {user.img ? (
              <img
                src={user.img}
                alt={user.name}
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
                width={40}
                height={40}
              />
            ) : (
              user.name.charAt(0)
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" className="bg-gray-800 text-white border-gray-700">
          {user.name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

UserAvatar.displayName = 'UserAvatar';

// Optimized background particle component with reduced count
const BackgroundParticle = React.memo(({ particle }: { particle: any }) => (
  <div 
    className="absolute rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-10 gpu-accelerated"
    style={{
      width: `${particle.width}px`,
      height: `${particle.height}px`,
      left: `${particle.left}%`,
      top: `${particle.top}%`,
      transform: 'translate(-50%, -50%) translateZ(0)',
      filter: 'blur(50px)',
      animation: `float-particle ${particle.animationDuration}s ease-in-out infinite alternate`,
      animationDelay: `${particle.animationDelay}s`,
      willChange: 'transform',
    }}
  />
));

BackgroundParticle.displayName = 'BackgroundParticle';

export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [activeAvatar, setActiveAvatar] = useState<number | null>(null);

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

  // Pool of available user data for randomization
  const userPool = [
    { name: "Alex Carter", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
    { name: "Priya Sharma", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face" },
    { name: "James Lee", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
    { name: "Maya Rodriguez", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
    { name: "Michael Smith", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
    { name: "Sarah Johnson", img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face" },
    { name: "David Kim", img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face" },
    { name: "Emma Wilson", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" },
    { name: "Ryan Chen", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
    { name: "Lisa Park", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face" }
  ];

  // Generate random users on each render (changes with refresh)
  const users = useMemo(() => {
    const shuffled = [...userPool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  }, []);

  // Optimized avatar click handler with useCallback
  const handleAvatarClick = useCallback((index: number) => {
    setActiveAvatar(index);
    setTimeout(() => setActiveAvatar(null), 1000);
  }, []);

  // Optimized form submission handler
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already on the waitlist! 🎉",
            description: "You're already signed up. We'll notify you when we launch!",
            duration: 5000,
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Welcome to the Revolution! 🚀",
          description: "You're now on the waitlist. Get ready for exclusive discounts!",
          duration: 5000,
        });
        setEmail("");
      }
    } catch (error) {
      console.error('Error adding to waitlist:', error);
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [email, toast]);

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
            Join the vibrant community of creators, developers, and innovators building the future together.
          </p>

          <div className="mt-10 sm:mt-20 lg:mt-28"></div>

          {/* Consistent email signup form with identical styling for all screen sizes */}
          <form onSubmit={handleSubmit} className="flex justify-center items-center mb-6 sm:mb-8 w-full max-w-[450px] mx-auto px-4 relative z-10">
            <div className="flex w-full glass-strong rounded-full border border-white/30 overflow-hidden shadow-2xl relative p-1 h-14 items-center gpu-accelerated"
                 style={{
                   boxShadow: '0 0 40px rgba(255, 20, 147, 0.4), 0 0 80px rgba(138, 43, 226, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                 }}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-20"></div>
              <Input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-0 text-white placeholder:text-white/60 focus:ring-0 focus:border-0 flex-1 px-6 py-0 text-base text-left rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 relative z-10 w-full h-full leading-normal"
                required
                autoComplete="email"
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                size="medium"
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full px-6 py-3 font-semibold relative overflow-hidden smooth-transform hover:scale-105 h-12 gpu-accelerated"
                style={{
                  boxShadow: '0 0 25px rgba(255, 20, 147, 0.6), 0 0 50px rgba(138, 43, 226, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                }}
              >
                <span className="relative z-10 drop-shadow-lg">
                  {isSubmitting ? "Joining..." : "Join waitlist"}
                </span>
              </Button>
            </div>
          </form>

          {/* Interactive user avatars section */}
          <div className="mt-6 flex items-center justify-center gap-4 max-w-sm mx-auto relative z-10">
            <div className="flex -space-x-4">
              {users.map((user, idx) => (
                <UserAvatar 
                  key={`${user.name}-${idx}`} 
                  user={user} 
                  index={idx} 
                  handleClick={handleAvatarClick} 
                />
              ))}
            </div>
            
            <div>
              <div className="text-white font-bold text-lg leading-tight">1,200+ developers</div>
              <div className="text-white/60 text-sm leading-tight">already brewing</div>
            </div>
          </div>

          {/* Optimized animation overlay for clicked avatars */}
          {activeAvatar !== null && (
            <div 
              className="fixed inset-0 pointer-events-none z-30 flex items-center justify-center gpu-accelerated"
              style={{ perspective: '1000px' }}
            >
              <div 
                className="w-20 h-20 rounded-full bg-aurora-gradient animate-ping opacity-70 gpu-accelerated"
                style={{ 
                  animation: 'avatar-pulse 1s cubic-bezier(0, 0, 0.2, 1) forwards',
                  transformStyle: 'preserve-3d',
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
