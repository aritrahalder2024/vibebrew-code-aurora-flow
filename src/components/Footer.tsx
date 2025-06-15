
import { MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="backdrop-blur-md bg-white/5 border-t border-white/10 py-4 px-2 sm:px-6">
      <div className="container mx-auto flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:py-2">
        {/* Left: About, Terms, Privacy */}
        <div className="flex items-center justify-center sm:justify-start space-x-9 order-1 sm:order-none mb-1 sm:mb-0">
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">About</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Terms</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Privacy</a>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center justify-center space-x-10 order-3 sm:order-none my-1 sm:my-0">
          {/* Twitter */}
          <a
            href="https://x.com/_aritrahalder_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Twitter"
          >
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
          {/* Discord */}
          <a
            href="https://discord.gg/89SyJ5aG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Discord server"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 14.09 14.09 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.246.195.373.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.210 0 2.176 1.077 2.157 2.38 0 1.311-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.210 0 2.176 1.077 2.157 2.38 0 1.311-.946 2.38-2.157 2.38z"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aritra-halder/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
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

        {/* Right: Built with message */}
        <div className="text-white/80 text-sm text-center sm:text-right order-2 sm:order-none mt-1 sm:mt-0 w-full sm:w-auto">
          Built with <span className="text-yellow-300">✨</span> in public.
        </div>
      </div>
    </footer>
  );
};
