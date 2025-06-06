"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME || '#';

  // Basic form submission handler (client-side for now)
  // For a real app, this would be a server action or API endpoint
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Thank you for your message! This is a demo form.');
    // Consider using react-hook-form for production forms
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out. I&apos;m always open to discussing new opportunities and collaborations.
        </p>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
              <CardDescription>You can reach me through the following channels:</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-accent transition-colors break-all">
                    your.email@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Github className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <Link href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors break-all">
                    github.com/{githubUsername}
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Linkedin className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  {/* Replace with your actual LinkedIn profile URL */}
                  <Link href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors break-all">
                    linkedin.com/in/yourprofile
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">City, Country (Remote)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send Me a Message</CardTitle>
              <CardDescription>Fill out the form below and I&apos;ll get back to you.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                  <Input type="text" name="name" id="name" required className="focus:ring-accent focus:border-accent" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                  <Input type="email" name="email" id="email" required className="focus:ring-accent focus:border-accent" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject</label>
                  <Input type="text" name="subject" id="subject" className="focus:ring-accent focus:border-accent" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <Textarea name="message" id="message" rows={4} required className="focus:ring-accent focus:border-accent" />
                </div>
                <div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
