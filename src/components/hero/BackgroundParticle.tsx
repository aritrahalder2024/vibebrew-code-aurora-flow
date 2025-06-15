
import React from "react";

interface BackgroundParticleProps {
  particle: {
    width: number;
    height: number;
    left: number;
    top: number;
    animationDuration: number;
    animationDelay: number;
  };
}

export const BackgroundParticle = React.memo(({ particle }: BackgroundParticleProps) => (
  <div 
    className="absolute rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-10 gpu-accelerated"
    style={{
      width: `${particle.width}px`,
      height: `${particle.height}px`,
      left: `${particle.left}%`,
      top: `${particle.top}%`,
      transform: 'translate(-50%, -50%) translateZ(0)',
      filter: 'blur(50px)',
      animation: `float-particle ${particle.animationDuration}s ease-in-out infinite alternate`,
      animationDelay: `${particle.animationDelay}s`,
      willChange: 'transform',
    }}
  />
));

BackgroundParticle.displayName = 'BackgroundParticle';
