import Link from "next/link";

export default function GnatologiaOsteopaticaPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-28 pb-24">
      {/* Torna ai corsi */}
      <div className="mb-10">
        <Link
          href="/corsi"
          className="text-sm text-gray-500 hover:underline"
        >
          ← Torna ai corsi
        </Link>
      </div>

      {/* Titolo */}
      <header className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-semibold text-yellow-600 mb-4">
          Corso di Gnatologia Osteopatica Integrata
        </h1>

        <p className="text-gray-700 text-lg">
         Corso annuale 3 moduli
        </p>
      </header>


      {/* Descrizione lunga */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-yellow-600 mb-4 text-[25px]">
          Una visione sistemica dell’apparato stomatognatico
        </h2>
        <p className="text-gray-700 leading-relaxed">
          <ul class="space-y-3 text-gray-800 leading-relaxed text-[15.5px]">
  <li>
    Nella pratica odontoiatrica moderna il paziente gnatologico è sempre più spesso un paziente complesso.
Sintomi che migrano, compensi che si riorganizzano, trattamenti tecnicamente corretti che non sempre conducono a una reale stabilità clinica nel tempo.
Questo accade quando l’apparato stomatognatico viene osservato come un sistema isolato, senza considerare il dialogo continuo con la postura, il sistema nervoso, il sistema cranio-sacrale e i meccanismi di adattamento dell’organismo.
Il Corso di Gnatologia Osteopatica Integrata nasce dall’esigenza di superare questa frammentazione, offrendo all’odontoiatra una lettura sistemica, funzionale e ampliata della gnatologia, applicabile concretamente nella pratica clinica quotidiana
</li>
   </ul>
     </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-yellow-600 mb-4">
          Visione del corso
        </h2>
        <p className="text-gray-700 leading-relaxed">
          <ul class="space-y-3 text-gray-800 leading-relaxed text-[15.5px]">
  <li>
    <strong>La bocca non è un distretto isolato</strong>, ma una vera e propria porta di ingresso al sistema.
  </li>

  <li>
    L’occlusione dialoga costantemente con il sistema nervoso centrale e autonomo, con la postura, con le catene miofasciali, con la dimensione emotiva del paziente e con le sue capacità di adattamento.
  </li>

  <li>
    <strong>Il corso propone una integrazione reale tra gnatologia, osteopatia e medicina integrata, includendo anche: </strong>
    <ul class="list-disc ml-6 mt-2 space-y-1">
      <li><strong>Una lettura antroposofica dell’essere umano</strong></li>
      <li><strong>La correlazione tra denti, funzione ed emotività</strong></li>
      <li><strong>L’utilizzo dell’omeopatia</strong> come supporto nei percorsi clinici complessi</li>
      <li><strong>L’aiuto delle medicine complementari</strong> come strumenti di comprensione più profondi del paziente gnatologico</li>
    </ul>
  </li>
</ul>


        </p>
      </section>

      {/* A chi è rivolto */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-yellow-600 mb-4">
          Obiettivo del corso
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Utilizzare dei dispositivi gnatologici e ortodontici funzionali che, con le opportune modifiche durante il corso della terapia, possono modificare la struttura della bocca del paziente utilizzando degli input leggeri e fisiologici.</strong></li>
          <li><strong>Migliorare la qualità della valutazione clinica cercando le cause delle disfunzioni.</strong></li>
          <li><strong>Comprendere compensi e adattamenti del paziente.</strong></li>
        </ul>
        <br></br>
        Nella pratica gnatologica tradizionale lo splint gnatologico (bite) viene spesso utilizzato come strumento di rilassamento muscolare e di gestione del sintomo. Sebbene possa essere utile in una fase iniziale, esso agisce prevalentemente sul compenso, senza intervenire in modo diretto sulle cause profonde della disfunzione.
I dispositivi funzionali, invece, permettono, attraverso le giuste modifiche, integrate al funzionamento del sistema cranio sacrale, di lavorare sull’intero sistema stomatognatico, favorendo un’apertura e una riorganizzazione più globale e funzionale. Attraverso l’utilizzo di forze deboli e rispettose dei tempi biologici, essi consentono una modifica progressiva e meno invasiva rispetto agli apparecchi ortodontici tradizionali, facilitando un’integrazione più fisiologica e stabile del cambiamento.

      </section>

      {/* Cosa imparerai */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-yellow-600 mb-4">
          A chi è rivolto
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Odontoiatri</strong></li>
          <li><strong>Medici interessati alla gnatologia e ai disturbi dell’apparato stomatognatico</strong></li>
          <li><strong>Osteopati</strong></li>
          <li><strong>Fisioterapisti</strong></li>
          <li><strong>Logopedisti</strong></li>
          <li><strong>Optometristi</strong></li>
        </ul>
        <br>
      </br>
      È indicato per professionisti che:
      <ul className="list-disc list-inside space-y-2">
          <li><strong>lavorano con pazienti gnatologici complessi</strong></li>
          <li><strong>desiderano integrare la visione occlusale con una lettura sistemica</strong></li>
          <li><strong>sono disponibili a confrontarsi con modelli interpretativi multidisciplinari</strong></li>
      </ul>
      </section>

      {/* Docenti */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-yellow-600 mb-4">
          Struttura del corso
        </h2>
        <p className="text-gray-700">
          Il corso si svolge in presenza ed è articolato in  <strong></strong>tre moduli progressivi, pensati come un unico percorso formativo coerente.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/prenota"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full text-sm font-medium transition"
        >
          Prenota
        </Link>
      </div>
    </main>
  );
}
