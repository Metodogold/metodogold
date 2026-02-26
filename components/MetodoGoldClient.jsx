"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function MetodoGoldClient() {
  const [showTop, setShowTop] = useState(false);

  const voci = [
    { label: "GNATOLOGIA", id: "gnatologia" },
    { label: "OSTEOPATIA", id: "osteopatia" },
    { label: "LOGOPEDIA", id: "logopedia" },
    { label: "DENTOSOFIA", id: "dentosofia" },
  ];

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="w-full">
  

    {/* HERO BANNER (responsive: mobile + desktop) */}
<section className="w-full">
  {/* MOBILE: banner strip (non tagliato) */}
  <Image
    src="/images/metodo-gold-banner.jpg"
    alt="Metodo Gold - Aligning all parts of yourself"
    width={1600}
    height={250}
    priority
    sizes="100vw"
    className="block w-full h-auto md:hidden"
  />

  {/* DESKTOP+: banner completo (non tagliato) */}
  <Image
    src="/images/banner-metodo.png"
    alt="Metodo Gold - Aligning all parts of yourself"
    width={1901}
    height={547}
    priority
    sizes="100vw"
    className="hidden w-full h-auto md:block"
  />
</section>




      {/* CONTENUTO */}
      <section className="max-w-4xl mx-auto px-6 pt-8 pb-24">
        

       {/* 4 VOCI LINKABILI */}
<div className="flex flex-wrap justify-center gap-6 md:gap-10 text-base sm:text-[17px] md:text-lg font-semibold text-slate-700 mb-10">
  {voci.map((voce) => {
    const first = voce.label.slice(0, 1);
    const rest = voce.label.slice(1);

    return (
      <a
        key={voce.id}
        href={`#${voce.id}`}
        className="group relative px-2 py-1.5 tracking-wide transition-colors hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50 rounded-md"
      >
        <span className="text-[#D4AF37] font-bold">{first}</span>
        {rest}

        {/* sfumatura “gold” sotto */}
        <span className="pointer-events-none absolute left-1/2 top-full mt-1 h-[3px] w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#B8860B]/0 via-[#D4AF37]/70 to-[#F2D06B]/0 opacity-70 transition-all duration-300 group-hover:w-[92%] group-hover:opacity-100" />
      </a>
    );
  })}
</div>
        

        {/* TESTO INTRO */}
        <div className="text-gray-800 leading-relaxed text-[15px] space-y-3 mt-6">

  <p>
    <span className="font-semibold text-lg text-yellow-600">Il Metodo Gold <sup>®</sup></span> propone un approccio multidisciplinare alla salute, basato su una comprensione integrata e globale dell’essere umano, in cui la bocca e i denti rappresentano una chiave di lettura per l’equilibrio generale.<br></br><br></br> Questo progetto nasce con l’obiettivo di creare un dialogo reale tra discipline diverse, mettendo in relazione {" "}
    <span className="text-yellow-600 font-medium">Gnatologia</span>,{" "}
    <span className="text-yellow-600 font-medium">Osteopatia</span>,{" "}
    <span className="text-yellow-600 font-medium">Logopedia</span>,{" "}
    <span className="text-yellow-600 font-medium">Dentosofia</span>,{" "}
    <span className="text-yellow-600 font-medium">Omeopatia</span> e{" "}
    <span className="text-yellow-600 font-medium">Biomagnetismo</span> in un’unica prospettiva coerente.
  </p>


  <p>
    Nei livelli più avanzati, il percorso si apre anche a un approfondimento delle energie sottili, attraverso pratiche tramandate dall’<span className="text-yellow-600 font-medium">Antroposofia </span>e dalle <span className="text-yellow-600 font-medium">Terapie Essene ed Egizie.</span>{" "} In questa visione, l’individuo viene considerato nella sua totalità, nei suoi aspetti fisici, funzionali, emozionali, mentali e spirituali, come un sistema unico e inscindibile.
    </p>

     <p>
    La salute, in questa visione, non è semplicemente l’assenza di sintomi, ma <span className="font-semibold">l’espressione di un equilibrio dinamico </span> tra le diverse parti dell'individuo.
  </p>


  <p className="border-l-4 border-yellow-600 pl-4 italic text-gray-600">
    Ogni disturbo è spesso il risultato di adattamenti e compensi che coinvolgono più sistemi contemporaneamente e che si sviluppano nel tempo come risposta a sollecitazioni fisiche, emotive e ambientali.
  </p>


  <p>
    Il corpo si adatta continuamente e il sintomo rappresenta spesso il segnale visibile di un equilibrio che si è progressivamente alterato.
