"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

export default function ContattiClient() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefono: "",
    messaggio: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/prenota", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = await res.json();

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Errore invio");
      }

      setStatus("sent");
    } catch (err) {
      console.error("Errore invio:", err);
      setStatus("error");
    }
  }

  return (
    <main className="w-full">
      {/* Header */}
      <section>
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-8 text-center">
          <h1 className="text-4xl font-bold text-yellow-600">
            Contatti
          </h1>

          <p className="mt-3 text-gray-700 text-base sm:text-lg leading-relaxed">
            Compila il modulo. Ti ricontatteremo nel più breve tempo possibile.
          </p>

          <div className="mt-4 flex justify-center">
            <span className="block w-72 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent" />
          </div>

          <p className="mt-5 italic text-gray-600">
            “Ogni percorso inizia da una domanda posta nel modo giusto.”
          </p>
        </div>
      </section>

      {/* Contenuto */}
      <section className="max-w-5xl mx-auto px-6 pt-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-8">
          {/* FORM */}
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-yellow-50/30 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-7 sm:p-9">
            {status === "sent" ? (
              <div className="text-center py-10">
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700">
                  ✓
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                  Richiesta inviata
                </h2>
                <p className="text-gray-700 mb-8">
                  Grazie! Ti ricontatteremo a breve.
                </p>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-sm transition"
                >
                  Torna alla Home
                </Link>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="mb-2">
                  <p className="text-[13px] font-semibold tracking-widest uppercase text-yellow-700/90">
                    Scrivici
                  </p>
                </div>

                <Field
                  label="Nome e Cognome"
                  icon={<User size={18} />}
                  input={
                    <input
                      name="nome"
                      value={form.nome}
                      onChange={onChange}
                      required
                      placeholder="Es. Mario Rossi"
                      className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
                    />
                  }
                />

                <Field
                  label="Email"
                  icon={<Mail size={18} />}
                  input={
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      placeholder="Es. nome@email.it"
                      className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
                    />
                  }
                />

                <Field
                  label="Telefono (facoltativo)"
                  icon={<Phone size={18} />}
                  input={
                    <input
                      name="telefono"
                      value={form.telefono}
                      onChange={onChange}
                      placeholder="Es. +39 333 1234567"
                      className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400"
                    />
                  }
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Messaggio
                  </label>
                  <div className="group rounded-2xl border border-gray-200 bg-white/70 shadow-sm focus-within:shadow-md transition overflow-hidden">
                    <div className="flex items-start gap-3 px-4 py-3">
                      <div className="mt-0.5 text-yellow-700/70">
                        <MessageSquare size={18} />
                      </div>
                      <textarea
                        name="messaggio"
                        value={form.messaggio}
                        onChange={onChange}
                        rows={6}
                        placeholder="Scrivi qui la tua richiesta..."
                        className="w-full bg-transparent outline-none resize-none text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                    <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent opacity-0 group-focus-within:opacity-100 transition" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full py-3.5 font-medium text-white
                             bg-yellow-600 hover:bg-yellow-700
                             shadow-[0_14px_36px_rgba(0,0,0,0.16)]
                             hover:shadow-[0_18px_46px_rgba(0,0,0,0.22)]
                             transition-all disabled:opacity-60 disabled:hover:bg-yellow-600"
                >
                  {status === "sending" ? "Invio..." : "Invia richiesta"}
                </button>

                {status === "error" && (
                  <p className="text-red-600 text-sm">
                    Errore nell’invio. Controlla la configurazione email.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* CONTATTI RAPIDI */}
          <aside className="rounded-3xl border border-gray-200 bg-white shadow-sm p-7 sm:p-8 h-fit">
            <p className="text-[13px] font-semibold tracking-widest uppercase text-yellow-700/90">
              Contatti rapidi
            </p>

            <p className="mt-2 text-gray-700 leading-relaxed text-[15px]">
              Se preferisci, puoi contattarci direttamente:
            </p>

            <div className="mt-6 space-y-4 text-[15px]">
              <div className="rounded-2xl border border-gray-200 p-4">
                <p className="text-gray-500 font-medium">Email</p>
                <a
                  href="mailto:metodogold7@gmail.com"
                  className="mt-1 inline-block text-yellow-700 hover:underline"
                >
                  metodogold7@gmail.com
                </a>
              </div>

              <div className="rounded-2xl border border-gray-200 p-4">
                <p className="text-gray-500 font-medium">Telefono</p>
                <a
                  href="tel:+393932223740"
                  className="mt-1 inline-block text-yellow-700 hover:underline"
                >
                  +39 393 2223740
                </a>
              </div>
            </div>

            <div className="mt-7">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

/** Campo premium riutilizzabile */
function Field({ label, icon, input }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <div className="group rounded-2xl border border-gray-200 bg-white/70 shadow-sm focus-within:shadow-md transition overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="text-yellow-700/70">{icon}</div>
          {input}
        </div>
        <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent opacity-0 group-focus-within:opacity-100 transition" />
      </div>
    </div>
  );
}
