import Link from "next/link";

export default function CorsoTemplate({ title, description, image }) {
  return (
    <main className="pt-24 pb-24">

      {/* CONTENUTO CENTRALE */}
      <section className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Immagine */}
        <img
          src={image}
          alt={title}
          className="rounded-2xl shadow-lg max-h-[420px] w-full object-cover mb-12"
        />

        {/* Titolo (ORO) */}
        <h1 className="text-3xl md:text-4xl font-semibold text-yellow-600 mb-6">
          {title}
        </h1>

        {/* Descrizione (NERA / GRIGIO SCURO) */}
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mb-10">
          {description}
        </p>

        {/* Bottoni */}
        <div className="flex gap-4 mb-16">
          <Link
            href="#programma"
            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition"
          >
            Programma
          </Link>

          <Link
            href="/prenota"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full text-sm font-medium transition"
          >
            Prenota
          </Link>
        </div>
      </section>

      {/* Torna ai corsi – in basso a sinistra */}
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/corsi"
          className="inline-flex items-center text-gray-700 hover:underline"
        >
          <span className="mr-2 text-lg">←</span>
          Torna ai corsi
        </Link>
      </div>

    </main>
  );
}
