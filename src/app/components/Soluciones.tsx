import Image from "next/image";
import { CheckCircleIcon } from '@heroicons/react/24/outline'; // Icono

const Soluciones = () => {
  return (
    <section id="soluciones" className="bg-gradient-to-br from-white to-gray-50 text-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Columna de Texto y Animación */}
        <div className="text-left animate-fadeInRight" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            SOLUCIONES INTEGRALES
          </h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900 leading-tight">
            Implementa soluciones a la medida de tus necesidades
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            En CZC Projects convertimos tu proyecto en la mejor experiencia de servicio. Te asesoramos en tu inversión y aseguramos el funcionamiento ininterrumpido de nuestras soluciones en CCTV, paneles solares e infraestructura de redes.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">
                Asesoría experta para maximizar tu inversión.
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">
                Garantía de funcionamiento ininterrumpido.
              </p>
            </div>
            <div className="flex items-start">
              <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">
                Modelos de gestión eficientes para resultados excelentes.
              </p>
            </div>
          </div>
        </div>
        {/* Columna de Imagen y Animación */}
        <div className="w-full h-full animate-fadeInScale" style={{ animationDelay: '0.4s' }}>
          <Image
            src="/imagenrecurso1.jpg"
            alt="Soluciones a la medida"
            width={700}
            height={500}
            className="rounded-xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Soluciones;