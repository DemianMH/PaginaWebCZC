import React from 'react';

interface ContactTemplateProps {
  nombre: string;
  email: string;
  telefono?: string;
  interes?: string;
  mensaje: string;
}

export const ContactTemplate: React.FC<ContactTemplateProps> = ({
  nombre,
  email,
  telefono,
  interes,
  mensaje,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
    <h1 style={{ color: '#333' }}>Nuevo Mensaje de Contacto</h1>
    <p>Has recibido un nuevo mensaje a través del formulario de tu sitio web.</p>
    <hr />
    <h2 style={{ color: '#555' }}>Detalles del Contacto:</h2>
    <ul>
      <li><strong>Nombre:</strong> {nombre}</li>
      <li><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></li>
      {telefono && <li><strong>Teléfono:</strong> {telefono}</li>}
      {interes && <li><strong>Servicio de Interés:</strong> {interes}</li>}
    </ul>
    <h2 style={{ color: '#555' }}>Mensaje:</h2>
    <p style={{ backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '5px', whiteSpace: 'pre-wrap' }}>
      {mensaje}
    </p>
    <hr />
    <p style={{ fontSize: '12px', color: '#888' }}>
      Este correo fue enviado automáticamente desde el formulario de contacto.
    </p>
  </div>
);