
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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
      <div className="container mx-auto text-center relative max-w-4xl">
        {/* Main content */}
        <div className="relative z-10">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/4cc4b31e-9b0b-4ad4-8e52-3b8a41df42c6.png" 
              alt="Vibebrew Logo" 
              className="mx-auto h-16 w-auto mb-6"
            />
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-space-grotesk font-black text-white mb-6 leading-tight tracking-tight">
            <span className="block mb-2">Where Devs Vibe,</span>
            <span className="bg-aurora-gradient bg-clip-text text-transparent">
              Build & Brew Ideas with AI
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Join the vibrant community of creators, developers, and innovators building the future together.
          </p>
          
          {/* Email signup form - styled like the uploaded image */}
          <form onSubmit={handleSubmit} className="flex justify-center items-center mb-8 max-w-md mx-auto px-4">
            <div className="flex w-full bg-white/10 backdrop-blur-md rounded-full border border-white/20 overflow-hidden">
              <Input
                type="email"
                placeholder="Your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-0 text-white placeholder:text-white/60 focus:ring-0 focus:border-0 flex-1 px-6 py-4 text-base rounded-none"
                required
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black hover:bg-gray-100 font-semibold px-6 py-4 rounded-none rounded-r-full border-0 text-base"
              >
                {isSubmitting ? "Joining..." : "Join waitlist"}
              </Button>
            </div>
          </form>

          {/* Early bird message */}
          <div className="mt-6 glass-strong rounded-2xl p-4 max-w-sm mx-auto border border-aurora-pink/50">
            <div className="text-white font-medium text-sm">
              Join the waitlist for <span className="text-aurora-pink font-bold">exclusive discounts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
