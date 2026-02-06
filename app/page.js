import HeroHomeClient from "../components/HeroHomeClient";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Metodo Gold | Approccio integrato alla salute",
  description:
    "Metodo Gold è un approccio integrato alla salute che mette in dialogo gnatologia, osteopatia, logopedia, dentosofia e discipline complementari.",
  openGraph: {
    title: "Metodo Gold | Approccio integrato alla salute",
    description:
      "Un metodo che unisce corpo, funzione e consapevolezza attraverso discipline integrate.",
    url: "https://www.metodogold.it",
    siteName: "Metodo Gold",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Metodo Gold – Approccio integrato alla salute",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className={`text-gray-800 ${dmSans.className}`}>
      <HeroHomeClient />
    </main>
  );
}
