import { MessageCircle, Heart, Share } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import React from "react";

// Fetch discussions from a sample public repo (facebook/react)
const GITHUB_API_URL = "https://api.github.com/graphql";
const REPO_OWNER = "facebook";
const REPO_NAME = "react";
// Put your GitHub token here for higher rate limits (recommended), or leave blank for demo/public
const GITHUB_TOKEN = ""; 

async function fetchDiscussions() {
  const res = await fetch(GITHUB_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
    },
    body: JSON.stringify({
      query: `
        query {
          repository(owner: "${REPO_OWNER}", name: "${REPO_NAME}") {
            discussions(first: 5, orderBy: {field: CREATED_AT, direction: DESC}) {
              nodes {
                id
                title
                url
                upvoteCount
                comments {
                  totalCount
                }
                author {
                  login
                  avatarUrl
                  url
                }
                createdAt
              }
            }
          }
        }
      `
    }),
  });

  if (!res.ok) {
    throw new Error("GitHub API error: " + res.statusText);
  }
  const data = await res.json();
  return data?.data?.repository?.discussions?.nodes || [];
}

function timeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((+now - +date) / 60000); // minutes

  if (diff < 1) return "just now";
  if (diff < 60) return `${diff}m ago`;
  if (diff < 60 * 24) return `${Math.floor(diff / 60)}h ago`;
  return `${Math.floor(diff / (60 * 24))}d ago`;
}

export const DiscussionPreview = () => {
  const { data: discussions, isLoading, error } = useQuery({
    queryKey: ["github-discussions", REPO_OWNER, REPO_NAME],
    queryFn: fetchDiscussions,
    staleTime: 1000 * 60 * 3, // 3 minutes
  });

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 text-white font-jetbrains-mono text-xs floating"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${6 + i}s`
            }}
          >
            {['</>', '{}', '()', 'AI', 'fn', '=>', 'const', 'async'][i]}
          </div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold text-white mb-6">
            Live <span className="text-aurora-purple">Discussions</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {isLoading && (
            <div className="text-center text-white/80">Loading discussions...</div>
          )}
          {error && (
            <div className="text-center text-red-500">
              Couldn't load GitHub discussions. Try again later.
            </div>
          )}
          {!isLoading && !error && (
            <>
              {Array.isArray(discussions) && discussions.length > 0 ? (
                discussions.map((d, index) => (
                  <a
                    key={d.id}
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass-strong rounded-glass p-6 hover:scale-[1.02] transition-all duration-300 group hover:shadow-glow border border-white/10 cursor-pointer"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-aurora-gradient rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 group-hover:scale-110 transition-transform overflow-hidden">
                        <img src={d.author?.avatarUrl} alt={d.author?.login} className="w-full h-full object-cover rounded-full" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="px-3 py-1 bg-aurora-gradient rounded-full text-xs font-medium text-white">
                            {d.author?.login}
                          </span>
                          <span className="text-white/60 text-sm">{timeAgo(d.createdAt)}</span>
                        </div>
                        <h3 className="text-xl font-space-grotesk font-bold text-white mb-2 group-hover:text-aurora-pink transition-colors line-clamp-2">
                          {d.title}
                        </h3>
                        <div className="flex items-center space-x-6 text-white/60 mt-2">
                          <div className="flex items-center space-x-2 hover:text-aurora-pink transition-colors">
                            <MessageCircle size={16} />
                            <span className="text-sm">{d.comments?.totalCount ?? 0}</span>
                          </div>
                          <div className="flex items-center space-x-2 hover:text-aurora-pink transition-colors">
                            <Heart size={16} />
                            <span className="text-sm">{d.upvoteCount ?? 0}</span>
                          </div>
                          <div className="flex items-center space-x-2 hover:text-aurora-pink transition-colors">
                            <Share size={16} />
                            <span className="text-sm">Share</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))
              ) : (
                <div className="text-center text-white/70">
                  No discussions found for <span className="font-mono">{REPO_OWNER}/{REPO_NAME}</span>.
                </div>
              )}
            </>
          )}
        </div>

        <div className="text-center mt-12">
          <a
            href={`https://github.com/${REPO_OWNER}/${REPO_NAME}/discussions`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-strong px-8 py-4 rounded-full text-white font-medium hover:scale-105 transition-all duration-300 hover:shadow-glow"
          >
            Join the Discussion →
          </a>
        </div>
      </div>
    </section>
  );
};
