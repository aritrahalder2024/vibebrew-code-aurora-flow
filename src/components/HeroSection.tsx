import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [currentCode, setCurrentCode] = useState(0);
  const [typedText, setTypedText] = useState("");
  
  const codeSnippets = [
    `// Your next unicorn startup
const success = AI + vision + execution;
return millionaire.status;`,
    `// Build faster than ever
function revolutionize() {
  return code.withAI()
    .ship().scale().profit();
}`,
    `// Join the AI gold rush
class Vibecoder extends Solopreneur {
  constructor() {
    this.aiPowered = true;
    this.limitless = true;
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        {/* Main content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-6">
            <div className="inline-block animate-bounce">
              <span className="text-aurora-pink text-2xl md:text-3xl font-bold">⚡</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-space-grotesk font-black text-white mb-6 md:mb-8 leading-tight tracking-tight">
            <span className="block mb-2">TURN YOUR</span>
            <span className="block mb-2">CODE INTO</span>
            <span className="bg-aurora-gradient bg-clip-text text-transparent animate-glow-pulse block">
              CASH
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-4 max-w-5xl mx-auto leading-relaxed font-bold">
            The ONLY community where AI-powered solopreneurs are making
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-aurora-pink mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed font-semibold">
            $10K-$100K per month building the future with code & AI tools
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-6 md:mb-8">
            <Button 
              size="lg" 
              className="glass-strong hover:scale-110 transition-all duration-300 font-bold px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-xl shadow-glow animate-glow-pulse group hover:shadow-glow-pink w-full sm:w-auto"
            >
              <span className="group-hover:animate-pulse">JOIN THE REVOLUTION →</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/50 text-white hover:bg-white/20 backdrop-blur-md px-8 md:px-12 py-4 md:py-6 rounded-full text-lg md:text-xl hover:scale-110 transition-all duration-300 hover:border-aurora-pink w-full sm:w-auto"
            >
              See Success Stories
            </Button>
          </div>

          {/* Enhanced early bird offer */}
          <div className="mt-6 md:mt-8 glass-strong rounded-2xl md:rounded-3xl p-4 md:p-6 max-w-lg mx-auto border border-aurora-pink/50 hover:scale-105 transition-transform duration-300 cursor-pointer animate-pulse">
            <div className="text-aurora-pink font-bold text-base md:text-lg mb-2 animate-bounce">🎯 EXCLUSIVE EARLY ACCESS</div>
            <div className="text-white font-semibold text-base md:text-lg">
              Join the waitlist for <span className="text-aurora-pink font-black text-lg md:text-xl">EXCLUSIVE DISCOUNTS</span>
            </div>
            <div className="text-white/70 text-sm mt-2">First 100 members get lifetime benefits</div>
          </div>
        </div>

        {/* Enhanced interactive typing code snippet - Hidden on mobile */}
        <div className="absolute bottom-10 right-0 glass-strong rounded-2xl p-4 md:p-6 max-w-xs md:max-w-sm hidden lg:block cursor-pointer hover:scale-110 transition-transform group hover:shadow-glow">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse animation-delay-300"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse animation-delay-600"></div>
          </div>
          <pre className="text-xs md:text-sm text-white/80 font-jetbrains-mono min-h-[80px] md:min-h-[100px]">
            <code>{typedText}<span className="animate-pulse text-aurora-pink">|</span></code>
          </pre>
          <div className="text-xs text-aurora-pink mt-3 opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
            Live coding vibes ✨
          </div>
        </div>
      </div>
    </section>
  );
};
