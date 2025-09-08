/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    outputFileTracingIncludes: {
      '/cotiza': ['./plantilla-cotizacion.docx'], 
    },
  },
};

export default nextConfig;