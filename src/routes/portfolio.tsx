import { createFileRoute } from "@tanstack/react-router";

import toteImage from "../assets/portfolio-tote.jpg";
import cardiganImage from "../assets/portfolio-cardigan.jpg";
import blanketImage from "../assets/portfolio-blanket.jpg";
import marketBagImage from "../assets/portfolio-market-bag.jpg";
import wearablesImage from "../assets/portfolio-wearables.jpg";
import homeImage from "../assets/portfolio-home.jpg";

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
    title: "Granny Square Tote",
    category: "Bags",
    image: toteImage,
    alt: "Crochet granny square tote bag in cream and terracotta yarn",
  },
  {
    title: "Oatmeal Chunky Cardigan",
    category: "Wearables",
    image: cardiganImage,
    alt: "Chunky oatmeal crochet cardigan on a vintage wooden chair",
  },
  {
    title: "Sage Baby Blanket",
    category: "Home",
    image: blanketImage,
    alt: "Sage green and cream handmade crochet baby blanket",
  },
  {
    title: "Cotton Market Bag",
    category: "Bags",
    image: marketBagImage,
    alt: "Cream cotton crochet market bag filled with dried flowers",
  },
  {
    title: "Chestnut Winter Set",
    category: "Wearables",
    image: wearablesImage,
    alt: "Chestnut brown crochet beanie and scarf set",
  },
  {
    title: "Mug Cozy & Coasters",
    category: "Home",
    image: homeImage,
    alt: "Handmade crochet coasters and mug cozy on a rustic table",
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
          </article>
        ))}
      </div>
    </section>
  );
}
