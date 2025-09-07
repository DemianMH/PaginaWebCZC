/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    // Esta opción le dice a Vercel que incluya archivos adicionales en el servidor.
    outputFileTracingIncludes: {
      '/cotiza': ['./plantilla-cotizacion.docx'], // Para la ruta /cotiza, incluye este archivo.
    },
  },
};

export default nextConfig;