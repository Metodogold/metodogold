export default function CorsiPage() {
  return (
    <main>

      {/* HERO */}
      <section className="w-full hidden md:block overflow-hidden">

        style={{
          backgroundImage: "url('/images/corsi-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Contenuto */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            I nostri Corsi
          </h1>
          <p className="max-w-xl text-lg text-gray-200">
            Percorsi formativi dedicati ai professionisti della salute,
            per approfondire il Metodo Gold e la diagnosi funzionale.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="max-w-3xl text-gray-700 text-lg">
          I corsi Metodo Gold nascono per offrire una formazione solida,
          clinicamente applicabile e basata sull’esperienza.
          Ogni percorso è pensato per integrare teoria e pratica,
          accompagnandoti nella crescita professionale.</p>
              </section>
            </main>
            
        )
}