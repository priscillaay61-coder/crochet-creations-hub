import { createFileRoute } from "@tanstack/react-router";

import aboutHandsImage from "../assets/about-hands.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cozy Stitches Couture" },
      { name: "description", content: "Meet the maker behind Cozy Stitches Couture and learn about the slow, intentional crochet process." },
      { property: "og:title", content: "About — Cozy Stitches Couture" },
      { property: "og:description", content: "Meet the maker behind Cozy Stitches Couture and learn about the slow, intentional crochet process." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">The maker</p>
          <h1 className="mt-2 font-heading text-4xl text-foreground sm:text-5xl">Hi, I&apos;m Elara.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            I started Cozy Stitches Couture from a small sunlit corner of my cottage, surrounded by yarn, tea, and half-finished blankets. What began as a quiet hobby has grown into a practice of creating slow, thoughtful pieces for everyday life.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            I work primarily with cotton, wool, and linen blends in earthy, muted palettes. My designs are inspired by the seasons, old textiles, and the comforting weight of something made by hand.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl bg-secondary/40 p-6">
              <h2 className="font-heading text-xl text-foreground">Natural fibers</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                I choose yarns that age beautifully and feel good against the skin.
              </p>
            </div>
            <div className="rounded-xl bg-secondary/40 p-6">
              <h2 className="font-heading text-xl text-foreground">Made to order</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Finished pieces are crafted in small batches or made just for you.
              </p>
            </div>
            <div className="rounded-xl bg-secondary/40 p-6">
              <h2 className="font-heading text-xl text-foreground">Pattern tested</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Every pattern is written, tested, and refined before it reaches your inbox.
              </p>
            </div>
            <div className="rounded-xl bg-secondary/40 p-6">
              <h2 className="font-heading text-xl text-foreground">Slow craft</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                No rushing. Each piece carries the pace and care of its making.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-2xl bg-warm-beige shadow-xl">
            <img
              src={aboutHandsImage}
              alt="An African maker's hands crocheting with cream yarn and a wooden hook"
              width={912}
              height={1104}
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
