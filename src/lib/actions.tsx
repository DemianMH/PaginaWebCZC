// src/lib/actions.tsx

'use server';

import React from 'react';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactTemplate } from '@/emails/ContactTemplate';

export type FormState = {
  message: string;
  success: boolean;
  errors?: {
    nombre?: string[];
    email?: string[];
    telefono?: string[];
    interes?: string[];
    mensaje?: string[];
  };
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  const nombre = formData.get('nombre') as string;
  const email = formData.get('email') as string;
  const telefono = formData.get('telefono') as string;
  const interes = formData.get('interes') as string;
  const mensaje = formData.get('mensaje') as string;

  // ... (código de validación)

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
      // --- AJUSTE FINAL Y DEFINITIVO AQUÍ ---
      // El remitente ahora usa el subdominio que está verificado
      from: 'Contacto Web <web@send.czcprojects.com.mx>',
      to: [process.env.EMAIL_TO!],
      subject: `Nuevo mensaje de: ${nombre}`,
      replyTo: email,
      html: emailHtml,
    });

    if (error) {
      console.error('Error de Resend:', error);
      return {
        message: 'Hubo un error al enviar el correo. Intenta de nuevo.',
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