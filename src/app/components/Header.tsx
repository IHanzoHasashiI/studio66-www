"use client";

import Link from "next/link";
import Image from "next/image";
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
        "fixed top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md transition-all",
        scrolled && "shadow-sm py-2",
        !scrolled && "py-3"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        {/* Logo + Nazwa */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow">
            <Image
              src="/images/logo/studio66-logo.png"
              alt="Studio 66 Gdynia"
              width={38}
              height={38}
              className="transition-transform group-hover:scale-105"
              priority
            />
          </div>

          <span className="text-sm font-semibold tracking-wide">
            <span className="text-neutral-500">STUDIO</span>{" "}
            <span className="font-bold">66 Gdynia</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-7 text-sm font-medium md:flex">
          <Link href="/" className="hover:text-black transition-colors">
            Strona główna
          </Link>
          <Link href="/produkty" className="hover:text-black transition-colors">
            Produkty
          </Link>
          <Link href="/realizacje" className="hover:text-black transition-colors">
            Realizacje
          </Link>
          <Link href="/blog" className="hover:text-black transition-colors">
            Blog
          </Link>
          <Link href="/kontakt" className="hover:text-black transition-colors">
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
        <div className="md:hidden px-4 pb-5 text-sm border-t bg-white">
          <nav className="flex flex-col space-y-3 pt-4">
            <Link href="/" onClick={() => setOpen(false)} className="font-medium">
              Strona główna
            </Link>
            <Link href="/produkty" onClick={() => setOpen(false)} className="font-medium">
              Produkty
            </Link>
            <Link href="/realizacje" onClick={() => setOpen(false)} className="font-medium">
              Realizacje
            </Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="font-medium">
              Blog
            </Link>
            <Link href="/kontakt" onClick={() => setOpen(false)} className="font-medium">
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}