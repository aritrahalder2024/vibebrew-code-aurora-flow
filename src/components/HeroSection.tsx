
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [currentCode, setCurrentCode] = useState(0);
  const [typedText, setTypedText] = useState("");
  
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="container mx-auto text-center relative">
        {/* Floating interactive code elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-aurora-gradient rounded-3xl opacity-30 floating blur-sm cursor-pointer hover:opacity-50 transition-opacity"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-aurora-purple to-aurora-violet rounded-full opacity-40 floating animation-delay-300 cursor-pointer hover:scale-110 transition-transform"></div>
        
        {/* Moving code particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white/20 font-jetbrains-mono text-xs animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i}s`
              }}
            >
              {['{', '}', '()', '[]', '=>', '&&'][i]}
            </div>
          ))}
        </div>
        
        {/* Main content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-space-grotesk font-bold text-white mb-6 leading-tight">
            Where AI
            <br />
            <span className="bg-aurora-gradient bg-clip-text text-transparent animate-glow-pulse">
              Meets Vibe
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join vibecoders building the future with AI tools, sharing solopreneur journeys, and creating magic together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="glass-strong hover:scale-105 transition-all duration-300 font-medium px-8 py-4 rounded-full text-lg shadow-glow animate-glow-pulse group"
            >
              <span className="group-hover:animate-pulse">Join the Vibe</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-8 py-4 rounded-full text-lg hover:scale-105 transition-all duration-300"
            >
              Explore Community
            </Button>
          </div>

          {/* Early bird offer */}
          <div className="mt-8 glass rounded-2xl p-4 max-w-md mx-auto border border-aurora-pink/30">
            <div className="text-aurora-pink font-medium text-sm mb-1">🚀 Early Access</div>
            <div className="text-white/90 text-sm">
              First 100 signups get <span className="text-aurora-pink font-bold">lifetime free access</span>
            </div>
          </div>
        </div>

        {/* Interactive typing code snippet */}
        <div className="absolute bottom-10 right-0 glass rounded-lg p-4 max-w-sm hidden lg:block cursor-pointer hover:scale-105 transition-transform group">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <pre className="text-sm text-white/60 font-jetbrains-mono min-h-[80px]">
            <code>{typedText}<span className="animate-pulse">|</span></code>
          </pre>
          <div className="text-xs text-white/40 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Click to copy
          </div>
        </div>
      </div>
    </section>
  );
};
