import Image from "next/image";
import { VideoCameraIcon, SunIcon, ServerStackIcon, WifiIcon, GlobeAltIcon } from '@heroicons/react/24/solid';

const Soluciones = () => {
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
        <div className="w-full h-full">
          <Image
            src="/imagenrecurso1.jpg"
            alt="Proceso de soluciones a la medida"
            width={700}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Soluciones;