import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, Send } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hello, I&apos;m <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            A Passionate <span className="font-semibold text-foreground">Software Developer</span>
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I specialize in building modern web applications with a focus on user experience and performance. Explore my projects and see how I can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="#contact" passHref>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="mr-2 h-5 w-5" /> Contact Me
              </Button>
            </Link>
            {/* Replace with a link to your actual CV */}
            <Link href="/your-cv.pdf" target="_blank" passHref>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Download className="mr-2 h-5 w-5" /> Download CV
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Your Name - Profile Picture"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
              data-ai-hint="profile avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
