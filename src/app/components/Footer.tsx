"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp } from "react-icons/fa";

const submenuItems = [
  { title: "Cámaras de seguridad", href: "/camaras-de-seguridad" },
  { title: "Paneles solares", href: "/paneles-solares" },
  { title: "Cableado estructurado", href: "/cableado-estructurado" },
  { title: "Arquitectura WIFI", href: "/arquitectura-wifi" },
  { title: "Nodos de red", href: "/nodos-de-red" },
];

const Footer = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <footer className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="mb-4 md:mb-0">
          <div className="w-40 mb-4">
            <Link href="/">
                <Image src="/logo-text-white.png" alt="CZC Projects Logo" width={300} height={300} className="w-full h-auto" />
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            Innovación de hoy para el éxito de mañana.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-400">Menú principal</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/#nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
            <li>
              <button onClick={() => setIsSubMenuOpen(!isSubMenuOpen)} className="hover:text-white flex items-center w-full text-left transition-colors">
                ¿Qué hacemos?
                <ChevronDownIcon className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${isSubMenuOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isSubMenuOpen ? "max-h-96 mt-2" : "max-h-0"}`}>
                <ul className="pl-4 space-y-2 text-sm text-gray-400">
                  {submenuItems.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href} className="hover:text-white transition-colors">{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li><Link href="/cotiza" className="hover:text-white transition-colors">Cotización</Link></li>
            <li><Link href="/#contacto" className="hover:text-white transition-colors">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-blue-400">Contactos</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="mailto:contact@czcprojects.com" className="hover:text-white transition-colors">
                contacto@czcprojects.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/523330278673" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors">
                <FaWhatsapp className="h-5 w-5" />
                <span>33 3027 8673</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} CZC Projects. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;