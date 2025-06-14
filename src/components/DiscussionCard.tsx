
import React from 'react';
import { MessageCircle, Heart, Share } from 'lucide-react';
import { FormattedDiscussion } from '@/types/discussion';

interface DiscussionCardProps {
  discussion: FormattedDiscussion;
}

export const DiscussionCard: React.FC<DiscussionCardProps> = ({ discussion: d }) => {
  return (
    <div
      className={`
        group block focus-visible:ring-2 focus-visible:ring-aurora-pink focus:outline-none
        rounded-2xl bg-white/5 border border-white/10
        hover:bg-white/10 hover:border-white/20 hover:shadow-glow
        transition-all duration-300 px-6 py-5
      `}
      style={{ backdropFilter: 'blur(12px)' }}
      tabIndex={0}
      aria-label={d.title}
    >
      <div className="flex items-start">
        {/* Avatar */}
        <div className={`w-11 h-11 rounded-full flex items-center justify-center mr-4 font-bold text-md text-white shrink-0 ${d.author.color}`}>
          {d.author.avatarUrl
            ? <img src={d.author.avatarUrl} alt={d.author.login} className="w-full h-full rounded-full object-cover" />
            : <span>{d.author.initials}</span>
          }
        </div>
        <div className="flex-1 min-w-0">
          {/* Meta: tag and time */}
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-xs font-medium rounded-md px-2 py-1 ${d.tag.color} text-white/90`} style={{boxShadow: "0 1px 8px 0 rgba(200,0,120,0.09)"}}>
              {d.tag.name}
            </span>
            <span className="text-white/60 text-xs">{d.timeAgo}</span>
          </div>
          {/* Title */}
          <div className="font-space-grotesk font-semibold text-lg text-white mb-1 leading-tight group-hover:text-aurora-purple transition-colors">
            {d.title}
          </div>
          {/* Description/subtitle */}
          {d.description && (
            <div className="text-white/70 text-sm mb-3 line-clamp-2">
              {d.description}
            </div>
          )}
          {/* Row: Comments, Likes, Share */}
          <div className="flex gap-7 mt-2 text-white/60 text-sm select-none">
            <span className="flex items-center gap-1.5 cursor-default">
              <MessageCircle size={17} /> {d.comments}
            </span>
            <span className="flex items-center gap-1.5 cursor-default">
              <Heart size={17} /> {d.upvotes}
            </span>
            <span className="flex items-center gap-1.5 cursor-default">
              <Share size={17} /> Share
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
