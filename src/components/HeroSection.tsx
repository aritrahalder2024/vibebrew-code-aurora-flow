
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center relative">
        {/* Floating 3D abstract shape */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-aurora-gradient rounded-3xl opacity-30 floating blur-sm"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-aurora-purple to-aurora-violet rounded-full opacity-40 floating animation-delay-300"></div>
        
        {/* Main content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-space-grotesk font-bold text-white mb-6 leading-tight">
            Where Code
            <br />
            <span className="bg-aurora-gradient bg-clip-text text-transparent">
              Meets Culture
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Vibebrew is a coding community built for creators — designers, developers, hackers and dreamers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="glass-strong hover:scale-105 transition-all duration-300 font-medium px-8 py-4 rounded-full text-lg shadow-glow animate-glow-pulse"
            >
              Join the Brew
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md px-8 py-4 rounded-full text-lg"
            >
              Explore Community
            </Button>
          </div>
        </div>

        {/* Decorative code snippet */}
        <div className="absolute bottom-10 right-0 glass rounded-lg p-4 max-w-sm hidden lg:block">
          <pre className="text-sm text-white/60 font-jetbrains-mono">
            <code>{`const community = {
  name: 'Vibebrew',
  vibe: 'creative',
  members: '∞'
};`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};
