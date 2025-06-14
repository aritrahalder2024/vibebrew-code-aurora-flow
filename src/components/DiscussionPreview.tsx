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

// Style variables for backgrounds
const purpleBg = "bg-gradient-to-br from-[#6317c1] via-[#7928ca] to-[#4f23b7]";
// const cardBg = "bg-white/90";  // We'll apply this inline for better clarity.

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
        color:
          i === 0
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
    <section className={`py-20 px-4 sm:px-6 relative overflow-hidden ${purpleBg}`}>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-white mb-2">
            Live <span className="text-aurora-purple">Discussions</span>
          </h2>
          <p className="text-white/70 text-lg font-medium mx-auto max-w-2xl">
            Share wins, ask for help, and level up together. It’s your forum.
          </p>
        </div>
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          {isLoading ? (
            <div className="text-center text-white/80">Loading discussions...</div>
          ) : (
            displayDiscussions.map((d, idx) => (
              <a
                key={d.id}
                href={d.url || "#"}
                target={d.url ? "_blank" : undefined}
                rel={d.url ? "noopener noreferrer" : undefined}
                className={`
                  group block focus-visible:ring-2 focus-visible:ring-aurora-pink focus:outline-none
                  rounded-xl bg-white/90 shadow-xl border border-white/60
                  hover:shadow-glow-pink transition-all px-5 py-4
                  dark:bg-white/10 dark:border-white/20
                  ring-1 ring-inset ring-aurora-purple/10
                `}
                style={{ backdropFilter: 'blur(6px)' }}
                tabIndex={0}
                aria-label={d.title}
              >
                <div className="flex items-start">
                  {/* Avatar */}
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center mr-4 font-bold text-md text-white ${d.author.color}`}>
                    {d.author.avatarUrl
                      ? <img src={d.author.avatarUrl} alt={d.author.login} className="w-full h-full rounded-full object-cover" />
                      : <span>{d.author.initials}</span>
                    }
                  </div>
                  <div className="flex-1 min-w-0">
                    {/* Meta: tag and time */}
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`text-xs font-medium rounded px-2 py-1 ${d.tag.color} text-white/90`} style={{boxShadow: "0 1px 8px 0 rgba(200,0,120,0.09)"}}>
                        {d.tag.name}
                      </span>
                      <span className="text-zinc-400 text-xs">{d.timeAgo}</span>
                    </div>
                    {/* Title */}
                    <div className="font-space-grotesk font-semibold text-lg text-gray-900 dark:text-white mb-1 leading-tight group-hover:text-aurora-purple transition-colors">
                      {d.title}
                    </div>
                    {/* Description/subtitle */}
                    {d.description && (
                      <div className="text-zinc-600 text-sm dark:text-white/70 mb-2 line-clamp-2">
                        {d.description}
                      </div>
                    )}
                    {/* Row: Comments, Likes, Share */}
                    <div className="flex gap-7 mt-2 text-zinc-500 dark:text-zinc-300/90 text-sm">
                      <span className="flex items-center gap-1.5 hover:text-aurora-pink transition">
                        <MessageCircle size={17} /> {d.comments}
                      </span>
                      <span className="flex items-center gap-1.5 hover:text-aurora-pink transition">
                        <Heart size={17} /> {d.upvotes}
                      </span>
                      <span className="flex items-center gap-1.5 hover:text-aurora-pink cursor-pointer group-hover:underline transition">
                        <Share size={17} /> Share
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
