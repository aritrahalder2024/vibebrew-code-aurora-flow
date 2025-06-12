
export const AboutSection = () => {
  const stats = [
    { number: "500+", label: "Vibecoders" },
    { number: "50+", label: "AI Tools Discussed" },
    { number: "100+", label: "Success Stories" },
    { number: "24/7", label: "Community Support" }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-4 sm:mb-6">
            Welcome to the <span className="text-aurora-purple">Vibecoder</span> Revolution
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            The ultimate community for AI-powered solopreneurs. Share your journey, discover cutting-edge tools, 
            validate ideas, and connect with fellow builders who are changing the world one line of code at a time.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center glass-strong rounded-2xl p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl md:text-4xl font-space-grotesk font-bold text-aurora-pink mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 transition-transform duration-300 group">
            <div className="text-3xl sm:text-4xl mb-4 group-hover:animate-bounce">🤖</div>
            <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold text-white mb-3 sm:mb-4">AI Tool Discovery</h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Discover, review, and share the latest AI tools that are actually worth your time and money.
            </p>
          </div>

          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 transition-transform duration-300 group">
            <div className="text-3xl sm:text-4xl mb-4 group-hover:animate-bounce">💡</div>
            <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold text-white mb-3 sm:mb-4">Idea Validation</h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Test your startup ideas with a community that gets it. Get real feedback from fellow builders.
            </p>
          </div>

          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 transition-transform duration-300 group">
            <div className="text-3xl sm:text-4xl mb-4 group-hover:animate-bounce">🚀</div>
            <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold text-white mb-3 sm:mb-4">Solo Success</h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Share your solopreneur journey, celebrate wins, and learn from setbacks together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
