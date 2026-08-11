import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#fff8f4]"
    >
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#f3d8d0]/50 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#ead9c5]/40 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-32 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e8d2ca] bg-white/70 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#bd7968]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#89645a]">
                Freshly baked with love
              </span>
            </div>

            <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-[#493630] sm:text-6xl lg:text-7xl">
              Life is sweeter
              <span className="block italic text-[#b87565]">
                with cake.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#7c6962] sm:text-lg">
              Beautiful handcrafted cakes made fresh for birthdays, weddings,
              celebrations, and all the little moments worth remembering.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cakes"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#493630] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#6b4d43]"
              >
                Explore Our Cakes
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-[#dbc2ba] bg-white/60 px-7 py-4 text-sm font-semibold text-[#604a42] transition hover:bg-white"
              >
                Our Story
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="font-serif text-2xl font-bold text-[#493630]">
                  500+
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-[#92786f]">
                  Happy Customers
                </div>
              </div>

              <div className="h-10 w-px bg-[#dfcbc4]" />

              <div>
                <div className="font-serif text-2xl font-bold text-[#493630]">
                  4.9
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-[#92786f]">
                  Customer Rating
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-4 -top-5 z-10 hidden h-28 w-28 rounded-full border border-[#e2c8c0] bg-[#fffaf7]/90 p-4 shadow-xl sm:block">
              <div className="flex h-full flex-col items-center justify-center rounded-full border border-dashed border-[#cda69b] text-center">
                <span className="text-2xl">♡</span>
                <span className="mt-1 text-[9px] font-bold uppercase tracking-widest text-[#8c655b]">
                  Made
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#8c655b]">
                  with love
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[45%_45%_20%_20%] border-[10px] border-white shadow-2xl shadow-[#6d4a3e]/20">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85"
                alt="Beautiful chocolate cake"
                className="h-[560px] w-full object-cover sm:h-[650px]"
              />

              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/40 bg-white/85 p-4 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#98776d]">
                      Customer favorite
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-bold text-[#493630]">
                      Classic Chocolate Cake
                    </h3>
                  </div>

                  <div className="rounded-full bg-[#493630] px-4 py-2 text-sm font-bold text-white">
                    ₱1,500
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-5 hidden h-20 w-20 rounded-full bg-[#e7c3b8] sm:flex sm:items-center sm:justify-center">
              <span className="text-2xl">✦</span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#cakes"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#98786e] md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Discover
        </span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}