import type { GitHubRepo } from '@/types';

export async function fetchGitHubRepos(username: string, count: number = 6): Promise<GitHubRepo[]> {
  if (!username) {
    console.warn("GitHub username is not provided.");
    return [];
  }
  
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=${count}`, {
      // Optionally add headers for authentication if GITHUB_TOKEN is available
      // headers: process.env.GITHUB_TOKEN ? { 'Authorization': `token ${process.env.GITHUB_TOKEN}` } : {}
    });
    if (!response.ok) {
      console.error(`GitHub API error: ${response.status} ${response.statusText}`);
      const errorBody = await response.json();
      console.error("Error details:", errorBody);
      return [];
    }
    const data = await response.json();
    return data as GitHubRepo[];
  } catch (error) {
    console.error("Failed to fetch GitHub repositories:", error);
    return [];
  }
}
