"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, X, Facebook, Instagram, Youtube, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // mobile accordions
  const [mobileMetodoOpen, setMobileMetodoOpen] = useState(false);
  const [mobileChiOpen, setMobileChiOpen] = useState(false);

  // hover delay desktop
  const closingTimeout = useRef(null);
  const CLOSE_DELAY_MS = 100;

  const handleMouseEnter = (i) => {
    if (closingTimeout.current) clearTimeout(closingTimeout.current);
    setDropdownOpen(i);
  };

  const handleMouseLeave = () => {
    if (closingTimeout.current) clearTimeout(closingTimeout.current);
    closingTimeout.current = setTimeout(() => {
      setDropdownOpen(null);
    }, CLOSE_DELAY_MS);
  };

  const menuItems = [
    {
      name: "Chi siamo",
      href: "/chi-sono",
      dropdown: [
        { name: "Cristina Barni", href: "/chi-sono/#cristinabarni" },
        { name: "Francesca Faliva", href: "/chi-sono/#francescafaliva" },
        { name: "Francesco Pachì", href: "/chi-sono/#francescopachi" },
        { name: "Luigi Satta", href: "/chi-sono/#luigisatta" },
        { name: "Teresa Mazzei", href: "/chi-sono/#teresamazzei" },
        { name: "Nicola Satta", href: "/chi-sono/#nicolasatta" },
      ],
    },
    {
      name: "Metodo Gold",
      href: "/chi-sono/il-metodo-gold",
      dropdown: [
        { name: "Gnatologia", href: "/chi-sono/il-metodo-gold#gnatologia" },
        { name: "Osteopatia", href: "/chi-sono/il-metodo-gold#osteopatia" },
        { name: "Omeopatia", href: "/chi-sono/il-metodo-gold#omeopatia" },
        { name: "Optometria", href: "/chi-sono/il-metodo-gold#optometria" },
        { name: "Logopedia", href: "/chi-sono/il-metodo-gold#logopedia" },
        { name: "Dentosofia", href: "/chi-sono/il-metodo-gold#dentosofia" },
        { name: "Biomagnetismo", href: "/chi-sono/il-metodo-gold#biomagnetismo" },
        {
          name: "Terapie Essene ed Egizie",
          href: "/chi-sono/il-metodo-gold#terapie-antiche",
        },
      ],
    },
    { name: "Formazione", href: "/corsi" },
    { name: "Eventi", href: "/eventi" },
    { name: "Media", href: "/media" },
    { name: "Contatti", href: "/contatti" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#4d1844] shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" aria-label="Metodo Gold">
          <img src="/images/logo.png" alt="Metodo Gold" className="h-20" />
        </Link>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(i)}
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                <Link
                  href={item.href}
                  className="text-white/90 hover:text-yellow-300 transition-colors duration-300 text-[15px] font-medium tracking-wide inline-flex items-center gap-1"
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown size={16} className="opacity-80" />
                  )}
                </Link>

                {item.dropdown && dropdownOpen === i && (
                  <ul className="absolute top-full left-0 bg-white shadow-lg rounded-xl mt-3 py-2 w-64 z-50">
                    {item.dropdown.map((sub, j) => (
                      <li key={j}>
                        <Link
                          href={sub.href}
                          className="block py-2 px-4 hover:bg-yellow-50 rounded-lg text-gray-700 hover:text-yellow-700 transition"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Social desktop */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/metodogold"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/dr.cristinabarni_metodogold"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.youtube.com/@CristinaBarni"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white hover:text-yellow-400"
          onClick={() => {
            setMenuOpen((v) => !v);
            setMobileMetodoOpen(false);
            setMobileChiOpen(false);
          }}
          aria-label="Apri menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

{/* ================= MOBILE ================= */}
{menuOpen && (
  <div className="md:hidden bg-[#4d1844] border-t border-white/10">
    <ul className="flex flex-col gap-1 py-3 px-6">

      {/* CHI SIAMO */}
      <li>
        <div className="relative flex items-center py-2">
          <Link
            href="/chi-sono"
            className="flex-1 pr-12 text-white hover:text-yellow-400 transition font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Chi siamo
          </Link>

          <button
            type="button"
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white hover:text-yellow-400 transition"
            aria-label="Apri sottomenu Chi siamo"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileChiOpen((v) => !v);
            }}
          >
            <ChevronDown
              size={18}
              className={`transition-transform ${mobileChiOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {mobileChiOpen && (
          <ul className="ml-4 pb-2">
            {menuItems
              .find((x) => x.name === "Chi siamo")
              ?.dropdown?.map((leaf, i) => (
                <li key={i}>
                  <Link
                    href={leaf.href}
                    className="block text-white/80 hover:text-yellow-400 transition text-sm py-1.5"
                    onClick={() => setMenuOpen(false)}
                  >
                    • {leaf.name}
                  </Link>
                </li>
              ))}
          </ul>
        )}
      </li>

      {/* METODO GOLD */}
      <li>
        <div className="relative flex items-center py-2">
          <Link
            href="/chi-sono/il-metodo-gold"
            className="flex-1 pr-12 text-white hover:text-yellow-400 transition font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Metodo Gold
          </Link>

          <button
            type="button"
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-white hover:text-yellow-400 transition"
            aria-label="Apri sottomenu Metodo Gold"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileMetodoOpen((v) => !v);
            }}
          >
            <ChevronDown
              size={18}
              className={`transition-transform ${mobileMetodoOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {mobileMetodoOpen && (
          <ul className="ml-4 pb-2">
            {menuItems
              .find((x) => x.name === "Metodo Gold")
              ?.dropdown?.map((leaf, i) => (
                <li key={i}>
                  <Link
                    href={leaf.href}
                    className="block text-white/80 hover:text-yellow-400 transition text-sm py-1.5"
                    onClick={() => setMenuOpen(false)}
                  >
                    • {leaf.name}
                  </Link>
                </li>
              ))}
          </ul>
        )}
      </li>

      {/* RESTO MENU */}
      {menuItems
        .filter((x) => !["Chi siamo", "Metodo Gold"].includes(x.name))
        .map((item, i) => (
          <li key={i}>
            <Link
              href={item.href}
              className="block text-white hover:text-yellow-400 transition py-2"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
    </ul>
  </div>
)}
    </nav>
  );
}