// src/lib/actions.tsx

'use server';

import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactTemplate } from '@/emails/ContactTemplate';

// Esta es la definición correcta. Incluye la propiedad 'errors' opcional.
export type FormState = {
  message: string;
  success: boolean;
  errors?: {
    nombre?: string[];
    email?: string[];
    interes?: string[];
    mensaje?: string[];
  };
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  const nombre = formData.get('nombre') as string;
  const email = formData.get('email') as string;
  const telefono = formData.get('telefono') as string | undefined;
  const interes = formData.get('interes') as string | undefined;
  const mensaje = formData.get('mensaje') as string;

  if (!nombre || !email || !mensaje || !interes) {
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
      from: 'Contacto Web <web@czcprojects.com.mx>',
      to: ['contact@czcprojects.com'],
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