"use client";

import { useState, type FormEvent, useEffect } from 'react';
import { handleSummarizeProject } from '@/actions/summarize-project-action';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Loader2, Sparkles, AlertTriangle } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';

interface AISummaryModalProps {
  repoUrl: string;
  projectName: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function AISummaryModal({ repoUrl, projectName, isOpen, onClose }: AISummaryModalProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (event?: FormEvent) => {
    event?.preventDefault();
    setIsLoading(true);
    setError(null);
    setSummary(null);

    const result = await handleSummarizeProject(repoUrl);

    if ('error' in result) {
      setError(result.error);
      toast({
        title: "Error",
        description: result.error,
        variant: "destructive",
      });
    } else {
      setSummary(result.summary);
      toast({
        title: "Summary Generated",
        description: `AI summary for ${projectName} is ready.`,
      });
    }
    setIsLoading(false);
  };
  
  useEffect(() => {
    if (!isOpen) {
      // Reset state when modal is closed
      setSummary(null);
      setIsLoading(false);
      setError(null);
    }
  }, [isOpen]);


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="font-headline flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-accent" />
            AI Project Summary: {projectName}
          </DialogTitle>
          <DialogDescription>
            Generate an AI-powered summary for the project: <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{repoUrl}</a>
          </DialogDescription>
        </DialogHeader>
        
        {!summary && !isLoading && !error && (
           <div className="py-8 text-center">
            <p className="mb-4 text-muted-foreground">Click the button below to generate an AI summary for this project.</p>
             <Button onClick={() => handleSubmit()} disabled={isLoading} className="w-full sm:w-auto">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-4 w-4" />
              )}
              Generate Summary
            </Button>
           </div>
        )}

        {isLoading && (
          <div className="flex flex-col items-center justify-center py-8">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">Generating summary, please wait...</p>
          </div>
        )}

        {error && !isLoading && (
          <div className="py-8 text-destructive bg-destructive/10 p-4 rounded-md">
            <div className="flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 mr-2" />
              <h3 className="font-semibold">Error Generating Summary</h3>
            </div>
            <p>{error}</p>
            <Button onClick={() => handleSubmit()} variant="outline" className="mt-4">
              Try Again
            </Button>
          </div>
        )}

        {summary && !isLoading && !error && (
          <ScrollArea className="max-h-[400px] my-4 p-4 border rounded-md bg-secondary/30">
            <h4 className="font-semibold mb-2 text-foreground">Generated Summary:</h4>
            <p className="text-sm whitespace-pre-line leading-relaxed">{summary}</p>
          </ScrollArea>
        )}

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
