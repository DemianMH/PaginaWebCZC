"use client"
import Image from "next/image";
import { RocketLaunchIcon, UserGroupIcon, ClockIcon, TrophyIcon } from '@heroicons/react/24/outline';

const stats = [
  { name: "Proyectos exitosos", value: "2,000+", icon: RocketLaunchIcon },
  { name: "Clientes satisfechos", value: "250+", icon: UserGroupIcon },
  { name: "Horas de capacitación", value: "7k+", icon: ClockIcon },
  { name: "Integrador oro y platinum", value: "4+", icon: TrophyIcon },
];

const marcas = [
  { name: "Ruijie", src: "/ruijie.png" },
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
];

const MarqueeRow = ({ items, reverse = false }: { items: {name: string, src: string}[], reverse?: boolean }) => {
  const extendedItems = [...items, ...items, ...items, ...items];
  const animationClass = reverse ? "animate-[marquee-reverse_25s_linear_infinite]" : "animate-[marquee_25s_linear_infinite]";

  return (
    <div className="flex w-full">
      <div className={`flex w-max items-center ${animationClass} hover:pause`}>
        {extendedItems.map((item, index) => (
          <div key={`${item.name}-${index}`} className="flex-shrink-0 w-32 sm:w-48 h-24 flex items-center justify-center mx-4 sm:mx-6">
            <Image
              src={item.src}
              alt={item.name}
              width={140}
              height={70}
              className="object-contain max-h-12 sm:max-h-16 opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Alianzas = () => {
  const chunkSize = Math.ceil(marcas.length / 3);
  const row1 = marcas.slice(0, chunkSize);
  const row2 = marcas.slice(chunkSize, chunkSize * 2);
  const row3 = marcas.slice(chunkSize * 2);

  return (
    <section id="alianzas" className="bg-gray-100 text-black py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.name}
                className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all duration-300"
              >
                <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <p className="text-5xl font-extrabold text-blue-700">{stat.value}</p>
                <p className="mt-2 text-gray-700 font-medium">{stat.name}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-16">
          <h2 className="text-base font-semibold leading-7 text-gray-500">
            NUESTROS PARTNERS
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl text-gray-900 mb-12">
            Grandes Alianzas Estratégicas
          </p>
          <div className="relative w-full overflow-hidden py-8 flex flex-col space-y-4 group">
            <MarqueeRow items={row1} />
            <MarqueeRow items={row2} reverse={true} />
            <MarqueeRow items={row3} />
            <div className="absolute top-0 left-0 w-16 sm:w-24 h-full bg-gradient-to-r from-gray-100 to-transparent"></div>
            <div className="absolute top-0 right-0 w-16 sm:w-24 h-full bg-gradient-to-l from-gray-100 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Alianzas;