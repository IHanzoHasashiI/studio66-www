"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md transition-shadow",
        scrolled && "shadow-sm"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-sm font-semibold tracking-wide">
          <span className="text-neutral-500">STUDIO</span>{" "}
          <span className="font-bold">66 Gdynia</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-6 text-sm md:flex">
          <Link href="/" className="hover:text-black">
            Strona główna
          </Link>
          <Link href="/produkty" className="hover:text-black">
            Produkty
          </Link>
          <Link href="/realizacje" className="hover:text-black">
            Realizacje
          </Link>
          <Link href="/blog" className="hover:text-black">
            Blog
          </Link>
          <Link href="/kontakt" className="hover:text-black">
            Kontakt
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="block md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 text-sm">
          <nav className="flex flex-col space-y-2">
            <Link href="/" onClick={() => setOpen(false)}>
              Strona główna
            </Link>
            <Link href="/produkty" onClick={() => setOpen(false)}>
              Produkty
            </Link>
            <Link href="/realizacje" onClick={() => setOpen(false)}>
              Realizacje
            </Link>
            <Link href="/blog" onClick={() => setOpen(false)}>
              Blog
            </Link>
            <Link href="/kontakt" onClick={() => setOpen(false)}>
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
