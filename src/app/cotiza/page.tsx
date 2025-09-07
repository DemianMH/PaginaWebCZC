'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { sendQuoteRequest, type FormState } from '@/lib/actions';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const initialState: FormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-md bg-blue-600 px-3.5 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-gray-400"
    >
      {pending ? 'Enviando Solicitud...' : 'Enviar Solicitud de Cotización'}
    </button>
  );
}

export default function CotizaPage() {
  const [state, formAction] = useActionState(sendQuoteRequest, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success, state.message]);

  return (
    <div className="bg-white text-black">
      <div className="relative h-[40vh] min-h-[250px] bg-gray-900">
        <Image src="/rack-servidores.jpg" alt="Cotización de Proyectos Tecnológicos" fill priority className="object-cover opacity-30"/>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white text-center px-4">Cotiza tu Proyecto</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Cuéntanos qué necesitas</h2>
            <p className="mt-4 text-lg text-gray-600">Completa el siguiente formulario y te enviaremos una cotización inicial a tu correo.</p>
        </div>

        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">Nombre completo</label>
              <input type="text" name="nombre" id="nombre" required className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Correo electrónico</label>
              <input type="email" name="email" id="email" required className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600" />
            </div>
            <div>
              <label htmlFor="telefono" className="block text-sm font-semibold leading-6 text-gray-900">Teléfono</label>
              <input type="tel" name="telefono" id="telefono" required className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600" />
            </div>
            {/* --- CAMBIOS AQUÍ --- */}
            <div>
              <label htmlFor="empresa" className="block text-sm font-semibold leading-6 text-gray-900">Empresa</label>
              <input type="text" name="empresa" id="empresa" required className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600" />
            </div>
             {/* --- CAMPO NUEVO AQUÍ --- */}
            <div className="sm:col-span-2">
              <label htmlFor="rfc" className="block text-sm font-semibold leading-6 text-gray-900">RFC (Opcional)</label>
              <input type="text" name="rfc" id="rfc" className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600" />
            </div>
          </div>

          <div>
            <label htmlFor="servicios" className="block text-sm font-semibold leading-6 text-gray-900">¿Qué servicios te interesan?</label>
            <select id="servicios" name="servicios" required className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600">
              <option value="">Selecciona un servicio</option>
              <option>Cámaras de seguridad</option>
              <option>Paneles solares</option>
              <option>Cableado estructurado</option>
              <option>Arquitectura WIFI</option>
              <option>Nodos de red</option>
              <option>Otro</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="descripcion" className="block text-sm font-semibold leading-6 text-gray-900">Describe tu proyecto</label>
            <textarea id="descripcion" name="descripcion" rows={5} required className="mt-2 block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-600" />
          </div>

          <div><SubmitButton /></div>

          {state.message && (
            <div key={Date.now()} className={`mt-4 flex items-center justify-center gap-x-2 text-sm font-semibold ${state.success ? 'text-green-600' : 'text-red-600'}`}>
              {state.success ? <CheckCircleIcon className="h-5 w-5"/> : <ExclamationCircleIcon className="h-5 w-5"/>}
              {state.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}