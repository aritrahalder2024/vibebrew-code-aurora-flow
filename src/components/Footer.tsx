
export const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-aurora-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-white font-space-grotesk font-bold text-xl">Vibebrew</span>
            </div>
            <p className="text-white/70 max-w-md mb-6">
              A creative coding community where developers, designers, and digital artists collaborate to build the future of tech.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300"
              >
                <span className="text-white text-sm">tw</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300"
              >
                <span className="text-white text-sm">gh</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300"
              >
                <span className="text-white text-sm">dc</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-space-grotesk font-bold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-aurora-pink transition-colors">Join Discord</a></li>
              <li><a href="#" className="text-white/70 hover:text-aurora-pink transition-colors">GitHub</a></li>
              <li><a href="#" className="text-white/70 hover:text-aurora-pink transition-colors">Projects</a></li>
              <li><a href="#" className="text-white/70 hover:text-aurora-pink transition-colors">Contributors</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-space-grotesk font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-aurora-violet transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/70 hover:text-aurora-violet transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-white/70 hover:text-aurora-violet transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-aurora-violet transition-colors">Events</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/60">
            Built with ❤️ by the <span className="text-aurora-pink">Vibebrew</span> community
          </p>
        </div>
      </div>
    </footer>
  );
};
