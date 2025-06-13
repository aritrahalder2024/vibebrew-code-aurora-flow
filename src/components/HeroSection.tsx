
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Button from "./Button";

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
      
      {/* Overlay with centered content */}
      <div className="container mx-auto text-center relative z-20 max-w-5xl">
        {/* Main content */}
        <div className="relative">
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-space-grotesk font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight relative z-10 px-2">
            <span className="block sm:inline">Where Devs Vibe, </span>
            <span className="text-aurora-pink font-bold block sm:inline whitespace-nowrap">
              Build & Brew Ideas with AI
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-medium px-4 relative z-10">
            Join the vibrant community of creators, developers, and innovators building the future together.
          </p>
          
          {/* Email signup form with enhanced glowing effects - Mobile optimized */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center mb-6 sm:mb-8 max-w-lg mx-auto px-4 relative z-10 gap-3 sm:gap-0">
            <div className="flex flex-col sm:flex-row w-full bg-white/15 backdrop-blur-xl rounded-2xl sm:rounded-full border border-white/30 overflow-hidden shadow-2xl relative p-1"
                 style={{
                   boxShadow: '0 0 40px rgba(255, 20, 147, 0.4), 0 0 80px rgba(138, 43, 226, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                 }}>
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-20"></div>
              
              <Input
                type="email"
                placeholder="Your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-0 text-white placeholder:text-white/70 focus:ring-0 focus:border-0 flex-1 px-4 sm:px-6 py-3 sm:py-4 text-base rounded-xl sm:rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 relative z-10 w-full"
                style={{
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
                }}
                required
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                size="medium"
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl sm:rounded-full py-3 px-6 font-semibold relative overflow-hidden group transform transition-all duration-300 hover:scale-105 w-full sm:w-auto mt-2 sm:mt-0"
                style={{
                  boxShadow: '0 0 25px rgba(255, 20, 147, 0.6), 0 0 50px rgba(138, 43, 226, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                }}
              >
                <span className="relative z-10 drop-shadow-lg">
                  {isSubmitting ? "Joining..." : "Join waitlist"}
                </span>
                {/* Static glow effect without animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </div>
          </form>

          {/* Developers brewing section - Mobile optimized */}
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-sm mx-auto relative z-10">
            {/* Overlapping avatars with hover effect and image support */}
            <div className="flex -space-x-3 sm:-space-x-4">
              {[
                { name: "A", img: null },
                { name: "B", img: null },
                { name: "C", img: null },
                { name: "D", img: null },
                { name: "E", img: null },
              ].map((user, idx) => (
                <div
                  key={user.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-500 flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow bg-gray-700 group transition-transform duration-200 hover:scale-110 hover:z-20 hover:ring-2 hover:ring-pink-400 cursor-pointer"
                  style={{ zIndex: 10 - idx }}
                  title={user.name}
                >
                  {user.img ? (
                    <img
                      src={user.img}
                      alt={user.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    user.name
                  )}
                </div>
              ))}
            </div>
            {/* Text */}
            <div className="text-center sm:text-left">
              <div className="text-white font-bold text-base sm:text-lg leading-tight">1,200+ developers</div>
              <div className="text-white/60 text-sm leading-tight">already brewing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
