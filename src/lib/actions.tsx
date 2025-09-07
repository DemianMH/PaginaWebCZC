// src/lib/actions.tsx

'use server';

import React from 'react';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactTemplate } from '@/emails/ContactTemplate';

// Definimos el estado del formulario de manera clara.
export type FormState = {
  message: string;
  success: boolean;
  errors?: Record<string, string[]>; // Para errores de validación
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  const nombre = formData.get('nombre') as string;
  const email = formData.get('email') as string;
  const telefono = formData.get('telefono') as string;
  const interes = formData.get('interes') as string;
  const mensaje = formData.get('mensaje') as string;

  // Validación simple en el servidor para asegurarnos de que los campos no estén vacíos.
  if (!nombre || !email || !telefono || !mensaje || !interes) {
    return {
      message: 'Por favor, completa todos los campos requeridos.',
      success: false,
    };
  }

  try {
    const emailHtml = await render(
      <ContactTemplate
        nombre={nombre}
        email={email}
        telefono={telefono}
        interes={interes}
        mensaje={mensaje}
      />
    );

    const { data, error } = await resend.emails.send({
      // --- ESTE ES EL CAMBIO CLAVE Y DEFINITIVO ---
      // Usamos la dirección de envío por defecto de Resend, que siempre está verificada.
      from: 'Formulario Web CZC <onboarding@resend.dev>',
      to: [process.env.EMAIL_TO!],
      subject: `Nuevo mensaje de: ${nombre}`,
      replyTo: email, // Esto asegura que al responder, le escribas al cliente.
      html: emailHtml,
    });

    if (error) {
      console.error('Error de Resend:', error);
      return {
        message: 'Hubo un error al conectar con el servicio de correo.',
        success: false,
      };
    }

    return {
      message: '¡Gracias por tu mensaje! Te contactaremos pronto.',
      success: true,
    };

  } catch (e) {
    console.error('Error en sendEmail:', e);
    return {
      message: 'Hubo un error inesperado en el servidor.',
      success: false,
    };
  }
}