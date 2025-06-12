
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
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
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 relative overflow-hidden">
      <div className="container mx-auto text-center relative max-w-4xl">
        {/* Main content */}
        <div className="relative z-10">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/4cc4b31e-9b0b-4ad4-8e52-3b8a41df42c6.png" 
              alt="Vibebrew Logo" 
              className="mx-auto h-16 w-auto mb-6"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-space-grotesk font-black text-white mb-6 leading-tight tracking-tight">
            <span className="block mb-2">Where Code Meets</span>
            <span className="bg-aurora-gradient bg-clip-text text-transparent">
              Culture
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Join the vibrant community of creators, developers, and innovators building the future together.
          </p>
          
          {/* Email signup form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 max-w-md mx-auto px-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass-strong text-white placeholder:text-white/50 border-white/30 text-base py-3 px-4 rounded-full flex-1"
              required
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              size="lg" 
              className="glass-strong hover:scale-105 transition-all duration-300 font-bold px-6 py-3 rounded-full text-base shadow-glow animate-pulse group hover:shadow-glow-pink w-full sm:w-auto"
            >
              <span className="group-hover:animate-pulse">
                {isSubmitting ? "Joining..." : "Join the Revolution"}
              </span>
            </Button>
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
