import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";

export const Route = createFileRoute("/patterns")({
  head: () => ({
    meta: [
      { title: "Patterns — Cozy Stitches" },
      { name: "description", content: "Downloadable crochet patterns for blankets, bags, wearables, and home goods." },
      { property: "og:title", content: "Patterns — Cozy Stitches" },
      { property: "og:description", content: "Downloadable crochet patterns for blankets, bags, wearables, and home goods." },
    ],
  }),
  component: PatternsPage,
});

const patterns = [
  {
    title: "Sunrise Granny Tote",
    level: "Intermediate",
    format: "PDF",
    price: "$8.00",
    description: "A spacious granny-square tote with a sturdy base and comfortable straps.",
  },
  {
    title: "Sage Shells Baby Blanket",
    level: "Beginner",
    format: "PDF + video",
    price: "$12.00",
    description: "A gentle shell-stitch blanket in a soft, repeating pattern perfect for gifting.",
  },
  {
    title: "Cottage Cardigan",
    level: "Advanced",
    format: "PDF",
    price: "$14.00",
    description: "An oversized chunky cardigan worked in panels with cozy patch pockets.",
  },
  {
    title: "Market Day Mesh Bag",
    level: "Beginner",
    format: "PDF",
    price: "$6.00",
    description: "A breathable cotton market bag that stretches to hold all your fresh finds.",
  },
  {
    title: "Warm Hearth Coasters",
    level: "Beginner",
    format: "PDF",
    price: "$5.00",
    description: "A set of four floral coasters and a matching mug cozy for slow mornings.",
  },
  {
    title: "Chestnut Beanie & Scarf",
    level: "Intermediate",
    format: "PDF + video",
    price: "$10.00",
    description: "A matching winter set with ribbed texture and an optional faux-fur pom.",
  },
];

function PatternsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Digital downloads</p>
        <h1 className="mt-2 font-heading text-4xl text-foreground sm:text-5xl">Patterns</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Clear, tested crochet patterns you can download instantly. Each one includes written instructions, stitch diagrams, and plenty of photos.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {patterns.map((pattern) => (
          <article
            key={pattern.title}
            className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-heading text-xl text-card-foreground">{pattern.title}</h2>
              <span className="shrink-0 font-medium text-primary">{pattern.price}</span>
            </div>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">{pattern.description}</p>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                  {pattern.level}
                </span>
                <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                  {pattern.format}
                </span>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                <Download className="h-4 w-4" />
                Inquire
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