</p>
<p> Questo spazio è pensato sia per i <span className="font-semibold">professionisti sanitari e non sanitari </span> che desiderano approfondire, formarsi e lavorare in modo realmente integrato, sia per i pazienti che cercano una comprensione più ampia, consapevole e profonda del proprio stato di salute. Qui la persona non viene divisa in compartimenti, ma osservata nella sua globalità, riconoscendo le relazioni costanti tra corpo, funzione, sistema nervoso ed esperienza emotiva.
    </p>
    <p>
      <span className="font-semibold text-lg text-yellow-600">L’approccio integrato del Metodo GOLD </span> è studiato per accompagnare l’individuo in ogni fase della vita ed è pertanto adatto ad < span className="font-semibold">adulti, bambini, anziani, sportivi, donne in gravidanza.</span> Ogni età e ogni condizione presentano specifiche esigenze di adattamento e di equilibrio, e l’integrazione delle discipline consente di rispondere in modo personalizzato e rispettoso alla complessità della persona.</p>

 <p className="border-l-4 border-yellow-600 pl-4"> Questo tipo di approccio è indicato in presenza di disturbi muscolo-scheletrici come cervicalgie, dorsalgie, lombalgie, sciatalgie, dolori articolari, rigidità e limitazioni di movimento, così come nei disturbi posturali caratterizzati da asimmetrie, compensi, atteggiamenti scorretti e squilibri globali. È particolarmente utile nei disturbi cranio-cervico-mandibolari, nelle < span className="font-semibold"> disfunzioni dell’articolazione temporo-mandibolare, nelle cefalee, nelle tensioni craniche, nei dolori facciali e nelle malocclusioni. </span> Trova inoltre indicazione nei disturbi viscerali funzionali, come < span className="font-semibold">problematiche digestive, reflusso, gonfiore e tensioni addominali, e nei disturbi legati allo stress,</span> in cui si manifestano tensioni croniche, affaticamento e < span className="font-semibold">alterazioni del tono neurovegetativo. </span>
</p>
<p> Ma è altresi indicato in chi vuole portare il proprio stato di consapevolezza ad un livello superiore, andando a rimuovere blocchi fisici ed emotivi dal proprio sistema e portare un miglioramento nella propria vita attraverso un lavoro su se stesso a diversi livelli.
  </p>

  <p>< span className="font-semibold text-yellow-600"> Il Metodo GOLD </span> non si propone di eliminare il sintomo in modo isolato, ma di comprendere il linguaggio del corpo, leggere i compensi, sciogliere le tensioni e accompagnare l’organismo verso un recupero della sua capacità di autoregolazione. </p>

<p className="border-l-4 border-yellow-600 pl-4 italic text-gray-600"> È un approccio che rispetta i tempi della persona, che ascolta prima di intervenire e che considera la salute come un processo dinamico di adattamento, equilibrio e consapevolezza.</p>

