export default function Footer() {
  return (
    <footer className="bg-[#fffaf7]">
      <div className="mx-auto max-w-7xl border-t border-[#eadbd5] px-5 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="font-serif text-xl font-bold text-[#493630]">
              FORMACION
            </div>

            <p className="mt-1 text-xs text-[#98786e]">
              Cakes made with love.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-medium text-[#806c64]">
            <a href="#home" className="hover:text-[#b87565]">
              Home
            </a>

            <a href="#cakes" className="hover:text-[#b87565]">
              Cakes
            </a>

            <a href="#about" className="hover:text-[#b87565]">
              About
            </a>

            <a href="#contact" className="hover:text-[#b87565]">
              Contact
            </a>
          </div>

          <p className="text-xs text-[#a28c84]">
            © {new Date().getFullYear()} Formacion
          </p>
        </div>
      </div>
    </footer>
  );
}