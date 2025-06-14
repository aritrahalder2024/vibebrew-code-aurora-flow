
export function getInitials(name: string) {
  if (!name) return "";
  const parts = name.split(" ");
  return parts.length === 1
    ? name.slice(0, 2).toUpperCase()
    : (parts[0][0] + (parts[1]?.[0] || '')).toUpperCase();
}

export function timeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((+now - +date) / 60000); // minutes
  if (diff < 1) return "just now";
  if (diff < 60) return `${diff}m ago`;
  if (diff < 60 * 24) return `${Math.floor(diff / 60)}h ago`;
  return `${Math.floor(diff / (60 * 24))}d ago`;
}
