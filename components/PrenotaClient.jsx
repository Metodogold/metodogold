// components/PrenotaClient.js
"use client";

import { useState } from "react";
import Link from "next/link";

export default function PrenotaClient() {
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
    <main className="max-w-3xl mx-auto px-6 pt-28 pb-24">
      <div className="text-center mt-8 mb-12">
        <h1 className="text-3xl font-semibold text-yellow-600 mb-4">
          Ti contattiamo noi!
        </h1>
        <p className="text-gray-700 text-lg">
          Compila il modulo scrivendo a cosa sei interessato. Ti contatteremo nel
          più breve tempo possibile.
        </p>
      </div>

      <section className="border rounded-2xl p-8">
        {status === "sent" ? (
          <div className="text-center py-10">
            <h2 className="text-2xl font-semibold mb-4">Richiesta inviata ✅</h2>
            <p className="text-gray-700 mb-8">
              Grazie! Ti ricontatteremo a breve.
            </p>
            <Link
              href="/"
              className="inline-block border px-6 py-2 rounded-full text-sm hover:bg-gray-100"
            >
              Torna alla Home
            </Link>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            <input
              name="nome"
              value={form.nome}
              onChange={onChange}
              required
              placeholder="Nome e Cognome"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              placeholder="Email"
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              name="telefono"
              value={form.telefono}
              onChange={onChange}
              placeholder="Telefono"
              className="w-full border rounded-xl px-4 py-3"
            />

            <textarea
              name="messaggio"
              value={form.messaggio}
              onChange={onChange}
              rows={5}
              placeholder="Scrivi qui la tua richiesta..."
              className="w-full border rounded-xl px-4 py-3"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-full"
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
      </section>
    </main>
  );
}
