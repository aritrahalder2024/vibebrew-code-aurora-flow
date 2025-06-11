
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-aurora-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="text-white font-space-grotesk font-bold text-xl">Vibebrew</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/80 hover:text-white transition-colors font-medium">
              Home
            </a>
            <a href="#community" className="text-white/80 hover:text-white transition-colors font-medium">
              Community
            </a>
            <a href="#blog" className="text-white/80 hover:text-white transition-colors font-medium">
              Blog
            </a>
            <a href="#events" className="text-white/80 hover:text-white transition-colors font-medium">
              Events
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-aurora-gradient hover:scale-105 transition-transform duration-300 font-medium px-6 py-2 rounded-full shadow-glow">
              Join Waitlist
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="text-white/80 hover:text-white transition-colors font-medium">
                Home
              </a>
              <a href="#community" className="text-white/80 hover:text-white transition-colors font-medium">
                Community
              </a>
              <a href="#blog" className="text-white/80 hover:text-white transition-colors font-medium">
                Blog
              </a>
              <a href="#events" className="text-white/80 hover:text-white transition-colors font-medium">
                Events
              </a>
              <Button className="bg-aurora-gradient hover:scale-105 transition-transform duration-300 font-medium px-6 py-2 rounded-full shadow-glow w-fit">
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
