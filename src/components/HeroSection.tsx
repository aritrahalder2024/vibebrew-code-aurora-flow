
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
        {/* Enhanced floating interactive code elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-aurora-gradient rounded-3xl opacity-30 floating blur-sm cursor-pointer hover:opacity-50 transition-opacity animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-aurora-purple to-aurora-violet rounded-full opacity-40 floating animation-delay-300 cursor-pointer hover:scale-110 transition-transform animate-bounce"></div>
        <div className="absolute top-1/3 left-20 w-16 h-16 bg-aurora-pink/30 rounded-lg floating animation-delay-600 hover:rotate-45 transition-transform"></div>
        <div className="absolute bottom-1/3 right-20 w-20 h-20 bg-aurora-violet/30 rounded-full floating animation-delay-900 hover:scale-125 transition-transform"></div>
        
        {/* Moving code particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white/20 font-jetbrains-mono text-xs animate-float hover:text-white/40 transition-colors"
              style={{
                left: `${10 + i * 8}%`,
                top: `${20 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + i * 0.5}s`
              }}
            >
              {['{', '}', '()', '[]', '=>', '&&', '<>', '/>', 'AI', 'VIBE', '{}', '::'][i]}
            </div>
          ))}
        </div>

        {/* Orbiting elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-4 h-4 bg-aurora-pink rounded-full animate-spin origin-[12rem_0px] opacity-60"></div>
            <div className="absolute w-3 h-3 bg-aurora-purple rounded-full animate-spin origin-[8rem_0px] opacity-70 animation-delay-300" style={{ animationDuration: '8s' }}></div>
            <div className="absolute w-2 h-2 bg-aurora-violet rounded-full animate-spin origin-[6rem_0px] opacity-80 animation-delay-600" style={{ animationDuration: '12s' }}></div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="mb-6">
            <div className="inline-block animate-bounce">
              <span className="text-aurora-pink text-xl font-bold">🚀</span>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-space-grotesk font-black text-white mb-8 leading-tight tracking-tight">
            <span className="block mb-2">STOP</span>
            <span className="block mb-2">BUILDING</span>
            <span className="bg-aurora-gradient bg-clip-text text-transparent animate-glow-pulse block">
              ALONE
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-4 max-w-4xl mx-auto leading-relaxed font-bold">
            Join 500+ AI-powered solopreneurs who are
          </p>
          <p className="text-xl md:text-2xl text-aurora-pink mb-8 max-w-3xl mx-auto leading-relaxed font-semibold">
            building the future, sharing victories, and vibing with AI tools that actually work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="glass-strong hover:scale-110 transition-all duration-300 font-bold px-12 py-6 rounded-full text-xl shadow-glow animate-glow-pulse group hover:shadow-glow-pink"
            >
              <span className="group-hover:animate-pulse">Join the Revolution</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/50 text-white hover:bg-white/20 backdrop-blur-md px-12 py-6 rounded-full text-xl hover:scale-110 transition-all duration-300 hover:border-aurora-pink"
            >
              See What We're Building
            </Button>
          </div>

          {/* Enhanced early bird offer */}
          <div className="mt-8 glass-strong rounded-3xl p-6 max-w-lg mx-auto border border-aurora-pink/50 hover:scale-105 transition-transform duration-300 cursor-pointer animate-pulse">
            <div className="text-aurora-pink font-bold text-lg mb-2 animate-bounce">⚡ EARLY BIRD SPECIAL ⚡</div>
            <div className="text-white font-semibold text-lg">
              First 100 signups get <span className="text-aurora-pink font-black text-xl">LIFETIME FREE ACCESS</span>
            </div>
            <div className="text-white/70 text-sm mt-2">No strings attached. Forever.</div>
          </div>
        </div>

        {/* Enhanced interactive typing code snippet */}
        <div className="absolute bottom-10 right-0 glass-strong rounded-2xl p-6 max-w-sm hidden lg:block cursor-pointer hover:scale-110 transition-transform group hover:shadow-glow">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse animation-delay-300"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse animation-delay-600"></div>
          </div>
          <pre className="text-sm text-white/80 font-jetbrains-mono min-h-[100px]">
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
