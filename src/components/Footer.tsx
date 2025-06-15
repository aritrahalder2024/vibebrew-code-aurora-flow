import { MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-white/5 border-t border-white/10 py-4 px-2 sm:px-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Left side - Links */}
        <div className="flex items-center space-x-6 mb-4 sm:mb-0">
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">About</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Terms</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Privacy</a>
          
          {/* Social icons */}
          <div className="flex items-center space-x-3">
            <a
              href="https://x.com/_aritrahalder_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="https://discord.gg/89SyJ5aG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              <MessageCircle size={20} strokeWidth={2} />
            </a>
            <a href="https://www.linkedin.com/in/aritra-halder/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Right side - Built with message */}
        <div className="text-white/80 text-sm">
          Built with <span className="text-yellow-300">✨</span> in public.
        </div>
      </div>
    </footer>
  );
};
