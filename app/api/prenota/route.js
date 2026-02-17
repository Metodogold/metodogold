// app/api/prenota/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { nome, email, telefono, messaggio } = await req.json();

    // ✅ Legge ENV (obbligatorie)
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    // Se manca qualcosa, fallisce subito (niente fallback a 127.0.0.1)
    if (!host || !user || !pass) {
      return Response.json(
        { ok: false, error: "Config SMTP mancante su Vercel (SMTP_HOST/SMTP_USER/SMTP_PASS)." },
        { status: 500 }
      );
    }

    // ✅ Regola porta/secure
    const secure = port === 465; // 465 => true, 587 => false

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      ...(port === 587 ? { requireTLS: true } : {}),
    });

    // (Opzionale ma utile) Verifica connessione SMTP
    // await transporter.verify();

    const to = process.env.MAIL_TO || user; // destinatario finale
    const from = process.env.MAIL_FROM || user; // mittente (spesso deve essere lo stesso user)

    const subject = `Nuova richiesta dal sito — ${nome || "Senza nome"}`;

    const text = [
      `Nome: ${nome}`,
      `Email: ${email}`,
      `Telefono: ${telefono || "-"}`,
      "",
      "Messaggio:",
      messaggio || "-",
    ].join("\n");

    await transporter.sendMail({
      from,
      to,
      replyTo: email, // così rispondi direttamente al contatto
      subject,
      text,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("❌ ERRORE INVIO EMAIL:", err);
    return Response.json(
      { ok: false, error: err?.message || "Errore invio email" },
      { status: 500 }
    );
  }
}
