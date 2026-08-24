import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import redBraletteAsset from "../assets/red-bralette.png.asset.json";
import sandSweaterAsset from "../assets/sand-crop-sweater.png.asset.json";
import grannySetAsset from "../assets/granny-square-set.png.asset.json";
import purpleShawlAsset from "../assets/purple-granny-shawl.png.asset.json";
import cocoaBikiniAsset from "../assets/cocoa-bikini-set.png.asset.json";
import redBlanketAsset from "../assets/red-scallop-blanket.png.asset.json";
import redShortsAsset from "../assets/red-shorts-set.jpg.asset.json";
import cocoaBraletteAsset from "../assets/cocoa-scallop-bralette.jpg.asset.json";
import crimsonHalterAsset from "../assets/crimson-halter-top.png.asset.json";
import wornChocomochaAsset from "../assets/worn-chocomocha-2.jpg.asset.json";

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

type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  alt: string;
  gallery?: { src: string; alt: string }[];
};

const portfolioItems: PortfolioItem[] = [
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
    gallery: [
      {
        src: grannySetAsset.url,
        alt: "Earth-toned granny square crochet top and skirt set with a cream handbag",
      },
      {
        src: wornChocomochaAsset.url,
        alt: "Chocomocha granny square crochet sweater worn with cream wide-leg trousers",
      },
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

function PortfolioPage() {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const [slide, setSlide] = useState(0);

  const slides = activeItem?.gallery ?? (activeItem ? [{ src: activeItem.image, alt: activeItem.alt }] : []);

  useEffect(() => {
    if (!activeItem) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveItem(null);
      if (e.key === "ArrowRight") setSlide((s) => (s + 1) % slides.length);
      if (e.key === "ArrowLeft") setSlide((s) => (s - 1 + slides.length) % slides.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeItem, slides.length]);

  const open = (item: PortfolioItem) => {
    setActiveItem(item);
    setSlide(0);
  };

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
            <button
              type="button"
              onClick={() => open(item)}
              className="block w-full text-left"
              aria-label={`View ${item.title} gallery`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={800}
                  height={1008}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">{item.category}</p>
                <h2 className="mt-1 font-heading text-xl text-card-foreground">{item.title}</h2>
              </div>
            </button>
          </article>
        ))}
      </div>

      {activeItem && slides.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeItem.title} gallery`}
          onClick={() => setActiveItem(null)}
        >
          <div className="relative max-h-full w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute -top-10 right-0 text-background transition-opacity hover:opacity-70"
              aria-label="Close gallery"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="overflow-hidden rounded-xl bg-card">
              <img
                src={slides[slide]?.src}
                alt={slides[slide]?.alt ?? activeItem.alt}
                className="max-h-[75vh] w-full object-contain"
              />
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">{activeItem.category}</p>
                  <h3 className="mt-1 font-heading text-xl text-card-foreground">{activeItem.title}</h3>
                </div>
                {slides.length > 1 && (
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {slide + 1} / {slides.length}
                  </p>
                )}
              </div>
            </div>

            {slides.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => setSlide((s) => (s - 1 + slides.length) % slides.length)}
                  className="absolute left-2 top-1/3 rounded-full bg-background/85 p-2 text-foreground shadow transition hover:bg-background"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setSlide((s) => (s + 1) % slides.length)}
                  className="absolute right-2 top-1/3 rounded-full bg-background/85 p-2 text-foreground shadow transition hover:bg-background"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
