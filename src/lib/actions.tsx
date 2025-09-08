// src/lib/actions.tsx

'use server';

import React from 'react';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactTemplate } from '@/emails/ContactTemplate';
import { z } from 'zod';
import fs from 'fs';
import path from 'path';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

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

async function sendMail(options: {
  to: string;
  subject: string;
  replyTo: string;
  html: string;
  attachments?: { filename: string; content: Buffer }[];
}) {
  return resend.emails.send({
    from: 'Web CZC Projects <onboarding@resend.dev>',
    to: options.to,
    subject: options.subject,
    replyTo: options.replyTo,
    html: options.html,
    attachments: options.attachments,
  });
}

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = contactSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      message: 'Por favor, corrige los errores en el formulario.',
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  const { nombre, email } = validatedFields.data;

  try {
    const emailHtml = await render(<ContactTemplate {...validatedFields.data} />);
    
    await sendMail({
      to: process.env.EMAIL_TO!,
      subject: `Nuevo mensaje de contacto: ${nombre}`,
      replyTo: email,
      html: emailHtml,
    });

    return { message: '¡Gracias por tu mensaje! Te contactaremos pronto.', success: true };
  } catch (e) {
    console.error('Error en sendEmail:', e);
    return { message: 'Hubo un error inesperado al enviar el mensaje.', success: false };
  }
}

const QuoteRequestTemplate: React.FC<{ data: any }> = ({ data }) => (
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
    const rawData = {
      nombre: formData.get('nombre') as string,
      email: formData.get('email') as string,
      telefono: formData.get('telefono') as string,
      empresa: formData.get('empresa') as string,
      rfc: (formData.get('rfc') as string) || 'N/A',
      servicios: formData.get('servicios') as string,
      descripcion: formData.get('descripcion') as string,
    };
  
    if (!rawData.nombre || !rawData.email || !rawData.telefono || !rawData.empresa || !rawData.servicios || !rawData.descripcion) {
      return { message: 'Por favor completa todos los campos requeridos.', success: false };
    }
    
    try {
      const dataForDoc = {
        ...rawData,
        fecha: new Date().toLocaleDateString('es-MX'),
        num_presupuesto: `CZC-${Date.now().toString().slice(-5)}`,
        descripcion: rawData.descripcion.replace(/\n/g, '</w:t><w:br/><w:t>'),
      };
      
      const templatePath = path.join(process.cwd(), 'plantilla-cotizacion.docx');
  
      if (!fs.existsSync(templatePath)) {
        console.error("¡ERROR CRÍTICO! No se encontró la plantilla .docx en la ruta:", templatePath);
        return { message: 'Error interno del servidor. No se pudo generar el documento.', success: false };
      }
      
      // --- CORRECCIÓN AQUÍ: Leemos el archivo como un Buffer (más robusto) ---
      const content = fs.readFileSync(templatePath);
      
      const zip = new PizZip(content);
      const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });
  
      doc.render(dataForDoc);
  
      const buf = doc.getZip().generate({ type: 'nodebuffer', compression: 'DEFLATE' });
      const emailHtml = await render(<QuoteRequestTemplate data={rawData} />);
  
      await sendMail({
        to: process.env.EMAIL_TO!,
        subject: `Nueva Cotización Solicitada por: ${rawData.nombre} (${rawData.empresa})`,
        replyTo: rawData.email,
        html: emailHtml,
        attachments: [{ filename: `Cotizacion_${rawData.empresa.replace(/ /g, '_')}.docx`, content: buf as Buffer }],
      });
  
      return { message: '¡Gracias! Tu solicitud ha sido enviada. Te contactaremos pronto.', success: true };
  
    } catch (e: unknown) {
      let errorMessage = 'Ocurrió un error al generar el documento de cotización.';
      if (e instanceof Error) {
          errorMessage = e.message;
      }
      console.error("Error al procesar la cotización:", e);
      return { message: errorMessage, success: false };
    }
}