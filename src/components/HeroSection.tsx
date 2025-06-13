import { Input } from "@/components/ui/input";
import { useState, useEffect, useMemo } from "react";
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

// Simple TypewriterEffect component optimized with React.memo
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
    <span className="typewriter-container">
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

// Interactive avatar component
const UserAvatar = React.memo(({ user, index, handleClick }: UserAvatarProps) => {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            onClick={() => handleClick(index)}
            className="w-10 h-10 rounded-full border-2 border-gray-500 flex items-center justify-center text-white font-bold text-lg shadow bg-gray-700 group transition-transform duration-200 hover:scale-110 hover:z-20 hover:ring-2 hover:ring-pink-400 cursor-pointer"
            style={{ zIndex: 10 - index, willChange: 'transform' }}
          >
            {user.img ? (
              <img
                src={user.img}
                alt={user.name}
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
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

export const HeroSection = () => {
  // State to store the email input value
  const [email, setEmail] = useState("");
  // State to track if form is being submitted
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Hook to show toast notifications
  const { toast } = useToast();
  // State to track which avatar is active (for animation)
  const [activeAvatar, setActiveAvatar] = useState<number | null>(null);

  // Pre-compute background particles to avoid recalculation on re-renders
  const backgroundParticles = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      key: i,
      width: Math.random() * 300 + 50,
      height: Math.random() * 300 + 50,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: Math.random() * 20 + 10,
      animationDelay: Math.random() * 5
    }));
  }, []);

  // Sample user data for avatars
  const users = useMemo(() => [
    { name: "Alex Chen", img: null },
    { name: "Priya Sharma", img: null },
    { name: "Jordan Lee", img: null },
    { name: "Maya Rodriguez", img: null },
    { name: "Ethan Kim", img: null },
  ], []);

  // Handle avatar click
  const handleAvatarClick = (index: number) => {
    setActiveAvatar(index);
    // Reset active avatar after animation completes
    setTimeout(() => setActiveAvatar(null), 1000);
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    
    // Don't submit if email is empty
    if (!email) return;
    
    setIsSubmitting(true); // Show loading state
    
    try {
      // Try to save email to Supabase database
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        // If email already exists, show friendly message
        if (error.code === '23505') {
          toast({
            title: "Already on the waitlist! 🎉",
            description: "You're already signed up. We'll notify you when we launch!",
            duration: 5000,
          });
        } else {
          throw error; // If other error, throw it
        }
      } else {
        // Success! Show success message and clear email
        toast({
          title: "Welcome to the Revolution! 🚀",
          description: "You're now on the waitlist. Get ready for exclusive discounts!",
          duration: 5000,
        });
        setEmail(""); // Clear the input
      }
    } catch (error) {
      // Show error message if something went wrong
      console.error('Error adding to waitlist:', error);
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false); // Hide loading state
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
      {/* Fixed background without interfering elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Optimized animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundParticles.map((particle) => (
          <div 
            key={particle.key}
            className="absolute rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-10"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(50px)',
              animation: `float-particle ${particle.animationDuration}s ease-in-out infinite alternate`,
              animationDelay: `${particle.animationDelay}s`,
              willChange: 'transform, opacity, filter'
            }}
          />
        ))}
      </div>
      {/* Overlay with centered content */}
      <div className="container mx-auto text-center relative z-20 max-w-5xl">
        {/* Main content */}
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
          {/* Add extra margin above the waitlist form for better aesthetics */}
          <div className="mt-10 sm:mt-20 lg:mt-28"></div>
          {/* Email signup form with enhanced glowing effects - Mobile optimized */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center mb-6 sm:mb-8 w-full max-w-[450px] mx-auto px-4 relative z-10 gap-3 sm:gap-0">
            <div className="flex flex-col sm:flex-row w-full bg-white/15 backdrop-blur-xl rounded-2xl sm:rounded-full border border-white/30 overflow-hidden shadow-2xl relative p-1 h-14 items-center"
                 style={{
                   boxShadow: '0 0 40px rgba(255, 20, 147, 0.4), 0 0 80px rgba(138, 43, 226, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                   willChange: 'transform'
                 }}>
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-20"></div>
              <Input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-0 text-white placeholder:text-white/60 focus:ring-0 focus:border-0 flex-1 px-6 py-0 text-base text-left rounded-xl sm:rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 relative z-10 w-full h-full leading-normal autofill:bg-transparent autofill:text-white"
                required
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                size="medium"
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl sm:rounded-full px-6 font-semibold relative overflow-hidden transform transition-all duration-300 hover:scale-105 w-full sm:w-auto mt-2 sm:mt-0 h-12"
                style={{
                  boxShadow: '0 0 25px rgba(255, 20, 147, 0.6), 0 0 50px rgba(138, 43, 226, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  willChange: 'transform'
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
            {/* Overlapping avatars with hover effect and tooltip */}
            <div className="flex -space-x-4">
              {users.map((user, idx) => (
                <UserAvatar 
                  key={idx} 
                  user={user} 
                  index={idx} 
                  handleClick={handleAvatarClick} 
                />
              ))}
            </div>
            
            {/* Text counter */}
            <div>
              <div className="text-white font-bold text-lg leading-tight">1,200+ developers</div>
              <div className="text-white/60 text-sm leading-tight">already brewing</div>
            </div>
          </div>

          {/* Animation overlay for clicked avatars */}
          {activeAvatar !== null && (
            <div 
              className="fixed inset-0 pointer-events-none z-30 flex items-center justify-center"
              style={{ perspective: '1000px' }}
            >
              <div 
                className="w-20 h-20 rounded-full bg-aurora-gradient animate-ping opacity-70"
                style={{ 
                  animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) forwards',
                  transformStyle: 'preserve-3d',
                  transform: 'rotateY(0deg) scale(0)',
                  animationName: 'avatar-pulse'
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