<br></br>
<p className="font-semibold">Dott.ssa Cristina Barni</p>
</div>

        
{/* CARD ABSTRACT (UNICO BLOCCO) */}
<section className="mt-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
  {
    id: "gnatologia",
    title: "Gnatologia",
    img: "/images/metodo/gnatologia.png",
    quote:
      "“La bocca non è solo un organo funzionale, ma un punto di incontro tra struttura, postura ed emozione.”",
    abstract:
      "La gnatologia studia la funzione dell’apparato stomatognatico e le sue relazioni con il resto del corpo, integrando equilibrio neuromuscolare, postura e adattamenti funzionali.",
  },
  {
    id: "osteopatia",
    title: "Osteopatia",
    img: "/images/metodo/osteopatia.png",
    quote:
      "“Il corpo non mente. Racconta sempre la sua storia, se impariamo ad ascoltarla.”",
    abstract:
      "Disciplina manuale che valuta e tratta restrizioni e compensi, sostenendo la capacità di autoregolazione dell’organismo e l’equilibrio tra struttura e funzione.",
  },
  {
    id: "omeopatia",
    title: "Omeopatia",
    img: "/images/metodo/omeopatia.png",
    quote:
      "“La guarigione non si impone: si risveglia dall’interno.”",
    abstract:
      "Sistema terapeutico basato sul principio di similitudine, che stimola le capacità di autoregolazione dell’organismo, sostenendo un riequilibrio profondo e personalizzato.",
  },
  {
    id: "optometria",
    title: "Optometria",
    img: "/images/metodo/optometria.png",
    quote:
      "“Vedere non è solo un atto visivo, ma un’esperienza neurologica e posturale.”",
    abstract:
      "Disciplina che valuta la funzione visiva in relazione al sistema nervoso e alla postura, migliorando integrazione sensoriale, equilibrio e coordinazione.",
  },
  {
    id: "logopedia",
    title: "Logopedia e Terapia Miofunzionale",
    img: "/images/metodo/logopedia.png",
    quote:
      "“Ogni funzione è un dialogo tra il sistema nervoso e l’esperienza della persona.”",
    abstract:
      "Rieduca le funzioni orali (respirazione, deglutizione, postura linguale, fonazione), favorendo schemi più fisiologici e stabili in età evolutiva e nell’adulto.",
  },
  {
    id: "dentosofia",
    title: "Dentosofia",
    img: "/images/metodo/dentosofia.png",
    quote:
      "“La forma è memoria della funzione, e la funzione è espressione dell’essere.”",
    abstract:
      "Approccio che osserva la bocca come centro di regolazione: crescita, funzione, postura e sistema nervoso in relazione, con strumenti funzionali come l’attivatore.",
  },
  {
    id: "biomagnetismo",
    title: "Biomagnetismo",
    img: "/images/metodo/biomagnetismo.png",
    quote:
      "“Il corpo risponde quando l’equilibrio energetico viene ristabilito.”",
    abstract:
      "Tecnica che utilizza campi magnetici per riequilibrare il pH e i sistemi biologici, favorendo la rigenerazione e il recupero funzionale.",
  },
  {
    id: "terapie-antiche",
    title: "Terapie Essene ed Egizie",
    img: "/images/metodo/terapie-antiche.png",
    quote:
      "“Antiche conoscenze al servizio dell’equilibrio moderno.”",
    abstract:
      "Pratiche tradizionali che lavorano sui piani energetici, simbolici e corporei, integrando il lavoro fisico con quello emozionale e spirituale.",
  },
].map((c) => (
      <a
        key={c.id}
        href={`#${c.id}`}
        className="group rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
      >
        {/* Immagine */}
        <div className="relative h-44 sm:h-48">
          <img
            src={c.img}
            alt={c.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
          {/* overlay leggero per dare “cinema” */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4">
            <p className="text-white/90 text-sm italic leading-snug drop-shadow">
              {c.quote}
            </p>
          </div>
        </div>

        {/* Testo */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-700 group-hover:text-yellow-800 transition">
              {c.title}
            </h3>
          </div>

          <p className="mt-3 text-[15px] leading-relaxed text-gray-700">
            {c.abstract}
          </p>

          {/* micro “pill” estetica */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="text-[12px] px-3 py-1 rounded-full bg-yellow-50 text-yellow-800 border border-yellow-100">
              Scopri di più
            </span>
        
          </div>
        </div>
      </a>
    ))}
  </div>
</section>



        {/* SEZIONI COMPLETE */}
        <div className="mt-16 space-y-14">
          {/* GNATOLOGIA */}
<section id="gnatologia" className="scroll-mt-32 mt-20">
  <h3 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4">
    Gnatologia
  </h3>

  <div className="relative w-full h-[140px] sm:h-[170px] md:h-[200px] rounded-2xl overflow-hidden mb-6 bg-black">
    <Image
  src="/images/metodo/gnatologia.png"
  alt="Gnatologia"
  fill
  quality={85}
  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 768px"
  className="absolute inset-0 w-full h-full object-cover object-[center_55%] scale-[1.12] -translate-x-6"
/>


    <div className="absolute inset-0 bg-black/15" />

    <div className="absolute inset-0 flex items-center px-6 sm:px-10">
      <p className="italic font-semibold text-white text-sm sm:text-base md:text-lg leading-snug drop-shadow-sm max-w-2xl">
        “La bocca non è solo un organo funzionale, ma un punto di incontro tra struttura, postura ed emozione.”
      </p>
    </div>
  </div>

  
  <div className="text-gray-800 leading-relaxed text-[15.5px] md:text-[16px] space-y-5">
    <p className="first-letter:text-3xl first-letter:font-semibold first-letter:text-yellow-600 first-letter:mr-1">
      La gnatologia è la branca dell’odontoiatria che studia la funzione dell’<span className="font-semibold">apparato stomatognatico</span>, delle  <span className="font-semibold">disfunzioni </span> del complesso <span className="font-semibold">cranio-cervico-mandibolare</span> e le sue relazioni con il resto del corpo. Con il termine apparato stomatognatico si intende l’insieme di denti, mandibola e mascella, articolazioni temporo-mandibolari, muscoli masticatori, sistema nervoso correlato e strutture cranio-facciali. 
    </p>


    <p>
      La gnatologia nasce come disciplina scientifica nel XX secolo, in particolare negli Stati Uniti,
      grazie agli studi di autori come B.B. McCollum, Stallard, Posselt e Dawson, che iniziarono ad
      analizzare in modo sistematico la cinematica mandibolare, la relazione tra occlusione e articolazioni,
      il ruolo dei muscoli masticatori e l’importanza delle articolazioni temporo-mandibolari nel sistema
      posturale. Con il tempo, la gnatologia si è evoluta integrando conoscenze di biomeccanica, <span className="font-semibold">neurofisiologia,
      postura, osteopatia e medicina funzionale</span> , diventando sempre più una disciplina di integrazione e non
      soltanto di meccanica dentale.
       </p>

      <p>In questo ambito, l’odontoiatra rappresenta la figura medica di riferimento per la valutazione e la gestione clinica di tali problematiche, in virtù delle competenze stabilite dal suo profilo professionale. </p>
   

    <p>
      Alla base della gnatologia vi sono alcuni principi fondamentali. <span className="font-semibold">La funzione</span> è considerata prioritaria
      rispetto alla forma, poiché la funzione masticatoria, deglutitoria e posturale guida e modella la struttura.
      La bocca non è vista come un sistema isolato, ma come parte integrante dell’<span className="font-semibold">equilibrio corporeo</span>. Muscoli,
      articolazioni e sistema nervoso lavorano in sinergia e, quando uno di questi elementi entra in squilibrio,
      l’intero sistema si adatta. Il corpo, infatti, compensa le disfunzioni dell’apparato stomatognatico creando
      <span className="font-semibold"> adattamenti posturali</span> anche a distanza.
    </p>

 <div className="border-l-4 border-yellow-500 pl-4 py-2 my-2 text-gray-700 italic">
      “La parte non può mai essere sana se non lo è il tutto.”  Platone 
    </div>
    <p>
      La mandibola è sospesa in un sistema neuromuscolare complesso, collegato al cranio attraverso le articolazioni temporo-mandibolari, al rachide cervicale, al sistema fasciale e al sistema posturale. Una <span className="font-semibold"> disfunzione occlusale</span> può generare <span className="font-semibold"> compensi </span> lungo tutta la catena corporea e, allo stesso modo, un problema posturale può riflettersi sulla funzione mandibolare. Questo continuo dialogo tra bocca e corpo rende la gnatologia una disciplina chiave nella comprensione dei disturbi funzionali complessi.
    </p>

    <p>
      La gnatologia trova indicazione in numerose condizioni quali:
<span className="font-semibold"> dolori mandibolari e cervicali,
cefalee ed emicranie,
alterazioni funzionali e di sviluppo,
disturbi posturali,
bruxismo,
serramento dentale,
tensioni muscolari croniche,
dolori articolari,
rumori articolari,
limitazioni di apertura,
blocchi mandibolari,
vertigini,
acufeni.
</span>

    </p>

    <p>
      La gnatologia non è soltanto una disciplina odontoiatrica, ma un vero e proprio ponte tra bocca e corpo. È la scienza
      della funzione, del movimento e dell’equilibrio.
        </p>
       <p span className="italic"> Perché la bocca non mastica soltanto: regola, compensa e comunica con l'intero organismo.</p>
  </div>
  <a
  href="#top"
  className="inline-flex items-center gap-2 mt-6 text-sm text-yellow-600 hover:underline"
>
  ↑ Torna su
</a>

</section>


          
          {/* OSTEOPATIA */}
<section id="osteopatia" className="scroll-mt-32 mt-20">

  {/* TITOLO SOPRA IL BANNER */}
  <h3 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4">
   Osteopatia
  </h3>

 {/* BANNER */}
<div className="relative w-full h-[140px] sm:h-[170px] md:h-[200px] rounded-2xl overflow-hidden mb-6 bg-black">
  {/* immagine "spinta" a sinistra per eliminare il bordo vuoto */}
  <Image
  src="/images/metodo/osteopatia.png"
  alt="Osteopatia"
  fill
  quality={85}
  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 768px"
  className="absolute inset-0 w-full h-full object-cover object-[center_55%] scale-[1.12] -translate-x-6"
/>


  {/* overlay leggero */}
  <div className="absolute inset-0 bg-black/15" />

  {/* MICRO QUOTE SULL'IMMAGINE */}
  <div className="absolute inset-0 flex items-center px-6 sm:px-10">
    <p className="italic font-semibold text-white text-sm sm:text-base md:text-lg leading-snug drop-shadow-sm max-w-2xl">
      “Il corpo non mente. Racconta sempre la sua storia, se impariamo ad ascoltarla.”
    </p>
  </div>
</div>
  <div className="text-gray-800 leading-relaxed text-[15.5px] md:text-[16px] space-y-5">
    <p className="first-letter:text-3xl first-letter:font-semibold first-letter:text-yellow-600 first-letter:mr-1">
      L’osteopatia è una <span className="font-semibold"> disciplina manuale </span> che si occupa della valutazione, della prevenzione e del trattamento delle disfunzioni dell’apparato muscolo-scheletrico e dei sistemi correlati, con l’obiettivo di favorire il recupero dell’equilibrio funzionale dell’organismo. Si basa su un principio fondamentale secondo cui struttura e funzione sono strettamente interdipendenti e ogni alterazione dell’una può influenzare l’altra. In questa visione, <span className="font-semibold"> il corpo è considerato come un’unità </span> in cui sistemi diversi, come quello muscolo-scheletrico, viscerale, fasciale, cranio-sacrale e nervoso, sono in costante relazione. L’osteopatia non lavora sul singolo sintomo isolato, ma ricerca le <span className="font-semibold"> cause </span>, i <span className="font-semibold"> compensi </span> e gli <span className="font-semibold"> adattamenti </span> che possono aver portato alla manifestazione del disturbo, leggendo il corpo nella sua globalità.
    </p>

    <p>
      L’osteopatia nasce alla fine del XIX secolo negli Stati Uniti grazie al <span className="font-semibold"> medico Andrew Taylor Still </span>, che, deluso dai limiti della medicina del suo tempo e dall’uso eccessivo di farmaci spesso inefficaci o dannosi, sviluppò un nuovo approccio basato sulla conoscenza approfondita dell’anatomia, sull’osservazione della fisiologia e sul rispetto delle capacità di <span className="font-semibold">autoguarigione del corpo </span>. Nel 1892 fondò la prima scuola di osteopatia, la American School of Osteopathy, a Kirksville, nel Missouri. Il suo principio guida era <span className="font-semibold"> “Find it, fix it, and leave it alone”</span>, ovvero<span className="font-semibold"> trova la disfunzione, correggila e lascia che il corpo faccia il resto</span>. Da allora, l’osteopatia si è diffusa in tutto il mondo, evolvendosi e integrandosi con le conoscenze scientifiche moderne, mantenendo però la sua visione globale della persona.
      
    </p>

    
    <p>
      L’osteopatia si fonda su alcuni pilastri concettuali che ne guidano l’approccio clinico. Il corpo è <span className="font-semibold">un’unità funzionale</span> in cui struttura, funzione, mente ed emozioni sono interconnesse. L’organismo possiede meccanismi intrinseci di <span className="font-semibold"> autoregolazione e di autoguarigione</span>, che l’osteopata si propone di sostenere e facilitare. Esiste una relazione costante tra struttura e funzione, per cui ogni alterazione strutturale può influenzare la funzione e viceversa.L’organismo possiede meccanismi intrinseci di <span className="font-semibold"> buona circolazione</span>, intesa come <span className="font-semibold">flusso sanguigno, linfatico e nervoso</span>, è essenziale per la salute dei tessuti e per il corretto funzionamento dei sistemi.
    </p>

    <div className="border-l-4 border-yellow-500 pl-4 py-2 my-2 text-gray-700 italic">
      “In nature we never see anything isolated, but everything in connection with something else which is before it, beside it, under it and over it.”  J.W. Goethe
<br></br>
<br></br>
“In natura non esiste niente di isolato, ma tutto è in connessione con qualcos’altro che si trova davanti, accanto, sotto e sopra.” J.W. Goethe

    </div>

    <p>
      Nel suo lavoro, l’osteopata valuta e tratta l’<span className="font-semibold">apparato muscolo-scheletrico</span>, occupandosi della colonna vertebrale, delle articolazioni, dei muscoli e dei legamenti, ma anche il sistema fasciale, osservando le catene di continuità tra i distretti corporei, le tensioni globali e gli adattamenti. Si occupa del <span className="font-semibold">sistema viscerale</span>, valutando la mobilità e la motilità degli organi interni, le relazioni tra visceri e postura e le influenze viscerosomatiche. Lavora sul <span className="font-semibold">sistema cranio-sacrale</span>, considerando le <span className="font-semibold">ossa craniche, le meningi, il liquido cefalo-rachidiano, il sacro e la colonna vertebrale</span>. Integra inoltre la valutazione del <span className="font-semibold">sistema nervoso</span>, centrale e periferico, osservando la relazione tra tensioni meccaniche e risposta neurovegetativa.
    </p>

    <p>
      L’osteopata non cura una patologia nel senso tradizionale del termine, ma individua le restrizioni di mobilità, le tensioni e i compensi che ostacolano il corretto funzionamento dei sistemi, accompagnando il corpo verso un <span className="font-semibold">recupero della sua capacità di adattamento e di equilibrio</span>. L’obiettivo non è imporre un cambiamento, ma creare le condizioni affinché l’organismo possa esprimere al meglio le proprie risorse di autoregolazione.
    </p>

      <p>
  Principali ambiti di intervento dell’osteopatia: 
  <br></br>
  <span className="font-semibold"> 
 Disturbi muscolo-scheletrici (cervicalgia, lombalgia, sciatalgia, dolori articolari),
Squilibri posturali e compensi funzionali,
Disfunzioni cranio-cervico-mandibolari e ATM,
Cefalee e tensioni cervicali,
Disturbi viscerali funzionali (digestivi, reflusso, gonfiore),
Disturbi legati allo stress e alle tensioni croniche, 
Disturbi del sonno,
Limitazioni della mobilità e rigidità articolari,
Disturbi in ambito pediatrico (coliche, torcicollo, plagiocefalia funzionale),
Disturbi in gravidanza e nel post-parto,
Prevenzione e supporto in ambito sportivo. </span>
</p>

  </div>
  <a
  href="#top"
  className="inline-flex items-center gap-2 mt-6 text-sm text-yellow-600 hover:underline"
>
  ↑ Torna su
</a>

</section>




{/* LOGOPEDIA */}
<section id="logopedia" className="scroll-mt-32 mt-20">
  <h3 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4">
    Logopedia e Terapia Miofunzionale
  </h3>

  <div className="relative w-full h-[140px] sm:h-[170px] md:h-[200px] rounded-2xl overflow-hidden mb-6 bg-black">
    <Image
  src="/images/metodo/logopedia.png"
  alt="Logopedia"
  fill
  quality={85}
  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 768px"
  className="absolute inset-0 w-full h-full object-cover object-[center_55%] scale-[1.12] -translate-x-6"
/>

    <div className="absolute inset-0 bg-black/15" />

    <div className="absolute inset-0 flex items-center px-6 sm:px-10">
      <p className="italic font-semibold text-white text-sm sm:text-base md:text-lg leading-snug drop-shadow-sm max-w-2xl">
        “Ogni funzione è un dialogo tra il sistema nervoso e l’esperienza della persona.”
      </p>
    </div>
  </div>

 

  <div className="text-gray-800 leading-relaxed text-[15.5px] md:text-[16px] space-y-5">
    <p className="first-letter:text-3xl first-letter:font-semibold first-letter:text-yellow-600 first-letter:mr-1">
      La logopedia è la disciplina che si occupa della valutazione e del trattamento delle funzioni orali,
      della comunicazione e della coordinazione oro-facciale. In un’ottica funzionale e integrata, osserva
      come respirazione, deglutizione, postura linguale, masticazione e fonazione si organizzano e
      interagiscono tra loro.
    </p>

    <p>
      La bocca è un distretto altamente specializzato e ricchissimo di recettori, in costante dialogo con
      il sistema nervoso centrale e con la postura. La posizione della lingua, il tono delle labbra e la
      qualità della respirazione influenzano lo sviluppo delle arcate e l’organizzazione posturale globale.
      <span className="italic text-yellow-600"> Quando una funzione cambia, cambia anche l’intero equilibrio.</span>
    </p>

    <div className="border-l-4 border-yellow-500 pl-4 py-2 my-2 text-gray-700 italic">
      Rieducare una funzione non significa “correggere un gesto”, ma offrire al sistema una nuova
      informazione: più stabile, più fisiologica, più libera.
    </div>

    <p>
      La logopedia e la terapia miofunzionale accompagnano il passaggio da schemi disfunzionali a schemi
      più fisiologici, lavorando su respirazione orale, deglutizione atipica, ipotonia o ipertonia muscolare,
      difficoltà di coordinazione e compensi posturali. Il lavoro è progressivo, percettivo e neuromotorio:
      non si tratta di forzare, ma di integrare.
    </p>

    <p>
      In età evolutiva questo approccio è fondamentale per sostenere una crescita armonica. Nell’adulto è
      utile nei disturbi mandibolari, nel bruxismo, nei disturbi della voce, nella fatica masticatoria e nei
      disordini funzionali persistenti. La rieducazione permette di sciogliere schemi adattativi consolidati
      e di restituire spazio alla funzione.
    </p>

    <p>
      In un percorso integrato, lavora in sinergia con gnatologia, osteopatia, dentosofia, optometria e
      posturologia. L’obiettivo non è correggere un gesto, ma riorganizzare un sistema, favorendo un
      equilibrio più stabile tra struttura, funzione e controllo neurologico.
    </p>

    <p>
      La logopedia e la terapia miofunzionale non impongono, ma accompagnano. Non forzano, ma facilitano.
      <span className="italic text-yellow-600"> Perché ogni cambiamento duraturo nasce dall’integrazione.</span>
    </p>
  </div>
  <a
  href="#top"
  className="inline-flex items-center gap-2 mt-6 text-sm text-yellow-600 hover:underline"
>
  ↑ Torna su
</a>

</section>


         
          {/* DENTOSOFIA */}
<section id="dentosofia" className="scroll-mt-32 mt-20">
  <h3 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4">
    Dentosofia
  </h3>

  <div className="relative w-full h-[140px] sm:h-[170px] md:h-[200px] rounded-2xl overflow-hidden mb-6 bg-black">
    <Image
  src="/images/metodo/dentosofia.png"
  alt="Dentosofia"
  fill
  quality={85}
  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 768px"
  className="absolute inset-0 w-full h-full object-cover object-[center_55%] scale-[1.12] -translate-x-6"
/>

    <div className="absolute inset-0 bg-black/15" />

    <div className="absolute inset-0 flex items-center px-6 sm:px-10">
      <p className="italic font-semibold text-white text-sm sm:text-base md:text-lg leading-snug drop-shadow-sm max-w-2xl">
        “La forma è memoria della funzione, e la funzione è espressione dell’essere.”
      </p>
    </div>
  </div>

<div className="text-gray-800 leading-relaxed text-[15.5px] md:text-[16px] space-y-5">

  <p className="first-letter:text-3xl first-letter:font-semibold first-letter:text-yellow-600 first-letter:mr-1">
    La <strong>Dentosofia</strong> è un approccio odontoiatrico integrato che
    legge la bocca come parte di un sistema più ampio, in relazione con la
    persona nella sua globalità.
  </p>

  <p>
    Il termine nasce dall’unione di dens (dente) e sophia (sapienza) e significa
    letteralmente <strong>“saggezza dei denti”</strong>: un invito a leggere la
    bocca non solo in termini meccanici, ma anche come espressione di funzioni,
    adattamenti e storia individuale.
  </p>

  <p>
    Sviluppata negli anni ’80 dai medici dentisti <strong>Michel </strong>
    <strong>Montaud</strong> e <strong>Rodrigue</strong>
    <strong> Mathieu</strong>, la Dentosofia integra conoscenze di odontoiatria,
    ortodonzia funzionale, fisiologia della respirazione e dello sviluppo
    cranio-facciale, ponendo attenzione a come{" "}
    <strong>
      masticazione, deglutizione, fonazione, postura linguale e respirazione
    </strong>{" "}
    influenzino nel tempo forma delle arcate, equilibrio dell’occlusione e
    benessere generale.
  </p>

  <p>
    La Dentosofia si ispira alla visione dell’<strong>Antroposofia</strong> di{" "}
    <strong>Rudolf Steiner</strong>, che considera l’essere umano come un’unità
    composta da dimensione corporea, vitale, emozionale e spirituale. In questa
    prospettiva, la salute non è solo assenza di sintomi, ma un{" "}
    <strong>equilibrio dinamico</strong> tra queste diverse componenti.
    Applicata al cavo orale, questa visione invita l’operatore a osservare il
    paziente in modo più ampio: non solo con lo scopo di allineare i denti ma
    cercando di promuovere un equilibrio piu ampio considerando tutte le sfere
    del suo essere.
  </p>

  <h4 className="text-lg md:text-xl font-semibold text-yellow-600 mt-10 mb-3 tracking-wide">
   L’Attivatore Plurifunzionale di 
    <strong> Soulet-Besombes</strong>
  </h4>

    Lo strumento cardine della Dentosofia è l’
    <strong>Attivatore Plurifunzionale (APF)</strong>, ideato da{" "}
    <strong>Soulet-Besombes</strong>. È un dispositivo elastico, oggi
    generalmente in silicone o in materiale termoplastico (in origine in
    caucciù), che si posiziona tra le arcate e che, pur apparendo semplice, ha
    un’azione complessa: si definisce “plurifunzionale” proprio perché non
    agisce solo sui denti.


  <p>
    L’APF viene utilizzato con l’obiettivo di{" "}
    <strong>rieducare e armonizzare le funzioni orali</strong> e il loro dialogo
    con il resto del corpo, lavorando su più livelli:
  </p>

  <p>
    <strong>Respirazione:</strong> favorisce la respirazione nasale e una
    migliore organizzazione delle funzioni oro-faringee.
  </p>

  <p>
    <strong>Deglutizione e postura linguale:</strong> sostiene un riequilibrio
    dei pattern funzionali, spesso alla base di arcate strette o instabilità
    occlusali.
  </p>

  <p>
    <strong>Masticazione e tono neuromuscolare:</strong> stimola una
    riorganizzazione più fisiologica dell’attività muscolare e promuove una
    attività neurologica di zone specifiche del cervello.
  </p>

  <p>
    <strong>Occlusione e postura:</strong> il lavoro sulla bocca può riflettersi
    sull’organizzazione posturale e sui compensi, soprattutto nei pazienti con
    disfunzioni cranio-cervico-mandibolari.
  </p>

  <p>
    <strong>Coinvolgimento attivo del paziente:</strong> il paziente non è
    passivo: l’apparecchio richiede collaborazione e costanza, diventando parte
    di un percorso di consapevolezza delle proprie funzioni.
  </p>

  <p>
    Nella Dentosofia l’APF viene apprezzato perché si propone di accompagnare il
    cambiamento attraverso <strong>forze leggere</strong>, rispettose dei{" "}
    <strong>tempi biologici</strong> e dell’adattamento del sistema. Questo rende
    l’approccio generalmente <strong>meno invasivo</strong> rispetto a metodiche
    che impongono correzioni rapide o prevalentemente meccaniche.
  </p>

  <h4 className="text-lg md:text-xl font-semibold text-yellow-600 mt-10 mb-3 tracking-wide">
   Euritmia
  </h4>
    All’interno della visione antroposofica, un ruolo importante è svolto
    dall’Euritmia, un’arte del movimento consapevole che unisce ritmo, postura,
    respirazione e presenza, e che può trovare diverse applicazioni. Attraverso
    gesti guidati e sequenze di movimento, l’Euritmia aiuta a portare attenzione
    al corpo e al respiro, a modulare il tono neuromuscolare e a favorire una
    migliore assimilazione dei cambiamenti funzionali che avvengono nel tempo.
 

  <p>
    L’Euritmia si fonda su un’immagine dell’essere umano come essere spirituale
    che compie un’esperienza terrena e che, per questo, assume una costituzione
    complessa e integrata. In questa prospettiva l’uomo è mediatore tra mondo
    fisico e mondo spirituale ed è composto da corpo, anima e spirito; e
    l’anima, a sua volta, esprime tre facoltà fondamentali — pensare, sentire e
    volere — attraverso le quali l’individuo sviluppa autocoscienza, relazione
    con gli altri e comprensione del mondo. Quanto più questa coscienza diviene
    viva, tanto più il gesto con cui l’essere umano “plasma” la realtà, come
    singolo e come comunità, può diventare coerente con il suo ruolo nei
    confronti della Natura, del Cosmo e degli altri uomini.
  </p>

  <p>
    L’Euritmia offre un linguaggio pratico per entrare in contatto con una
    conoscenza che non sia soltanto intellettuale, ma vivente, rendendo
    l’esperienza corporea un ponte tra percezione, consapevolezza e integrazione.
  </p>
</div>

</section>


<a
  href="#top"
  className="inline-flex items-center gap-2 mt-6 text-sm text-yellow-600 hover:underline"
>
  ↑ Torna su
</a>


{/* BIOMAGNETISMO */}
<section id="biomagnetismo" className="scroll-mt-32 mt-20">
  <h3 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4">
    Biomagnetismo
  </h3>

  <div className="relative w-full h-[140px] sm:h-[170px] md:h-[200px] rounded-2xl overflow-hidden mb-6 bg-black">
    <Image
  src="/images/metodo/biomagnetismo.png"
  alt="Biomagnetismo"
  fill
  quality={85}
  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 768px"
  className="absolute inset-0 w-full h-full object-cover object-[center_55%] scale-[1.12] -translate-x-6"
/>

    <div className="absolute inset-0 bg-black/15" />

    <div className="absolute inset-0 flex items-center px-6 sm:px-10">
      <p className="italic font-semibold text-white text-sm sm:text-base md:text-lg leading-snug drop-shadow-sm max-w-2xl">
        “Il corpo risponde quando l’equilibrio viene ristabilito.”
      </p>
    </div>
  </div>

  <div className="text-gray-800 leading-relaxed text-[15.5px] md:text-[16px] space-y-5">
    <p className="first-letter:text-3xl first-letter:font-semibold first-letter:text-yellow-600 first-letter:mr-1">
     La Coppia Biomagnetica è un metodo integrativo e non invasivo, sviluppato dal Dr. Isaac Goiz Durán in oltre trent’anni di ricerca. Si inserisce in una visione olistica del benessere e si propone come strumento di supporto per favorire l’equilibrio dell’organismo e i naturali processi di autoregolazione.
    </p>
    <p>
      Il metodo si fonda sul principio della Risonanza Biomagnetica, secondo il quale alcune disarmonie dell’organismo possono essere associate a variazioni del pH in specifiche aree del corpo, collegate tra loro in coppie. In determinate condizioni di squilibrio interno, queste alterazioni possono favorire una crescita non armonica di microrganismi, che l’organismo può avere difficoltà a gestire, creando così un ambiente meno favorevole all’equilibrio generale e al benessere della persona.
    </p>
    <p>
      Durante una sessione di biomagnetismo, il ricevente rimane comodamente sdraiato su un lettino e non è necessario togliere gli indumenti. Il trattamento si articola in due fasi principali.
Nella prima fase, detta rastreo, l’operatore individua le coppie biomagnetiche attraverso un test kinesiologico. Nella seconda fase, vengono applicati magneti di polarità opposta sui punti individuati, seguendo uno schema specifico elaborato dal Dr. Goiz. La durata complessiva della seduta è di circa 40–60 minuti.
  </p>
  <p>
    L’applicazione dei magneti genera campi magnetici che, secondo il metodo, possono favorire un riequilibrio della bioelettricità dell’organismo e, di conseguenza, sostenere un ambiente più armonico a livello energetico e funzionale. Il lavoro mira a supportare i meccanismi naturali di equilibrio, adattamento e vitalità del corpo, contribuendo anche a un rilassamento profondo e a una riduzione degli effetti dello stress.
      </p>
      <p>La Coppia Biomagnetica può essere utilizzata come pratica preventiva, come supporto complementare ad altri percorsi di benessere o all’interno di un cammino di riequilibrio personale. È una tecnica che non interferisce con altri approcci, è delicata, accessibile e si integra facilmente in una visione globale della persona.
        </p>

  </div>

  <a href="#top" className="inline-flex items-center gap-2 mt-6 text-sm text-yellow-600 hover:underline">
    ↑ Torna su
  </a>
</section>

{/* TERAPIE ESSENE ED EGIZIE */}
<section id="terapie-antiche" className="scroll-mt-32 mt-20">
  <h3 className="text-2xl md:text-3xl font-semibold text-yellow-600 mb-4">
    Terapie Essene ed Egizie
  </h3>

  <div className="relative w-full h-[140px] sm:h-[170px] md:h-[200px] rounded-2xl overflow-hidden mb-6 bg-black">
    <Image
  src="/images/metodo/terapie-antiche.png"
  alt="Terapie Essene ed Egizie"
  fill
  quality={85}
  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 768px"
  className="absolute inset-0 w-full h-full object-cover object-[center_55%] scale-[1.12] -translate-x-6"
/>

    <div className="absolute inset-0 bg-black/15" />

    <div className="absolute inset-0 flex items-center px-6 sm:px-10">
      <p className="italic font-semibold text-white text-sm sm:text-base md:text-lg leading-snug drop-shadow-sm max-w-2xl">
        “Antiche conoscenze al servizio dell’equilibrio moderno.”
      </p>
    </div>
  </div>

  <div className="text-gray-800 leading-relaxed text-[15.5px] md:text-[16px] space-y-5">
    <p className="first-letter:text-3xl first-letter:font-semibold first-letter:text-yellow-600 first-letter:mr-1">
      Le Terapie Essene ed Egizie affondano le loro radici in un’antichissima Arte della Cura, sviluppata nell’antico Egitto e custodita nel tempo dalle comunità Essene. Si tratta di un approccio che considera l’essere umano nella sua totalità e multidimensionalità, riconoscendo l’interazione profonda tra corpo, dimensione energetica, emozioni, mente e spirito.
    </p>
    <p>
      Questa Tradizione, rimasta nell’ombra per quasi duemila anni, è stata riportata alla luce nel nostro tempo grazie al lavoro di Daniel Meurois e Marie-Johanne Croteau, che ne hanno recuperato la memoria attraverso un profondo percorso di ricerca interiore e spirituale. Le pratiche oggi conosciute sono raccolte nel Nuovo Atlante delle Terapie Essene ed Egizie e rappresentano un adattamento contemporaneo di un sapere che possiamo definire senza tempo.
    </p>
    <p>Le origini di queste terapie risalgono in particolare alla XVIII dinastia egizia, durante il regno di Akhenaton, quando spiritualità, arte, architettura e medicina erano unite in una visione armonica dell’essere umano. In quel periodo, alla conoscenza delle piante e degli oli si affiancava un lavoro diretto sui livelli sottili dell’individuo, con l’intento di risalire alle cause profonde dei disagi. Dopo la morte di Akhenaton, questa conoscenza venne in gran parte dimenticata, ma fu trasmessa oralmente da sacerdoti iniziati fino a rifiorire secoli dopo nelle comunità Essene della Galilea, dove l’Arte della Cura venne ulteriormente sviluppata e praticata come parte integrante del cammino spirituale.
    </p>
    <p>Per comprendere come operano le Terapie Essene ed Egizie, l’esperienza diretta rimane la via più autentica, affidandosi a operatori che ne hanno acquisito la competenza nel rispetto della Tradizione trasmessa da Daniel Meurois e Marie-Johanne Croteau.
    </p>
    <p>La peculiarità fondamentale di questo approccio è il suo Aspetto Trinitario. Il trattamento non coinvolge soltanto chi riceve e l’operatore, ma si svolge all’interno di uno Spazio Sacro in cui è presente anche la dimensione spirituale che dimora in ogni essere. È questa presenza sottile a generare l’“Onda di Guarigione”, attraverso la quale il lavoro può avvenire in profondità.
L’operatore non “cura” nel senso tradizionale del termine, ma si pone come tramite consapevole, mettendo a disposizione le proprie conoscenze, la sensibilità e la capacità di ascolto. Il processo avviene nel rispetto della volontà e della capacità di chi riceve di entrare in contatto con i livelli più profondi del proprio essere.
</p>
<p>In questo percorso, il disagio non viene mai considerato come un nemico da combattere o un semplice sintomo da eliminare. L’attenzione è rivolta piuttosto alla ricerca delle cause originarie della disarmonia, che spesso si collocano su piani più sottili di quello fisico: vitale, emotivo, mentale o causale. La persona viene così accolta nella sua multidimensionalità di corpo, anima e spirito.
  </p>
  <p>I trattamenti possono talvolta concentrarsi su un disagio già manifestato sul piano fisico, oppure orientarsi prevalentemente sugli aspetti emotivi, mentali ed energetici. In altri casi vengono utilizzate tecniche più profonde, che coinvolgono archetipi, chakra e livelli sottili dell’essere. In generale, il lavoro si svolge soprattutto sul piano eterico, attraverso l’armonizzazione delle nadi, dei chakra principali e secondari, la pulizia dei corpi sottili e l’ascolto delle emozioni, delle forme-pensiero e delle memorie profonde.
  </p>
  <p>Più che una singola tecnica, le Terapie Essene ed Egizie si configurano come un percorso di consapevolezza, che accompagna la persona a riconoscere l’origine profonda dei propri disagi. Spesso questo avviene per tappe successive, nel pieno rispetto dei tempi interiori e del cammino personale di ciascuno.
  </p>
  </div>

  <a href="#top" className="inline-flex items-center gap-2 mt-6 text-sm text-yellow-600 hover:underline">
    ↑ Torna su
  </a>
</section>

       
        </div>
      </section>

      
      {showTop && (
  <a
    href="#top"
    className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-yellow-600 text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
    aria-label="Torna su"
  >
    ↑
  </a>
)}

    </main>
  );
  }
