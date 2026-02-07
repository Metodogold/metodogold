import Image from "next/image";

export const metadata = {
  title: "Chi sono | Metodo Gold",
  description:
    "Cristina Barni: odontoiatra, specialista in Ortodonzia e Gnatologia. Percorso clinico e visione integrata alla base del Metodo GOLD.",
};

function InfoCard({ title, children }) {
  return (
    <div className="rounded-3xl border bg-white shadow-sm p-6">
      <p className="text-sm font-semibold text-yellow-700">{title}</p>
      <div className="mt-3 text-gray-700 text-[15px] leading-relaxed space-y-2">
        {children}
      </div>
    </div>
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

export default function ChiSonoPage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 via-white to-white" />
        <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-yellow-600">Chi sono</h1>
            <p className="mt-4 text-gray-700 text-lg leading-relaxed">
              Un percorso clinico e umano che unisce{" "}
              <span className="font-semibold">odontoiatria</span>,{" "}
              <span className="font-semibold">omeopatia</span> e{" "}
              <span className="font-semibold">
                specializzazione in ortodonzia e gnatologia, dentosofia, terapia
                cranio sacrale
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CONTENUTO */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* COLONNA SINISTRA */}
          <div className="md:col-span-5 space-y-6">
            {/* FOTO */}
            <div className="rounded-3xl border bg-white shadow-sm overflow-hidden">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src="/images/chi-sono.png"
                  alt="Dott.ssa Cristina Barni"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 520px"
                  priority
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500">Dott.ssa</p>
                <p className="text-lg font-semibold text-gray-900">
                  Cristina Barni
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Odontoiatra • Specialista in Ortodonzia e Gnatologia • Naturopata • Dentosofia
                  • Terapia cranio sacrale • Biomagnetista • Terapie Essene ed
                  Egizie
                </p>

                <div className="mt-4 rounded-2xl bg-yellow-50 border border-yellow-100 p-4">
                  <p className="text-sm text-yellow-800 italic leading-relaxed">
                    “Il cuore del mio lavoro è l’ascolto: del corpo, delle funzioni,
                    della postura e della storia del paziente.”
                  </p>
                </div>
              </div>
            </div>

            {/* BOX SOTTO FOTO — timeline sintetica */}
            <InfoCard title="In sintesi">
              <ul className="space-y-2">
                <Bullet>
                  <strong>Odontoiatria</strong> (Università di Sassari)
                </Bullet>
                <Bullet>
                  Specializzazione in <strong>Ortodonzia e Gnatologia</strong>{" "}
                 <strong> (Roma – Policlinico A. Gemelli)</strong>
                </Bullet>
                <Bullet>
                  Formazione <strong>Cranio-Sacrale</strong> (Upledger)
                </Bullet>
                <Bullet>
                  Integrazione con <strong>Dentosofia</strong> e{" "}
                  <strong>Attivatore plurifunzionale</strong>
                </Bullet>
                <Bullet>
                  Diploma triennale in <strong>Omeopatia</strong> (COII)
                </Bullet>
                <Bullet>
                  Formazione come <strong>Biomagnetista</strong><strong> (metodo Dr. Goiz)</strong>
                </Bullet>
              </ul>
            </InfoCard>

            {/* BOX SOTTO FOTO — aree di lavoro */}
            <InfoCard title="Cosa porto in clinica">
              <ul className="space-y-2">
                <Bullet>
                  Lettura integrata di{" "}
                  <strong>bocca, postura e sistema nervoso</strong>
                </Bullet>
                <Bullet>
                  Valutazione funzionale + <strong>approccio kinesiologico</strong>
                </Bullet>
                <Bullet>
                  Strumenti per <strong>stabilità</strong>, adattamento e
                  autoregolazione
                </Bullet>
              </ul>
            </InfoCard>
          </div>

          {/* COLONNA DESTRA — TESTO IN BOX */}
          <div className="md:col-span-7 space-y-6">
            <div className="rounded-3xl border bg-white shadow-sm p-7 md:p-9">
              <p className="text-sm font-semibold text-yellow-600">
                Biografia
              </p>

              <div className="mt-4 text-gray-800 leading-relaxed text-[15.5px] md:text-[16px] space-y-5">
                <p>
                  Sono <strong>Cristina Barni</strong>, odontoiatra, specialista in{" "}
                  <strong>Ortodonzia e Gnatologia</strong>. Sono nata a La
                  Maddalena, in Sardegna, e mi sono laureata in{" "}
                  <strong>Odontoiatria e Protesi Dentaria</strong> presso
                  l’Università di Sassari 22 anni fa. Dopo la laurea ho scelto di
                  dedicarmi in modo particolare alle disfunzioni dell’apparato
                  stomatognatico, trasferendomi a Roma per proseguire la mia
                  formazione presso l’Università Cattolica del Sacro Cuore –
                  Policlinico A. Gemelli, dove ho conseguito il Diploma di
                  specializzazione in <strong>Ortodonzia e Gnatologia</strong>.
                </p>

                <p>
                  Quell’esperienza mi ha dato una base solida e rigorosa:
                  l’anatomia, la biomeccanica, la gnatologia clinica e la gestione
                  dei disturbi dell’apparato stomatognatico (come{" "}
                  <strong>
                    bruxismo, serramento, dolori cranio-cervico-facciali, cefalee
                    muscolo-tensive, tensioni mandibolari e disfunzioni dell’ATM
                  </strong>
                  ). Per circa dieci anni ho lavorato a Roma, collaborando con
                  diversi studi e con figure professionali differenti, in un
                  confronto continuo tra clinica, osservazione e integrazione.
                </p>
                <p>
                  Nel tempo, nella pratica quotidiana ho incontrato sempre più
                  pazienti “complessi”: persone in cui i sintomi non erano mai solo
                  locali, e in cui la bocca sembrava dialogare in modo evidente con{" "}
                  <strong>
                    postura, sistema nervoso, respirazione, qualità del sonno e
                    momenti di stress
                  </strong>
                  . È lì che la mia ricerca ha iniziato ad ampliarsi: ho
                  approfondito discipline apparentemente lontane dall’odontoiatria,
                  ma che in realtà mi aiutavano a comprendere meglio ciò che vedevo
                  ogni giorno in studio. Parallelamente ho intrapreso un percorso
                  personale di consapevolezza, iniziato con lo{" "}
                  <strong>Yoga Kundalini</strong>, che pratico da 18 anni e proseguito con esperienze formative orientate a una comprensione più ampia dell’essere umano.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border bg-white shadow-sm p-7 md:p-9">
              <p className="text-sm font-semibold text-yellow-600">
                Competenze integrate e formazione
              </p>

              <div className="mt-4 text-gray-800 leading-relaxed text-[15.5px] md:text-[16px] space-y-5">
                <p>
                  Una tappa fondamentale del mio percorso è stata la formazione come{" "}
                  <strong>Terapista Cranio-Sacrale</strong> presso la scuola <strong>
                  Upledger</strong>, che mi ha permesso di affinare l’ascolto manuale e la
                  lettura delle relazioni tra cranio, sistema nervoso e adattamenti
                  posturali. Nel 2014 ho incontrato uno strumento che ha segnato una
                  svolta clinica: l’<strong>attivatore plurifunzionale</strong>, che
                  mi ha permesso di avvicinarmi a un modo di accompagnare il
                  cambiamento più rispettoso dei tempi biologici, basato su forze
                  leggere e su una integrazione più fisiologica.
                </p>
                <p>
                  Questa evoluzione mi ha portato ad approfondire la{" "}
                  <strong>Dentosofia</strong> e a completare in seguito la formazione
                  con <strong>Michel Montaud</strong>, integrando una visione che considera la bocca
                  non solo come struttura, ma come parte di un sistema complesso in
                  cui <strong>funzione, postura, sistema nervoso ed emotività</strong>{" "}
                  dialogano costantemente. Nel 2018 ho conseguito anche il <strong>diploma
                  triennale in Omeopatia</strong> presso il <strong>Centro Omeopatico
                  Italiano Ippocrate (COII) </strong>di Roma e ho proseguito la mia
                  formazione, includendo anche la preparazione come{" "}
                  <strong>biomagnetista</strong> secondo il <strong>metodo del Dr. Goiz</strong>.
                </p>

                <p>
                  Accanto alla clinica, la <strong>formazione </strong>è diventata una parte sempre
                  più centrale del mio lavoro: negli anni ho tenuto{" "}
                  <strong>conferenze, seminari ed eventi</strong> rivolti a
                  professionisti interessati a una lettura integrata della salute
                  orale e delle disfunzioni stomatognatiche. Oggi porto questa
                  esperienza in percorsi formativi strutturati, con l’obiettivo di
                  trasmettere non solo contenuti, ma un metodo clinico basato su{" "}
                  <strong>osservazione, integrazione e ascolto</strong>.
                </p>

                <p>
                  Attualmente svolgo attività come libero professionista in
                  Sardegna. Pur non lavorando più stabilmente a Roma, <strong>tornerò per
                  tenere corsi e formazione in collaborazione con{" "}
                  Salute Sì</strong>, progetto dedicato alla salute in
                  ambito integrato legato a NaturaSì.
                </p>

                <div className="border-l-4 border-yellow-600 pl-4 italic text-gray-600">
                  Credo che una terapia efficace nasca da una diagnosi profonda, e
                  che la diagnosi più accurata sia quella che unisce competenza
                  clinica, osservazione e capacità di cogliere i meccanismi di
                  adattamento dell’organismo.
                </div>

                <p>
                  Per questo, accanto agli strumenti odontoiatrici, utilizzo anche
                  metodiche di valutazione funzionale e un{" "}
                  <strong>approccio kinesiologico personalizzato</strong> che mi
                  aiuta a orientare il percorso in modo mirato.
                </p>

                <p>
                  I valori che guidano il mio operato sono la{" "}
                  <strong>responsabilità</strong> e l’<strong>onestà</strong>: verso
                  il paziente, verso la cura e verso la verità clinica del caso.
                  Credo in una comunicazione chiara e rispettosa, capace di rendere
                  comprensibile ciò che facciamo, senza creare dipendenza ma
                  promuovendo consapevolezza. E credo che ogni percorso di salute,
                  se sostenuto con serietà, possa diventare anche un percorso di
                  conoscenza di sé: perché il sintomo spesso non è solo un problema
                  da eliminare, ma <strong>un messaggio da comprendere</strong>.
                </p>

                <p>
                  Da questa visione nasce il progetto{" "}
                  <strong className="text-yellow-700">GOLD</strong>, un metodo e uno
                  spazio formativo che integra competenze cliniche e lettura
                  sistemica, con l’intento di accompagnare professionisti e pazienti
                  verso un modo più completo, umano e coerente di intendere la
                  salute.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/chi-sono/il-metodo-gold"
                    className="px-6 py-3 rounded-full bg-yellow-600 text-white font-semibold hover:scale-[1.01] transition shadow-sm"
                  >
                    Scopri il Metodo GOLD
                  </a>
                  <a
                    href="/prenota"
                    className="px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-900 font-semibold hover:bg-gray-50 transition"
                  >
                    Contattaci per più info
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
