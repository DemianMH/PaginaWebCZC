import { MetadataRoute } from 'next'

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