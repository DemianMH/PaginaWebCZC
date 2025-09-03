"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface LandingAnimationProps {
  onAnimationComplete: () => void;
}

const animatedIcons = [
  "/logo-huella.png",
  "/logo-localizador.png",
  "/logo-camara.png",
  "/logo-huella-direccion.png",
  "/logo-panel-solar.png",
];

const LandingAnimation: React.FC<LandingAnimationProps> = ({ onAnimationComplete }) => {
  const [visibleIconsCount, setVisibleIconsCount] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    if (animationFinished) return;

    const iconTimers: NodeJS.Timeout[] = [];
    animatedIcons.forEach((_, index) => {
      iconTimers.push(
        setTimeout(() => {
          setVisibleIconsCount((prev) => prev + 1);
        }, (index + 1) * 300) // Un poco más rápido
      );
    });

    const finalTransitionTimer = setTimeout(() => {
      setAnimationFinished(true);
      setTimeout(onAnimationComplete, 800); // Transición final más rápida
    }, (animatedIcons.length + 1) * 300 + 400);

    return () => {
      iconTimers.forEach(clearTimeout);
      clearTimeout(finalTransitionTimer);
    };
  }, [onAnimationComplete, animationFinished]);

  return (
    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
      <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-400 ${animationFinished ? "opacity-0" : "opacity-100"}`}>
        <Image
          src="/logo-central.png"
          alt="Logo Central"
          fill
          priority
          className="object-contain animate-fadeInScale" // Animación de escala
        />
      </div>

      <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-400 ${animationFinished ? "opacity-0" : "opacity-100"}`}>
        {animatedIcons.map((src, index) => (
          <div
            key={src}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-200 ${
              index < visibleIconsCount ? "opacity-100 animate-fadeInScale" : "opacity-0" // Animación de escala para iconos
            }`}
          >
            <Image
              src={src}
              alt={`Icono de animación ${index}`}
              fill
              priority
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className={`absolute top-0 left-0 w-full h-full transition-opacity duration-800 ${animationFinished ? "opacity-100" : "opacity-0"}`}>
        <Image
          src="/logo-text-white.png"
          alt="Logo CZC Projects Completo"
          fill
          priority
          className="object-contain animate-fadeInScale" // Animación de escala para logo final
        />
      </div>
    </div>
  );
};

export default LandingAnimation;