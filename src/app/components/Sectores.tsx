import Image from "next/image";
import { BuildingOfficeIcon, ShoppingBagIcon, WrenchScrewdriverIcon, HomeModernIcon } from '@heroicons/react/24/outline';

const sectores = [
  {
    name: "Corporativo y Oficinas",
    description: "Integramos sistemas de CCTV, control de acceso y redes estructuradas para crear espacios de trabajo seguros y altamente productivos.",
    imageUrl: "/corporativo.jpg",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Comercial",
    description: "Aseguramos tu negocio con videovigilancia inteligente y optimizamos tus recursos energéticos con paneles solares a la medida.",
    imageUrl: "/tiendacomercial.jpg",
    icon: ShoppingBagIcon,
  },
  {
    name: "Industrial",
    description: "Desplegamos infraestructura de redes robusta y sistemas de seguridad perimetral para operaciones industriales ininterrumpidas.",
    imageUrl: "/fabricas.jpg",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Hogar",
    description: "Te damos tranquilidad con cámaras de seguridad de fácil acceso y te ayudamos a ahorrar con sistemas de energía solar residencial.",
    imageUrl: "/hogar.jpg",
    icon: HomeModernIcon,
  },
];

const Sectores = () => {
  return (
    <section id="sectores" className="relative text-white py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/videolideres.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-400">
          NUESTROS SECTORES
        </h2>
        <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-white leading-tight">
          Líderes en Soluciones Tecnológicas
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
          Nuestra amplia experiencia nos hace líderes en la provisión de soluciones de seguridad, redes y energía solar, adaptadas a las necesidades específicas de cada cliente.
        </p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectores.map((sector) => {
            const IconComponent = sector.icon;
            return (
              <div
                key={sector.name}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg text-left transform hover:scale-105 hover:bg-gray-800/80 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={sector.imageUrl}
                    alt={sector.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 flex items-center text-white">
                  <IconComponent className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0" />
                  {sector.name}
                </h3>
                <p className="mt-2 text-gray-300">{sector.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sectores;