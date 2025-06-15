
import React, { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Button from "../Button";

export const EmailSignupForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
          setEmail(""); // Clear the email input for duplicate entries too
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
          className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full px-4 sm:px-6 py-3 font-semibold relative overflow-hidden smooth-transform hover:scale-105 h-12 min-w-[100px] sm:min-w-[120px] gpu-accelerated"
          style={{
            boxShadow: '0 0 25px rgba(255, 20, 147, 0.6), 0 0 50px rgba(138, 43, 226, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          }}
        >
          <span className="relative z-10 drop-shadow-lg text-sm sm:text-base">
            {isSubmitting ? "Joining..." : "Join waitlist"}
          </span>
        </Button>
      </div>
    </form>
  );
};
