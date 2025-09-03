import Image from "next/image";
import { BuildingOfficeIcon, ShoppingBagIcon, WrenchScrewdriverIcon, HomeModernIcon } from '@heroicons/react/24/outline'; // Nuevos iconos

const sectores = [
  {
    name: "Corporativo y Oficinas",
    description: "Soluciones de seguridad, conectividad y energía para un entorno de oficina moderno, seguro y eficiente.",
    imageUrl: "/corporativo.jpg",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Comercial",
    description: "Aseguramos la eficiencia operativa y la seguridad de datos y video para satisfacer las necesidades de tu negocio.",
    imageUrl: "/tiendacomercial.jpg",
    icon: ShoppingBagIcon,
  },
  {
    name: "Industrial",
    description: "Servicios de CCTV y redes diseñados para soportar las demandas únicas de la producción industrial y logística.",
    imageUrl: "/fabricas.jpg",
    icon: WrenchScrewdriverIcon, // Icono alternativo para industrial
  },
  {
    name: "Hogar",
    description: "Protege a tu familia e invierte en energía limpia con nuestros sistemas de seguridad y paneles solares residenciales.",
    imageUrl: "/hogar.jpg",
    icon: HomeModernIcon,
  },
];

const Sectores = () => {
  return (
    <section id="sectores" className="relative bg-black/80 text-white py-20 sm:py-28 overflow-hidden">
      {/* Video de Fondo para la sección */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/imagenprincipal.png" // O una imagen específica para esta sección
          className="w-full h-full object-cover opacity-20 transition-opacity duration-500 hover:opacity-30" // Opacidad baja
        >
          <source src="/videolideres.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-400 animate-fadeInUp">
          NUESTROS SECTORES
        </h2>
        <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-white leading-tight animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Líderes en Soluciones Tecnológicas
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          Nuestra amplia experiencia nos hace líderes en la provisión de soluciones de seguridad, redes y energía solar, adaptadas a las necesidades específicas de cada cliente.
        </p>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectores.map((sector, index) => {
            const IconComponent = sector.icon; // Componente de icono
            return (
              <div
                key={sector.name}
                className="bg-gray-800 p-8 rounded-xl shadow-xl text-left transform hover:scale-105 transition-all duration-300 cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={sector.imageUrl}
                    alt={sector.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <IconComponent className="h-12 w-12 text-white" /> {/* Icono sobre la imagen */}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 flex items-center text-white">
                    <IconComponent className="h-6 w-6 text-blue-400 mr-2" />
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