"use client";

import { useState } from 'react';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const areasDeInteres = [
  "Cámaras de seguridad",
  "Paneles solares",
  "Cableado estructurado",
  "Arquitectura WIFI",
  "Nodos de red",
];

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    interes: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('Gracias por tu mensaje, nos pondremos en contacto contigo pronto.');
  };

  return (
    <section id="contacto" className="relative bg-white text-black">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern id="83fd4e5a-9d52-4224-87a9-95ecbb98a58d" width={200} height={200} x="100%" y={-1} patternUnits="userSpaceOnUse">
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-4224-87a9-95ecbb98a58d)" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Ponte en contacto</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Estamos listos para escuchar sobre tu proyecto. Completa el formulario y uno de nuestros especialistas se pondrá en contacto contigo a la brevedad para ofrecerte una solución a tu medida.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none"><span className="sr-only">Dirección</span><BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" /></dt>
                <dd>Zapopan, Jalisco, México</dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none"><span className="sr-only">Teléfono</span><PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" /></dt>
                <dd><a className="hover:text-gray-900" href="tel:+521234567890">+52 (33) 3027 8673</a></dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none"><span className="sr-only">Email</span><EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" /></dt>
                <dd><a className="hover:text-gray-900" href="mailto:contact@czcprojects.com">contact@czcprojects.com</a></dd>
              </div>
            </dl>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="nombre" className="block text-sm font-semibold leading-6 text-gray-900">Nombre completo</label>
                <div className="mt-2.5"><input type="text" name="nombre" id="nombre" autoComplete="name" required className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600" onChange={handleChange} /></div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Correo electrónico</label>
                <div className="mt-2.5"><input type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600" onChange={handleChange} /></div>
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-semibold leading-6 text-gray-900">Teléfono</label>
                <div className="mt-2.5"><input type="tel" name="telefono" id="telefono" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600" onChange={handleChange} /></div>
              </div>
              <div>
                <label htmlFor="interes" className="block text-sm font-semibold leading-6 text-gray-900">Área de interés</label>
                <div className="mt-2.5">
                  <select name="interes" id="interes" required className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600" onChange={handleChange}>
                    <option value="">Elige una opción</option>
                    {areasDeInteres.map(area => <option key={area} value={area}>{area}</option>)}
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="mensaje" className="block text-sm font-semibold leading-6 text-gray-900">Mensaje</label>
                <div className="mt-2.5"><textarea name="mensaje" id="mensaje" rows={4} required className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600" onChange={handleChange} /></div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button type="submit" className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500  focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Enviar Mensaje
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contacto;