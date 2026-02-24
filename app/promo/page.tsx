import type { Metadata } from "next";
import PromoClient from "./promo-client";

export const metadata: Metadata = {
  title: "Corso di Osteopatia Gnatologica Integrata | Promo",
  description:
    "Percorso annuale teorico–pratico in 3 moduli a Roma. 50 crediti ECM e attestato di partecipazione.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <PromoClient />;
}
