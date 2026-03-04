"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgePercent, Sparkles } from "lucide-react";

export default function HeroHomeClient() {
  return (
    <>
      {/* HERO */}
      <section
  id="home"
  className="relative bg-cover bg-center flex items-start md:items-center
             min-h-[52vh] sm:min-h-[58vh] md:min-h-[68vh]"
  style={{ backgroundImage: "url('/images/home-hero.jpg')" }}
>
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 w-full pt-20 sm:pt-24 md:pt-0">
          <div className="max-w-6xl mx-auto px-6">
           <motion.div
  initial={{ opacity: 0, y: 26 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mx-auto text-center max-w-5xl translate-y-16 sm:translate-y-14 md:translate-y-0"
  style={{ textWrap: "balance" }}
>
<h1 className="text-white drop-shadow-sm leading-tight tracking-tight">
  <span className="block text-[34px] sm:text-[42px] md:text-[56px] font-semibold">
    Approccio multidisciplinare alla bocca per l’equilibrio globale del paziente
  </span>
</h1>

{/* GOLD line: più grande su mobile + più interlinea, e su mobile va in 2 righe */}
<p className="mt-5 md:mt-10 text-[1.65rem] sm:text-2xl md:text-4xl text-white/90 font-medium tracking-wide leading-[1.85] sm:leading-relaxed">
  <span className="block sm:inline">
    <span className="text-yellow-500 font-semibold">G</span>natologia,{" "}
    <span className="text-yellow-500 font-semibold">O</span>steopatia,
  </span>{" "}
  <span className="block sm:inline">
    <span className="text-yellow-500 font-semibold">L</span>ogopedia,{" "}
    <span className="text-yellow-500 font-semibold">D</span>entosofia
  </span>
</p>

{/* linea divisoria COME prima, prima del testo corsi */}
<div className="mt-6 flex justify-center">
  <span className="block w-80 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent" />
</div>

{/* blocco “Corsi…” più in basso */}
<p className="mt-8 md:mt-8 italic text-white/80 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
  Corsi, percorsi e formazione per professionisti{" "}
  <span className="block sm:inline">che lavorano con una visione integrata</span>
</p>

<div className="mt-7 flex justify-center">
  <span className="block w-80 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent" />
</div>

              <div className="mt-7 md:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                

              </div>
            </motion.div>
          </div>
        </div>
      </section>

{/* ===== SOTTO HERO: Abstract PROMO (prima) + Abstract METODO GOLD (sotto) ===== */}

<section className="w-full bg-gradient-to-b from-[#17143c] via-[#d0bdcc] to-white">
  <div className="max-w-6xl mx-auto px-6 pt-8 pb-12 md:pt-10 md:pb-16">
    <div className="space-y-4 md:space-y-5">
{/* ABSTRACT METODO GOLD (NO foto, testo integrale, spostato su) */}
<div className="relative">
  {/* Link overlay: card cliccabile senza annidare Link */}
  <Link
    href="/chi-sono/il-metodo-gold"
    aria-label="Apri Metodo Gold"
    className="absolute inset-0 z-0"
  />

  <div className="relative z-10 px-7 pb-7 pt-1 md:px-9 md:pb-9 md:pt-2">
    {/* tolto mt-4 -> testo più in alto */}
    <div
  lang="it"
  className="space-y-6 px-2 sm:px-6 md:px-14 text-[15.5px] md:text-lg leading-[1.7] text-white/90 text-justify"
  style={{ hyphens: "auto" }}
>
  <p>
    <strong className="font-bold text-white">Il Metodo GOLD®</strong>{" "}
    è un approccio multidisciplinare alla salute che integra{" "}
    <strong className="font-bold text-white">
      Gnatologia, Osteopatia, Logopedia, Dentosofia
    </strong>{" "}
    e{" "}
    <strong className="font-bold text-white">
      Medicine complementari
    </strong>{" "}
    in una visione unitaria dell’essere umano.
  </p>

  <p>
    <strong className="font-bold text-white">La bocca</strong> e
    l’apparato stomatognatico diventano una chiave di lettura privilegiata
    per comprendere l’equilibrio generale del corpo. Ogni sintomo viene
    osservato non come evento isolato, ma come espressione di adattamenti e
    compensi che coinvolgono{" "}
    <strong className="font-bold text-white">
      l’individuo nella sua totalità
    </strong>{" "}
    — nei suoi aspetti{" "}
    <strong className="font-bold text-white">
      fisici, funzionali, neurovegetativi, emozionali e nella sua dimensione
      interiore
    </strong>{" "}
    — come un sistema unico e interconnesso.
  </p>

  <p>
    Il <strong className="font-bold text-white">Metodo GOLD®</strong>{" "}
    accompagna la persona in un percorso di comprensione, riequilibrio e
    autoregolazione, rispettando i tempi individuali e la complessità
    dell’organismo. Si rivolge a{" "}
    <strong className="font-bold text-white">
      professionisti che desiderano formarsi in modo realmente integrato
    </strong>{" "}
    e a pazienti che cercano un{" "}
    <strong className="font-bold text-white">
      approccio più consapevole e globale alla propria salute
    </strong>
    , in ogni fase della vita.
  </p>
</div>
    {/* bottone: più in basso (più spazio sopra) */}
    <div className="mt-10 flex justify-center">
      <Link
        href="/chi-sono/il-metodo-gold"
        className="relative z-20 w-full sm:w-auto px-9 py-3.5 md:px-10 md:py-4 text-[15px] md:text-lg
                   rounded-full text-white inline-flex items-center justify-center
                   bg-yellow-600/95 hover:bg-yellow-600
                   shadow-[0_10px_30px_rgba(0,0,0,0.22)]
                   hover:shadow-[0_14px_42px_rgba(0,0,0,0.28)]
                   transition-all duration-200 active:scale-[0.99]
                   tracking-wide"
      >
        Scopri il Metodo
      </Link>
    </div>
  </div>
</div>
      {/* ABSTRACT PROMO */}
<div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
  {/* Link overlay per rendere cliccabile la card */}
  <Link href="/promo" aria-label="Apri Promo" className="absolute inset-0 z-0" />

  <div className="relative z-10 grid md:grid-cols-12">
    <div className="relative md:col-span-5 min-h-[220px] md:min-h-[280px]">
      <Image
        src="/images/promo2.jpeg"
        alt="Promo corso"
        fill
        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, 40vw"
      />

      <div className="absolute inset-0 bg-black/12" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-white backdrop-blur-sm">
        <BadgePercent className="h-4 w-4" />
        <span className="text-xs font-semibold tracking-wide">FORMAZIONE</span>
      </div>

      <div className="absolute left-5 right-5 bottom-20">
        <p className="text-white font-extrabold tracking-tight text-xl md:text-2xl leading-tight drop-shadow-[0_6px_16px_rgba(0,0,0,0.7)]">
          Corso annuale • 3 moduli • Roma
        </p>
        <p className="mt-1 text-white text-sm md:text-base font-bold">
          Percorso teorico - pratico
        </p>
        <br />
        <p className="text-white font-extrabold tracking-tight text-xl md:text-2xl leading-tight drop-shadow-[0_6px_16px_rgba(0,0,0,0.7)]">
          50 ECM
        </p>
      </div>
    </div>

    <div className="md:col-span-7 p-7 md:p-9">
      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
        Corso di Gnatologia Osteopatica Integrata
      </h3>

      <div className="mt-2 h-[2px] w-29 rounded-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F2D06B]" />

      <p className="mt-4 text-[15.5px] md:text-lg leading-relaxed text-slate-600">
        <strong>Una visione sistemica dell’apparato stomatognatico.</strong>
      </p>
      <p className="mt-4 text-[15.5px] md:text-lg leading-relaxed text-slate-600">
        Un percorso progressivo per integrare valutazione, terapia manuale,
        dispositivi funzionali e lettura sistemica.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
          3 weekend
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
          In presenza
        </span>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
          Crediti ECM
        </span>
      </div>

      {/* bottone un filo più in basso */}
      <div className="mt-8">
        <Link
          href="/corsi"
          className="relative z-20 w-full sm:w-auto px-9 py-3.5 md:px-10 md:py-4 text-[15px] md:text-lg
                     rounded-full inline-flex items-center justify-center
                     text-white backdrop-blur-md bg-black/25 border border-white/30
                     hover:bg-black/20
                     shadow-[0_10px_30px_rgba(0,0,0,0.16)]
                     hover:shadow-[0_14px_42px_rgba(0,0,0,0.22)]
                     transition-all duration-200 active:scale-[0.99]
                     tracking-wide"
        >
          Formazione
        </Link>
      </div>
    </div>
  </div>
</div>

    </div>
  </div>
</section>
    </>
  );
}