import { MetadataRoute } from 'next'

// Agrega esta línea para forzar la generación estática
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  // Reemplaza 'https://www.czcprojects.com' con tu dominio real
  const baseUrl = 'https://www.czcprojects.com.mx';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}