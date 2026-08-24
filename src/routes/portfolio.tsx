import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import chocomochaWornAsset from "../assets/chocomocha-worn.jpg.asset.json";


import redBraletteAsset from "../assets/red-bralette.png.asset.json";
import sandSweaterAsset from "../assets/sand-crop-sweater.png.asset.json";
import grannySetAsset from "../assets/granny-square-set.png.asset.json";
import purpleShawlAsset from "../assets/purple-granny-shawl.png.asset.json";
import cocoaBikiniAsset from "../assets/cocoa-bikini-set.png.asset.json";
import redBlanketAsset from "../assets/red-scallop-blanket.png.asset.json";
import redShortsAsset from "../assets/red-shorts-set.jpg.asset.json";
import cocoaBraletteAsset from "../assets/cocoa-scallop-bralette.jpg.asset.json";
import crimsonHalterAsset from "../assets/crimson-halter-top.png.asset.json";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Twiggs Stitches" },
      { name: "description", content: "Browse handmade crochet blankets, bags, wearables, and home goods from Twiggs Stitches." },
      { property: "og:title", content: "Portfolio — Twiggs Stitches" },
      { property: "og:description", content: "Browse handmade crochet blankets, bags, wearables, and home goods from Twiggs Stitches." },
    ],
  }),
  component: PortfolioPage,
});

const portfolioItems = [
  {
    title: "Scarlet Ruffle Bralette",
    category: "Wearables",
    image: redBraletteAsset.url,
    alt: "Deep red crochet ruffle bralette top with scalloped edges on linen",
  },
  {
    title: "Sand Lace Crop Sweater",
    category: "Wearables",
    image: sandSweaterAsset.url,
    alt: "Sand-coloured open lace crochet crop sweater styled with trailing greenery",
  },
  {
    title: "Chocomocha",
    category: "Wearables",
    image: grannySetAsset.url,
    alt: "Earth-toned granny square crochet top and skirt set with a cream handbag",
    slides: [
      { src: grannySetAsset.url, alt: "Earth-toned granny square crochet top and skirt set with a cream handbag" },
      { src: chocomochaWornAsset.url, alt: "Woman wearing the Chocomocha granny square crochet sweater with cream wide-leg trousers" },
    ],
  },
  {
    title: "Violet Granny Shawl",
    category: "Wearables",
    image: purpleShawlAsset.url,
    alt: "Purple and pink granny square crochet shawl with fringed edges",
  },
  {
    title: "Cocoa Scallop Bikini Set",
    category: "Wearables",
    image: cocoaBikiniAsset.url,
    alt: "Cocoa brown crochet scalloped bikini set beside a cream mesh cover-up",
  },
  {
    title: "Cocoa Scallop Bralette",
    category: "Wearables",
    image: cocoaBraletteAsset.url,
    alt: "Brown crochet scalloped bralette flat-lay with gold hoops and a butterfly clip",
  },
  {
    title: "Crimson Halter Top",
    category: "Wearables",
    image: crimsonHalterAsset.url,
    alt: "Deep red crochet halter top with picot trim in warm sunlight",
  },
  {
    title: "Ruby Shorts Set",
    category: "Wearables",
    image: redShortsAsset.url,
    alt: "Red crochet shorts and top set with tassel ties and a crochet hook",
  },
  {
    title: "Ruby Scallop Blanket",
    category: "Home",
    image: redBlanketAsset.url,
    alt: "Close-up of a red crochet blanket with scalloped edging and tassel",
  },
];

function Slideshow({ slides }: { slides: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3500);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative h-full w-full">
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
        />
      ))}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show image ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 w-6 rounded-full transition-colors ${
              i === index ? "bg-background" : "bg-background/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function PortfolioPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">The collection</p>
        <h1 className="mt-2 font-heading text-4xl text-foreground sm:text-5xl">Portfolio</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A curated gallery of finished pieces. Each one is made by hand using natural fibers and timeless stitches.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-xl bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              {"slides" in item && item.slides ? (
                <Slideshow slides={item.slides} />
              ) : (
                <img
                  src={item.image}
                  alt={item.alt}
                  width={800}
                  height={1008}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              )}
            </div>
            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-primary">{item.category}</p>
              <h2 className="mt-1 font-heading text-xl text-card-foreground">{item.title}</h2>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
