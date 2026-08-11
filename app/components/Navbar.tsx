"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Our Cakes", href: "#cakes" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="rounded-full border border-white/60 bg-white/85 px-5 py-3 shadow-lg shadow-black/5 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <a
              href="#home"
              className="flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ead0c8]">
                <span className="text-xl">🍰</span>
              </div>

              <div>
                <div className="font-serif text-lg font-bold tracking-wide text-[#493630]">
                  FORMACION
                </div>
                <div className="text-[9px] uppercase tracking-[0.25em] text-[#a27b6f]">
                  Cakes & Patisserie
                </div>
              </div>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#705950] transition hover:text-[#b56f5f]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                className="rounded-full bg-[#493630] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6a4c42]"
              >
                Order a Cake
              </a>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4e6e1] text-[#493630] md:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="border-t border-[#eaded9] pt-4 md:hidden">
              <div className="flex flex-col gap-2 pb-2">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-[#705950] hover:bg-[#f9efeb]"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl bg-[#493630] px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Order a Cake
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}