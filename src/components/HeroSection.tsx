import { Input } from "@/components/ui/input";
import { useState, useEffect, useCallback, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Button from "./Button";

// Enhanced TypewriterEffect component with backspacing and pausing
const TypewriterEffect = ({ 
  text = "Build & Brew Ideas with AI", 
  typeSpeed = 70, 
  backspaceSpeed = 30, 
  initialDelay = 800,
  pauseBeforeBackspace = 1500,
  pauseBeforeRestart = 1000,
  backspaceChars = 8,  // Number of characters to backspace
  highlightColor = "rgba(255, 20, 147, 0.2)" // Pink highlight color
}) => {
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState('waiting'); // waiting, typing, pausing, backspacing, restarting
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const containerRef = useRef(null);
  
  // Typing sound effect (subtle key press sound)
  const playTypeSound = useCallback(() => {
    // This would normally play a sound, but we'll just simulate it
    // In a real implementation, you could add actual sound effects
  }, []);

  useEffect(() => {
    let timeout;
    
    switch (phase) {
      case 'waiting':
        timeout = setTimeout(() => setPhase('typing'), initialDelay);
        break;
        
      case 'typing':
        if (displayText.length < text.length) {
          timeout = setTimeout(() => {
            setDisplayText(text.substring(0, displayText.length + 1));
            // Randomly highlight a character to simulate "thinking" about what to type
            if (Math.random() > 0.7) {
              setHighlightIndex(displayText.length);
              setTimeout(() => setHighlightIndex(-1), 300);
            }
            playTypeSound();
          }, typeSpeed + Math.random() * 50); // Add some randomness to typing speed
        } else {
          setPhase('pausing');
        }
        break;
        
      case 'pausing':
        timeout = setTimeout(() => setPhase('backspacing'), pauseBeforeBackspace);
        break;
        
      case 'backspacing':
        if (displayText.length > text.length - backspaceChars) {
          timeout = setTimeout(() => {
            setDisplayText(text.substring(0, displayText.length - 1));
            playTypeSound();
          }, backspaceSpeed);
        } else {
          setPhase('restarting');
        }
        break;
        
      case 'restarting':
        timeout = setTimeout(() => setPhase('typing'), pauseBeforeRestart);
        break;
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, phase, text, typeSpeed, backspaceSpeed, initialDelay, pauseBeforeBackspace, pauseBeforeRestart, backspaceChars, playTypeSound]);

  // Apply dynamic hover effects to characters
  useEffect(() => {
    if (containerRef.current && phase === 'pausing') {
      const chars = containerRef.current.querySelectorAll('.typewriter-char');
      chars.forEach((char, index) => {
        // Set custom property for staggered animations
        char.style.setProperty('--char-index', index);
        
        // Add hover listeners for interactive effects
        char.addEventListener('mouseenter', () => {
          char.classList.add('char-hover');
          
          // Create ripple effect to nearby characters
          const nearbyChars = 3;
          for (let i = Math.max(0, index - nearbyChars); i < Math.min(chars.length, index + nearbyChars + 1); i++) {
            if (i !== index) {
              const distance = Math.abs(i - index);
              const delay = distance * 50;
              setTimeout(() => {
                chars[i].classList.add('char-ripple');
                setTimeout(() => chars[i].classList.remove('char-ripple'), 300);
              }, delay);
            }
          }
        });
        
        char.addEventListener('mouseleave', () => {
          char.classList.remove('char-hover');
        });
      });
    }
  }, [displayText, phase]);

  return (
    <span className="typewriter-container" ref={containerRef}>
      {displayText.split('').map((char, index) => (
        <span 
          key={index} 
          className={`typewriter-char ${index === highlightIndex ? 'highlight' : ''}`}
          style={{
            '--char-index': index,
            backgroundColor: index === highlightIndex ? highlightColor : 'transparent',
            animationDelay: `${index * 0.03}s`
          } as React.CSSProperties}
        >
          {char}
        </span>
      ))}
      {(phase === 'typing' || phase === 'backspacing') && (
        <span className="typing-cursor">|</span>
      )}
    </span>
  );
};

export const HeroSection = () => {
  // State to store the email input value
  const [email, setEmail] = useState("");
  // State to track if form is being submitted
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Hook to show toast notifications
  const { toast } = useToast();

  // Function to handle form submission
  const handleSubmit = async (e) => {
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
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-10"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(50px)',
              animation: `float-particle ${Math.random() * 20 + 10}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Overlay with centered content */}
      <div className="container mx-auto text-center relative z-20 max-w-5xl">
        {/* Main content */}
        <div className="relative">
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-space-grotesk font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight relative z-10 px-2">
            <span className="block sm:inline">Where Devs Vibe, </span>
            <span className="text-aurora-pink font-bold block sm:inline whitespace-nowrap typewriter-text">
              <TypewriterEffect />
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-medium px-4 relative z-10">
            Join the vibrant community of creators, developers, and innovators building the future together.
          </p>
          
          {/* Email signup form with enhanced glowing effects - Mobile optimized */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center mb-6 sm:mb-8 w-[450px] mx-auto px-4 relative z-10 gap-3 sm:gap-0">
            <div className="flex flex-col sm:flex-row w-full bg-white/15 backdrop-blur-xl rounded-2xl sm:rounded-full border border-white/30 overflow-hidden shadow-2xl relative p-1 h-14 items-center"
                 style={{
                   boxShadow: '0 0 40px rgba(255, 20, 147, 0.4), 0 0 80px rgba(138, 43, 226, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
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
                }}
              >
                <span className="relative z-10 drop-shadow-lg">
                  {isSubmitting ? "Joining..." : "Join waitlist"}
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
