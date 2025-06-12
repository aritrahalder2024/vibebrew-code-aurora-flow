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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 relative overflow-hidden">
      {/* Fixed background without interfering elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      <div className="container mx-auto text-center relative z-20 max-w-4xl">
        {/* Main content */}
        <div className="relative">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src=" /logo.webp"
              alt="Vibebrew Logo" 
              className="mx-auto h-16 w-auto mb-6"
            />
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-space-grotesk font-black text-white mb-6 leading-tight tracking-tight relative z-10">
            <span className="block mb-2">Where Devs Vibe,</span>
            <span className="bg-aurora-gradient bg-clip-text text-transparent">
              Build & Brew Ideas with AI
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-medium px-4 relative z-10">
            Join the vibrant community of creators, developers, and innovators building the future together.
          </p>
          
          {/* Email signup form with glowing button */}
          <form onSubmit={handleSubmit} className="flex justify-center items-center mb-8 max-w-md mx-auto px-4 relative z-10">
            <div className="flex w-full bg-white/10 backdrop-blur-md rounded-full border border-white/20 overflow-hidden shadow-lg">
              <Input
                type="email"
                placeholder="Your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-0 text-white placeholder:text-white/60 focus:ring-0 focus:border-0 flex-1 px-6 py-4 text-base rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                size="medium"
                className="bg-black text-white rounded-full py-2 px-6 font-semibold"
              >
                {isSubmitting ? "Joining..." : "Join waitlist"}
              </Button>
            </div>
          </form>

          {/* Early bird message */}
          <div className="mt-6 glass-strong rounded-2xl p-4 max-w-sm mx-auto border border-aurora-pink/50 relative z-10">
            <div className="text-white font-medium text-sm">
              Join the waitlist for <span className="text-aurora-pink font-bold">exclusive discounts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
