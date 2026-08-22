import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroImage from "../assets/hero-editorial.jpg";
import toteImage from "../assets/portfolio-tote.jpg";
import blanketImage from "../assets/portfolio-blanket.jpg";
import wearablesImage from "../assets/portfolio-wearables.jpg";
import cardiganImage from "../assets/portfolio-cardigan.jpg";
import marketBagImage from "../assets/portfolio-market-bag.jpg";
import homeImage from "../assets/portfolio-home.jpg";
import aboutHandsImage from "../assets/about-hands.jpg";
import redBraletteAsset from "../assets/red-bralette.png.asset.json";
import sandSweaterAsset from "../assets/sand-crop-sweater.png.asset.json";
import grannySetAsset from "../assets/granny-square-set.png.asset.json";
import purpleShawlAsset from "../assets/purple-granny-shawl.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Twiggs Stitches — Handmade Crochet Portfolio" },
      { name: "description", content: "Discover cozy, handmade crochet pieces and patterns from a modern cottage studio." },
      { property: "og:title", content: "Twiggs Stitches — Handmade Crochet Portfolio" },
      { property: "og:description", content: "Discover cozy, handmade crochet pieces and patterns from a modern cottage studio." },
    ],
  }),
  component: HomePage,
});

const categories = [
  { label: "Blankets", count: "24 pieces", image: blanketImage },
  { label: "Wearables", count: "38 pieces", image: cardiganImage },
  { label: "Bags", count: "16 pieces", image: toteImage },
  { label: "Home", count: "22 pieces", image: homeImage },
  { label: "Accessories", count: "31 pieces", image: wearablesImage },
  { label: "Patterns", count: "45 pieces", image: marketBagImage },
];

const newArrivals = [
  { title: "Granny Square Tote", category: "Bags", price: "$88", image: toteImage, alt: "Crochet granny square tote bag in cream and terracotta yarn" },
  { title: "Oatmeal Chunky Cardigan", category: "Wearables", price: "$240", image: cardiganImage, alt: "Chunky oatmeal crochet cardigan on a vintage wooden chair" },
  { title: "Sage Baby Blanket", category: "Home", price: "$135", image: blanketImage, alt: "Sage green and cream handmade crochet baby blanket" },
  { title: "Chestnut Winter Set", category: "Accessories", price: "$96", image: wearablesImage, alt: "Chestnut brown crochet beanie and scarf set" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[62vh] overflow-hidden bg-warm-beige lg:min-h-[78vh]">
        <img
          src={heroImage}
          alt="Two people wearing handmade crochet knitwear in a sunlit beige studio"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-beige via-warm-beige/80 to-transparent" />

        <div className="relative mx-auto flex min-h-[62vh] max-w-[1600px] items-center px-4 py-20 sm:px-6 lg:min-h-[78vh] lg:px-10">
          <div className="max-w-xl">
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-warm-brown">Best collection</p>
            <h1 className="mt-6 font-heading text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Quiet warmth,
              <span className="block italic text-bronze">loudly handmade.</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-warm-brown">
              Explore handmade crochet blankets, wearables, and home pieces — crafted slowly in a quiet cottage studio.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center bg-ink px-10 py-4 font-mono text-[12px] uppercase tracking-[0.16em] text-background transition-opacity hover:opacity-85"
              >
                Shop the edit
              </Link>
              <Link
                to="/patterns"
                className="inline-flex items-center gap-2 text-sm text-ink underline-offset-4 hover:underline"
              >
                View patterns <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category circles */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 lg:px-10">
          <div className="grid grid-cols-3 gap-y-10 md:grid-cols-6 md:divide-x md:divide-border">
            {categories.map((cat) => (
              <Link
                key={cat.label}
                to="/portfolio"
                className="group flex flex-col items-center gap-4 px-2 text-center"
              >
                <div className="h-24 w-24 overflow-hidden rounded-full bg-warm-beige sm:h-28 sm:w-28">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    width={224}
                    height={224}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="text-base text-foreground">{cat.label}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                    {cat.count}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New arrivals */}
      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted-foreground">New arrivals</p>
            <h2 className="mt-3 font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
              Freshly off the hook
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="font-mono text-[12px] uppercase tracking-[0.16em] text-foreground underline underline-offset-8"
          >
            View all
          </Link>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((item) => (
            <article key={item.title} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-warm-beige">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={800}
                  height={1066}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {item.category}
                  </p>
                  <h3 className="mt-1 text-base text-foreground">{item.title}</h3>
                </div>
                <p className="font-mono text-sm text-foreground">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Editorial split */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-[1600px] items-stretch gap-0 lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden lg:aspect-auto">
            <img
              src={aboutHandsImage}
              alt="A maker's hands crocheting with cream yarn and a wooden hook"
              width={912}
              height={1104}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center px-4 py-16 sm:px-10 lg:px-20">
            <div className="max-w-md">
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted-foreground">The studio</p>
              <h2 className="mt-4 font-heading text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                Every piece carries the rhythm of hand and hook.
              </h2>
              <p className="mt-6 text-base text-muted-foreground">
                I design modern crochet patterns and finished pieces for people who value slowness, texture, and the
                small imperfections that make something feel alive.
              </p>
              <Link
                to="/about"
                className="mt-10 inline-flex items-center justify-center border border-ink px-10 py-4 font-mono text-[12px] uppercase tracking-[0.16em] text-ink transition-colors hover:bg-ink hover:text-background"
              >
                Read my story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
