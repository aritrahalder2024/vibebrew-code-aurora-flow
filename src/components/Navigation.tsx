import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#community", label: "Community" },
    { href: "#events", label: "Events" },
    { href: "#blog", label: "Blog" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav className="navbar-glass fixed left-1/2 top-6 transform -translate-x-1/2 z-50 h-16 sm:h-20 flex items-center rounded-full shadow-lg px-4 sm:px-8 max-w-6xl w-[96vw]">
      <div className="flex items-center justify-between w-full h-full">
        {/* Logo */}
        <div className="flex items-center h-full pl-2">
          <a href="#home" className="flex items-center h-full">
            <div className="relative">
              <img 
                src="/logo.webp" 
                alt="Vibebrew" 
                className="h-8 sm:h-10 w-auto object-contain glow-pulse"
                style={{ 
                  maxHeight: '40px', 
                  minWidth: '40px',
                  filter: 'drop-shadow(0 0 8px rgba(255, 20, 147, 0.4)) drop-shadow(0 0 12px rgba(138, 43, 226, 0.3))'
                }}
              />
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white/80 hover:text-white p-2"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/20 mx-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
