import { ArrowUpRight } from "lucide-react";

const cakes = [
  {
    name: "Strawberry Dream",
    category: "Fresh Cream",
    price: "₱1,650",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Classic Chocolate",
    category: "Chocolate",
    price: "₱1,500",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Berry Celebration",
    category: "Specialty",
    price: "₱1,850",
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=85",
  },
];

export default function FeaturedCakes() {
  return (
    <section id="cakes" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b87565]">
              Our favorites
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold text-[#493630] sm:text-5xl">
              Cakes made to
              <span className="italic text-[#b87565]"> celebrate.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#88736c]">
            From timeless classics to custom creations, every cake is made with
            carefully selected ingredients and plenty of love.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {cakes.map((cake, index) => (
            <article
              key={cake.name}
              className={`group ${
                index === 1 ? "lg:-translate-y-5" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-[28px] bg-[#f7eee9]">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#765950] backdrop-blur">
                  {cake.category}
                </div>

                <button
                  type="button"
                  aria-label={`View ${cake.name}`}
                  className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#493630] shadow-lg transition duration-300 group-hover:bg-[#493630] group-hover:text-white"
                >
                  <ArrowUpRight size={18} />
                </button>
              </div>

              <div className="flex items-center justify-between px-1 pt-5">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#493630]">
                    {cake.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#9a8179]">
                    Made fresh to order
                  </p>
                </div>

                <span className="font-semibold text-[#a66c5e]">
                  {cake.price}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            type="button"
            className="rounded-full border border-[#d9c1b9] px-7 py-3.5 text-sm font-semibold text-[#604a42] transition hover:bg-[#493630] hover:text-white"
          >
            View All Cakes
          </button>
        </div>
      </div>
    </section>
  );
}