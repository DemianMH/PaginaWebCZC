"use client";

import { useState } from "react";
import LandingAnimation from "./components/LandingAnimation";
import Soluciones from "./components/Soluciones";
import Sectores from "./components/Sectores";
import Alianzas from "./components/Alianzas";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  const handleAnimationComplete = () => {
    setLoading(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen z-[-2]">
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
      <div className="fixed top-0 left-0 w-full h-screen bg-black/60 z-[-1]"></div>
      
      <main className="relative z-10 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center px-4">
          {loading ? (
            <LandingAnimation onAnimationComplete={handleAnimationComplete} />
          ) : (
            <div className={`flex flex-col items-center`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-slow">
                ¿Qué proyecto quieres <br /> que te realicemos?
              </h1>
              <button className="bg-blue-600 text-white px-8 py-3 text-lg font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 animate-fade-in-slow [animation-delay:200ms]">
                Cotización
              </button>
            </div>
          )}
        </div>
      </main>

      <div className="relative z-10 bg-white">
        <Nosotros />
        <Soluciones />
        <Sectores />
        <Alianzas />
        <Contacto />
      </div>
    </>
  );
}