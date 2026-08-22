import { Link, useRouterState } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/patterns", label: "Patterns" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Announcement bar */}
      <div className="bg-blush text-blush-foreground">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-10">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.12em]">
            Free shipping over $200 — returns within 30 days
          </p>
          <div className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-[0.12em] sm:flex">
            <span>English</span>
            <span>USD</span>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-[1600px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:grid-cols-3 lg:px-10">
          {/* Left nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-mono text-[13px] tracking-tight transition-colors hover:text-foreground ${
                  pathname === link.to ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex items-center justify-center p-1 text-foreground lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Logo */}
          <Link to="/" className="justify-self-center">
            <span className="font-heading text-2xl font-black uppercase tracking-[0.18em] text-foreground">
              Twiggs Stitches
            </span>
          </Link>

          {/* Right cluster */}
          <div className="flex items-center justify-end gap-5">
            <label className="hidden items-center gap-2 rounded-full border border-input px-4 py-2 xl:flex">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search"
                className="w-40 bg-transparent font-mono text-[13px] text-foreground outline-none placeholder:text-muted-foreground"
                aria-label="Search"
              />
            </label>
            <button type="button" aria-label="Wishlist" className="text-foreground transition-opacity hover:opacity-60">
              <Heart className="h-5 w-5" />
            </button>
            <button type="button" aria-label="Bag" className="text-foreground transition-opacity hover:opacity-60">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <Link
              to="/contact"
              className="hidden items-center gap-2 font-mono text-[13px] text-foreground transition-opacity hover:opacity-60 sm:flex"
            >
              <User className="h-5 w-5" />
              Login
            </Link>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-b border-border bg-card px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`font-mono text-sm transition-colors hover:text-foreground ${
                  pathname === link.to ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
