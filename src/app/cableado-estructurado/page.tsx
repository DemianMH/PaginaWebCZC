import Image from 'next/image';
import Contacto from '../components/Contacto';
import { CheckIcon, ServerStackIcon, BoltIcon, ChartBarIcon, ShieldCheckIcon, WrenchScrewdriverIcon, CogIcon } from '@heroicons/react/24/outline';

const benefits = [
  { name: 'Máxima Velocidad', icon: BoltIcon },
  { name: 'Confiabilidad', icon: ShieldCheckIcon },
  { name: 'Organización', icon: ServerStackIcon },
  { name: 'Fácil Mantenimiento', icon: WrenchScrewdriverIcon },
  { name: 'Escalabilidad', icon: ChartBarIcon },
  { name: 'Gestión Centralizada', icon: CogIcon },
];

const serviceSections = [
  {
    title: "Instalación de Cobre y Fibra Óptica",
    description: "Realizamos instalaciones de cableado de cobre (Cat 6, 6A, 7) y fibra óptica para garantizar la máxima velocidad y fiabilidad en la transmisión de datos, voz y video en tu empresa.",
    features: ["Certificación de puntos de red", "Tendido en charola y tubería", "Conectorización y fusiones"],
    imageUrl: "/fibra-optica.jpg" // CAMBIAR IMAGEN
  },
  {
    title: "Racks y Gabinetes",
    description: "Diseñamos y organizamos racks de comunicaciones para centralizar tu equipamiento de red de manera ordenada, segura y accesible, facilitando la gestión y el mantenimiento.",
    features: ["Peinado de cableado", "Instalación de organizadores", "Sistemas de ventilación"],
    imageUrl: "/rack-servidores.jpg" // CAMBIAR IMAGEN
  },
];

export default function CableadoPage() {
  return (
    <div className="bg-white text-black">
      <div className="relative h-[50vh] min-h-[300px]">
        <Image src="/cableadoestrucutrado.jpg" alt="Cableado Estructurado" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white text-center px-4">
            Cableado Estructurado
          </h1>
        </div>
      </div>
      
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">La Base Sólida de tu Red</h2>
            <p className="mt-6 text-lg text-gray-700">
              Un sistema de cableado estructurado es la columna vertebral de cualquier infraestructura tecnológica. Diseñamos e implementamos soluciones ordenadas y certificadas que garantizan la máxima velocidad y confiabilidad para tu red.
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