
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

// Get GitHub token from localStorage (users can set this if they want higher rate limits)
const getGitHubToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('github_token') || '';
  }
  return '';
};

async function fetchDiscussions(): Promise<GitHubDiscussionNode[]> {
  const token = getGitHubToken();
  
  // If no token is available, skip the API call to avoid rate limiting errors
  if (!token) {
    console.log("No GitHub token found, using mock data. To get live data, add your GitHub token to localStorage with key 'github_token'");
    throw new Error("No GitHub token available");
  }
  
  console.log("Fetching GitHub discussions with token...");
  
  try {
    const res = await fetch(GITHUB_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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

    console.log("GitHub API response status:", res.status);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      console.log("GitHub API error:", data.message || `HTTP ${res.status}`);
      throw new Error(data.message || `HTTP ${res.status}`);
    }

    const data = await res.json();
    
    if (data.errors) {
      console.log("GraphQL errors:", data.errors);
      throw new Error(data.errors[0]?.message || "GraphQL error");
    }

    console.log("Successfully fetched GitHub discussions");
    return data?.data?.repository?.discussions?.nodes || [];
  } catch (error) {
    console.log("Error fetching GitHub discussions:", error);
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
  const token = getGitHubToken();
  
  const { data: discussions, isLoading, error } = useQuery({
    queryKey: ["github-discussions", REPO_OWNER, REPO_NAME],
    queryFn: fetchDiscussions,
    enabled: !!token, // Only run the query if we have a token
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: false, // Don't retry to avoid hitting rate limits repeatedly
    refetchOnWindowFocus: false, // Don't refetch on window focus to reduce API calls
  });

  // Always use mock discussions as fallback
  let displayDiscussions = mockDiscussions;
  
  if (!isLoading && !error && Array.isArray(discussions) && discussions.length > 0) {
    displayDiscussions = formatDiscussions(discussions);
    console.log("Using live GitHub discussions");
  } else {
    console.log("Using mock discussions");
  }
  
  return {
    discussions: displayDiscussions,
    isLoading: token ? isLoading : false, // Don't show loading if no token
    error: null, // Don't expose errors to UI, always fallback gracefully
  };
};
