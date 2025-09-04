import Image from 'next/image';
import Contacto from '../components/Contacto';
import { CheckIcon, SunIcon, CurrencyDollarIcon, GlobeAltIcon, BoltIcon, CogIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

// --- REEMPLAZA ESTA INFORMACIÓN PARA CADA PÁGINA ---
const heroInfo = {
  title: "Paneles Solares",
  image: "/panelessolares.jpg"
};

const benefits = [
  { name: 'Ahorro Energético', icon: CurrencyDollarIcon },
  { name: 'Energía Limpia', icon: SunIcon },
  { name: 'Independencia Energética', icon: BoltIcon },
  { name: 'Bajo Mantenimiento', icon: CogIcon },
  { name: 'Aumento de Plusvalía', icon: ShieldCheckIcon },
  { name: 'Impacto Ambiental', icon: GlobeAltIcon },
];

const serviceSections = [
  {
    title: "Sistemas On-Grid",
    description: "Conéctate a la red de CFE y reduce tu factura eléctrica al máximo. Vende tu excedente de energía y obtén un retorno de inversión acelerado.",
    features: ["Inversores de última generación", "Paneles de alta eficiencia", "Gestión de trámites"],
    imageUrl: "/paneles-solares-on-grid.jpg" // CAMBIAR IMAGEN
  },
  {
    title: "Sistemas Off-Grid (Aislados)",
    description: "Genera y almacena tu propia energía en lugares sin acceso a la red eléctrica. Ideal para ranchos, cabañas y operaciones remotas.",
    features: ["Bancos de baterías de litio", "Controladores de carga inteligentes", "Autonomía garantizada"],
    imageUrl: "/paneles-solares-off-grid.jpg" // CAMBIAR IMAGEN
  },
];
// --- FIN DE LA SECCIÓN PARA REEMPLAZAR ---


export default function ServicePageTemplate() {
  return (
    <div className="bg-white text-black">
      <div className="relative h-[50vh] min-h-[300px]">
        <Image src={heroInfo.image} alt={heroInfo.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white text-center px-4">
            {heroInfo.title}
          </h1>
        </div>
      </div>
      
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Invierte en Energía Inteligente</h2>
            <p className="mt-6 text-lg text-gray-700">
              Ofrecemos soluciones de energía solar personalizadas que te permiten tomar el control de tu consumo energético, reducir costos y operar de manera sostenible.
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