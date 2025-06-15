
import React, { useCallback } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface UserAvatarProps {
  user: {
    name: string;
    img: string | null;
  };
  index: number;
  handleClick: (index: number) => void;
}

export const UserAvatar = React.memo(({ user, index, handleClick }: UserAvatarProps) => {
  const handleAvatarClick = useCallback(() => {
    handleClick(index);
  }, [handleClick, index]);

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            onClick={handleAvatarClick}
            className="w-10 h-10 rounded-full border-2 border-gray-500 flex items-center justify-center text-white font-bold text-lg shadow bg-gray-700 group smooth-transform hover:scale-110 hover:z-20 hover:ring-2 hover:ring-pink-400 cursor-pointer gpu-accelerated"
            style={{ zIndex: 10 - index }}
          >
            {user.img ? (
              <img
                src={user.img}
                alt={user.name}
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
                width={40}
                height={40}
              />
            ) : (
              user.name.charAt(0)
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" className="bg-gray-800 text-white border-gray-700">
          {user.name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

UserAvatar.displayName = 'UserAvatar';
