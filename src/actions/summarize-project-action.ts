// src/actions/summarize-project-action.ts
"use server";

import { summarizeGitHubProject, type SummarizeGitHubProjectInput, type SummarizeGitHubProjectOutput } from '@/ai/flows/summarize-github-project';

export async function handleSummarizeProject(repoUrl: string): Promise<SummarizeGitHubProjectOutput | { error: string }> {
  if (!repoUrl) {
    return { error: "Repository URL is required." };
  }

  try {
    const input: SummarizeGitHubProjectInput = { repoUrl };
    const summaryOutput = await summarizeGitHubProject(input);
    return summaryOutput;
  } catch (error) {
    console.error("Error summarizing project:", error);
    // Check if error is an instance of Error and has a message property
    if (error instanceof Error) {
      return { error: `Failed to summarize project: ${error.message}` };
    }
    return { error: "An unknown error occurred while summarizing the project." };
  }
}
