
export const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Creative Coding",
      excerpt: "Exploring how AI and traditional programming are merging to create new forms of digital art.",
      author: "Alex Chen",
      date: "2024-06-10",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Building Communities in Tech",
      excerpt: "Why fostering creativity and collaboration matters more than ever in our industry.",
      author: "Jordan Smith",
      date: "2024-06-08",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Generative Art with Code",
      excerpt: "A beginner's guide to creating stunning visual art using programming languages.",
      author: "Maya Patel",
      date: "2024-06-05",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-4">
            Featured <span className="text-aurora-pink">Posts</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Insights, tutorials, and stories from our creative coding community
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="glass-strong rounded-glass overflow-hidden shadow-tile hover:scale-105 hover:shadow-glow transition-all duration-300 cursor-pointer group w-80 flex-shrink-0"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-aurora-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-white/60 mb-3">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-space-grotesk font-bold text-white mb-3 group-hover:text-aurora-pink transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-aurora-violet text-sm font-medium">
                      by {post.author}
                    </span>
                    <span className="text-white/60 text-sm group-hover:text-white transition-colors">
                      Read more →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
