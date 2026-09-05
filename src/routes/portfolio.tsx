import { createFileRoute } from "@tanstack/react-router";

import redBraletteAsset from "../assets/red-bralette.png.asset.json";
import sandSweaterAsset from "../assets/sand-crop-sweater.png.asset.json";
import sandOpenworkSweaterAsset from "../assets/sand-openwork-sweater.png.asset.json";
import grannySetAsset from "../assets/granny-square-set.png.asset.json";
import purpleShawlAsset from "../assets/purple-granny-shawl.png.asset.json";
import cocoaBikiniAsset from "../assets/cocoa-bikini-set.png.asset.json";
import redBlanketAsset from "../assets/red-scallop-blanket.png.asset.json";
import redShortsAsset from "../assets/red-shorts-set.jpg.asset.json";
import cocoaBraletteAsset from "../assets/cocoa-scallop-bralette.jpg.asset.json";
import crimsonHalterAsset from "../assets/crimson-halter-top.png.asset.json";
import chocomochaWornAsset from "../assets/chocomocha-worn.jpg.asset.json";
import cocoaGrannyHalterAsset from "../assets/cocoa-granny-halter.png.asset.json";
import cocoaGrannyHalterWorn1Asset from "../assets/cocoa-granny-halter-worn-1.jpeg.asset.json";
import cocoaGrannyHalterWorn2Asset from "../assets/cocoa-granny-halter-worn-2.jpeg.asset.json";
import { ImageSlideshow } from "@/components/image-slideshow";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Cozy Stitches Couture" },
      { name: "description", content: "Browse handmade crochet blankets, bags, wearables, and home goods from Cozy Stitches Couture." },
      { property: "og:title", content: "Portfolio — Cozy Stitches Couture" },
      { property: "og:description", content: "Browse handmade crochet blankets, bags, wearables, and home goods from Cozy Stitches Couture." },
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
    images: [grannySetAsset.url, chocomochaWornAsset.url],
    alt: "Earth-toned granny square crochet top and skirt set with a cream handbag",
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
    title: "Cocoa Granny Halter",
    category: "Wearables",
    image: cocoaGrannyHalterAsset.url,
    alt: "Cocoa, beige and cream granny-stitch crochet halter top flat-lay with denim jeans and trailing greenery",
  },
  {
    title: "Ruby Scallop Blanket",
    category: "Home",
    image: redBlanketAsset.url,
    alt: "Close-up of a red crochet blanket with scalloped edging and tassel",
  },
];

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
            <div className="aspect-[4/5] overflow-hidden">
              <ImageSlideshow
                images={item.images ?? [item.image]}
                alt={item.alt}
                className="transition-transform duration-500 group-hover:scale-105"
              />
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
