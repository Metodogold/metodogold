// components/PrenotaForm.js
"use client";

import { useState } from "react";
import Link from "next/link";

export default function PrenotaForm({ variant = "light" }) {
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
        throw new Error(json?.error || "Errore invio");
      }

      setStatus("sent");
    } catch (err) {
      console.error("Errore invio:", err);
      setStatus("error");
    }
  }

  const isDark = variant === "dark";

  const inputClass = isDark
  ? "w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/45 outline-none focus:ring-2 focus:ring-yellow-400/40 focus:border-white/30"
  : "w-full border rounded-xl px-4 py-3";


  const buttonClass = "w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-full disabled:opacity-60";

  if (status === "sent") {
    return (
      <div className="text-center py-10">
        <h2 className={isDark ? "text-2xl font-semibold mb-4 text-white" : "text-2xl font-semibold mb-4"}>
          Richiesta inviata ✅
        </h2>
        <p className={isDark ? "text-white/70 mb-8" : "text-gray-700 mb-8"}>
          Grazie! Ti ricontatteremo a breve.
        </p>

        {/* Su pagina "prenota" può essere utile il link home; su promo puoi anche eliminarlo */}
        {variant === "light" ? (
          <Link
            href="/"
            className="inline-block border px-6 py-2 rounded-full text-sm hover:bg-gray-100"
          >
            Torna alla Home
          </Link>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input
        name="nome"
        value={form.nome}
        onChange={onChange}
        required
        placeholder="Nome e Cognome"
        className={inputClass}
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={onChange}
        required
        placeholder="Email"
        className={inputClass}
      />

      <input
        name="telefono"
        value={form.telefono}
        onChange={onChange}
        placeholder="Telefono"
        className={inputClass}
      />

      <textarea
        name="messaggio"
        value={form.messaggio}
        onChange={onChange}
        rows={5}
        placeholder="Scrivi qui la tua richiesta..."
        className={inputClass}
      />

      <button type="submit" disabled={status === "sending"} className={buttonClass}>
        {status === "sending" ? "Invio..." : "Invia richiesta"}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-sm">
          Errore nell’invio. Controlla la configurazione email.
        </p>
      )}
    </form>
  );
}
