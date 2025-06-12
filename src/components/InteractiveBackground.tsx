
import { useEffect, useRef } from 'react';

export const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const circles = container.querySelectorAll('.interactive-circle');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      circles.forEach((circle, index) => {
        const element = circle as HTMLElement;
        const speed = (index + 1) * 0.02;
        const xOffset = (x - 0.5) * 50 * speed;
        const yOffset = (y - 0.5) * 50 * speed;
        
        element.style.transform = `translate(${xOffset}px, ${yOffset}px) scale(${1 + speed * 0.1})`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {/* Large Interactive Circles */}
      <div className="interactive-circle absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-aurora-pink/20 to-aurora-purple/20 rounded-full blur-3xl animate-pulse transition-transform duration-300 ease-out"></div>
      <div className="interactive-circle absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-aurora-violet/15 to-aurora-pink/15 rounded-full blur-2xl animate-pulse animation-delay-300 transition-transform duration-300 ease-out"></div>
      <div className="interactive-circle absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-aurora-purple/10 to-aurora-violet/10 rounded-full blur-xl animate-pulse animation-delay-600 transition-transform duration-300 ease-out"></div>
      
      {/* Medium Floating Circles */}
      <div className="interactive-circle absolute top-1/4 right-1/4 w-48 h-48 bg-aurora-pink/5 rounded-full blur-lg floating animation-delay-900 transition-transform duration-500 ease-out"></div>
      <div className="interactive-circle absolute bottom-1/3 left-1/5 w-40 h-40 bg-aurora-violet/8 rounded-full blur-md floating animation-delay-1200 transition-transform duration-500 ease-out"></div>
      
      {/* Small Interactive Orbs */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="interactive-circle absolute w-6 h-6 bg-aurora-gradient rounded-full opacity-30 animate-pulse transition-transform duration-700 ease-out"
          style={{
            left: `${15 + i * 7}%`,
            top: `${20 + (i % 4) * 20}%`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: `${2 + i * 0.3}s`
          }}
        ></div>
      ))}
      
      {/* Orbiting Elements */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2">
        <div className="interactive-circle absolute w-8 h-8 bg-aurora-pink/40 rounded-full animate-spin transition-transform duration-300 ease-out" style={{ animationDuration: '20s', transformOrigin: '300px 0px' }}></div>
        <div className="interactive-circle absolute w-6 h-6 bg-aurora-purple/40 rounded-full animate-spin animation-delay-300 transition-transform duration-300 ease-out" style={{ animationDuration: '15s', transformOrigin: '200px 0px' }}></div>
        <div className="interactive-circle absolute w-4 h-4 bg-aurora-violet/40 rounded-full animate-spin animation-delay-600 transition-transform duration-300 ease-out" style={{ animationDuration: '10s', transformOrigin: '150px 0px' }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {[...Array(96)].map((_, i) => (
            <div key={i} className="border border-white/10"></div>
          ))}
        </div>
      </div>
    </div>
  );
};
