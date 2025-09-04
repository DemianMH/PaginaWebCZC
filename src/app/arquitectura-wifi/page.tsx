import Image from 'next/image';
import Contacto from '../components/Contacto';
import { CheckIcon, BoltIcon, MapIcon, ChartBarIcon, ShieldCheckIcon, SignalIcon, CogIcon } from '@heroicons/react/24/outline';

const benefits = [
  { name: 'Cobertura Total', icon: MapIcon },
  { name: 'Alta Velocidad', icon: BoltIcon }, // Asumiendo que BoltIcon está disponible o usar SignalIcon
  { name: 'Conexión Estable', icon: SignalIcon },
  { name: 'Red Segura', icon: ShieldCheckIcon },
  { name: 'Gestión Centralizada', icon: CogIcon },
  { name: 'Escalabilidad Futura', icon: ChartBarIcon },
];

const serviceSections = [
  {
    title: "Diseño y Site Survey",
    description: "Realizamos un análisis exhaustivo de tu espacio para diseñar una red WIFI con cobertura óptima, eliminando zonas muertas y garantizando una señal fuerte y estable en todas las áreas críticas.",
    features: ["Mapas de calor predictivos", "Análisis de espectro", "Planificación de capacidad"],
    imageUrl: "/wifi-survey.jpg" // CAMBIAR IMAGEN
  },
  {
    title: "Instalación de Access Points",
    description: "Instalamos puntos de acceso de última generación en ubicaciones estratégicas para maximizar el rendimiento y la cobertura de tu red inalámbrica, asegurando una experiencia de usuario fluida.",
    features: ["Equipos WIFI 6 y 6E", "Instalación profesional y estética", "Configuración de redes para invitados"],
    imageUrl: "/access-points.jpg" // CAMBIAR IMAGEN
  },
];

export default function WifiPage() {
  return (
    <div className="bg-white text-black">
      <div className="relative h-[50vh] min-h-[300px]">
        <Image src="/arquitecturawifi.jpg" alt="Arquitectura WIFI" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white text-center px-4">
            Arquitectura WIFI
          </h1>
        </div>
      </div>
      
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Conectividad Inalámbrica sin Límites</h2>
            <p className="mt-6 text-lg text-gray-700">
              Diseñamos e implementamos redes WIFI de alto rendimiento que garantizan una conexión rápida, estable y segura en toda tu empresa u hogar. Desde oficinas hasta grandes almacenes, creamos soluciones a la medida.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">BENEFICIOS</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.name} className="flex flex-col items-center">
                  <div className="bg-white/10 p-4 rounded-full">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <p className="mt-4 font-semibold text-center">{benefit.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {serviceSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                <p className="mt-4 text-gray-700">{section.description}</p>
                <div className="relative h-64 w-full my-6 rounded-lg overflow-hidden shadow-md">
                  <Image src={section.imageUrl} alt={section.title} fill className="object-cover" />
                </div>
                <ul className="mt-6 space-y-2">
                  {section.features.map(feature => (
                    <li key={feature} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contacto />
    </div>
  );
}