import Link from "next/link";

export const metadata = {
  title: "Corsi | Metodo Gold",
  description:
    "Corsi e formazione Metodo Gold: gnatologia integrata, osteopatia, approccio multidisciplinare. Programmi, date e iscrizioni.",
};

const CORSI = [
  {
    href: "/corsi/gnatologia",
    title: "Gnatologia Osteopatica Integrata 2026",
    subtitle: "Una visione sistemica dell’apparato stomatognatico",
    level: "Corso annuale",
    duration: "3 moduli",
    audience:
      "Odontoiatri / Medici / Osteopati / Fisioterapisti / Logopedisti / Optometristi",
    highlights: [
      "Visione sistemica del paziente gnatologico",
      "Integrazione reale con osteopatia e medicina integrata",
      "Strumenti clinici applicabili da subito",
    ],
    modules: [
      {
        label: "Mod. 1",
        anchor: "#modulo-1",
        title: "27-28-29 Marzo",
      },
      {
        label: "Mod. 2",
        anchor: "#modulo-2",
        title: "19-20-21 Giugno",
      },
      {
        label: "Mod. 3",
        anchor: "#modulo-3",
        title: "19–20–21 Giugno",
      },
    ],
  },
];

function Pill({ children }) {
  return (
    <span className="text-[12px] px-3 py-1 rounded-full border border-yellow-200 bg-yellow-50 text-yellow-800">
      {children}
    </span>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex gap-2">
      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-yellow-600 shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export default function CorsiPage() {
  const corso = CORSI[0];

  return (
    <main className="w-full">
      <div id="top" />

      {/* HERO + CARD CORSO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 via-white to-white" />

        <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight text-yellow-600 text-balance">
              Corsi per professionisti che lavorano con una visione integrata
            </h1>

            <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-yellow-700 bg-yellow-100/70 px-4 py-2 rounded-full">
              Formazione Metodo Gold
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-600 inline-block" />
              2026
            </p>
          </div>

          {/* CARD */}
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="rounded-3xl border bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-left">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div className="min-w-0">
                  <div className="flex flex-wrap gap-2">
                    <Pill>{corso.level}</Pill>
                    <Pill>{corso.duration}</Pill>
                    {corso.badge ? (
                      <span className="text-[12px] px-3 py-1 rounded-full bg-yellow-600 text-white">
                        {corso.badge}
                      </span>
                    ) : null}
                  </div>

                  {/* TITOLO cliccabile */}
                  <Link
                    href={corso.href}
                    className="mt-5 inline-block text-2xl md:text-3xl font-semibold text-gray-900 hover:text-yellow-700 transition"
                  >
                    {corso.title}
                  </Link>

                  <p className="mt-2 text-gray-600 text-[15.5px] md:text-[16px]">
                    {corso.subtitle}
                  </p>

                  {/* MODULI (NUOVA GRAFICA): box leggermente colorato, testo su una riga, niente "Vai" */}
                  <div className="mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {corso.modules.map((m) => (
                        <a
                          key={m.label}
                          href={m.anchor}
                          className="group rounded-2xl border border-yellow-100 bg-yellow-50/60 px-4 py-3 hover:bg-yellow-50 hover:border-yellow-200 transition"
                        >
                          {/* una riga sola */}
                          <div className="flex items-center justify-between gap-3 whitespace-nowrap">
                            <span className="text-sm font-semibold text-gray-900 group-hover:text-yellow-800 transition">
                              {m.label}
                            </span>

                            {/* data con più enfasi */}
                            <span className="text-sm font-semibold text-yellow-800">
                              {m.date}
                            </span>
                          </div>

                          {/* micro titolo sotto (equilibrio) */}
                          <p className="mt-1 text-[13px] text-gray-600 leading-snug">
                            {m.title}
                          </p>
                        </a>
                      ))}
                    </div>
                  </div>

                  <p className="mt-5 text-sm font-semibold">
                    Destinatari:{" "}
                    <span className="text-gray-500 font-medium">
                      {corso.audience}
                    </span>
                  </p>
                </div>

                {/* CTA DESCRIZIONE COMPLETA */}
                <div className="shrink-0">
                  <Link
                    href={corso.href}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition shadow-sm whitespace-nowrap"
                  >
                    Descrizione completa
                  </Link>
                </div>
              </div>

              <div className="mt-7 border-t pt-6">
                <p className="text-sm font-semibold text-gray-900">
                  Cosa porti a casa:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  {corso.highlights.map((h) => (
                    <Bullet key={h}>{h}</Bullet>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* MINI TRUST */}
          <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border bg-white p-4 text-center">
              <p className="text-sm text-gray-500">Approccio</p>
              <p className="font-semibold text-gray-900">Multidisciplinare</p>
            </div>
            <div className="rounded-2xl border bg-white p-4 text-center">
              <p className="text-sm text-gray-500">Focus</p>
              <p className="font-semibold text-gray-900">Clinica reale</p>
            </div>
            <div className="rounded-2xl border bg-white p-4 text-center">
              <p className="text-sm text-gray-500">Metodo</p>
              <p className="font-semibold text-gray-900">Sistemico</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONI MODULI + METODO */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mt-2">
            <div className="mt-5 flex justify-center">
              <span className="block w-72 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
            </div>
          </div>

          <div className="mt-10 space-y-9">
            {/* MODULO 1 */}
            <section
              id="modulo-1"
              className="scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-7 md:p-9 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-widest uppercase text-yellow-700 bg-yellow-100/70 px-3 py-1 rounded-full">
                    Modulo 1
                  </span>
                  <span className="text-sm font-semibold text-yellow-800">
                    27–28–29 Marzo 2026
                  </span>
                </div>

                <a
                  href="#top"
                  className="text-sm font-semibold text-yellow-700 hover:underline"
                >
                  ↑ Torna su
                </a>
              </div>

              <h3 className="mt-4 text-xl md:text-2xl font-semibold text-gray-900">
                Fondamenti clinici e sistemici
              </h3>

              <p className="mt-3 text-gray-700 leading-relaxed">
                Il primo modulo fornisce le basi anatomiche, fisiologiche e
                funzionali per una lettura integrata dell’apparato stomatognatico
                inserito nel contesto cranio-sacrale.
              </p>

              <div className="mt-5 rounded-2xl bg-gray-50 border border-gray-200 p-5">
                <p className="text-sm font-semibold text-gray-900">
                  Vengono affrontati:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <Bullet>
                    fondamenti di anatomia e fisiologia del sistema cranio-sacrale
                  </Bullet>
                  <Bullet>mobilità cranica e meccanismo respiratorio primario</Bullet>
                  <Bullet>ascolto palpatorio e valutazione funzionale</Bullet>
                  <Bullet>
                    inquadramento delle malocclusioni e delle disfunzioni
                    gnatologiche
                  </Bullet>
                  <Bullet>
                    utilizzo dei dispositivi funzionali in una visione sistemica
                  </Bullet>
                  <Bullet>
                    concetto di odontone come unità anatomo-funzionale inserita in
                    un sistema complesso
                  </Bullet>
                </ul>
              </div>

              <p className="mt-5 text-sm text-gray-600 italic">
                Il modulo alterna teoria ed esercitazioni pratiche guidate.
              </p>
            </section>

            {/* MODULO 2 */}
            <section
              id="modulo-2"
              className="scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-7 md:p-9 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-widest uppercase text-yellow-700 bg-yellow-100/70 px-3 py-1 rounded-full">
                    Modulo 2
                  </span>
                  <span className="text-sm font-semibold text-yellow-800">
                    16–17 Maggio 2026
                  </span>
                </div>

                <a
                  href="#top"
                  className="text-sm font-semibold text-yellow-700 hover:underline"
                >
                  ↑ Torna su
                </a>
              </div>

              <h3 className="mt-4 text-xl md:text-2xl font-semibold text-gray-900">
                Integrazione neuro-funzionale e riabilitazione occlusale
              </h3>

              <p className="mt-3 text-gray-700 leading-relaxed">
                Il secondo modulo entra nel cuore dell’integrazione clinica,
                approfondendo le relazioni tra apparato stomatognatico, postura e
                sistema nervoso.
              </p>

              <div className="mt-5 rounded-2xl bg-gray-50 border border-gray-200 p-5">
                <p className="text-sm font-semibold text-gray-900">
                  Il modulo è dedicato a:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <Bullet>
                    relazione tra cranio, mandibola e articolazioni
                    temporo-mandibolari
                  </Bullet>
                  <Bullet>adattamenti posturali e compensi</Bullet>
                  <Bullet>
                    sistema nervoso autonomo simpatico e parasimpatico e funzioni
                    neurovegetative della bocca
                  </Bullet>
                  <Bullet>
                    Riabilitazione Neuro-Occlusale secondo Planas, con studio degli
                    angoli funzionali masticatori e utilizzo delle piste di Planas
                  </Bullet>
                  <Bullet>
                    ruolo della bocca nei processi di neuroplasticità e nelle
                    disfunzioni neurologiche
                  </Bullet>
                  <Bullet>il ruolo della terapia logopedica e miofunzionale</Bullet>
                </ul>
              </div>

              <p className="mt-5 text-sm text-gray-600 italic">
                Il modulo alterna teoria ed esercitazioni pratiche guidate.
              </p>
            </section>

            {/* MODULO 3 */}
            <section
              id="modulo-3"
              className="scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-7 md:p-9 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-widest uppercase text-yellow-700 bg-yellow-100/70 px-3 py-1 rounded-full">
                    Modulo 3
                  </span>
                  <span className="text-sm font-semibold text-yellow-800">
                    19–20–21 Giugno 2026
                  </span>
                </div>

                <a
                  href="#top"
                  className="text-sm font-semibold text-yellow-700 hover:underline"
                >
                  ↑ Torna su
                </a>
              </div>

              <h3 className="mt-4 text-xl md:text-2xl font-semibold text-gray-900">
                Integrazione avanzata, emotività e stabilità clinica
              </h3>

              <p className="mt-3 text-gray-700 leading-relaxed">
                Il terzo modulo è dedicato alla gestione dei casi complessi e alla
                stabilità dei risultati nel tempo, ampliando ulteriormente la
                lettura clinica.
              </p>

              <div className="mt-5 rounded-2xl bg-gray-50 border border-gray-200 p-5">
                <p className="text-sm font-semibold text-gray-900">
                  Vengono approfonditi:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <Bullet>ruolo delle fasce e delle catene miofasciali</Bullet>
                  <Bullet>interferenze corporee e cicatrici</Bullet>
                  <Bullet>correlazione tra denti, sistema nervoso ed emotività</Bullet>
                  <Bullet>
                    contributi antroposofici alla lettura dell’apparato
                    stomatognatico
                  </Bullet>
                  <Bullet>
                    utilizzo dell’omeopatia come supporto nei percorsi clinici
                    complessi
                  </Bullet>
                  <Bullet>
                    il ruolo dei recettori oculari nella propriocezione posturale
                  </Bullet>
                </ul>
              </div>

              <div className="mt-5 rounded-2xl border border-yellow-200 bg-yellow-50 p-5">
                <p className="text-sm text-yellow-900 leading-relaxed">
                  Il modulo fornisce strumenti di lettura avanzata per comprendere
                  perché alcuni trattamenti non si stabilizzano e come intervenire
                  in modo più consapevole.
                </p>
              </div>
            </section>

            {/* METODO DIDATTICO */}
            <section className="rounded-3xl border border-gray-200 bg-white p-7 md:p-9 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Metodo didattico
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Il corso integra:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <Bullet>lezioni teoriche strutturate</Bullet>
                <Bullet>esercitazioni pratiche</Bullet>
                <Bullet>osservazione e discussione di casi clinici</Bullet>
                <Bullet>
                  momenti di esperienza percettiva utili a sviluppare capacità di
                  ascolto e valutazione
                </Bullet>
              </ul>
              <p className="mt-5 text-gray-700 leading-relaxed">
                L’obiettivo è rendere il partecipante più autonomo, più consapevole
                e più efficace nella gestione clinica del paziente gnatologico.
              </p>
            </section>

            {/* PRATICA CLINICA */}
            <section className="rounded-3xl border border-gray-200 bg-white p-7 md:p-9 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Cosa porta nella pratica clinica
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Al termine del percorso il partecipante avrà sviluppato:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <Bullet>una lettura sistemica dell’apparato stomatognatico</Bullet>
                <Bullet>maggiore capacità di valutazione dei compensi</Bullet>
                <Bullet>
                  comprensione dell’influenza neurovegetativa ed emotiva degli
                  interventi in bocca
                </Bullet>
                <Bullet>strumenti per migliorare la stabilità dei trattamenti</Bullet>
                <Bullet>una visione più ampia, coerente e integrata del paziente</Bullet>
              </ul>
            </section>

            {/* CONCLUSIONE */}
            <section className="rounded-3xl border border-yellow-200 bg-gradient-to-b from-yellow-50 to-white p-7 md:p-9 shadow-sm">
              <p className="text-[13px] font-semibold tracking-widest uppercase text-yellow-700">
                Conclusione
              </p>

              <h3 className="mt-3 text-xl md:text-2xl font-semibold text-gray-900">
                La gnatologia è una chiave di lettura del sistema
              </h3>

              <p className="mt-3 text-gray-700 leading-relaxed">
                Non è solo una questione di denti: è comprensione, integrazione e
                stabilità clinica nel tempo. Questo corso è pensato per
                professionisti che desiderano vedere di più, comprendere meglio e
                trattare con maggiore consapevolezza.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/prenota"
                  className="px-6 py-3 rounded-full bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition shadow-sm"
                >
                  Prenota un contatto
                </Link>
                <Link
                  href={corso.href}
                  className="px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-900 font-semibold hover:bg-gray-50 transition"
                >
                  Vai alla descrizione completa
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="border-t bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="rounded-3xl bg-white border p-8 md:p-10 text-center">
            <h3 className="text-2xl font-semibold text-gray-900">
              Vuoi capire qual è il corso giusto per te?
            </h3>
            <p className="mt-2 text-gray-600">
              Scrivici: ti orientiamo in base al tuo caso e al tuo livello.
            </p>

            <div className="mt-6 flex justify-center">
              <Link
                href="/prenota"
                className="px-6 py-3 rounded-full bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition shadow-sm"
              >
                Prenota un contatto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
