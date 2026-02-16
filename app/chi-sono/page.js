import Image from "next/image";

export const metadata = {
  title: "Chi sono | Metodo Gold",
  description:
    "Cristina Barni: odontoiatra, specialista in Ortodonzia e Gnatologia. Percorso clinico e visione integrata alla base del Metodo GOLD.",
};

function PersonHeader({ name }) {
  return (
    <div className="flex items-center justify-between gap-4 flex-wrap">
      <p className="text-sm font-semibold text-yellow-600">{name}</p>
      <span className="block h-[1px] flex-1 min-w-[180px] bg-gradient-to-r from-transparent via-yellow-400/35 to-transparent" />
    </div>
  );
}

function PersonSection({
  id,
  imageSrc,
  imageAlt,
  prefix,
  name,
  roleLine,
  children,
}) {
  return (
    <section id={id} className="scroll-mt-28 max-w-5xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* SX: FOTO */}
        <div className="md:col-span-5 space-y-5">
          <div className="rounded-3xl bg-white shadow-sm overflow-hidden">
            <div className="relative w-full aspect-[4/5]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 520px"
                priority={false}
              />
            </div>

            <div className="p-6">
              {prefix ? (
                <p className="text-sm text-gray-500">{prefix}</p>
              ) : null}
              <p className="text-lg font-semibold text-gray-900">{name}</p>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                {roleLine}
              </p>
            </div>
          </div>
        </div>

        {/* DX: TESTO */}
        <div className="md:col-span-7">
          <PersonHeader name={name} />
          <div className="mt-4 text-gray-800 leading-relaxed text-[15.5px] md:text-[16px] space-y-5">
            {children}
          </div>

          <a
            href="#top"
            className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-yellow-700 hover:underline"
          >
            ↑ Torna su
          </a>
        </div>
      </div>
    </section>
  );
}

