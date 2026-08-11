const categories = [
  {
    title: "Birthday Cakes",
    description: "Make their special day even sweeter.",
    image:
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Wedding Cakes",
    description: "Elegant cakes for unforgettable moments.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Custom Cakes",
    description: "Your idea, beautifully brought to life.",
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=85",
  },
];

export default function Categories() {
  return (
    <section className="bg-[#f7eee9] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b87565]">
            Find your perfect cake
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#493630] sm:text-5xl">
            Something for every
            <span className="italic text-[#b87565]"> occasion.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.title}
              href="#cakes"
              className="group relative h-[420px] overflow-hidden rounded-[30px]"
            >
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <h3 className="font-serif text-2xl font-bold">
                  {category.title}
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-6 text-white/80">
                  {category.description}
                </p>

                <span className="mt-5 inline-block text-xs font-bold uppercase tracking-widest">
                  Explore →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}