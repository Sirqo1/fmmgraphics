import Link from 'next/link';
import { CodeXml } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-6 px-4 md:px-8 border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <CodeXml className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
          <h1 className="text-2xl font-headline font-bold text-primary group-hover:text-accent transition-colors">
            My Portfolio
          </h1>
        </Link>
        {/* Navigation links can be added here if needed */}
        {/* <nav>
          <Link href="#projects" className="text-foreground hover:text-accent transition-colors px-3 py-2">Projects</Link>
          <Link href="#contact" className="text-foreground hover:text-accent transition-colors px-3 py-2">Contact</Link>
        </nav> */}
      </div>
    </header>
  );
}