export default function ChiSonoPage() {
  return (
    <main id="top" className="w-full">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-50 via-white to-white" />
        <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-yellow-600">Chi siamo</h1>
          </div>
        </div>
      </section>

      {/* CRISTINA — BLOCCO 1 */}
      <section className="max-w-5xl mx-auto px-6 pb-10 pt-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* SX */}
          <div className="md:col-span-5 space-y-5">
            <div className="rounded-3xl bg-white shadow-sm overflow-hidden">
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

              <div className="p-6">
                <p className="text-sm text-gray-500">Dott.ssa</p>
                <p className="text-lg font-semibold text-gray-900">
                  Cristina Barni
                </p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  • Odontoiatra • Omeopata • Specialista in Ortodonzia e Gnatologia •
                  Dentosofia • Terapia cranio sacrale • Biomagnetista • Terapie
                  Essene ed Egizie
                </p>

                <div className="mt-5 rounded-2xl bg-yellow-50/80 p-4">
                  <p className="text-sm text-yellow-800 italic leading-relaxed">
                    “Il cuore del mio lavoro è l’ascolto: del corpo, delle funzioni,
                    della postura e della storia del paziente.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DX */}
          <div className="md:col-span-7">
            <PersonHeader name="Cristina Barni" />
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
                <strong>Yoga Kundalini</strong>, che pratico da 18 anni e proseguito
                con esperienze formative orientate a una comprensione più ampia
                dell’essere umano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CRISTINA — BLOCCO 2 (testo lungo, senza tagli) */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="mt-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
  
            <span className="block h-[1px] flex-1 min-w-[180px] bg-gradient-to-r from-transparent via-yellow-400/35 to-transparent" />
          </div>

          <div className="mt-6 text-gray-800 leading-relaxed text-[15.5px] md:text-[16px] space-y-5">
            <p className="border-l-4 border-yellow-600 pl-4">
              Una tappa fondamentale del mio percorso è stata la formazione come Terapista Cranio-Sacrale  presso la scuola Upledger, che mi ha permesso di affinare l’ascolto manuale e la lettura delle relazioni tra cranio, sistema nervoso e adattamenti posturali. Nel 2014 ho incontrato uno strumento che ha segnato una svolta clinica: l’attivatore plurifunzionale, che mi ha permesso di avvicinarmi a un modo di accompagnare il cambiamento più rispettoso dei tempi biologici, basato su forze leggere e su una integrazione più fisiologica.
            </p>

            <p>
              Questa evoluzione mi ha portato ad approfondire la Dentosofia e a completare in seguito la formazione con Michel Montaud, integrando una visione che considera la bocca non solo come struttura, ma come parte di un sistema complesso in cui funzione, postura, sistema nervoso ed emotività dialogano costantemente. Nel 2018 ho conseguito anche il diploma triennale in Omeopatia presso il Centro Omeopatico Italiano Ippocrate (COII) di Roma e ho proseguito la mia formazione in ambito integrato, includendo anche la preparazione come biomagnetista secondo il metodo del Dr. Goiz.
            </p>

            <p>
              Accanto alla clinica, la formazione è diventata una parte sempre più centrale del mio lavoro: negli anni ho tenuto conferenze, seminari ed eventi rivolti a professionisti interessati a una lettura integrata della salute orale e delle disfunzioni stomatognatiche. Oggi porto questa esperienza in percorsi formativi strutturati, con l’obiettivo di trasmettere non solo contenuti, ma un metodo clinico basato su osservazione, integrazione e ascolto.
            </p>

            <p>
              Attualmente svolgo attività come libero professionista in Sardegna. Pur non lavorando più stabilmente a Roma, tornerò per tenere corsi e formazione in collaborazione con Salute Sì, progetto dedicato alla salute in ambito integrato legato a NaturaSì.
            </p>

            <p>
              Il cuore del mio lavoro è l’ascolto: ascolto del corpo, delle funzioni, della postura, ma anche ascolto della storia e della fase di vita del paziente. Credo che una terapia efficace nasca da una diagnosi profonda, e che la diagnosi più accurata sia quella che unisce competenza clinica, osservazione e capacità di cogliere i meccanismi di adattamento dell’organismo. Per questo, accanto agli strumenti odontoiatrici, utilizzo anche metodiche di valutazione funzionale e un approccio kinesiologico personalizzato che mi aiuta a orientare il percorso in modo mirato.
            </p>

            <p>
              I valori che guidano il mio operato sono la responsabilità e l’onestà: verso il paziente, verso la cura e verso la verità clinica del caso. Credo in una comunicazione chiara e rispettosa, capace di rendere comprensibile ciò che facciamo, senza creare dipendenza ma promuovendo consapevolezza. E credo che ogni percorso di salute, se sostenuto con serietà, possa diventare anche un percorso di conoscenza di sé: perché il sintomo spesso non è solo un problema da eliminare, ma un messaggio da comprendere.
            </p>

            <div className="mt-6 rounded-3xl bg-yellow-50/70 p-6">
              <p className="italic text-gray-700 leading-relaxed">
                Credo che una terapia efficace nasca da una diagnosi profonda, capace
                di unire competenza clinica e ascolto dei meccanismi di adattamento
                dell’organismo.
              </p>
            </div>

            <div className="mt-8 rounded-3xl bg-gradient-to-b from-yellow-50 to-white p-7 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                Da questa visione nasce{" "}
                <strong className="text-yellow-700">GOLD</strong>: un metodo e uno
                spazio formativo che integra competenze cliniche e lettura sistemica, con l’intento
                di accompagnare professionisti e pazienti verso un modo più completo, umano e
                coerente di intendere la salute.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="/chi-sono/il-metodo-gold"
                  className="px-6 py-3 rounded-full bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition shadow-sm"
                >
                  Scopri il Metodo GOLD
                </a>
                <a
                  href="/prenota"
                  className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-50 transition shadow-sm"
                >
                  Contattaci per più info
                </a>
              </div>
            </div>

            <a
              href="#top"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-yellow-700 hover:underline"
            >
              ↑ Torna su
            </a>
          </div>
        </div>
      </section>

      {/* FALIVA */}
      <PersonSection
        id="francescafaliva"
        imageSrc="/images/francescafaliva.png"
        imageAlt="Dott.ssa Francesca Faliva"
        prefix=""
        name="Francesca Faliva"
        roleLine="• Osteopata D.O.M.R.O.I. • Docente Osteopatia Craniale • Formatrice in Osteopatia Pediatrica e Biodinamica"
      >
        <p>
          Francesca Faliva è osteopata e svolge la sua attività clinica tra Roma e Lido di Ostia. Dopo la laurea in Scienze Motorie presso l’ISEF di Roma e il diploma presso la Scuola Speciale per Terapisti della Riabilitazione, ha maturato una solida esperienza in ambito sanitario, lavorando anche in struttura ospedaliera e proseguendo parallelamente un percorso di formazione continuativa nell’ambito delle terapie manuali. Nel 1997 ha conseguito il Diploma in Osteopatia presso il C.E.R.D.O. e da allora ha sviluppato un orientamento clinico che integra la tradizione osteopatica con un’attenzione specifica all’area craniale e alla regolazione globale del sistema.
        </p>

        <p>
          Dal 1989 opera come libera professionista presso studi medici e dal 2000 si dedica con continuità anche all’insegnamento, avendo svolto per oltre venticinque anni attività come docente di Osteopatia Craniale. È stata Responsabile del Dipartimento di Osteopatia Craniale del CSOT di Roma e ha approfondito nel tempo, attraverso numerosi percorsi di studio e aggiornamento, anche la formazione in osteopatia pediatrica e l’approccio biodinamico, consolidando una visione integrata della salute e del lavoro sul paziente.
        </p>

        <p>
          È inoltre ideatrice, responsabile e direttrice didattica del progetto Salute Sì, legato a NaturaSì, nato a Roma nel 2026 per la divulgazione delle medicine integrate e la promozione di un dialogo multidisciplinare tra professionisti. All’interno di Salute Sì vengono organizzati corsi ed eventi formativi rivolti a osteopati, medici, odontoiatri e a diverse figure sanitarie, con l’obiettivo di favorire un’integrazione competente tra medicina convenzionale e approcci naturali, mettendo al centro la qualità della formazione e l’efficacia clinica del lavoro in équipe.
        </p>
      </PersonSection>

      {/* PACHÌ */}
<PersonSection
  id="francescopachi"
  imageSrc="/images/francescopachi.png"
  imageAlt="Dott Francesco Pachi"
  prefix="Dott."
  name="Francesco Pachì"
  roleLine="• Odontoiatra • Specialista in Ortodonzia • Docente del Corso di Laurea in Odontoiatria e Protesi Dentaria (Università di Roma Tor Vergata) • Socio ordinario della S.I.D.O. • Dentosofia"
>
  <p>
    Il Dottor Francesco Pachì si occupa di ortodonzia da oltre trent’anni, svolgendo la professione con passione, rigore e costante aggiornamento. Laureato in Odontoiatria e specializzato in Ortodonzia, fa parte del corpo docente del Corso di Laurea in Odontoiatria e Protesi Dentaria dell’Università di Roma Tor Vergata
  </p>

  <p>
    È autore di numerose pubblicazioni scientifiche su riviste nazionali e internazionali e interviene come relatore in congressi in Italia e all’estero, affrontando temi quali ortodonzia, malocclusioni, postura e ortodonzia funzionale. Da più di vent’anni dedica particolare attenzione allo studio delle connessioni tra occlusione e assetto posturale, approfondendo come le disarmonie del morso possano influire sull’equilibrio globale del paziente.
  </p>

  <p>
    Socio ordinario della S.I.D.O. – Società Italiana di Ortodonzia dal 1990, nel corso della sua attività ha sperimentato diversi approcci terapeutici e molte tipologie di apparecchi ortodontici, selezionandoli nel tempo anche in base alle loro implicazioni sul sistema posturale.
  </p>

  <p>
    Parallelamente, ha coltivato un interesse costante per le medicine non convenzionali, tra cui omotossicologia, omeopatia, osteopatia e kinesiologia applicata. La sua ricerca professionale si fonda su una visione dell’essere umano come unità di corpo, pensieri, emozioni, anima e spirito, orientata a integrare questi livelli anche nella pratica ortodontica. In questo senso, riconosce nella dentosofia un modello capace di tradurre in modo concreto un approccio terapeutico più ampio e integrato.
  </p>

  <p>
    Seguendo questa visione, il Professor Pachì promuove un metodo di lavoro collaborativo, guidando le competenze della propria équipe verso un obiettivo condiviso e, quando necessario, valorizzando anche il contributo di altre figure specialistiche, sempre nell’interesse del paziente.
  </p>
</PersonSection>

      {/* SATTA — PARTE 1 */}
      <PersonSection
        id="luigisatta"
        imageSrc="/images/luigisatta.png"
        imageAlt="Dott. Luigi Satta"
        prefix="Dott."
        name="Luigi Satta"
        roleLine="• Medico • Specializzazione in Pediatria • Omeopata • Omotossicologo • Naturopata • Esperto in elettroagopuntura secondo Voll"
      >
        <p>
          Il Dott. Luigi Satta si è laureato in Medicina e Chirurgia presso l’Università degli Studi di Cagliari e, nello stesso Ateneo, ha conseguito la specializzazione in Pediatria presso la II Clinica Pediatrica diretta dal Prof. A. Cao. Ha svolto l’attività di Pediatra di Famiglia nel Comune di San Sperate e nel corso della sua carriera ha maturato un’esperienza ampia e trasversale in diversi ambiti sanitari, ricoprendo ruoli quali medico di continuità assistenziale, medico di medicina generale, ufficiale medico, ufficiale sanitario, medico ospedaliero, specialista consultoriale e specialista poliambulatoriale. È stato inoltre membro del Consiglio Direttivo dell’Ordine dei Medici di Cagliari.
        </p>

        <p>
          Dal 1990 al 2005 ha coordinato la Formazione Permanente dei Pediatri della Sardegna come Esperto in Formazione, ed è stato componente della Commissione Tecnica dell’Assessorato alla Sanità. Ha collaborato con il Ministero della Salute nell’ambito del progetto ECM, svolgendo il ruolo di valutatore dei corsi di formazione dal 2000 al 2011. Nel tempo ha progettato e condotto oltre 30 corsi formativi, attraverso i quali sono stati sviluppati numerosi protocolli operativi per la pediatria di base. In qualità di esperto in VRQ (Verifica e Revisione della Qualità delle Cure), ha fatto parte per più di dieci anni del team logistico della FIMP nazionale, contribuendo alla produzione di pubblicazioni, percorsi formativi e al Manuale per la Qualità del Pediatra di Famiglia.
        </p>

        {/* SATTA — PARTE 2 (testo identico, senza tagli) */}
        
        <div className="mt-6">
  <div className="flex items-center justify-between gap-4 flex-wrap">
  
    <span className="block h-[1px] flex-1 min-w-[180px] bg-gradient-to-r from-transparent via-yellow-400/35 to-transparent" />
  </div>

  <div className="mt-6 text-gray-800 leading-relaxed text-[15.5px] md:text-[16px] space-y-5">
    <p>
      Da circa 25 anni approfondisce e frequenta percorsi di formazione nelle medicine non convenzionali. Nel 2002 ha conseguito il Diploma di Omeopata–Omotossicologo presso la scuola AIOT (Associazione Italiana Omeopati Omotossicologi) e presso la Internationale Gesellschaft Fur Homotoxikologie di Baden-Baden (Germania). La sua ricerca si è orientata in particolare verso omeopatia costituzionale, fitoterapia, agopuntura ed elettroagopuntura secondo Voll (EAV), integrandole con tecniche di kinesiologia applicata e con metodiche di indagine come il test di Schimmel (Vega test), fino ad applicare la metodica Bioelettronica EAVI (Elettroagopuntura di Voll Integrata) secondo Douglas Leber.
    </p>

    <p>
      È membro del Nobile Collegio Omeopatico e ha tenuto numerosi corsi di formazione in omeopatia costituzionale, fitoterapia, omotossicologia ed EAVI. È stato inoltre componente della Commissione per le Medicine non Convenzionali dell’Ordine dei Medici della Provincia di Cagliari e docente di Pediatria e Medicine non Convenzionali presso la Scuola di Formazione in Medicina Generale. Più recentemente ha conseguito anche il diploma in Naturopatia presso il College Naturophatic Medicine. È certificato AJA Europe – Accredia Italia.
    </p>

    <p>
      Attualmente opera come pediatra in libera professione, con un orientamento alla Medicina Integrata, unendo le competenze della medicina accademica alle discipline non convenzionali con l’obiettivo di mettere a disposizione del paziente tutti gli strumenti utili a favorire e mantenere uno stato di salute.
    </p>
  </div>
</div>

      </PersonSection>

      {/* MAZZEI */}
      <PersonSection
        id="teresamazzei"
        imageSrc="/images/teresamazzei.png"
        imageAlt="Dott.ssa Teresa Mazzei"
        name="Teresa Mazzei"
        roleLine="• Euritmista • Arte-terapeuta ad indirizzo antroposofico (Italia) • Pedagogista di Emergenza (Germania)."
      >
        <p>
          Euritmista, con Master of Education Eurythmy (laurea triennale) presso l'Alanus University of Arts and Social Sciences (Germania), specializzazione in Euritmia Igienica (Italia) e in "Eurythmy in working life" (Olanda). Attestato di arte-terapia ad indirizzo antroposofico (Italia) e di Pedagogia di Emergenza (Germania).
        </p>

        <p>
          Lavora come euritmista in diversi contesti (aziende, associazioni, scuole, centri di socioterapia e gruppi amatoriali). Docente di euritmia in diverse realtà formative: nella scuola di formazione in Euritmia a Roma e a Venezia, nel corso per insegnanti Waldorf a Roma, in Academy for Social Art a Mosca. Responsabile e docente del programma di formazione di " Eurythmy for social and working life" in diversi paesi (Mexico, Spagna, Portogallo, Australia).
        </p>
      </PersonSection>

      {/* SHOW TOP — freccia fissa */}
      <a
        href="#top"
        aria-label="Torna su"
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-yellow-600 text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        ↑
      </a>
    </main>
  );
}
