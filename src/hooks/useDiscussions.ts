
import { useQuery } from "@tanstack/react-query";
import { getInitials, timeAgo } from "@/lib/helpers";
import { FormattedDiscussion, GitHubDiscussionNode } from "@/types/discussion";

// Demo/mock discussions for fallback & showcase
const mockDiscussions: FormattedDiscussion[] = [
  {
    id: "1",
    author: {
      login: "CN",
      avatarUrl: "https://i.pravatar.cc/44?u=1",
      initials: "CN",
      color: "bg-pink-500",
    },
    tag: { name: "Solo Success", color: "bg-aurora-pink" },
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
      avatarUrl: "https://i.pravatar.cc/44?u=2",
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
      avatarUrl: "https://i.pravatar.cc/44?u=3",
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
const GITHUB_TOKEN = ""; // Keep this empty, as it was in the original file

async function fetchDiscussions(): Promise<GitHubDiscussionNode[]> {
  console.log("Fetching GitHub discussions...");
  
  try {
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

    const data = await res.json();
    console.log("GitHub API response:", data);

    // Handle rate limiting or other API errors
    if (!res.ok || data.errors || data.message) {
      console.log("GitHub API error, falling back to mock data");
      throw new Error(data.message || "GitHub API error");
    }

    return data?.data?.repository?.discussions?.nodes || [];
  } catch (error) {
    console.log("Error fetching GitHub discussions:", error);
    // Return empty array to trigger fallback to mock data
    throw error;
  }
}

const formatDiscussions = (discussions: GitHubDiscussionNode[]): FormattedDiscussion[] => {
  return discussions.map((d, i) => ({
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
          ? "bg-aurora-pink"
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
};

export const useDiscussions = () => {
  const { data: discussions, isLoading, error } = useQuery({
    queryKey: ["github-discussions", REPO_OWNER, REPO_NAME],
    queryFn: fetchDiscussions,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1, // Only retry once to avoid hitting rate limits repeatedly
    retryDelay: 2000, // Wait 2 seconds before retry
  });

  // Always use mock discussions as fallback when there's an error or no data
  let displayDiscussions = mockDiscussions;
  let showError = false;
  
  if (!isLoading && !error && Array.isArray(discussions) && discussions.length > 0) {
    displayDiscussions = formatDiscussions(discussions);
  } else if (error) {
    // Only show error for non-rate-limit errors
    const errorMessage = error instanceof Error ? error.message : String(error);
    showError = !errorMessage.includes("rate limit");
  }
  
  return {
    discussions: displayDiscussions,
    isLoading,
    error: showError ? error : null, // Hide rate limit errors
  };
};
