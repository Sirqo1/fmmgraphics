import ProjectList from '@/components/projects/ProjectList';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

function ProjectListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[...Array(3)].map((_, i) => (
        <Card key={i} className="flex flex-col h-full">
          <Skeleton className="h-48 w-full rounded-t-lg" />
          <CardHeader className="pb-2">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </CardHeader>
          <CardContent className="flex-grow pt-2">
             <div className="flex items-center space-x-4 text-xs">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-between gap-2 pt-4 border-t">
            <Skeleton className="h-9 w-full sm:w-[150px]" />
            <Skeleton className="h-9 w-full sm:w-[130px]" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}


export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-4">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of the projects I&apos;ve been working on. Feel free to explore them on GitHub and generate an AI summary.
        </p>
        <Suspense fallback={<ProjectListSkeleton />}>
          <ProjectList />
        </Suspense>
      </div>
    </section>
  );
}
