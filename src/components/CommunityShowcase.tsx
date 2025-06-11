
export const CommunityShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "Neural Art Generator",
      creator: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      avatar: "SC"
    },
    {
      id: 2,
      title: "Blockchain Visualizer",
      creator: "Marcus Rivera", 
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      avatar: "MR"
    },
    {
      id: 3,
      title: "Climate Data Dashboard",
      creator: "Aisha Patel",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      avatar: "AP"
    },
    {
      id: 4,
      title: "AR Poetry Experience",
      creator: "Dev Thompson",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      avatar: "DT"
    },
    {
      id: 5,
      title: "Collaborative Code Editor",
      creator: "Luna Kim",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
      avatar: "LK"
    },
    {
      id: 6,
      title: "Music Generation AI",
      creator: "Zara Johnson",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      avatar: "ZJ"
    }
  ];

  return (
    <section id="community" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-4">
            Community <span className="text-aurora-purple">Showcase</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Discover incredible projects built by our creative coding community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-strong rounded-glass overflow-hidden shadow-tile hover:scale-105 hover:shadow-glow transition-all duration-300 cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-aurora-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-space-grotesk font-bold text-white mb-2">
                  {project.title}
                </h3>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-aurora-gradient rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {project.avatar}
                  </div>
                  <span className="text-white/70 text-sm">by {project.creator}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
