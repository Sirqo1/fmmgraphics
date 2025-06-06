import { fetchGitHubRepos } from '@/lib/github';
import ProjectCard from './ProjectCard';
import type { GitHubRepo } from '@/types';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, GithubIcon } from 'lucide-react';

export default async function ProjectList() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  if (!username) {
    return (
      <Alert variant="destructive" className="max-w-2xl mx-auto my-8">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Configuration Error</AlertTitle>
        <AlertDescription>
          GitHub username is not configured. Please set the NEXT_PUBLIC_GITHUB_USERNAME environment variable.
        </AlertDescription>
      </Alert>
    );
  }

  let repos: GitHubRepo[] = [];
  try {
    repos = await fetchGitHubRepos(username, 6); // Fetch latest 6 projects
  } catch (error) {
     // Error is already logged in fetchGitHubRepos, just ensure repos remains empty or handle UI
     console.error("ProjectList: Error fetching repos", error);
  }


  if (repos.length === 0) {
    return (
      <Alert className="max-w-2xl mx-auto my-8">
        <GithubIcon className="h-4 w-4" />
        <AlertTitle>No Projects Found</AlertTitle>
        <AlertDescription>
          Could not find any public repositories for user &quot;{username}&quot; or an error occurred while fetching. Please check your GitHub username configuration and network connection.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {repos.map((repo) => (
        <ProjectCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
