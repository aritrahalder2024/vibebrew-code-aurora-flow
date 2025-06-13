import { MessageCircle, Heart, Share } from "lucide-react";

export const DiscussionPreview = () => {
  const discussions = [
    {
      id: 1,
      title: "Just built my first SaaS with Claude AI in 48 hours! 🚀",
      author: "CodeNinja23",
      avatar: "CN",
      replies: 47,
      likes: 156,
      tag: "Solo Success",
      timeAgo: "2h ago",
      preview: "Used Claude to generate the entire backend API and React frontend. Revenue: $2.1k in first week..."
    },
    {
      id: 2,
      title: "Anyone tried the new GPT-4o for code generation?",
      author: "AIVibeLord",
      avatar: "AV",
      replies: 23,
      likes: 89,
      tag: "AI Tools",
      timeAgo: "4h ago",
      preview: "The context window is insane! Built a full e-commerce store in one session..."
    },
    {
      id: 3,
      title: "From idea to $10k MRR using only AI tools - My journey",
      author: "SoloHustler",
      avatar: "SH",
      replies: 92,
      likes: 304,
      tag: "Journey",
      timeAgo: "6h ago",
      preview: "Started with ChatGPT for market research, used Claude for coding, Midjourney for design..."
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 text-white font-jetbrains-mono text-xs floating"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${6 + i}s`
            }}
          >
            {['</>', '{}', '()', 'AI', 'fn', '=>', 'const', 'async'][i]}
          </div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold text-white mb-6">
            Live <span className="text-aurora-purple">Discussions</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {discussions.map((discussion, index) => (
            <div
              key={discussion.id}
              className="glass-strong rounded-glass p-6 hover:scale-[1.02] transition-all duration-300 cursor-pointer group hover:shadow-glow border border-white/10"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-aurora-gradient rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                  {discussion.avatar}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-3 py-1 bg-aurora-gradient rounded-full text-xs font-medium text-white">
                      {discussion.tag}
                    </span>
                    <span className="text-white/60 text-sm">{discussion.timeAgo}</span>
                  </div>
                  
                  <h3 className="text-xl font-space-grotesk font-bold text-white mb-2 group-hover:text-aurora-pink transition-colors">
                    {discussion.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">
                    {discussion.preview}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-white/60">
                    <div className="flex items-center space-x-2 hover:text-aurora-pink transition-colors">
                      <MessageCircle size={16} />
                      <span className="text-sm">{discussion.replies}</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-aurora-pink transition-colors">
                      <Heart size={16} />
                      <span className="text-sm">{discussion.likes}</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:text-aurora-pink transition-colors">
                      <Share size={16} />
                      <span className="text-sm">Share</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="glass-strong px-8 py-4 rounded-full text-white font-medium hover:scale-105 transition-all duration-300 hover:shadow-glow">
            Join the Discussion →
          </button>
        </div>
      </div>
    </section>
  );
};
