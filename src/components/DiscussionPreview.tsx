import { MessageCircle, Heart, Share, ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import React from "react";

// Demo/mock discussions for fallback & showcase
const mockDiscussions = [
  {
    id: "1",
    author: {
      login: "CN",
      avatarUrl: "",
      initials: "CN",
      color: "bg-pink-500",
    },
    tag: { name: "Solo Success", color: "bg-pink-600" },
    timeAgo: "2h ago",
    title: "Just built my first SaaS with Claude AI in 48 hours! 🚀",
    description: "Used Claude to generate the entire backend API and React frontend. Revenue: $2.1k in first week...",
    comments: 47,
    upvotes: 156,
    url: "#",
  },
  {
    id: "2",
    author: {
      login: "AV",
      avatarUrl: "",
      initials: "AV",
      color: "bg-purple-600",
    },
    tag: { name: "AI Tools", color: "bg-aurora-purple" },
    timeAgo: "4h ago",
    title: "Anyone tried the new GPT-4o for code generation?",
    description: "The context window is insane! Built a full e-commerce store in one session...",
    comments: 23,
    upvotes: 89,
    url: "#",
  },
  {
    id: "3",
    author: {
      login: "SH",
      avatarUrl: "",
      initials: "SH",
      color: "bg-pink-700",
    },
    tag: { name: "Journey", color: "bg-aurora-pink" },
    timeAgo: "6h ago",
    title: "From idea to $10k MRR using only AI tools - My journey",
    description: "Started with ChatGPT for market research, used Claude for coding, Midjourney for design...",
    comments: 92,
    upvotes: 304,
    url: "#",
  },
];

const GITHUB_API_URL = "https://api.github.com/graphql";
const REPO_OWNER = "facebook";
const REPO_NAME = "react";
const GITHUB_TOKEN = "";

async function fetchDiscussions() {
  console.log("Fetching GitHub discussions...");
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
            discussions(first: 3, orderBy: {field: CREATED_AT, direction: DESC}) {
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
                category {
                  name
                }
                createdAt
                bodyText
              }
            }
          }
        }
      `
    }),
  });

  let data;
  try {
    data = await res.json();
    console.log("GitHub API response:", data);
  } catch (err) {
    console.log("Error parsing GitHub response:", err);
    throw new Error("Unable to parse GitHub response");
  }
  return data?.data?.repository?.discussions?.nodes || [];
}

function getInitials(name: string) {
  if (!name) return "";
  const parts = name.split(" ");
  return parts.length === 1
    ? name.slice(0, 2).toUpperCase()
    : (parts[0][0] + parts[1][0]).toUpperCase();
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

// Purple gradient for background
const purpleBg = "bg-gradient-to-br from-[#6317c1] via-[#7928ca] to-[#4f23b7]";

export const DiscussionPreview = () => {
  // Live demo: try fetching, fallback to mock on error/empty
  const { data: discussions, isLoading, error } = useQuery({
    queryKey: ["github-discussions", REPO_OWNER, REPO_NAME],
    queryFn: fetchDiscussions,
    staleTime: 1000 * 60 * 3, // 3 minutes
  });

  console.log("Query state:", { discussions, isLoading, error });

  let displayDiscussions = mockDiscussions;
  let useDemo = true;

  if (!isLoading && !error && Array.isArray(discussions) && discussions.length > 0) {
    // Format data for our card template, best-effort
    displayDiscussions = discussions.map((d, i) => ({
      id: d.id,
      author: {
        login: d.author?.login || "US",
        avatarUrl: d.author?.avatarUrl || "",
        initials: getInitials(d.author?.login || "US"),
        color: i === 0 ? "bg-pink-500" : i === 1 ? "bg-purple-600" : "bg-pink-700",
      },
      tag: {
        name: d.category?.name || "General",
        color: i === 0
          ? "bg-pink-600"
          : i === 1
            ? "bg-aurora-purple"
            : "bg-aurora-pink"
      },
      timeAgo: timeAgo(d.createdAt),
      title: d.title,
      description: d.bodyText
        ? (d.bodyText.length > 70 ? d.bodyText.substring(0, 67) + "..." : d.bodyText)
        : "",
      comments: d.comments?.totalCount ?? 0,
      upvotes: d.upvoteCount ?? 0,
      url: d.url,
    }));
    useDemo = false;
  }

  console.log("Display discussions:", displayDiscussions);

  return (
    <section className={`py-20 px-6 relative overflow-hidden ${purpleBg}`}>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold text-white mb-6">
            Live <span className="text-aurora-purple">Discussions</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-7">
          {isLoading ? (
            <div className="text-center text-white/80">Loading discussions...</div>
          ) : (
            displayDiscussions.map((d, idx) => (
              <a
                key={d.id}
                href={d.url || "#"}
                target={d.url ? "_blank" : undefined}
                rel={d.url ? "noopener noreferrer" : undefined}
                className="block rounded-2xl backdrop-blur-2xl border border-white/10 bg-white/10 hover:bg-white/20 transition-all shadow-lg px-6 py-5 cursor-pointer"
                style={{
                  boxShadow: "0 2px 32px 0 rgba(155,81,224,0.14)",
                  border: "1.5px solid rgba(220,220,255,0.08)",
                  animationDelay: `${idx * 0.15}s`
                }}
              >
                <div className="flex items-start">
                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-5 font-bold text-lg text-white ${d.author.color} flex-shrink-0`} style={{boxShadow: "0 2px 16px 2px rgba(140,0,255,0.15)"}}>
                    {d.author.avatarUrl
                      ? <img src={d.author.avatarUrl} alt={d.author.login} className="w-full h-full rounded-full object-cover" />
                      : <span>{d.author.initials}</span>
                    }
                  </div>
                  <div className="flex-1 min-w-0">
                    {/* Meta: tag and time */}
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`text-xs font-semibold rounded-full px-2.5 py-1 mr-2 text-white ${d.tag.color}`}>
                        {d.tag.name}
                      </span>
                      <span className="text-white/70 text-xs">{d.timeAgo}</span>
                    </div>
                    {/* Title */}
                    <div className="font-space-grotesk font-bold text-lg md:text-xl text-white mb-1 leading-tight">
                      {d.title}
                    </div>
                    {/* Description/subtitle, if available */}
                    {d.description && (
                      <div className="text-white/90 text-base md:text-md opacity-75 mb-2 line-clamp-1">
                        {d.description}
                      </div>
                    )}
                    {/* Row: Comments, Likes, Share */}
                    <div className="flex gap-8 mt-2 text-white/70 text-sm">
                      <span className="flex items-center gap-2 hover:text-pink-200 transition">
                        <MessageCircle size={18} /> {d.comments}
                      </span>
                      <span className="flex items-center gap-2 hover:text-pink-200 transition">
                        <Heart size={18} /> {d.upvotes}
                      </span>
                      <span className="flex items-center gap-2 hover:text-pink-200 cursor-pointer transition">
                        <Share size={18} /> Share
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))
          )}
          {error && (
            <div className="text-center text-red-300 font-medium mt-4">
              Couldn't load GitHub discussions.<br />
              <span className="text-white/80 text-xs">{error instanceof Error ? error.message : String(error)}</span>
            </div>
          )}
        </div>
        <div className="text-center mt-10">
          <a
            href={`https://github.com/${REPO_OWNER}/${REPO_NAME}/discussions`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-white font-semibold mt-4 glass-strong hover:bg-white/20 hover:scale-105 transition duration-200 shadow-glow-pink"
            style={{
              background: "rgba(145,65,255, 0.20)"
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
