// Summarize Github Project Flow
'use server';
/**
 * @fileOverview A flow to summarize a GitHub project given its repository URL.
 *
 * - summarizeGitHubProject - A function that takes a GitHub repository URL and returns a summary of the project.
 * - SummarizeGitHubProjectInput - The input type for the summarizeGitHubProject function.
 * - SummarizeGitHubProjectOutput - The return type for the summarizeGitHubProject function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeGitHubProjectInputSchema = z.object({
  repoUrl: z.string().describe('The URL of the GitHub repository to summarize.'),
});
export type SummarizeGitHubProjectInput = z.infer<typeof SummarizeGitHubProjectInputSchema>;

const SummarizeGitHubProjectOutputSchema = z.object({
  summary: z.string().describe('A summary of the GitHub project, including its key technologies and goals.'),
});
export type SummarizeGitHubProjectOutput = z.infer<typeof SummarizeGitHubProjectOutputSchema>;

export async function summarizeGitHubProject(input: SummarizeGitHubProjectInput): Promise<SummarizeGitHubProjectOutput> {
  return summarizeGitHubProjectFlow(input);
}

const summarizeGitHubProjectPrompt = ai.definePrompt({
  name: 'summarizeGitHubProjectPrompt',
  input: {schema: SummarizeGitHubProjectInputSchema},
  output: {schema: SummarizeGitHubProjectOutputSchema},
  prompt: `You are an AI expert in summarizing software projects, particularly those hosted on GitHub.\n  Given the URL of a GitHub repository, you will provide a concise and informative summary of the project.\n  The summary should include the key technologies used, the main goals of the project, and any other relevant information that would be useful for someone browsing a portfolio.\n\n  Repository URL: {{{repoUrl}}}`,
});

const summarizeGitHubProjectFlow = ai.defineFlow(
  {
    name: 'summarizeGitHubProjectFlow',
    inputSchema: SummarizeGitHubProjectInputSchema,
    outputSchema: SummarizeGitHubProjectOutputSchema,
  },
  async input => {
    const {output} = await summarizeGitHubProjectPrompt(input);
    return output!;
  }
);
