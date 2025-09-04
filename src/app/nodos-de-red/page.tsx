import Image from 'next/image';
import Contacto from '../components/Contacto';
import { CheckIcon, ServerStackIcon, CircleStackIcon, CogIcon, ArrowPathIcon, ShieldCheckIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const benefits = [
  { name: 'Rendimiento Óptimo', icon: ArrowPathIcon },
  { name: 'Alta Disponibilidad', icon: ServerStackIcon },
  { name: 'Seguridad Robusta', icon: ShieldCheckIcon },
  { name: 'Gestión Simplificada', icon: CogIcon },
  { name: 'Escalabilidad', icon: CircleStackIcon },
  { name: 'Soporte Experto', icon: AcademicCapIcon },
];

const serviceSections = [
  {
    title: "Switching y Routing",
    description: "Implementamos y configuramos switches y routers de alto rendimiento para gestionar el tráfico de tu red de manera eficiente, asegurando que los datos lleguen a su destino de forma rápida y segura.",
    features: ["Configuración de VLANs", "Balanceo de Carga", "Gestión de Ancho de Banda"],
    imageUrl: "/switching-routing.jpg" // CAMBIAR IMAGEN
  },
  {
    title: "Infraestructura de Servidores",
    description: "Diseñamos e instalamos la infraestructura de servidores que tu empresa necesita, ya sea física o virtual, para garantizar la disponibilidad y el rendimiento de tus aplicaciones críticas.",
    features: ["Servidores Físicos y Virtuales", "Almacenamiento SAN y NAS", "Soluciones de Respaldo"],
    imageUrl: "/servidores.jpg" // CAMBIAR IMAGEN
  },
];

export default function NodosPage() {
  return (
    <div className="bg-white text-black">
      <div className="relative h-[50vh] min-h-[300px]">
        <Image src="/nodosdered.jpg" alt="Nodos de Red" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white text-center px-4">
            Nodos de Red e Infraestructura
          </h1>
        </div>
      </div>
      
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">El Corazón de tu Operación Digital</h2>
            <p className="mt-6 text-lg text-gray-700">
              Construimos el núcleo de tu red con infraestructura robusta y confiable. Desde los servidores hasta los puntos de conexión, nos aseguramos de que tu flujo de datos sea constante, seguro y eficiente.
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