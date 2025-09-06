'use server';

import React from 'react';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactTemplate } from '@/emails/ContactTemplate';
import { z } from 'zod'; // Importamos Zod para la validación

// Creamos un esquema de validación
const contactSchema = z.object({
  nombre: z.string().min(3, { message: 'El nombre es requerido.' }),
  email: z.string().email({ message: 'Por favor, ingresa un email válido.' }),
  // --- CAMBIO AQUÍ: Teléfono ahora es obligatorio y debe tener al menos 10 caracteres ---
  telefono: z.string().min(10, { message: 'El teléfono debe tener al menos 10 dígitos.' }),
  interes: z.string().min(1, { message: 'Debes seleccionar un área de interés.' }),
  mensaje: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

export type FormState = {
  message: string;
  success: boolean;
  errors?: {
    nombre?: string[];
    email?: string[];
    telefono?: string[]; // Añadido para mostrar errores de teléfono
    interes?: string[];
    mensaje?: string[];
  };
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  // Validamos los datos del formulario con el esquema
  const validatedFields = contactSchema.safeParse({
    nombre: formData.get('nombre'),
    email: formData.get('email'),
    telefono: formData.get('telefono'),
    interes: formData.get('interes'),
    mensaje: formData.get('mensaje'),
  });

  // Si la validación falla, regresamos los errores
  if (!validatedFields.success) {
    return {
      message: 'Por favor, corrige los errores en el formulario.',
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Si la validación es exitosa, extraemos los datos
  const { nombre, email, telefono, interes, mensaje } = validatedFields.data;

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