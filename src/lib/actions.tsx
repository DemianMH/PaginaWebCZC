'use server';

import React from 'react';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactTemplate } from '@/emails/ContactTemplate';
import fs from 'fs';
import path from 'path';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

export type FormState = {
  message: string;
  success: boolean;
  errors?: Record<string, string[] | undefined>;
};

const resend = new Resend(process.env.RESEND_API_KEY);

// --- TU FUNCIÓN DE CONTACTO (SIN CAMBIOS) ---
export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  const nombre = formData.get('nombre') as string;
  const email = formData.get('email') as string;
  const telefono = formData.get('telefono') as string;
  const interes = formData.get('interes') as string;
  const mensaje = formData.get('mensaje') as string;

  if (!nombre || !email || !telefono || !interes || !mensaje) {
    return { message: 'Por favor, completa todos los campos requeridos.', success: false, };
  }
  try {
    const emailHtml = await render(<ContactTemplate {...{nombre, email, telefono, interes, mensaje}} />);
    await resend.emails.send({
      from: 'Formulario Web CZC <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO!],
      subject: `Nuevo mensaje de: ${nombre}`,
      replyTo: email,
      html: emailHtml,
    });
    return { message: '¡Gracias por tu mensaje! Te contactaremos pronto.', success: true, };
  } catch (e) {
    console.error('Error en sendEmail:', e);
    return { message: 'Hubo un error inesperado en el servidor.', success: false, };
  }
}

// --- LÓGICA PARA LA COTIZACIÓN (CON CAMBIOS) ---
const QuoteRequestTemplate: React.FC<any> = ({ data }) => (
  <div style={{ fontFamily: 'Arial, sans-serif' }}>
    <h1>Nueva Solicitud de Cotización Recibida</h1>
    <p>Se ha generado una cotización pre-llenada y se adjunta en este correo.</p>
    <p><strong>Cliente:</strong> {data.nombre}</p>
    <p><strong>Email:</strong> {data.email}</p>
    <p><strong>Empresa:</strong> {data.empresa}</p>
    {data.rfc_cliente && <p><strong>RFC:</strong> {data.rfc_cliente}</p>}
  </div>
);

export async function sendQuoteRequest(prevState: FormState, formData: FormData): Promise<FormState> {
  const data = {
    nombre: formData.get('nombre') as string,
    email: formData.get('email') as string,
    telefono: formData.get('telefono') as string,
    empresa: formData.get('empresa') as string,
    // --- CAMBIO AQUÍ ---
    rfc_cliente: (formData.get('rfc') as string) || 'N/A', // Cambiado a rfc_cliente
    servicios: formData.get('servicios') as string,
    descripcion: formData.get('descripcion') as string,
    fecha: new Date().toLocaleDateString('es-MX'),
    num_presupuesto: `CZC-${Date.now().toString().slice(-5)}`,
  };

  if (!data.nombre || !data.email || !data.telefono || !data.empresa || !data.servicios || !data.descripcion) {
    return { message: 'Por favor completa todos los campos requeridos.', success: false };
  }
  
  try {
    const templatePath = path.join(process.cwd(), 'public/plantilla-cotizacion.docx');
    const content = fs.readFileSync(templatePath, 'binary');
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

    doc.render(data);

    const buf = doc.getZip().generate({ type: 'nodebuffer', compression: 'DEFLATE' });
    const emailHtml = await render(<QuoteRequestTemplate data={data} />);

    await resend.emails.send({
      from: 'Sistema de Cotizaciones <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO!],
      subject: `Nueva Cotización Solicita por: ${data.nombre} (${data.empresa})`,
      replyTo: data.email,
      html: emailHtml,
      attachments: [{ filename: `Cotizacion_${data.empresa.replace(/ /g, '_')}.docx`, content: buf }],
    });

    return { message: '¡Gracias! Tu solicitud ha sido enviada. Te contactaremos pronto.', success: true };

  } catch (e: any) {
    console.error("Error al enviar cotización:", e);
    return { message: `Error al generar el documento.`, success: false };
  }
}