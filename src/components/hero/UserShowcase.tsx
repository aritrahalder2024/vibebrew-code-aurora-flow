
import React, { useState, useMemo, useCallback } from "react";
import { UserAvatar } from "./UserAvatar";

export const UserShowcase = () => {
  const [activeAvatar, setActiveAvatar] = useState<number | null>(null);

  // Pool of available user data for randomization
  const userPool = [
    { name: "Alex Carter", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
    { name: "Priya Sharma", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face" },
    { name: "James Lee", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
    { name: "Maya Rodriguez", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" },
    { name: "Michael Smith", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
    { name: "Sarah Johnson", img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face" },
    { name: "David Kim", img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face" },
    { name: "Emma Wilson", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" },
    { name: "Ryan Chen", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face" },
    { name: "Lisa Park", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face" }
  ];

  // Generate random users on each render (changes with refresh)
  const users = useMemo(() => {
    const shuffled = [...userPool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  }, []);

  // Optimized avatar click handler with useCallback
  const handleAvatarClick = useCallback((index: number) => {
    setActiveAvatar(index);
    setTimeout(() => setActiveAvatar(null), 1000);
  }, []);

  return (
    <>
      {/* Interactive user avatars section */}
      <div className="mt-6 flex items-center justify-center gap-4 max-w-sm mx-auto relative z-10">
        <div className="flex -space-x-4">
          {users.map((user, idx) => (
            <UserAvatar 
              key={`${user.name}-${idx}`} 
              user={user} 
              index={idx} 
              handleClick={handleAvatarClick} 
            />
          ))}
        </div>
        
        <div>
          <div className="text-white font-bold text-lg leading-tight">1,200+ developers</div>
          <div className="text-white/60 text-sm leading-tight">already brewing</div>
        </div>
      </div>

      {/* Optimized animation overlay for clicked avatars */}
      {activeAvatar !== null && (
        <div 
          className="fixed inset-0 pointer-events-none z-30 flex items-center justify-center gpu-accelerated"
          style={{ perspective: '1000px' }}
        >
          <div 
            className="w-20 h-20 rounded-full bg-aurora-gradient animate-ping opacity-70 gpu-accelerated"
            style={{ 
              animation: 'avatar-pulse 1s cubic-bezier(0, 0, 0.2, 1) forwards',
              transformStyle: 'preserve-3d',
            }}
          />
        </div>
      )}
    </>
  );
};
