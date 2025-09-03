import Image from "next/image";
import { RocketLaunchIcon, UserGroupIcon, ClockIcon, TrophyIcon } from '@heroicons/react/24/outline'; // Iconos para stats

const stats = [
  { name: "Proyectos exitosos", value: "2,000+", icon: RocketLaunchIcon },
  { name: "Clientes satisfechos", value: "250+", icon: UserGroupIcon },
  { name: "Horas de capacitación", value: "7k+", icon: ClockIcon },
  { name: "Integrador oro y platinum", value: "4+", icon: TrophyIcon },
];

const marcas = [
  { name: "Ruijie", src: "/ruijie.png" },
  { name: "FAAC", src: "/faac.png" },
  { name: "CyberPower", src: "/cyberpower.png" },
  { name: "Growatt", src: "/growatt.png" },
  { name: "Ecoflow", src: "/ecoflow.png" },
  { name: "Hoymiles", src: "/hoymiles.png" },
  { name: "Hikvision", src: "/hikvision.png" },
  { name: "Huawei", src: "/huawei.png" },
  { name: "Kenwood", src: "/kenwood.png" },
  { name: "Panduit", src: "/panduit.png" },
  { name: "Synology", src: "/synology.png" },
  { name: "TP-Link", src: "/tplink.png" },
  // Asegúrate de que todos tus logos de la carpeta /public estén listados aquí
];

const Alianzas = () => {
  const duplicatedMarcas = [...marcas, ...marcas];

  return (
    <section id="alianzas" className="bg-gray-100 text-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.name}
                className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <p className="text-5xl font-extrabold text-blue-700">{stat.value}</p>
                <p className="mt-2 text-gray-700 font-medium">{stat.name}</p>
              </div>
            );
          })}
        </div>

        {/* Banner de Alianzas con Marquee */}
        <div className="text-center mt-16 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-base font-semibold leading-7 text-gray-500">
            NUESTROS PARTNERS
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 mb-12">
            Grandes Alianzas Estratégicas
          </p>
          <div className="relative w-full overflow-hidden py-8">
            <div className="flex animate-[marquee_30s_linear_infinite] group-hover:pause">
              {duplicatedMarcas.map((marca, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-6 opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={marca.src}
                    alt={marca.name}
                    width={150}
                    height={80}
                    className="object-contain max-h-16"
                  />
                </div>
              ))}
            </div>
            {/* Gradientes para los bordes del marquee */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-100 to-transparent"></div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-100 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alianzas;