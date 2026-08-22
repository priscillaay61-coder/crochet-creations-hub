import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { to: "/portfolio", label: "Portfolio" },
      { to: "/patterns", label: "Patterns" },
    ],
  },
  {
    title: "Studio",
    links: [
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
          <div>
            <p className="font-heading text-2xl font-black uppercase tracking-[0.18em] text-foreground">
              Twiggs Stitches
            </p>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Handmade crochet with warmth and intention, made slowly in small batches.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-foreground underline-offset-4 hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Follow</p>
            <div className="mt-4 flex items-center gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground transition-opacity hover:opacity-60"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@twiggsstitches.example"
                className="text-foreground transition-opacity hover:opacity-60"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 md:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            &copy; {currentYear} Twiggs Stitches
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Free shipping over $200
          </p>
        </div>
      </div>
    </footer>
  );
}
