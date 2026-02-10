"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroHomeClient() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center flex items-start md:items-center
                 min-h-[64vh] sm:min-h-[68vh] md:min-h-[84vh]"
      style={{ backgroundImage: "url('/images/home-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 w-full pt-20 sm:pt-24 md:pt-0">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto text-center max-w-5xl"
            style={{ textWrap: "balance" }}
          >
            <h1 className="text-white drop-shadow-sm leading-tight tracking-tight">
              <span className="block text-[34px] sm:text-[42px] md:text-[56px] font-semibold">
                Approccio multidisciplinare alla bocca per l’equilibrio globale
                del paziente
              </span>
            </h1>

            <p className="mt-2 md:mt-9 text-xl sm:text-2xl md:text-4xl text-white/90 leading-relaxed font-medium tracking-wide">
              <span className="text-yellow-500 font-semibold">G</span>natologia,{" "}
              <span className="text-yellow-500 font-semibold">O</span>steopatia,{" "}
              <span className="text-yellow-500 font-semibold">L</span>ogopedia,{" "}
              <span className="text-yellow-500 font-semibold">D</span>entosofia
            </p>

            <div className="mt-3 flex justify-center">
              <span className="block w-80 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent" />
            </div>

            <p className="mt-3 md:mt-4 italic text-white/80 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
              Corsi, percorsi e formazione per professionisti{" "}
              <span className="block sm:inline">
                che lavorano con una visione integrata
              </span>
            </p>

            <div className="mt-7 md:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                href="/chi-sono/il-metodo-gold"
                className="w-full sm:w-auto px-9 py-3.5 md:px-10 md:py-4 text-[15px] md:text-lg
                           rounded-full text-white inline-flex items-center justify-center
                           bg-yellow-600/95 hover:bg-yellow-600
                           shadow-[0_10px_30px_rgba(0,0,0,0.22)]
                           hover:shadow-[0_14px_42px_rgba(0,0,0,0.28)]
                           transition-all duration-200 active:scale-[0.99]
                           tracking-wide"
              >
                Scopri il Metodo
              </Link>

              <Link
                href="/corsi"
                className="w-full sm:w-auto px-9 py-3.5 md:px-10 md:py-4 text-[15px] md:text-lg
                           rounded-full inline-flex items-center justify-center
                           text-white backdrop-blur-md bg-white/10 border border-white/30
                           hover:bg-white/20
                           shadow-[0_10px_30px_rgba(0,0,0,0.16)]
                           hover:shadow-[0_14px_42px_rgba(0,0,0,0.22)]
                           transition-all duration-200 active:scale-[0.99]
                           tracking-wide"
              >
                Formazione
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
