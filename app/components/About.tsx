export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-[#fffaf7] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-[#ead0c8]" />

            <div className="relative overflow-hidden rounded-[30px]">
              <img
                src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1100&q=85"
                alt="Freshly baked cake"
                className="h-[560px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -right-5 rounded-2xl bg-white p-6 shadow-xl sm:-right-8">
              <div className="font-serif text-3xl font-bold text-[#493630]">
                100%
              </div>
              <p className="mt-1 text-xs uppercase tracking-widest text-[#92786f]">
                Made with love
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b87565]">
              A little about us
            </p>

            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#493630] sm:text-5xl">
              More than a cake,
              <span className="block italic text-[#b87565]">
                it's a memory.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-[#7f6c65]">
              At Sweet Haven, we believe that the best celebrations deserve
              something special at the center of the table.
            </p>

            <p className="mt-5 text-base leading-8 text-[#7f6c65]">
              Every cake we create is handcrafted in small batches using
              quality ingredients, thoughtful details, and a whole lot of
              passion.
            </p>

            <div className="mt-9 grid grid-cols-3 gap-5 border-t border-[#eadbd5] pt-8">
              <div>
                <div className="font-serif text-2xl font-bold text-[#493630]">
                  5+
                </div>
                <p className="mt-1 text-xs leading-5 text-[#92786f]">
                  Years of
                  <br />
                  baking
                </p>
              </div>

              <div>
                <div className="font-serif text-2xl font-bold text-[#493630]">
                  30+
                </div>
                <p className="mt-1 text-xs leading-5 text-[#92786f]">
                  Cake
                  <br />
                  designs
                </p>
              </div>

              <div>
                <div className="font-serif text-2xl font-bold text-[#493630]">
                  500+
                </div>
                <p className="mt-1 text-xs leading-5 text-[#92786f]">
                  Happy
                  <br />
                  celebrations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}