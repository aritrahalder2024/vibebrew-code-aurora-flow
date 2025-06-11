
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Large text blocks */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold text-white leading-tight">
              The Ultimate
              <br />
              <span className="text-aurora-pink">Vibecoder</span>
              <br />
              Community
            </h2>
            
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                We're building the go-to community for vibecoders who leverage AI tools to create, build, and scale as solopreneurs.
              </p>
              
              <p>
                Share your journey, discover cutting-edge AI coding tools, get feedback on your ideas, and connect with like-minded builders who vibe with the future.
              </p>
              
              <p className="text-aurora-violet font-medium">
                Reddit-style discussions. AI tool discoveries. Solopreneur stories. Pure vibe.
              </p>
            </div>
          </div>

          {/* Right: Stats panel */}
          <div className="glass-strong rounded-glass p-8 shadow-glass">
            <h3 className="text-2xl font-space-grotesk font-bold text-white mb-8">Community Vibes</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-aurora-gradient bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide">Vibecoders</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold bg-aurora-gradient bg-clip-text text-transparent mb-2">
                  200+
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide">AI Tools Shared</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold bg-aurora-gradient bg-clip-text text-transparent mb-2">
                  150+
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide">Solo Journeys</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold bg-aurora-gradient bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide">Vibe Exchange</div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-aurora-pink font-medium mb-2">Hot AI Tools</div>
                <div className="flex flex-wrap justify-center gap-2">
                  {['ChatGPT', 'Claude', 'GitHub Copilot', 'Cursor', 'V0'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70 font-jetbrains-mono">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
