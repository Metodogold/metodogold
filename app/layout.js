import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap" });

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const metadata = {
  title: "Metodo Gold",
  description: "Ripristina equilibrio tra funzione, postura e benessere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={`${inter.className} overflow-x-hidden`}>
  <Navbar />
  {children}
  <Footer />
</body>
    </html>
  );
}
