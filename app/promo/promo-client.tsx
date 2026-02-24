"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import PrenotaForm from "../../components/PrenotaForm";
import {
  ArrowRight,
  BadgePercent,
  CalendarDays,
  MapPin,
  GraduationCap,
  Users,
  Award,
  Sparkles,
} from "lucide-react";

const gold = "#D4AF37";
const gold2 = "#F2D06B";

const CONTENT = {
  title: "CORSO GNATOLOGIA OSTEOPATICA INTEGRATA",
  subtitle: "Percorso annuale teorico – pratico in 3 moduli",
  collab: "In collaborazione con Salute Sì e NaturaSì",

  attestato: "Attestato di Partecipazione",

  datesTitle: "Date (3 weekend)",
  dates: ["27–28–29 Marzo 2026", "19–20–21 Giugno 2026", "9–10–11 Ottobre 2026"],

  destinatariTitle: "Destinatari",
  destinatariList: [
    "Odontoiatri",
    "Medici",
    "Osteopati",
    "Fisioterapisti",
    "Posturologi",
    "Optometristi",
    "Logopedisti",
  ],

  promoTitle: "IN PROMOZIONE",
  promoSubtitle:
    "Iscrizione entro il 28 Febbraio 2026: sconto del 15% sul primo modulo",
  pricing: [
    {
      who: "Odontoiatri e Medici",
      full: "€ 890 + IVA",
      promo: "€ 756 + IVA",
      note: "-15% sul 1° modulo",
      saving: "Risparmi € 134",
    },
    {
      who: "Le altre professioni",
      full: "€ 640 + IVA",
      promo: "€ 544 + IVA",
      note: "-15% sul 1° modulo",
      saving: "Risparmi € 96",
    },
  ],

  objectivesTitle: "Obiettivi formativi",
  objectives: [
    "Lettura sistemica funzionale dell’apparato stomatognatico",
    "Sviluppare la capacità di ascolto del sistema cranio-sacrale e comprendere la relazione tra lavoro intraorale ed equilibrio generale dell’organismo",
    "Gestione dei dispositivi intraorali funzionali delle DTM",
    "Potenziare la comunicazione interdisciplinare tra Odontoiatria, Osteopatia e Medicine integrate",
    "Ricercare le cause delle disfunzioni (non solo gestione del sintomo) nelle DTM in un contesto cranio–cervico–mandibolare e sistemico",
  ],

  integrazioniTitle: "Integrazioni cliniche",
  integrazioni: [
    "Disintossicazione e supporto del terreno attraverso metodiche naturali in ottica integrata",
    "Ruolo dei recettori oculari e implicazioni posturali e neurologiche",
    "Ruolo di interferenze corporee e cicatrici (anche a distanza) nei compensi e nelle recidive",
    "Contributo dell’Antroposofia nella lettura dell’apparato stomatognatico",
  ],

  structureTitle: "Struttura del corso",
  structureIntro:
    "Il corso si svolge in presenza ed è articolato in tre moduli progressivi, pensati come un unico percorso formativo coerente. Tutti i moduli alternano teoria ed esercitazioni pratiche guidate.",
  hours: [
    { label: "Ore totali", value: "50 ore" },
    { label: "Teoria", value: "32 ore" },
    { label: "Esercitazioni pratiche", value: "18 ore" },
  ],

  modules: [
    {
      title: "Modulo 1 – Fondamenti clinici e sistemici",
      intro:
        "Basi anatomiche, fisiologiche e funzionali per una visione integrata dell’apparato stomatognatico nel contesto cranio-sacrale.",
      items: [
        "Fondamenti di anatomia e fisiologia del sistema cranio-sacrale",
        "Mobilità cranica e meccanismo respiratorio primario",
        "Ascolto palpatorio e valutazione funzionale",
        "Inquadramento delle malocclusioni e delle disfunzioni gnatologiche",
        "Utilizzo dei dispositivi funzionali in una visione sistemica",
        "Concetto di odontone come unità anatomo-funzionale in un sistema complesso",
      ],
    },
    {
      title:
        "Modulo 2 – Integrazione neuro-funzionale e riabilitazione occlusale",
      intro:
        "Relazioni tra apparato stomatognatico, postura e sistema nervoso.",
      items: [
        "Relazione tra cranio, mandibola e articolazioni temporo-mandibolari",
        "Adattamenti posturali e compensi",
        "Sistema nervoso autonomo: simpatico/parasimpatico e funzioni neurovegetative della bocca",
        "RNO secondo Planas: angoli funzionali masticatori, piste di Planas e dispositivi funzionali",
        "Ruolo della bocca nella neuroplasticità e nelle disfunzioni neurologiche",
        "Ruolo della terapia logopedica e miofunzionale",
      ],
    },
    {
      title: "Modulo 3 – Integrazione avanzata, emotività e stabilità clinica",
      intro:
        "Gestione casi complessi e stabilità nel tempo: lettura clinica avanzata.",
      items: [
        "Ruolo delle fasce e delle catene miofasciali",
        "Interferenze corporee e cicatrici",
        "Correlazione tra denti, sistema nervoso ed emotività",
        "Contributi antroposofici alla lettura dell’apparato stomatognatico",
        "Omeopatia come supporto nei percorsi clinici complessi",
        "Recettori oculari nella propriocezione posturale",
      ],
      outro:
        "Strumenti per comprendere perché alcuni trattamenti non si stabilizzano e come intervenire in modo più consapevole.",
    },
  ],

  docentiTitle: "Docenti",
  docenti: [
    {
      name: "Dr.ssa Cristina Barni",
      role:
        "Odontoiatra, Omeopata, Spec. in Ortodonzia e Gnatologia, Terapista Cranio-Sacrale, Dentosofia",
      img: "/images/chi-sono.png",
    },
    {
      name: "Dr.ssa Francesca Faliva",
      role:
        "Docente per oltre 25 anni di Osteopatia Cranica (CSOT Roma), Formatrice in Osteopatia pediatrica e Biodinamica, Direttrice didattica progetto Salute Sì (NaturaSì)",
      img: "/images/francescafaliva.png",
    },
    {
      name: "Dr. Francesco Pachi",
      role:
        "Odontoiatra, Spec. in Ortodonzia, Docente Università di Roma Tor Vergata (CL Odontoiatria e Protesi Dentaria), Socio ordinario S.I.D.O., Dentosofia",
      img: "/images/francescopachi.png",
    },
    {
      name: "Dr. Luigi Satta",
      role:
        "Medico, Spec. Pediatria, Omeopata, Omotossicologo, Naturopata, Esperto in elettroagopuntura secondo Voll",
      img: "/images/luigisatta.jpg",
    },
    {
      name: "Teresa Mazzei",
      role:
        'Euritmista, Master of Education Eurythmy, spec. in Euritmia Igienica e in "Eurythmy in working life", arte-terapia ad indirizzo antroposofico e Pedagogia di Emergenza',
      img: "/images/teresamazzei.jpeg",
    },
  ],
};

