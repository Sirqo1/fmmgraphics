"use client";

import type { GitHubRepo } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Star, GitFork, ExternalLink, Sparkles, Code2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import AISummaryModal from './AISummaryModal';
import { useState } from 'react';

interface ProjectCardProps {
  repo: GitHubRepo;
}

export default function ProjectCard({ repo }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const placeholderImageUrl = `https://placehold.co/600x400.png`;
  const aiHintKeywords = repo.language ? repo.language.toLowerCase() : "code project";


  return (
    <>
      <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out group hover:border-accent transform hover:-translate-y-1">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={placeholderImageUrl}
            alt={`${repo.name} project screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{objectFit: "cover"}}
            className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
            data-ai-hint={aiHintKeywords}
          />
           {repo.language && (
            <Badge variant="secondary" className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-xs">
              <Code2 className="w-3 h-3 mr-1" />
              {repo.language}
            </Badge>
          )}
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="font-headline text-xl hover:text-primary transition-colors">
            <Link href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center group/link">
              {repo.name} <ExternalLink className="w-4 h-4 ml-2 opacity-70 group-hover/link:opacity-100 group-hover/link:text-accent transition-opacity" />
            </Link>
          </CardTitle>
          <CardDescription className="h-16 overflow-hidden text-ellipsis line-clamp-3 pt-1 text-sm">
            {repo.description || 'No description available.'}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow pt-2">
          <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
            <div className="flex items-center">
              <Star className="w-3.5 h-3.5 mr-1 text-yellow-500" />
              <span>{repo.stargazers_count} Stars</span>
            </div>
            <div className="flex items-center">
              <GitFork className="w-3.5 h-3.5 mr-1 text-primary" />
              <span>{repo.forks_count} Forks</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between gap-2 pt-2 border-t mt-auto">
          <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
            <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Link>
          </Button>
          <Button size="sm" onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Summary
          </Button>
        </CardFooter>
      </Card>
      {isModalOpen && (
        <AISummaryModal
          repoUrl={repo.html_url}
          projectName={repo.name}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
