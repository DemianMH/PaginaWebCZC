import Image from 'next/image';
import Contacto from '../components/Contacto';
import { CheckIcon, ClockIcon, EyeIcon, BoltIcon, ShieldExclamationIcon, ShieldCheckIcon, CogIcon } from '@heroicons/react/24/outline';

const benefits = [
  { name: 'Vigilancia 24/7', icon: ClockIcon },
  { name: 'Monitoreo inteligente', icon: EyeIcon },
  { name: 'Respuesta rápida', icon: BoltIcon },
  { name: 'Efecto disuasorio', icon: ShieldExclamationIcon },
  { name: 'Protección de activos', icon: ShieldCheckIcon },
  { name: 'Seguridad y control', icon: CogIcon },
];

const serviceSections = [
  {
    title: "Vídeo seguridad",
    description: "Conjunto de dispositivos que incluyen cámaras y software de grabación, diseñados para monitorear y registrar eventos en tiempo real. Estas cámaras capturan imágenes y vídeos que se almacenan de manera segura.",
    features: ["Cámaras", "NVR", "Servidor todo en uno"],
    imageUrl: "/videosupervision.jpg"
  },
  {
    title: "Sistema de alarmas",
    description: "Componente de seguridad pasiva que desempeña un papel crucial al proporcionar alertas tempranas sobre posibles riesgos inminentes, mejorando la capacidad de respuesta.",
    features: ["Kit completo para panel de alarmas", "Kit de alarmas residencial", "Panel de alambra inalámbrico"],
    imageUrl: "/sistemaalarma.jpg"
  },
  {
    title: "Detección de incendios",
    description: "Un sistema de detección de incendios es un conjunto de dispositivos diseñados para detectar de manera temprana cualquier indicio de fuego y alertar de inmediato a las personas pertinentes.",
    features: ["Detector inalámbrico", "Estación manual de emergencia", "Detector de humo", "Anunciador serial"],
    imageUrl: "/deteccionincendios.jpg"
  },
  {
    title: "Detección perimetral",
    description: "Dispositivos especializados diseñados para identificar y registrar cualquier intento de entrada no autorizada. Su función principal es salvaguardar la integridad del perímetro al alertar de inmediato.",
    features: ["Cable sensor perimetral", "Detector de rayo fotoeléctrico", "Detector de movimiento"],
    imageUrl: "/deteccionperimetral.jpg"
  },
  {
    title: "Control de accesos",
    description: "Sistema automatizado que tiene como propósito principal el regular el acceso de individuos a las instalaciones de la organización o áreas internas específicas.",
    features: ["Lector de proximidad", "Lectores de tarjetas", "Lector de huella", "Lector biométrico"],
    imageUrl: "/controlacceso.jpg"
  },
  {
    title: "Localización GPS",
    description: "Sistema con el que podrás tener un mayor control y acceso a la ubicación de los equipos en campo. Mejora la eficiencia operativa y facilita la planificación estratégica.",
    features: ["Software de despacho y localización GPS", "Kit de localizador vehicular", "Localizador 3G"],
    imageUrl: "/localizaciongps.jpg"
  }
];

export default function CamarasPage() {
  return (
    <div className="bg-white text-black">
      <div className="relative h-[50vh] min-h-[300px]">
        <Image src="/camarasdeseguridad.jpg" alt="Seguridad Física y Electrónica" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white text-center px-4">
            Lugar vigilado, lugar serguro
          </h1>
        </div>
      </div>
      
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Fortalece la Seguridad en tu Empresa</h2>
            <p className="mt-6 text-lg text-gray-700">
              Apoyamos a nuestros clientes a estar preparados para ser menos vulnerables ante una amenaza y garantizar su seguridad. Protege recursos valiosos frente a posibles riesgos que puedan afectar la integridad de tu empresa y personal.
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