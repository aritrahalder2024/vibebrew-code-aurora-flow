
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
    return (
      <div className="text-center text-white/80 py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-aurora-pink"></div>
        <div className="mt-2">Loading discussions...</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      {discussions.map((d) => (
        <DiscussionCard key={d.id} discussion={d} />
      ))}
      {error && (
        <div className="text-center text-yellow-300/80 text-sm mt-4 px-4 py-2 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
          Note: Showing community examples due to API limitations
        </div>
      )}
    </div>
  );
};
