import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Twiggs Stitches" },
      { name: "description", content: "Get in touch with Twiggs Stitches for custom orders, pattern questions, or collaboration ideas." },
      { property: "og:title", content: "Contact — Twiggs Stitches" },
      { property: "og:description", content: "Get in touch with Twiggs Stitches for custom orders, pattern questions, or collaboration ideas." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Get in touch</p>
          <h1 className="mt-2 font-heading text-4xl text-foreground sm:text-5xl">Say hello</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you&apos;re interested in a custom piece, have a question about a pattern, or just want to share your latest make, I&apos;d love to hear from you.
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <p className="text-sm font-medium text-foreground">Email</p>
              <a
                href="mailto:hello@twiggsstitches.example"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                hello@twiggsstitches.example
              </a>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Studio hours</p>
              <p className="text-muted-foreground">Tuesday — Saturday, 9am to 5pm GMT</p>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Response time</p>
              <p className="text-muted-foreground">Usually within 2 business days</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          {submitted ? (
            <div className="py-12 text-center">
              <h2 className="font-heading text-2xl text-card-foreground">Message sent</h2>
              <p className="mt-2 text-muted-foreground">
                Thank you for reaching out. I&apos;ll get back to you as soon as I can.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="Custom order, pattern question, etc." required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me a little about what you're looking for..."
                  rows={6}
                  required
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                Send message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
