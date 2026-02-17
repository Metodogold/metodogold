import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const { nome, email, telefono, messaggio } = data;

    // Validazione variabili ambiente (così capisci subito cosa manca su Vercel)
    const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_FROM"];
    for (const k of required) {
      if (!process.env[k]) {
        return Response.json(
          { ok: false, error: `Variabile mancante: ${k}` },
          { status: 500 }
        );
      }
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true se 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // utile con alcuni provider
      tls: {
        rejectUnauthorized: false,
      },
    });

    const text = [
      "Nuova richiesta prenotazione",
      "",
      `Nome: ${nome}`,
      `Email: ${email}`,
      `Telefono: ${telefono || "-"}`,
      "",
      "Messaggio:",
      messaggio || "-",
    ].join("\n");

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO || "metodogold7@gmail.com",
      replyTo: email,
      subject: `Richiesta prenotazione - ${nome}`,
      text,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("❌ ERRORE INVIO EMAIL:", err);
    return Response.json(
      { ok: false, error: err?.message || "Invio email fallito" },
      { status: 500 }
    );
  }
}
