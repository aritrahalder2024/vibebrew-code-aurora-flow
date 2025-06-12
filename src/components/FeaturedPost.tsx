
export const FeaturedPost = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-4">
            Featured <span className="text-aurora-purple">Post</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Discover the latest insights and innovations from our community
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-8 sm:p-12 hover:scale-105 transition-all duration-300 cursor-pointer group">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-aurora-gradient rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <div>
                  <p className="text-aurora-pink font-semibold">Sarah Chen</p>
                  <p className="text-white/60 text-sm">3 days ago</p>
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-space-grotesk font-bold text-white mb-4 group-hover:text-aurora-pink transition-colors">
                Building the Future: How AI is Transforming Creative Workflows
              </h3>
              
              <p className="text-white/80 leading-relaxed mb-6 text-lg">
                Discover how artificial intelligence is revolutionizing the way creators work, from automated design processes to intelligent content generation. Learn practical tips and real-world applications that are changing the creative landscape.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-aurora-pink/20 text-aurora-pink rounded-full text-sm font-medium">AI</span>
                <span className="px-3 py-1 bg-aurora-violet/20 text-aurora-violet rounded-full text-sm font-medium">Creative Tech</span>
                <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">Innovation</span>
              </div>
              
              <button className="px-6 py-3 bg-aurora-gradient rounded-full text-white font-semibold hover:scale-105 transition-transform group">
                Read Full Article
              </button>
            </div>
            
            <div className="w-full lg:w-80 h-64 lg:h-80 bg-gradient-to-br from-aurora-pink/20 to-aurora-violet/20 rounded-2xl flex items-center justify-center">
              <svg className="w-20 h-20 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
