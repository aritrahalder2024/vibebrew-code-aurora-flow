
// For our formatted discussion data
export interface FormattedDiscussion {
  id: string;
  author: {
    login: string;
    avatarUrl: string;
    initials: string;
    color: string;
  };
  tag: {
    name: string;
    color: string;
  };
  timeAgo: string;
  title: string;
  description: string;
  comments: number;
  upvotes: number;
  url: string;
}

// For raw data from GitHub API
export interface GitHubDiscussionNode {
  id: string;
  title: string;
  url: string;
  upvoteCount: number;
  comments: {
    totalCount: number;
  };
  author: {
    login: string;
    avatarUrl: string;
    url: string;
  };
  category: {
    name: string;
  };
  createdAt: string;
  bodyText: string;
}
