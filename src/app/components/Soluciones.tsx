"use client"; // Necesario para usar hooks de React para la animación

import Image from "next/image";
import { VideoCameraIcon, SunIcon, ServerStackIcon, WifiIcon, GlobeAltIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from "react";

// Array con las rutas de las imágenes que van a rotar
const images = [
  "/camarasdeseguridad.jpg",
  "/panelessolares.jpg",
  "/cableadoestrucutrado.jpg",
  "/arquitecturawifi.jpg",
  "/nodosdered.jpg",
];

const Soluciones = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Cambia la imagen cada 2.5 segundos
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <section id="soluciones" className="bg-white text-black py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="text-left">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Proyectos a tu medida
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
            Integramos Tecnología de Vanguardia
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Desde la seguridad de tu hogar hasta la infraestructura de tu empresa, nos especializamos en diseñar e implementar las soluciones tecnológicas que necesitas, garantizando siempre eficiencia y tranquilidad.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
            <div className="flex items-center">
              <VideoCameraIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
              <p className="text-lg text-gray-800 font-medium">Cámaras de seguridad</p>
            </div>
            <div className="flex items-center">
              <SunIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
              <p className="text-lg text-gray-800 font-medium">Paneles solares</p>
            </div>
            <div className="flex items-center">
              <ServerStackIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
              <p className="text-lg text-gray-800 font-medium">Cableado estructurado</p>
            </div>
            <div className="flex items-center">
              <WifiIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
              <p className="text-lg text-gray-800 font-medium">Arquitectura WIFI</p>
            </div>
            <div className="flex items-center">
              <GlobeAltIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
              <p className="text-lg text-gray-800 font-medium">Nodos de red</p>
            </div>
          </div>
        </div>

        {/* Contenedor del carrusel de imágenes */}
        <div className="relative w-full h-80 md:h-full min-h-[300px]">
          {images.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Solución tecnológica ${index + 1}`}
              fill
              priority={index === 0} // Prioriza la carga de la primera imagen
              className={`rounded-lg shadow-lg object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Soluciones;