export default function Footer() {
  const sitiAmici = [
    {
      name: "NaturaSì",
      href: "https://www.naturasi.it/",
      logo: "/images/partners/naturasi_aligned.png",
    },
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* TOP: Contatti + Link utili */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contatti */}
          <div>
            <h4 className="text-[12px] font-semibold tracking-widest uppercase text-yellow-600/90">
              Contatti
            </h4>

            {/* Mobile: a colonne | Desktop: su una riga */}
            <div className="mt-3 flex flex-col sm:flex-row sm:flex-wrap gap-y-1 sm:gap-y-0 sm:gap-x-10 text-gray-700 text-[15px] leading-relaxed">
              <p className="whitespace-nowrap">
                <span className="text-gray-500/90 font-medium">Email:</span>{" "}
                <a
                  href="mailto:metodogold7@gmail.com"
                  className="hover:text-yellow-700 transition-colors"
                >
                  metodogold7@gmail.com
                </a>
              </p>

              <p className="whitespace-nowrap">
                <span className="text-gray-500/90 font-medium">Telefono:</span>{" "}
                <a
                  href="tel:+393932223740"
                  className="hover:text-yellow-700 transition-colors"
                >
                  +39 393.2223740
                </a>
              </p>
            </div>
          </div>

          {/* Link utili */}
          <div className="md:text-right">
            <h4 className="text-[12px] font-semibold tracking-widest uppercase text-yellow-600/90">
              Link utili
            </h4>

            <ul className="mt-3 flex flex-wrap md:justify-end gap-x-7 gap-y-1 text-[15px]">
              <li>
                <a
                  href="/"
                  className="text-gray-700/90 hover:text-yellow-700 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/chi-sono"
                  className="text-gray-700/90 hover:text-yellow-700 transition-colors duration-200"
                >
                  Chi sono
                </a>
              </li>
              <li>
                <a
                  href="/corsi"
                  className="text-gray-700/90 hover:text-yellow-700 transition-colors duration-200"
                >
                  Corsi
                </a>
              </li>
              <li>
                <a
                  href="/media"
                  className="text-gray-700/90 hover:text-yellow-700 transition-colors duration-200"
                >
                  Media
                </a>
              </li>
            </ul>
          </div>
        </div>

       
  {/* In collaborazione con */}
<div className="mt-6 pt-5 border-t border-gray-200">
  <div className="flex items-center justify-center gap-6">
    <p className="text-[12px] font-semibold tracking-widest uppercase text-gray-600 whitespace-nowrap leading-none">
      In collaborazione con
    </p>

    <div className="flex items-center">
      {sitiAmici.map((sito) => (
        <a
          key={sito.href}
          href={sito.href}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-90 hover:opacity-100 transition"
          aria-label={sito.name}
          title={sito.name}
        >
          <img
  src={sito.logo}
  alt={sito.name}
  className="block h-7 md:h-8 w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
  style={{ transform: "translateY(-8px)" }}
/>
        </a>
      ))}
    </div>
  </div>
</div>





        {/* COPYRIGHT (più vicino) */}
        <div className="mt-5 pt-4 border-t border-gray-200 text-center text-[12px] tracking-wide text-gray-500/90">
          &copy; {new Date().getFullYear()} Metodo Gold. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
