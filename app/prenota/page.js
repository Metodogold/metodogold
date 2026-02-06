// app/prenota/page.js
import PrenotaClient from "../../components/PrenotaClient";

export const metadata = {
  title: "Prenota un contatto | Metodo Gold",
  description:
    "Richiedi informazioni o prenota un contatto con Metodo Gold. Ti ricontatteremo nel più breve tempo possibile.",
};

export default function Page() {
  return <PrenotaClient />;
}
