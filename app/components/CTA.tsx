import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[35px] bg-[#493630] px-7 py-16 text-center sm:px-12 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e6b8aa]">
            Ready to celebrate?
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
            Let's make your
            <span className="block italic text-[#e7b9ab]">
              perfect cake.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/65">
            Tell us what you're celebrating and we'll help you find the cake
            that's just right for the occasion.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#493630] transition hover:bg-[#f5e3dd]"
            >
              Start Your Order
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Phone size={16} />
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}