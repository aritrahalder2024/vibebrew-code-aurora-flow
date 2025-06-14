
import React from 'react';
import { DiscussionCard } from './DiscussionCard';
import { FormattedDiscussion } from '@/types/discussion';

interface DiscussionListProps {
  discussions: FormattedDiscussion[];
  isLoading: boolean;
  error: Error | null;
}

export const DiscussionList: React.FC<DiscussionListProps> = ({ discussions, isLoading, error }) => {
  if (isLoading) {
    return <div className="text-center text-white/80">Loading discussions...</div>;
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {discussions.map((d) => (
          <DiscussionCard key={d.id} discussion={d} />
        ))}
        <div className="text-center text-red-300 font-medium mt-4">
          Couldn't load GitHub discussions.<br />
          <span className="text-white/80 text-xs">{error instanceof Error ? error.message : String(error)}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      {discussions.map((d) => (
        <DiscussionCard key={d.id} discussion={d} />
      ))}
    </div>
  );
};