function SectionTitle({
  overline,
  title,
  subtitle,
  titleClassName = "",
  subtitleClassName = "",
}: {
  overline?: string;
  title: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {overline ? (
        <div className="inline-block text-sm font-semibold tracking-[0.22em] text-[color:var(--gold)] underline decoration-[color:var(--gold)] decoration-2 underline-offset-4">
          {overline}
        </div>
      ) : null}
      <h2
        className={`text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-3 text-lg text-slate-600 md:text-xl ${subtitleClassName}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function EcmSeal() {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-white/70 bg-black/28 px-4 py-2.5 md:px-5 md:py-3 backdrop-blur-md shadow-[0_14px_40px_-18px_rgba(0,0,0,0.6)]">
      <span className="grid h-8 w-8 md:h-9 md:w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#B8860B] via-[#D4AF37] to-[#F2D06B] text-slate-950">
        <Award className="h-4 w-4 md:h-5 md:w-5" />
      </span>

      <span className="text-2xl sm:text-3xl md:text-[2rem] font-extrabold leading-none bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#F2D06B] bg-clip-text text-transparent">
        50 ECM
      </span>
    </div>
  );
}

        
/* === helper per mettere in bold parole/frasi specifiche === */
function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderBoldPhrases(text: string, phrases: string[]) {
  if (!phrases.length) return text;

  const sorted = [...phrases].sort((a, b) => b.length - a.length);
  const pattern = sorted.map(escapeRegExp).join("|");
  const regex = new RegExp(`(${pattern})`, "g");

  return text.split(regex).map((part, i) => {
    if (!part) return null;
    const isMatch = sorted.some((p) => p === part);
    return isMatch ? (
      <strong key={`${part}-${i}`} className="font-extrabold text-slate-900">
        {part}
      </strong>
    ) : (
      <span key={`${part}-${i}`}>{part}</span>
    );
  });
}

const OBJECTIVES_BOLD_PHRASES = [
  "Lettura sistemica funzionale",
  "la capacità di ascolto",
  "Gestione dei dispositivi intraorali funzionali",
  "comunicazione interdisciplinare",
  "cause delle disfunzioni",
];

const INTEGRAZIONI_BOLD_PHRASES = [
  "Disintossicazione",
  "in ottica integrata",
  "Ruolo dei recettori oculari",
  "interferenze corporee e cicatrici",
  "nei compensi",
  "dell’Antroposofia",
  "dell'Antroposofia",
];

export default function PromoClient() {
  return (
    <div
      style={
        {
          ["--gold" as any]: gold,
          ["--gold2" as any]: gold2,
        } as CSSProperties
      }
      className="min-h-screen bg-white text-slate-900"
    >
      {/* HERO */}
<section className="relative overflow-hidden">
  {/* HERO immagine (stile Formazione, più compatto) */}
  <div className="relative">
    <div className="absolute inset-0">
      <Image
        src="/images/promo2.jpeg"
        alt="Corso di Gnatologia Osteopatica Integrata"
        fill
        priority
        className="object-cover object-[50%_35%] md:object-center brightness-95"
        sizes="100vw"
      />
      {/* overlay più scuro per leggibilità */}
      <div className="absolute inset-0 bg-black/58" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/26" />
    </div>

    <div className="relative mx-auto max-w-6xl px-4">
      {/* altezza compatta */}
      <div className="grid min-h-[285px] items-center gap-3 py-5 md:min-h-[455px] md:grid-cols-12 md:gap-6 md:py-12">
        <div className="md:col-span-10 lg:col-span-8">
          

<h1 className="mt-12 text-[2.35rem] font-extrabold tracking-tight leading-[1.14] text-white sm:mt-3 sm:text-[2.95rem] md:text-[3.7rem] md:leading-[1.16] lg:text-[4.2rem] xl:text-[4.7rem]">
  <span className="block md:whitespace-nowrap">Corso di Gnatologia</span>
  <span className="md:mt-2 md:whitespace-nowrap">Osteopatica Integrata</span>
</h1>

<div className="mt-10 md:mt-11">
  <EcmSeal />
</div>

        </div>
      </div>
    </div>
  </div>

  {/* Parte sotto: testo grande + mesi + qualche icona + bottone */}
  <div className="relative mx-auto max-w-6xl px-4 pt-8 pb-10 md:pt-10 md:pb-10">
    <div className="mx-auto max-w-5xl text-center">
      <p className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
        Percorso annuale teorico pratico in 3 moduli progressivi
      </p>

      <p className="mt-2 text-lg font-semibold text-slate-600 md:text-2xl">
        Marzo • Giugno • Ottobre 2026
      </p>

      {/* lascio qualche icona */}
      <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3 text-base text-slate-700 md:text-lg">
        <div className="inline-flex items-center gap-2">
          <MapPin className="h-5 w-5 text-[color:var(--gold)]" />
          <span className="font-semibold">ROMA</span>
          <span className="text-slate-500">• In presenza</span>
        </div>

        
      </div>

      {/* tengo il bottone */}
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href="#programma"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50"
        >
          Vedi il programma
        </a>
      </div>
    </div>

    <div className="mt-8 grid gap-4 md:grid-cols-12 md:items-start">
      <div className="md:col-span-12">
        <div className="grid gap-4 md:grid-cols-2">
          {/* DATE */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-7">
            <div className="flex items-center gap-2 text-xl font-extrabold text-slate-900 md:text-2xl">
              <CalendarDays className="h-6 w-6 text-[color:var(--gold)]" />
              <span className="tracking-tight">{CONTENT.datesTitle}</span>
            </div>
            <ul className="mt-4 space-y-3 text-lg text-slate-700 md:text-xl">
              {CONTENT.dates.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-[color:var(--gold)]">•</span>
                  <span className="font-semibold">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DESTINATARI */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-7">
            <div className="flex items-center gap-2 text-xl font-extrabold text-slate-900 md:text-2xl">
              <Users className="h-6 w-6 text-[color:var(--gold)]" />
              <span className="tracking-tight">{CONTENT.destinatariTitle}</span>
            </div>

            <ul className="mt-4 space-y-3 text-lg font-bold text-slate-800 md:text-xl">
              {CONTENT.destinatariList.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[color:var(--gold)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-3 text-base text-slate-600 md:text-lg">
              Percorso teorico–pratico con esercitazioni guidate
            </p>
          </div>
        </div>

        {/* BANNER promo1 */}
        <div className="mt-4 overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
          <div className="relative h-[220px] sm:h-[250px] md:h-[290px] w-full">
            <Image
              src="/images/promo1.jpeg"
              alt="Trattamento osteopatico"
              fill
              priority
              className="object-cover object-center blur-sm scale-110 opacity-50"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 720px"
            />
            <Image
              src="/images/promo1.jpeg"
              alt="Trattamento osteopatico"
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 720px"
            />

            <div className="absolute inset-0 bg-black/18 md:bg-black/12" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.22)_42%,rgba(0,0,0,0)_74%)] md:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.32)_0%,rgba(0,0,0,0.16)_42%,rgba(0,0,0,0)_74%)]" />

            <div className="absolute inset-0 flex items-center justify-center px-4">
           <div className="w-full max-w-[980px] text-center">
            <p className="mx-auto max-w-[900px] text-[1.35rem] font-extrabold tracking-tight leading-[1.1] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] sm:text-[1.75rem] md:text-[2.75rem] md:leading-[1.08]">
            <span className="block">Oltre ai denti,</span>
            <span className="block">oltre all&apos;ATM.</span>
            </p>

           <div className="mx-auto mt-3 md:mt-4 h-px w-20 bg-white/70" />

          <p className="mx-auto mt-3 max-w-[330px] text-[1rem] font-semibold leading-[1.35] text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.9)] sm:mt-4 sm:max-w-[560px] sm:text-[1.2rem] sm:leading-[1.38] md:max-w-[1080px] md:text-[2rem] md:leading-[1.28]">
           Una visione clinica completa per professionisti che vogliono fare la differenza.
        </p>
      </div>
  </div>
          </div>
        </div>
        {/* fine blocco fino a cui hai chiesto aumento font progressivo continua sotto */}
      </div>
    </div>
  </div>
</section>
      {/* OBIETTIVI + INTEGRAZIONI */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="mx-auto max-w-5xl text-center">
  <p className="text-3xl font-bold tracking-tight leading-tight text-slate-900 sm:text-4xl md:text-5xl">
    Approccio sistemico, interdisciplinare e orientato alle cause.
  </p>
</div>

        <div className="mt-6 md:mt-10 grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7">
            <div className="grid gap-4">
              <div className="rounded-3xl bg-white p-6 shadow-sm md:p-7">
                <div className="flex items-center justify-center gap-2 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
  
  <span>{CONTENT.objectivesTitle}</span>
</div>
                <ul className="mt-5 space-y-4 text-lg leading-relaxed text-slate-700 md:text-xl">
                  {CONTENT.objectives.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                      <span>{renderBoldPhrases(t, OBJECTIVES_BOLD_PHRASES)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm md:p-7">
               <div className="flex items-center justify-center gap-2 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
 
  <span>{CONTENT.integrazioniTitle}</span>
</div>
                <ul className="mt-5 space-y-4 text-lg leading-relaxed text-slate-700 md:text-xl">
                  {CONTENT.integrazioni.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                      <span>{renderBoldPhrases(t, INTEGRAZIONI_BOLD_PHRASES)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/promo2.jpeg"
                  alt="Percorso formativo"
                  fill
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

                <div className="absolute top-8 left-0 right-0 z-20 flex justify-center px-4">
                  <div className="w-full max-w-4xl rounded-2xl bg-black/20 backdrop-blur-sm px-4 py-3">
                    <p className="text-center text-lg italic text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] sm:text-xl md:text-2xl">
                      Imparerai a sviluppare le capacità di ascolto del sistema
                      cranio-sacrale e comprendere la relazione tra lavoro
                      intraorale ed equilibrio generale dell&apos;organismo
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 p-5">
                  <div className="text-lg font-semibold text-[color:var(--gold)] md:text-xl">
                    Focus interdisciplinare
                  </div>
                  <div className="mt-1 text-lg text-white/90 md:text-xl">
                    Odontoiatria • Osteopatia • Medicine integrate
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COSTI E PROMOZIONE */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <SectionTitle
          title="Costi del corso"
          subtitle="Costo standard per modulo + promozione dedicata a chi si iscrive entro la scadenza."
          titleClassName="text-4xl sm:text-5xl md:text-6xl"
          subtitleClassName="text-xl md:text-2xl"
        />

        <div className="mt-2 rounded-[2rem] bg-[color:var(--gold)]/6 px-6 pb-6 pt-3 md:px-8 md:pb-8 md:pt-4">
          <div className="mt-1 grid gap-4 md:grid-cols-2">
            {CONTENT.pricing.map((p) => (
              <div
                key={p.who}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.18)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-3xl md:text-4xl font-black tracking-tight text-slate-950">
                      {p.who}
                    </div>
                    <div className="mt-2 h-1 w-16 rounded-full bg-[color:var(--gold)]/80" />
                    <div className="mt-8 text-lg font-medium text-slate-600 md:text-xl">
                    *Costo per modulo
                    </div>
                  </div>
                  <BadgePercent className="h-7 w-7 text-[color:var(--gold)]" />
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
                  <div className="text-base font-semibold tracking-[0.14em] text-slate-500 md:text-lg">
                    COSTO STANDARD
                  </div>
                  <div className="mt-2 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                    {p.full}
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-[color:var(--gold)]/25 bg-[color:var(--gold)]/8 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-base font-semibold tracking-[0.14em] text-[color:var(--gold)] md:text-lg">
                      IN PROMOZIONE
                    </div>
                    <span className="rounded-full bg-[color:var(--gold)] px-3 py-1 text-base font-semibold text-slate-950 md:text-lg">
                      {p.note}
                    </span>
                  </div>

                  <div className="mt-2 text-lg text-slate-700 md:text-xl">
                    Costo scontato entro{" "}
                    <span className="font-semibold">28 Febbraio 2026</span>
                  </div>

                  <div className="mt-2 text-5xl font-extrabold leading-tight text-[color:var(--gold)] md:text-6xl">
                    {p.promo}
                  </div>

                  <div className="mt-2 inline-flex items-center rounded-full border border-[color:var(--gold)]/30 bg-white px-3 py-1 text-base font-semibold text-[color:var(--gold)] md:text-lg">
                    {p.saving}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner promo3 */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="absolute inset-0">
            <Image
              src="/images/promo3.jpeg"
              alt="Approccio interdisciplinare"
              fill
              className="object-cover object-[50%_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/60 to-transparent" />
            <div
              className="absolute -top-40 left-24 h-[28rem] w-[28rem] rounded-full blur-[140px] opacity-25"
              style={{ background: gold }}
            />
          </div>

          <div className="relative p-8 md:p-10">
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
              Apparato stomatognatico e stabilità clinica
            </h2>
            <p className="mt-3 max-w-2xl font-semibold text-lg text-slate-700">
              Un percorso progressivo per integrare valutazione, terapia manuale,
              dispositivi funzionali e lettura sistemica.
            </p>
          </div>
        </div>
      </section>

      {/* Struttura + ore */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <SectionTitle
          title={CONTENT.structureTitle}
          subtitle={CONTENT.structureIntro}
        />

        <div className="mt-10">
          {/* 3 box ore */}
          <div className="grid gap-4 md:grid-cols-3">
            {CONTENT.hours.map((h) => (
              <div
                key={h.label}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm text-center"
              >
                <div className="text-lg md:text-xl font-extrabold text-slate-900">
                  {h.label}
                </div>
                <div className="mt-2 text-4xl md:text-5xl font-extrabold text-[color:var(--gold)]">
                  {h.value}
                </div>
              </div>
            ))}
          </div>

          {/* BOX ADV ECM ridotto */}
          <div className="mt-4">
            <div className="mx-auto w-full max-w-2xl rounded-3xl bg-[color:var(--gold)] px-6 py-5 md:px-8 md:py-6 text-center shadow-sm">
              <div className="text-3xl md:text-4xl font-extrabold leading-none text-white">
                50 ECM
              </div>

              <div className="mt-2 text-sm md:text-base font-semibold text-white/95">
                Attestato di Partecipazione
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programma moduli */}
      <section
        id="programma"
        className="mx-auto max-w-6xl px-4 pb-14 scroll-mt-28"
      >
        <SectionTitle
          title="I 3 moduli progressivi"
          subtitle="Teoria + esercitazioni pratiche guidate in ogni modulo."
          titleClassName="text-4xl sm:text-5xl md:text-6xl"
          subtitleClassName="text-xl md:text-2xl"
        />

        <div className="mt-4 grid gap-4">
          {CONTENT.modules.map((m) => (
            <div
              key={m.title}
              className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8"
            >
              <div className="text-3xl font-extrabold tracking-tight leading-tight text-slate-900 md:text-4xl">
                {(() => {
                  const [moduloLabel, ...restParts] = m.title.split(" – ");
                  const restTitle = restParts.join(" – ");

                  return (
                    <>
                      <span className="text-[color:var(--gold)]">{moduloLabel}</span>
                      {restTitle ? (
                        <>
                          <span className="mx-1 text-slate-400">–</span>
                          <span>{restTitle}</span>
                        </>
                      ) : null}
                    </>
                  );
                })()}
              </div>
              <p className="mt-3 text-lg leading-relaxed font-semibold text-slate-600 md:text-xl">{m.intro}</p>

              {/* tolti box grigi interni */}
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {m.items.map((t) => (
                  <li key={t} className="flex items-start gap-3 py-1">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                    <span className="text-base text-slate-700 md:text-lg">{t}</span>
                  </li>
                ))}
              </ul>

              {"outro" in m && (m as any).outro ? (
                <p className="mt-5 text-base text-slate-600 md:text-lg">
                  {(m as any).outro}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Docenti */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <SectionTitle
          title={CONTENT.docentiTitle}
          subtitle="Competenze complementari per una lettura realmente integrata."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {CONTENT.docenti.map((d) => (
            <div
              key={d.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-6">
  {/* foto docenti più grandi e uniformate */}
  <div className="relative h-40 w-40 md:h-48 md:w-48 shrink-0 overflow-hidden rounded-2xl bg-transparent">
    <Image
      src={d.img}
      alt={d.name}
      fill
      className={[
        "object-contain",
        "object-center",
        "transition-transform duration-300",
        d.name.includes("Pachi")
          ? "scale-[1.18] md:scale-[1.22] object-[50%_45%]"
          : "scale-[1.05] md:scale-[1.08]",
      ].join(" ")}
      sizes="(max-width: 768px) 160px, 192px"
    />
  </div>

  <div className="min-w-0">
    <div className="text-xl font-semibold text-[color:var(--gold)] md:text-2xl">
      {d.name}
    </div>
    <div className="mt-2 text-base text-slate-700 md:text-lg">
      {d.role}
    </div>
  </div>
</div>
            </div>
          ))}
        </div>

        {/* CTA finale + form */}
        <div
          id="iscrizione"
          className="mt-12 scroll-mt-28 rounded-[2rem] border border-[color:var(--gold)]/25 bg-[color:var(--gold)]/10 p-7 md:p-10"
        >
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6">
              <div className="text-sm font-semibold tracking-[0.22em] text-[color:var(--gold)]">
                ISCRIZIONI
              </div>
              <h3 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
                Vuoi iscriverti o ricevere tutte le info?
              </h3>
              <p className="mt-3 text-lg font-semibold text-slate-700">
                Compila il form: ti ricontattiamo il prima possibile.
              </p>
            </div>

            <div className="md:col-span-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <PrenotaForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/90 p-3 backdrop-blur md:hidden">
        <a
          href="#iscrizione"
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[color:var(--gold)] px-5 py-3 text-sm font-semibold text-slate-950"
        >
          Richiedi info <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="h-20 md:hidden" />
    </div>
  );
}