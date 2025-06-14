
import { ArrowRight } from "lucide-react";
import React from "react";
import { useDiscussions } from "@/hooks/useDiscussions";
import { DiscussionList } from "./DiscussionList";

const REPO_OWNER = "facebook";
const REPO_NAME = "react";

export const DiscussionPreview = () => {
  const { discussions, isLoading, error } = useDiscussions();

  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-2">
            Live <span className="text-aurora-purple">Discussions</span>
          </h2>
          <p className="text-white/70 text-lg font-medium mx-auto max-w-2xl">
            Share wins, ask for help, and level up together. It’s your forum.
          </p>
        </div>
        
        <DiscussionList discussions={discussions} isLoading={isLoading} error={error as Error | null} />
        
        <div className="text-center mt-12">
          <a
            href={`https://github.com/${REPO_OWNER}/${REPO_NAME}/discussions`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold mt-4
              shadow-glow-pink glass-strong text-aurora-purple bg-white/80
              hover:bg-white/100 hover:scale-105 hover:text-pink-600 transition duration-200
              dark:bg-white/10 dark:text-white
            "
            style={{
              backdropFilter: "blur(14px)",
              fontSize: "1.07rem"
            }}
          >
            Join the Discussion
            <ArrowRight size={18} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
