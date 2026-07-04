"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personal } from "@/data/personal";
import { ModeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/projects", label: "Projects", index: "001" },
  { href: "/library",  label: "Writing",  index: "002" },
  { href: "/about",    label: "About",    index: "003" },
  { href: "/contact",  label: "Contact",  index: "004" },
];

/** Geometric logo mark — two horizontal stacked bars like ▣ */
function LogoMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="0" y="0" width="46" height="46" />
      <path d="M 0,54 H 26 C 37.1,54 46,62.9 46,74 V 100 H 0 Z" />
      <path d="M 54,0 H 80 C 91.1,0 100,8.9 100,20 V 26 C 100,37.1 91.1,46 80,46 H 54 Z" />
      <path d="M 54,54 H 80 C 91.1,54 100,62.9 100,74 V 80 C 100,91.1 91.1,100 80,100 H 54 Z" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex h-16 w-full max-w-[82rem] items-center justify-between px-6 md:px-12">

        {/* ── Logo ──────────────────────────────────────────── */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[var(--color-primary)] transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          aria-label="Belema Girma — Home"
        >
          <LogoMark />
          <span
            className="font-heading text-xs font-bold uppercase leading-[1.15] tracking-[0.12em]"
            aria-hidden="true"
          >
            BELEMA<br />GIRMA
          </span>
        </Link>

        {/* ── Centered Numbered Nav (desktop) ───────────────── */}
        <div
          className={cn(
            "absolute left-1/2 hidden -translate-x-1/2 items-center border border-[var(--color-border-strong)] md:flex",
            scrolled
              ? "bg-[var(--color-bg)]/80 backdrop-blur-md shadow-sm"
              : "bg-[var(--color-bg)]/60 backdrop-blur-sm"
          )}
          style={{ transition: "background 0.3s ease, box-shadow 0.3s ease" }}
        >
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-1.5 px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.08em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]",
                  i < navLinks.length - 1 && "border-r border-[var(--color-border-strong)]",
                  isActive
                    ? "bg-[var(--color-primary)] text-[var(--color-secondary)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
                )}
              >
                <span style={{ color: isActive ? undefined : "var(--color-text-muted-readable)" }}>{link.index}/</span>
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* ── Right Side Controls ────────────────────────────── */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`mailto:${personal.email}`}
            className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          >
            Email Me
          </a>
          <div className="h-4 w-px bg-[var(--color-border-strong)]" />
          <ModeToggle />
        </div>

        {/* ── Mobile Controls ───────────────────────────────── */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2 text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--color-primary)]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ───────────────────────────────────────── */}
      {open && (
        <div
          className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-2 md:hidden"
          style={{ backdropFilter: "blur(12px)" }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-[44px] items-center gap-2 border-b border-[var(--color-border)] py-3.5 font-mono text-xs uppercase tracking-[0.1em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]",
                  isActive
                    ? "text-[var(--color-primary)] font-bold"
                    : "text-[var(--color-text-secondary)]"
                )}
              >
                <span style={{ color: isActive ? undefined : "var(--color-text-muted-readable)" }}>{link.index}/</span>
                {link.label}
              </Link>
            );
          })}
          <a
            href={`mailto:${personal.email}`}
            className="block py-3.5 font-mono text-xs uppercase tracking-[0.1em] text-[var(--color-text-secondary)]"
          >
            Email Me
          </a>
        </div>
      )}
    </header>
  );
}
