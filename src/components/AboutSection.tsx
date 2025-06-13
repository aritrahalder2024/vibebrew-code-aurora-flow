export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-4 sm:mb-6">
            Welcome to the <span className="text-aurora-purple">Vibebrew</span> Community
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
            Where passionate creators, developers, and innovators come together to build, share, and grow. 
            Join our thriving community of makers who are shaping the future of technology and culture.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 transition-transform duration-300 group">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 mx-auto bg-aurora-gradient rounded-full flex items-center justify-center group-hover:animate-pulse">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold text-white mb-3 sm:mb-4 text-center">Innovation Hub</h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed text-center">
              Discover cutting-edge projects, share your innovations, and collaborate with fellow creators pushing boundaries.
            </p>
          </div>

          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 transition-transform duration-300 group">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 mx-auto bg-aurora-gradient rounded-full flex items-center justify-center group-hover:animate-pulse">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold text-white mb-3 sm:mb-4 text-center">Creative Network</h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed text-center">
              Connect with like-minded creators, find collaborators, and build meaningful relationships in our vibrant community.
            </p>
          </div>

          <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:scale-105 transition-transform duration-300 group">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mb-4 mx-auto bg-aurora-gradient rounded-full flex items-center justify-center group-hover:animate-pulse">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold text-white mb-3 sm:mb-4 text-center">Growth Together</h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed text-center">
              Learn from experienced creators, share knowledge, and accelerate your growth through community support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};