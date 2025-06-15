
import { MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-white/5 border-t border-white/10 py-4 px-2 sm:px-6">
      <div className="container mx-auto flex flex-col items-center space-y-3 sm:space-y-0 sm:py-2">
        {/* Top row: About, Terms, Privacy links */}
        <div className="flex items-center justify-center space-x-6">
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">About</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Terms</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Privacy</a>
        </div>

        {/* Middle row: Social icons, centered */}
        <div className="flex items-center justify-center space-x-8 mt-2">
          <a
            href="https://x.com/_aritrahalder_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            {/* Twitter icon (Lucide style) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
            {/* Discord circle mascot based on user reference */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="14" cy="14" r="11.5" />
              <circle cx="10" cy="13" r="1.3" />
              <circle cx="18" cy="13" r="1.3" />
              <path d="M10.5 17q3 1.5 7-0.2" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/aritra-halder/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            {/* LinkedIn icon (Lucide style) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>

        {/* Bottom row: Built with message */}
        <div className="text-white/80 text-sm mt-2 text-center">
          Built with <span className="text-yellow-300">✨</span> in public.
        </div>
      </div>
    </footer>
  );
};
