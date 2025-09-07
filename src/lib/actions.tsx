'use server';

import React from 'react';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactTemplate } from '@/emails/ContactTemplate';
import { z } from 'zod';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import fs from 'fs';
import path from 'path';

const contactSchema = z.object({
  nombre: z.string().min(3, { message: 'El nombre es requerido.' }),
  email: z.string().email({ message: 'Por favor, ingresa un email válido.' }),
  telefono: z.string().min(10, { message: 'El teléfono debe tener al menos 10 dígitos.' }),
  interes: z.string().min(1, { message: 'Debes seleccionar un área de interés.' }),
  mensaje: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

export type FormState = {
  message: string;
  success: boolean;
  errors?: Record<string, string[] | undefined>;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = contactSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      message: 'Por favor, corrige los errores en el formulario.',
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const { nombre, email, telefono, interes, mensaje } = validatedFields.data;

  try {
    const emailHtml = await render(<ContactTemplate {...validatedFields.data} />);
    await resend.emails.send({
      from: 'Formulario Web CZC <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO!],
      subject: `Nuevo mensaje de: ${nombre}`,
      replyTo: email,
      html: emailHtml,
    });
    return { message: '¡Gracias por tu mensaje! Te contactaremos pronto.', success: true };
  } catch (e) {
    console.error('Error en sendEmail:', e);
    return { message: 'Hubo un error inesperado en el servidor.', success: false };
  }
}

interface QuoteRequestData {
  nombre: string;
  email: string;
  telefono: string;
  empresa?: string;
  servicios: string;
  descripcion: string;
  rfc: string;
}

const QuoteRequestTemplate: React.FC<{ data: QuoteRequestData }> = ({ data }) => (
  <div style={{ fontFamily: 'Arial, sans-serif' }}>
    <h1>Nueva Solicitud de Cotización Recibida</h1>
    <p>Se ha generado una cotización pre-llenada y se adjunta en este correo.</p>
    <p><strong>Cliente:</strong> {data.nombre}</p>
    <p><strong>Email:</strong> {data.email}</p>
    <p><strong>Empresa:</strong> {data.empresa}</p>
    {data.rfc && data.rfc !== 'N/A' && <p><strong>RFC:</strong> {data.rfc}</p>}
  </div>
);

export async function sendQuoteRequest(prevState: FormState, formData: FormData): Promise<FormState> {
  const data = {
    nombre: formData.get('nombre') as string,
    email: formData.get('email') as string,
    telefono: formData.get('telefono') as string,
    empresa: formData.get('empresa') as string,
    rfc: (formData.get('rfc') as string) || 'N/A',
    servicios: formData.get('servicios') as string,
    descripcion: formData.get('descripcion') as string,
    fecha: new Date().toLocaleDateString('es-MX'),
    num_presupuesto: `CZC-${Date.now().toString().slice(-5)}`,
  };

  if (!data.nombre || !data.email || !data.telefono || !data.empresa || !data.servicios || !data.descripcion) {
    return { message: 'Por favor completa todos los campos requeridos.', success: false };
  }
  
  try {
    // --- CAMBIO DEFINITIVO AQUÍ ---
    // Construimos la URL de forma segura, asegurando que tenga el protocolo https://
    const host = process.env.VERCEL_URL || 'localhost:3000';
    const protocol = host.startsWith('localhost') ? 'http://' : 'https://';
    const templateUrl = `${protocol}${host}/plantilla-cotizacion.docx`;
    
    // El resto del código para descargar y procesar el archivo se queda igual
    const response = await fetch(templateUrl);
    if (!response.ok) {
        throw new Error(`No se pudo descargar la plantilla: ${response.statusText}`);
    }
    const content = await response.arrayBuffer();
    
    const zip = new PizZip(Buffer.from(content));
    const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

    doc.render(data);

    const buf = doc.getZip().generate({ type: 'nodebuffer', compression: 'DEFLATE' });
    const emailHtml = await render(<QuoteRequestTemplate data={data} />);

    await resend.emails.send({
      from: 'Sistema de Cotizaciones <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO!],
      subject: `Nueva Cotización Solicitada por: ${data.nombre} (${data.empresa})`,
      replyTo: data.email,
      html: emailHtml,
      attachments: [{ filename: `Cotizacion_${data.empresa.replace(/ /g, '_')}.docx`, content: buf as Buffer }],
    });

    return { message: '¡Gracias! Tu solicitud ha sido enviada. Te contactaremos pronto.', success: true };

  } catch (e: unknown) {
    let errorMessage = 'Error al generar el documento.';
    if (e instanceof Error) {
        errorMessage = e.message;
    }
    console.error("Error al enviar cotización:", e);
    return { message: errorMessage, success: false };
  }
}