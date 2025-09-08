// src/app/components/Header.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDownIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
// --- CAMBIO AQUÍ: Importamos el tipo y la lista ---
import { serviceMenuItems, type MenuItem } from "@/lib/navegation";

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 p-4">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="w-40">
            <Link href="/">
              <Image src="/logo-text-white.png" alt="CZC Projects Logo" width={200} height={200} priority className="w-full h-auto" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-lg font-medium text-white">
            <Link href="/#nosotros" className="hover:text-blue-400 transition-colors">Nosotros</Link>
            <div className="relative" ref={submenuRef}>
              <button onClick={() => setIsSubMenuOpen(!isSubMenuOpen)} className="hover:text-blue-400 transition-colors flex items-center">
                ¿Qué hacemos?
                <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform duration-300 ${isSubMenuOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-gray-800 text-white rounded-md shadow-lg transition-all duration-300 transform ${isSubMenuOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"}`}>
                {/* --- CAMBIO AQUÍ: Añadimos el tipo a 'item' --- */}
                {serviceMenuItems.map((item: MenuItem) => (
                  <Link key={item.title} href={item.href} onClick={() => setIsSubMenuOpen(false)} className="block px-4 py-3 hover:bg-gray-700 first:rounded-t-md last:rounded-b-md text-sm">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/cotiza" className="hover:text-blue-400 transition-colors">Cotiza tu proyecto</Link>
            <Link href="/#contacto" className="border border-white px-5 py-2 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">Contacto</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} className="text-white hover:text-blue-400 transition-colors">
              <Bars3Icon className="w-8 h-8" />
            </button>
          </div>
        </nav>
      </header>
      <div className={`fixed inset-0 bg-black bg-opacity-95 z-[100] transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-blue-400 transition-colors">
            <XMarkIcon className="w-8 h-8" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-20 px-6">
          <Link href="/#nosotros" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold mb-8 hover:text-blue-400">Nosotros</Link>
          <div className="w-full max-w-sm mb-8">
            <h3 className="mb-4 text-2xl font-semibold text-center">¿Qué hacemos?</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-center">
              {/* --- CAMBIO AQUÍ: Añadimos el tipo a 'item' --- */}
              {serviceMenuItems.map((item: MenuItem) => (
                <Link key={item.title} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-lg text-gray-300 hover:text-blue-400 py-1">{item.title}</Link>
              ))}
            </div>
          </div>
          <Link href="/cotiza" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold mb-8 hover:text-blue-400">Cotiza tu proyecto</Link>
          <Link href="/#contacto" onClick={() => setIsMobileMenuOpen(false)} className="border px-6 py-2 text-xl font-semibold rounded-md">Contacto</Link>
        </div>
      </div>
    </>
  );
};
export default Header;