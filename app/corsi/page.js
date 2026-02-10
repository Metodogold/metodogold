import Link from "next/link";

export const metadata = {
  title: "Corsi | Metodo Gold",
  description:
    "Corsi e formazione Metodo Gold: gnatologia integrata, osteopatia, approccio multidisciplinare. Programmi, date e iscrizioni.",
};

const CORSI = [
  {
    href: "/corsi#gnatologia",
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
      { label: "Mod. 1", anchor: "#modulo-1", title: "27–28–29 Marzo" },
      { label: "Mod. 2", anchor: "#modulo-2", title: "19–20–21 Giugno" },
      { label: "Mod. 3", anchor: "#modulo-3", title: "9–10–11 Ottobre" },
    ],
  },
];

function Bullet({ children }) {
  return (
    <li className="flex gap-2">
      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-yellow-600 shrink-0" />
      <span>{children}</span>
    </li>
  );
}

/** ✅ MODULI PICCOLI SOPRA HERO: lasciati come box piccoli, SENZA immagini */
function ModuleCard({ idx, m }) {
  const badgeClass =
    idx === 0
      ? "bg-yellow-600 text-white"
      : idx === 1
      ? "bg-yellow-500 text-white"
      : "bg-yellow-700 text-white";

  return (
    <a
      href={m.anchor}
      title={`Modulo ${idx + 1} — ${m.title}`}
      className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-sm px-6 py-5 shadow-sm hover:bg-white/15 transition"
    >
      <div className="relative flex items-center gap-4">
        <span
          className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${badgeClass} font-extrabold text-lg shadow-sm`}
        >
          {idx + 1}
        </span>

        <div className="leading-tight">
          <p className="text-white font-extrabold text-base sm:text-lg">
            Modulo {idx + 1}
          </p>
          <p className="mt-1 text-white/90 text-sm sm:text-[15px] font-semibold whitespace-nowrap">
            {m.title}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function CorsiPage() {
  const corso = CORSI[0];

  return (
    <main className="w-full bg-white relative">
      <div id="top" />

      {/* SHOW TOP — freccia fissa */}
<a
  href="#top"
  aria-label="Torna su"
  className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-yellow-600 text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
>
  ↑
</a>


      {/* HERO FULL-WIDTH */}
      <section className="bg-white">
        {/* immagine full-bleed */}
        <div className="relative w-full">
          <img
            src="/images/gnatologia-hero.png"
            alt="Trattamento osteopatico mandibola"
            className="w-full h-[320px] sm:h-[420px] md:h-[460px] object-cover"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

          {/* testo sopra immagine (più in alto) */}
          <div className="absolute inset-0">
            <div className="max-w-6xl mx-auto px-6 h-full">
              <div className="pt-10 sm:pt-14 md:pt-16 max-w-4xl">
                <p className="text-white/95 text-sm font-semibold">
                  Formazione Metodo Gold
                </p>
                <p className="mt-1 text-white/85 text-sm font-semibold">2026</p>

                <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                  Corso di Gnatologia Osteopatica Integrata
                </h1>

                <p className="mt-4 text-white/90 text-base sm:text-lg font-semibold">
                  Una visione sistemica dell’apparato stomatognatico
                </p>
              </div>

              {/* MODULI PICCOLI (NO immagini) */}
              <div className="mt-8 max-w-5xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {corso.modules.map((m, idx) => (
                    <ModuleCard key={m.label} idx={idx} m={m} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra info sotto hero */}
        <div className="w-full bg-slate-100/70">
          <div className="max-w-6xl mx-auto px-6">
            <div className="py-5 flex items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3 text-slate-700 font-semibold">
                <span className="px-4 py-2 rounded-full bg-white border border-slate-200">
                  ROMA
                </span>
                <span className="px-4 py-2 rounded-full bg-white border border-slate-200">
                  CORSO ANNUALE
                </span>
              </div>

              <div className="shrink-0">
                <div className="px-6 py-3 rounded-2xl bg-yellow-600 text-white shadow-sm">
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight">
                    50 ECM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENUTO (tutto invariato) */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-12">
        <section
          id="gnatologia"
          className="max-w-4xl"
          style={{ scrollMarginTop: 120 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Una visione sistemica dell’apparato stomatognatico
          </h2>

          <p className="mt-3 text-gray-700 leading-relaxed">
            Nella pratica odontoiatrica moderna il paziente gnatologico è sempre
            più spesso un paziente complesso. Sintomi che migrano, compensi che
            si riorganizzano, trattamenti tecnicamente corretti che non sempre
            conducono a una reale stabilità clinica nel tempo. Questo accade
            quando l’apparato stomatognatico viene osservato come un sistema
            isolato, senza considerare il dialogo continuo con la postura, il
            sistema nervoso, il sistema cranio-sacrale e i meccanismi di
            adattamento dell’organismo.
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            Il Corso di Gnatologia Osteopatica Integrata nasce dall’esigenza di
            superare questa frammentazione, offrendo all’odontoiatra una lettura
            sistemica, funzionale e ampliata della gnatologia, applicabile
            concretamente nella pratica clinica quotidiana
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            Visione del corso
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <Bullet>
              La bocca non è un distretto isolato, ma una vera e propria porta di
              ingresso al sistema.
            </Bullet>

            <Bullet>
              L’occlusione dialoga costantemente con il sistema nervoso centrale e
              autonomo, con la postura, con le catene miofasciali, con la
              dimensione emotiva del paziente e con le sue capacità di
              adattamento.
            </Bullet>

            <li className="flex gap-2">
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-yellow-600 shrink-0" />
              <div>
                <span>
                  Il corso propone una integrazione reale tra gnatologia,
                  osteopatia e medicina integrata, includendo anche:
                </span>

                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <Bullet>Una lettura antroposofica dell’essere umano</Bullet>
                  <Bullet>La correlazione tra denti, funzione ed emotività</Bullet>
                  <Bullet>
                    L’utilizzo dell’omeopatia come supporto nei percorsi clinici
                    complessi
                  </Bullet>
                  <Bullet>
                    L’aiuto delle medicine complementari come strumenti di
                    comprensione più profondi del paziente gnatologico
                  </Bullet>
                </ul>
              </div>
            </li>
          </ul>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            Obiettivo del corso
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <Bullet>
              Utilizzare dei dispositivi gnatologici e ortodontici funzionali che,
              con le opportune modifiche durante il corso della terapia, possono
              modificare la struttura della bocca del paziente utilizzando degli
              input leggeri e fisiologici.
            </Bullet>
            <Bullet>
              Migliorare la qualità della valutazione clinica cercando le cause
              delle disfunzioni.
            </Bullet>
            <Bullet>Comprendere compensi e adattamenti del paziente.</Bullet>
          </ul>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Nella pratica gnatologica tradizionale lo splint gnatologico (bite)
            viene spesso utilizzato come strumento di rilassamento muscolare e di
            gestione del sintomo. Sebbene possa essere utile in una fase iniziale,
            esso agisce prevalentemente sul compenso, senza intervenire in modo
            diretto sulle cause profonde della disfunzione.
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            I dispositivi funzionali, invece, permettono, attraverso le giuste
            modifiche, integrate al funzionamento del sistema cranio sacrale, di
            lavorare sull’intero sistema stomatognatico, favorendo un’apertura e
            una riorganizzazione più globale e funzionale. Attraverso l’utilizzo
            di forze deboli e rispettose dei tempi biologici, essi consentono una
            modifica progressiva e meno invasiva rispetto agli apparecchi
            ortodontici tradizionali, facilitando un’integrazione più fisiologica
            e stabile del cambiamento.
          </p>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            A chi è rivolto
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <Bullet>Odontoiatri</Bullet>
            <Bullet>
              Medici
            </Bullet>
            <Bullet>Osteopati</Bullet>
            <Bullet>Fisioterapisti</Bullet>
            <Bullet>Logopedisti</Bullet>
            <Bullet>Optometristi</Bullet>
             <Bullet>Posturologi</Bullet>
          </ul>

          <p className="mt-4 text-gray-700 leading-relaxed">
            È indicato per professionisti che:
          </p>

          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <Bullet>lavorano con pazienti gnatologici complessi</Bullet>
            <Bullet>
              desiderano integrare la visione occlusale con una lettura sistemica
            </Bullet>
            <Bullet>
              sono disponibili a confrontarsi con modelli interpretativi
              multidisciplinari
            </Bullet>
          </ul>

          <h3 className="mt-7 text-xl font-semibold text-gray-900">
            Struttura del corso
          </h3>

          <p className="mt-3 text-gray-700 leading-relaxed">
            Il corso si svolge in presenza ed è articolato in tre moduli
            progressivi, pensati come un unico percorso formativo coerente.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/prenota"
              className="px-6 py-3 rounded-full bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition shadow-sm"
            >
              Scrivici
            </Link>
          </div>
        </section>
      </section>

      {/* SEZIONI MODULI + METODO */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
  <div className="max-w-4xl">
   <div className="text-center mt-2">
            <div className="mt- flex justify-center">
            </div>
          </div>

          <div className="mt-0 space-y-9">
            {/* ====== STILE HEADER UNICO (per tutti) ====== */}
            {/* MODULO 1 */}
            <section
              id="modulo-1"
              className="scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-7 md:p-9 shadow-sm"
            >
              <div className="rounded-2xl border border-yellow-200 bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 p-5 md:p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black/20 text-white font-extrabold tracking-widest uppercase text-xs">
                    Modulo 1
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/15 text-white font-bold text-sm">
                    27–28–29 Marzo 2026
                  </span>
                </div>

                <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Fondamenti clinici e sistemici
                </h3>
              </div>

              <p className="mt-5 text-gray-700 leading-relaxed">
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

              {/* ✅ Torna su alla fine del box */}
              <div className="mt-6 flex justify-end">
                <a
                  href="#top"
                  className="text-sm font-extrabold text-yellow-700 hover:underline"
                >
                  ↑ Torna su
                </a>
              </div>
            </section>

            {/* MODULO 2 */}
            <section
              id="modulo-2"
              className="scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-7 md:p-9 shadow-sm"
            >
              <div className="rounded-2xl border border-yellow-200 bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 p-5 md:p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black/20 text-white font-extrabold tracking-widest uppercase text-xs">
                    Modulo 2
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/15 text-white font-bold text-sm">
                    19–20–21 Giugno 2026
                  </span>
                </div>

                <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Integrazione neuro-funzionale e riabilitazione occlusale
                </h3>
              </div>

              <p className="mt-5 text-gray-700 leading-relaxed">
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

              <div className="mt-6 flex justify-end">
                <a
                  href="#top"
                  className="text-sm font-extrabold text-yellow-700 hover:underline"
                >
                  ↑ Torna su
                </a>
              </div>
            </section>

            {/* MODULO 3 */}
            <section
              id="modulo-3"
              className="scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-7 md:p-9 shadow-sm"
            >
              <div className="rounded-2xl border border-yellow-200 bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-500 p-5 md:p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-black/20 text-white font-extrabold tracking-widest uppercase text-xs">
                    Modulo 3
                  </span>
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/15 text-white font-bold text-sm">
                    9–10–11 Ottobre 2026
                  </span>
                </div>

                <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Integrazione avanzata, emotività e stabilità clinica
                </h3>
              </div>

              <p className="mt-5 text-gray-700 leading-relaxed">
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

              <div className="mt-5 rounded-2xl border border-yellow-200 bg-yellow-50/85 p-5">
                <p className="text-sm text-yellow-900 leading-relaxed">
                  Il modulo fornisce strumenti di lettura avanzata per comprendere
                  perché alcuni trattamenti non si stabilizzano e come intervenire
                  in modo più consapevole.
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <a
                  href="#top"
                  className="text-sm font-extrabold text-yellow-700 hover:underline"
                >
                  ↑ Torna su
                </a>
              </div>
            </section>

            {/* METODO DIDATTICO */}
            <section className="rounded-3xl border border-gray-200 bg-white p-7 md:p-9 shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Metodo didattico
              </h3>
              <p className="mt-3 text-gray-700 leading-relaxed">Il corso integra:</p>
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
                  Prenota
                </Link>

                <Link
                  href="/corsi#gnatologia"
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
              Vuoi capire se è il corso giusto per te?
            </h3>
            <p className="mt-2 text-gray-600">
              Scrivici: ti orientiamo in base al tuo caso e al tuo livello.
            </p>

            <div className="mt-6 flex justify-center">
              <Link
                href="/prenota"
                className="px-6 py-3 rounded-full bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition shadow-sm"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
