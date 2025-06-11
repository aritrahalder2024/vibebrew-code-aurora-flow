
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Large text blocks */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold text-white leading-tight">
              Building the
              <br />
              <span className="text-aurora-pink">Future</span> of
              <br />
              Creative Code
            </h2>
            
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                We're not just another coding bootcamp or tech meetup. Vibebrew is where the art meets the algorithm, where midnight hackathons turn into breakthrough innovations.
              </p>
              
              <p>
                Our community thrives on collaboration, creativity, and the shared belief that code is a canvas for building tomorrow's digital experiences.
              </p>
              
              <p className="text-aurora-violet font-medium">
                Join developers, designers, and digital artists who are redefining what's possible in tech.
              </p>
            </div>
          </div>

          {/* Right: Stats panel */}
          <div className="glass-strong rounded-glass p-8 shadow-glass">
            <h3 className="text-2xl font-space-grotesk font-bold text-white mb-8">Community Stats</h3>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-aurora-gradient bg-clip-text text-transparent mb-2">
                  2.5K+
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide">Active Members</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold bg-aurora-gradient bg-clip-text text-transparent mb-2">
                  150+
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide">Projects Built</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold bg-aurora-gradient bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide">Collaborations</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold bg-aurora-gradient bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-white/60 text-sm uppercase tracking-wide">Community Vibe</div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-aurora-pink font-medium mb-2">Languages We Love</div>
                <div className="flex flex-wrap justify-center gap-2">
                  {['JavaScript', 'Python', 'Rust', 'Go', 'TypeScript'].map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70 font-jetbrains-mono">
                      {lang}
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
