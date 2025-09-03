"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDownIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'; 

const submenuItems = [
  { title: "Seguridad Física y Electrónica", href: "#seguridad" },
  { title: "Infraestructura Física", href: "#infraestructura" },
  { title: "Data Center", href: "#data-center" },
  { title: "Sistemas Eléctricos", href: "#electricos" },
  { title: "Servicios de Gestión y Diseño", href: "#gestion" },
  { title: "Impresión Medio y Alto Volumen", href: "#impresion" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        setIsSubMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [submenuRef]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="w-full z-50 p-6 transition-all duration-300">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="w-48">
            <Link href="/">
              <Image
                src="/logo-text-white.png"
                alt="CZC Projects Logo"
                width={300}
                height={300}
                priority
                className="w-full h-auto"
              />
            </Link>
          </div>

          {/* Menú de Escritorio */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
            <Link href="#nosotros" className="hover:text-blue-400 transition-colors">
              Nosotros
            </Link>
            <div className="relative" ref={submenuRef}>
              <button
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                className="hover:text-blue-400 transition-colors flex items-center"
              >
                ¿Qué hacemos?
                <ChevronDownIcon className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${isSubMenuOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-gray-800 text-white rounded-md shadow-lg transition-all duration-300 transform ${
                  isSubMenuOpen
                    ? "opacity-100 visible scale-100"
                    : "opacity-0 invisible scale-95"
                }`}
              >
                {submenuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsSubMenuOpen(false)}
                    className="block px-4 py-3 hover:bg-gray-700 first:rounded-t-md last:rounded-b-md text-sm"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="#blog" className="hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <Link href="#contacto" className="border border-white px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
              Contacto
            </Link>
          </div>

          {/* Botón de Hamburguesa para Móvil */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-white hover:text-blue-400 transition-colors">
              <Bars3Icon className="w-8 h-8" />
            </button>
          </div>
        </nav>
      </header>

      {/* Menú Overlay para Móvil */}
      <div className={`fixed inset-0 bg-black bg-opacity-95 z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-blue-400 transition-colors">
            <XMarkIcon className="w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-16 text-3xl font-bold space-y-8">
          <Link href="#nosotros" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">Nosotros</Link>
          <div>
            <h3 className="mb-4 text-white text-3xl font-bold">¿Qué hacemos?</h3>
            <div className="text-xl space-y-4 text-gray-400">
              {submenuItems.map((item) => (
                <Link key={item.title} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">{item.title}</Link>
              ))}
            </div>
          </div>
          <Link href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors">Blog</Link>
          <Link href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="border border-white px-6 py-3 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-colors">Contacto</Link>
        </div>
      </div>
    </>
  );
};

export default Header;