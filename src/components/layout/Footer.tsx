import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME || '#';

  return (
    <footer className="py-8 px-4 md:px-8 border-t border-border mt-auto">
      <div className="container mx-auto text-center text-muted-foreground">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-accent transition-colors">
            <Github className="w-6 h-6" />
          </Link>
          {/* Replace with your actual LinkedIn profile URL */}
          <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-accent transition-colors">
            <Linkedin className="w-6 h-6" />
          </Link>
           {/* Replace with your actual email */}
          <Link href="mailto:your.email@example.com" aria-label="Email Me" className="hover:text-accent transition-colors">
            <Mail className="w-6 h-6" />
          </Link>
        </div>
        <p className="text-sm">&copy; {currentYear} Your Name. All rights reserved.</p>
        <p className="text-xs mt-2">
          Built with <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-accent underline">Next.js</Link> and Tailwind CSS. Hosted on Firebase.
        </p>
      </div>
    </footer>
  );
}
