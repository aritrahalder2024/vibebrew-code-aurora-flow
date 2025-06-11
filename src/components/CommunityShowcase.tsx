
export const CommunityShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered SaaS Builder",
      creator: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      avatar: "SC",
      type: "Solopreneur Journey"
    },
    {
      id: 2,
      title: "ChatGPT Code Assistant",
      creator: "Marcus Rivera", 
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      avatar: "MR",
      type: "AI Tool Discovery"
    },
    {
      id: 3,
      title: "No-Code AI Analytics",
      creator: "Aisha Patel",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      avatar: "AP",
      type: "Idea Validation"
    },
    {
      id: 4,
      title: "Voice-to-Code App",
      creator: "Dev Thompson",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      avatar: "DT",
      type: "AI Experiment"
    },
    {
      id: 5,
      title: "Automated Content Engine",
      creator: "Luna Kim",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
      avatar: "LK",
      type: "Solo Success"
    },
    {
      id: 6,
      title: "AI Music Generator",
      creator: "Zara Johnson",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      avatar: "ZJ",
      type: "Creative AI"
    }
  ];

  return (
    <section id="community" className="py-20 px-6 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-aurora-pink/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-aurora-violet/20 rounded-full blur-3xl animate-pulse animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-aurora-purple/20 rounded-full blur-2xl animate-pulse animation-delay-600"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-4">
            Vibecoder <span className="text-aurora-purple">Showcase</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            See what our community is building with AI tools and sharing their solopreneur journeys
          </p>
        </div>

        {/* Non-linear masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Project 1 - Large */}
          <div className="md:col-span-6 md:row-span-2">
            <div className="glass-strong rounded-glass overflow-hidden shadow-tile hover:scale-105 hover:shadow-glow hover:rotate-1 transition-all duration-500 cursor-pointer group h-full">
              <div className="relative overflow-hidden h-64 md:h-80">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-aurora-gradient opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-aurora-gradient rounded-full text-xs font-medium text-white">
                    {projects[0].type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-space-grotesk font-bold text-white mb-3">
                  {projects[0].title}
                </h3>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-aurora-gradient rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {projects[0].avatar}
                  </div>
                  <span className="text-white/70 text-sm">by {projects[0].creator}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - Medium */}
          <div className="md:col-span-6">
            <div className="glass-strong rounded-glass overflow-hidden shadow-tile hover:scale-105 hover:shadow-glow hover:-rotate-1 transition-all duration-500 cursor-pointer group">
              <div className="relative overflow-hidden h-48">
                <img
                  src={projects[1].image}
                  alt={projects[1].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-aurora-gradient opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-aurora-gradient rounded-full text-xs font-medium text-white">
                    {projects[1].type}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">
                  {projects[1].title}
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-aurora-gradient rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {projects[1].avatar}
                  </div>
                  <span className="text-white/70 text-xs">by {projects[1].creator}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 - Small */}
          <div className="md:col-span-3">
            <div className="glass-strong rounded-glass overflow-hidden shadow-tile hover:scale-105 hover:shadow-glow hover:rotate-2 transition-all duration-500 cursor-pointer group">
              <div className="relative overflow-hidden h-32">
                <img
                  src={projects[2].image}
                  alt={projects[2].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-aurora-gradient opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-space-grotesk font-bold text-white mb-1">
                  {projects[2].title}
                </h3>
                <div className="flex items-center space-x-1">
                  <div className="w-5 h-5 bg-aurora-gradient rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {projects[2].avatar}
                  </div>
                  <span className="text-white/70 text-xs">{projects[2].creator}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 - Small */}
          <div className="md:col-span-3">
            <div className="glass-strong rounded-glass overflow-hidden shadow-tile hover:scale-105 hover:shadow-glow hover:-rotate-2 transition-all duration-500 cursor-pointer group">
              <div className="relative overflow-hidden h-32">
                <img
                  src={projects[3].image}
                  alt={projects[3].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-aurora-gradient opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-space-grotesk font-bold text-white mb-1">
                  {projects[3].title}
                </h3>
                <div className="flex items-center space-x-1">
                  <div className="w-5 h-5 bg-aurora-gradient rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {projects[3].avatar}
                  </div>
                  <span className="text-white/70 text-xs">{projects[3].creator}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 5 - Medium */}
          <div className="md:col-span-4">
            <div className="glass-strong rounded-glass overflow-hidden shadow-tile hover:scale-105 hover:shadow-glow hover:rotate-1 transition-all duration-500 cursor-pointer group">
              <div className="relative overflow-hidden h-40">
                <img
                  src={projects[4].image}
                  alt={projects[4].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-aurora-gradient opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-aurora-gradient rounded-full text-xs font-medium text-white">
                    {projects[4].type}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">
                  {projects[4].title}
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-aurora-gradient rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {projects[4].avatar}
                  </div>
                  <span className="text-white/70 text-xs">by {projects[4].creator}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 6 - Medium */}
          <div className="md:col-span-8">
            <div className="glass-strong rounded-glass overflow-hidden shadow-tile hover:scale-105 hover:shadow-glow hover:-rotate-1 transition-all duration-500 cursor-pointer group">
              <div className="relative overflow-hidden h-40">
                <img
                  src={projects[5].image}
                  alt={projects[5].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-aurora-gradient opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-aurora-gradient rounded-full text-xs font-medium text-white">
                    {projects[5].type}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">
                  {projects[5].title}
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-aurora-gradient rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {projects[5].avatar}
                  </div>
                  <span className="text-white/70 text-xs">by {projects[5].creator}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
