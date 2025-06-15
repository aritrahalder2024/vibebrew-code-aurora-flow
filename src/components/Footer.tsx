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
              aria-label="Discord server"
            >
              {/* Discord mascot outlined icon, matches official shape */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 245 240"
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ display: "block" }}
              >
                <path
                  d="M104.4 193.1c-11.8 0-21.1-10.4-21.1-23.2m78.3 23.2c11.8 0 21.1-10.4 21.1-23.2"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                />
                <path
                  d="M64.7 205.1C29 194.9 7 174.2 7 174.2s20.3-36.3 30.9-77.4c5.3-20.5 13.5-40.5 24.1-57.9 15.8-25.6 38-37.2 48.7-41.2 22.3-8.6 54.6-8.6 76.9 0 10.7 4.1 32.9 15.6 48.8 41.2 10.6 17.3 18.8 37.3 24.1 57.9C217.7 137.9 238 174.2 238 174.2s-22 20.7-57.7 30.9c-7.3-12.3-18.1-23.6-33.5-23.6h-37.6c-15.3.1-26.2 11.4-33.5 23.6z"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                />
                <ellipse cx="94.8" cy="143.8" rx="13.5" ry="16.5" stroke="currentColor" strokeWidth="9" fill="none"/>
                <ellipse cx="150.2" cy="143.8" rx="13.5" ry="16.5" stroke="currentColor" strokeWidth="9" fill="none"/>
              </svg>
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
