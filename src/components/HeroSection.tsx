
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export const HeroSection = () => {
  const [currentCode, setCurrentCode] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const codeSnippets = [
    `const vibecoder = {
  mindset: 'solopreneur',
  tools: ['AI', 'automation'],
  vibe: 'unstoppable'
};`,
    `function buildWithAI() {
  return passion
    .mix(vibeTools)
    .scale(community);
}`,
    `class Solopreneur {
  constructor() {
    this.aiPowered = true;
    this.vibeLevel = 100;
  }
}`
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeSnippets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = codeSnippets[currentCode];
    let index = 0;
    setTypedText("");
    
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentCode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      const existingEmails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');
      
      if (existingEmails.includes(email)) {
        toast({
          title: "Already on the waitlist! 🎉",
          description: "You're already signed up. We'll notify you when we launch!",
          duration: 5000,
        });
      } else {
        existingEmails.push(email);
        localStorage.setItem('waitlistEmails', JSON.stringify(existingEmails));
        toast({
          title: "Welcome to the Revolution! 🚀",
          description: "You're now on the waitlist. Get ready for exclusive discounts!",
          duration: 5000,
        });
        setEmail("");
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 relative overflow-hidden">
      <div className="container mx-auto text-center relative max-w-6xl">
        {/* Simplified floating elements */}
        <div className="absolute top-10 right-5 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 bg-aurora-pink/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-5 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-aurora-violet/20 rounded-full blur-xl animate-pulse animation-delay-300"></div>
        
        {/* Main content */}
        <div className="relative z-10">
          <div className="mb-4 sm:mb-6">
            <div className="inline-block animate-bounce">
              <span className="text-aurora-pink text-lg sm:text-xl font-bold">🚀</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-space-grotesk font-black text-white mb-6 sm:mb-8 leading-tight tracking-tight">
            <span className="block mb-1 sm:mb-2">STOP</span>
            <span className="block mb-1 sm:mb-2">BUILDING</span>
            <span className="bg-aurora-gradient bg-clip-text text-transparent animate-pulse block">
              ALONE
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-3 sm:mb-4 max-w-4xl mx-auto leading-relaxed font-bold px-4">
            Join 500+ AI-powered solopreneurs who are
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-aurora-pink mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-semibold px-4">
            building the future, sharing victories, and vibing with AI tools that actually work.
          </p>
          
          {/* Email signup form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 sm:mb-8 max-w-lg mx-auto px-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass-strong text-white placeholder:text-white/50 border-white/30 text-base sm:text-lg py-3 sm:py-4 px-4 sm:px-6 rounded-full flex-1"
              required
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              size="lg" 
              className="glass-strong hover:scale-105 transition-all duration-300 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg shadow-glow animate-pulse group hover:shadow-glow-pink w-full sm:w-auto"
            >
              <span className="group-hover:animate-pulse">
                {isSubmitting ? "Joining..." : "Join the Revolution"}
              </span>
            </Button>
          </form>

          {/* Simplified early bird offer */}
          <div className="mt-6 sm:mt-8 glass-strong rounded-2xl sm:rounded-3xl p-4 sm:p-6 max-w-md mx-auto border border-aurora-pink/50 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="text-aurora-pink font-bold text-base sm:text-lg mb-2">⚡ EARLY BIRD ⚡</div>
            <div className="text-white font-semibold text-sm sm:text-base">
              Join the waitlist for <span className="text-aurora-pink font-black">exclusive discounts</span>
            </div>
          </div>
        </div>

        {/* Simplified code snippet for larger screens */}
        <div className="absolute bottom-6 sm:bottom-10 right-0 glass-strong rounded-xl sm:rounded-2xl p-3 sm:p-6 max-w-xs sm:max-w-sm hidden lg:block cursor-pointer hover:scale-110 transition-transform group hover:shadow-glow">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse animation-delay-300"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse animation-delay-600"></div>
          </div>
          <pre className="text-xs sm:text-sm text-white/80 font-jetbrains-mono min-h-[80px] sm:min-h-[100px]">
            <code>{typedText}<span className="animate-pulse text-aurora-pink">|</span></code>
          </pre>
        </div>
      </div>
    </section>
  );
};
