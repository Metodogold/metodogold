import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("📩 /api/prenota ricevuto:", data);


    const { nome, email, telefono, messaggio } = data;

    // Configura SMTP via variabili d'ambiente
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true", // true se 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
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
  to: "metodogold7@gmail.com",
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
