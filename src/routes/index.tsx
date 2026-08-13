import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroImage from "../assets/hero-crochet.jpg";
import toteImage from "../assets/portfolio-tote.jpg";
import blanketImage from "../assets/portfolio-blanket.jpg";
import wearablesImage from "../assets/portfolio-wearables.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cozy Stitches — Handmade Crochet Portfolio" },
      { name: "description", content: "Discover cozy, handmade crochet pieces and patterns from a modern cottage studio." },
      { property: "og:title", content: "Cozy Stitches — Handmade Crochet Portfolio" },
      { property: "og:description", content: "Discover cozy, handmade crochet pieces and patterns from a modern cottage studio." },
    ],
  }),
  component: HomePage,
});

const featuredWorks = [
  {
    title: "Granny Square Tote",
    category: "Bags",
    image: toteImage,
    alt: "Crochet granny square tote bag in cream and terracotta yarn",
  },
  {
    title: "Sage Baby Blanket",
    category: "Home",
    image: blanketImage,
    alt: "Sage green and cream handmade crochet baby blanket",
  },
  {
    title: "Chestnut Winter Set",
    category: "Wearables",
    image: wearablesImage,
    alt: "Chestnut brown crochet beanie and scarf set",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Handmade in small batches
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Crochet made slowly, warmly, and with intention.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              A cozy collection of blankets, wearables, and home pieces — each stitch shaped by hand in a quiet cottage studio.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View portfolio
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/patterns"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Browse patterns
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-2xl bg-warm-beige shadow-xl">
              <img
                src={heroImage}
                alt="Cozy arrangement of handmade crochet blankets, pillows, and hooks"
                width={1408}
                height={912}
                className="h-auto w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">Featured pieces</p>
              <h2 className="mt-2 font-heading text-3xl text-foreground sm:text-4xl">Recent favorites</h2>
            </div>
            <Link
              to="/portfolio"
              className="hidden text-sm font-medium text-primary transition-colors hover:text-primary/80 sm:inline-flex sm:items-center sm:gap-1"
            >
              See all work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWorks.map((work) => (
              <article
                key={work.title}
                className="group overflow-hidden rounded-xl bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.alt}
                    width={800}
                    height={1008}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">{work.category}</p>
                  <h3 className="mt-1 font-heading text-xl text-card-foreground">{work.title}</h3>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary"
            >
              See all work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Studio statement */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl text-foreground sm:text-4xl">
            Every piece carries the rhythm of hand and hook.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            I design modern crochet patterns and finished pieces for people who value slowness, texture, and the small imperfections that make something feel alive.
          </p>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Read my story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
