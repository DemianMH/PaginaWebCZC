"use client";

import { useState } from "react";
import LandingAnimation from "./components/LandingAnimation";
import Header from "./components/Header";
import Soluciones from "./components/Soluciones";
import Sectores from "./components/Sectores";
import Alianzas from "./components/Alianzas";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleAnimationComplete = () => {
    setLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {/* Este div contiene el VIDEO */}
      <div className="fixed top-0 left-0 w-full h-full z-[-2]">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/imagenprincipal.png"
          className="w-full h-full object-cover"
        >
          <source src="/videoprime.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Este div es la CAPA OSCURA SEMI-TRANSPARENTE. Es muy importante. */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-[-1]"></div>

      <Header />
      
      {/* Sección Hero (Inicio) */}
      <main className="relative z-10 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center px-4">
          {loading ? (
            <LandingAnimation onAnimationComplete={handleAnimationComplete} />
          ) : (
            <div className={`flex flex-col items-center`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-slow">
                Innovación de hoy para el éxito de mañana
              </h1>
              <button className="border border-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300 animate-fade-in-slow [animation-delay:200ms]">
                ¡Cotiza ahora mismo!
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Contenedor para las demás secciones */}
      <div className="relative z-10 bg-white">
        <Soluciones />
        <Sectores />
        <Alianzas />
      </div>
    </>
  );
}